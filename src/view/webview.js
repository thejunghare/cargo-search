const html = require('xou');
const vxv = require('vxv');
const { parse } = require('tldjs');
const normalizeUrl = require('normalize-url');
// Note: Removed Node.js 'url' and 'path' modules - using browser APIs instead

const pages = require('./utils/pages');
const isCargoURL = require('./utils/isCargoURL');
const uuid = require('./utils/uuid');

// ✅ SECURITY: Whitelist of allowed protocols
const ALLOWED_PROTOCOLS = ['http:', 'https:', 'file:', 'data:'];
const DANGEROUS_PROTOCOLS = ['javascript:', 'vbscript:', 'data:', 'file:'];

// ✅ SECURITY: URL validation function
const isValidUrl = (urlString) => {
  try {
    const parsed = new URL(urlString);
    
    // Check against dangerous protocols
    if (DANGEROUS_PROTOCOLS.includes(parsed.protocol)) {
      console.warn(`Blocked navigation to dangerous protocol: ${parsed.protocol}`);
      return false;
    }
    
    // Only allow safe protocols
    if (!ALLOWED_PROTOCOLS.includes(parsed.protocol)) {
      console.warn(`Blocked navigation to unsupported protocol: ${parsed.protocol}`);
      return false;
    }
    
    return true;
  } catch (e) {
    return false;
  }
};

module.exports = (emitter, state) => {
  let focusedView = -1;

  /*
    DOM Listeners
  */
  const didStartLoading = () => {
    emitter.emit('progress-start');
  };

  const didStopLoading = () => {
    const webview = document.querySelector(`#${state.views[focusedView].id}`);
    webview.style.background = 'white';
    emitter.emit('progress-stop');
  };

  const pageTitleUpdated = () => {
    const webview = document.querySelector(`#${state.views[focusedView].id}`);
    state.title = 'Loading';
    state.url = '';

    try {
      state.title = webview.getTitle();
      state.url = webview.getURL();
    } catch (err) { }

    emitter.emit('titlebar-title-updated');
    emitter.emit('tabs-render');
  };

  const didNavigate = e => {
    const webview = document.querySelector(`#${state.views[focusedView].id}`);
    state.url = webview.getURL();
    emitter.emit('titlebar-url-updated');
    setTimeout(() => {
      emitter.emit('history-navigated', { url: state.url, title: webview.getTitle() });
    }, 20);
  };

  const click = () => {
    emitter.emit('titlebar-title-updated');
  };

  const loadingError = err => {
    console.log(err);
    const webview = document.querySelector(`#${state.views[focusedView].id}`);
    webview.setAttribute('src', './pages/error.html');
  };

  const newWindow = e => {
    e.preventDefault();

    try {
      // ✅ SECURITY: Validate URL before opening in new tab
      if (!e.url || !isValidUrl(e.url)) {
        console.warn('Blocked new window with invalid/dangerous URL:', e.url);
        return;
      }

      const protocol = new URL(e.url).protocol;

      if (e.disposition == 'new-window') {
        // Logic commented out in original, kept as is.
        // If uncommented later, ensure BrowserWindow is used from 'remote'
      } else if (
        e.disposition == 'foreground-tab' ||
        e.disposition == 'background-tab' ||
        e.disposition == 'default' ||
        e.disposition == 'other'
      ) {
        emitter.emit('tabs-create', e.url);
      }
    } catch (err) {
      console.error('Error handling new window:', err);
    }
  };

  /*
    Tab management methods
  */
  const changeView = id => {
    const el = state.views[id];

    if (focusedView >= 0) state.views[focusedView].element.style.display = 'none';

    el.element.style.display = 'block';
    el.element.focus();

    focusedView = id;

    pageTitleUpdated();

    emitter.emit('tabs-render');
  };

  const create = src => {
    const id = '_wv_' + uuid();
    src = src || './pages/home.html';

    const viewElement = html`<div style="display: none;">
      <webview id="${id}" src="${src
      }" allowpopups autosize style="width: 100%; height: calc(100vh - 40px);"></webview>
    </div>`;

    document.body.appendChild(viewElement);

    state.views.push({
      element: viewElement,
      id
    });

    changeView(state.views.length - 1);

    const webview = document.querySelector(`#${id}`);

    webview.addEventListener('did-start-loading', didStartLoading);
    webview.addEventListener('did-stop-loading', didStopLoading);
    webview.addEventListener('page-title-updated', pageTitleUpdated);
    webview.addEventListener('did-navigate', didNavigate);
    webview.addEventListener('click', click);
    webview.addEventListener('did-fail-load', loadingError);
    // webview.addEventListener('new-window', newWindow);

    return state.views.length - 1;
  };

  const remove = viewIndex => {
    const el = state.views[viewIndex];

    const webview = document.querySelector(`#${el.id}`);

    webview.removeEventListener('did-start-loading', didStartLoading);
    webview.removeEventListener('did-stop-loading', didStopLoading);
    webview.removeEventListener('page-title-updated', pageTitleUpdated);
    webview.removeEventListener('did-navigate', didNavigate);
    webview.removeEventListener('click', click);
    webview.removeEventListener('did-fail-load', loadingError);
    // webview.removeEventListener('new-window', newWindow);

    state.views.splice(viewIndex, 1);
    focusedView = 0;

    el.element.remove();

    if (state.views.length == 0) {
      emitter.emit('tabs-db-flush');

      // ✅ FIX: Use window.close() instead of remote
      window.close();
    }

    // ✅ FIX: Use different variable name to avoid shadowing
    let newIndex = viewIndex - 1;

    if (newIndex < 0) {
      newIndex = 0;
    }

    changeView(newIndex);
  };
  /*
    DarkMode 
  */
  const changeTheme = name => {
    state.theme = name;
    document.getElementById('theme').setAttribute('href', './static/theme/' + state.theme + '.css');
  };

  /*
    Events
  */
  emitter.on('webview-create', create);
  emitter.on('webview-remove', remove);
  emitter.on('webview-change', changeView);

  emitter.on('webview-set-focus', () => {
    const webview = document.querySelector(`#${state.views[focusedView].id}`);
    webview.focus();
  });

  emitter.on('webview-devtools', () => {
    const webview = document.querySelector(`#${state.views[focusedView].id}`);
    if (!webview) return;

    console.log('DevTools Shortcut Triggered');
    console.log('isDevToolsOpened:', webview.isDevToolsOpened());

    if (webview.isDevToolsOpened()) {
      webview.closeDevTools();
      console.log('Closing DevTools');
    } else {
      webview.openDevTools({ mode: 'bottom' });
      console.log('Opening DevTools');
    }
  });

  emitter.on('webview-back', () => {
    const webview = document.querySelector(`#${state.views[focusedView].id}`);
    if (webview && webview.canGoBack()) {
      webview.goBack();
    }
  });

  emitter.on('webview-forward', () => {
    const webview = document.querySelector(`#${state.views[focusedView].id}`);
    if (webview && webview.canGoForward()) {
      webview.goForward();
    }
  });

  emitter.on('webview-reload', () => {
    const webview = document.querySelector(`#${state.views[focusedView].id}`);
    if (webview) {
      webview.reload();
    }
  });

  emitter.on('webview-home', () => {
    const webview = document.querySelector(`#${state.views[focusedView].id}`);
    webview.setAttribute('src', './pages/home.html#' + state.theme);
  });

  emitter.on('webview-about', () => {
    const webview = document.querySelector(`#${state.views[focusedView].id}`);
    webview.setAttribute('src', './pages/about.html');
  });

  emitter.on('navigate', options => {
    try {
      const webview = document.querySelector(`#${state.views[focusedView].id}`);
      if (!webview) {
        console.error('No webview found for navigation');
        return;
      }
      webview.focus();

      let slug = options.slug;

      // ✅ SECURITY: Validate URL before any processing
      if (!slug || typeof slug !== 'string') {
        console.error('Invalid URL provided:', slug);
        return;
      }

      // Trim whitespace
      slug = slug.trim();

      // ✅ SECURITY: Check for dangerous protocols before normalization
      const lowerSlug = slug.toLowerCase();
      if (lowerSlug.startsWith('javascript:') || 
          lowerSlug.startsWith('vbscript:') || 
          lowerSlug.startsWith('data:')) {
        console.warn('Blocked navigation to dangerous protocol in URL:', slug);
        return;
      }

      // ✅ SECURITY: Only allow file:// URLs for internal pages
      if (slug.startsWith('file:///')) {
        // Validate it's one of our internal pages
        const isInternalPage = Object.values(pages).some(page => 
          slug.includes(page)
        );
        
        if (isInternalPage) {
          return webview.loadURL(slug);
        } else {
          console.warn('Blocked navigation to unauthorized file:', slug);
          return;
        }
      }

      const url = normalizeUrl(slug);
      const parsed = parse(url, true);

      // ✅ SECURITY: Final validation before navigation
      if (!isValidUrl(url)) {
        console.warn('URL failed validation:', url);
        return;
      }

      if (!slug.startsWith('http://') && !slug.startsWith('https://')) {
        slug = 'http://' + slug;
      }

      if (parsed.domain != null && parsed.isValid == true) {
        if (pages[parsed.domain] != null) {
          webview.setAttribute('src', pages[parsed.domain]);
        } else {
          webview.loadURL(slug);
        }
      } else {
        slug = options.expand
          ? `http://www.${options.slug}.com`
          : `https://duckduckgo.com/?q=${encodeURIComponent(options.slug)}`;
        webview.loadURL(slug);
      }
    } catch (err) {
      console.error('Error during navigation:', err);
    }
  });

  emitter.on('tabs-next', () => {
    if (focusedView + 1 < state.views.length) {
      changeView(focusedView + 1);
    }
  });

  emitter.on('tabs-prev', () => {
    if (focusedView - 1 >= 0) {
      changeView(focusedView - 1);
    }
  });

  emitter.on('tabs-go-to', id => {
    if (id < state.views.length && id >= 0) {
      changeView(id);
    }
  });

  emitter.on('tabs-last', () => {
    changeView(state.views.length - 1);
  });

  emitter.on('dark-mode', () => {
    if (state.theme === 'dark') {
      changeTheme('light');
    } else {
      changeTheme('dark');
    }
  });
};