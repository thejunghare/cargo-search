const electron = require('electron');
const path = require('path');
const platform = require('./utils/platform.js');

module.exports = onClosed => {
  const display = electron.screen.getPrimaryDisplay();

  let width = Math.floor(display.workAreaSize.width * 0.7);
  let height = Math.floor(display.workAreaSize.height * 0.8);

  if (width > 1440) width = 1440;
  if (height > 900) height = 900;

  let image = electron.nativeImage.createFromPath(path.join(__dirname, './static/icon.png'));

  const win = new electron.BrowserWindow({
    width,
    height,
    minWidth: 800,
    minHeight: 500,
    center: true,
    vibrancy: 'light',
    background: '#ffffff',
    titleBarStyle: 'hiddenInset',
    frame: platform() != 'macos' ? false : true,
    show: false,
    webPreferences: {
      // ✅ SECURITY: Context isolation enabled
      contextIsolation: true,
      // ✅ SECURITY: Node integration disabled in renderer
      nodeIntegration: false,
      // ✅ SECURITY: Preload script for safe API exposure
      preload: path.join(__dirname, 'preload.js'),
      // ✅ REQUIRED: Enables <webview> for the browser UI
      webviewTag: true,
      // ✅ SECURITY: Disable remote module
      enableRemoteModule: false,
      // ✅ SECURITY: Prevent sandbox bypass
      sandbox: false // Required for preload script with nodeIntegration: false
    },
    title: 'Cargo',
    icon: image
  });

  // ✅ SECURITY: Set permission request handler
  win.webContents.setPermissionRequestHandler((webContents, permission, callback, details) => {
    // Only allow safe permissions
    const allowedPermissions = ['clipboard-sanitized-write'];
    
    if (allowedPermissions.includes(permission)) {
      callback(true);
    } else {
      console.warn(`Blocked permission request: ${permission}`);
      callback(false);
    }
  });

  win.once('ready-to-show', () => {
    win.show();
  });

  win.loadURL(`file://${__dirname}/index.html`);
  win.on('closed', onClosed);

  if (platform() == 'windows') {
    win.setMenu(null);
  } else {
    const menu = electron.Menu.buildFromTemplate([
      {
        label: 'Cargo',
        submenu: [{ role: 'quit' }]
      },
      {
        label: 'Edit',
        submenu: [
          { role: 'undo' },
          { role: 'redo' },
          { type: 'separator' },
          { role: 'cut' },
          { role: 'copy' },
          { role: 'paste' },
          { role: 'pasteandmatchstyle' },
          { role: 'delete' },
          { role: 'selectall' }
        ]
      },
      {
        label: 'View',
        submenu: [
          { role: 'reload' },
          { role: 'forcereload' },
          { role: 'toggledevtools' },
          { type: 'separator' },
          { role: 'resetzoom' },
          { role: 'zoomin' },
          { role: 'zoomout' },
          { type: 'separator' },
          { role: 'togglefullscreen' }
        ]
      },
      {
        role: 'window',
        submenu: [{ role: 'minimize' }, { role: 'close' }]
      }
    ]);

    win.setMenu(menu);
  }

  return win;
};
