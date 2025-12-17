'use strict';
const electron = require('electron');
const isDev = require('electron-is-dev');
const window = require('./window');

// 1. IMPORT AND INITIALIZE REMOTE MODULE
// This creates the internal "server" that listens for commands from the window
const remoteMain = require('@electron/remote/main');
remoteMain.initialize();

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
    // 2. ENABLE REMOTE FOR THE WINDOW
    // This gives the specific window permission to talk to the main process
    remoteMain.enable(mainWindow.webContents);
  }
});

app.on('ready', () => {
  mainWindow = window(onClosed);
  // 3. ENABLE REMOTE FOR THE WINDOW
  // (We must do this every time the window is created)
  remoteMain.enable(mainWindow.webContents);
});