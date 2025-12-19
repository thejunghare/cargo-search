// src/view/keyboard.js (or wherever this file is)

// 1. Use 'remote' to access backend features from the frontend
const { Menu, MenuItem, dialog,getCurrentWindow } = require('@electron/remote');

module.exports = (emitter, state) => {
  // 2. Create the Menu
  const menu = new Menu();

  // 3. macOS App Menu Fix (Required for Mac)
  if (process.platform === 'darwin') {
    const appMenu = new MenuItem({ role: 'appMenu' });
    menu.append(appMenu);
  }

  // 4. Build your Custom Submenu
  const submenu = Menu.buildFromTemplate([
    {
      label: 'Open a Dialog',
      click: () => dialog.showMessageBox({ message: 'Hello World!' }),
      accelerator: 'CommandOrControl+Alt+R'
    },
    // Example: Re-adding your old 'New Tab' functionality using native menus
    {
      label: 'New Tab',
      click: () => emitter.emit('tabs-create'),
      accelerator: 'CommandOrControl+T'
    },
    {
      label: 'Close Tab',
      click: () => emitter.emit('tabs-remove-current'),
      accelerator: 'CommandOrControl+W'
    },
    {
      label: 'Back',
      accelerator: 'CommandOrControl+Left',
      click: () => {
        emitter.emit('webview-back');
      }
    },
    {
      label: 'Forward',
      accelerator: 'CommandOrControl+Right',
      click: () => {
        emitter.emit('webview-forward');
      }
    },
    { type: 'separator' },
    {
      label: 'Reload',
      accelerator: 'CommandOrControl+R',
      click: () => {
        emitter.emit('webview-reload');
      }
    }
  ]);

  menu.append(new MenuItem({ label: 'Custom Menu', submenu }));

  // 5. Apply the Menu
  Menu.setApplicationMenu(menu);
};