// Note: With contextIsolation, we cannot use Node.js built-in modules like 'path'
// All dependencies must be npm packages that work in the browser/renderer

// Mitt might export as default or named export depending on bundle format
const mittModule = require('mitt');
const mitt = mittModule.default || mittModule;

// Use localStorage for persistence (more reliable in Electron renderer)
const storage = {
  get: (key) => {
    try {
      const val = localStorage.getItem(key);
      return Promise.resolve(val ? JSON.parse(val) : undefined);
    } catch (e) {
      return Promise.reject(e);
    }
  },
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  }
};

const webview = require('./view/webview');
const keyboard = require('./view/keyboard');
const menu = require('./view/menu');
const titlebar = require('./view/titlebar');
const tabs = require('./view/tabs');
const progress = require('./view/progress');
const history = require('./view/history');
// const onboarding = require('./view/onboarding');

const emitter = mitt();
// const store = new Store();

const state = {
  url: 'https://home.cargo',
  views: [],
  theme: 'light',
  tabsInterval: null // Store interval ID for cleanup
  // store
};

// ✅ FIX: Initialize components when DOM is ready to avoid race conditions
document.addEventListener('DOMContentLoaded', () => {
  titlebar(emitter, state);
  progress(emitter);
  history(emitter);
  webview(emitter, state);
  menu(emitter, state);
  keyboard(emitter, state);
  // onboarding(emitter, state);

  setTimeout(() => {
    tabs(emitter, state);
  }, 200);

  // ✅ FIX: Focus after DOM is ready
  const urlbar = document.querySelector('.urlbar');
  if (urlbar) {
    urlbar.focus();
  }

  // ✅ FIX: Add type checking to prevent errors - use localStorage
  storage.get('tabs').then(val => {
    // ✅ FIX: Check if val is undefined or not an array
    if (!Array.isArray(val)) {
      storage.set('tabs', []);
      emitter.emit('webview-create');
      return;
    }

    if (val.length === 0) {
      emitter.emit('webview-create');
    } else {
      for (let v of val) {
        emitter.emit('webview-create', v);
      }
    }
  }).catch(err => {
    console.warn('Storage unavailable, starting fresh:', err.message);
    // Fallback: create a new tab
    emitter.emit('webview-create');
  });

  // ✅ FIX: Store interval ID for cleanup (fixes memory leak)
  state.tabsInterval = setInterval(() => {
    try {
      const tabs = [];
      
      for (let view of state.views) {
        const webviewEl = document.querySelector('#' + view.id);
        if (webviewEl) {
          tabs.push(webviewEl.getURL());
        }
      }

      storage.set('tabs', tabs).catch(err => {
        // Silently fail - don't spam console
      });
    } catch (err) {
      // Silently fail
    }
  }, 500);
});

// ✅ FIX: Cleanup interval on window close to prevent memory leak
window.addEventListener('beforeunload', () => {
  if (state.tabsInterval) {
    clearInterval(state.tabsInterval);
    state.tabsInterval = null;
  }
});

emitter.on('tabs-db-flush', () => {
  storage.set('tabs', []).catch(err => {
    // Silently fail
  });
});
