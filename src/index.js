'use strict';
const electron = require('electron');
const isDev = require('electron-is-dev');
const window = require('./window');

// ? for hot reload start

const path = require('path');

// Add this block
if (isDev) {
  require('electron-reload')(__dirname, {
    // This tells it to watch for changes in the 'src' folder
    // and hard-reset the app if the main file changes.
    electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
  });
}


// ? for hot reload end

// ✅ SECURITY: Removed @electron/remote module
// All communication now happens through contextBridge/preload script

require('events').EventEmitter.prototype._maxListeners = 100;

const app = electron.app;

app.setName('Cargo');

if (isDev) {
  require('electron-debug')();
}

let mainWindow;

function onClosed() {
  mainWindow = null;
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (!mainWindow) {
    mainWindow = window(onClosed);
  }
});

// ✅ SECURITY: Removed remoteMain.enable calls
app.on('ready', () => {
  mainWindow = window(onClosed);
});