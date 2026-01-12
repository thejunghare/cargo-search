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
  history: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>'
};

const topbarStyle = vxv`
width: 100%;
-webkit-app-region: drag;
z-index: 9999;
position: relative;

& .bar {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding-top: 14px; /* Increase top padding for traffic lights */
  height: 54px;      /* Taller header */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 80px; 
  padding-right: 24px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03); /* Soft, deep shadow */
  border-bottom: 1px solid rgba(0,0,0,0.05); /* Very subtle border */
}

& .controls {
  display: flex;
  align-items: center;
  gap: 12px; /* More breathing room */
  -webkit-app-region: no-drag;
}

& .btn {
  background: transparent;
  border: none;
  cursor: pointer;
  color: #5f6368;
  padding: 8px; /* Larger hit area */
  border-radius: 8px; /* Softer corners */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(0,0,0,0.06);
    color: #000;
    transform: translateY(-1px); /* Micro-interaction */
  }
  
  &:active {
    transform: translateY(0px);
  }
}

& .input-container {
  flex: 1;
  text-align: center;
  margin: 0 24px;
}

& .input {
  text-align: center;
  background: #f1f3f4;
  color: #202124;
  padding: 10px 20px;
  width: 100%;
  max-width: 600px;
  border: 1px solid transparent;
  border-radius: 12px; /* Modern curve */
  outline: none;
  font-size: 13px;
  font-weight: 500;
  transition: all .2s cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-app-region: no-drag;
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.02);

  &:hover {
    background: #e8eaed;
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.05);
  }

  &:focus {
    background: white;
    border-color: #1a73e8; /* Accent color focus */
    box-shadow: 0 2px 8px rgba(26,115,232,0.15);
    text-align: left;
    padding-left: 20px;
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
    history: 'View History'
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
      document.querySelector('.urlbar').value = state.title;
    }
  });

  emitter.on('titlebar-url-updated', () => {
    if (state.hovering) {
      document.querySelector('.urlbar').value = betterUrl(state.url);
    }
  });

  const urlInput = document.querySelector('.urlbar');

  urlInput.addEventListener('mouseover', () => {
    urlInput.value = betterUrl(state.url);
    urlInput.focus();
    urlInput.select();
    state.hovering = true;
  });

  urlInput.addEventListener('mouseleave', () => {
    urlInput.value = state.title;
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
