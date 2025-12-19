// src/view/keyboard.js

const { Menu, MenuItem, dialog } = require('@electron/remote');

module.exports = (emitter, state) => {
  const menu = new Menu();

  // macOS App Menu (required)
  if (process.platform === 'darwin') {
    menu.append(new MenuItem({ role: 'appMenu' }));
  }

  // Build submenu as ARRAY first
  const submenuTemplate = [
    {
      label: 'Open a Dialog',
      accelerator: 'CommandOrControl+Alt+R',
      click: () => dialog.showMessageBox({ message: 'Hello World!' })
    },
    {
      label: 'New Tab',
      accelerator: 'CommandOrControl+T',
      click: () => emitter.emit('tabs-create')
    },
    {
      label: 'Close Tab',
      accelerator: 'CommandOrControl+W',
      click: () => emitter.emit('tabs-remove-current')
    },
    {
      label: 'Back',
      accelerator: 'CommandOrControl+Left',
      click: () => emitter.emit('webview-back')
    },
    {
      label: 'Forward',
      accelerator: 'CommandOrControl+Right',
      click: () => emitter.emit('webview-forward')
    },
    { type: 'separator' },
    {
      label: 'Reload',
      accelerator: 'CommandOrControl+R',
      click: () => emitter.emit('webview-reload')
    },
    {
      label: 'Last Tab',
      accelerator: 'CommandOrControl+0',
      click: () => emitter.emit('tabs-last')
    }
  ];

  // Cmd/Ctrl + 1–9 → Switch Tabs
  for (let i = 1; i <= 9; i++)
     {
    submenuTemplate.push({
      label: `Tab ${i}`,
      accelerator: `CommandOrControl+${i}`,
      click: () => emitter.emit('tabs-go-to', i - 1)
    });
  }

  const submenu = Menu.buildFromTemplate(submenuTemplate);

  menu.append(new MenuItem({ label: 'Custom Menu', submenu }));

  Menu.setApplicationMenu(menu);
};