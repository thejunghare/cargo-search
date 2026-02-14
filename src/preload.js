// Preload script for secure IPC communication
// This runs in an isolated context with access to both Node.js and the renderer

const { contextBridge, ipcRenderer } = require('electron');

// Whitelist of valid channels for security
const validChannels = {
  send: [
    'tabs-create',
    'tabs-remove-current',
    'tabs-go-to',
    'webview-back',
    'webview-forward',
    'webview-reload',
    'webview-home',
    'webview-about',
    'webview-devtools',
    'webview-set-focus',
    'webview-change',
    'webview-remove',
    'history-toggle',
    'history-navigated',
    'navigate',
    'progress-start',
    'progress-stop',
    'titlebar-title-updated',
    'titlebar-url-updated',
    'tabs-render',
    'tabs-db-flush',
    'dark-mode'
  ],
  receive: [
    'tabs-create',
    'tabs-remove-current',
    'tabs-go-to',
    'webview-back',
    'webview-forward',
    'webview-reload',
    'webview-home',
    'webview-about',
    'webview-devtools',
    'webview-set-focus',
    'webview-change',
    'webview-remove',
    'history-toggle',
    'history-navigated',
    'navigate',
    'progress-start',
    'progress-stop',
    'titlebar-title-updated',
    'titlebar-url-updated',
    'tabs-render',
    'tabs-db-flush',
    'dark-mode'
  ]
};

// Expose safe APIs to the renderer process
contextBridge.exposeInMainWorld('electronAPI', {
  // Send messages to main process
  send: (channel, data) => {
    if (validChannels.send.includes(channel)) {
      ipcRenderer.send(channel, data);
    } else {
      console.warn(`Blocked attempt to send on invalid channel: ${channel}`);
    }
  },

  // Receive messages from main process
  receive: (channel, func) => {
    if (validChannels.receive.includes(channel)) {
      // Deliberately strip event as it includes `sender`
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    } else {
      console.warn(`Blocked attempt to receive on invalid channel: ${channel}`);
    }
  },

  // Remove listeners
  removeListener: (channel, func) => {
    if (validChannels.receive.includes(channel)) {
      ipcRenderer.removeListener(channel, func);
    }
  },

  // Get platform info (safe to expose)
  platform: process.platform,

  // Check if running in development
  isDev: process.env.NODE_ENV === 'development'
});

// Expose minimal Node.js APIs needed by the app
contextBridge.exposeInMainWorld('nodeAPI', {
  // Path operations (if needed)
  path: {
    join: (...args) => require('path').join(...args)
  }
});
