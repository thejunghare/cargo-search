// src/view/keyboard.js

// ✅ SECURITY: Removed @electron/remote dependency
// Keyboard shortcuts are now handled via DOM event listeners for better security

module.exports = (emitter, state) => {
  // ✅ FIX: Use DOM event listeners instead of remote Menu API
  // This avoids security vulnerabilities from @electron/remote

  const handleKeyDown = (ev) => {
    const key = ev.key.toLowerCase();
    const isCmdOrCtrl = ev.metaKey || ev.ctrlKey;
    const isShift = ev.shiftKey;

    // Command/Ctrl + T: New Tab
    if (isCmdOrCtrl && key === 't' && !isShift) {
      ev.preventDefault();
      emitter.emit('tabs-create');
      return;
    }

    // Command/Ctrl + W: Close Tab
    if (isCmdOrCtrl && key === 'w' && !isShift) {
      ev.preventDefault();
      emitter.emit('tabs-remove-current');
      return;
    }

    // Command/Ctrl + R: Reload
    if (isCmdOrCtrl && key === 'r' && !isShift) {
      ev.preventDefault();
      emitter.emit('webview-reload');
      return;
    }

    // Command/Ctrl + Left Arrow: Back
    if (isCmdOrCtrl && key === 'arrowleft' && !isShift) {
      ev.preventDefault();
      emitter.emit('webview-back');
      return;
    }

    // Command/Ctrl + Right Arrow: Forward
    if (isCmdOrCtrl && key === 'arrowright' && !isShift) {
      ev.preventDefault();
      emitter.emit('webview-forward');
      return;
    }

    // Command/Ctrl + Shift + D: Dev Tools
    if (isCmdOrCtrl && isShift && key === 'd') {
      ev.preventDefault();
      emitter.emit('webview-devtools');
      return;
    }

    // Command/Ctrl + Shift + A: About
    if (isCmdOrCtrl && isShift && key === 'a') {
      ev.preventDefault();
      emitter.emit('webview-about');
      return;
    }

    // Command/Ctrl + Shift + H: Home
    if (isCmdOrCtrl && isShift && key === 'h') {
      ev.preventDefault();
      emitter.emit('webview-home');
      return;
    }

    // Command/Ctrl + H: History (only without shift to avoid conflict with hide)
    if (isCmdOrCtrl && key === 'h' && !isShift) {
      ev.preventDefault();
      emitter.emit('history-toggle');
      return;
    }

    // Command/Ctrl + 1-9: Switch to tab
    if (isCmdOrCtrl && !isShift && key >= '1' && key <= '9') {
      ev.preventDefault();
      const tabIndex = parseInt(key) - 1;
      emitter.emit('tabs-go-to', tabIndex);
      return;
    }
  };

  // Attach global keyboard listener
  document.addEventListener('keydown', handleKeyDown);

  // Cleanup function (can be called if needed)
  const cleanup = () => {
    document.removeEventListener('keydown', handleKeyDown);
  };

  // Store cleanup function on state for potential future use
  state.cleanupKeyboard = cleanup;
};