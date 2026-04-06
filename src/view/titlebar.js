const html = require('xou');
const vxv = require('vxv');
const vkey = require('vkey');
const betterUrl = require('./utils/betterURL');

// require('electron-titlebar');

const icons = {
  back: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>',
  forward: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
  reload: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
  home: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  newTab: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',
  history: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
  layout: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>'
};

const topbarStyle = vxv`
width: 100%;
-webkit-app-region: drag;
z-index: 9999;
position: relative;

& .bar {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px) saturate(180%);
  padding-top: 10px;
  height: 48px;      /* Slightly shorter */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 80px; 
  padding-right: 20px;
  border-bottom: 1px solid rgba(0,0,0,0.03);
}

& .controls {
  display: flex;
  align-items: center;
  gap: 8px;
  -webkit-app-region: no-drag;
}

& .btn {
  background: transparent;
  border: none;
  cursor: pointer;
  color: #70757a;
  padding: 6px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  opacity: 0.7;
  
  &:hover {
    background: rgba(0,0,0,0.04);
    color: #202124;
    opacity: 1;
  }
}

& .input-container {
  flex: 1;
  text-align: center;
  margin: 0 16px;
  max-width: 600px;
}

& .input {
  text-align: center;
  background: rgba(0,0,0,0.03);
  color: #202124;
  padding: 8px 16px;
  width: 100%;
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: 13px;
  font-weight: 400;
  transition: all .3s cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-app-region: no-drag;

  &:hover {
    background: rgba(0,0,0,0.05);
  }

  &:focus {
    background: #fff;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    text-align: left;
  }
}
`;

module.exports = (emitter, state) => {
  // Tooltip map
  const tooltips = {
    back: 'Go Back',
    forward: 'Go Forward',
    reload: 'Reload Page',
    home: 'Go Home',
    newTab: 'New Tab',
    history: 'View History',
    layout: 'Toggle Tab Layout'
  };

  // Helper to create button with icon
  const btn = (iconName, action) => {
    // Create a temporary container to parse the SVG string
    const div = document.createElement('div');
    div.innerHTML = icons[iconName];
    const svg = div.firstChild;

    return html`<button class="btn" onclick=${action} title="${tooltips[iconName] || iconName}">
      ${svg}
    </button>`;
  };

  const element = html`<div>
    <div id="titlebar" class="${topbarStyle}">
      <div class="bar">
        <!-- Left Controls -->
        <div class="controls">
          ${btn('back', () => emitter.emit('webview-back'))}
          ${btn('forward', () => emitter.emit('webview-forward'))}
          ${btn('reload', () => emitter.emit('webview-reload'))}
          ${btn('home', () => emitter.emit('webview-home'))}
        </div>

        <!-- Address Bar -->
        <div class="input-container">
          <input type="text" class="input urlbar" value="${state.url}">
        </div>

        <!-- Right Controls -->
        <div class="controls">
          ${btn('layout', () => {
    const nextLayout = state.tabLayout === 'horizontal' ? 'vertical' : 'horizontal';
    emitter.emit('tabs-layout-change', nextLayout);
  })}
          ${btn('newTab', () => emitter.emit('tabs-create'))}
          ${btn('history', () => emitter.emit('history-toggle'))}
        </div>
      </div>
    </div>
  </div>`;

  document.body.appendChild(element);

  // Address Bar Logic
  emitter.on('titlebar-title-updated', () => {
    if (!state.hovering) {
      const urlbar = document.querySelector('.urlbar');
      if (urlbar) {
        urlbar.value = state.title || '';
      }
    }
  });

  emitter.on('titlebar-url-updated', () => {
    if (state.hovering) {
      const urlbar = document.querySelector('.urlbar');
      if (urlbar) {
        urlbar.value = betterUrl(state.url);
      }
    }
  });

  const urlInput = document.querySelector('.urlbar');

  // ✅ FIX: Add null check for urlInput
  if (!urlInput) {
    console.error('URL input element not found');
    return;
  }

  urlInput.addEventListener('mouseover', () => {
    urlInput.value = betterUrl(state.url);
    urlInput.focus();
    urlInput.select();
    state.hovering = true;
  });

  urlInput.addEventListener('mouseleave', () => {
    urlInput.value = state.title || '';
    urlInput.blur();
    emitter.emit('webview-set-focus');
    state.hovering = false;
  });

  urlInput.addEventListener('keydown', ev => {
    if (vkey[ev.keyCode] == '<enter>') {
      ev.preventDefault();
      emitter.emit('navigate', {
        slug: urlInput.value,
        expand: ev.ctrlKey
      });
    }
  }, false);
};
