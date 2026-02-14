# Cargo Browser - Security Audit & Code Review

**Date**: 2026-02-14  
**Project**: Cargo - A browser with a really thin UI  
**Status**: Critical Security Issues Found

---

## 🔴 CRITICAL SECURITY ISSUES

### 1. Insecure WebView Configuration (src/window.js:29-30)
**Severity**: CRITICAL  
**Risk**: Remote Code Execution (RCE), Privilege Escalation

**Issue**: 
```javascript
nodeIntegration: true,  // ⚠️ DANGEROUS
contextIsolation: false, // ⚠️ DANGEROUS
```

- `nodeIntegration: true` exposes Node.js APIs to renderer process
- `contextIsolation: false` allows renderer to access main process APIs
- Combined, malicious web content can execute arbitrary system commands

**Impact**:
- Any XSS vulnerability becomes a full system compromise
- Malicious websites can read/write files, execute commands
- Complete sandbox bypass

**Fix**:
- Enable `contextIsolation: true`
- Disable `nodeIntegration: false`
- Use preload scripts with `contextBridge` for safe API exposure

---

### 2. No Content Security Policy (src/index.html)
**Severity**: HIGH  
**Risk**: Cross-Site Scripting (XSS)

**Issue**: Missing CSP meta tag allows inline scripts and external resources without restrictions.

**Impact**:
- XSS attacks can inject malicious scripts
- Data exfiltration
- Session hijacking

**Fix**:
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline';">
```

---

### 3. Using Deprecated @electron/remote Module
**Severity**: HIGH  
**Risk**: Remote Code Execution

**Issue**:
```javascript
// src/index.js:22
const remoteMain = require('@electron/remote/main');

// src/view/webview.js:9
const remote = require('@electron/remote');
```

The `@electron/remote` module is deprecated due to security vulnerabilities and performance issues.

**Impact**:
- Arbitrary code execution from renderer
- Difficult to audit security
- Performance degradation

**Fix**: Migrate to IPC (Inter-Process Communication) using `ipcMain`/`ipcRenderer`.

---

### 4. Missing Permission Handler (src/window.js)
**Severity**: MEDIUM  
**Risk**: Unauthorized Access to System Resources

**Issue**: No `setPermissionRequestHandler` for webview permissions.

**Impact**:
- Websites can request camera, microphone, location without user consent
- Notifications can be spammed
- USB/Bluetooth devices can be accessed

**Fix**:
```javascript
win.webContents.setPermissionRequestHandler((webContents, permission, callback) => {
  // Only allow specific permissions
  callback(permission === 'clipboard-sanitized-write');
});
```

---

### 5. URL Protocol Injection Risk (src/view/webview.js:241-247)
**Severity**: MEDIUM  
**Risk**: Local File Access

**Issue**:
```javascript
const url = normalizeUrl(slug);
// ... later ...
if (url.startsWith('file:///')) {
  return webview.loadURL(slug);
}
```

Protocol check happens AFTER normalization, potentially allowing file:// URLs.

**Impact**:
- Local file system access
- Reading sensitive files (SSH keys, passwords, etc.)

**Fix**: Validate protocol BEFORE normalization and whitelist allowed protocols.

---

### 6. Unvalidated Navigation to Arbitrary URLs (src/view/webview.js:233-260)
**Severity**: MEDIUM  
**Risk**: Phishing, Malware Distribution

**Issue**: User can navigate to any URL without validation, including:
- `javascript:` URLs (XSS)
- `data:` URLs (malware)
- Malicious domains

**Fix**: Implement URL validation and block dangerous protocols.

---

## 🐛 BUGS

### 1. Race Condition in view.js:39
**File**: `src/view.js:39`  
**Severity**: HIGH

**Issue**:
```javascript
document.querySelector('.urlbar').focus(); // Runs before DOM is ready
```

**Impact**: Element may not exist yet, causing null reference error.

**Fix**:
```javascript
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.urlbar').focus();
});
```

---

### 2. Type Error Risk in view.js:46
**File**: `src/view.js:42-52`  
**Severity**: MEDIUM

**Issue**:
```javascript
keyval.get('tabs').then(val => {
  if (val == undefined) {
    keyval.set('tabs', []);
  }
  if (val.length == 0) { // val could be undefined or not an array
```

**Impact**: TypeError when accessing `.length` on undefined/null.

**Fix**:
```javascript
if (Array.isArray(val) && val.length === 0) {
```

---

### 3. Memory Leak - Uncleared Interval (src/view.js:55-63)
**File**: `src/view.js:55-63`  
**Severity**: MEDIUM

**Issue**:
```javascript
setInterval(() => {
  // ... save tabs
}, 500); // Never cleared
```

**Impact**: 
- Memory leak on window close
- Prevents garbage collection
- Accumulates over multiple window opens/closes

**Fix**: Store interval ID and clear on window close event.

---

### 4. Weak UUID Generation (src/view/utils/uuid.js:7)
**File**: `src/view/utils/uuid.js`  
**Severity**: MEDIUM

**Issue**:
```javascript
random = (Math.random() * 16) | 0; // Not cryptographically secure
```

**Impact**: UUID collisions possible, could lead to ID conflicts.

**Fix**: Use `crypto.randomUUID()` or `crypto.getRandomValues()`.

---

### 5. Missing Error Handling in IndexedDB Operations (src/view/history.js:190-229)
**File**: `src/view/history.js`  
**Severity**: MEDIUM

**Issue**: Database operations without try-catch blocks.

**Impact**: 
- Uncaught promise rejections
- App crash on database errors
- Poor user experience

**Fix**: Wrap database operations in try-catch with user feedback.

---

### 6. Variable Shadowing in webview.js (src/view/webview.js:159)
**File**: `src/view/webview.js:132-165`  
**Severity**: LOW

**Issue**:
```javascript
const remove = id => {     // Parameter 'id'
  // ...
  id = id - 1;            // Shadowed/reassigned
```

**Impact**: Confusing code, potential logic errors.

**Fix**: Use different variable name for reassignment.

---

### 7. Missing WebView Event Cleanup (src/view/webview.js:132-143)
**File**: `src/view/webview.js`  
**Severity**: MEDIUM

**Issue**: Event listeners are removed, but some listeners like `new-window` are commented out and not properly handled.

**Impact**: Memory leaks, zombie event handlers.

---

### 8. Potential Null Reference in titlebar.js (src/view/titlebar.js:155-165)
**File**: `src/view/titlebar.js`  
**Severity**: LOW

**Issue**:
```javascript
emitter.on('titlebar-title-updated', () => {
  if (!state.hovering) {
    document.querySelector('.urlbar').value = state.title;
  }
});
```

**Impact**: If element doesn't exist, throws error.

**Fix**: Add null check.

---

## ⚡ OPTIMIZATION OPPORTUNITIES

### 1. Excessive DOM Queries (src/view/webview.js)
**Severity**: MEDIUM

**Issue**: Multiple `querySelector` calls for same elements throughout the file.

**Impact**: Performance degradation, unnecessary DOM traversal.

**Fix**: Cache DOM references in the state object.

**Example**:
```javascript
// Instead of:
const webview = document.querySelector(`#${state.views[focusedView].id}`);
// Used 15+ times

// Cache it:
state.currentWebview = document.querySelector(`#${state.views[focusedView].id}`);
```

---

### 2. Inefficient Tab Saving (src/view.js:55-63)
**Severity**: MEDIUM

**Issue**:
```javascript
setInterval(() => {
  const tabs = [];
  for (let view of state.views) {
    tabs.push(document.querySelector('#' + view.id).getURL());
  }
  keyval.set('tabs', tabs);
}, 500);
```

**Problems**:
- Runs every 500ms regardless of changes
- Queries DOM unnecessarily
- Writes to storage constantly

**Fix**: Save only on tab changes using emitter events.

---

### 3. Unnecessary Re-renders (src/view/tabs.js:187-190)
**Severity**: MEDIUM

**Issue**: Re-renders entire tab list on every change.

**Impact**: DOM thrashing, poor performance with many tabs.

**Fix**: Use virtual DOM diffing or incremental updates.

---

### 4. Large Dependencies
**Severity**: LOW

**Issue**: 
- `tldjs` (127KB) can be replaced with native `URL` API
- `normalize-url` may be unnecessary

**Impact**: Larger bundle size, slower startup.

**Fix**: Audit dependencies and replace with native alternatives where possible.

---

### 5. No Lazy Loading in History (src/view/history.js)
**Severity**: LOW

**Issue**: Loads entire browsing history at once.

**Impact**: Slow with large history, memory bloat.

**Fix**: Implement pagination or virtual scrolling.

---

### 6. Inefficient Array Operations
**Severity**: LOW

**Multiple locations** with inefficient loops and array operations.

**Fix**: Use modern array methods (map, filter, reduce) for cleaner code.

---

## 📊 Summary

| Category | Count | Priority |
|----------|-------|----------|
| **Critical Security** | 3 | Immediate |
| **High Security** | 3 | This Sprint |
| **High Bugs** | 1 | This Sprint |
| **Medium Bugs** | 5 | Next Sprint |
| **Low Bugs** | 2 | Backlog |
| **Optimizations** | 6 | Ongoing |

---

## 🛠️ Recommended Action Plan

### Phase 1: Critical Security (Immediate)
1. [ ] Enable context isolation
2. [ ] Disable node integration
3. [ ] Create preload scripts
4. [ ] Add Content Security Policy

### Phase 2: Security Hardening (This Week)
1. [ ] Remove @electron/remote module
2. [ ] Implement IPC communication
3. [ ] Add permission request handler
4. [ ] Validate all URLs

### Phase 3: Bug Fixes (Next Week)
1. [ ] Fix race conditions
2. [ ] Add error handling
3. [ ] Fix memory leaks
4. [ ] Improve UUID generation

### Phase 4: Optimization (Ongoing)
1. [ ] Cache DOM references
2. [ ] Optimize tab saving
3. [ ] Reduce bundle size
4. [ ] Add pagination

---

## 📚 References

- [Electron Security Best Practices](https://www.electronjs.org/docs/latest/tutorial/security)
- [Electron Security Checklist](https://www.electronjs.org/docs/latest/tutorial/security#checklist)
- [Context Isolation](https://www.electronjs.org/docs/latest/tutorial/context-isolation)
- [IPC Communication](https://www.electronjs.org/docs/latest/tutorial/ipc)

---

**Report Generated**: 2026-02-14  
**Next Review**: After Phase 1 completion
