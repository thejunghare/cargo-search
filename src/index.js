'use strict';
const electron = require('electron');
const isDev = require('electron-is-dev');
const window = require('./window');

// ? for hot reload start

const path = require('path');

// Add this block
require('electron-reload')(__dirname, {
  // This tells it to watch for changes in the 'src' folder
  // and hard-reset the app if the main file changes.
  electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
});


// ? for hot reload end

// 1. IMPORT AND INITIALIZE REMOTE MODULE
// This creates the internal "server" that listens for commands from the window
const remoteMain = require('@electron/remote/main');
remoteMain.initialize();

require('events').EventEmitter.prototype._maxListeners = 100;

const app = electron.app;

const { ipcMain } = electron;
let historyStore = [];

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

// ! Fix - Uncaught TypeError: Cannot read properties of undefined (reading 'getCurrentWindow')at HTMLDocument.installTitlebar 
app.on('ready', () => {
  mainWindow = window(onClosed);
  // 3. ENABLE REMOTE FOR THE WINDOW
  // (We must do this every time the window is created)
  remoteMain.enable(mainWindow.webContents);
});
ipcMain.on('history-add', (_event, item) => {
  if (!item || !item.url) return;

  historyStore.push({
    url: item.url,
    title: item.title || '',
    time: Date.now()
  });

  if (historyStore.length > 500) {
    historyStore.shift();
  }
});

ipcMain.on('history-request', event => {
  event.sender.send('history-data', historyStore);
});

ipcMain.on('history-navigate', (_event, url) => {
  if (!mainWindow) return;

  mainWindow.webContents.send('navigate', { slug: url });
});