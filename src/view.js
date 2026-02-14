const path = require('path');
module.paths.push(path.resolve('../node_modules'));

const mitt = require('mitt');
const keyval = require('idb-keyval');
// const Store = require('electron-store');

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

  // ✅ FIX: Add type checking to prevent errors
  keyval.get('tabs').then(val => {
    // ✅ FIX: Check if val is undefined or not an array
    if (!Array.isArray(val)) {
      keyval.set('tabs', []);
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
    console.error('Error loading tabs from storage:', err);
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

      keyval.set('tabs', tabs).catch(err => {
        console.error('Error saving tabs:', err);
      });
    } catch (err) {
      console.error('Error in tab save interval:', err);
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
  keyval.set('tabs', []).catch(err => {
    console.error('Error flushing tabs:', err);
  });
});
