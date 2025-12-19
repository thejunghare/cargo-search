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

    // TODO: Fix this
    // {
    //   label: 'Last Tab',
    //   accelerator: 'CommandOrControl+0',
    //   click: () => emitter.emit('tabs-last')
    // }

    // TODO: command + shift + d / ctrl + shift + d
    , {
      label: "Open Dev Tools",
      accelerator: "Command+Shift+D",
      click: () => emitter.emit("webview-devtools")
    }

    // TODO: command + shift + a / ctrl + shift + a
    , {
      label: "Open About",
      accelerator: "Command+Shift+A",
      click: () => emitter.emit("webview-about")
    },

    // TODO: command + shift + h / ctrl + shift + h
    {
      label: "Open Home",
      accelerator: "Command+Shift+H",
      click: () => emitter.emit("webview-home")
    },

    // TODO: command  + h / ctrl  + h
    {
      label: "Open History",
      accelerator: "Command+H",
      click: () => emitter.emit("history-toggle")
    },
    {
  label: 'Previous Tab',
  accelerator: 'CommandOrControl+Shift+Left',
  click: () => {
    emitter.emit('tabs-prev');
  }
},
{
  label: 'Previous Tab',
  accelerator: 'CommandOrControl+Shift+Left',
  click: () => {
    emitter.emit('tabs-prev');
  }
},
{
  label: 'Next Tab',
  accelerator: 'CommandOrControl+Shift+right',
  click: () => {
    emitter.emit('tabs-next');
  }
}
  ];

  // ? Cmd/Ctrl + 1–9 → Switch Tabs
  for (let i = 1; i <= 9; i++)
     {
    submenuTemplate.push({
      label: `Tab ${i}`,
      accelerator: `CommandOrControl+${i}`,
      click: () => emitter.emit('tabs-go-to', i - 1)
    });
  }

  const submenu = Menu.buildFromTemplate(submenuTemplate);

  menu.append(new MenuItem({ label: 'File', submenu }));

  Menu.setApplicationMenu(menu);
};