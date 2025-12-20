'use strict';
const electron = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const window = require('./window');
const { app, ipcMain } = electron;

// Hot reload
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
});

// Remote
const remoteMain = require('@electron/remote/main');
remoteMain.initialize();

require('events').EventEmitter.prototype._maxListeners = 100;

app.setName('Cargo');

if (isDev) {
  require('electron-debug')();
}

let mainWindow;
let historyStore = [];

function onClosed() {
  mainWindow = null;
}

/* -------------------- IPC (REGISTER FIRST) -------------------- */

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

  // Tell renderer to navigate
  mainWindow.webContents.send('history-go', url);
});

/* -------------------- APP LIFECYCLE -------------------- */

app.on('ready', () => {
  mainWindow = window(onClosed);
  remoteMain.enable(mainWindow.webContents);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (!mainWindow) {
    mainWindow = window(onClosed);
    remoteMain.enable(mainWindow.webContents);
  }
});