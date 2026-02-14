(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/process/browser.js
  var require_browser = __commonJS({
    "node_modules/process/browser.js"(exports, module) {
      init_polyfills();
      var process2 = module.exports = {};
      var cachedSetTimeout;
      var cachedClearTimeout;
      function defaultSetTimout() {
        throw new Error("setTimeout has not been defined");
      }
      function defaultClearTimeout() {
        throw new Error("clearTimeout has not been defined");
      }
      (function() {
        try {
          if (typeof setTimeout === "function") {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }
        try {
          if (typeof clearTimeout === "function") {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();
      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          return setTimeout(fun, 0);
        }
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }
        try {
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e2) {
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }
      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          return clearTimeout(marker);
        }
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }
        try {
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            return cachedClearTimeout.call(null, marker);
          } catch (e2) {
            return cachedClearTimeout.call(this, marker);
          }
        }
      }
      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;
      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }
        draining = false;
        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }
        if (queue.length) {
          drainQueue();
        }
      }
      function drainQueue() {
        if (draining) {
          return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;
        var len = queue.length;
        while (len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }
          queueIndex = -1;
          len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }
      process2.nextTick = function(fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      };
      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }
      Item.prototype.run = function() {
        this.fun.apply(null, this.array);
      };
      process2.title = "browser";
      process2.browser = true;
      process2.env = {};
      process2.argv = [];
      process2.version = "";
      process2.versions = {};
      function noop() {
      }
      process2.on = noop;
      process2.addListener = noop;
      process2.once = noop;
      process2.off = noop;
      process2.removeListener = noop;
      process2.removeAllListeners = noop;
      process2.emit = noop;
      process2.prependListener = noop;
      process2.prependOnceListener = noop;
      process2.listeners = function(name) {
        return [];
      };
      process2.binding = function(name) {
        throw new Error("process.binding is not supported");
      };
      process2.cwd = function() {
        return "/";
      };
      process2.chdir = function(dir) {
        throw new Error("process.chdir is not supported");
      };
      process2.umask = function() {
        return 0;
      };
    }
  });

  // src/polyfills.js
  var init_polyfills = __esm({
    "src/polyfills.js"() {
      globalThis.process = require_browser();
    }
  });

  // node_modules/mitt/dist/mitt.mjs
  var mitt_exports = {};
  __export(mitt_exports, {
    default: () => mitt_default
  });
  function mitt_default(n) {
    return { all: n = n || /* @__PURE__ */ new Map(), on: function(t, e) {
      var i = n.get(t);
      i ? i.push(e) : n.set(t, [e]);
    }, off: function(t, e) {
      var i = n.get(t);
      i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
    }, emit: function(t, e) {
      var i = n.get(t);
      i && i.slice().map(function(n2) {
        n2(e);
      }), (i = n.get("*")) && i.slice().map(function(n2) {
        n2(t, e);
      });
    } };
  }
  var init_mitt = __esm({
    "node_modules/mitt/dist/mitt.mjs"() {
      init_polyfills();
    }
  });

  // node_modules/idb-keyval/dist/index.js
  var dist_exports = {};
  __export(dist_exports, {
    clear: () => clear,
    createStore: () => createStore,
    del: () => del,
    delMany: () => delMany,
    entries: () => entries,
    get: () => get,
    getMany: () => getMany,
    keys: () => keys,
    promisifyRequest: () => promisifyRequest,
    set: () => set,
    setMany: () => setMany,
    update: () => update,
    values: () => values
  });
  function promisifyRequest(request) {
    return new Promise((resolve, reject) => {
      request.oncomplete = request.onsuccess = () => resolve(request.result);
      request.onabort = request.onerror = () => reject(request.error);
    });
  }
  function createStore(dbName, storeName) {
    let dbp;
    const getDB = () => {
      if (dbp)
        return dbp;
      const request = indexedDB.open(dbName);
      request.onupgradeneeded = () => request.result.createObjectStore(storeName);
      dbp = promisifyRequest(request);
      dbp.then((db) => {
        db.onclose = () => dbp = void 0;
      }, () => {
      });
      return dbp;
    };
    return (txMode, callback) => getDB().then((db) => callback(db.transaction(storeName, txMode).objectStore(storeName)));
  }
  function defaultGetStore() {
    if (!defaultGetStoreFunc) {
      defaultGetStoreFunc = createStore("keyval-store", "keyval");
    }
    return defaultGetStoreFunc;
  }
  function get(key, customStore = defaultGetStore()) {
    return customStore("readonly", (store) => promisifyRequest(store.get(key)));
  }
  function set(key, value, customStore = defaultGetStore()) {
    return customStore("readwrite", (store) => {
      store.put(value, key);
      return promisifyRequest(store.transaction);
    });
  }
  function setMany(entries2, customStore = defaultGetStore()) {
    return customStore("readwrite", (store) => {
      entries2.forEach((entry) => store.put(entry[1], entry[0]));
      return promisifyRequest(store.transaction);
    });
  }
  function getMany(keys2, customStore = defaultGetStore()) {
    return customStore("readonly", (store) => Promise.all(keys2.map((key) => promisifyRequest(store.get(key)))));
  }
  function update(key, updater, customStore = defaultGetStore()) {
    return customStore("readwrite", (store) => (
      // Need to create the promise manually.
      // If I try to chain promises, the transaction closes in browsers
      // that use a promise polyfill (IE10/11).
      new Promise((resolve, reject) => {
        store.get(key).onsuccess = function() {
          try {
            store.put(updater(this.result), key);
            resolve(promisifyRequest(store.transaction));
          } catch (err) {
            reject(err);
          }
        };
      })
    ));
  }
  function del(key, customStore = defaultGetStore()) {
    return customStore("readwrite", (store) => {
      store.delete(key);
      return promisifyRequest(store.transaction);
    });
  }
  function delMany(keys2, customStore = defaultGetStore()) {
    return customStore("readwrite", (store) => {
      keys2.forEach((key) => store.delete(key));
      return promisifyRequest(store.transaction);
    });
  }
  function clear(customStore = defaultGetStore()) {
    return customStore("readwrite", (store) => {
      store.clear();
      return promisifyRequest(store.transaction);
    });
  }
  function eachCursor(store, callback) {
    store.openCursor().onsuccess = function() {
      if (!this.result)
        return;
      callback(this.result);
      this.result.continue();
    };
    return promisifyRequest(store.transaction);
  }
  function keys(customStore = defaultGetStore()) {
    return customStore("readonly", (store) => {
      if (store.getAllKeys) {
        return promisifyRequest(store.getAllKeys());
      }
      const items = [];
      return eachCursor(store, (cursor) => items.push(cursor.key)).then(() => items);
    });
  }
  function values(customStore = defaultGetStore()) {
    return customStore("readonly", (store) => {
      if (store.getAll) {
        return promisifyRequest(store.getAll());
      }
      const items = [];
      return eachCursor(store, (cursor) => items.push(cursor.value)).then(() => items);
    });
  }
  function entries(customStore = defaultGetStore()) {
    return customStore("readonly", (store) => {
      if (store.getAll && store.getAllKeys) {
        return Promise.all([
          promisifyRequest(store.getAllKeys()),
          promisifyRequest(store.getAll())
        ]).then(([keys2, values2]) => keys2.map((key, i) => [key, values2[i]]));
      }
      const items = [];
      return customStore("readonly", (store2) => eachCursor(store2, (cursor) => items.push([cursor.key, cursor.value])).then(() => items));
    });
  }
  var defaultGetStoreFunc;
  var init_dist = __esm({
    "node_modules/idb-keyval/dist/index.js"() {
      init_polyfills();
    }
  });

  // node_modules/hyperscript-attribute-to-property/index.js
  var require_hyperscript_attribute_to_property = __commonJS({
    "node_modules/hyperscript-attribute-to-property/index.js"(exports, module) {
      init_polyfills();
      module.exports = attributeToProperty;
      var transform = {
        "class": "className",
        "for": "htmlFor",
        "http-equiv": "httpEquiv"
      };
      function attributeToProperty(h) {
        return function(tagName, attrs, children) {
          for (var attr in attrs) {
            if (attr in transform) {
              attrs[transform[attr]] = attrs[attr];
              delete attrs[attr];
            }
          }
          return h(tagName, attrs, children);
        };
      }
    }
  });

  // node_modules/hyperx/index.js
  var require_hyperx = __commonJS({
    "node_modules/hyperx/index.js"(exports, module) {
      init_polyfills();
      var attrToProp = require_hyperscript_attribute_to_property();
      var VAR = 0;
      var TEXT = 1;
      var OPEN = 2;
      var CLOSE = 3;
      var ATTR = 4;
      var ATTR_KEY = 5;
      var ATTR_KEY_W = 6;
      var ATTR_VALUE_W = 7;
      var ATTR_VALUE = 8;
      var ATTR_VALUE_SQ = 9;
      var ATTR_VALUE_DQ = 10;
      var ATTR_EQ = 11;
      var ATTR_BREAK = 12;
      var COMMENT = 13;
      module.exports = function(h, opts) {
        if (!opts) opts = {};
        var concat = opts.concat || function(a, b) {
          return String(a) + String(b);
        };
        if (opts.attrToProp !== false) {
          h = attrToProp(h);
        }
        return function(strings) {
          var state2 = TEXT, reg = "";
          var arglen = arguments.length;
          var parts = [];
          for (var i = 0; i < strings.length; i++) {
            if (i < arglen - 1) {
              var arg = arguments[i + 1];
              var p = parse(strings[i]);
              var xstate = state2;
              if (xstate === ATTR_VALUE_DQ) xstate = ATTR_VALUE;
              if (xstate === ATTR_VALUE_SQ) xstate = ATTR_VALUE;
              if (xstate === ATTR_VALUE_W) xstate = ATTR_VALUE;
              if (xstate === ATTR) xstate = ATTR_KEY;
              if (xstate === OPEN) {
                if (reg === "/") {
                  p.push([OPEN, "/", arg]);
                  reg = "";
                } else {
                  p.push([OPEN, arg]);
                }
              } else if (xstate === COMMENT && opts.comments) {
                reg += String(arg);
              } else if (xstate !== COMMENT) {
                p.push([VAR, xstate, arg]);
              }
              parts.push.apply(parts, p);
            } else parts.push.apply(parts, parse(strings[i]));
          }
          var tree = [null, {}, []];
          var stack = [[tree, -1]];
          for (var i = 0; i < parts.length; i++) {
            var cur = stack[stack.length - 1][0];
            var p = parts[i], s = p[0];
            if (s === OPEN && /^\//.test(p[1])) {
              var ix = stack[stack.length - 1][1];
              if (stack.length > 1) {
                stack.pop();
                stack[stack.length - 1][0][2][ix] = h(
                  cur[0],
                  cur[1],
                  cur[2].length ? cur[2] : void 0
                );
              }
            } else if (s === OPEN) {
              var c = [p[1], {}, []];
              cur[2].push(c);
              stack.push([c, cur[2].length - 1]);
            } else if (s === ATTR_KEY || s === VAR && p[1] === ATTR_KEY) {
              var key = "";
              var copyKey;
              for (; i < parts.length; i++) {
                if (parts[i][0] === ATTR_KEY) {
                  key = concat(key, parts[i][1]);
                } else if (parts[i][0] === VAR && parts[i][1] === ATTR_KEY) {
                  if (typeof parts[i][2] === "object" && !key) {
                    for (copyKey in parts[i][2]) {
                      if (parts[i][2].hasOwnProperty(copyKey) && !cur[1][copyKey]) {
                        cur[1][copyKey] = parts[i][2][copyKey];
                      }
                    }
                  } else {
                    key = concat(key, parts[i][2]);
                  }
                } else break;
              }
              if (parts[i][0] === ATTR_EQ) i++;
              var j = i;
              for (; i < parts.length; i++) {
                if (parts[i][0] === ATTR_VALUE || parts[i][0] === ATTR_KEY) {
                  if (!cur[1][key]) cur[1][key] = strfn(parts[i][1]);
                  else parts[i][1] === "" || (cur[1][key] = concat(cur[1][key], parts[i][1]));
                } else if (parts[i][0] === VAR && (parts[i][1] === ATTR_VALUE || parts[i][1] === ATTR_KEY)) {
                  if (!cur[1][key]) cur[1][key] = strfn(parts[i][2]);
                  else parts[i][2] === "" || (cur[1][key] = concat(cur[1][key], parts[i][2]));
                } else {
                  if (key.length && !cur[1][key] && i === j && (parts[i][0] === CLOSE || parts[i][0] === ATTR_BREAK)) {
                    cur[1][key] = key.toLowerCase();
                  }
                  if (parts[i][0] === CLOSE) {
                    i--;
                  }
                  break;
                }
              }
            } else if (s === ATTR_KEY) {
              cur[1][p[1]] = true;
            } else if (s === VAR && p[1] === ATTR_KEY) {
              cur[1][p[2]] = true;
            } else if (s === CLOSE) {
              if (selfClosing(cur[0]) && stack.length) {
                var ix = stack[stack.length - 1][1];
                stack.pop();
                stack[stack.length - 1][0][2][ix] = h(
                  cur[0],
                  cur[1],
                  cur[2].length ? cur[2] : void 0
                );
              }
            } else if (s === VAR && p[1] === TEXT) {
              if (p[2] === void 0 || p[2] === null) p[2] = "";
              else if (!p[2]) p[2] = concat("", p[2]);
              if (Array.isArray(p[2][0])) {
                cur[2].push.apply(cur[2], p[2]);
              } else {
                cur[2].push(p[2]);
              }
            } else if (s === TEXT) {
              cur[2].push(p[1]);
            } else if (s === ATTR_EQ || s === ATTR_BREAK) {
            } else {
              throw new Error("unhandled: " + s);
            }
          }
          if (tree[2].length > 1 && /^\s*$/.test(tree[2][0])) {
            tree[2].shift();
          }
          if (tree[2].length > 2 || tree[2].length === 2 && /\S/.test(tree[2][1])) {
            if (opts.createFragment) return opts.createFragment(tree[2]);
            throw new Error(
              "multiple root elements must be wrapped in an enclosing tag"
            );
          }
          if (Array.isArray(tree[2][0]) && typeof tree[2][0][0] === "string" && Array.isArray(tree[2][0][2])) {
            tree[2][0] = h(tree[2][0][0], tree[2][0][1], tree[2][0][2]);
          }
          return tree[2][0];
          function parse(str) {
            var res = [];
            if (state2 === ATTR_VALUE_W) state2 = ATTR;
            for (var i2 = 0; i2 < str.length; i2++) {
              var c2 = str.charAt(i2);
              if (state2 === TEXT && c2 === "<") {
                if (reg.length) res.push([TEXT, reg]);
                reg = "";
                state2 = OPEN;
              } else if (c2 === ">" && !quot(state2) && state2 !== COMMENT) {
                if (state2 === OPEN && reg.length) {
                  res.push([OPEN, reg]);
                } else if (state2 === ATTR_KEY) {
                  res.push([ATTR_KEY, reg]);
                } else if (state2 === ATTR_VALUE && reg.length) {
                  res.push([ATTR_VALUE, reg]);
                }
                res.push([CLOSE]);
                reg = "";
                state2 = TEXT;
              } else if (state2 === COMMENT && /-$/.test(reg) && c2 === "-") {
                if (opts.comments) {
                  res.push([ATTR_VALUE, reg.substr(0, reg.length - 1)]);
                }
                reg = "";
                state2 = TEXT;
              } else if (state2 === OPEN && /^!--$/.test(reg)) {
                if (opts.comments) {
                  res.push([OPEN, reg], [ATTR_KEY, "comment"], [ATTR_EQ]);
                }
                reg = c2;
                state2 = COMMENT;
              } else if (state2 === TEXT || state2 === COMMENT) {
                reg += c2;
              } else if (state2 === OPEN && c2 === "/" && reg.length) {
              } else if (state2 === OPEN && /\s/.test(c2)) {
                if (reg.length) {
                  res.push([OPEN, reg]);
                }
                reg = "";
                state2 = ATTR;
              } else if (state2 === OPEN) {
                reg += c2;
              } else if (state2 === ATTR && /[^\s"'=/]/.test(c2)) {
                state2 = ATTR_KEY;
                reg = c2;
              } else if (state2 === ATTR && /\s/.test(c2)) {
                if (reg.length) res.push([ATTR_KEY, reg]);
                res.push([ATTR_BREAK]);
              } else if (state2 === ATTR_KEY && /\s/.test(c2)) {
                res.push([ATTR_KEY, reg]);
                reg = "";
                state2 = ATTR_KEY_W;
              } else if (state2 === ATTR_KEY && c2 === "=") {
                res.push([ATTR_KEY, reg], [ATTR_EQ]);
                reg = "";
                state2 = ATTR_VALUE_W;
              } else if (state2 === ATTR_KEY) {
                reg += c2;
              } else if ((state2 === ATTR_KEY_W || state2 === ATTR) && c2 === "=") {
                res.push([ATTR_EQ]);
                state2 = ATTR_VALUE_W;
              } else if ((state2 === ATTR_KEY_W || state2 === ATTR) && !/\s/.test(c2)) {
                res.push([ATTR_BREAK]);
                if (/[\w-]/.test(c2)) {
                  reg += c2;
                  state2 = ATTR_KEY;
                } else state2 = ATTR;
              } else if (state2 === ATTR_VALUE_W && c2 === '"') {
                state2 = ATTR_VALUE_DQ;
              } else if (state2 === ATTR_VALUE_W && c2 === "'") {
                state2 = ATTR_VALUE_SQ;
              } else if (state2 === ATTR_VALUE_DQ && c2 === '"') {
                res.push([ATTR_VALUE, reg], [ATTR_BREAK]);
                reg = "";
                state2 = ATTR;
              } else if (state2 === ATTR_VALUE_SQ && c2 === "'") {
                res.push([ATTR_VALUE, reg], [ATTR_BREAK]);
                reg = "";
                state2 = ATTR;
              } else if (state2 === ATTR_VALUE_W && !/\s/.test(c2)) {
                state2 = ATTR_VALUE;
                i2--;
              } else if (state2 === ATTR_VALUE && /\s/.test(c2)) {
                res.push([ATTR_VALUE, reg], [ATTR_BREAK]);
                reg = "";
                state2 = ATTR;
              } else if (state2 === ATTR_VALUE || state2 === ATTR_VALUE_SQ || state2 === ATTR_VALUE_DQ) {
                reg += c2;
              }
            }
            if (state2 === TEXT && reg.length) {
              res.push([TEXT, reg]);
              reg = "";
            } else if (state2 === ATTR_VALUE && reg.length) {
              res.push([ATTR_VALUE, reg]);
              reg = "";
            } else if (state2 === ATTR_VALUE_DQ && reg.length) {
              res.push([ATTR_VALUE, reg]);
              reg = "";
            } else if (state2 === ATTR_VALUE_SQ && reg.length) {
              res.push([ATTR_VALUE, reg]);
              reg = "";
            } else if (state2 === ATTR_KEY) {
              res.push([ATTR_KEY, reg]);
              reg = "";
            }
            return res;
          }
        };
        function strfn(x) {
          if (typeof x === "function") return x;
          else if (typeof x === "string") return x;
          else if (x && typeof x === "object") return x;
          else if (x === null || x === void 0) return x;
          else return concat("", x);
        }
      };
      function quot(state2) {
        return state2 === ATTR_VALUE_SQ || state2 === ATTR_VALUE_DQ;
      }
      var closeRE = RegExp("^(" + [
        "area",
        "base",
        "basefont",
        "bgsound",
        "br",
        "col",
        "command",
        "embed",
        "frame",
        "hr",
        "img",
        "input",
        "isindex",
        "keygen",
        "link",
        "meta",
        "param",
        "source",
        "track",
        "wbr",
        "!--",
        // SVG TAGS
        "animate",
        "animateTransform",
        "circle",
        "cursor",
        "desc",
        "ellipse",
        "feBlend",
        "feColorMatrix",
        "feComposite",
        "feConvolveMatrix",
        "feDiffuseLighting",
        "feDisplacementMap",
        "feDistantLight",
        "feFlood",
        "feFuncA",
        "feFuncB",
        "feFuncG",
        "feFuncR",
        "feGaussianBlur",
        "feImage",
        "feMergeNode",
        "feMorphology",
        "feOffset",
        "fePointLight",
        "feSpecularLighting",
        "feSpotLight",
        "feTile",
        "feTurbulence",
        "font-face-format",
        "font-face-name",
        "font-face-uri",
        "glyph",
        "glyphRef",
        "hkern",
        "image",
        "line",
        "missing-glyph",
        "mpath",
        "path",
        "polygon",
        "polyline",
        "rect",
        "set",
        "stop",
        "tref",
        "use",
        "view",
        "vkern"
      ].join("|") + ")(?:[.#][a-zA-Z0-9\x7F-\uFFFF_:-]+)*$");
      function selfClosing(tag) {
        return closeRE.test(tag);
      }
    }
  });

  // node_modules/xou-browser/lib/append-child.js
  var require_append_child = __commonJS({
    "node_modules/xou-browser/lib/append-child.js"(exports, module) {
      init_polyfills();
      var trailingNewlineRegex = /\n[\s]+$/;
      var leadingNewlineRegex = /^\n[\s]+/;
      var trailingSpaceRegex = /[\s]+$/;
      var leadingSpaceRegex = /^[\s]+/;
      var multiSpaceRegex = /[\n\s]+/g;
      var TEXT_TAGS = [
        "a",
        "abbr",
        "b",
        "bdi",
        "bdo",
        "br",
        "cite",
        "data",
        "dfn",
        "em",
        "i",
        "kbd",
        "mark",
        "q",
        "rp",
        "rt",
        "rtc",
        "ruby",
        "s",
        "amp",
        "small",
        "span",
        "strong",
        "sub",
        "sup",
        "time",
        "u",
        "var",
        "wbr"
      ];
      var VERBATIM_TAGS = ["code", "pre", "textarea"];
      var appendChild = (el, childs) => {
        if (!Array.isArray(childs)) return;
        let nodeName = el.nodeName.toLowerCase();
        let hadText = false;
        let value, leader;
        for (let i = 0, len = childs.length; i < len; i++) {
          let node = childs[i];
          if (Array.isArray(node)) {
            appendChild(el, node);
            continue;
          }
          if (typeof node === "number" || typeof node === "boolean" || typeof node === "function" || node instanceof Date || node instanceof RegExp) {
            node = node.toString();
          }
          let lastChild = el.childNodes[el.childNodes.length - 1];
          if (typeof node === "string") {
            hadText = true;
            if (lastChild && lastChild.nodeName === "#text") {
              lastChild.nodeValue += node;
            } else {
              node = document.createTextNode(node);
              el.appendChild(node);
              lastChild = node;
            }
            if (i === len - 1) {
              hadText = false;
              if (TEXT_TAGS.indexOf(nodeName) === -1 && VERBATIM_TAGS.indexOf(nodeName) === -1) {
                value = lastChild.nodeValue.replace(leadingNewlineRegex, "").replace(trailingSpaceRegex, "").replace(trailingNewlineRegex, "").replace(multiSpaceRegex, " ");
                if (value === "") {
                  el.removeChild(lastChild);
                } else {
                  lastChild.nodeValue = value;
                }
              } else if (VERBATIM_TAGS.indexOf(nodeName) === -1) {
                leader = i === 0 ? "" : " ";
                value = lastChild.nodeValue.replace(leadingNewlineRegex, leader).replace(leadingSpaceRegex, " ").replace(trailingSpaceRegex, "").replace(trailingNewlineRegex, "").replace(multiSpaceRegex, " ");
                lastChild.nodeValue = value;
              }
            }
          } else if (node && node.nodeType) {
            if (hadText) {
              hadText = false;
              if (TEXT_TAGS.indexOf(nodeName) === -1 && VERBATIM_TAGS.indexOf(nodeName) === -1) {
                value = lastChild.nodeValue.replace(leadingNewlineRegex, "").replace(trailingNewlineRegex, "").replace(multiSpaceRegex, " ");
                if (value === "") {
                  el.removeChild(lastChild);
                } else {
                  lastChild.nodeValue = value;
                }
              } else if (VERBATIM_TAGS.indexOf(nodeName) === -1) {
                value = lastChild.nodeValue.replace(leadingSpaceRegex, " ").replace(leadingNewlineRegex, "").replace(trailingNewlineRegex, "").replace(multiSpaceRegex, " ");
                lastChild.nodeValue = value;
              }
            }
            let _nodeName = node.nodeName;
            if (_nodeName) nodeName = _nodeName.toLowerCase();
            el.appendChild(node);
          }
        }
      };
      module.exports = appendChild;
    }
  });

  // node_modules/xou-utils/lib/svg-tags.js
  var require_svg_tags = __commonJS({
    "node_modules/xou-utils/lib/svg-tags.js"(exports, module) {
      init_polyfills();
      module.exports = [
        "svg",
        "altGlyph",
        "altGlyphDef",
        "altGlyphItem",
        "animate",
        "animateColor",
        "animateMotion",
        "animateTransform",
        "circle",
        "clipPath",
        "color-profile",
        "cursor",
        "defs",
        "desc",
        "ellipse",
        "feBlend",
        "feColorMatrix",
        "feComponentTransfer",
        "feComposite",
        "feConvolveMatrix",
        "feDiffuseLighting",
        "feDisplacementMap",
        "feDistantLight",
        "feFlood",
        "feFuncA",
        "feFuncB",
        "feFuncG",
        "feFuncR",
        "feGaussianBlur",
        "feImage",
        "feMerge",
        "feMergeNode",
        "feMorphology",
        "feOffset",
        "fePointLight",
        "feSpecularLighting",
        "feSpotLight",
        "feTile",
        "feTurbulence",
        "filter",
        "font",
        "font-face",
        "font-face-format",
        "font-face-name",
        "font-face-src",
        "font-face-uri",
        "foreignObject",
        "g",
        "glyph",
        "glyphRef",
        "hkern",
        "image",
        "line",
        "linearGradient",
        "marker",
        "mask",
        "metadata",
        "missing-glyph",
        "mpath",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "set",
        "stop",
        "switch",
        "symbol",
        "text",
        "textPath",
        "title",
        "tref",
        "tspan",
        "use",
        "view",
        "vkern"
      ];
    }
  });

  // node_modules/xou-utils/lib/bool-props.js
  var require_bool_props = __commonJS({
    "node_modules/xou-utils/lib/bool-props.js"(exports, module) {
      init_polyfills();
      module.exports = [
        "autofocus",
        "checked",
        "defaultchecked",
        "disabled",
        "formnovalidate",
        "indeterminate",
        "readonly",
        "required",
        "selected",
        "willvalidate"
      ];
    }
  });

  // node_modules/xou-utils/index.js
  var require_xou_utils = __commonJS({
    "node_modules/xou-utils/index.js"(exports, module) {
      init_polyfills();
      module.exports = {
        svgTags: require_svg_tags(),
        boolProps: require_bool_props()
      };
    }
  });

  // node_modules/xou-browser/lib/index.js
  var require_lib = __commonJS({
    "node_modules/xou-browser/lib/index.js"(exports, module) {
      init_polyfills();
      var hyperx = require_hyperx();
      var appendChild = require_append_child();
      var { svgTags, boolProps } = require_xou_utils();
      var SVGNS = "http://www.w3.org/2000/svg";
      var XLINKNS = "http://www.w3.org/1999/xlink";
      var COMMENT_TAG = "!--";
      var xouHtmlCreateElement = (tag, props, children) => {
        let el;
        if (svgTags.indexOf(tag) !== -1) {
          props.namespace = SVGNS;
        }
        let ns = false;
        if (props.namespace) {
          ns = props.namespace;
          delete props.namespace;
        }
        if (ns) {
          el = document.createElementNS(ns, tag);
        } else if (tag === COMMENT_TAG) {
          return document.createComment(props.comment);
        } else {
          el = document.createElement(tag);
        }
        for (let p in props) {
          if (props.hasOwnProperty(p)) {
            let key = p.toLowerCase();
            let val = props[p];
            if (key === "classname") {
              key = "class";
              p = "class";
            }
            if (p === "htmlFor") {
              p = "for";
            }
            if (boolProps.indexOf(key) !== -1) {
              if (val === "true") val = key;
              else if (val === "false") continue;
            }
            if (key.slice(0, 2) === "on") {
              el[p] = val;
            } else {
              if (ns) {
                if (p === "xlink:href") {
                  el.setAttributeNS(XLINKNS, p, val);
                } else if (/^xmlns($|:)/i.test(p)) {
                } else {
                  el.setAttributeNS(null, p, val);
                }
              } else {
                el.setAttribute(p, val);
              }
            }
          }
        }
        appendChild(el, children);
        return el;
      };
      module.exports = hyperx(xouHtmlCreateElement, { comments: true });
      module.exports.default = module.exports;
      module.exports.createElement = xouHtmlCreateElement;
    }
  });

  // node_modules/xou-server/index.js
  var require_xou_server = __commonJS({
    "node_modules/xou-server/index.js"(exports, module) {
      init_polyfills();
      var { boolProps } = require_xou_utils();
      var boolPropRx = new RegExp("(" + boolProps.join("|") + `)=["']?$`, "i");
      var handleValue = (value) => {
        if (Array.isArray(value)) return value.join("");
        if (typeof value === "function") return "";
        if (value === null || value === void 0) return "";
        if (value.__encoded) return value;
        if (typeof value === "object") {
          return Object.keys(value).reduce(function(str2, key, i) {
            if (str2.length > 0) str2 += " ";
            if (boolProps.indexOf(key) !== -1) {
              if (value[key]) {
                return str2 + key + '="' + key + '"';
              }
              return str2;
            }
            let handled = handleValue(value[key]);
            return str2 + key + '="' + handled + '"';
          }, "");
        }
        let str = value.toString();
        return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
      };
      var xouServer = (pieces, ...args) => {
        let boolMatch;
        let output = "";
        for (let i = 0; i < pieces.length; i++) {
          let piece = pieces[i];
          if (i < pieces.length - 1) {
            if (boolMatch = boolPropRx.exec(piece)) {
              output += piece.slice(0, boolMatch.index);
              if (args[i]) {
                output += boolMatch[1] + '="' + boolMatch[1] + '"';
              }
              continue;
            }
            let value = handleValue(args[i]);
            if (piece[piece.length - 1] === "=") {
              output += piece + '"' + value + '"';
            } else {
              output += piece + value;
            }
          } else {
            output += piece;
          }
        }
        let wrapper = new String(output);
        wrapper.__encoded = true;
        return wrapper;
      };
      module.exports = xouServer;
    }
  });

  // node_modules/nanoassert/index.js
  var require_nanoassert = __commonJS({
    "node_modules/nanoassert/index.js"(exports, module) {
      init_polyfills();
      assert.notEqual = notEqual;
      assert.notOk = notOk;
      assert.equal = equal;
      assert.ok = assert;
      module.exports = assert;
      function equal(a, b, m) {
        assert(a == b, m);
      }
      function notEqual(a, b, m) {
        assert(a != b, m);
      }
      function notOk(t, m) {
        assert(!t, m);
      }
      function assert(t, m) {
        if (!t) throw new Error(m || "AssertionError");
      }
    }
  });

  // node_modules/nanomorph/lib/events.js
  var require_events = __commonJS({
    "node_modules/nanomorph/lib/events.js"(exports, module) {
      init_polyfills();
      module.exports = [
        // attribute events (can be set with attributes)
        "onclick",
        "ondblclick",
        "onmousedown",
        "onmouseup",
        "onmouseover",
        "onmousemove",
        "onmouseout",
        "onmouseenter",
        "onmouseleave",
        "ontouchcancel",
        "ontouchend",
        "ontouchmove",
        "ontouchstart",
        "ondragstart",
        "ondrag",
        "ondragenter",
        "ondragleave",
        "ondragover",
        "ondrop",
        "ondragend",
        "onkeydown",
        "onkeypress",
        "onkeyup",
        "onunload",
        "onabort",
        "onerror",
        "onresize",
        "onscroll",
        "onselect",
        "onchange",
        "onsubmit",
        "onreset",
        "onfocus",
        "onblur",
        "oninput",
        "onanimationend",
        "onanimationiteration",
        "onanimationstart",
        // other common events
        "oncontextmenu",
        "onfocusin",
        "onfocusout"
      ];
    }
  });

  // node_modules/nanomorph/lib/morph.js
  var require_morph = __commonJS({
    "node_modules/nanomorph/lib/morph.js"(exports, module) {
      init_polyfills();
      var events = require_events();
      var eventsLength = events.length;
      var ELEMENT_NODE = 1;
      var TEXT_NODE = 3;
      var COMMENT_NODE = 8;
      module.exports = morph;
      function morph(newNode, oldNode) {
        var nodeType = newNode.nodeType;
        var nodeName = newNode.nodeName;
        if (nodeType === ELEMENT_NODE) {
          copyAttrs(newNode, oldNode);
        }
        if (nodeType === TEXT_NODE || nodeType === COMMENT_NODE) {
          if (oldNode.nodeValue !== newNode.nodeValue) {
            oldNode.nodeValue = newNode.nodeValue;
          }
        }
        if (nodeName === "INPUT") updateInput(newNode, oldNode);
        else if (nodeName === "OPTION") updateOption(newNode, oldNode);
        else if (nodeName === "TEXTAREA") updateTextarea(newNode, oldNode);
        copyEvents(newNode, oldNode);
      }
      function copyAttrs(newNode, oldNode) {
        var oldAttrs = oldNode.attributes;
        var newAttrs = newNode.attributes;
        var attrNamespaceURI = null;
        var attrValue = null;
        var fromValue = null;
        var attrName = null;
        var attr = null;
        for (var i = newAttrs.length - 1; i >= 0; --i) {
          attr = newAttrs[i];
          attrName = attr.name;
          attrNamespaceURI = attr.namespaceURI;
          attrValue = attr.value;
          if (attrNamespaceURI) {
            attrName = attr.localName || attrName;
            fromValue = oldNode.getAttributeNS(attrNamespaceURI, attrName);
            if (fromValue !== attrValue) {
              oldNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
            }
          } else {
            if (!oldNode.hasAttribute(attrName)) {
              oldNode.setAttribute(attrName, attrValue);
            } else {
              fromValue = oldNode.getAttribute(attrName);
              if (fromValue !== attrValue) {
                if (attrValue === "null" || attrValue === "undefined") {
                  oldNode.removeAttribute(attrName);
                } else {
                  oldNode.setAttribute(attrName, attrValue);
                }
              }
            }
          }
        }
        for (var j = oldAttrs.length - 1; j >= 0; --j) {
          attr = oldAttrs[j];
          if (attr.specified !== false) {
            attrName = attr.name;
            attrNamespaceURI = attr.namespaceURI;
            if (attrNamespaceURI) {
              attrName = attr.localName || attrName;
              if (!newNode.hasAttributeNS(attrNamespaceURI, attrName)) {
                oldNode.removeAttributeNS(attrNamespaceURI, attrName);
              }
            } else {
              if (!newNode.hasAttributeNS(null, attrName)) {
                oldNode.removeAttribute(attrName);
              }
            }
          }
        }
      }
      function copyEvents(newNode, oldNode) {
        for (var i = 0; i < eventsLength; i++) {
          var ev = events[i];
          if (newNode[ev]) {
            oldNode[ev] = newNode[ev];
          } else if (oldNode[ev]) {
            oldNode[ev] = void 0;
          }
        }
      }
      function updateOption(newNode, oldNode) {
        updateAttribute(newNode, oldNode, "selected");
      }
      function updateInput(newNode, oldNode) {
        var newValue = newNode.value;
        var oldValue = oldNode.value;
        updateAttribute(newNode, oldNode, "checked");
        updateAttribute(newNode, oldNode, "disabled");
        if (newNode.indeterminate !== oldNode.indeterminate) {
          oldNode.indeterminate = newNode.indeterminate;
        }
        if (oldNode.type === "file") return;
        if (newValue !== oldValue) {
          oldNode.setAttribute("value", newValue);
          oldNode.value = newValue;
        }
        if (newValue === "null") {
          oldNode.value = "";
          oldNode.removeAttribute("value");
        }
        if (!newNode.hasAttributeNS(null, "value")) {
          oldNode.removeAttribute("value");
        } else if (oldNode.type === "range") {
          oldNode.value = newValue;
        }
      }
      function updateTextarea(newNode, oldNode) {
        var newValue = newNode.value;
        if (newValue !== oldNode.value) {
          oldNode.value = newValue;
        }
        if (oldNode.firstChild && oldNode.firstChild.nodeValue !== newValue) {
          if (newValue === "" && oldNode.firstChild.nodeValue === oldNode.placeholder) {
            return;
          }
          oldNode.firstChild.nodeValue = newValue;
        }
      }
      function updateAttribute(newNode, oldNode, name) {
        if (newNode[name] !== oldNode[name]) {
          oldNode[name] = newNode[name];
          if (newNode[name]) {
            oldNode.setAttribute(name, "");
          } else {
            oldNode.removeAttribute(name);
          }
        }
      }
    }
  });

  // node_modules/nanomorph/index.js
  var require_nanomorph = __commonJS({
    "node_modules/nanomorph/index.js"(exports, module) {
      init_polyfills();
      var assert = require_nanoassert();
      var morph = require_morph();
      var TEXT_NODE = 3;
      module.exports = nanomorph;
      function nanomorph(oldTree, newTree, options) {
        assert.equal(typeof oldTree, "object", "nanomorph: oldTree should be an object");
        assert.equal(typeof newTree, "object", "nanomorph: newTree should be an object");
        if (options && options.childrenOnly) {
          updateChildren(newTree, oldTree);
          return oldTree;
        }
        assert.notEqual(
          newTree.nodeType,
          11,
          "nanomorph: newTree should have one root node (which is not a DocumentFragment)"
        );
        return walk(newTree, oldTree);
      }
      function walk(newNode, oldNode) {
        if (!oldNode) {
          return newNode;
        } else if (!newNode) {
          return null;
        } else if (newNode.isSameNode && newNode.isSameNode(oldNode)) {
          return oldNode;
        } else if (newNode.tagName !== oldNode.tagName || getComponentId(newNode) !== getComponentId(oldNode)) {
          return newNode;
        } else {
          morph(newNode, oldNode);
          updateChildren(newNode, oldNode);
          return oldNode;
        }
      }
      function getComponentId(node) {
        return node.dataset ? node.dataset.nanomorphComponentId : void 0;
      }
      function updateChildren(newNode, oldNode) {
        var oldChild, newChild, morphed, oldMatch;
        var offset = 0;
        for (var i = 0; ; i++) {
          oldChild = oldNode.childNodes[i];
          newChild = newNode.childNodes[i - offset];
          if (!oldChild && !newChild) {
            break;
          } else if (!newChild) {
            oldNode.removeChild(oldChild);
            i--;
          } else if (!oldChild) {
            oldNode.appendChild(newChild);
            offset++;
          } else if (same(newChild, oldChild)) {
            morphed = walk(newChild, oldChild);
            if (morphed !== oldChild) {
              oldNode.replaceChild(morphed, oldChild);
              offset++;
            }
          } else {
            oldMatch = null;
            for (var j = i; j < oldNode.childNodes.length; j++) {
              if (same(oldNode.childNodes[j], newChild)) {
                oldMatch = oldNode.childNodes[j];
                break;
              }
            }
            if (oldMatch) {
              morphed = walk(newChild, oldMatch);
              if (morphed !== oldMatch) offset++;
              oldNode.insertBefore(morphed, oldChild);
            } else if (!newChild.id && !oldChild.id) {
              morphed = walk(newChild, oldChild);
              if (morphed !== oldChild) {
                oldNode.replaceChild(morphed, oldChild);
                offset++;
              }
            } else {
              oldNode.insertBefore(newChild, oldChild);
              offset++;
            }
          }
        }
      }
      function same(a, b) {
        if (a.id) return a.id === b.id;
        if (a.isSameNode) return a.isSameNode(b);
        if (a.tagName !== b.tagName) return false;
        if (a.type === TEXT_NODE) return a.nodeValue === b.nodeValue;
        return false;
      }
    }
  });

  // node_modules/xou/index.js
  var require_xou = __commonJS({
    "node_modules/xou/index.js"(exports, module) {
      init_polyfills();
      module.exports = typeof window !== "undefined" ? require_lib() : require_xou_server();
      module.exports.update = require_nanomorph();
    }
  });

  // node_modules/vxv-hash/dist/vxv-hash.umd.js
  var require_vxv_hash_umd = __commonJS({
    "node_modules/vxv-hash/dist/vxv-hash.umd.js"(exports, module) {
      init_polyfills();
      !(function(e, n) {
        "object" == typeof exports && "undefined" != typeof module ? n() : "function" == typeof define && define.amd ? define(n) : n();
      })(0, function() {
        module.exports = function(e) {
          var n = 0, o = e.length, t = 0;
          if (o > 0) for (; t < o; ) n = (n << 5) - n + e.charCodeAt(t++) | 0;
          return Math.abs(n);
        };
      });
    }
  });

  // node_modules/vxv-insert/dist/vxv-insert.umd.js
  var require_vxv_insert_umd = __commonJS({
    "node_modules/vxv-insert/dist/vxv-insert.umd.js"(exports, module) {
      init_polyfills();
      !(function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? t() : "function" == typeof define && define.amd ? define(t) : t();
      })(0, function() {
        module.exports = function(e, t) {
          if ("object" == typeof window && null == window.document.querySelector("._vxv_" + t)) {
            var n = window.document.createElement("style");
            n.setAttribute("type", "text/css"), n.setAttribute("class", "_vxv_ _vxv_" + t), n.innerHTML = e, window.document.head.appendChild(n);
          }
        };
      });
    }
  });

  // node_modules/stylis/stylis.js
  var require_stylis = __commonJS({
    "node_modules/stylis/stylis.js"(exports, module) {
      init_polyfills();
      (function(factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module["exports"] = factory(null) : typeof define === "function" && define["amd"] ? define(factory(null)) : window["stylis"] = factory(null);
      })(
        /** @param {*=} options */
        function factory(options) {
          "use strict";
          var nullptn = /^\0+/g;
          var formatptn = /[\0\r\f]/g;
          var colonptn = /: */g;
          var cursorptn = /zoo|gra/;
          var transformptn = /([,: ])(transform)/g;
          var animationptn = /,+\s*(?![^(]*[)])/g;
          var propertiesptn = / +\s*(?![^(]*[)])/g;
          var elementptn = / *[\0] */g;
          var selectorptn = /,\r+?/g;
          var andptn = /([\t\r\n ])*\f?&/g;
          var escapeptn = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g;
          var invalidptn = /\W+/g;
          var keyframeptn = /@(k\w+)\s*(\S*)\s*/;
          var plcholdrptn = /::(place)/g;
          var readonlyptn = /:(read-only)/g;
          var beforeptn = /\s+(?=[{\];=:>])/g;
          var afterptn = /([[}=:>])\s+/g;
          var tailptn = /(\{[^{]+?);(?=\})/g;
          var whiteptn = /\s{2,}/g;
          var pseudoptn = /([^\(])(:+) */g;
          var writingptn = /[svh]\w+-[tblr]{2}/;
          var gradientptn = /([\w-]+t\()/g;
          var supportsptn = /\(\s*(.*)\s*\)/g;
          var propertyptn = /([\s\S]*?);/g;
          var selfptn = /-self|flex-/g;
          var pseudofmt = /[^]*?(:[rp][el]a[\w-]+)[^]*/;
          var trimptn = /[ \t]+$/;
          var dimensionptn = /stretch|:\s*\w+\-(?:conte|avail)/;
          var imgsrcptn = /([^-])(image-set\()/;
          var webkit = "-webkit-";
          var moz = "-moz-";
          var ms = "-ms-";
          var SEMICOLON = 59;
          var CLOSEBRACES = 125;
          var OPENBRACES = 123;
          var OPENPARENTHESES = 40;
          var CLOSEPARENTHESES = 41;
          var OPENBRACKET = 91;
          var CLOSEBRACKET = 93;
          var NEWLINE = 10;
          var CARRIAGE = 13;
          var TAB = 9;
          var AT = 64;
          var SPACE = 32;
          var AND = 38;
          var DASH = 45;
          var UNDERSCORE = 95;
          var STAR = 42;
          var COMMA = 44;
          var COLON = 58;
          var SINGLEQUOTE = 39;
          var DOUBLEQUOTE = 34;
          var FOWARDSLASH = 47;
          var GREATERTHAN = 62;
          var PLUS = 43;
          var TILDE = 126;
          var NULL = 0;
          var FORMFEED = 12;
          var VERTICALTAB = 11;
          var KEYFRAME = 107;
          var MEDIA = 109;
          var SUPPORTS = 115;
          var PLACEHOLDER = 112;
          var READONLY = 111;
          var IMPORT = 105;
          var CHARSET = 99;
          var DOCUMENT = 100;
          var PAGE = 112;
          var column = 1;
          var line = 1;
          var pattern = 0;
          var cascade = 1;
          var prefix = 1;
          var escape2 = 1;
          var compress = 0;
          var semicolon = 0;
          var preserve = 0;
          var array = [];
          var plugins = [];
          var plugged = 0;
          var should = null;
          var POSTS = -2;
          var PREPS = -1;
          var UNKWN = 0;
          var PROPS = 1;
          var BLCKS = 2;
          var ATRUL = 3;
          var unkwn = 0;
          var keyed = 1;
          var key = "";
          var nscopealt = "";
          var nscope = "";
          function compile(parent, current, body, id, depth) {
            var bracket = 0;
            var comment = 0;
            var parentheses = 0;
            var quote = 0;
            var first = 0;
            var second = 0;
            var code = 0;
            var tail = 0;
            var trail = 0;
            var peak = 0;
            var counter = 0;
            var context = 0;
            var atrule = 0;
            var pseudo = 0;
            var caret = 0;
            var format = 0;
            var insert = 0;
            var invert = 0;
            var length = 0;
            var eof = body.length;
            var eol = eof - 1;
            var char = "";
            var chars = "";
            var child = "";
            var out = "";
            var children = "";
            var flat = "";
            var selector;
            var result;
            while (caret < eof) {
              code = body.charCodeAt(caret);
              if (caret === eol) {
                if (comment + quote + parentheses + bracket !== 0) {
                  if (comment !== 0) {
                    code = comment === FOWARDSLASH ? NEWLINE : FOWARDSLASH;
                  }
                  quote = parentheses = bracket = 0;
                  eof++;
                  eol++;
                }
              }
              if (comment + quote + parentheses + bracket === 0) {
                if (caret === eol) {
                  if (format > 0) {
                    chars = chars.replace(formatptn, "");
                  }
                  if (chars.trim().length > 0) {
                    switch (code) {
                      case SPACE:
                      case TAB:
                      case SEMICOLON:
                      case CARRIAGE:
                      case NEWLINE: {
                        break;
                      }
                      default: {
                        chars += body.charAt(caret);
                      }
                    }
                    code = SEMICOLON;
                  }
                }
                if (insert === 1) {
                  switch (code) {
                    // false flags
                    case OPENBRACES:
                    case CLOSEBRACES:
                    case SEMICOLON:
                    case DOUBLEQUOTE:
                    case SINGLEQUOTE:
                    case OPENPARENTHESES:
                    case CLOSEPARENTHESES:
                    case COMMA: {
                      insert = 0;
                    }
                    // ignore
                    case TAB:
                    case CARRIAGE:
                    case NEWLINE:
                    case SPACE: {
                      break;
                    }
                    // valid
                    default: {
                      insert = 0;
                      length = caret;
                      first = code;
                      caret--;
                      code = SEMICOLON;
                      while (length < eof) {
                        switch (body.charCodeAt(length++)) {
                          case NEWLINE:
                          case CARRIAGE:
                          case SEMICOLON: {
                            ++caret;
                            code = first;
                            length = eof;
                            break;
                          }
                          case COLON: {
                            if (format > 0) {
                              ++caret;
                              code = first;
                            }
                          }
                          case OPENBRACES: {
                            length = eof;
                          }
                        }
                      }
                    }
                  }
                }
                switch (code) {
                  case OPENBRACES: {
                    chars = chars.trim();
                    first = chars.charCodeAt(0);
                    counter = 1;
                    length = ++caret;
                    while (caret < eof) {
                      switch (code = body.charCodeAt(caret)) {
                        case OPENBRACES: {
                          counter++;
                          break;
                        }
                        case CLOSEBRACES: {
                          counter--;
                          break;
                        }
                        case FOWARDSLASH: {
                          switch (second = body.charCodeAt(caret + 1)) {
                            // /*, //
                            case STAR:
                            case FOWARDSLASH: {
                              caret = delimited(second, caret, eol, body);
                            }
                          }
                          break;
                        }
                        // given "[" === 91 & "]" === 93 hence forth 91 + 1 + 1 === 93
                        case OPENBRACKET: {
                          code++;
                        }
                        // given "(" === 40 & ")" === 41 hence forth 40 + 1 === 41
                        case OPENPARENTHESES: {
                          code++;
                        }
                        // quote tail delimiter is identical to the head delimiter hence noop,
                        // fallthrough clauses have been shifted to the correct tail delimiter
                        case DOUBLEQUOTE:
                        case SINGLEQUOTE: {
                          while (caret++ < eol) {
                            if (body.charCodeAt(caret) === code) {
                              break;
                            }
                          }
                        }
                      }
                      if (counter === 0) {
                        break;
                      }
                      caret++;
                    }
                    child = body.substring(length, caret);
                    if (first === NULL) {
                      first = (chars = chars.replace(nullptn, "").trim()).charCodeAt(0);
                    }
                    switch (first) {
                      // @at-rule
                      case AT: {
                        if (format > 0) {
                          chars = chars.replace(formatptn, "");
                        }
                        second = chars.charCodeAt(1);
                        switch (second) {
                          case DOCUMENT:
                          case MEDIA:
                          case SUPPORTS:
                          case DASH: {
                            selector = current;
                            break;
                          }
                          default: {
                            selector = array;
                          }
                        }
                        child = compile(current, selector, child, second, depth + 1);
                        length = child.length;
                        if (preserve > 0 && length === 0) {
                          length = chars.length;
                        }
                        if (plugged > 0) {
                          selector = select(array, chars, invert);
                          result = proxy(ATRUL, child, selector, current, line, column, length, second, depth, id);
                          chars = selector.join("");
                          if (result !== void 0) {
                            if ((length = (child = result.trim()).length) === 0) {
                              second = 0;
                              child = "";
                            }
                          }
                        }
                        if (length > 0) {
                          switch (second) {
                            case SUPPORTS: {
                              chars = chars.replace(supportsptn, supports);
                            }
                            case DOCUMENT:
                            case MEDIA:
                            case DASH: {
                              child = chars + "{" + child + "}";
                              break;
                            }
                            case KEYFRAME: {
                              chars = chars.replace(keyframeptn, "$1 $2" + (keyed > 0 ? key : ""));
                              child = chars + "{" + child + "}";
                              if (prefix === 1 || prefix === 2 && vendor("@" + child, 3)) {
                                child = "@" + webkit + child + "@" + child;
                              } else {
                                child = "@" + child;
                              }
                              break;
                            }
                            default: {
                              child = chars + child;
                              if (id === PAGE) {
                                child = (out += child, "");
                              }
                            }
                          }
                        } else {
                          child = "";
                        }
                        break;
                      }
                      // selector
                      default: {
                        child = compile(current, select(current, chars, invert), child, id, depth + 1);
                      }
                    }
                    children += child;
                    context = 0;
                    insert = 0;
                    pseudo = 0;
                    format = 0;
                    invert = 0;
                    atrule = 0;
                    chars = "";
                    child = "";
                    code = body.charCodeAt(++caret);
                    break;
                  }
                  case CLOSEBRACES:
                  case SEMICOLON: {
                    chars = (format > 0 ? chars.replace(formatptn, "") : chars).trim();
                    if ((length = chars.length) > 1) {
                      if (pseudo === 0) {
                        first = chars.charCodeAt(0);
                        if (first === DASH || first > 96 && first < 123) {
                          length = (chars = chars.replace(" ", ":")).length;
                        }
                      }
                      if (plugged > 0) {
                        if ((result = proxy(PROPS, chars, current, parent, line, column, out.length, id, depth, id)) !== void 0) {
                          if ((length = (chars = result.trim()).length) === 0) {
                            chars = "\0\0";
                          }
                        }
                      }
                      first = chars.charCodeAt(0);
                      second = chars.charCodeAt(1);
                      switch (first) {
                        case NULL: {
                          break;
                        }
                        case AT: {
                          if (second === IMPORT || second === CHARSET) {
                            flat += chars + body.charAt(caret);
                            break;
                          }
                        }
                        default: {
                          if (chars.charCodeAt(length - 1) === COLON) {
                            break;
                          }
                          out += property(chars, first, second, chars.charCodeAt(2));
                        }
                      }
                    }
                    context = 0;
                    insert = 0;
                    pseudo = 0;
                    format = 0;
                    invert = 0;
                    chars = "";
                    code = body.charCodeAt(++caret);
                    break;
                  }
                }
              }
              switch (code) {
                case CARRIAGE:
                case NEWLINE: {
                  if (comment + quote + parentheses + bracket + semicolon === 0) {
                    switch (peak) {
                      case CLOSEPARENTHESES:
                      case SINGLEQUOTE:
                      case DOUBLEQUOTE:
                      case AT:
                      case TILDE:
                      case GREATERTHAN:
                      case STAR:
                      case PLUS:
                      case FOWARDSLASH:
                      case DASH:
                      case COLON:
                      case COMMA:
                      case SEMICOLON:
                      case OPENBRACES:
                      case CLOSEBRACES: {
                        break;
                      }
                      default: {
                        if (pseudo > 0) {
                          insert = 1;
                        }
                      }
                    }
                  }
                  if (comment === FOWARDSLASH) {
                    comment = 0;
                  } else if (cascade + context === 0 && id !== KEYFRAME && chars.length > 0) {
                    format = 1;
                    chars += "\0";
                  }
                  if (plugged * unkwn > 0) {
                    proxy(UNKWN, chars, current, parent, line, column, out.length, id, depth, id);
                  }
                  column = 1;
                  line++;
                  break;
                }
                case SEMICOLON:
                case CLOSEBRACES: {
                  if (comment + quote + parentheses + bracket === 0) {
                    column++;
                    break;
                  }
                }
                default: {
                  column++;
                  char = body.charAt(caret);
                  switch (code) {
                    case TAB:
                    case SPACE: {
                      if (quote + bracket + comment === 0) {
                        switch (tail) {
                          case COMMA:
                          case COLON:
                          case TAB:
                          case SPACE: {
                            char = "";
                            break;
                          }
                          default: {
                            if (code !== SPACE) {
                              char = " ";
                            }
                          }
                        }
                      }
                      break;
                    }
                    // escape breaking control characters
                    case NULL: {
                      char = "\\0";
                      break;
                    }
                    case FORMFEED: {
                      char = "\\f";
                      break;
                    }
                    case VERTICALTAB: {
                      char = "\\v";
                      break;
                    }
                    // &
                    case AND: {
                      if (quote + comment + bracket === 0 && cascade > 0) {
                        invert = 1;
                        format = 1;
                        char = "\f" + char;
                      }
                      break;
                    }
                    // ::p<l>aceholder, l
                    // :read-on<l>y, l
                    case 108: {
                      if (quote + comment + bracket + pattern === 0 && pseudo > 0) {
                        switch (caret - pseudo) {
                          // ::placeholder
                          case 2: {
                            if (tail === PLACEHOLDER && body.charCodeAt(caret - 3) === COLON) {
                              pattern = tail;
                            }
                          }
                          // :read-only
                          case 8: {
                            if (trail === READONLY) {
                              pattern = trail;
                            }
                          }
                        }
                      }
                      break;
                    }
                    // :<pattern>
                    case COLON: {
                      if (quote + comment + bracket === 0) {
                        pseudo = caret;
                      }
                      break;
                    }
                    // selectors
                    case COMMA: {
                      if (comment + parentheses + quote + bracket === 0) {
                        format = 1;
                        char += "\r";
                      }
                      break;
                    }
                    // quotes
                    case DOUBLEQUOTE:
                    case SINGLEQUOTE: {
                      if (comment === 0) {
                        quote = quote === code ? 0 : quote === 0 ? code : quote;
                      }
                      break;
                    }
                    // attributes
                    case OPENBRACKET: {
                      if (quote + comment + parentheses === 0) {
                        bracket++;
                      }
                      break;
                    }
                    case CLOSEBRACKET: {
                      if (quote + comment + parentheses === 0) {
                        bracket--;
                      }
                      break;
                    }
                    // functions
                    case CLOSEPARENTHESES: {
                      if (quote + comment + bracket === 0) {
                        parentheses--;
                      }
                      break;
                    }
                    case OPENPARENTHESES: {
                      if (quote + comment + bracket === 0) {
                        if (context === 0) {
                          switch (tail * 2 + trail * 3) {
                            // :matches
                            case 533: {
                              break;
                            }
                            // :global, :not, :nth-child etc...
                            default: {
                              counter = 0;
                              context = 1;
                            }
                          }
                        }
                        parentheses++;
                      }
                      break;
                    }
                    case AT: {
                      if (comment + parentheses + quote + bracket + pseudo + atrule === 0) {
                        atrule = 1;
                      }
                      break;
                    }
                    // block/line comments
                    case STAR:
                    case FOWARDSLASH: {
                      if (quote + bracket + parentheses > 0) {
                        break;
                      }
                      switch (comment) {
                        // initialize line/block comment context
                        case 0: {
                          switch (code * 2 + body.charCodeAt(caret + 1) * 3) {
                            // //
                            case 235: {
                              comment = FOWARDSLASH;
                              break;
                            }
                            // /*
                            case 220: {
                              length = caret;
                              comment = STAR;
                              break;
                            }
                          }
                          break;
                        }
                        // end block comment context
                        case STAR: {
                          if (code === FOWARDSLASH && tail === STAR && length + 2 !== caret) {
                            if (body.charCodeAt(length + 2) === 33) {
                              out += body.substring(length, caret + 1);
                            }
                            char = "";
                            comment = 0;
                          }
                        }
                      }
                    }
                  }
                  if (comment === 0) {
                    if (cascade + quote + bracket + atrule === 0 && id !== KEYFRAME && code !== SEMICOLON) {
                      switch (code) {
                        case COMMA:
                        case TILDE:
                        case GREATERTHAN:
                        case PLUS:
                        case CLOSEPARENTHESES:
                        case OPENPARENTHESES: {
                          if (context === 0) {
                            switch (tail) {
                              case TAB:
                              case SPACE:
                              case NEWLINE:
                              case CARRIAGE: {
                                char = char + "\0";
                                break;
                              }
                              default: {
                                char = "\0" + char + (code === COMMA ? "" : "\0");
                              }
                            }
                            format = 1;
                          } else {
                            switch (code) {
                              case OPENPARENTHESES: {
                                if (pseudo + 7 === caret && tail === 108) {
                                  pseudo = 0;
                                }
                                context = ++counter;
                                break;
                              }
                              case CLOSEPARENTHESES: {
                                if ((context = --counter) === 0) {
                                  format = 1;
                                  char += "\0";
                                }
                                break;
                              }
                            }
                          }
                          break;
                        }
                        case TAB:
                        case SPACE: {
                          switch (tail) {
                            case NULL:
                            case OPENBRACES:
                            case CLOSEBRACES:
                            case SEMICOLON:
                            case COMMA:
                            case FORMFEED:
                            case TAB:
                            case SPACE:
                            case NEWLINE:
                            case CARRIAGE: {
                              break;
                            }
                            default: {
                              if (context === 0) {
                                format = 1;
                                char += "\0";
                              }
                            }
                          }
                        }
                      }
                    }
                    chars += char;
                    if (code !== SPACE && code !== TAB) {
                      peak = code;
                    }
                  }
                }
              }
              trail = tail;
              tail = code;
              caret++;
            }
            length = out.length;
            if (preserve > 0) {
              if (length === 0 && children.length === 0 && current[0].length === 0 === false) {
                if (id !== MEDIA || current.length === 1 && (cascade > 0 ? nscopealt : nscope) === current[0]) {
                  length = current.join(",").length + 2;
                }
              }
            }
            if (length > 0) {
              selector = cascade === 0 && id !== KEYFRAME ? isolate(current) : current;
              if (plugged > 0) {
                result = proxy(BLCKS, out, selector, parent, line, column, length, id, depth, id);
                if (result !== void 0 && (out = result).length === 0) {
                  return flat + out + children;
                }
              }
              out = selector.join(",") + "{" + out + "}";
              if (prefix * pattern !== 0) {
                if (prefix === 2 && !vendor(out, 2))
                  pattern = 0;
                switch (pattern) {
                  // ::read-only
                  case READONLY: {
                    out = out.replace(readonlyptn, ":" + moz + "$1") + out;
                    break;
                  }
                  // ::placeholder
                  case PLACEHOLDER: {
                    out = out.replace(plcholdrptn, "::" + webkit + "input-$1") + out.replace(plcholdrptn, "::" + moz + "$1") + out.replace(plcholdrptn, ":" + ms + "input-$1") + out;
                    break;
                  }
                }
                pattern = 0;
              }
            }
            return flat + out + children;
          }
          function select(parent, current, invert) {
            var selectors = current.trim().split(selectorptn);
            var out = selectors;
            var length = selectors.length;
            var l = parent.length;
            switch (l) {
              // 0-1 parent selectors
              case 0:
              case 1: {
                for (var i = 0, selector = l === 0 ? "" : parent[0] + " "; i < length; ++i) {
                  out[i] = scope(selector, out[i], invert, l).trim();
                }
                break;
              }
              // >2 parent selectors, nested
              default: {
                for (var i = 0, j = 0, out = []; i < length; ++i) {
                  for (var k = 0; k < l; ++k) {
                    out[j++] = scope(parent[k] + " ", selectors[i], invert, l).trim();
                  }
                }
              }
            }
            return out;
          }
          function scope(parent, current, invert, level) {
            var selector = current;
            var code = selector.charCodeAt(0);
            if (code < 33) {
              code = (selector = selector.trim()).charCodeAt(0);
            }
            switch (code) {
              // &
              case AND: {
                switch (cascade + level) {
                  case 0:
                  case 1: {
                    if (parent.trim().length === 0) {
                      break;
                    }
                  }
                  default: {
                    return selector.replace(andptn, "$1" + parent.trim());
                  }
                }
                break;
              }
              // :
              case COLON: {
                switch (selector.charCodeAt(1)) {
                  // g in :global
                  case 103: {
                    if (escape2 > 0 && cascade > 0) {
                      return selector.replace(escapeptn, "$1").replace(andptn, "$1" + nscope);
                    }
                    break;
                  }
                  default: {
                    return parent.trim() + selector.replace(andptn, "$1" + parent.trim());
                  }
                }
              }
              default: {
                if (invert * cascade > 0 && selector.indexOf("\f") > 0) {
                  return selector.replace(andptn, (parent.charCodeAt(0) === COLON ? "" : "$1") + parent.trim());
                }
              }
            }
            return parent + selector;
          }
          function property(input, first, second, third) {
            var index = 0;
            var out = input + ";";
            var hash = first * 2 + second * 3 + third * 4;
            var cache;
            if (hash === 944) {
              return animation(out);
            } else if (prefix === 0 || prefix === 2 && !vendor(out, 1)) {
              return out;
            }
            switch (hash) {
              // text-decoration/text-size-adjust/text-shadow/text-align/text-transform: t, e, x
              case 1015: {
                return out.charCodeAt(10) === 97 ? webkit + out + out : out;
              }
              // filter/fill f, i, l
              case 951: {
                return out.charCodeAt(3) === 116 ? webkit + out + out : out;
              }
              // color/column, c, o, l
              case 963: {
                return out.charCodeAt(5) === 110 ? webkit + out + out : out;
              }
              // box-decoration-break, b, o, x
              case 1009: {
                if (out.charCodeAt(4) !== 100) {
                  break;
                }
              }
              // mask, m, a, s
              // clip-path, c, l, i
              case 969:
              case 942: {
                return webkit + out + out;
              }
              // appearance: a, p, p
              case 978: {
                return webkit + out + moz + out + out;
              }
              // hyphens: h, y, p
              // user-select: u, s, e
              case 1019:
              case 983: {
                return webkit + out + moz + out + ms + out + out;
              }
              // background/backface-visibility, b, a, c
              case 883: {
                if (out.charCodeAt(8) === DASH) {
                  return webkit + out + out;
                }
                if (out.indexOf("image-set(", 11) > 0) {
                  return out.replace(imgsrcptn, "$1" + webkit + "$2") + out;
                }
                return out;
              }
              // flex: f, l, e
              case 932: {
                if (out.charCodeAt(4) === DASH) {
                  switch (out.charCodeAt(5)) {
                    // flex-grow, g
                    case 103: {
                      return webkit + "box-" + out.replace("-grow", "") + webkit + out + ms + out.replace("grow", "positive") + out;
                    }
                    // flex-shrink, s
                    case 115: {
                      return webkit + out + ms + out.replace("shrink", "negative") + out;
                    }
                    // flex-basis, b
                    case 98: {
                      return webkit + out + ms + out.replace("basis", "preferred-size") + out;
                    }
                  }
                }
                return webkit + out + ms + out + out;
              }
              // order: o, r, d
              case 964: {
                return webkit + out + ms + "flex-" + out + out;
              }
              // justify-items/justify-content, j, u, s
              case 1023: {
                if (out.charCodeAt(8) !== 99) {
                  break;
                }
                cache = out.substring(out.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify");
                return webkit + "box-pack" + cache + webkit + out + ms + "flex-pack" + cache + out;
              }
              // cursor, c, u, r
              case 1005: {
                return cursorptn.test(out) ? out.replace(colonptn, ":" + webkit) + out.replace(colonptn, ":" + moz) + out : out;
              }
              // writing-mode, w, r, i
              case 1e3: {
                cache = out.substring(13).trim();
                index = cache.indexOf("-") + 1;
                switch (cache.charCodeAt(0) + cache.charCodeAt(index)) {
                  // vertical-lr
                  case 226: {
                    cache = out.replace(writingptn, "tb");
                    break;
                  }
                  // vertical-rl
                  case 232: {
                    cache = out.replace(writingptn, "tb-rl");
                    break;
                  }
                  // horizontal-tb
                  case 220: {
                    cache = out.replace(writingptn, "lr");
                    break;
                  }
                  default: {
                    return out;
                  }
                }
                return webkit + out + ms + cache + out;
              }
              // position: sticky
              case 1017: {
                if (out.indexOf("sticky", 9) === -1) {
                  return out;
                }
              }
              // display(flex/inline-flex/inline-box): d, i, s
              case 975: {
                index = (out = input).length - 10;
                cache = (out.charCodeAt(index) === 33 ? out.substring(0, index) : out).substring(input.indexOf(":", 7) + 1).trim();
                switch (hash = cache.charCodeAt(0) + (cache.charCodeAt(7) | 0)) {
                  // inline-
                  case 203: {
                    if (cache.charCodeAt(8) < 111) {
                      break;
                    }
                  }
                  // inline-box/sticky
                  case 115: {
                    out = out.replace(cache, webkit + cache) + ";" + out;
                    break;
                  }
                  // inline-flex
                  // flex
                  case 207:
                  case 102: {
                    out = out.replace(cache, webkit + (hash > 102 ? "inline-" : "") + "box") + ";" + out.replace(cache, webkit + cache) + ";" + out.replace(cache, ms + cache + "box") + ";" + out;
                  }
                }
                return out + ";";
              }
              // align-items, align-center, align-self: a, l, i, -
              case 938: {
                if (out.charCodeAt(5) === DASH) {
                  switch (out.charCodeAt(6)) {
                    // align-items, i
                    case 105: {
                      cache = out.replace("-items", "");
                      return webkit + out + webkit + "box-" + cache + ms + "flex-" + cache + out;
                    }
                    // align-self, s
                    case 115: {
                      return webkit + out + ms + "flex-item-" + out.replace(selfptn, "") + out;
                    }
                    // align-content
                    default: {
                      return webkit + out + ms + "flex-line-pack" + out.replace("align-content", "").replace(selfptn, "") + out;
                    }
                  }
                }
                break;
              }
              // min/max
              case 973:
              case 989: {
                if (out.charCodeAt(3) !== DASH || out.charCodeAt(4) === 122) {
                  break;
                }
              }
              // height/width: min-content / width: max-content
              case 931:
              case 953: {
                if (dimensionptn.test(input) === true) {
                  if ((cache = input.substring(input.indexOf(":") + 1)).charCodeAt(0) === 115)
                    return property(input.replace("stretch", "fill-available"), first, second, third).replace(":fill-available", ":stretch");
                  else
                    return out.replace(cache, webkit + cache) + out.replace(cache, moz + cache.replace("fill-", "")) + out;
                }
                break;
              }
              // transform, transition: t, r, a
              case 962: {
                out = webkit + out + (out.charCodeAt(5) === 102 ? ms + out : "") + out;
                if (second + third === 211 && out.charCodeAt(13) === 105 && out.indexOf("transform", 10) > 0) {
                  return out.substring(0, out.indexOf(";", 27) + 1).replace(transformptn, "$1" + webkit + "$2") + out;
                }
                break;
              }
            }
            return out;
          }
          function vendor(content, context) {
            var index = content.indexOf(context === 1 ? ":" : "{");
            var key2 = content.substring(0, context !== 3 ? index : 10);
            var value = content.substring(index + 1, content.length - 1);
            return should(context !== 2 ? key2 : key2.replace(pseudofmt, "$1"), value, context);
          }
          function supports(match2, group) {
            var out = property(group, group.charCodeAt(0), group.charCodeAt(1), group.charCodeAt(2));
            return out !== group + ";" ? out.replace(propertyptn, " or ($1)").substring(4) : "(" + group + ")";
          }
          function animation(input) {
            var length = input.length;
            var index = input.indexOf(":", 9) + 1;
            var declare = input.substring(0, index).trim();
            var out = input.substring(index, length - 1).trim();
            switch (input.charCodeAt(9) * keyed) {
              case 0: {
                break;
              }
              // animation-*, -
              case DASH: {
                if (input.charCodeAt(10) !== 110) {
                  break;
                }
              }
              // animation/animation-name
              default: {
                var list = out.split((out = "", animationptn));
                for (var i = 0, index = 0, length = list.length; i < length; index = 0, ++i) {
                  var value = list[i];
                  var items = value.split(propertiesptn);
                  while (value = items[index]) {
                    var peak = value.charCodeAt(0);
                    if (keyed === 1 && // letters
                    (peak > AT && peak < 90 || peak > 96 && peak < 123 || peak === UNDERSCORE || // dash but not in sequence i.e --
                    peak === DASH && value.charCodeAt(1) !== DASH)) {
                      switch (isNaN(parseFloat(value)) + (value.indexOf("(") !== -1)) {
                        case 1: {
                          switch (value) {
                            // not a valid reserved keyword
                            case "infinite":
                            case "alternate":
                            case "backwards":
                            case "running":
                            case "normal":
                            case "forwards":
                            case "both":
                            case "none":
                            case "linear":
                            case "ease":
                            case "ease-in":
                            case "ease-out":
                            case "ease-in-out":
                            case "paused":
                            case "reverse":
                            case "alternate-reverse":
                            case "inherit":
                            case "initial":
                            case "unset":
                            case "step-start":
                            case "step-end": {
                              break;
                            }
                            default: {
                              value += key;
                            }
                          }
                        }
                      }
                    }
                    items[index++] = value;
                  }
                  out += (i === 0 ? "" : ",") + items.join(" ");
                }
              }
            }
            out = declare + out + ";";
            if (prefix === 1 || prefix === 2 && vendor(out, 1))
              return webkit + out + out;
            return out;
          }
          function isolate(current) {
            for (var i = 0, length = current.length, selector = Array(length), padding, element; i < length; ++i) {
              var elements = current[i].split(elementptn);
              var out = "";
              for (var j = 0, size = 0, tail = 0, code = 0, l = elements.length; j < l; ++j) {
                if ((size = (element = elements[j]).length) === 0 && l > 1) {
                  continue;
                }
                tail = out.charCodeAt(out.length - 1);
                code = element.charCodeAt(0);
                padding = "";
                if (j !== 0) {
                  switch (tail) {
                    case STAR:
                    case TILDE:
                    case GREATERTHAN:
                    case PLUS:
                    case SPACE:
                    case OPENPARENTHESES: {
                      break;
                    }
                    default: {
                      padding = " ";
                    }
                  }
                }
                switch (code) {
                  case AND: {
                    element = padding + nscopealt;
                  }
                  case TILDE:
                  case GREATERTHAN:
                  case PLUS:
                  case SPACE:
                  case CLOSEPARENTHESES:
                  case OPENPARENTHESES: {
                    break;
                  }
                  case OPENBRACKET: {
                    element = padding + element + nscopealt;
                    break;
                  }
                  case COLON: {
                    switch (element.charCodeAt(1) * 2 + element.charCodeAt(2) * 3) {
                      // :global
                      case 530: {
                        if (escape2 > 0) {
                          element = padding + element.substring(8, size - 1);
                          break;
                        }
                      }
                      // :hover, :nth-child(), ...
                      default: {
                        if (j < 1 || elements[j - 1].length < 1) {
                          element = padding + nscopealt + element;
                        }
                      }
                    }
                    break;
                  }
                  case COMMA: {
                    padding = "";
                  }
                  default: {
                    if (size > 1 && element.indexOf(":") > 0) {
                      element = padding + element.replace(pseudoptn, "$1" + nscopealt + "$2");
                    } else {
                      element = padding + element + nscopealt;
                    }
                  }
                }
                out += element;
              }
              selector[i] = out.replace(formatptn, "").trim();
            }
            return selector;
          }
          function proxy(context, content, selectors, parents, line2, column2, length, id, depth, at) {
            for (var i = 0, out = content, next; i < plugged; ++i) {
              switch (next = plugins[i].call(stylis, context, out, selectors, parents, line2, column2, length, id, depth, at)) {
                case void 0:
                case false:
                case true:
                case null: {
                  break;
                }
                default: {
                  out = next;
                }
              }
            }
            if (out !== content) {
              return out;
            }
          }
          function delimited(code, index, length, body) {
            for (var i = index + 1; i < length; ++i) {
              switch (body.charCodeAt(i)) {
                // /*
                case FOWARDSLASH: {
                  if (code === STAR) {
                    if (body.charCodeAt(i - 1) === STAR && index + 2 !== i) {
                      return i + 1;
                    }
                  }
                  break;
                }
                // //
                case NEWLINE: {
                  if (code === FOWARDSLASH) {
                    return i + 1;
                  }
                }
              }
            }
            return i;
          }
          function match(type, index, length, body) {
            for (var i = index + 1; i < length; ++i) {
              switch (body.charCodeAt(i)) {
                case type: {
                  return i;
                }
              }
            }
            return i;
          }
          function minify(output) {
            return output.replace(formatptn, "").replace(beforeptn, "").replace(afterptn, "$1").replace(tailptn, "$1").replace(whiteptn, " ");
          }
          function use(plugin) {
            switch (plugin) {
              case void 0:
              case null: {
                plugged = plugins.length = 0;
                break;
              }
              default: {
                if (typeof plugin === "function") {
                  plugins[plugged++] = plugin;
                } else if (typeof plugin === "object") {
                  for (var i = 0, length = plugin.length; i < length; ++i) {
                    use(plugin[i]);
                  }
                } else {
                  unkwn = !!plugin | 0;
                }
              }
            }
            return use;
          }
          function set2(options2) {
            for (var name in options2) {
              var value = options2[name];
              switch (name) {
                case "keyframe":
                  keyed = value | 0;
                  break;
                case "global":
                  escape2 = value | 0;
                  break;
                case "cascade":
                  cascade = value | 0;
                  break;
                case "compress":
                  compress = value | 0;
                  break;
                case "semicolon":
                  semicolon = value | 0;
                  break;
                case "preserve":
                  preserve = value | 0;
                  break;
                case "prefix":
                  should = null;
                  if (!value) {
                    prefix = 0;
                  } else if (typeof value !== "function") {
                    prefix = 1;
                  } else {
                    prefix = 2;
                    should = value;
                  }
              }
            }
            return set2;
          }
          function stylis(selector, input) {
            if (this !== void 0 && this.constructor === stylis) {
              return factory(selector);
            }
            var ns = selector;
            var code = ns.charCodeAt(0);
            if (code < 33) {
              code = (ns = ns.trim()).charCodeAt(0);
            }
            if (keyed > 0) {
              key = ns.replace(invalidptn, code === OPENBRACKET ? "" : "-");
            }
            code = 1;
            if (cascade === 1) {
              nscope = ns;
            } else {
              nscopealt = ns;
            }
            var selectors = [nscope];
            var result;
            if (plugged > 0) {
              result = proxy(PREPS, input, selectors, selectors, line, column, 0, 0, 0, 0);
              if (result !== void 0 && typeof result === "string") {
                input = result;
              }
            }
            var output = compile(array, selectors, input, 0, 0);
            if (plugged > 0) {
              result = proxy(POSTS, output, selectors, selectors, line, column, output.length, 0, 0, 0);
              if (result !== void 0 && typeof (output = result) !== "string") {
                code = 0;
              }
            }
            key = "";
            nscope = "";
            nscopealt = "";
            pattern = 0;
            line = 1;
            column = 1;
            return compress * code === 0 ? output : minify(output);
          }
          stylis["use"] = use;
          stylis["set"] = set2;
          if (options !== void 0) {
            set2(options);
          }
          return stylis;
        }
      );
    }
  });

  // node_modules/vxv-parser/dist/vxv-parser.umd.js
  var require_vxv_parser_umd = __commonJS({
    "node_modules/vxv-parser/dist/vxv-parser.umd.js"(exports, module) {
      init_polyfills();
      !(function(e, n) {
        "object" == typeof exports && "undefined" != typeof module ? n() : "function" == typeof define && define.amd ? define(n) : n();
      })(0, function() {
        var e = require_stylis();
        e.set({ semicolon: true });
        module.exports = function(n, o) {
          return e(n, o);
        };
      });
    }
  });

  // node_modules/vxv-state/dist/vxv-state.umd.js
  var require_vxv_state_umd = __commonJS({
    "node_modules/vxv-state/dist/vxv-state.umd.js"(exports, module) {
      init_polyfills();
      !(function(e, n) {
        "object" == typeof exports && "undefined" != typeof module ? n() : "function" == typeof define && define.amd ? define(n) : n();
      })(0, function() {
        var e = {};
        module.exports = { set: function(n, o) {
          e[n] = o;
        }, all: function() {
          return e;
        } };
      });
    }
  });

  // node_modules/vxv/dist/vxv.umd.js
  var require_vxv_umd = __commonJS({
    "node_modules/vxv/dist/vxv.umd.js"(exports, module) {
      init_polyfills();
      !(function(e, r) {
        "object" == typeof exports && "undefined" != typeof module ? r() : "function" == typeof define && define.amd ? define(r) : r();
      })(0, function() {
        var e = require_vxv_hash_umd(), r = require_vxv_insert_umd(), t = require_vxv_parser_umd(), n = require_vxv_state_umd(), v = function(v2) {
          for (var i = [], o = arguments.length - 1; o-- > 0; ) i[o] = arguments[o + 1];
          v2 = Array.isArray(v2) ? v2 : [v2];
          var a = function(e2) {
            for (var r2 = [], t2 = arguments.length - 1; t2-- > 0; ) r2[t2] = arguments[t2 + 1];
            var v3 = "";
            for (var i2 in e2) String(r2[i2]).startsWith("vxv_") ? v3 += n.all()[r2[i2].substring(4)] : v3 += e2[i2] + (void 0 !== r2[i2] ? r2[i2] : "");
            return v3;
          }.apply(void 0, [v2].concat(i)), f = e(a), u = t(".vxv_" + f, a);
          return n.set(f, u), r(u, f), "vxv_" + f;
        };
        v.state = n, module.exports = v;
      });
    }
  });

  // node_modules/has-symbols/shams.js
  var require_shams = __commonJS({
    "node_modules/has-symbols/shams.js"(exports, module) {
      "use strict";
      init_polyfills();
      module.exports = function hasSymbols() {
        if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
          return false;
        }
        if (typeof Symbol.iterator === "symbol") {
          return true;
        }
        var obj = {};
        var sym = /* @__PURE__ */ Symbol("test");
        var symObj = Object(sym);
        if (typeof sym === "string") {
          return false;
        }
        if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
          return false;
        }
        if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
          return false;
        }
        var symVal = 42;
        obj[sym] = symVal;
        for (var _ in obj) {
          return false;
        }
        if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
          return false;
        }
        if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
          return false;
        }
        var syms = Object.getOwnPropertySymbols(obj);
        if (syms.length !== 1 || syms[0] !== sym) {
          return false;
        }
        if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
          return false;
        }
        if (typeof Object.getOwnPropertyDescriptor === "function") {
          var descriptor = (
            /** @type {PropertyDescriptor} */
            Object.getOwnPropertyDescriptor(obj, sym)
          );
          if (descriptor.value !== symVal || descriptor.enumerable !== true) {
            return false;
          }
        }
        return true;
      };
    }
  });

  // node_modules/has-tostringtag/shams.js
  var require_shams2 = __commonJS({
    "node_modules/has-tostringtag/shams.js"(exports, module) {
      "use strict";
      init_polyfills();
      var hasSymbols = require_shams();
      module.exports = function hasToStringTagShams() {
        return hasSymbols() && !!Symbol.toStringTag;
      };
    }
  });

  // node_modules/es-object-atoms/index.js
  var require_es_object_atoms = __commonJS({
    "node_modules/es-object-atoms/index.js"(exports, module) {
      "use strict";
      init_polyfills();
      module.exports = Object;
    }
  });

  // node_modules/es-errors/index.js
  var require_es_errors = __commonJS({
    "node_modules/es-errors/index.js"(exports, module) {
      "use strict";
      init_polyfills();
      module.exports = Error;
    }
  });

  // node_modules/es-errors/eval.js
  var require_eval = __commonJS({
    "node_modules/es-errors/eval.js"(exports, module) {
      "use strict";
      init_polyfills();
      module.exports = EvalError;
    }
  });

  // node_modules/es-errors/range.js
  var require_range = __commonJS({
    "node_modules/es-errors/range.js"(exports, module) {
      "use strict";
      init_polyfills();
      module.exports = RangeError;
    }
  });

  // node_modules/es-errors/ref.js
  var require_ref = __commonJS({
    "node_modules/es-errors/ref.js"(exports, module) {
      "use strict";
      init_polyfills();
      module.exports = ReferenceError;
    }
  });

  // node_modules/es-errors/syntax.js
  var require_syntax = __commonJS({
    "node_modules/es-errors/syntax.js"(exports, module) {
      "use strict";
      init_polyfills();
      module.exports = SyntaxError;
    }
  });

  // node_modules/es-errors/type.js
  var require_type = __commonJS({
    "node_modules/es-errors/type.js"(exports, module) {
      "use strict";
      init_polyfills();
      module.exports = TypeError;
    }
  });

  // node_modules/es-errors/uri.js
  var require_uri = __commonJS({
    "node_modules/es-errors/uri.js"(exports, module) {
      "use strict";
      init_polyfills();
      module.exports = URIError;
    }
  });

  // node_modules/math-intrinsics/abs.js
  var require_abs = __commonJS({
    "node_modules/math-intrinsics/abs.js"(exports, module) {
      "use strict";
      init_polyfills();
      module.exports = Math.abs;
    }
  });

  // node_modules/math-intrinsics/floor.js
  var require_floor = __commonJS({
    "node_modules/math-intrinsics/floor.js"(exports, module) {
      "use strict";
      init_polyfills();
      module.exports = Math.floor;
    }
  });

  // node_modules/math-intrinsics/max.js
  var require_max = __commonJS({
    "node_modules/math-intrinsics/max.js"(exports, module) {
      "use strict";
      init_polyfills();
      module.exports = Math.max;
    }
  });

  // node_modules/math-intrinsics/min.js
  var require_min = __commonJS({
    "node_modules/math-intrinsics/min.js"(exports, module) {
      "use strict";
      init_polyfills();
      module.exports = Math.min;
    }
  });

  // node_modules/math-intrinsics/pow.js
  var require_pow = __commonJS({
    "node_modules/math-intrinsics/pow.js"(exports, module) {
      "use strict";
      init_polyfills();
      module.exports = Math.pow;
    }
  });

  // node_modules/math-intrinsics/round.js
  var require_round = __commonJS({
    "node_modules/math-intrinsics/round.js"(exports, module) {
      "use strict";
      init_polyfills();
      module.exports = Math.round;
    }
  });

  // node_modules/math-intrinsics/isNaN.js
  var require_isNaN = __commonJS({
    "node_modules/math-intrinsics/isNaN.js"(exports, module) {
      "use strict";
      init_polyfills();
      module.exports = Number.isNaN || function isNaN2(a) {
        return a !== a;
      };
    }
  });

  // node_modules/math-intrinsics/sign.js
  var require_sign = __commonJS({
    "node_modules/math-intrinsics/sign.js"(exports, module) {
      "use strict";
      init_polyfills();
      var $isNaN = require_isNaN();
      module.exports = function sign(number) {
        if ($isNaN(number) || number === 0) {
          return number;
        }
        return number < 0 ? -1 : 1;
      };
    }
  });

  // node_modules/gopd/gOPD.js
  var require_gOPD = __commonJS({
    "node_modules/gopd/gOPD.js"(exports, module) {
      "use strict";
      init_polyfills();
      module.exports = Object.getOwnPropertyDescriptor;
    }
  });

  // node_modules/gopd/index.js
  var require_gopd = __commonJS({
    "node_modules/gopd/index.js"(exports, module) {
      "use strict";
      init_polyfills();
      var $gOPD = require_gOPD();
      if ($gOPD) {
        try {
          $gOPD([], "length");
        } catch (e) {
          $gOPD = null;
        }
      }
      module.exports = $gOPD;
    }
  });

  // node_modules/es-define-property/index.js
  var require_es_define_property = __commonJS({
    "node_modules/es-define-property/index.js"(exports, module) {
      "use strict";
      init_polyfills();
      var $defineProperty = Object.defineProperty || false;
      if ($defineProperty) {
        try {
          $defineProperty({}, "a", { value: 1 });
        } catch (e) {
          $defineProperty = false;
        }
      }
      module.exports = $defineProperty;
    }
  });

  // node_modules/has-symbols/index.js
  var require_has_symbols = __commonJS({
    "node_modules/has-symbols/index.js"(exports, module) {
      "use strict";
      init_polyfills();
      var origSymbol = typeof Symbol !== "undefined" && Symbol;
      var hasSymbolSham = require_shams();
      module.exports = function hasNativeSymbols() {
        if (typeof origSymbol !== "function") {
          return false;
        }
        if (typeof Symbol !== "function") {
          return false;
        }
        if (typeof origSymbol("foo") !== "symbol") {
          return false;
        }
        if (typeof /* @__PURE__ */ Symbol("bar") !== "symbol") {
          return false;
        }
        return hasSymbolSham();
      };
    }
  });

  // node_modules/get-proto/Reflect.getPrototypeOf.js
  var require_Reflect_getPrototypeOf = __commonJS({
    "node_modules/get-proto/Reflect.getPrototypeOf.js"(exports, module) {
      "use strict";
      init_polyfills();
      module.exports = typeof Reflect !== "undefined" && Reflect.getPrototypeOf || null;
    }
  });

  // node_modules/get-proto/Object.getPrototypeOf.js
  var require_Object_getPrototypeOf = __commonJS({
    "node_modules/get-proto/Object.getPrototypeOf.js"(exports, module) {
      "use strict";
      init_polyfills();
      var $Object = require_es_object_atoms();
      module.exports = $Object.getPrototypeOf || null;
    }
  });

  // node_modules/function-bind/implementation.js
  var require_implementation = __commonJS({
    "node_modules/function-bind/implementation.js"(exports, module) {
      "use strict";
      init_polyfills();
      var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
      var toStr = Object.prototype.toString;
      var max = Math.max;
      var funcType = "[object Function]";
      var concatty = function concatty2(a, b) {
        var arr = [];
        for (var i = 0; i < a.length; i += 1) {
          arr[i] = a[i];
        }
        for (var j = 0; j < b.length; j += 1) {
          arr[j + a.length] = b[j];
        }
        return arr;
      };
      var slicy = function slicy2(arrLike, offset) {
        var arr = [];
        for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
          arr[j] = arrLike[i];
        }
        return arr;
      };
      var joiny = function(arr, joiner) {
        var str = "";
        for (var i = 0; i < arr.length; i += 1) {
          str += arr[i];
          if (i + 1 < arr.length) {
            str += joiner;
          }
        }
        return str;
      };
      module.exports = function bind(that) {
        var target = this;
        if (typeof target !== "function" || toStr.apply(target) !== funcType) {
          throw new TypeError(ERROR_MESSAGE + target);
        }
        var args = slicy(arguments, 1);
        var bound;
        var binder = function() {
          if (this instanceof bound) {
            var result = target.apply(
              this,
              concatty(args, arguments)
            );
            if (Object(result) === result) {
              return result;
            }
            return this;
          }
          return target.apply(
            that,
            concatty(args, arguments)
          );
        };
        var boundLength = max(0, target.length - args.length);
        var boundArgs = [];
        for (var i = 0; i < boundLength; i++) {
          boundArgs[i] = "$" + i;
        }
        bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
        if (target.prototype) {
          var Empty = function Empty2() {
          };
          Empty.prototype = target.prototype;
          bound.prototype = new Empty();
          Empty.prototype = null;
        }
        return bound;
      };
    }
  });

  // node_modules/function-bind/index.js
  var require_function_bind = __commonJS({
    "node_modules/function-bind/index.js"(exports, module) {
      "use strict";
      init_polyfills();
      var implementation = require_implementation();
      module.exports = Function.prototype.bind || implementation;
    }
  });

  // node_modules/call-bind-apply-helpers/functionCall.js
  var require_functionCall = __commonJS({
    "node_modules/call-bind-apply-helpers/functionCall.js"(exports, module) {
      "use strict";
      init_polyfills();
      module.exports = Function.prototype.call;
    }
  });

  // node_modules/call-bind-apply-helpers/functionApply.js
  var require_functionApply = __commonJS({
    "node_modules/call-bind-apply-helpers/functionApply.js"(exports, module) {
      "use strict";
      init_polyfills();
      module.exports = Function.prototype.apply;
    }
  });

  // node_modules/call-bind-apply-helpers/reflectApply.js
  var require_reflectApply = __commonJS({
    "node_modules/call-bind-apply-helpers/reflectApply.js"(exports, module) {
      "use strict";
      init_polyfills();
      module.exports = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
    }
  });

  // node_modules/call-bind-apply-helpers/actualApply.js
  var require_actualApply = __commonJS({
    "node_modules/call-bind-apply-helpers/actualApply.js"(exports, module) {
      "use strict";
      init_polyfills();
      var bind = require_function_bind();
      var $apply = require_functionApply();
      var $call = require_functionCall();
      var $reflectApply = require_reflectApply();
      module.exports = $reflectApply || bind.call($call, $apply);
    }
  });

  // node_modules/call-bind-apply-helpers/index.js
  var require_call_bind_apply_helpers = __commonJS({
    "node_modules/call-bind-apply-helpers/index.js"(exports, module) {
      "use strict";
      init_polyfills();
      var bind = require_function_bind();
      var $TypeError = require_type();
      var $call = require_functionCall();
      var $actualApply = require_actualApply();
      module.exports = function callBindBasic(args) {
        if (args.length < 1 || typeof args[0] !== "function") {
          throw new $TypeError("a function is required");
        }
        return $actualApply(bind, $call, args);
      };
    }
  });

  // node_modules/dunder-proto/get.js
  var require_get = __commonJS({
    "node_modules/dunder-proto/get.js"(exports, module) {
      "use strict";
      init_polyfills();
      var callBind = require_call_bind_apply_helpers();
      var gOPD = require_gopd();
      var hasProtoAccessor;
      try {
        hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */
        [].__proto__ === Array.prototype;
      } catch (e) {
        if (!e || typeof e !== "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") {
          throw e;
        }
      }
      var desc = !!hasProtoAccessor && gOPD && gOPD(
        Object.prototype,
        /** @type {keyof typeof Object.prototype} */
        "__proto__"
      );
      var $Object = Object;
      var $getPrototypeOf = $Object.getPrototypeOf;
      module.exports = desc && typeof desc.get === "function" ? callBind([desc.get]) : typeof $getPrototypeOf === "function" ? (
        /** @type {import('./get')} */
        function getDunder(value) {
          return $getPrototypeOf(value == null ? value : $Object(value));
        }
      ) : false;
    }
  });

  // node_modules/get-proto/index.js
  var require_get_proto = __commonJS({
    "node_modules/get-proto/index.js"(exports, module) {
      "use strict";
      init_polyfills();
      var reflectGetProto = require_Reflect_getPrototypeOf();
      var originalGetProto = require_Object_getPrototypeOf();
      var getDunderProto = require_get();
      module.exports = reflectGetProto ? function getProto(O) {
        return reflectGetProto(O);
      } : originalGetProto ? function getProto(O) {
        if (!O || typeof O !== "object" && typeof O !== "function") {
          throw new TypeError("getProto: not an object");
        }
        return originalGetProto(O);
      } : getDunderProto ? function getProto(O) {
        return getDunderProto(O);
      } : null;
    }
  });

  // node_modules/hasown/index.js
  var require_hasown = __commonJS({
    "node_modules/hasown/index.js"(exports, module) {
      "use strict";
      init_polyfills();
      var call = Function.prototype.call;
      var $hasOwn = Object.prototype.hasOwnProperty;
      var bind = require_function_bind();
      module.exports = bind.call(call, $hasOwn);
    }
  });

  // node_modules/get-intrinsic/index.js
  var require_get_intrinsic = __commonJS({
    "node_modules/get-intrinsic/index.js"(exports, module) {
      "use strict";
      init_polyfills();
      var undefined2;
      var $Object = require_es_object_atoms();
      var $Error = require_es_errors();
      var $EvalError = require_eval();
      var $RangeError = require_range();
      var $ReferenceError = require_ref();
      var $SyntaxError = require_syntax();
      var $TypeError = require_type();
      var $URIError = require_uri();
      var abs = require_abs();
      var floor = require_floor();
      var max = require_max();
      var min = require_min();
      var pow = require_pow();
      var round = require_round();
      var sign = require_sign();
      var $Function = Function;
      var getEvalledConstructor = function(expressionSyntax) {
        try {
          return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
        } catch (e) {
        }
      };
      var $gOPD = require_gopd();
      var $defineProperty = require_es_define_property();
      var throwTypeError = function() {
        throw new $TypeError();
      };
      var ThrowTypeError = $gOPD ? (function() {
        try {
          arguments.callee;
          return throwTypeError;
        } catch (calleeThrows) {
          try {
            return $gOPD(arguments, "callee").get;
          } catch (gOPDthrows) {
            return throwTypeError;
          }
        }
      })() : throwTypeError;
      var hasSymbols = require_has_symbols()();
      var getProto = require_get_proto();
      var $ObjectGPO = require_Object_getPrototypeOf();
      var $ReflectGPO = require_Reflect_getPrototypeOf();
      var $apply = require_functionApply();
      var $call = require_functionCall();
      var needsEval = {};
      var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined2 : getProto(Uint8Array);
      var INTRINSICS = {
        __proto__: null,
        "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
        "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined2,
        "%AsyncFromSyncIteratorPrototype%": undefined2,
        "%AsyncFunction%": needsEval,
        "%AsyncGenerator%": needsEval,
        "%AsyncGeneratorFunction%": needsEval,
        "%AsyncIteratorPrototype%": needsEval,
        "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
        "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
        "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
        "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": $Error,
        "%eval%": eval,
        // eslint-disable-line no-eval
        "%EvalError%": $EvalError,
        "%Float16Array%": typeof Float16Array === "undefined" ? undefined2 : Float16Array,
        "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
        "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
        "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
        "%Function%": $Function,
        "%GeneratorFunction%": needsEval,
        "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
        "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
        "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined2,
        "%JSON%": typeof JSON === "object" ? JSON : undefined2,
        "%Map%": typeof Map === "undefined" ? undefined2 : Map,
        "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": $Object,
        "%Object.getOwnPropertyDescriptor%": $gOPD,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
        "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
        "%RangeError%": $RangeError,
        "%ReferenceError%": $ReferenceError,
        "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set === "undefined" ? undefined2 : Set,
        "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined2,
        "%Symbol%": hasSymbols ? Symbol : undefined2,
        "%SyntaxError%": $SyntaxError,
        "%ThrowTypeError%": ThrowTypeError,
        "%TypedArray%": TypedArray,
        "%TypeError%": $TypeError,
        "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
        "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
        "%URIError%": $URIError,
        "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
        "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
        "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet,
        "%Function.prototype.call%": $call,
        "%Function.prototype.apply%": $apply,
        "%Object.defineProperty%": $defineProperty,
        "%Object.getPrototypeOf%": $ObjectGPO,
        "%Math.abs%": abs,
        "%Math.floor%": floor,
        "%Math.max%": max,
        "%Math.min%": min,
        "%Math.pow%": pow,
        "%Math.round%": round,
        "%Math.sign%": sign,
        "%Reflect.getPrototypeOf%": $ReflectGPO
      };
      if (getProto) {
        try {
          null.error;
        } catch (e) {
          errorProto = getProto(getProto(e));
          INTRINSICS["%Error.prototype%"] = errorProto;
        }
      }
      var errorProto;
      var doEval = function doEval2(name) {
        var value;
        if (name === "%AsyncFunction%") {
          value = getEvalledConstructor("async function () {}");
        } else if (name === "%GeneratorFunction%") {
          value = getEvalledConstructor("function* () {}");
        } else if (name === "%AsyncGeneratorFunction%") {
          value = getEvalledConstructor("async function* () {}");
        } else if (name === "%AsyncGenerator%") {
          var fn = doEval2("%AsyncGeneratorFunction%");
          if (fn) {
            value = fn.prototype;
          }
        } else if (name === "%AsyncIteratorPrototype%") {
          var gen = doEval2("%AsyncGenerator%");
          if (gen && getProto) {
            value = getProto(gen.prototype);
          }
        }
        INTRINSICS[name] = value;
        return value;
      };
      var LEGACY_ALIASES = {
        __proto__: null,
        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
        "%ArrayPrototype%": ["Array", "prototype"],
        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
        "%ArrayProto_values%": ["Array", "prototype", "values"],
        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
        "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
        "%BooleanPrototype%": ["Boolean", "prototype"],
        "%DataViewPrototype%": ["DataView", "prototype"],
        "%DatePrototype%": ["Date", "prototype"],
        "%ErrorPrototype%": ["Error", "prototype"],
        "%EvalErrorPrototype%": ["EvalError", "prototype"],
        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
        "%FunctionPrototype%": ["Function", "prototype"],
        "%Generator%": ["GeneratorFunction", "prototype"],
        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
        "%JSONParse%": ["JSON", "parse"],
        "%JSONStringify%": ["JSON", "stringify"],
        "%MapPrototype%": ["Map", "prototype"],
        "%NumberPrototype%": ["Number", "prototype"],
        "%ObjectPrototype%": ["Object", "prototype"],
        "%ObjProto_toString%": ["Object", "prototype", "toString"],
        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
        "%PromisePrototype%": ["Promise", "prototype"],
        "%PromiseProto_then%": ["Promise", "prototype", "then"],
        "%Promise_all%": ["Promise", "all"],
        "%Promise_reject%": ["Promise", "reject"],
        "%Promise_resolve%": ["Promise", "resolve"],
        "%RangeErrorPrototype%": ["RangeError", "prototype"],
        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
        "%RegExpPrototype%": ["RegExp", "prototype"],
        "%SetPrototype%": ["Set", "prototype"],
        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
        "%StringPrototype%": ["String", "prototype"],
        "%SymbolPrototype%": ["Symbol", "prototype"],
        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
        "%TypeErrorPrototype%": ["TypeError", "prototype"],
        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
        "%URIErrorPrototype%": ["URIError", "prototype"],
        "%WeakMapPrototype%": ["WeakMap", "prototype"],
        "%WeakSetPrototype%": ["WeakSet", "prototype"]
      };
      var bind = require_function_bind();
      var hasOwn = require_hasown();
      var $concat = bind.call($call, Array.prototype.concat);
      var $spliceApply = bind.call($apply, Array.prototype.splice);
      var $replace = bind.call($call, String.prototype.replace);
      var $strSlice = bind.call($call, String.prototype.slice);
      var $exec = bind.call($call, RegExp.prototype.exec);
      var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
      var reEscapeChar = /\\(\\)?/g;
      var stringToPath = function stringToPath2(string) {
        var first = $strSlice(string, 0, 1);
        var last = $strSlice(string, -1);
        if (first === "%" && last !== "%") {
          throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
        } else if (last === "%" && first !== "%") {
          throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
        }
        var result = [];
        $replace(string, rePropName, function(match, number, quote, subString) {
          result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
        });
        return result;
      };
      var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
        var intrinsicName = name;
        var alias;
        if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
          alias = LEGACY_ALIASES[intrinsicName];
          intrinsicName = "%" + alias[0] + "%";
        }
        if (hasOwn(INTRINSICS, intrinsicName)) {
          var value = INTRINSICS[intrinsicName];
          if (value === needsEval) {
            value = doEval(intrinsicName);
          }
          if (typeof value === "undefined" && !allowMissing) {
            throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
          }
          return {
            alias,
            name: intrinsicName,
            value
          };
        }
        throw new $SyntaxError("intrinsic " + name + " does not exist!");
      };
      module.exports = function GetIntrinsic(name, allowMissing) {
        if (typeof name !== "string" || name.length === 0) {
          throw new $TypeError("intrinsic name must be a non-empty string");
        }
        if (arguments.length > 1 && typeof allowMissing !== "boolean") {
          throw new $TypeError('"allowMissing" argument must be a boolean');
        }
        if ($exec(/^%?[^%]*%?$/, name) === null) {
          throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        }
        var parts = stringToPath(name);
        var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
        var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
        var intrinsicRealName = intrinsic.name;
        var value = intrinsic.value;
        var skipFurtherCaching = false;
        var alias = intrinsic.alias;
        if (alias) {
          intrinsicBaseName = alias[0];
          $spliceApply(parts, $concat([0, 1], alias));
        }
        for (var i = 1, isOwn = true; i < parts.length; i += 1) {
          var part = parts[i];
          var first = $strSlice(part, 0, 1);
          var last = $strSlice(part, -1);
          if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
            throw new $SyntaxError("property names with quotes must have matching quotes");
          }
          if (part === "constructor" || !isOwn) {
            skipFurtherCaching = true;
          }
          intrinsicBaseName += "." + part;
          intrinsicRealName = "%" + intrinsicBaseName + "%";
          if (hasOwn(INTRINSICS, intrinsicRealName)) {
            value = INTRINSICS[intrinsicRealName];
          } else if (value != null) {
            if (!(part in value)) {
              if (!allowMissing) {
                throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
              }
              return void undefined2;
            }
            if ($gOPD && i + 1 >= parts.length) {
              var desc = $gOPD(value, part);
              isOwn = !!desc;
              if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
                value = desc.get;
              } else {
                value = value[part];
              }
            } else {
              isOwn = hasOwn(value, part);
              value = value[part];
            }
            if (isOwn && !skipFurtherCaching) {
              INTRINSICS[intrinsicRealName] = value;
            }
          }
        }
        return value;
      };
    }
  });

  // node_modules/call-bound/index.js
  var require_call_bound = __commonJS({
    "node_modules/call-bound/index.js"(exports, module) {
      "use strict";
      init_polyfills();
      var GetIntrinsic = require_get_intrinsic();
      var callBindBasic = require_call_bind_apply_helpers();
      var $indexOf = callBindBasic([GetIntrinsic("%String.prototype.indexOf%")]);
      module.exports = function callBoundIntrinsic(name, allowMissing) {
        var intrinsic = (
          /** @type {(this: unknown, ...args: unknown[]) => unknown} */
          GetIntrinsic(name, !!allowMissing)
        );
        if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
          return callBindBasic(
            /** @type {const} */
            [intrinsic]
          );
        }
        return intrinsic;
      };
    }
  });

  // node_modules/is-arguments/index.js
  var require_is_arguments = __commonJS({
    "node_modules/is-arguments/index.js"(exports, module) {
      "use strict";
      init_polyfills();
      var hasToStringTag = require_shams2()();
      var callBound = require_call_bound();
      var $toString = callBound("Object.prototype.toString");
      var isStandardArguments = function isArguments(value) {
        if (hasToStringTag && value && typeof value === "object" && Symbol.toStringTag in value) {
          return false;
        }
        return $toString(value) === "[object Arguments]";
      };
      var isLegacyArguments = function isArguments(value) {
        if (isStandardArguments(value)) {
          return true;
        }
        return value !== null && typeof value === "object" && "length" in value && typeof value.length === "number" && value.length >= 0 && $toString(value) !== "[object Array]" && "callee" in value && $toString(value.callee) === "[object Function]";
      };
      var supportsStandardArguments = (function() {
        return isStandardArguments(arguments);
      })();
      isStandardArguments.isLegacyArguments = isLegacyArguments;
      module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
    }
  });

  // node_modules/is-regex/index.js
  var require_is_regex = __commonJS({
    "node_modules/is-regex/index.js"(exports, module) {
      "use strict";
      init_polyfills();
      var callBound = require_call_bound();
      var hasToStringTag = require_shams2()();
      var hasOwn = require_hasown();
      var gOPD = require_gopd();
      var fn;
      if (hasToStringTag) {
        $exec = callBound("RegExp.prototype.exec");
        isRegexMarker = {};
        throwRegexMarker = function() {
          throw isRegexMarker;
        };
        badStringifier = {
          toString: throwRegexMarker,
          valueOf: throwRegexMarker
        };
        if (typeof Symbol.toPrimitive === "symbol") {
          badStringifier[Symbol.toPrimitive] = throwRegexMarker;
        }
        fn = function isRegex(value) {
          if (!value || typeof value !== "object") {
            return false;
          }
          var descriptor = (
            /** @type {NonNullable<typeof gOPD>} */
            gOPD(
              /** @type {{ lastIndex?: unknown }} */
              value,
              "lastIndex"
            )
          );
          var hasLastIndexDataProperty = descriptor && hasOwn(descriptor, "value");
          if (!hasLastIndexDataProperty) {
            return false;
          }
          try {
            $exec(
              value,
              /** @type {string} */
              /** @type {unknown} */
              badStringifier
            );
          } catch (e) {
            return e === isRegexMarker;
          }
        };
      } else {
        $toString = callBound("Object.prototype.toString");
        regexClass = "[object RegExp]";
        fn = function isRegex(value) {
          if (!value || typeof value !== "object" && typeof value !== "function") {
            return false;
          }
          return $toString(value) === regexClass;
        };
      }
      var $exec;
      var isRegexMarker;
      var throwRegexMarker;
      var badStringifier;
      var $toString;
      var regexClass;
      module.exports = fn;
    }
  });

  // node_modules/safe-regex-test/index.js
  var require_safe_regex_test = __commonJS({
    "node_modules/safe-regex-test/index.js"(exports, module) {
      "use strict";
      init_polyfills();
      var callBound = require_call_bound();
      var isRegex = require_is_regex();
      var $exec = callBound("RegExp.prototype.exec");
      var $TypeError = require_type();
      module.exports = function regexTester(regex) {
        if (!isRegex(regex)) {
          throw new $TypeError("`regex` must be a RegExp");
        }
        return function test(s) {
          return $exec(regex, s) !== null;
        };
      };
    }
  });

  // node_modules/generator-function/index.js
  var require_generator_function = __commonJS({
    "node_modules/generator-function/index.js"(exports, module) {
      "use strict";
      init_polyfills();
      var cached = (
        /** @type {GeneratorFunctionConstructor} */
        function* () {
        }.constructor
      );
      module.exports = () => cached;
    }
  });

  // node_modules/is-generator-function/index.js
  var require_is_generator_function = __commonJS({
    "node_modules/is-generator-function/index.js"(exports, module) {
      "use strict";
      init_polyfills();
      var callBound = require_call_bound();
      var safeRegexTest = require_safe_regex_test();
      var isFnRegex = safeRegexTest(/^\s*(?:function)?\*/);
      var hasToStringTag = require_shams2()();
      var getProto = require_get_proto();
      var toStr = callBound("Object.prototype.toString");
      var fnToStr = callBound("Function.prototype.toString");
      var getGeneratorFunction = require_generator_function();
      module.exports = function isGeneratorFunction(fn) {
        if (typeof fn !== "function") {
          return false;
        }
        if (isFnRegex(fnToStr(fn))) {
          return true;
        }
        if (!hasToStringTag) {
          var str = toStr(fn);
          return str === "[object GeneratorFunction]";
        }
        if (!getProto) {
          return false;
        }
        var GeneratorFunction = getGeneratorFunction();
        return GeneratorFunction && getProto(fn) === GeneratorFunction.prototype;
      };
    }
  });

  // node_modules/is-callable/index.js
  var require_is_callable = __commonJS({
    "node_modules/is-callable/index.js"(exports, module) {
      "use strict";
      init_polyfills();
      var fnToStr = Function.prototype.toString;
      var reflectApply = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
      var badArrayLike;
      var isCallableMarker;
      if (typeof reflectApply === "function" && typeof Object.defineProperty === "function") {
        try {
          badArrayLike = Object.defineProperty({}, "length", {
            get: function() {
              throw isCallableMarker;
            }
          });
          isCallableMarker = {};
          reflectApply(function() {
            throw 42;
          }, null, badArrayLike);
        } catch (_) {
          if (_ !== isCallableMarker) {
            reflectApply = null;
          }
        }
      } else {
        reflectApply = null;
      }
      var constructorRegex = /^\s*class\b/;
      var isES6ClassFn = function isES6ClassFunction(value) {
        try {
          var fnStr = fnToStr.call(value);
          return constructorRegex.test(fnStr);
        } catch (e) {
          return false;
        }
      };
      var tryFunctionObject = function tryFunctionToStr(value) {
        try {
          if (isES6ClassFn(value)) {
            return false;
          }
          fnToStr.call(value);
          return true;
        } catch (e) {
          return false;
        }
      };
      var toStr = Object.prototype.toString;
      var objectClass = "[object Object]";
      var fnClass = "[object Function]";
      var genClass = "[object GeneratorFunction]";
      var ddaClass = "[object HTMLAllCollection]";
      var ddaClass2 = "[object HTML document.all class]";
      var ddaClass3 = "[object HTMLCollection]";
      var hasToStringTag = typeof Symbol === "function" && !!Symbol.toStringTag;
      var isIE68 = !(0 in [,]);
      var isDDA = function isDocumentDotAll() {
        return false;
      };
      if (typeof document === "object") {
        all = document.all;
        if (toStr.call(all) === toStr.call(document.all)) {
          isDDA = function isDocumentDotAll(value) {
            if ((isIE68 || !value) && (typeof value === "undefined" || typeof value === "object")) {
              try {
                var str = toStr.call(value);
                return (str === ddaClass || str === ddaClass2 || str === ddaClass3 || str === objectClass) && value("") == null;
              } catch (e) {
              }
            }
            return false;
          };
        }
      }
      var all;
      module.exports = reflectApply ? function isCallable(value) {
        if (isDDA(value)) {
          return true;
        }
        if (!value) {
          return false;
        }
        if (typeof value !== "function" && typeof value !== "object") {
          return false;
        }
        try {
          reflectApply(value, null, badArrayLike);
        } catch (e) {
          if (e !== isCallableMarker) {
            return false;
          }
        }
        return !isES6ClassFn(value) && tryFunctionObject(value);
      } : function isCallable(value) {
        if (isDDA(value)) {
          return true;
        }
        if (!value) {
          return false;
        }
        if (typeof value !== "function" && typeof value !== "object") {
          return false;
        }
        if (hasToStringTag) {
          return tryFunctionObject(value);
        }
        if (isES6ClassFn(value)) {
          return false;
        }
        var strClass = toStr.call(value);
        if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) {
          return false;
        }
        return tryFunctionObject(value);
      };
    }
  });

  // node_modules/for-each/index.js
  var require_for_each = __commonJS({
    "node_modules/for-each/index.js"(exports, module) {
      "use strict";
      init_polyfills();
      var isCallable = require_is_callable();
      var toStr = Object.prototype.toString;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var forEachArray = function forEachArray2(array, iterator, receiver) {
        for (var i = 0, len = array.length; i < len; i++) {
          if (hasOwnProperty.call(array, i)) {
            if (receiver == null) {
              iterator(array[i], i, array);
            } else {
              iterator.call(receiver, array[i], i, array);
            }
          }
        }
      };
      var forEachString = function forEachString2(string, iterator, receiver) {
        for (var i = 0, len = string.length; i < len; i++) {
          if (receiver == null) {
            iterator(string.charAt(i), i, string);
          } else {
            iterator.call(receiver, string.charAt(i), i, string);
          }
        }
      };
      var forEachObject = function forEachObject2(object, iterator, receiver) {
        for (var k in object) {
          if (hasOwnProperty.call(object, k)) {
            if (receiver == null) {
              iterator(object[k], k, object);
            } else {
              iterator.call(receiver, object[k], k, object);
            }
          }
        }
      };
      function isArray(x) {
        return toStr.call(x) === "[object Array]";
      }
      module.exports = function forEach(list, iterator, thisArg) {
        if (!isCallable(iterator)) {
          throw new TypeError("iterator must be a function");
        }
        var receiver;
        if (arguments.length >= 3) {
          receiver = thisArg;
        }
        if (isArray(list)) {
          forEachArray(list, iterator, receiver);
        } else if (typeof list === "string") {
          forEachString(list, iterator, receiver);
        } else {
          forEachObject(list, iterator, receiver);
        }
      };
    }
  });

  // node_modules/possible-typed-array-names/index.js
  var require_possible_typed_array_names = __commonJS({
    "node_modules/possible-typed-array-names/index.js"(exports, module) {
      "use strict";
      init_polyfills();
      module.exports = [
        "Float16Array",
        "Float32Array",
        "Float64Array",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "BigInt64Array",
        "BigUint64Array"
      ];
    }
  });

  // node_modules/available-typed-arrays/index.js
  var require_available_typed_arrays = __commonJS({
    "node_modules/available-typed-arrays/index.js"(exports, module) {
      "use strict";
      init_polyfills();
      var possibleNames = require_possible_typed_array_names();
      var g = typeof globalThis === "undefined" ? global : globalThis;
      module.exports = function availableTypedArrays() {
        var out = [];
        for (var i = 0; i < possibleNames.length; i++) {
          if (typeof g[possibleNames[i]] === "function") {
            out[out.length] = possibleNames[i];
          }
        }
        return out;
      };
    }
  });

  // node_modules/define-data-property/index.js
  var require_define_data_property = __commonJS({
    "node_modules/define-data-property/index.js"(exports, module) {
      "use strict";
      init_polyfills();
      var $defineProperty = require_es_define_property();
      var $SyntaxError = require_syntax();
      var $TypeError = require_type();
      var gopd = require_gopd();
      module.exports = function defineDataProperty(obj, property, value) {
        if (!obj || typeof obj !== "object" && typeof obj !== "function") {
          throw new $TypeError("`obj` must be an object or a function`");
        }
        if (typeof property !== "string" && typeof property !== "symbol") {
          throw new $TypeError("`property` must be a string or a symbol`");
        }
        if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) {
          throw new $TypeError("`nonEnumerable`, if provided, must be a boolean or null");
        }
        if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) {
          throw new $TypeError("`nonWritable`, if provided, must be a boolean or null");
        }
        if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) {
          throw new $TypeError("`nonConfigurable`, if provided, must be a boolean or null");
        }
        if (arguments.length > 6 && typeof arguments[6] !== "boolean") {
          throw new $TypeError("`loose`, if provided, must be a boolean");
        }
        var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
        var nonWritable = arguments.length > 4 ? arguments[4] : null;
        var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
        var loose = arguments.length > 6 ? arguments[6] : false;
        var desc = !!gopd && gopd(obj, property);
        if ($defineProperty) {
          $defineProperty(obj, property, {
            configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
            enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
            value,
            writable: nonWritable === null && desc ? desc.writable : !nonWritable
          });
        } else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) {
          obj[property] = value;
        } else {
          throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
        }
      };
    }
  });

  // node_modules/has-property-descriptors/index.js
  var require_has_property_descriptors = __commonJS({
    "node_modules/has-property-descriptors/index.js"(exports, module) {
      "use strict";
      init_polyfills();
      var $defineProperty = require_es_define_property();
      var hasPropertyDescriptors = function hasPropertyDescriptors2() {
        return !!$defineProperty;
      };
      hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
        if (!$defineProperty) {
          return null;
        }
        try {
          return $defineProperty([], "length", { value: 1 }).length !== 1;
        } catch (e) {
          return true;
        }
      };
      module.exports = hasPropertyDescriptors;
    }
  });

  // node_modules/set-function-length/index.js
  var require_set_function_length = __commonJS({
    "node_modules/set-function-length/index.js"(exports, module) {
      "use strict";
      init_polyfills();
      var GetIntrinsic = require_get_intrinsic();
      var define2 = require_define_data_property();
      var hasDescriptors = require_has_property_descriptors()();
      var gOPD = require_gopd();
      var $TypeError = require_type();
      var $floor = GetIntrinsic("%Math.floor%");
      module.exports = function setFunctionLength(fn, length) {
        if (typeof fn !== "function") {
          throw new $TypeError("`fn` is not a function");
        }
        if (typeof length !== "number" || length < 0 || length > 4294967295 || $floor(length) !== length) {
          throw new $TypeError("`length` must be a positive 32-bit integer");
        }
        var loose = arguments.length > 2 && !!arguments[2];
        var functionLengthIsConfigurable = true;
        var functionLengthIsWritable = true;
        if ("length" in fn && gOPD) {
          var desc = gOPD(fn, "length");
          if (desc && !desc.configurable) {
            functionLengthIsConfigurable = false;
          }
          if (desc && !desc.writable) {
            functionLengthIsWritable = false;
          }
        }
        if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
          if (hasDescriptors) {
            define2(
              /** @type {Parameters<define>[0]} */
              fn,
              "length",
              length,
              true,
              true
            );
          } else {
            define2(
              /** @type {Parameters<define>[0]} */
              fn,
              "length",
              length
            );
          }
        }
        return fn;
      };
    }
  });

  // node_modules/call-bind-apply-helpers/applyBind.js
  var require_applyBind = __commonJS({
    "node_modules/call-bind-apply-helpers/applyBind.js"(exports, module) {
      "use strict";
      init_polyfills();
      var bind = require_function_bind();
      var $apply = require_functionApply();
      var actualApply = require_actualApply();
      module.exports = function applyBind() {
        return actualApply(bind, $apply, arguments);
      };
    }
  });

  // node_modules/call-bind/index.js
  var require_call_bind = __commonJS({
    "node_modules/call-bind/index.js"(exports, module) {
      "use strict";
      init_polyfills();
      var setFunctionLength = require_set_function_length();
      var $defineProperty = require_es_define_property();
      var callBindBasic = require_call_bind_apply_helpers();
      var applyBind = require_applyBind();
      module.exports = function callBind(originalFunction) {
        var func = callBindBasic(arguments);
        var adjustedLength = originalFunction.length - (arguments.length - 1);
        return setFunctionLength(
          func,
          1 + (adjustedLength > 0 ? adjustedLength : 0),
          true
        );
      };
      if ($defineProperty) {
        $defineProperty(module.exports, "apply", { value: applyBind });
      } else {
        module.exports.apply = applyBind;
      }
    }
  });

  // node_modules/which-typed-array/index.js
  var require_which_typed_array = __commonJS({
    "node_modules/which-typed-array/index.js"(exports, module) {
      "use strict";
      init_polyfills();
      var forEach = require_for_each();
      var availableTypedArrays = require_available_typed_arrays();
      var callBind = require_call_bind();
      var callBound = require_call_bound();
      var gOPD = require_gopd();
      var getProto = require_get_proto();
      var $toString = callBound("Object.prototype.toString");
      var hasToStringTag = require_shams2()();
      var g = typeof globalThis === "undefined" ? global : globalThis;
      var typedArrays = availableTypedArrays();
      var $slice = callBound("String.prototype.slice");
      var $indexOf = callBound("Array.prototype.indexOf", true) || function indexOf(array, value) {
        for (var i = 0; i < array.length; i += 1) {
          if (array[i] === value) {
            return i;
          }
        }
        return -1;
      };
      var cache = { __proto__: null };
      if (hasToStringTag && gOPD && getProto) {
        forEach(typedArrays, function(typedArray) {
          var arr = new g[typedArray]();
          if (Symbol.toStringTag in arr && getProto) {
            var proto = getProto(arr);
            var descriptor = gOPD(proto, Symbol.toStringTag);
            if (!descriptor && proto) {
              var superProto = getProto(proto);
              descriptor = gOPD(superProto, Symbol.toStringTag);
            }
            if (descriptor && descriptor.get) {
              var bound = callBind(descriptor.get);
              cache[
                /** @type {`$${import('.').TypedArrayName}`} */
                "$" + typedArray
              ] = bound;
            }
          }
        });
      } else {
        forEach(typedArrays, function(typedArray) {
          var arr = new g[typedArray]();
          var fn = arr.slice || arr.set;
          if (fn) {
            var bound = (
              /** @type {import('./types').BoundSlice | import('./types').BoundSet} */
              // @ts-expect-error TODO FIXME
              callBind(fn)
            );
            cache[
              /** @type {`$${import('.').TypedArrayName}`} */
              "$" + typedArray
            ] = bound;
          }
        });
      }
      var tryTypedArrays = function tryAllTypedArrays(value) {
        var found = false;
        forEach(
          /** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */
          cache,
          /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
          function(getter, typedArray) {
            if (!found) {
              try {
                if ("$" + getter(value) === typedArray) {
                  found = /** @type {import('.').TypedArrayName} */
                  $slice(typedArray, 1);
                }
              } catch (e) {
              }
            }
          }
        );
        return found;
      };
      var trySlices = function tryAllSlices(value) {
        var found = false;
        forEach(
          /** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */
          cache,
          /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
          function(getter, name) {
            if (!found) {
              try {
                getter(value);
                found = /** @type {import('.').TypedArrayName} */
                $slice(name, 1);
              } catch (e) {
              }
            }
          }
        );
        return found;
      };
      module.exports = function whichTypedArray(value) {
        if (!value || typeof value !== "object") {
          return false;
        }
        if (!hasToStringTag) {
          var tag = $slice($toString(value), 8, -1);
          if ($indexOf(typedArrays, tag) > -1) {
            return tag;
          }
          if (tag !== "Object") {
            return false;
          }
          return trySlices(value);
        }
        if (!gOPD) {
          return null;
        }
        return tryTypedArrays(value);
      };
    }
  });

  // node_modules/is-typed-array/index.js
  var require_is_typed_array = __commonJS({
    "node_modules/is-typed-array/index.js"(exports, module) {
      "use strict";
      init_polyfills();
      var whichTypedArray = require_which_typed_array();
      module.exports = function isTypedArray(value) {
        return !!whichTypedArray(value);
      };
    }
  });

  // node_modules/util/support/types.js
  var require_types = __commonJS({
    "node_modules/util/support/types.js"(exports) {
      "use strict";
      init_polyfills();
      var isArgumentsObject = require_is_arguments();
      var isGeneratorFunction = require_is_generator_function();
      var whichTypedArray = require_which_typed_array();
      var isTypedArray = require_is_typed_array();
      function uncurryThis(f) {
        return f.call.bind(f);
      }
      var BigIntSupported = typeof BigInt !== "undefined";
      var SymbolSupported = typeof Symbol !== "undefined";
      var ObjectToString = uncurryThis(Object.prototype.toString);
      var numberValue = uncurryThis(Number.prototype.valueOf);
      var stringValue = uncurryThis(String.prototype.valueOf);
      var booleanValue = uncurryThis(Boolean.prototype.valueOf);
      if (BigIntSupported) {
        bigIntValue = uncurryThis(BigInt.prototype.valueOf);
      }
      var bigIntValue;
      if (SymbolSupported) {
        symbolValue = uncurryThis(Symbol.prototype.valueOf);
      }
      var symbolValue;
      function checkBoxedPrimitive(value, prototypeValueOf) {
        if (typeof value !== "object") {
          return false;
        }
        try {
          prototypeValueOf(value);
          return true;
        } catch (e) {
          return false;
        }
      }
      exports.isArgumentsObject = isArgumentsObject;
      exports.isGeneratorFunction = isGeneratorFunction;
      exports.isTypedArray = isTypedArray;
      function isPromise(input) {
        return typeof Promise !== "undefined" && input instanceof Promise || input !== null && typeof input === "object" && typeof input.then === "function" && typeof input.catch === "function";
      }
      exports.isPromise = isPromise;
      function isArrayBufferView(value) {
        if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
          return ArrayBuffer.isView(value);
        }
        return isTypedArray(value) || isDataView(value);
      }
      exports.isArrayBufferView = isArrayBufferView;
      function isUint8Array(value) {
        return whichTypedArray(value) === "Uint8Array";
      }
      exports.isUint8Array = isUint8Array;
      function isUint8ClampedArray(value) {
        return whichTypedArray(value) === "Uint8ClampedArray";
      }
      exports.isUint8ClampedArray = isUint8ClampedArray;
      function isUint16Array(value) {
        return whichTypedArray(value) === "Uint16Array";
      }
      exports.isUint16Array = isUint16Array;
      function isUint32Array(value) {
        return whichTypedArray(value) === "Uint32Array";
      }
      exports.isUint32Array = isUint32Array;
      function isInt8Array(value) {
        return whichTypedArray(value) === "Int8Array";
      }
      exports.isInt8Array = isInt8Array;
      function isInt16Array(value) {
        return whichTypedArray(value) === "Int16Array";
      }
      exports.isInt16Array = isInt16Array;
      function isInt32Array(value) {
        return whichTypedArray(value) === "Int32Array";
      }
      exports.isInt32Array = isInt32Array;
      function isFloat32Array(value) {
        return whichTypedArray(value) === "Float32Array";
      }
      exports.isFloat32Array = isFloat32Array;
      function isFloat64Array(value) {
        return whichTypedArray(value) === "Float64Array";
      }
      exports.isFloat64Array = isFloat64Array;
      function isBigInt64Array(value) {
        return whichTypedArray(value) === "BigInt64Array";
      }
      exports.isBigInt64Array = isBigInt64Array;
      function isBigUint64Array(value) {
        return whichTypedArray(value) === "BigUint64Array";
      }
      exports.isBigUint64Array = isBigUint64Array;
      function isMapToString(value) {
        return ObjectToString(value) === "[object Map]";
      }
      isMapToString.working = typeof Map !== "undefined" && isMapToString(/* @__PURE__ */ new Map());
      function isMap(value) {
        if (typeof Map === "undefined") {
          return false;
        }
        return isMapToString.working ? isMapToString(value) : value instanceof Map;
      }
      exports.isMap = isMap;
      function isSetToString(value) {
        return ObjectToString(value) === "[object Set]";
      }
      isSetToString.working = typeof Set !== "undefined" && isSetToString(/* @__PURE__ */ new Set());
      function isSet(value) {
        if (typeof Set === "undefined") {
          return false;
        }
        return isSetToString.working ? isSetToString(value) : value instanceof Set;
      }
      exports.isSet = isSet;
      function isWeakMapToString(value) {
        return ObjectToString(value) === "[object WeakMap]";
      }
      isWeakMapToString.working = typeof WeakMap !== "undefined" && isWeakMapToString(/* @__PURE__ */ new WeakMap());
      function isWeakMap(value) {
        if (typeof WeakMap === "undefined") {
          return false;
        }
        return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
      }
      exports.isWeakMap = isWeakMap;
      function isWeakSetToString(value) {
        return ObjectToString(value) === "[object WeakSet]";
      }
      isWeakSetToString.working = typeof WeakSet !== "undefined" && isWeakSetToString(/* @__PURE__ */ new WeakSet());
      function isWeakSet(value) {
        return isWeakSetToString(value);
      }
      exports.isWeakSet = isWeakSet;
      function isArrayBufferToString(value) {
        return ObjectToString(value) === "[object ArrayBuffer]";
      }
      isArrayBufferToString.working = typeof ArrayBuffer !== "undefined" && isArrayBufferToString(new ArrayBuffer());
      function isArrayBuffer(value) {
        if (typeof ArrayBuffer === "undefined") {
          return false;
        }
        return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
      }
      exports.isArrayBuffer = isArrayBuffer;
      function isDataViewToString(value) {
        return ObjectToString(value) === "[object DataView]";
      }
      isDataViewToString.working = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined" && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
      function isDataView(value) {
        if (typeof DataView === "undefined") {
          return false;
        }
        return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
      }
      exports.isDataView = isDataView;
      var SharedArrayBufferCopy = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : void 0;
      function isSharedArrayBufferToString(value) {
        return ObjectToString(value) === "[object SharedArrayBuffer]";
      }
      function isSharedArrayBuffer(value) {
        if (typeof SharedArrayBufferCopy === "undefined") {
          return false;
        }
        if (typeof isSharedArrayBufferToString.working === "undefined") {
          isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
        }
        return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
      }
      exports.isSharedArrayBuffer = isSharedArrayBuffer;
      function isAsyncFunction(value) {
        return ObjectToString(value) === "[object AsyncFunction]";
      }
      exports.isAsyncFunction = isAsyncFunction;
      function isMapIterator(value) {
        return ObjectToString(value) === "[object Map Iterator]";
      }
      exports.isMapIterator = isMapIterator;
      function isSetIterator(value) {
        return ObjectToString(value) === "[object Set Iterator]";
      }
      exports.isSetIterator = isSetIterator;
      function isGeneratorObject(value) {
        return ObjectToString(value) === "[object Generator]";
      }
      exports.isGeneratorObject = isGeneratorObject;
      function isWebAssemblyCompiledModule(value) {
        return ObjectToString(value) === "[object WebAssembly.Module]";
      }
      exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
      function isNumberObject(value) {
        return checkBoxedPrimitive(value, numberValue);
      }
      exports.isNumberObject = isNumberObject;
      function isStringObject(value) {
        return checkBoxedPrimitive(value, stringValue);
      }
      exports.isStringObject = isStringObject;
      function isBooleanObject(value) {
        return checkBoxedPrimitive(value, booleanValue);
      }
      exports.isBooleanObject = isBooleanObject;
      function isBigIntObject(value) {
        return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
      }
      exports.isBigIntObject = isBigIntObject;
      function isSymbolObject(value) {
        return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
      }
      exports.isSymbolObject = isSymbolObject;
      function isBoxedPrimitive(value) {
        return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
      }
      exports.isBoxedPrimitive = isBoxedPrimitive;
      function isAnyArrayBuffer(value) {
        return typeof Uint8Array !== "undefined" && (isArrayBuffer(value) || isSharedArrayBuffer(value));
      }
      exports.isAnyArrayBuffer = isAnyArrayBuffer;
      ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(method) {
        Object.defineProperty(exports, method, {
          enumerable: false,
          value: function() {
            throw new Error(method + " is not supported in userland");
          }
        });
      });
    }
  });

  // node_modules/util/support/isBufferBrowser.js
  var require_isBufferBrowser = __commonJS({
    "node_modules/util/support/isBufferBrowser.js"(exports, module) {
      init_polyfills();
      module.exports = function isBuffer(arg) {
        return arg && typeof arg === "object" && typeof arg.copy === "function" && typeof arg.fill === "function" && typeof arg.readUInt8 === "function";
      };
    }
  });

  // node_modules/inherits/inherits_browser.js
  var require_inherits_browser = __commonJS({
    "node_modules/inherits/inherits_browser.js"(exports, module) {
      init_polyfills();
      if (typeof Object.create === "function") {
        module.exports = function inherits(ctor, superCtor) {
          if (superCtor) {
            ctor.super_ = superCtor;
            ctor.prototype = Object.create(superCtor.prototype, {
              constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
          }
        };
      } else {
        module.exports = function inherits(ctor, superCtor) {
          if (superCtor) {
            ctor.super_ = superCtor;
            var TempCtor = function() {
            };
            TempCtor.prototype = superCtor.prototype;
            ctor.prototype = new TempCtor();
            ctor.prototype.constructor = ctor;
          }
        };
      }
    }
  });

  // node_modules/util/util.js
  var require_util = __commonJS({
    "node_modules/util/util.js"(exports) {
      init_polyfills();
      var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors2(obj) {
        var keys2 = Object.keys(obj);
        var descriptors = {};
        for (var i = 0; i < keys2.length; i++) {
          descriptors[keys2[i]] = Object.getOwnPropertyDescriptor(obj, keys2[i]);
        }
        return descriptors;
      };
      var formatRegExp = /%[sdj%]/g;
      exports.format = function(f) {
        if (!isString(f)) {
          var objects = [];
          for (var i = 0; i < arguments.length; i++) {
            objects.push(inspect(arguments[i]));
          }
          return objects.join(" ");
        }
        var i = 1;
        var args = arguments;
        var len = args.length;
        var str = String(f).replace(formatRegExp, function(x2) {
          if (x2 === "%%") return "%";
          if (i >= len) return x2;
          switch (x2) {
            case "%s":
              return String(args[i++]);
            case "%d":
              return Number(args[i++]);
            case "%j":
              try {
                return JSON.stringify(args[i++]);
              } catch (_) {
                return "[Circular]";
              }
            default:
              return x2;
          }
        });
        for (var x = args[i]; i < len; x = args[++i]) {
          if (isNull(x) || !isObject(x)) {
            str += " " + x;
          } else {
            str += " " + inspect(x);
          }
        }
        return str;
      };
      exports.deprecate = function(fn, msg) {
        if (typeof process !== "undefined" && process.noDeprecation === true) {
          return fn;
        }
        if (typeof process === "undefined") {
          return function() {
            return exports.deprecate(fn, msg).apply(this, arguments);
          };
        }
        var warned = false;
        function deprecated() {
          if (!warned) {
            if (process.throwDeprecation) {
              throw new Error(msg);
            } else if (process.traceDeprecation) {
              console.trace(msg);
            } else {
              console.error(msg);
            }
            warned = true;
          }
          return fn.apply(this, arguments);
        }
        return deprecated;
      };
      var debugs = {};
      var debugEnvRegex = /^$/;
      if (process.env.NODE_DEBUG) {
        debugEnv = process.env.NODE_DEBUG;
        debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase();
        debugEnvRegex = new RegExp("^" + debugEnv + "$", "i");
      }
      var debugEnv;
      exports.debuglog = function(set2) {
        set2 = set2.toUpperCase();
        if (!debugs[set2]) {
          if (debugEnvRegex.test(set2)) {
            var pid = process.pid;
            debugs[set2] = function() {
              var msg = exports.format.apply(exports, arguments);
              console.error("%s %d: %s", set2, pid, msg);
            };
          } else {
            debugs[set2] = function() {
            };
          }
        }
        return debugs[set2];
      };
      function inspect(obj, opts) {
        var ctx = {
          seen: [],
          stylize: stylizeNoColor
        };
        if (arguments.length >= 3) ctx.depth = arguments[2];
        if (arguments.length >= 4) ctx.colors = arguments[3];
        if (isBoolean(opts)) {
          ctx.showHidden = opts;
        } else if (opts) {
          exports._extend(ctx, opts);
        }
        if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
        if (isUndefined(ctx.depth)) ctx.depth = 2;
        if (isUndefined(ctx.colors)) ctx.colors = false;
        if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
        if (ctx.colors) ctx.stylize = stylizeWithColor;
        return formatValue(ctx, obj, ctx.depth);
      }
      exports.inspect = inspect;
      inspect.colors = {
        "bold": [1, 22],
        "italic": [3, 23],
        "underline": [4, 24],
        "inverse": [7, 27],
        "white": [37, 39],
        "grey": [90, 39],
        "black": [30, 39],
        "blue": [34, 39],
        "cyan": [36, 39],
        "green": [32, 39],
        "magenta": [35, 39],
        "red": [31, 39],
        "yellow": [33, 39]
      };
      inspect.styles = {
        "special": "cyan",
        "number": "yellow",
        "boolean": "yellow",
        "undefined": "grey",
        "null": "bold",
        "string": "green",
        "date": "magenta",
        // "name": intentionally not styling
        "regexp": "red"
      };
      function stylizeWithColor(str, styleType) {
        var style = inspect.styles[styleType];
        if (style) {
          return "\x1B[" + inspect.colors[style][0] + "m" + str + "\x1B[" + inspect.colors[style][1] + "m";
        } else {
          return str;
        }
      }
      function stylizeNoColor(str, styleType) {
        return str;
      }
      function arrayToHash(array) {
        var hash = {};
        array.forEach(function(val, idx) {
          hash[val] = true;
        });
        return hash;
      }
      function formatValue(ctx, value, recurseTimes) {
        if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
        value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
        !(value.constructor && value.constructor.prototype === value)) {
          var ret = value.inspect(recurseTimes, ctx);
          if (!isString(ret)) {
            ret = formatValue(ctx, ret, recurseTimes);
          }
          return ret;
        }
        var primitive = formatPrimitive(ctx, value);
        if (primitive) {
          return primitive;
        }
        var keys2 = Object.keys(value);
        var visibleKeys = arrayToHash(keys2);
        if (ctx.showHidden) {
          keys2 = Object.getOwnPropertyNames(value);
        }
        if (isError(value) && (keys2.indexOf("message") >= 0 || keys2.indexOf("description") >= 0)) {
          return formatError(value);
        }
        if (keys2.length === 0) {
          if (isFunction(value)) {
            var name = value.name ? ": " + value.name : "";
            return ctx.stylize("[Function" + name + "]", "special");
          }
          if (isRegExp(value)) {
            return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
          }
          if (isDate(value)) {
            return ctx.stylize(Date.prototype.toString.call(value), "date");
          }
          if (isError(value)) {
            return formatError(value);
          }
        }
        var base = "", array = false, braces = ["{", "}"];
        if (isArray(value)) {
          array = true;
          braces = ["[", "]"];
        }
        if (isFunction(value)) {
          var n = value.name ? ": " + value.name : "";
          base = " [Function" + n + "]";
        }
        if (isRegExp(value)) {
          base = " " + RegExp.prototype.toString.call(value);
        }
        if (isDate(value)) {
          base = " " + Date.prototype.toUTCString.call(value);
        }
        if (isError(value)) {
          base = " " + formatError(value);
        }
        if (keys2.length === 0 && (!array || value.length == 0)) {
          return braces[0] + base + braces[1];
        }
        if (recurseTimes < 0) {
          if (isRegExp(value)) {
            return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
          } else {
            return ctx.stylize("[Object]", "special");
          }
        }
        ctx.seen.push(value);
        var output;
        if (array) {
          output = formatArray(ctx, value, recurseTimes, visibleKeys, keys2);
        } else {
          output = keys2.map(function(key) {
            return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
          });
        }
        ctx.seen.pop();
        return reduceToSingleString(output, base, braces);
      }
      function formatPrimitive(ctx, value) {
        if (isUndefined(value))
          return ctx.stylize("undefined", "undefined");
        if (isString(value)) {
          var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
          return ctx.stylize(simple, "string");
        }
        if (isNumber(value))
          return ctx.stylize("" + value, "number");
        if (isBoolean(value))
          return ctx.stylize("" + value, "boolean");
        if (isNull(value))
          return ctx.stylize("null", "null");
      }
      function formatError(value) {
        return "[" + Error.prototype.toString.call(value) + "]";
      }
      function formatArray(ctx, value, recurseTimes, visibleKeys, keys2) {
        var output = [];
        for (var i = 0, l = value.length; i < l; ++i) {
          if (hasOwnProperty(value, String(i))) {
            output.push(formatProperty(
              ctx,
              value,
              recurseTimes,
              visibleKeys,
              String(i),
              true
            ));
          } else {
            output.push("");
          }
        }
        keys2.forEach(function(key) {
          if (!key.match(/^\d+$/)) {
            output.push(formatProperty(
              ctx,
              value,
              recurseTimes,
              visibleKeys,
              key,
              true
            ));
          }
        });
        return output;
      }
      function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
        var name, str, desc;
        desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
        if (desc.get) {
          if (desc.set) {
            str = ctx.stylize("[Getter/Setter]", "special");
          } else {
            str = ctx.stylize("[Getter]", "special");
          }
        } else {
          if (desc.set) {
            str = ctx.stylize("[Setter]", "special");
          }
        }
        if (!hasOwnProperty(visibleKeys, key)) {
          name = "[" + key + "]";
        }
        if (!str) {
          if (ctx.seen.indexOf(desc.value) < 0) {
            if (isNull(recurseTimes)) {
              str = formatValue(ctx, desc.value, null);
            } else {
              str = formatValue(ctx, desc.value, recurseTimes - 1);
            }
            if (str.indexOf("\n") > -1) {
              if (array) {
                str = str.split("\n").map(function(line) {
                  return "  " + line;
                }).join("\n").slice(2);
              } else {
                str = "\n" + str.split("\n").map(function(line) {
                  return "   " + line;
                }).join("\n");
              }
            }
          } else {
            str = ctx.stylize("[Circular]", "special");
          }
        }
        if (isUndefined(name)) {
          if (array && key.match(/^\d+$/)) {
            return str;
          }
          name = JSON.stringify("" + key);
          if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
            name = name.slice(1, -1);
            name = ctx.stylize(name, "name");
          } else {
            name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
            name = ctx.stylize(name, "string");
          }
        }
        return name + ": " + str;
      }
      function reduceToSingleString(output, base, braces) {
        var numLinesEst = 0;
        var length = output.reduce(function(prev, cur) {
          numLinesEst++;
          if (cur.indexOf("\n") >= 0) numLinesEst++;
          return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
        }, 0);
        if (length > 60) {
          return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
        }
        return braces[0] + base + " " + output.join(", ") + " " + braces[1];
      }
      exports.types = require_types();
      function isArray(ar) {
        return Array.isArray(ar);
      }
      exports.isArray = isArray;
      function isBoolean(arg) {
        return typeof arg === "boolean";
      }
      exports.isBoolean = isBoolean;
      function isNull(arg) {
        return arg === null;
      }
      exports.isNull = isNull;
      function isNullOrUndefined(arg) {
        return arg == null;
      }
      exports.isNullOrUndefined = isNullOrUndefined;
      function isNumber(arg) {
        return typeof arg === "number";
      }
      exports.isNumber = isNumber;
      function isString(arg) {
        return typeof arg === "string";
      }
      exports.isString = isString;
      function isSymbol(arg) {
        return typeof arg === "symbol";
      }
      exports.isSymbol = isSymbol;
      function isUndefined(arg) {
        return arg === void 0;
      }
      exports.isUndefined = isUndefined;
      function isRegExp(re) {
        return isObject(re) && objectToString(re) === "[object RegExp]";
      }
      exports.isRegExp = isRegExp;
      exports.types.isRegExp = isRegExp;
      function isObject(arg) {
        return typeof arg === "object" && arg !== null;
      }
      exports.isObject = isObject;
      function isDate(d) {
        return isObject(d) && objectToString(d) === "[object Date]";
      }
      exports.isDate = isDate;
      exports.types.isDate = isDate;
      function isError(e) {
        return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
      }
      exports.isError = isError;
      exports.types.isNativeError = isError;
      function isFunction(arg) {
        return typeof arg === "function";
      }
      exports.isFunction = isFunction;
      function isPrimitive(arg) {
        return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || // ES6 symbol
        typeof arg === "undefined";
      }
      exports.isPrimitive = isPrimitive;
      exports.isBuffer = require_isBufferBrowser();
      function objectToString(o) {
        return Object.prototype.toString.call(o);
      }
      function pad(n) {
        return n < 10 ? "0" + n.toString(10) : n.toString(10);
      }
      var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      function timestamp() {
        var d = /* @__PURE__ */ new Date();
        var time = [
          pad(d.getHours()),
          pad(d.getMinutes()),
          pad(d.getSeconds())
        ].join(":");
        return [d.getDate(), months[d.getMonth()], time].join(" ");
      }
      exports.log = function() {
        console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments));
      };
      exports.inherits = require_inherits_browser();
      exports._extend = function(origin, add2) {
        if (!add2 || !isObject(add2)) return origin;
        var keys2 = Object.keys(add2);
        var i = keys2.length;
        while (i--) {
          origin[keys2[i]] = add2[keys2[i]];
        }
        return origin;
      };
      function hasOwnProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }
      var kCustomPromisifiedSymbol = typeof Symbol !== "undefined" ? /* @__PURE__ */ Symbol("util.promisify.custom") : void 0;
      exports.promisify = function promisify(original) {
        if (typeof original !== "function")
          throw new TypeError('The "original" argument must be of type Function');
        if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
          var fn = original[kCustomPromisifiedSymbol];
          if (typeof fn !== "function") {
            throw new TypeError('The "util.promisify.custom" argument must be of type Function');
          }
          Object.defineProperty(fn, kCustomPromisifiedSymbol, {
            value: fn,
            enumerable: false,
            writable: false,
            configurable: true
          });
          return fn;
        }
        function fn() {
          var promiseResolve, promiseReject;
          var promise = new Promise(function(resolve, reject) {
            promiseResolve = resolve;
            promiseReject = reject;
          });
          var args = [];
          for (var i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
          }
          args.push(function(err, value) {
            if (err) {
              promiseReject(err);
            } else {
              promiseResolve(value);
            }
          });
          try {
            original.apply(this, args);
          } catch (err) {
            promiseReject(err);
          }
          return promise;
        }
        Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
        if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
          value: fn,
          enumerable: false,
          writable: false,
          configurable: true
        });
        return Object.defineProperties(
          fn,
          getOwnPropertyDescriptors(original)
        );
      };
      exports.promisify.custom = kCustomPromisifiedSymbol;
      function callbackifyOnRejected(reason, cb) {
        if (!reason) {
          var newReason = new Error("Promise was rejected with a falsy value");
          newReason.reason = reason;
          reason = newReason;
        }
        return cb(reason);
      }
      function callbackify(original) {
        if (typeof original !== "function") {
          throw new TypeError('The "original" argument must be of type Function');
        }
        function callbackified() {
          var args = [];
          for (var i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
          }
          var maybeCb = args.pop();
          if (typeof maybeCb !== "function") {
            throw new TypeError("The last argument must be of type Function");
          }
          var self2 = this;
          var cb = function() {
            return maybeCb.apply(self2, arguments);
          };
          original.apply(this, args).then(
            function(ret) {
              process.nextTick(cb.bind(null, null, ret));
            },
            function(rej) {
              process.nextTick(callbackifyOnRejected.bind(null, rej, cb));
            }
          );
        }
        Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
        Object.defineProperties(
          callbackified,
          getOwnPropertyDescriptors(original)
        );
        return callbackified;
      }
      exports.callbackify = callbackify;
    }
  });

  // node_modules/tldjs/lib/suffix-trie.js
  var require_suffix_trie = __commonJS({
    "node_modules/tldjs/lib/suffix-trie.js"(exports, module) {
      "use strict";
      init_polyfills();
      var VALID_HOSTNAME_VALUE = 0;
      function minIndex(a, b) {
        if (a === null) {
          return b;
        } else if (b === null) {
          return a;
        }
        return a < b ? a : b;
      }
      function insertInTrie(rule, trie) {
        var parts = rule.parts;
        var node = trie;
        for (var i = 0; i < parts.length; i += 1) {
          var part = parts[i];
          var nextNode = node[part];
          if (nextNode === void 0) {
            nextNode = /* @__PURE__ */ Object.create(null);
            node[part] = nextNode;
          }
          node = nextNode;
        }
        node.$ = VALID_HOSTNAME_VALUE;
        return trie;
      }
      function lookupInTrie(parts, trie, index) {
        var part;
        var nextNode;
        var publicSuffixIndex = null;
        if (trie.$ !== void 0) {
          publicSuffixIndex = index + 1;
        }
        if (index === -1) {
          return publicSuffixIndex;
        }
        part = parts[index];
        nextNode = trie[part];
        if (nextNode !== void 0) {
          publicSuffixIndex = minIndex(
            publicSuffixIndex,
            lookupInTrie(parts, nextNode, index - 1)
          );
        }
        nextNode = trie["*"];
        if (nextNode !== void 0) {
          publicSuffixIndex = minIndex(
            publicSuffixIndex,
            lookupInTrie(parts, nextNode, index - 1)
          );
        }
        return publicSuffixIndex;
      }
      function SuffixTrie(rules) {
        this.exceptions = /* @__PURE__ */ Object.create(null);
        this.rules = /* @__PURE__ */ Object.create(null);
        if (rules) {
          for (var i = 0; i < rules.length; i += 1) {
            var rule = rules[i];
            if (rule.exception) {
              insertInTrie(rule, this.exceptions);
            } else {
              insertInTrie(rule, this.rules);
            }
          }
        }
      }
      SuffixTrie.fromJson = function(json) {
        var trie = new SuffixTrie();
        trie.exceptions = json.exceptions;
        trie.rules = json.rules;
        return trie;
      };
      SuffixTrie.prototype.hasTld = function(value) {
        return this.rules[value] !== void 0;
      };
      SuffixTrie.prototype.suffixLookup = function(hostname) {
        var parts = hostname.split(".");
        var publicSuffixIndex = lookupInTrie(
          parts,
          this.rules,
          parts.length - 1
        );
        if (publicSuffixIndex === null) {
          return null;
        }
        var exceptionIndex = lookupInTrie(
          parts,
          this.exceptions,
          parts.length - 1
        );
        if (exceptionIndex !== null) {
          return parts.slice(exceptionIndex + 1).join(".");
        }
        return parts.slice(publicSuffixIndex).join(".");
      };
      module.exports = SuffixTrie;
    }
  });

  // node_modules/tldjs/rules.json
  var require_rules = __commonJS({
    "node_modules/tldjs/rules.json"(exports, module) {
      module.exports = { exceptions: { ck: { www: { $: 0 } }, jp: { kawasaki: { city: { $: 0 } }, kitakyushu: { city: { $: 0 } }, kobe: { city: { $: 0 } }, nagoya: { city: { $: 0 } }, sapporo: { city: { $: 0 } }, sendai: { city: { $: 0 } }, yokohama: { city: { $: 0 } } } }, rules: { ac: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, org: { $: 0 }, drr: { $: 0 }, feedback: { $: 0 }, forms: { $: 0 } }, ad: { $: 0 }, ae: { $: 0, ac: { $: 0 }, co: { $: 0 }, gov: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, org: { $: 0 }, sch: { $: 0 } }, aero: { $: 0, airline: { $: 0 }, airport: { $: 0 }, "accident-investigation": { $: 0 }, "accident-prevention": { $: 0 }, aerobatic: { $: 0 }, aeroclub: { $: 0 }, aerodrome: { $: 0 }, agents: { $: 0 }, "air-surveillance": { $: 0 }, "air-traffic-control": { $: 0 }, aircraft: { $: 0 }, airtraffic: { $: 0 }, ambulance: { $: 0 }, association: { $: 0 }, author: { $: 0 }, ballooning: { $: 0 }, broker: { $: 0 }, caa: { $: 0 }, cargo: { $: 0 }, catering: { $: 0 }, certification: { $: 0 }, championship: { $: 0 }, charter: { $: 0 }, civilaviation: { $: 0 }, club: { $: 0 }, conference: { $: 0 }, consultant: { $: 0 }, consulting: { $: 0 }, control: { $: 0 }, council: { $: 0 }, crew: { $: 0 }, design: { $: 0 }, dgca: { $: 0 }, educator: { $: 0 }, emergency: { $: 0 }, engine: { $: 0 }, engineer: { $: 0 }, entertainment: { $: 0 }, equipment: { $: 0 }, exchange: { $: 0 }, express: { $: 0 }, federation: { $: 0 }, flight: { $: 0 }, freight: { $: 0 }, fuel: { $: 0 }, gliding: { $: 0 }, government: { $: 0 }, groundhandling: { $: 0 }, group: { $: 0 }, hanggliding: { $: 0 }, homebuilt: { $: 0 }, insurance: { $: 0 }, journal: { $: 0 }, journalist: { $: 0 }, leasing: { $: 0 }, logistics: { $: 0 }, magazine: { $: 0 }, maintenance: { $: 0 }, marketplace: { $: 0 }, media: { $: 0 }, microlight: { $: 0 }, modelling: { $: 0 }, navigation: { $: 0 }, parachuting: { $: 0 }, paragliding: { $: 0 }, "passenger-association": { $: 0 }, pilot: { $: 0 }, press: { $: 0 }, production: { $: 0 }, recreation: { $: 0 }, repbody: { $: 0 }, res: { $: 0 }, research: { $: 0 }, rotorcraft: { $: 0 }, safety: { $: 0 }, scientist: { $: 0 }, services: { $: 0 }, show: { $: 0 }, skydiving: { $: 0 }, software: { $: 0 }, student: { $: 0 }, taxi: { $: 0 }, trader: { $: 0 }, trading: { $: 0 }, trainer: { $: 0 }, union: { $: 0 }, workinggroup: { $: 0 }, works: { $: 0 } }, af: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, ag: { $: 0, co: { $: 0 }, com: { $: 0 }, net: { $: 0 }, nom: { $: 0 }, org: { $: 0 }, obj: { $: 0 } }, ai: { $: 0, com: { $: 0 }, net: { $: 0 }, off: { $: 0 }, org: { $: 0 }, uwu: { $: 0 }, caffeine: { $: 0 }, id: { $: 0 }, framer: { $: 0 } }, al: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, am: { $: 0, co: { $: 0 }, com: { $: 0 }, commune: { $: 0 }, net: { $: 0 }, org: { $: 0 }, radio: { $: 0 } }, ao: { $: 0, co: { $: 0 }, ed: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, gv: { $: 0 }, it: { $: 0 }, og: { $: 0 }, org: { $: 0 }, pb: { $: 0 } }, aq: { $: 0 }, ar: { $: 0, bet: { $: 0 }, com: { $: 0 }, coop: { $: 0 }, edu: { $: 0 }, gob: { $: 0 }, gov: { $: 0 }, int: { $: 0 }, mil: { $: 0 }, musica: { $: 0 }, mutual: { $: 0 }, net: { $: 0 }, org: { $: 0 }, seg: { $: 0 }, senasa: { $: 0 }, tur: { $: 0 } }, arpa: { $: 0, e164: { $: 0 }, home: { $: 0 }, "in-addr": { $: 0 }, ip6: { $: 0 }, iris: { $: 0 }, uri: { $: 0 }, urn: { $: 0 } }, as: { $: 0, gov: { $: 0 } }, asia: { $: 0, cloudns: { $: 0 }, daemon: { $: 0 }, dix: { $: 0 } }, at: { "4": { $: 0 }, $: 0, ac: { $: 0, sth: { $: 0 } }, co: { $: 0 }, gv: { $: 0 }, or: { $: 0 }, funkfeuer: { wien: { $: 0 } }, futurecms: { "*": { $: 0 }, ex: { "*": { $: 0 } }, in: { "*": { $: 0 } } }, futurehosting: { $: 0 }, futuremailing: { $: 0 }, ortsinfo: { ex: { "*": { $: 0 } }, kunden: { "*": { $: 0 } } }, biz: { $: 0 }, info: { $: 0 }, "123webseite": { $: 0 }, priv: { $: 0 }, my: { $: 0 }, myspreadshop: { $: 0 }, "12hp": { $: 0 }, "2ix": { $: 0 }, "4lima": { $: 0 }, "lima-city": { $: 0 } }, au: { $: 0, asn: { $: 0 }, com: { $: 0, cloudlets: { mel: { $: 0 } }, myspreadshop: { $: 0 } }, edu: { $: 0, act: { $: 0 }, catholic: { $: 0 }, nsw: { $: 0, schools: { $: 0 } }, nt: { $: 0 }, qld: { $: 0 }, sa: { $: 0 }, tas: { $: 0 }, vic: { $: 0 }, wa: { $: 0 } }, gov: { $: 0, qld: { $: 0 }, sa: { $: 0 }, tas: { $: 0 }, vic: { $: 0 }, wa: { $: 0 } }, id: { $: 0 }, net: { $: 0 }, org: { $: 0 }, conf: { $: 0 }, oz: { $: 0 }, act: { $: 0 }, nsw: { $: 0 }, nt: { $: 0 }, qld: { $: 0 }, sa: { $: 0 }, tas: { $: 0 }, vic: { $: 0 }, wa: { $: 0 } }, aw: { $: 0, com: { $: 0 } }, ax: { $: 0 }, az: { $: 0, biz: { $: 0 }, co: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, info: { $: 0 }, int: { $: 0 }, mil: { $: 0 }, name: { $: 0 }, net: { $: 0 }, org: { $: 0 }, pp: { $: 0 }, pro: { $: 0 } }, ba: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, org: { $: 0 }, rs: { $: 0 } }, bb: { $: 0, biz: { $: 0 }, co: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, info: { $: 0 }, net: { $: 0 }, org: { $: 0 }, store: { $: 0 }, tv: { $: 0 } }, bd: { "*": { $: 0 } }, be: { $: 0, ac: { $: 0 }, cloudns: { $: 0 }, webhosting: { $: 0 }, interhostsolutions: { cloud: { $: 0 } }, kuleuven: { ezproxy: { $: 0 } }, "123website": { $: 0 }, myspreadshop: { $: 0 }, transurl: { "*": { $: 0 } } }, bf: { $: 0, gov: { $: 0 } }, bg: { "0": { $: 0 }, "1": { $: 0 }, "2": { $: 0 }, "3": { $: 0 }, "4": { $: 0 }, "5": { $: 0 }, "6": { $: 0 }, "7": { $: 0 }, "8": { $: 0 }, "9": { $: 0 }, $: 0, a: { $: 0 }, b: { $: 0 }, c: { $: 0 }, d: { $: 0 }, e: { $: 0 }, f: { $: 0 }, g: { $: 0 }, h: { $: 0 }, i: { $: 0 }, j: { $: 0 }, k: { $: 0 }, l: { $: 0 }, m: { $: 0 }, n: { $: 0 }, o: { $: 0 }, p: { $: 0 }, q: { $: 0 }, r: { $: 0 }, s: { $: 0 }, t: { $: 0 }, u: { $: 0 }, v: { $: 0 }, w: { $: 0 }, x: { $: 0 }, y: { $: 0 }, z: { $: 0 }, barsy: { $: 0 } }, bh: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, bi: { $: 0, co: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, or: { $: 0 }, org: { $: 0 } }, biz: { $: 0, activetrail: { $: 0 }, "cloud-ip": { $: 0 }, cloudns: { $: 0 }, jozi: { $: 0 }, dyndns: { $: 0 }, "for-better": { $: 0 }, "for-more": { $: 0 }, "for-some": { $: 0 }, "for-the": { $: 0 }, selfip: { $: 0 }, webhop: { $: 0 }, orx: { $: 0 }, mmafan: { $: 0 }, myftp: { $: 0 }, "no-ip": { $: 0 }, dscloud: { $: 0 } }, bj: { $: 0, africa: { $: 0 }, agro: { $: 0 }, architectes: { $: 0 }, assur: { $: 0 }, avocats: { $: 0 }, co: { $: 0 }, com: { $: 0 }, eco: { $: 0 }, econo: { $: 0 }, edu: { $: 0 }, info: { $: 0 }, loisirs: { $: 0 }, money: { $: 0 }, net: { $: 0 }, org: { $: 0 }, ote: { $: 0 }, restaurant: { $: 0 }, resto: { $: 0 }, tourism: { $: 0 }, univ: { $: 0 } }, bm: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, bn: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 }, co: { $: 0 } }, bo: { $: 0, com: { $: 0 }, edu: { $: 0 }, gob: { $: 0 }, int: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, org: { $: 0 }, tv: { $: 0 }, web: { $: 0 }, academia: { $: 0 }, agro: { $: 0 }, arte: { $: 0 }, blog: { $: 0 }, bolivia: { $: 0 }, ciencia: { $: 0 }, cooperativa: { $: 0 }, democracia: { $: 0 }, deporte: { $: 0 }, ecologia: { $: 0 }, economia: { $: 0 }, empresa: { $: 0 }, indigena: { $: 0 }, industria: { $: 0 }, info: { $: 0 }, medicina: { $: 0 }, movimiento: { $: 0 }, musica: { $: 0 }, natural: { $: 0 }, nombre: { $: 0 }, noticias: { $: 0 }, patria: { $: 0 }, plurinacional: { $: 0 }, politica: { $: 0 }, profesional: { $: 0 }, pueblo: { $: 0 }, revista: { $: 0 }, salud: { $: 0 }, tecnologia: { $: 0 }, tksat: { $: 0 }, transporte: { $: 0 }, wiki: { $: 0 } }, br: { $: 0, "9guacu": { $: 0 }, abc: { $: 0 }, adm: { $: 0 }, adv: { $: 0 }, agr: { $: 0 }, aju: { $: 0 }, am: { $: 0 }, anani: { $: 0 }, aparecida: { $: 0 }, app: { $: 0 }, arq: { $: 0 }, art: { $: 0 }, ato: { $: 0 }, b: { $: 0 }, barueri: { $: 0 }, belem: { $: 0 }, bet: { $: 0 }, bhz: { $: 0 }, bib: { $: 0 }, bio: { $: 0 }, blog: { $: 0 }, bmd: { $: 0 }, boavista: { $: 0 }, bsb: { $: 0 }, campinagrande: { $: 0 }, campinas: { $: 0 }, caxias: { $: 0 }, cim: { $: 0 }, cng: { $: 0 }, cnt: { $: 0 }, com: { $: 0, simplesite: { $: 0 } }, contagem: { $: 0 }, coop: { $: 0 }, coz: { $: 0 }, cri: { $: 0 }, cuiaba: { $: 0 }, curitiba: { $: 0 }, def: { $: 0 }, des: { $: 0 }, det: { $: 0 }, dev: { $: 0 }, ecn: { $: 0 }, eco: { $: 0 }, edu: { $: 0 }, emp: { $: 0 }, enf: { $: 0 }, eng: { $: 0 }, esp: { $: 0 }, etc: { $: 0 }, eti: { $: 0 }, far: { $: 0 }, feira: { $: 0 }, flog: { $: 0 }, floripa: { $: 0 }, fm: { $: 0 }, fnd: { $: 0 }, fortal: { $: 0 }, fot: { $: 0 }, foz: { $: 0 }, fst: { $: 0 }, g12: { $: 0 }, geo: { $: 0 }, ggf: { $: 0 }, goiania: { $: 0 }, gov: { $: 0, ac: { $: 0 }, al: { $: 0 }, am: { $: 0 }, ap: { $: 0 }, ba: { $: 0 }, ce: { $: 0 }, df: { $: 0 }, es: { $: 0 }, go: { $: 0 }, ma: { $: 0 }, mg: { $: 0 }, ms: { $: 0 }, mt: { $: 0 }, pa: { $: 0 }, pb: { $: 0 }, pe: { $: 0 }, pi: { $: 0 }, pr: { $: 0 }, rj: { $: 0 }, rn: { $: 0 }, ro: { $: 0 }, rr: { $: 0 }, rs: { $: 0 }, sc: { $: 0 }, se: { $: 0 }, sp: { $: 0 }, to: { $: 0 } }, gru: { $: 0 }, imb: { $: 0 }, ind: { $: 0 }, inf: { $: 0 }, jab: { $: 0 }, jampa: { $: 0 }, jdf: { $: 0 }, joinville: { $: 0 }, jor: { $: 0 }, jus: { $: 0 }, leg: { $: 0, ac: { $: 0 }, al: { $: 0 }, am: { $: 0 }, ap: { $: 0 }, ba: { $: 0 }, ce: { $: 0 }, df: { $: 0 }, es: { $: 0 }, go: { $: 0 }, ma: { $: 0 }, mg: { $: 0 }, ms: { $: 0 }, mt: { $: 0 }, pa: { $: 0 }, pb: { $: 0 }, pe: { $: 0 }, pi: { $: 0 }, pr: { $: 0 }, rj: { $: 0 }, rn: { $: 0 }, ro: { $: 0 }, rr: { $: 0 }, rs: { $: 0 }, sc: { $: 0 }, se: { $: 0 }, sp: { $: 0 }, to: { $: 0 } }, leilao: { $: 0 }, lel: { $: 0 }, log: { $: 0 }, londrina: { $: 0 }, macapa: { $: 0 }, maceio: { $: 0 }, manaus: { $: 0 }, maringa: { $: 0 }, mat: { $: 0 }, med: { $: 0 }, mil: { $: 0 }, morena: { $: 0 }, mp: { $: 0 }, mus: { $: 0 }, natal: { $: 0 }, net: { $: 0 }, niteroi: { $: 0 }, nom: { "*": { $: 0 } }, not: { $: 0 }, ntr: { $: 0 }, odo: { $: 0 }, ong: { $: 0 }, org: { $: 0 }, osasco: { $: 0 }, palmas: { $: 0 }, poa: { $: 0 }, ppg: { $: 0 }, pro: { $: 0 }, psc: { $: 0 }, psi: { $: 0 }, pvh: { $: 0 }, qsl: { $: 0 }, radio: { $: 0 }, rec: { $: 0 }, recife: { $: 0 }, rep: { $: 0 }, ribeirao: { $: 0 }, rio: { $: 0 }, riobranco: { $: 0 }, riopreto: { $: 0 }, salvador: { $: 0 }, sampa: { $: 0 }, santamaria: { $: 0 }, santoandre: { $: 0 }, saobernardo: { $: 0 }, saogonca: { $: 0 }, seg: { $: 0 }, sjc: { $: 0 }, slg: { $: 0 }, slz: { $: 0 }, sorocaba: { $: 0 }, srv: { $: 0 }, taxi: { $: 0 }, tc: { $: 0 }, tec: { $: 0 }, teo: { $: 0 }, the: { $: 0 }, tmp: { $: 0 }, trd: { $: 0 }, tur: { $: 0 }, tv: { $: 0 }, udi: { $: 0 }, vet: { $: 0 }, vix: { $: 0 }, vlog: { $: 0 }, wiki: { $: 0 }, zlg: { $: 0 }, tche: { $: 0 } }, bs: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 }, we: { $: 0 } }, bt: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, bv: { $: 0 }, bw: { $: 0, ac: { $: 0 }, co: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, by: { $: 0, gov: { $: 0 }, mil: { $: 0 }, com: { $: 0 }, of: { $: 0 }, mediatech: { $: 0 } }, bz: { $: 0, co: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 }, za: { $: 0 }, mydns: { $: 0 }, gsj: { $: 0 } }, ca: { $: 0, ab: { $: 0 }, bc: { $: 0 }, mb: { $: 0 }, nb: { $: 0 }, nf: { $: 0 }, nl: { $: 0 }, ns: { $: 0 }, nt: { $: 0 }, nu: { $: 0 }, on: { $: 0 }, pe: { $: 0 }, qc: { $: 0 }, sk: { $: 0 }, yk: { $: 0 }, gc: { $: 0 }, barsy: { $: 0 }, awdev: { "*": { $: 0 } }, co: { $: 0 }, "no-ip": { $: 0 }, onid: { $: 0 }, myspreadshop: { $: 0 }, box: { $: 0 } }, cat: { $: 0 }, cc: { $: 0, cleverapps: { $: 0 }, cloudns: { $: 0 }, ftpaccess: { $: 0 }, "game-server": { $: 0 }, myphotos: { $: 0 }, scrapping: { $: 0 }, twmail: { $: 0 }, csx: { $: 0 }, fantasyleague: { $: 0 }, spawn: { instances: { $: 0 } } }, cd: { $: 0, gov: { $: 0 } }, cf: { $: 0 }, cg: { $: 0 }, ch: { $: 0, square7: { $: 0 }, cloudns: { $: 0 }, cloudscale: { cust: { $: 0 }, lpg: { objects: { $: 0 } }, rma: { objects: { $: 0 } } }, objectstorage: { lpg: { $: 0 }, rma: { $: 0 } }, flow: { ae: { alp1: { $: 0 } }, appengine: { $: 0 } }, "linkyard-cloud": { $: 0 }, gotdns: { $: 0 }, dnsking: { $: 0 }, "123website": { $: 0 }, myspreadshop: { $: 0 }, firenet: { "*": { $: 0 }, svc: { "*": { $: 0 } } }, "12hp": { $: 0 }, "2ix": { $: 0 }, "4lima": { $: 0 }, "lima-city": { $: 0 } }, ci: { $: 0, ac: { $: 0 }, "xn--aroport-bya": { $: 0 }, asso: { $: 0 }, co: { $: 0 }, com: { $: 0 }, ed: { $: 0 }, edu: { $: 0 }, go: { $: 0 }, gouv: { $: 0 }, int: { $: 0 }, net: { $: 0 }, or: { $: 0 }, org: { $: 0 } }, ck: { "*": { $: 0 } }, cl: { $: 0, co: { $: 0 }, gob: { $: 0 }, gov: { $: 0 }, mil: { $: 0 }, cloudns: { $: 0 } }, cm: { $: 0, co: { $: 0 }, com: { $: 0 }, gov: { $: 0 }, net: { $: 0 } }, cn: { $: 0, ac: { $: 0 }, com: { $: 0, amazonaws: { "cn-north-1": { "execute-api": { $: 0 }, "emrappui-prod": { $: 0 }, "emrnotebooks-prod": { $: 0 }, "emrstudio-prod": { $: 0 }, dualstack: { s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-website": { $: 0 } }, s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-deprecated": { $: 0 }, "s3-object-lambda": { $: 0 }, "s3-website": { $: 0 } }, "cn-northwest-1": { "execute-api": { $: 0 }, "emrappui-prod": { $: 0 }, "emrnotebooks-prod": { $: 0 }, "emrstudio-prod": { $: 0 }, dualstack: { s3: { $: 0 }, "s3-accesspoint": { $: 0 } }, s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-object-lambda": { $: 0 }, "s3-website": { $: 0 } }, compute: { "*": { $: 0 } }, airflow: { "cn-north-1": { "*": { $: 0 } }, "cn-northwest-1": { "*": { $: 0 } } }, eb: { "cn-north-1": { $: 0 }, "cn-northwest-1": { $: 0 } }, elb: { "*": { $: 0 } } }, sagemaker: { "cn-north-1": { notebook: { $: 0 }, studio: { $: 0 } }, "cn-northwest-1": { notebook: { $: 0 }, studio: { $: 0 } } } }, edu: { $: 0 }, gov: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, org: { $: 0 }, "xn--55qx5d": { $: 0 }, "xn--od0alg": { $: 0 }, "xn--io0a7i": { $: 0 }, ah: { $: 0 }, bj: { $: 0 }, cq: { $: 0 }, fj: { $: 0 }, gd: { $: 0 }, gs: { $: 0 }, gx: { $: 0 }, gz: { $: 0 }, ha: { $: 0 }, hb: { $: 0 }, he: { $: 0 }, hi: { $: 0 }, hk: { $: 0 }, hl: { $: 0 }, hn: { $: 0 }, jl: { $: 0 }, js: { $: 0 }, jx: { $: 0 }, ln: { $: 0 }, mo: { $: 0 }, nm: { $: 0 }, nx: { $: 0 }, qh: { $: 0 }, sc: { $: 0 }, sd: { $: 0 }, sh: { $: 0, as: { $: 0 } }, sn: { $: 0 }, sx: { $: 0 }, tj: { $: 0 }, tw: { $: 0 }, xj: { $: 0 }, xz: { $: 0 }, yn: { $: 0 }, zj: { $: 0 }, "canva-apps": { $: 0 }, canvasite: { my: { $: 0 } }, myqnapcloud: { $: 0 }, quickconnect: { direct: { $: 0 } } }, co: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, nom: { $: 0 }, org: { $: 0 }, carrd: { $: 0 }, crd: { $: 0 }, otap: { "*": { $: 0 } }, leadpages: { $: 0 }, lpages: { $: 0 }, mypi: { $: 0 }, xmit: { "*": { $: 0 } }, firewalledreplit: { $: 0, id: { $: 0 } }, repl: { $: 0, id: { $: 0 } }, supabase: { $: 0 } }, com: { $: 0, a2hosted: { $: 0 }, cpserver: { $: 0 }, adobeaemcloud: { $: 0, dev: { "*": { $: 0 } } }, africa: { $: 0 }, airkitapps: { $: 0 }, "airkitapps-au": { $: 0 }, aivencloud: { $: 0 }, alibabacloudcs: { $: 0 }, kasserver: { $: 0 }, amazonaws: { "af-south-1": { "execute-api": { $: 0 }, "emrappui-prod": { $: 0 }, "emrnotebooks-prod": { $: 0 }, "emrstudio-prod": { $: 0 }, dualstack: { s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-website": { $: 0 } }, s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-object-lambda": { $: 0 }, "s3-website": { $: 0 }, "aws-cloud9": { "webview-assets": { $: 0 } }, cloud9: { vfs: { $: 0 }, "webview-assets": { $: 0 } } }, "ap-east-1": { "execute-api": { $: 0 }, "emrappui-prod": { $: 0 }, "emrnotebooks-prod": { $: 0 }, "emrstudio-prod": { $: 0 }, dualstack: { s3: { $: 0 }, "s3-accesspoint": { $: 0 } }, s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-object-lambda": { $: 0 }, "s3-website": { $: 0 }, "aws-cloud9": { "webview-assets": { $: 0 } }, cloud9: { vfs: { $: 0 }, "webview-assets": { $: 0 } } }, "ap-northeast-1": { "execute-api": { $: 0 }, "emrappui-prod": { $: 0 }, "emrnotebooks-prod": { $: 0 }, "emrstudio-prod": { $: 0 }, dualstack: { s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-website": { $: 0 } }, s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-object-lambda": { $: 0 }, "s3-website": { $: 0 }, "analytics-gateway": { $: 0 }, "aws-cloud9": { "webview-assets": { $: 0 } }, cloud9: { vfs: { $: 0 }, "webview-assets": { $: 0 } } }, "ap-northeast-2": { "execute-api": { $: 0 }, "emrappui-prod": { $: 0 }, "emrnotebooks-prod": { $: 0 }, "emrstudio-prod": { $: 0 }, dualstack: { s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-website": { $: 0 } }, s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-object-lambda": { $: 0 }, "s3-website": { $: 0 }, "analytics-gateway": { $: 0 }, "aws-cloud9": { "webview-assets": { $: 0 } }, cloud9: { vfs: { $: 0 }, "webview-assets": { $: 0 } } }, "ap-northeast-3": { "execute-api": { $: 0 }, "emrappui-prod": { $: 0 }, "emrnotebooks-prod": { $: 0 }, "emrstudio-prod": { $: 0 }, dualstack: { s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-website": { $: 0 } }, s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-object-lambda": { $: 0 }, "s3-website": { $: 0 }, "aws-cloud9": { "webview-assets": { $: 0 } }, cloud9: { vfs: { $: 0 }, "webview-assets": { $: 0 } } }, "ap-south-1": { "execute-api": { $: 0 }, "emrappui-prod": { $: 0 }, "emrnotebooks-prod": { $: 0 }, "emrstudio-prod": { $: 0 }, dualstack: { s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-website": { $: 0 } }, s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-object-lambda": { $: 0 }, "s3-website": { $: 0 }, "analytics-gateway": { $: 0 }, "aws-cloud9": { "webview-assets": { $: 0 } }, cloud9: { vfs: { $: 0 }, "webview-assets": { $: 0 } } }, "ap-south-2": { "execute-api": { $: 0 }, "emrappui-prod": { $: 0 }, "emrnotebooks-prod": { $: 0 }, "emrstudio-prod": { $: 0 }, dualstack: { s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-website": { $: 0 } }, s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-object-lambda": { $: 0 }, "s3-website": { $: 0 } }, "ap-southeast-1": { "execute-api": { $: 0 }, "emrappui-prod": { $: 0 }, "emrnotebooks-prod": { $: 0 }, "emrstudio-prod": { $: 0 }, dualstack: { s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-website": { $: 0 } }, s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-object-lambda": { $: 0 }, "s3-website": { $: 0 }, "analytics-gateway": { $: 0 }, "aws-cloud9": { "webview-assets": { $: 0 } }, cloud9: { vfs: { $: 0 }, "webview-assets": { $: 0 } } }, "ap-southeast-2": { "execute-api": { $: 0 }, "emrappui-prod": { $: 0 }, "emrnotebooks-prod": { $: 0 }, "emrstudio-prod": { $: 0 }, dualstack: { s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-website": { $: 0 } }, s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-object-lambda": { $: 0 }, "s3-website": { $: 0 }, "analytics-gateway": { $: 0 }, "aws-cloud9": { "webview-assets": { $: 0 } }, cloud9: { vfs: { $: 0 }, "webview-assets": { $: 0 } } }, "ap-southeast-3": { "execute-api": { $: 0 }, "emrappui-prod": { $: 0 }, "emrnotebooks-prod": { $: 0 }, "emrstudio-prod": { $: 0 }, dualstack: { s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-website": { $: 0 } }, s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-object-lambda": { $: 0 }, "s3-website": { $: 0 } }, "ap-southeast-4": { "execute-api": { $: 0 }, "emrappui-prod": { $: 0 }, "emrnotebooks-prod": { $: 0 }, "emrstudio-prod": { $: 0 }, dualstack: { s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-website": { $: 0 } }, s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-object-lambda": { $: 0 }, "s3-website": { $: 0 } }, "ap-southeast-5": { "execute-api": { $: 0 }, dualstack: { s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-website": { $: 0 } }, s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-deprecated": { $: 0 }, "s3-object-lambda": { $: 0 }, "s3-website": { $: 0 } }, "ca-central-1": { "execute-api": { $: 0 }, "emrappui-prod": { $: 0 }, "emrnotebooks-prod": { $: 0 }, "emrstudio-prod": { $: 0 }, dualstack: { s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-accesspoint-fips": { $: 0 }, "s3-fips": { $: 0 }, "s3-website": { $: 0 } }, s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-accesspoint-fips": { $: 0 }, "s3-fips": { $: 0 }, "s3-object-lambda": { $: 0 }, "s3-website": { $: 0 }, "aws-cloud9": { "webview-assets": { $: 0 } }, cloud9: { vfs: { $: 0 }, "webview-assets": { $: 0 } } }, "ca-west-1": { "execute-api": { $: 0 }, "emrappui-prod": { $: 0 }, "emrnotebooks-prod": { $: 0 }, "emrstudio-prod": { $: 0 }, dualstack: { s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-accesspoint-fips": { $: 0 }, "s3-fips": { $: 0 }, "s3-website": { $: 0 } }, s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-accesspoint-fips": { $: 0 }, "s3-fips": { $: 0 }, "s3-object-lambda": { $: 0 }, "s3-website": { $: 0 } }, "eu-central-1": { "execute-api": { $: 0 }, "emrappui-prod": { $: 0 }, "emrnotebooks-prod": { $: 0 }, "emrstudio-prod": { $: 0 }, dualstack: { s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-website": { $: 0 } }, s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-object-lambda": { $: 0 }, "s3-website": { $: 0 }, "analytics-gateway": { $: 0 }, "aws-cloud9": { "webview-assets": { $: 0 } }, cloud9: { vfs: { $: 0 }, "webview-assets": { $: 0 } } }, "eu-central-2": { "execute-api": { $: 0 }, "emrappui-prod": { $: 0 }, "emrnotebooks-prod": { $: 0 }, "emrstudio-prod": { $: 0 }, dualstack: { s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-website": { $: 0 } }, s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-object-lambda": { $: 0 }, "s3-website": { $: 0 } }, "eu-north-1": { "execute-api": { $: 0 }, "emrappui-prod": { $: 0 }, "emrnotebooks-prod": { $: 0 }, "emrstudio-prod": { $: 0 }, dualstack: { s3: { $: 0 }, "s3-accesspoint": { $: 0 } }, s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-object-lambda": { $: 0 }, "s3-website": { $: 0 }, "aws-cloud9": { "webview-assets": { $: 0 } }, cloud9: { vfs: { $: 0 }, "webview-assets": { $: 0 } } }, "eu-south-1": { "execute-api": { $: 0 }, "emrappui-prod": { $: 0 }, "emrnotebooks-prod": { $: 0 }, "emrstudio-prod": { $: 0 }, dualstack: { s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-website": { $: 0 } }, s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-object-lambda": { $: 0 }, "s3-website": { $: 0 }, "aws-cloud9": { "webview-assets": { $: 0 } }, cloud9: { vfs: { $: 0 }, "webview-assets": { $: 0 } } }, "eu-south-2": { "execute-api": { $: 0 }, "emrappui-prod": { $: 0 }, "emrnotebooks-prod": { $: 0 }, "emrstudio-prod": { $: 0 }, dualstack: { s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-website": { $: 0 } }, s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-object-lambda": { $: 0 }, "s3-website": { $: 0 } }, "eu-west-1": { "execute-api": { $: 0 }, "emrappui-prod": { $: 0 }, "emrnotebooks-prod": { $: 0 }, "emrstudio-prod": { $: 0 }, dualstack: { s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-website": { $: 0 } }, s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-deprecated": { $: 0 }, "s3-object-lambda": { $: 0 }, "s3-website": { $: 0 }, "analytics-gateway": { $: 0 }, "aws-cloud9": { "webview-assets": { $: 0 } }, cloud9: { vfs: { $: 0 }, "webview-assets": { $: 0 } } }, "eu-west-2": { "execute-api": { $: 0 }, "emrappui-prod": { $: 0 }, "emrnotebooks-prod": { $: 0 }, "emrstudio-prod": { $: 0 }, dualstack: { s3: { $: 0 }, "s3-accesspoint": { $: 0 } }, s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-object-lambda": { $: 0 }, "s3-website": { $: 0 }, "aws-cloud9": { "webview-assets": { $: 0 } }, cloud9: { vfs: { $: 0 }, "webview-assets": { $: 0 } } }, "eu-west-3": { "execute-api": { $: 0 }, "emrappui-prod": { $: 0 }, "emrnotebooks-prod": { $: 0 }, "emrstudio-prod": { $: 0 }, dualstack: { s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-website": { $: 0 } }, s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-object-lambda": { $: 0 }, "s3-website": { $: 0 }, "aws-cloud9": { "webview-assets": { $: 0 } }, cloud9: { vfs: { $: 0 }, "webview-assets": { $: 0 } } }, "il-central-1": { "execute-api": { $: 0 }, "emrappui-prod": { $: 0 }, "emrnotebooks-prod": { $: 0 }, "emrstudio-prod": { $: 0 }, dualstack: { s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-website": { $: 0 } }, s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-object-lambda": { $: 0 }, "s3-website": { $: 0 }, "aws-cloud9": { "webview-assets": { $: 0 } }, cloud9: { vfs: { $: 0 } } }, "me-central-1": { "execute-api": { $: 0 }, "emrappui-prod": { $: 0 }, "emrnotebooks-prod": { $: 0 }, "emrstudio-prod": { $: 0 }, dualstack: { s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-website": { $: 0 } }, s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-object-lambda": { $: 0 }, "s3-website": { $: 0 } }, "me-south-1": { "execute-api": { $: 0 }, "emrappui-prod": { $: 0 }, "emrnotebooks-prod": { $: 0 }, "emrstudio-prod": { $: 0 }, dualstack: { s3: { $: 0 }, "s3-accesspoint": { $: 0 } }, s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-object-lambda": { $: 0 }, "s3-website": { $: 0 }, "aws-cloud9": { "webview-assets": { $: 0 } }, cloud9: { vfs: { $: 0 }, "webview-assets": { $: 0 } } }, "sa-east-1": { "execute-api": { $: 0 }, "emrappui-prod": { $: 0 }, "emrnotebooks-prod": { $: 0 }, "emrstudio-prod": { $: 0 }, dualstack: { s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-website": { $: 0 } }, s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-object-lambda": { $: 0 }, "s3-website": { $: 0 }, "aws-cloud9": { "webview-assets": { $: 0 } }, cloud9: { vfs: { $: 0 }, "webview-assets": { $: 0 } } }, "us-east-1": { "execute-api": { $: 0 }, $: 0, "emrappui-prod": { $: 0 }, "emrnotebooks-prod": { $: 0 }, "emrstudio-prod": { $: 0 }, dualstack: { s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-accesspoint-fips": { $: 0 }, "s3-fips": { $: 0 }, "s3-website": { $: 0 } }, s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-accesspoint-fips": { $: 0 }, "s3-deprecated": { $: 0 }, "s3-fips": { $: 0 }, "s3-object-lambda": { $: 0 }, "s3-website": { $: 0 }, "analytics-gateway": { $: 0 }, "aws-cloud9": { "webview-assets": { $: 0 } }, cloud9: { vfs: { $: 0 }, "webview-assets": { $: 0 } } }, "us-east-2": { "execute-api": { $: 0 }, "emrappui-prod": { $: 0 }, "emrnotebooks-prod": { $: 0 }, "emrstudio-prod": { $: 0 }, dualstack: { s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-accesspoint-fips": { $: 0 }, "s3-fips": { $: 0 }, "s3-website": { $: 0 } }, s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-accesspoint-fips": { $: 0 }, "s3-deprecated": { $: 0 }, "s3-fips": { $: 0 }, "s3-object-lambda": { $: 0 }, "s3-website": { $: 0 }, "analytics-gateway": { $: 0 }, "aws-cloud9": { "webview-assets": { $: 0 } }, cloud9: { vfs: { $: 0 }, "webview-assets": { $: 0 } } }, "us-gov-east-1": { "execute-api": { $: 0 }, "emrappui-prod": { $: 0 }, "emrnotebooks-prod": { $: 0 }, "emrstudio-prod": { $: 0 }, dualstack: { s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-accesspoint-fips": { $: 0 }, "s3-fips": { $: 0 } }, s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-accesspoint-fips": { $: 0 }, "s3-fips": { $: 0 }, "s3-object-lambda": { $: 0 }, "s3-website": { $: 0 } }, "us-gov-west-1": { "execute-api": { $: 0 }, "emrappui-prod": { $: 0 }, "emrnotebooks-prod": { $: 0 }, "emrstudio-prod": { $: 0 }, dualstack: { s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-accesspoint-fips": { $: 0 }, "s3-fips": { $: 0 } }, s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-accesspoint-fips": { $: 0 }, "s3-fips": { $: 0 }, "s3-object-lambda": { $: 0 }, "s3-website": { $: 0 } }, "us-west-1": { "execute-api": { $: 0 }, "emrappui-prod": { $: 0 }, "emrnotebooks-prod": { $: 0 }, "emrstudio-prod": { $: 0 }, dualstack: { s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-accesspoint-fips": { $: 0 }, "s3-fips": { $: 0 }, "s3-website": { $: 0 } }, s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-accesspoint-fips": { $: 0 }, "s3-fips": { $: 0 }, "s3-object-lambda": { $: 0 }, "s3-website": { $: 0 }, "aws-cloud9": { "webview-assets": { $: 0 } }, cloud9: { vfs: { $: 0 }, "webview-assets": { $: 0 } } }, "us-west-2": { "execute-api": { $: 0 }, "emrappui-prod": { $: 0 }, "emrnotebooks-prod": { $: 0 }, "emrstudio-prod": { $: 0 }, dualstack: { s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-accesspoint-fips": { $: 0 }, "s3-fips": { $: 0 }, "s3-website": { $: 0 } }, s3: { $: 0 }, "s3-accesspoint": { $: 0 }, "s3-accesspoint-fips": { $: 0 }, "s3-deprecated": { $: 0 }, "s3-fips": { $: 0 }, "s3-object-lambda": { $: 0 }, "s3-website": { $: 0 }, "analytics-gateway": { $: 0 }, "aws-cloud9": { "webview-assets": { $: 0 } }, cloud9: { vfs: { $: 0 }, "webview-assets": { $: 0 } } }, compute: { "*": { $: 0 } }, "compute-1": { "*": { $: 0 } }, airflow: { "af-south-1": { "*": { $: 0 } }, "ap-east-1": { "*": { $: 0 } }, "ap-northeast-1": { "*": { $: 0 } }, "ap-northeast-2": { "*": { $: 0 } }, "ap-northeast-3": { "*": { $: 0 } }, "ap-south-1": { "*": { $: 0 } }, "ap-south-2": { "*": { $: 0 } }, "ap-southeast-1": { "*": { $: 0 } }, "ap-southeast-2": { "*": { $: 0 } }, "ap-southeast-3": { "*": { $: 0 } }, "ap-southeast-4": { "*": { $: 0 } }, "ca-central-1": { "*": { $: 0 } }, "ca-west-1": { "*": { $: 0 } }, "eu-central-1": { "*": { $: 0 } }, "eu-central-2": { "*": { $: 0 } }, "eu-north-1": { "*": { $: 0 } }, "eu-south-1": { "*": { $: 0 } }, "eu-south-2": { "*": { $: 0 } }, "eu-west-1": { "*": { $: 0 } }, "eu-west-2": { "*": { $: 0 } }, "eu-west-3": { "*": { $: 0 } }, "il-central-1": { "*": { $: 0 } }, "me-central-1": { "*": { $: 0 } }, "me-south-1": { "*": { $: 0 } }, "sa-east-1": { "*": { $: 0 } }, "us-east-1": { "*": { $: 0 } }, "us-east-2": { "*": { $: 0 } }, "us-west-1": { "*": { $: 0 } }, "us-west-2": { "*": { $: 0 } } }, s3: { $: 0 }, "s3-1": { $: 0 }, "s3-ap-east-1": { $: 0 }, "s3-ap-northeast-1": { $: 0 }, "s3-ap-northeast-2": { $: 0 }, "s3-ap-northeast-3": { $: 0 }, "s3-ap-south-1": { $: 0 }, "s3-ap-southeast-1": { $: 0 }, "s3-ap-southeast-2": { $: 0 }, "s3-ca-central-1": { $: 0 }, "s3-eu-central-1": { $: 0 }, "s3-eu-north-1": { $: 0 }, "s3-eu-west-1": { $: 0 }, "s3-eu-west-2": { $: 0 }, "s3-eu-west-3": { $: 0 }, "s3-external-1": { $: 0 }, "s3-fips-us-gov-east-1": { $: 0 }, "s3-fips-us-gov-west-1": { $: 0 }, "s3-global": { accesspoint: { mrap: { $: 0 } } }, "s3-me-south-1": { $: 0 }, "s3-sa-east-1": { $: 0 }, "s3-us-east-2": { $: 0 }, "s3-us-gov-east-1": { $: 0 }, "s3-us-gov-west-1": { $: 0 }, "s3-us-west-1": { $: 0 }, "s3-us-west-2": { $: 0 }, "s3-website-ap-northeast-1": { $: 0 }, "s3-website-ap-southeast-1": { $: 0 }, "s3-website-ap-southeast-2": { $: 0 }, "s3-website-eu-west-1": { $: 0 }, "s3-website-sa-east-1": { $: 0 }, "s3-website-us-east-1": { $: 0 }, "s3-website-us-gov-west-1": { $: 0 }, "s3-website-us-west-1": { $: 0 }, "s3-website-us-west-2": { $: 0 }, elb: { "*": { $: 0 } } }, amazoncognito: { "af-south-1": { auth: { $: 0 } }, "ap-east-1": { auth: { $: 0 } }, "ap-northeast-1": { auth: { $: 0 } }, "ap-northeast-2": { auth: { $: 0 } }, "ap-northeast-3": { auth: { $: 0 } }, "ap-south-1": { auth: { $: 0 } }, "ap-south-2": { auth: { $: 0 } }, "ap-southeast-1": { auth: { $: 0 } }, "ap-southeast-2": { auth: { $: 0 } }, "ap-southeast-3": { auth: { $: 0 } }, "ap-southeast-4": { auth: { $: 0 } }, "ap-southeast-5": { auth: { $: 0 } }, "ca-central-1": { auth: { $: 0 } }, "ca-west-1": { auth: { $: 0 } }, "eu-central-1": { auth: { $: 0 } }, "eu-central-2": { auth: { $: 0 } }, "eu-north-1": { auth: { $: 0 } }, "eu-south-1": { auth: { $: 0 } }, "eu-south-2": { auth: { $: 0 } }, "eu-west-1": { auth: { $: 0 } }, "eu-west-2": { auth: { $: 0 } }, "eu-west-3": { auth: { $: 0 } }, "il-central-1": { auth: { $: 0 } }, "me-central-1": { auth: { $: 0 } }, "me-south-1": { auth: { $: 0 } }, "sa-east-1": { auth: { $: 0 } }, "us-east-1": { auth: { $: 0 }, "auth-fips": { $: 0 } }, "us-east-2": { auth: { $: 0 }, "auth-fips": { $: 0 } }, "us-gov-east-1": { "auth-fips": { $: 0 } }, "us-gov-west-1": { "auth-fips": { $: 0 } }, "us-west-1": { auth: { $: 0 }, "auth-fips": { $: 0 } }, "us-west-2": { auth: { $: 0 }, "auth-fips": { $: 0 } } }, amplifyapp: { $: 0 }, awsapprunner: { "*": { $: 0 } }, awsapps: { $: 0 }, elasticbeanstalk: { $: 0, "af-south-1": { $: 0 }, "ap-east-1": { $: 0 }, "ap-northeast-1": { $: 0 }, "ap-northeast-2": { $: 0 }, "ap-northeast-3": { $: 0 }, "ap-south-1": { $: 0 }, "ap-southeast-1": { $: 0 }, "ap-southeast-2": { $: 0 }, "ap-southeast-3": { $: 0 }, "ca-central-1": { $: 0 }, "eu-central-1": { $: 0 }, "eu-north-1": { $: 0 }, "eu-south-1": { $: 0 }, "eu-west-1": { $: 0 }, "eu-west-2": { $: 0 }, "eu-west-3": { $: 0 }, "il-central-1": { $: 0 }, "me-south-1": { $: 0 }, "sa-east-1": { $: 0 }, "us-east-1": { $: 0 }, "us-east-2": { $: 0 }, "us-gov-east-1": { $: 0 }, "us-gov-west-1": { $: 0 }, "us-west-1": { $: 0 }, "us-west-2": { $: 0 } }, awsglobalaccelerator: { $: 0 }, siiites: { $: 0 }, appspacehosted: { $: 0 }, appspaceusercontent: { $: 0 }, "on-aptible": { $: 0 }, myasustor: { $: 0 }, "balena-devices": { $: 0 }, boutir: { $: 0 }, bplaced: { $: 0 }, cafjs: { $: 0 }, "canva-apps": { $: 0 }, "cdn77-storage": { $: 0 }, br: { $: 0 }, cn: { $: 0 }, de: { $: 0 }, eu: { $: 0 }, jpn: { $: 0 }, mex: { $: 0 }, ru: { $: 0 }, sa: { $: 0 }, uk: { $: 0 }, us: { $: 0 }, za: { $: 0 }, "clever-cloud": { services: { "*": { $: 0 } } }, dnsabr: { $: 0 }, "ip-ddns": { $: 0 }, jdevcloud: { $: 0 }, wpdevcloud: { $: 0 }, "cf-ipfs": { $: 0 }, "cloudflare-ipfs": { $: 0 }, trycloudflare: { $: 0 }, co: { $: 0 }, devinapps: { "*": { $: 0 } }, builtwithdark: { $: 0 }, datadetect: { demo: { $: 0 }, instance: { $: 0 } }, dattolocal: { $: 0 }, dattorelay: { $: 0 }, dattoweb: { $: 0 }, mydatto: { $: 0 }, digitaloceanspaces: { "*": { $: 0 } }, discordsays: { $: 0 }, discordsez: { $: 0 }, drayddns: { $: 0 }, dreamhosters: { $: 0 }, durumis: { $: 0 }, mydrobo: { $: 0 }, blogdns: { $: 0 }, cechire: { $: 0 }, dnsalias: { $: 0 }, dnsdojo: { $: 0 }, doesntexist: { $: 0 }, dontexist: { $: 0 }, doomdns: { $: 0 }, "dyn-o-saur": { $: 0 }, dynalias: { $: 0 }, "dyndns-at-home": { $: 0 }, "dyndns-at-work": { $: 0 }, "dyndns-blog": { $: 0 }, "dyndns-free": { $: 0 }, "dyndns-home": { $: 0 }, "dyndns-ip": { $: 0 }, "dyndns-mail": { $: 0 }, "dyndns-office": { $: 0 }, "dyndns-pics": { $: 0 }, "dyndns-remote": { $: 0 }, "dyndns-server": { $: 0 }, "dyndns-web": { $: 0 }, "dyndns-wiki": { $: 0 }, "dyndns-work": { $: 0 }, "est-a-la-maison": { $: 0 }, "est-a-la-masion": { $: 0 }, "est-le-patron": { $: 0 }, "est-mon-blogueur": { $: 0 }, "from-ak": { $: 0 }, "from-al": { $: 0 }, "from-ar": { $: 0 }, "from-ca": { $: 0 }, "from-ct": { $: 0 }, "from-dc": { $: 0 }, "from-de": { $: 0 }, "from-fl": { $: 0 }, "from-ga": { $: 0 }, "from-hi": { $: 0 }, "from-ia": { $: 0 }, "from-id": { $: 0 }, "from-il": { $: 0 }, "from-in": { $: 0 }, "from-ks": { $: 0 }, "from-ky": { $: 0 }, "from-ma": { $: 0 }, "from-md": { $: 0 }, "from-mi": { $: 0 }, "from-mn": { $: 0 }, "from-mo": { $: 0 }, "from-ms": { $: 0 }, "from-mt": { $: 0 }, "from-nc": { $: 0 }, "from-nd": { $: 0 }, "from-ne": { $: 0 }, "from-nh": { $: 0 }, "from-nj": { $: 0 }, "from-nm": { $: 0 }, "from-nv": { $: 0 }, "from-oh": { $: 0 }, "from-ok": { $: 0 }, "from-or": { $: 0 }, "from-pa": { $: 0 }, "from-pr": { $: 0 }, "from-ri": { $: 0 }, "from-sc": { $: 0 }, "from-sd": { $: 0 }, "from-tn": { $: 0 }, "from-tx": { $: 0 }, "from-ut": { $: 0 }, "from-va": { $: 0 }, "from-vt": { $: 0 }, "from-wa": { $: 0 }, "from-wi": { $: 0 }, "from-wv": { $: 0 }, "from-wy": { $: 0 }, getmyip: { $: 0 }, gotdns: { $: 0 }, "hobby-site": { $: 0 }, homelinux: { $: 0 }, homeunix: { $: 0 }, iamallama: { $: 0 }, "is-a-anarchist": { $: 0 }, "is-a-blogger": { $: 0 }, "is-a-bookkeeper": { $: 0 }, "is-a-bulls-fan": { $: 0 }, "is-a-caterer": { $: 0 }, "is-a-chef": { $: 0 }, "is-a-conservative": { $: 0 }, "is-a-cpa": { $: 0 }, "is-a-cubicle-slave": { $: 0 }, "is-a-democrat": { $: 0 }, "is-a-designer": { $: 0 }, "is-a-doctor": { $: 0 }, "is-a-financialadvisor": { $: 0 }, "is-a-geek": { $: 0 }, "is-a-green": { $: 0 }, "is-a-guru": { $: 0 }, "is-a-hard-worker": { $: 0 }, "is-a-hunter": { $: 0 }, "is-a-landscaper": { $: 0 }, "is-a-lawyer": { $: 0 }, "is-a-liberal": { $: 0 }, "is-a-libertarian": { $: 0 }, "is-a-llama": { $: 0 }, "is-a-musician": { $: 0 }, "is-a-nascarfan": { $: 0 }, "is-a-nurse": { $: 0 }, "is-a-painter": { $: 0 }, "is-a-personaltrainer": { $: 0 }, "is-a-photographer": { $: 0 }, "is-a-player": { $: 0 }, "is-a-republican": { $: 0 }, "is-a-rockstar": { $: 0 }, "is-a-socialist": { $: 0 }, "is-a-student": { $: 0 }, "is-a-teacher": { $: 0 }, "is-a-techie": { $: 0 }, "is-a-therapist": { $: 0 }, "is-an-accountant": { $: 0 }, "is-an-actor": { $: 0 }, "is-an-actress": { $: 0 }, "is-an-anarchist": { $: 0 }, "is-an-artist": { $: 0 }, "is-an-engineer": { $: 0 }, "is-an-entertainer": { $: 0 }, "is-certified": { $: 0 }, "is-gone": { $: 0 }, "is-into-anime": { $: 0 }, "is-into-cars": { $: 0 }, "is-into-cartoons": { $: 0 }, "is-into-games": { $: 0 }, "is-leet": { $: 0 }, "is-not-certified": { $: 0 }, "is-slick": { $: 0 }, "is-uberleet": { $: 0 }, "is-with-theband": { $: 0 }, "isa-geek": { $: 0 }, "isa-hockeynut": { $: 0 }, issmarterthanyou: { $: 0 }, "likes-pie": { $: 0 }, likescandy: { $: 0 }, "neat-url": { $: 0 }, "saves-the-whales": { $: 0 }, selfip: { $: 0 }, "sells-for-less": { $: 0 }, "sells-for-u": { $: 0 }, servebbs: { $: 0 }, "simple-url": { $: 0 }, "space-to-rent": { $: 0 }, "teaches-yoga": { $: 0 }, writesthisblog: { $: 0 }, ddnsfree: { $: 0 }, ddnsgeek: { $: 0 }, giize: { $: 0 }, gleeze: { $: 0 }, kozow: { $: 0 }, loseyourip: { $: 0 }, ooguy: { $: 0 }, theworkpc: { $: 0 }, mytuleap: { $: 0 }, "tuleap-partners": { $: 0 }, encoreapi: { $: 0 }, evennode: { "eu-1": { $: 0 }, "eu-2": { $: 0 }, "eu-3": { $: 0 }, "eu-4": { $: 0 }, "us-1": { $: 0 }, "us-2": { $: 0 }, "us-3": { $: 0 }, "us-4": { $: 0 } }, onfabrica: { $: 0 }, "fastly-edge": { $: 0 }, "fastly-terrarium": { $: 0 }, "fastvps-server": { $: 0 }, mydobiss: { $: 0 }, firebaseapp: { $: 0 }, fldrv: { $: 0 }, forgeblocks: { $: 0 }, framercanvas: { $: 0 }, "freebox-os": { $: 0 }, freeboxos: { $: 0 }, freemyip: { $: 0 }, aliases121: { $: 0 }, gentapps: { $: 0 }, gentlentapis: { $: 0 }, githubusercontent: { $: 0 }, "0emm": { "*": { $: 0 } }, appspot: { $: 0, r: { "*": { $: 0 } } }, blogspot: { $: 0 }, codespot: { $: 0 }, googleapis: { $: 0 }, googlecode: { $: 0 }, pagespeedmobilizer: { $: 0 }, withgoogle: { $: 0 }, withyoutube: { $: 0 }, grayjayleagues: { $: 0 }, hatenablog: { $: 0 }, hatenadiary: { $: 0 }, herokuapp: { $: 0 }, gr: { $: 0 }, smushcdn: { $: 0 }, wphostedmail: { $: 0 }, wpmucdn: { $: 0 }, pixolino: { $: 0 }, "apps-1and1": { $: 0 }, "live-website": { $: 0 }, "webspace-host": { $: 0 }, dopaas: { $: 0 }, "hosted-by-previder": { paas: { $: 0 } }, hosteur: { "rag-cloud": { $: 0 }, "rag-cloud-ch": { $: 0 } }, "ik-server": { jcloud: { $: 0 }, "jcloud-ver-jpc": { $: 0 } }, jelastic: { demo: { $: 0 } }, massivegrid: { paas: { $: 0 } }, wafaicloud: { jed: { $: 0 }, ryd: { $: 0 } }, webadorsite: { $: 0 }, joyent: { cns: { "*": { $: 0 } } }, lpusercontent: { $: 0 }, linode: { members: { $: 0 }, nodebalancer: { "*": { $: 0 } } }, linodeobjects: { "*": { $: 0 } }, linodeusercontent: { ip: { $: 0 } }, localtonet: { $: 0 }, lovableproject: { $: 0 }, barsycenter: { $: 0 }, barsyonline: { $: 0 }, lutrausercontent: { "*": { $: 0 } }, modelscape: { $: 0 }, mwcloudnonprod: { $: 0 }, polyspace: { $: 0 }, mazeplay: { $: 0 }, miniserver: { $: 0 }, atmeta: { $: 0 }, fbsbx: { apps: { $: 0 } }, meteorapp: { $: 0, eu: { $: 0 } }, routingthecloud: { $: 0 }, mydbserver: { $: 0 }, hostedpi: { $: 0 }, "mythic-beasts": { caracal: { $: 0 }, customer: { $: 0 }, fentiger: { $: 0 }, lynx: { $: 0 }, ocelot: { $: 0 }, oncilla: { $: 0 }, onza: { $: 0 }, sphinx: { $: 0 }, vs: { $: 0 }, x: { $: 0 }, yali: { $: 0 } }, nospamproxy: { cloud: { $: 0, o365: { $: 0 } } }, "4u": { $: 0 }, nfshost: { $: 0 }, "3utilities": { $: 0 }, blogsyte: { $: 0 }, ciscofreak: { $: 0 }, damnserver: { $: 0 }, ddnsking: { $: 0 }, ditchyourip: { $: 0 }, dnsiskinky: { $: 0 }, dynns: { $: 0 }, geekgalaxy: { $: 0 }, "health-carereform": { $: 0 }, homesecuritymac: { $: 0 }, homesecuritypc: { $: 0 }, myactivedirectory: { $: 0 }, mysecuritycamera: { $: 0 }, myvnc: { $: 0 }, "net-freaks": { $: 0 }, onthewifi: { $: 0 }, point2this: { $: 0 }, quicksytes: { $: 0 }, securitytactics: { $: 0 }, servebeer: { $: 0 }, servecounterstrike: { $: 0 }, serveexchange: { $: 0 }, serveftp: { $: 0 }, servegame: { $: 0 }, servehalflife: { $: 0 }, servehttp: { $: 0 }, servehumour: { $: 0 }, serveirc: { $: 0 }, servemp3: { $: 0 }, servep2p: { $: 0 }, servepics: { $: 0 }, servequake: { $: 0 }, servesarcasm: { $: 0 }, stufftoread: { $: 0 }, unusualperson: { $: 0 }, workisboring: { $: 0 }, myiphost: { $: 0 }, observableusercontent: { static: { $: 0 } }, simplesite: { $: 0 }, oaiusercontent: { "*": { $: 0 } }, orsites: { $: 0 }, operaunite: { $: 0 }, "customer-oci": { "*": { $: 0 }, oci: { "*": { $: 0 } }, ocp: { "*": { $: 0 } }, ocs: { "*": { $: 0 } } }, oraclecloudapps: { "*": { $: 0 } }, oraclegovcloudapps: { "*": { $: 0 } }, "authgear-staging": { $: 0 }, authgearapps: { $: 0 }, skygearapp: { $: 0 }, outsystemscloud: { $: 0 }, ownprovider: { $: 0 }, pgfog: { $: 0 }, pagexl: { $: 0 }, gotpantheon: { $: 0 }, paywhirl: { "*": { $: 0 } }, upsunapp: { $: 0 }, "postman-echo": { $: 0 }, prgmr: { xen: { $: 0 } }, "project-study": { dev: { $: 0 } }, pythonanywhere: { $: 0, eu: { $: 0 } }, qa2: { $: 0 }, "alpha-myqnapcloud": { $: 0 }, "dev-myqnapcloud": { $: 0 }, mycloudnas: { $: 0 }, mynascloud: { $: 0 }, myqnapcloud: { $: 0 }, qualifioapp: { $: 0 }, ladesk: { $: 0 }, qbuser: { $: 0 }, quipelements: { "*": { $: 0 } }, rackmaze: { $: 0 }, "readthedocs-hosted": { $: 0 }, rhcloud: { $: 0 }, onrender: { $: 0 }, render: { app: { $: 0 } }, "subsc-pay": { $: 0 }, "180r": { $: 0 }, dojin: { $: 0 }, sakuratan: { $: 0 }, sakuraweb: { $: 0 }, x0: { $: 0 }, code: { builder: { "*": { $: 0 } }, "dev-builder": { "*": { $: 0 } }, "stg-builder": { "*": { $: 0 } } }, salesforce: { platform: { "code-builder-stg": { test: { "001": { "*": { $: 0 } } } } } }, logoip: { $: 0 }, scrysec: { $: 0 }, "firewall-gateway": { $: 0 }, myshopblocks: { $: 0 }, myshopify: { $: 0 }, shopitsite: { $: 0 }, "1kapp": { $: 0 }, appchizi: { $: 0 }, applinzi: { $: 0 }, sinaapp: { $: 0 }, vipsinaapp: { $: 0 }, streamlitapp: { $: 0 }, "try-snowplow": { $: 0 }, "playstation-cloud": { $: 0 }, myspreadshop: { $: 0 }, "w-corp-staticblitz": { $: 0 }, "w-credentialless-staticblitz": { $: 0 }, "w-staticblitz": { $: 0 }, "stackhero-network": { $: 0 }, stdlib: { api: { $: 0 } }, strapiapp: { $: 0, media: { $: 0 } }, "streak-link": { $: 0 }, streaklinks: { $: 0 }, streakusercontent: { $: 0 }, "temp-dns": { $: 0 }, dsmynas: { $: 0 }, familyds: { $: 0 }, mytabit: { $: 0 }, taveusercontent: { $: 0 }, "tb-hosting": { site: { $: 0 } }, reservd: { $: 0 }, thingdustdata: { $: 0 }, "townnews-staging": { $: 0 }, typeform: { pro: { $: 0 } }, hk: { $: 0 }, it: { $: 0 }, "deus-canvas": { $: 0 }, vultrobjects: { "*": { $: 0 } }, wafflecell: { $: 0 }, hotelwithflight: { $: 0 }, "reserve-online": { $: 0 }, cprapid: { $: 0 }, pleskns: { $: 0 }, remotewd: { $: 0 }, wiardweb: { pages: { $: 0 } }, wixsite: { $: 0 }, wixstudio: { $: 0 }, messwithdns: { $: 0 }, "woltlab-demo": { $: 0 }, wpenginepowered: { $: 0, js: { $: 0 } }, xnbay: { $: 0, u2: { $: 0 }, "u2-local": { $: 0 } }, yolasite: { $: 0 } }, coop: { $: 0 }, cr: { $: 0, ac: { $: 0 }, co: { $: 0 }, ed: { $: 0 }, fi: { $: 0 }, go: { $: 0 }, or: { $: 0 }, sa: { $: 0 } }, cu: { $: 0, com: { $: 0 }, edu: { $: 0 }, gob: { $: 0 }, inf: { $: 0 }, nat: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, cv: { $: 0, com: { $: 0 }, edu: { $: 0 }, id: { $: 0 }, int: { $: 0 }, net: { $: 0 }, nome: { $: 0 }, org: { $: 0 }, publ: { $: 0 } }, cw: { $: 0, com: { $: 0 }, edu: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, cx: { $: 0, gov: { $: 0 }, cloudns: { $: 0 }, ath: { $: 0 }, info: { $: 0 }, assessments: { $: 0 }, calculators: { $: 0 }, funnels: { $: 0 }, paynow: { $: 0 }, quizzes: { $: 0 }, researched: { $: 0 }, tests: { $: 0 } }, cy: { $: 0, ac: { $: 0 }, biz: { $: 0 }, com: { $: 0, scaleforce: { j: { $: 0 } } }, ekloges: { $: 0 }, gov: { $: 0 }, ltd: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, org: { $: 0 }, press: { $: 0 }, pro: { $: 0 }, tm: { $: 0 } }, cz: { $: 0, contentproxy9: { rsc: { $: 0 } }, realm: { $: 0 }, e4: { $: 0 }, co: { $: 0 }, metacentrum: { cloud: { "*": { $: 0 } }, custom: { $: 0 } }, muni: { cloud: { flt: { $: 0 }, usr: { $: 0 } } } }, de: { $: 0, bplaced: { $: 0 }, square7: { $: 0 }, com: { $: 0 }, cosidns: { dyn: { $: 0 } }, dnsupdater: { $: 0 }, "dynamisches-dns": { $: 0 }, "internet-dns": { $: 0 }, "l-o-g-i-n": { $: 0 }, ddnss: { $: 0, dyn: { $: 0 }, dyndns: { $: 0 } }, "dyn-ip24": { $: 0 }, dyndns1: { $: 0 }, "home-webserver": { $: 0, dyn: { $: 0 } }, "myhome-server": { $: 0 }, dnshome: { $: 0 }, fuettertdasnetz: { $: 0 }, isteingeek: { $: 0 }, istmein: { $: 0 }, lebtimnetz: { $: 0 }, leitungsen: { $: 0 }, traeumtgerade: { $: 0 }, frusky: { "*": { $: 0 } }, goip: { $: 0 }, "xn--gnstigbestellen-zvb": { $: 0 }, "xn--gnstigliefern-wob": { $: 0 }, "hs-heilbronn": { it: { pages: { $: 0 }, "pages-research": { $: 0 } } }, "dyn-berlin": { $: 0 }, "in-berlin": { $: 0 }, "in-brb": { $: 0 }, "in-butter": { $: 0 }, "in-dsl": { $: 0 }, "in-vpn": { $: 0 }, iservschule: { $: 0 }, "mein-iserv": { $: 0 }, schuldock: { $: 0 }, schulplattform: { $: 0 }, schulserver: { $: 0 }, "test-iserv": { $: 0 }, keymachine: { $: 0 }, "git-repos": { $: 0 }, "lcube-server": { $: 0 }, "svn-repos": { $: 0 }, barsy: { $: 0 }, webspaceconfig: { $: 0 }, "123webseite": { $: 0 }, rub: { $: 0 }, "ruhr-uni-bochum": { $: 0, noc: { io: { $: 0 } } }, logoip: { $: 0 }, "firewall-gateway": { $: 0 }, "my-gateway": { $: 0 }, "my-router": { $: 0 }, spdns: { $: 0 }, my: { $: 0 }, speedpartner: { customer: { $: 0 } }, myspreadshop: { $: 0 }, "taifun-dns": { $: 0 }, "12hp": { $: 0 }, "2ix": { $: 0 }, "4lima": { $: 0 }, "lima-city": { $: 0 }, "dd-dns": { $: 0 }, "dray-dns": { $: 0 }, draydns: { $: 0 }, "dyn-vpn": { $: 0 }, dynvpn: { $: 0 }, "mein-vigor": { $: 0 }, "my-vigor": { $: 0 }, "my-wan": { $: 0 }, "syno-ds": { $: 0 }, "synology-diskstation": { $: 0 }, "synology-ds": { $: 0 }, uberspace: { "*": { $: 0 } }, "virtual-user": { $: 0 }, virtualuser: { $: 0 }, "community-pro": { $: 0 }, diskussionsbereich: { $: 0 } }, dj: { $: 0 }, dk: { $: 0, biz: { $: 0 }, co: { $: 0 }, firm: { $: 0 }, reg: { $: 0 }, store: { $: 0 }, "123hjemmeside": { $: 0 }, myspreadshop: { $: 0 } }, dm: { $: 0, co: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, do: { $: 0, art: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, gob: { $: 0 }, gov: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, org: { $: 0 }, sld: { $: 0 }, web: { $: 0 } }, dz: { $: 0, art: { $: 0 }, asso: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 }, pol: { $: 0 }, soc: { $: 0 }, tm: { $: 0 } }, ec: { $: 0, abg: { $: 0 }, adm: { $: 0 }, agron: { $: 0 }, arqt: { $: 0 }, art: { $: 0 }, bar: { $: 0 }, chef: { $: 0 }, com: { $: 0 }, cont: { $: 0 }, cpa: { $: 0 }, cue: { $: 0 }, dent: { $: 0 }, dgn: { $: 0 }, disco: { $: 0 }, doc: { $: 0 }, edu: { $: 0 }, eng: { $: 0 }, esm: { $: 0 }, fin: { $: 0 }, fot: { $: 0 }, gal: { $: 0 }, gob: { $: 0 }, gov: { $: 0 }, gye: { $: 0 }, ibr: { $: 0 }, info: { $: 0 }, k12: { $: 0 }, lat: { $: 0 }, loj: { $: 0 }, med: { $: 0 }, mil: { $: 0 }, mktg: { $: 0 }, mon: { $: 0 }, net: { $: 0 }, ntr: { $: 0 }, odont: { $: 0 }, org: { $: 0 }, pro: { $: 0 }, prof: { $: 0 }, psic: { $: 0 }, psiq: { $: 0 }, pub: { $: 0 }, rio: { $: 0 }, rrpp: { $: 0 }, sal: { $: 0 }, tech: { $: 0 }, tul: { $: 0 }, tur: { $: 0 }, uio: { $: 0 }, vet: { $: 0 }, xxx: { $: 0 }, base: { $: 0 }, official: { $: 0 } }, edu: { $: 0, rit: { "git-pages": { $: 0 } } }, ee: { $: 0, aip: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, fie: { $: 0 }, gov: { $: 0 }, lib: { $: 0 }, med: { $: 0 }, org: { $: 0 }, pri: { $: 0 }, riik: { $: 0 } }, eg: { $: 0, ac: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, eun: { $: 0 }, gov: { $: 0 }, info: { $: 0 }, me: { $: 0 }, mil: { $: 0 }, name: { $: 0 }, net: { $: 0 }, org: { $: 0 }, sci: { $: 0 }, sport: { $: 0 }, tv: { $: 0 } }, er: { "*": { $: 0 } }, es: { $: 0, com: { $: 0 }, edu: { $: 0 }, gob: { $: 0 }, nom: { $: 0 }, org: { $: 0 }, "123miweb": { $: 0 }, myspreadshop: { $: 0 } }, et: { $: 0, biz: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, info: { $: 0 }, name: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, eu: { $: 0, airkitapps: { $: 0 }, cloudns: { $: 0 }, dogado: { jelastic: { $: 0 } }, barsy: { $: 0 }, spdns: { $: 0 }, nxa: { "*": { $: 0 } }, transurl: { "*": { $: 0 } }, diskstation: { $: 0 } }, fi: { $: 0, aland: { $: 0 }, dy: { $: 0 }, "xn--hkkinen-5wa": { $: 0 }, iki: { $: 0 }, cloudplatform: { fi: { $: 0 } }, datacenter: { demo: { $: 0 }, paas: { $: 0 } }, kapsi: { $: 0 }, "123kotisivu": { $: 0 }, myspreadshop: { $: 0 } }, fj: { $: 0, ac: { $: 0 }, biz: { $: 0 }, com: { $: 0 }, gov: { $: 0 }, info: { $: 0 }, mil: { $: 0 }, name: { $: 0 }, net: { $: 0 }, org: { $: 0 }, pro: { $: 0 } }, fk: { "*": { $: 0 } }, fm: { $: 0, com: { $: 0 }, edu: { $: 0 }, net: { $: 0 }, org: { $: 0 }, radio: { $: 0 }, user: { "*": { $: 0 } } }, fo: { $: 0 }, fr: { $: 0, asso: { $: 0 }, com: { $: 0 }, gouv: { $: 0 }, nom: { $: 0 }, prd: { $: 0 }, tm: { $: 0 }, avoues: { $: 0 }, cci: { $: 0 }, greta: { $: 0 }, "huissier-justice": { $: 0 }, "en-root": { $: 0 }, "fbx-os": { $: 0 }, fbxos: { $: 0 }, "freebox-os": { $: 0 }, freeboxos: { $: 0 }, goupile: { $: 0 }, "123siteweb": { $: 0 }, "on-web": { $: 0 }, "chirurgiens-dentistes-en-france": { $: 0 }, dedibox: { $: 0 }, aeroport: { $: 0 }, avocat: { $: 0 }, chambagri: { $: 0 }, "chirurgiens-dentistes": { $: 0 }, "experts-comptables": { $: 0 }, medecin: { $: 0 }, notaires: { $: 0 }, pharmacien: { $: 0 }, port: { $: 0 }, veterinaire: { $: 0 }, myspreadshop: { $: 0 }, ynh: { $: 0 } }, ga: { $: 0 }, gb: { $: 0 }, gd: { $: 0, edu: { $: 0 }, gov: { $: 0 } }, ge: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 }, pvt: { $: 0 }, school: { $: 0 } }, gf: { $: 0 }, gg: { $: 0, co: { $: 0 }, net: { $: 0 }, org: { $: 0 }, botdash: { $: 0 }, kaas: { $: 0 }, stackit: { $: 0 }, panel: { $: 0, daemon: { $: 0 } } }, gh: { $: 0, biz: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, gi: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, ltd: { $: 0 }, mod: { $: 0 }, org: { $: 0 } }, gl: { $: 0, co: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, net: { $: 0 }, org: { $: 0 }, biz: { $: 0 } }, gm: { $: 0 }, gn: { $: 0, ac: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, gov: { $: 0 }, gp: { $: 0, asso: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, mobi: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, gq: { $: 0 }, gr: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 }, barsy: { $: 0 }, simplesite: { $: 0 } }, gs: { $: 0 }, gt: { $: 0, com: { $: 0 }, edu: { $: 0 }, gob: { $: 0 }, ind: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, gu: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, guam: { $: 0 }, info: { $: 0 }, net: { $: 0 }, org: { $: 0 }, web: { $: 0 } }, gw: { $: 0, nx: { $: 0 } }, gy: { $: 0, co: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, hk: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, idv: { $: 0 }, net: { $: 0 }, org: { $: 0 }, "xn--ciqpn": { $: 0 }, "xn--gmqw5a": { $: 0 }, "xn--55qx5d": { $: 0 }, "xn--mxtq1m": { $: 0 }, "xn--lcvr32d": { $: 0 }, "xn--wcvs22d": { $: 0 }, "xn--gmq050i": { $: 0 }, "xn--uc0atv": { $: 0 }, "xn--uc0ay4a": { $: 0 }, "xn--od0alg": { $: 0 }, "xn--zf0avx": { $: 0 }, "xn--mk0axi": { $: 0 }, "xn--tn0ag": { $: 0 }, "xn--od0aq3b": { $: 0 }, "xn--io0a7i": { $: 0 }, inc: { $: 0 }, ltd: { $: 0 } }, hm: { $: 0 }, hn: { $: 0, com: { $: 0 }, edu: { $: 0 }, gob: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, hr: { $: 0, com: { $: 0 }, from: { $: 0 }, iz: { $: 0 }, name: { $: 0 }, brendly: { shop: { $: 0 } } }, ht: { $: 0, adult: { $: 0 }, art: { $: 0 }, asso: { $: 0 }, com: { $: 0 }, coop: { $: 0 }, edu: { $: 0 }, firm: { $: 0 }, gouv: { $: 0 }, info: { $: 0 }, med: { $: 0 }, net: { $: 0 }, org: { $: 0 }, perso: { $: 0 }, pol: { $: 0 }, pro: { $: 0 }, rel: { $: 0 }, shop: { $: 0 }, rt: { $: 0 } }, hu: { "2000": { $: 0 }, $: 0, agrar: { $: 0 }, bolt: { $: 0 }, casino: { $: 0 }, city: { $: 0 }, co: { $: 0 }, erotica: { $: 0 }, erotika: { $: 0 }, film: { $: 0 }, forum: { $: 0 }, games: { $: 0 }, hotel: { $: 0 }, info: { $: 0 }, ingatlan: { $: 0 }, jogasz: { $: 0 }, konyvelo: { $: 0 }, lakas: { $: 0 }, media: { $: 0 }, news: { $: 0 }, org: { $: 0 }, priv: { $: 0 }, reklam: { $: 0 }, sex: { $: 0 }, shop: { $: 0 }, sport: { $: 0 }, suli: { $: 0 }, szex: { $: 0 }, tm: { $: 0 }, tozsde: { $: 0 }, utazas: { $: 0 }, video: { $: 0 } }, id: { $: 0, ac: { $: 0 }, biz: { $: 0 }, co: { $: 0 }, desa: { $: 0 }, go: { $: 0 }, kop: { $: 0 }, mil: { $: 0 }, my: { $: 0 }, net: { $: 0 }, or: { $: 0 }, ponpes: { $: 0 }, sch: { $: 0 }, web: { $: 0 }, zone: { $: 0 } }, ie: { $: 0, gov: { $: 0 }, myspreadshop: { $: 0 } }, il: { $: 0, ac: { $: 0 }, co: { $: 0, ravpage: { $: 0 }, mytabit: { $: 0 }, tabitorder: { $: 0 } }, gov: { $: 0 }, idf: { $: 0 }, k12: { $: 0 }, muni: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, "xn--4dbrk0ce": { $: 0, "xn--4dbgdty6c": { $: 0 }, "xn--5dbhl8d": { $: 0 }, "xn--8dbq2a": { $: 0 }, "xn--hebda8b": { $: 0 } }, im: { $: 0, ac: { $: 0 }, co: { $: 0, ltd: { $: 0 }, plc: { $: 0 } }, com: { $: 0 }, net: { $: 0 }, org: { $: 0 }, tt: { $: 0 }, tv: { $: 0 } }, in: { $: 0, "5g": { $: 0 }, "6g": { $: 0 }, ac: { $: 0 }, ai: { $: 0 }, am: { $: 0 }, bihar: { $: 0 }, biz: { $: 0 }, business: { $: 0 }, ca: { $: 0 }, cn: { $: 0 }, co: { $: 0 }, com: { $: 0 }, coop: { $: 0 }, cs: { $: 0 }, delhi: { $: 0 }, dr: { $: 0 }, edu: { $: 0 }, er: { $: 0 }, firm: { $: 0 }, gen: { $: 0 }, gov: { $: 0 }, gujarat: { $: 0 }, ind: { $: 0 }, info: { $: 0 }, int: { $: 0 }, internet: { $: 0 }, io: { $: 0 }, me: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, nic: { $: 0 }, org: { $: 0 }, pg: { $: 0 }, post: { $: 0 }, pro: { $: 0 }, res: { $: 0 }, travel: { $: 0 }, tv: { $: 0 }, uk: { $: 0 }, up: { $: 0 }, us: { $: 0 }, cloudns: { $: 0 }, barsy: { $: 0 }, web: { $: 0 }, supabase: { $: 0 } }, info: { $: 0, cloudns: { $: 0 }, "dynamic-dns": { $: 0 }, "barrel-of-knowledge": { $: 0 }, "barrell-of-knowledge": { $: 0 }, dyndns: { $: 0 }, "for-our": { $: 0 }, "groks-the": { $: 0 }, "groks-this": { $: 0 }, "here-for-more": { $: 0 }, knowsitall: { $: 0 }, selfip: { $: 0 }, webhop: { $: 0 }, barsy: { $: 0 }, mayfirst: { $: 0 }, mittwald: { $: 0 }, mittwaldserver: { $: 0 }, typo3server: { $: 0 }, dvrcam: { $: 0 }, ilovecollege: { $: 0 }, "no-ip": { $: 0 }, forumz: { $: 0 }, nsupdate: { $: 0 }, dnsupdate: { $: 0 }, "v-info": { $: 0 } }, int: { $: 0, eu: { $: 0 } }, io: { "2038": { $: 0 }, $: 0, co: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, nom: { $: 0 }, org: { $: 0 }, "on-acorn": { "*": { $: 0 } }, myaddr: { $: 0 }, apigee: { $: 0 }, "b-data": { $: 0 }, beagleboard: { $: 0 }, bitbucket: { $: 0 }, bluebite: { $: 0 }, boxfuse: { $: 0 }, brave: { $: 0, s: { "*": { $: 0 } } }, browsersafetymark: { $: 0 }, bubble: { cdn: { $: 0 } }, bubbleapps: { $: 0 }, bigv: { uk0: { $: 0 } }, cleverapps: { $: 0 }, cloudbeesusercontent: { $: 0 }, dappnode: { dyndns: { $: 0 } }, darklang: { $: 0 }, definima: { $: 0 }, dedyn: { $: 0 }, "icp-api": { $: 0 }, icp0: { $: 0, raw: { "*": { $: 0 } } }, icp1: { $: 0, raw: { "*": { $: 0 } } }, qzz: { $: 0 }, "fh-muenster": { $: 0 }, shw: { $: 0 }, forgerock: { id: { $: 0 } }, github: { $: 0 }, gitlab: { $: 0 }, lolipop: { $: 0 }, "hasura-app": { $: 0 }, hostyhosting: { $: 0 }, hypernode: { $: 0 }, moonscale: { "*": { $: 0 } }, beebyte: { paas: { $: 0 } }, beebyteapp: { sekd1: { $: 0 } }, jele: { $: 0 }, webthings: { $: 0 }, loginline: { $: 0 }, barsy: { $: 0 }, azurecontainer: { "*": { $: 0 } }, ngrok: { $: 0, ap: { $: 0 }, au: { $: 0 }, eu: { $: 0 }, in: { $: 0 }, jp: { $: 0 }, sa: { $: 0 }, us: { $: 0 } }, nodeart: { stage: { $: 0 } }, pantheonsite: { $: 0 }, pstmn: { $: 0, mock: { $: 0 } }, protonet: { $: 0 }, qcx: { $: 0, sys: { "*": { $: 0 } } }, qoto: { $: 0 }, vaporcloud: { $: 0 }, myrdbx: { $: 0 }, "rb-hosting": { site: { $: 0 } }, "on-k3s": { "*": { $: 0 } }, "on-rio": { "*": { $: 0 } }, readthedocs: { $: 0 }, resindevice: { $: 0 }, resinstaging: { devices: { $: 0 } }, hzc: { $: 0 }, sandcats: { $: 0 }, scrypted: { client: { $: 0 } }, "mo-siemens": { $: 0 }, lair: { apps: { $: 0 } }, stolos: { "*": { $: 0 } }, musician: { $: 0 }, utwente: { $: 0 }, edugit: { $: 0 }, telebit: { $: 0 }, thingdust: { dev: { cust: { $: 0 }, reservd: { $: 0 } }, disrec: { cust: { $: 0 }, reservd: { $: 0 } }, prod: { cust: { $: 0 } }, testing: { cust: { $: 0 }, reservd: { $: 0 } } }, tickets: { $: 0 }, webflow: { $: 0 }, webflowtest: { $: 0 }, editorx: { $: 0 }, wixstudio: { $: 0 }, basicserver: { $: 0 }, virtualserver: { $: 0 } }, iq: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, ir: { $: 0, ac: { $: 0 }, co: { $: 0 }, gov: { $: 0 }, id: { $: 0 }, net: { $: 0 }, org: { $: 0 }, sch: { $: 0 }, "xn--mgba3a4f16a": { $: 0 }, "xn--mgba3a4fra": { $: 0 }, arvanedge: { $: 0 }, vistablog: { $: 0 } }, is: { $: 0 }, it: { $: 0, edu: { $: 0 }, gov: { $: 0 }, abr: { $: 0 }, abruzzo: { $: 0 }, "aosta-valley": { $: 0 }, aostavalley: { $: 0 }, bas: { $: 0 }, basilicata: { $: 0 }, cal: { $: 0 }, calabria: { $: 0 }, cam: { $: 0 }, campania: { $: 0 }, "emilia-romagna": { $: 0 }, emiliaromagna: { $: 0 }, emr: { $: 0 }, "friuli-v-giulia": { $: 0 }, "friuli-ve-giulia": { $: 0 }, "friuli-vegiulia": { $: 0 }, "friuli-venezia-giulia": { $: 0 }, "friuli-veneziagiulia": { $: 0 }, "friuli-vgiulia": { $: 0 }, "friuliv-giulia": { $: 0 }, "friulive-giulia": { $: 0 }, friulivegiulia: { $: 0 }, "friulivenezia-giulia": { $: 0 }, friuliveneziagiulia: { $: 0 }, friulivgiulia: { $: 0 }, fvg: { $: 0 }, laz: { $: 0 }, lazio: { $: 0 }, lig: { $: 0 }, liguria: { $: 0 }, lom: { $: 0 }, lombardia: { $: 0 }, lombardy: { $: 0 }, lucania: { $: 0 }, mar: { $: 0 }, marche: { $: 0 }, mol: { $: 0 }, molise: { $: 0 }, piedmont: { $: 0 }, piemonte: { $: 0 }, pmn: { $: 0 }, pug: { $: 0 }, puglia: { $: 0 }, sar: { $: 0 }, sardegna: { $: 0 }, sardinia: { $: 0 }, sic: { $: 0 }, sicilia: { $: 0 }, sicily: { $: 0 }, taa: { $: 0 }, tos: { $: 0 }, toscana: { $: 0 }, "trentin-sud-tirol": { $: 0 }, "xn--trentin-sd-tirol-rzb": { $: 0 }, "trentin-sudtirol": { $: 0 }, "xn--trentin-sdtirol-7vb": { $: 0 }, "trentin-sued-tirol": { $: 0 }, "trentin-suedtirol": { $: 0 }, trentino: { $: 0 }, "trentino-a-adige": { $: 0 }, "trentino-aadige": { $: 0 }, "trentino-alto-adige": { $: 0 }, "trentino-altoadige": { $: 0 }, "trentino-s-tirol": { $: 0 }, "trentino-stirol": { $: 0 }, "trentino-sud-tirol": { $: 0 }, "xn--trentino-sd-tirol-c3b": { $: 0 }, "trentino-sudtirol": { $: 0 }, "xn--trentino-sdtirol-szb": { $: 0 }, "trentino-sued-tirol": { $: 0 }, "trentino-suedtirol": { $: 0 }, "trentinoa-adige": { $: 0 }, trentinoaadige: { $: 0 }, "trentinoalto-adige": { $: 0 }, trentinoaltoadige: { $: 0 }, "trentinos-tirol": { $: 0 }, trentinostirol: { $: 0 }, "trentinosud-tirol": { $: 0 }, "xn--trentinosd-tirol-rzb": { $: 0 }, trentinosudtirol: { $: 0 }, "xn--trentinosdtirol-7vb": { $: 0 }, "trentinosued-tirol": { $: 0 }, trentinosuedtirol: { $: 0 }, "trentinsud-tirol": { $: 0 }, "xn--trentinsd-tirol-6vb": { $: 0 }, trentinsudtirol: { $: 0 }, "xn--trentinsdtirol-nsb": { $: 0 }, "trentinsued-tirol": { $: 0 }, trentinsuedtirol: { $: 0 }, tuscany: { $: 0 }, umb: { $: 0 }, umbria: { $: 0 }, "val-d-aosta": { $: 0 }, "val-daosta": { $: 0 }, "vald-aosta": { $: 0 }, valdaosta: { $: 0 }, "valle-aosta": { $: 0 }, "valle-d-aosta": { $: 0 }, "valle-daosta": { $: 0 }, valleaosta: { $: 0 }, "valled-aosta": { $: 0 }, valledaosta: { $: 0 }, "vallee-aoste": { $: 0 }, "xn--valle-aoste-ebb": { $: 0 }, "vallee-d-aoste": { $: 0 }, "xn--valle-d-aoste-ehb": { $: 0 }, valleeaoste: { $: 0 }, "xn--valleaoste-e7a": { $: 0 }, valleedaoste: { $: 0 }, "xn--valledaoste-ebb": { $: 0 }, vao: { $: 0 }, vda: { $: 0 }, ven: { $: 0 }, veneto: { $: 0 }, ag: { $: 0 }, agrigento: { $: 0 }, al: { $: 0 }, alessandria: { $: 0 }, "alto-adige": { $: 0 }, altoadige: { $: 0 }, an: { $: 0 }, ancona: { $: 0 }, "andria-barletta-trani": { $: 0 }, "andria-trani-barletta": { $: 0 }, andriabarlettatrani: { $: 0 }, andriatranibarletta: { $: 0 }, ao: { $: 0 }, aosta: { $: 0 }, aoste: { $: 0 }, ap: { $: 0 }, aq: { $: 0 }, aquila: { $: 0 }, ar: { $: 0 }, arezzo: { $: 0 }, "ascoli-piceno": { $: 0 }, ascolipiceno: { $: 0 }, asti: { $: 0 }, at: { $: 0 }, av: { $: 0 }, avellino: { $: 0 }, ba: { $: 0 }, balsan: { $: 0 }, "balsan-sudtirol": { $: 0 }, "xn--balsan-sdtirol-nsb": { $: 0 }, "balsan-suedtirol": { $: 0 }, bari: { $: 0 }, "barletta-trani-andria": { $: 0 }, barlettatraniandria: { $: 0 }, belluno: { $: 0 }, benevento: { $: 0 }, bergamo: { $: 0 }, bg: { $: 0 }, bi: { $: 0 }, biella: { $: 0 }, bl: { $: 0 }, bn: { $: 0 }, bo: { $: 0 }, bologna: { $: 0 }, bolzano: { $: 0 }, "bolzano-altoadige": { $: 0 }, bozen: { $: 0 }, "bozen-sudtirol": { $: 0 }, "xn--bozen-sdtirol-2ob": { $: 0 }, "bozen-suedtirol": { $: 0 }, br: { $: 0 }, brescia: { $: 0 }, brindisi: { $: 0 }, bs: { $: 0 }, bt: { $: 0 }, bulsan: { $: 0 }, "bulsan-sudtirol": { $: 0 }, "xn--bulsan-sdtirol-nsb": { $: 0 }, "bulsan-suedtirol": { $: 0 }, bz: { $: 0 }, ca: { $: 0 }, cagliari: { $: 0 }, caltanissetta: { $: 0 }, "campidano-medio": { $: 0 }, campidanomedio: { $: 0 }, campobasso: { $: 0 }, "carbonia-iglesias": { $: 0 }, carboniaiglesias: { $: 0 }, "carrara-massa": { $: 0 }, carraramassa: { $: 0 }, caserta: { $: 0 }, catania: { $: 0 }, catanzaro: { $: 0 }, cb: { $: 0 }, ce: { $: 0 }, "cesena-forli": { $: 0 }, "xn--cesena-forl-mcb": { $: 0 }, cesenaforli: { $: 0 }, "xn--cesenaforl-i8a": { $: 0 }, ch: { $: 0 }, chieti: { $: 0 }, ci: { $: 0 }, cl: { $: 0 }, cn: { $: 0 }, co: { $: 0 }, como: { $: 0 }, cosenza: { $: 0 }, cr: { $: 0 }, cremona: { $: 0 }, crotone: { $: 0 }, cs: { $: 0 }, ct: { $: 0 }, cuneo: { $: 0 }, cz: { $: 0 }, "dell-ogliastra": { $: 0 }, dellogliastra: { $: 0 }, en: { $: 0 }, enna: { $: 0 }, fc: { $: 0 }, fe: { $: 0 }, fermo: { $: 0 }, ferrara: { $: 0 }, fg: { $: 0 }, fi: { $: 0 }, firenze: { $: 0 }, florence: { $: 0 }, fm: { $: 0 }, foggia: { $: 0 }, "forli-cesena": { $: 0 }, "xn--forl-cesena-fcb": { $: 0 }, forlicesena: { $: 0 }, "xn--forlcesena-c8a": { $: 0 }, fr: { $: 0 }, frosinone: { $: 0 }, ge: { $: 0 }, genoa: { $: 0 }, genova: { $: 0 }, go: { $: 0 }, gorizia: { $: 0 }, gr: { $: 0 }, grosseto: { $: 0 }, "iglesias-carbonia": { $: 0 }, iglesiascarbonia: { $: 0 }, im: { $: 0 }, imperia: { $: 0 }, is: { $: 0 }, isernia: { $: 0 }, kr: { $: 0 }, "la-spezia": { $: 0 }, laquila: { $: 0 }, laspezia: { $: 0 }, latina: { $: 0 }, lc: { $: 0 }, le: { $: 0 }, lecce: { $: 0 }, lecco: { $: 0 }, li: { $: 0 }, livorno: { $: 0 }, lo: { $: 0 }, lodi: { $: 0 }, lt: { $: 0 }, lu: { $: 0 }, lucca: { $: 0 }, macerata: { $: 0 }, mantova: { $: 0 }, "massa-carrara": { $: 0 }, massacarrara: { $: 0 }, matera: { $: 0 }, mb: { $: 0 }, mc: { $: 0 }, me: { $: 0 }, "medio-campidano": { $: 0 }, mediocampidano: { $: 0 }, messina: { $: 0 }, mi: { $: 0 }, milan: { $: 0 }, milano: { $: 0 }, mn: { $: 0 }, mo: { $: 0 }, modena: { $: 0 }, monza: { $: 0 }, "monza-brianza": { $: 0 }, "monza-e-della-brianza": { $: 0 }, monzabrianza: { $: 0 }, monzaebrianza: { $: 0 }, monzaedellabrianza: { $: 0 }, ms: { $: 0 }, mt: { $: 0 }, na: { $: 0 }, naples: { $: 0 }, napoli: { $: 0 }, no: { $: 0 }, novara: { $: 0 }, nu: { $: 0 }, nuoro: { $: 0 }, og: { $: 0 }, ogliastra: { $: 0 }, "olbia-tempio": { $: 0 }, olbiatempio: { $: 0 }, or: { $: 0 }, oristano: { $: 0 }, ot: { $: 0 }, pa: { $: 0 }, padova: { $: 0 }, padua: { $: 0 }, palermo: { $: 0 }, parma: { $: 0 }, pavia: { $: 0 }, pc: { $: 0 }, pd: { $: 0 }, pe: { $: 0 }, perugia: { $: 0 }, "pesaro-urbino": { $: 0 }, pesarourbino: { $: 0 }, pescara: { $: 0 }, pg: { $: 0 }, pi: { $: 0 }, piacenza: { $: 0 }, pisa: { $: 0 }, pistoia: { $: 0 }, pn: { $: 0 }, po: { $: 0 }, pordenone: { $: 0 }, potenza: { $: 0 }, pr: { $: 0 }, prato: { $: 0 }, pt: { $: 0 }, pu: { $: 0 }, pv: { $: 0 }, pz: { $: 0 }, ra: { $: 0 }, ragusa: { $: 0 }, ravenna: { $: 0 }, rc: { $: 0 }, re: { $: 0 }, "reggio-calabria": { $: 0 }, "reggio-emilia": { $: 0 }, reggiocalabria: { $: 0 }, reggioemilia: { $: 0 }, rg: { $: 0 }, ri: { $: 0 }, rieti: { $: 0 }, rimini: { $: 0 }, rm: { $: 0 }, rn: { $: 0 }, ro: { $: 0 }, roma: { $: 0 }, rome: { $: 0 }, rovigo: { $: 0 }, sa: { $: 0 }, salerno: { $: 0 }, sassari: { $: 0 }, savona: { $: 0 }, si: { $: 0 }, siena: { $: 0 }, siracusa: { $: 0 }, so: { $: 0 }, sondrio: { $: 0 }, sp: { $: 0 }, sr: { $: 0 }, ss: { $: 0 }, "xn--sdtirol-n2a": { $: 0 }, suedtirol: { $: 0 }, sv: { $: 0 }, ta: { $: 0 }, taranto: { $: 0 }, te: { $: 0 }, "tempio-olbia": { $: 0 }, tempioolbia: { $: 0 }, teramo: { $: 0 }, terni: { $: 0 }, tn: { $: 0 }, to: { $: 0 }, torino: { $: 0 }, tp: { $: 0 }, tr: { $: 0 }, "trani-andria-barletta": { $: 0 }, "trani-barletta-andria": { $: 0 }, traniandriabarletta: { $: 0 }, tranibarlettaandria: { $: 0 }, trapani: { $: 0 }, trento: { $: 0 }, treviso: { $: 0 }, trieste: { $: 0 }, ts: { $: 0 }, turin: { $: 0 }, tv: { $: 0 }, ud: { $: 0 }, udine: { $: 0 }, "urbino-pesaro": { $: 0 }, urbinopesaro: { $: 0 }, va: { $: 0 }, varese: { $: 0 }, vb: { $: 0 }, vc: { $: 0 }, ve: { $: 0 }, venezia: { $: 0 }, venice: { $: 0 }, verbania: { $: 0 }, vercelli: { $: 0 }, verona: { $: 0 }, vi: { $: 0 }, "vibo-valentia": { $: 0 }, vibovalentia: { $: 0 }, vicenza: { $: 0 }, viterbo: { $: 0 }, vr: { $: 0 }, vs: { $: 0 }, vt: { $: 0 }, vv: { $: 0 }, "12chars": { $: 0 }, ibxos: { $: 0 }, iliadboxos: { $: 0 }, neen: { jc: { $: 0 } }, "123homepage": { $: 0 }, "16-b": { $: 0 }, "32-b": { $: 0 }, "64-b": { $: 0 }, myspreadshop: { $: 0 }, syncloud: { $: 0 } }, je: { $: 0, co: { $: 0 }, net: { $: 0 }, org: { $: 0 }, of: { $: 0 } }, jm: { "*": { $: 0 } }, jo: { $: 0, agri: { $: 0 }, ai: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, eng: { $: 0 }, fm: { $: 0 }, gov: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, org: { $: 0 }, per: { $: 0 }, phd: { $: 0 }, sch: { $: 0 }, tv: { $: 0 } }, jobs: { $: 0 }, jp: { $: 0, ac: { $: 0 }, ad: { $: 0 }, co: { $: 0 }, ed: { $: 0 }, go: { $: 0 }, gr: { $: 0 }, lg: { $: 0 }, ne: { $: 0, aseinet: { user: { $: 0 } }, gehirn: { $: 0 }, ivory: { $: 0 }, "mail-box": { $: 0 }, mints: { $: 0 }, mokuren: { $: 0 }, opal: { $: 0 }, sakura: { $: 0 }, sumomo: { $: 0 }, topaz: { $: 0 } }, or: { $: 0 }, aichi: { $: 0, aisai: { $: 0 }, ama: { $: 0 }, anjo: { $: 0 }, asuke: { $: 0 }, chiryu: { $: 0 }, chita: { $: 0 }, fuso: { $: 0 }, gamagori: { $: 0 }, handa: { $: 0 }, hazu: { $: 0 }, hekinan: { $: 0 }, higashiura: { $: 0 }, ichinomiya: { $: 0 }, inazawa: { $: 0 }, inuyama: { $: 0 }, isshiki: { $: 0 }, iwakura: { $: 0 }, kanie: { $: 0 }, kariya: { $: 0 }, kasugai: { $: 0 }, kira: { $: 0 }, kiyosu: { $: 0 }, komaki: { $: 0 }, konan: { $: 0 }, kota: { $: 0 }, mihama: { $: 0 }, miyoshi: { $: 0 }, nishio: { $: 0 }, nisshin: { $: 0 }, obu: { $: 0 }, oguchi: { $: 0 }, oharu: { $: 0 }, okazaki: { $: 0 }, owariasahi: { $: 0 }, seto: { $: 0 }, shikatsu: { $: 0 }, shinshiro: { $: 0 }, shitara: { $: 0 }, tahara: { $: 0 }, takahama: { $: 0 }, tobishima: { $: 0 }, toei: { $: 0 }, togo: { $: 0 }, tokai: { $: 0 }, tokoname: { $: 0 }, toyoake: { $: 0 }, toyohashi: { $: 0 }, toyokawa: { $: 0 }, toyone: { $: 0 }, toyota: { $: 0 }, tsushima: { $: 0 }, yatomi: { $: 0 } }, akita: { $: 0, akita: { $: 0 }, daisen: { $: 0 }, fujisato: { $: 0 }, gojome: { $: 0 }, hachirogata: { $: 0 }, happou: { $: 0 }, higashinaruse: { $: 0 }, honjo: { $: 0 }, honjyo: { $: 0 }, ikawa: { $: 0 }, kamikoani: { $: 0 }, kamioka: { $: 0 }, katagami: { $: 0 }, kazuno: { $: 0 }, kitaakita: { $: 0 }, kosaka: { $: 0 }, kyowa: { $: 0 }, misato: { $: 0 }, mitane: { $: 0 }, moriyoshi: { $: 0 }, nikaho: { $: 0 }, noshiro: { $: 0 }, odate: { $: 0 }, oga: { $: 0 }, ogata: { $: 0 }, semboku: { $: 0 }, yokote: { $: 0 }, yurihonjo: { $: 0 } }, aomori: { $: 0, aomori: { $: 0 }, gonohe: { $: 0 }, hachinohe: { $: 0 }, hashikami: { $: 0 }, hiranai: { $: 0 }, hirosaki: { $: 0 }, itayanagi: { $: 0 }, kuroishi: { $: 0 }, misawa: { $: 0 }, mutsu: { $: 0 }, nakadomari: { $: 0 }, noheji: { $: 0 }, oirase: { $: 0 }, owani: { $: 0 }, rokunohe: { $: 0 }, sannohe: { $: 0 }, shichinohe: { $: 0 }, shingo: { $: 0 }, takko: { $: 0 }, towada: { $: 0 }, tsugaru: { $: 0 }, tsuruta: { $: 0 } }, chiba: { $: 0, abiko: { $: 0 }, asahi: { $: 0 }, chonan: { $: 0 }, chosei: { $: 0 }, choshi: { $: 0 }, chuo: { $: 0 }, funabashi: { $: 0 }, futtsu: { $: 0 }, hanamigawa: { $: 0 }, ichihara: { $: 0 }, ichikawa: { $: 0 }, ichinomiya: { $: 0 }, inzai: { $: 0 }, isumi: { $: 0 }, kamagaya: { $: 0 }, kamogawa: { $: 0 }, kashiwa: { $: 0 }, katori: { $: 0 }, katsuura: { $: 0 }, kimitsu: { $: 0 }, kisarazu: { $: 0 }, kozaki: { $: 0 }, kujukuri: { $: 0 }, kyonan: { $: 0 }, matsudo: { $: 0 }, midori: { $: 0 }, mihama: { $: 0 }, minamiboso: { $: 0 }, mobara: { $: 0 }, mutsuzawa: { $: 0 }, nagara: { $: 0 }, nagareyama: { $: 0 }, narashino: { $: 0 }, narita: { $: 0 }, noda: { $: 0 }, oamishirasato: { $: 0 }, omigawa: { $: 0 }, onjuku: { $: 0 }, otaki: { $: 0 }, sakae: { $: 0 }, sakura: { $: 0 }, shimofusa: { $: 0 }, shirako: { $: 0 }, shiroi: { $: 0 }, shisui: { $: 0 }, sodegaura: { $: 0 }, sosa: { $: 0 }, tako: { $: 0 }, tateyama: { $: 0 }, togane: { $: 0 }, tohnosho: { $: 0 }, tomisato: { $: 0 }, urayasu: { $: 0 }, yachimata: { $: 0 }, yachiyo: { $: 0 }, yokaichiba: { $: 0 }, yokoshibahikari: { $: 0 }, yotsukaido: { $: 0 } }, ehime: { $: 0, ainan: { $: 0 }, honai: { $: 0 }, ikata: { $: 0 }, imabari: { $: 0 }, iyo: { $: 0 }, kamijima: { $: 0 }, kihoku: { $: 0 }, kumakogen: { $: 0 }, masaki: { $: 0 }, matsuno: { $: 0 }, matsuyama: { $: 0 }, namikata: { $: 0 }, niihama: { $: 0 }, ozu: { $: 0 }, saijo: { $: 0 }, seiyo: { $: 0 }, shikokuchuo: { $: 0 }, tobe: { $: 0 }, toon: { $: 0 }, uchiko: { $: 0 }, uwajima: { $: 0 }, yawatahama: { $: 0 } }, fukui: { $: 0, echizen: { $: 0 }, eiheiji: { $: 0 }, fukui: { $: 0 }, ikeda: { $: 0 }, katsuyama: { $: 0 }, mihama: { $: 0 }, minamiechizen: { $: 0 }, obama: { $: 0 }, ohi: { $: 0 }, ono: { $: 0 }, sabae: { $: 0 }, sakai: { $: 0 }, takahama: { $: 0 }, tsuruga: { $: 0 }, wakasa: { $: 0 } }, fukuoka: { $: 0, ashiya: { $: 0 }, buzen: { $: 0 }, chikugo: { $: 0 }, chikuho: { $: 0 }, chikujo: { $: 0 }, chikushino: { $: 0 }, chikuzen: { $: 0 }, chuo: { $: 0 }, dazaifu: { $: 0 }, fukuchi: { $: 0 }, hakata: { $: 0 }, higashi: { $: 0 }, hirokawa: { $: 0 }, hisayama: { $: 0 }, iizuka: { $: 0 }, inatsuki: { $: 0 }, kaho: { $: 0 }, kasuga: { $: 0 }, kasuya: { $: 0 }, kawara: { $: 0 }, keisen: { $: 0 }, koga: { $: 0 }, kurate: { $: 0 }, kurogi: { $: 0 }, kurume: { $: 0 }, minami: { $: 0 }, miyako: { $: 0 }, miyama: { $: 0 }, miyawaka: { $: 0 }, mizumaki: { $: 0 }, munakata: { $: 0 }, nakagawa: { $: 0 }, nakama: { $: 0 }, nishi: { $: 0 }, nogata: { $: 0 }, ogori: { $: 0 }, okagaki: { $: 0 }, okawa: { $: 0 }, oki: { $: 0 }, omuta: { $: 0 }, onga: { $: 0 }, onojo: { $: 0 }, oto: { $: 0 }, saigawa: { $: 0 }, sasaguri: { $: 0 }, shingu: { $: 0 }, shinyoshitomi: { $: 0 }, shonai: { $: 0 }, soeda: { $: 0 }, sue: { $: 0 }, tachiarai: { $: 0 }, tagawa: { $: 0 }, takata: { $: 0 }, toho: { $: 0 }, toyotsu: { $: 0 }, tsuiki: { $: 0 }, ukiha: { $: 0 }, umi: { $: 0 }, usui: { $: 0 }, yamada: { $: 0 }, yame: { $: 0 }, yanagawa: { $: 0 }, yukuhashi: { $: 0 } }, fukushima: { $: 0, aizubange: { $: 0 }, aizumisato: { $: 0 }, aizuwakamatsu: { $: 0 }, asakawa: { $: 0 }, bandai: { $: 0 }, date: { $: 0 }, fukushima: { $: 0 }, furudono: { $: 0 }, futaba: { $: 0 }, hanawa: { $: 0 }, higashi: { $: 0 }, hirata: { $: 0 }, hirono: { $: 0 }, iitate: { $: 0 }, inawashiro: { $: 0 }, ishikawa: { $: 0 }, iwaki: { $: 0 }, izumizaki: { $: 0 }, kagamiishi: { $: 0 }, kaneyama: { $: 0 }, kawamata: { $: 0 }, kitakata: { $: 0 }, kitashiobara: { $: 0 }, koori: { $: 0 }, koriyama: { $: 0 }, kunimi: { $: 0 }, miharu: { $: 0 }, mishima: { $: 0 }, namie: { $: 0 }, nango: { $: 0 }, nishiaizu: { $: 0 }, nishigo: { $: 0 }, okuma: { $: 0 }, omotego: { $: 0 }, ono: { $: 0 }, otama: { $: 0 }, samegawa: { $: 0 }, shimogo: { $: 0 }, shirakawa: { $: 0 }, showa: { $: 0 }, soma: { $: 0 }, sukagawa: { $: 0 }, taishin: { $: 0 }, tamakawa: { $: 0 }, tanagura: { $: 0 }, tenei: { $: 0 }, yabuki: { $: 0 }, yamato: { $: 0 }, yamatsuri: { $: 0 }, yanaizu: { $: 0 }, yugawa: { $: 0 } }, gifu: { $: 0, anpachi: { $: 0 }, ena: { $: 0 }, gifu: { $: 0 }, ginan: { $: 0 }, godo: { $: 0 }, gujo: { $: 0 }, hashima: { $: 0 }, hichiso: { $: 0 }, hida: { $: 0 }, higashishirakawa: { $: 0 }, ibigawa: { $: 0 }, ikeda: { $: 0 }, kakamigahara: { $: 0 }, kani: { $: 0 }, kasahara: { $: 0 }, kasamatsu: { $: 0 }, kawaue: { $: 0 }, kitagata: { $: 0 }, mino: { $: 0 }, minokamo: { $: 0 }, mitake: { $: 0 }, mizunami: { $: 0 }, motosu: { $: 0 }, nakatsugawa: { $: 0 }, ogaki: { $: 0 }, sakahogi: { $: 0 }, seki: { $: 0 }, sekigahara: { $: 0 }, shirakawa: { $: 0 }, tajimi: { $: 0 }, takayama: { $: 0 }, tarui: { $: 0 }, toki: { $: 0 }, tomika: { $: 0 }, wanouchi: { $: 0 }, yamagata: { $: 0 }, yaotsu: { $: 0 }, yoro: { $: 0 } }, gunma: { $: 0, annaka: { $: 0 }, chiyoda: { $: 0 }, fujioka: { $: 0 }, higashiagatsuma: { $: 0 }, isesaki: { $: 0 }, itakura: { $: 0 }, kanna: { $: 0 }, kanra: { $: 0 }, katashina: { $: 0 }, kawaba: { $: 0 }, kiryu: { $: 0 }, kusatsu: { $: 0 }, maebashi: { $: 0 }, meiwa: { $: 0 }, midori: { $: 0 }, minakami: { $: 0 }, naganohara: { $: 0 }, nakanojo: { $: 0 }, nanmoku: { $: 0 }, numata: { $: 0 }, oizumi: { $: 0 }, ora: { $: 0 }, ota: { $: 0 }, shibukawa: { $: 0 }, shimonita: { $: 0 }, shinto: { $: 0 }, showa: { $: 0 }, takasaki: { $: 0 }, takayama: { $: 0 }, tamamura: { $: 0 }, tatebayashi: { $: 0 }, tomioka: { $: 0 }, tsukiyono: { $: 0 }, tsumagoi: { $: 0 }, ueno: { $: 0 }, yoshioka: { $: 0 } }, hiroshima: { $: 0, asaminami: { $: 0 }, daiwa: { $: 0 }, etajima: { $: 0 }, fuchu: { $: 0 }, fukuyama: { $: 0 }, hatsukaichi: { $: 0 }, higashihiroshima: { $: 0 }, hongo: { $: 0 }, jinsekikogen: { $: 0 }, kaita: { $: 0 }, kui: { $: 0 }, kumano: { $: 0 }, kure: { $: 0 }, mihara: { $: 0 }, miyoshi: { $: 0 }, naka: { $: 0 }, onomichi: { $: 0 }, osakikamijima: { $: 0 }, otake: { $: 0 }, saka: { $: 0 }, sera: { $: 0 }, seranishi: { $: 0 }, shinichi: { $: 0 }, shobara: { $: 0 }, takehara: { $: 0 } }, hokkaido: { $: 0, abashiri: { $: 0 }, abira: { $: 0 }, aibetsu: { $: 0 }, akabira: { $: 0 }, akkeshi: { $: 0 }, asahikawa: { $: 0 }, ashibetsu: { $: 0 }, ashoro: { $: 0 }, assabu: { $: 0 }, atsuma: { $: 0 }, bibai: { $: 0 }, biei: { $: 0 }, bifuka: { $: 0 }, bihoro: { $: 0 }, biratori: { $: 0 }, chippubetsu: { $: 0 }, chitose: { $: 0 }, date: { $: 0 }, ebetsu: { $: 0 }, embetsu: { $: 0 }, eniwa: { $: 0 }, erimo: { $: 0 }, esan: { $: 0 }, esashi: { $: 0 }, fukagawa: { $: 0 }, fukushima: { $: 0 }, furano: { $: 0 }, furubira: { $: 0 }, haboro: { $: 0 }, hakodate: { $: 0 }, hamatonbetsu: { $: 0 }, hidaka: { $: 0 }, higashikagura: { $: 0 }, higashikawa: { $: 0 }, hiroo: { $: 0 }, hokuryu: { $: 0 }, hokuto: { $: 0 }, honbetsu: { $: 0 }, horokanai: { $: 0 }, horonobe: { $: 0 }, ikeda: { $: 0 }, imakane: { $: 0 }, ishikari: { $: 0 }, iwamizawa: { $: 0 }, iwanai: { $: 0 }, kamifurano: { $: 0 }, kamikawa: { $: 0 }, kamishihoro: { $: 0 }, kamisunagawa: { $: 0 }, kamoenai: { $: 0 }, kayabe: { $: 0 }, kembuchi: { $: 0 }, kikonai: { $: 0 }, kimobetsu: { $: 0 }, kitahiroshima: { $: 0 }, kitami: { $: 0 }, kiyosato: { $: 0 }, koshimizu: { $: 0 }, kunneppu: { $: 0 }, kuriyama: { $: 0 }, kuromatsunai: { $: 0 }, kushiro: { $: 0 }, kutchan: { $: 0 }, kyowa: { $: 0 }, mashike: { $: 0 }, matsumae: { $: 0 }, mikasa: { $: 0 }, minamifurano: { $: 0 }, mombetsu: { $: 0 }, moseushi: { $: 0 }, mukawa: { $: 0 }, muroran: { $: 0 }, naie: { $: 0 }, nakagawa: { $: 0 }, nakasatsunai: { $: 0 }, nakatombetsu: { $: 0 }, nanae: { $: 0 }, nanporo: { $: 0 }, nayoro: { $: 0 }, nemuro: { $: 0 }, niikappu: { $: 0 }, niki: { $: 0 }, nishiokoppe: { $: 0 }, noboribetsu: { $: 0 }, numata: { $: 0 }, obihiro: { $: 0 }, obira: { $: 0 }, oketo: { $: 0 }, okoppe: { $: 0 }, otaru: { $: 0 }, otobe: { $: 0 }, otofuke: { $: 0 }, otoineppu: { $: 0 }, oumu: { $: 0 }, ozora: { $: 0 }, pippu: { $: 0 }, rankoshi: { $: 0 }, rebun: { $: 0 }, rikubetsu: { $: 0 }, rishiri: { $: 0 }, rishirifuji: { $: 0 }, saroma: { $: 0 }, sarufutsu: { $: 0 }, shakotan: { $: 0 }, shari: { $: 0 }, shibecha: { $: 0 }, shibetsu: { $: 0 }, shikabe: { $: 0 }, shikaoi: { $: 0 }, shimamaki: { $: 0 }, shimizu: { $: 0 }, shimokawa: { $: 0 }, shinshinotsu: { $: 0 }, shintoku: { $: 0 }, shiranuka: { $: 0 }, shiraoi: { $: 0 }, shiriuchi: { $: 0 }, sobetsu: { $: 0 }, sunagawa: { $: 0 }, taiki: { $: 0 }, takasu: { $: 0 }, takikawa: { $: 0 }, takinoue: { $: 0 }, teshikaga: { $: 0 }, tobetsu: { $: 0 }, tohma: { $: 0 }, tomakomai: { $: 0 }, tomari: { $: 0 }, toya: { $: 0 }, toyako: { $: 0 }, toyotomi: { $: 0 }, toyoura: { $: 0 }, tsubetsu: { $: 0 }, tsukigata: { $: 0 }, urakawa: { $: 0 }, urausu: { $: 0 }, uryu: { $: 0 }, utashinai: { $: 0 }, wakkanai: { $: 0 }, wassamu: { $: 0 }, yakumo: { $: 0 }, yoichi: { $: 0 } }, hyogo: { $: 0, aioi: { $: 0 }, akashi: { $: 0 }, ako: { $: 0 }, amagasaki: { $: 0 }, aogaki: { $: 0 }, asago: { $: 0 }, ashiya: { $: 0 }, awaji: { $: 0 }, fukusaki: { $: 0 }, goshiki: { $: 0 }, harima: { $: 0 }, himeji: { $: 0 }, ichikawa: { $: 0 }, inagawa: { $: 0 }, itami: { $: 0 }, kakogawa: { $: 0 }, kamigori: { $: 0 }, kamikawa: { $: 0 }, kasai: { $: 0 }, kasuga: { $: 0 }, kawanishi: { $: 0 }, miki: { $: 0 }, minamiawaji: { $: 0 }, nishinomiya: { $: 0 }, nishiwaki: { $: 0 }, ono: { $: 0 }, sanda: { $: 0 }, sannan: { $: 0 }, sasayama: { $: 0 }, sayo: { $: 0 }, shingu: { $: 0 }, shinonsen: { $: 0 }, shiso: { $: 0 }, sumoto: { $: 0 }, taishi: { $: 0 }, taka: { $: 0 }, takarazuka: { $: 0 }, takasago: { $: 0 }, takino: { $: 0 }, tamba: { $: 0 }, tatsuno: { $: 0 }, toyooka: { $: 0 }, yabu: { $: 0 }, yashiro: { $: 0 }, yoka: { $: 0 }, yokawa: { $: 0 } }, ibaraki: { $: 0, ami: { $: 0 }, asahi: { $: 0 }, bando: { $: 0 }, chikusei: { $: 0 }, daigo: { $: 0 }, fujishiro: { $: 0 }, hitachi: { $: 0 }, hitachinaka: { $: 0 }, hitachiomiya: { $: 0 }, hitachiota: { $: 0 }, ibaraki: { $: 0 }, ina: { $: 0 }, inashiki: { $: 0 }, itako: { $: 0 }, iwama: { $: 0 }, joso: { $: 0 }, kamisu: { $: 0 }, kasama: { $: 0 }, kashima: { $: 0 }, kasumigaura: { $: 0 }, koga: { $: 0 }, miho: { $: 0 }, mito: { $: 0 }, moriya: { $: 0 }, naka: { $: 0 }, namegata: { $: 0 }, oarai: { $: 0 }, ogawa: { $: 0 }, omitama: { $: 0 }, ryugasaki: { $: 0 }, sakai: { $: 0 }, sakuragawa: { $: 0 }, shimodate: { $: 0 }, shimotsuma: { $: 0 }, shirosato: { $: 0 }, sowa: { $: 0 }, suifu: { $: 0 }, takahagi: { $: 0 }, tamatsukuri: { $: 0 }, tokai: { $: 0 }, tomobe: { $: 0 }, tone: { $: 0 }, toride: { $: 0 }, tsuchiura: { $: 0 }, tsukuba: { $: 0 }, uchihara: { $: 0 }, ushiku: { $: 0 }, yachiyo: { $: 0 }, yamagata: { $: 0 }, yawara: { $: 0 }, yuki: { $: 0 } }, ishikawa: { $: 0, anamizu: { $: 0 }, hakui: { $: 0 }, hakusan: { $: 0 }, kaga: { $: 0 }, kahoku: { $: 0 }, kanazawa: { $: 0 }, kawakita: { $: 0 }, komatsu: { $: 0 }, nakanoto: { $: 0 }, nanao: { $: 0 }, nomi: { $: 0 }, nonoichi: { $: 0 }, noto: { $: 0 }, shika: { $: 0 }, suzu: { $: 0 }, tsubata: { $: 0 }, tsurugi: { $: 0 }, uchinada: { $: 0 }, wajima: { $: 0 } }, iwate: { $: 0, fudai: { $: 0 }, fujisawa: { $: 0 }, hanamaki: { $: 0 }, hiraizumi: { $: 0 }, hirono: { $: 0 }, ichinohe: { $: 0 }, ichinoseki: { $: 0 }, iwaizumi: { $: 0 }, iwate: { $: 0 }, joboji: { $: 0 }, kamaishi: { $: 0 }, kanegasaki: { $: 0 }, karumai: { $: 0 }, kawai: { $: 0 }, kitakami: { $: 0 }, kuji: { $: 0 }, kunohe: { $: 0 }, kuzumaki: { $: 0 }, miyako: { $: 0 }, mizusawa: { $: 0 }, morioka: { $: 0 }, ninohe: { $: 0 }, noda: { $: 0 }, ofunato: { $: 0 }, oshu: { $: 0 }, otsuchi: { $: 0 }, rikuzentakata: { $: 0 }, shiwa: { $: 0 }, shizukuishi: { $: 0 }, sumita: { $: 0 }, tanohata: { $: 0 }, tono: { $: 0 }, yahaba: { $: 0 }, yamada: { $: 0 } }, kagawa: { $: 0, ayagawa: { $: 0 }, higashikagawa: { $: 0 }, kanonji: { $: 0 }, kotohira: { $: 0 }, manno: { $: 0 }, marugame: { $: 0 }, mitoyo: { $: 0 }, naoshima: { $: 0 }, sanuki: { $: 0 }, tadotsu: { $: 0 }, takamatsu: { $: 0 }, tonosho: { $: 0 }, uchinomi: { $: 0 }, utazu: { $: 0 }, zentsuji: { $: 0 } }, kagoshima: { $: 0, akune: { $: 0 }, amami: { $: 0 }, hioki: { $: 0 }, isa: { $: 0 }, isen: { $: 0 }, izumi: { $: 0 }, kagoshima: { $: 0 }, kanoya: { $: 0 }, kawanabe: { $: 0 }, kinko: { $: 0 }, kouyama: { $: 0 }, makurazaki: { $: 0 }, matsumoto: { $: 0 }, minamitane: { $: 0 }, nakatane: { $: 0 }, nishinoomote: { $: 0 }, satsumasendai: { $: 0 }, soo: { $: 0 }, tarumizu: { $: 0 }, yusui: { $: 0 } }, kanagawa: { $: 0, aikawa: { $: 0 }, atsugi: { $: 0 }, ayase: { $: 0 }, chigasaki: { $: 0 }, ebina: { $: 0 }, fujisawa: { $: 0 }, hadano: { $: 0 }, hakone: { $: 0 }, hiratsuka: { $: 0 }, isehara: { $: 0 }, kaisei: { $: 0 }, kamakura: { $: 0 }, kiyokawa: { $: 0 }, matsuda: { $: 0 }, minamiashigara: { $: 0 }, miura: { $: 0 }, nakai: { $: 0 }, ninomiya: { $: 0 }, odawara: { $: 0 }, oi: { $: 0 }, oiso: { $: 0 }, sagamihara: { $: 0 }, samukawa: { $: 0 }, tsukui: { $: 0 }, yamakita: { $: 0 }, yamato: { $: 0 }, yokosuka: { $: 0 }, yugawara: { $: 0 }, zama: { $: 0 }, zushi: { $: 0 } }, kochi: { $: 0, aki: { $: 0 }, geisei: { $: 0 }, hidaka: { $: 0 }, higashitsuno: { $: 0 }, ino: { $: 0 }, kagami: { $: 0 }, kami: { $: 0 }, kitagawa: { $: 0 }, kochi: { $: 0 }, mihara: { $: 0 }, motoyama: { $: 0 }, muroto: { $: 0 }, nahari: { $: 0 }, nakamura: { $: 0 }, nankoku: { $: 0 }, nishitosa: { $: 0 }, niyodogawa: { $: 0 }, ochi: { $: 0 }, okawa: { $: 0 }, otoyo: { $: 0 }, otsuki: { $: 0 }, sakawa: { $: 0 }, sukumo: { $: 0 }, susaki: { $: 0 }, tosa: { $: 0 }, tosashimizu: { $: 0 }, toyo: { $: 0 }, tsuno: { $: 0 }, umaji: { $: 0 }, yasuda: { $: 0 }, yusuhara: { $: 0 } }, kumamoto: { $: 0, amakusa: { $: 0 }, arao: { $: 0 }, aso: { $: 0 }, choyo: { $: 0 }, gyokuto: { $: 0 }, kamiamakusa: { $: 0 }, kikuchi: { $: 0 }, kumamoto: { $: 0 }, mashiki: { $: 0 }, mifune: { $: 0 }, minamata: { $: 0 }, minamioguni: { $: 0 }, nagasu: { $: 0 }, nishihara: { $: 0 }, oguni: { $: 0 }, ozu: { $: 0 }, sumoto: { $: 0 }, takamori: { $: 0 }, uki: { $: 0 }, uto: { $: 0 }, yamaga: { $: 0 }, yamato: { $: 0 }, yatsushiro: { $: 0 } }, kyoto: { $: 0, ayabe: { $: 0 }, fukuchiyama: { $: 0 }, higashiyama: { $: 0 }, ide: { $: 0 }, ine: { $: 0 }, joyo: { $: 0 }, kameoka: { $: 0 }, kamo: { $: 0 }, kita: { $: 0 }, kizu: { $: 0 }, kumiyama: { $: 0 }, kyotamba: { $: 0 }, kyotanabe: { $: 0 }, kyotango: { $: 0 }, maizuru: { $: 0 }, minami: { $: 0 }, minamiyamashiro: { $: 0 }, miyazu: { $: 0 }, muko: { $: 0 }, nagaokakyo: { $: 0 }, nakagyo: { $: 0 }, nantan: { $: 0 }, oyamazaki: { $: 0 }, sakyo: { $: 0 }, seika: { $: 0 }, tanabe: { $: 0 }, uji: { $: 0 }, ujitawara: { $: 0 }, wazuka: { $: 0 }, yamashina: { $: 0 }, yawata: { $: 0 } }, mie: { $: 0, asahi: { $: 0 }, inabe: { $: 0 }, ise: { $: 0 }, kameyama: { $: 0 }, kawagoe: { $: 0 }, kiho: { $: 0 }, kisosaki: { $: 0 }, kiwa: { $: 0 }, komono: { $: 0 }, kumano: { $: 0 }, kuwana: { $: 0 }, matsusaka: { $: 0 }, meiwa: { $: 0 }, mihama: { $: 0 }, minamiise: { $: 0 }, misugi: { $: 0 }, miyama: { $: 0 }, nabari: { $: 0 }, shima: { $: 0 }, suzuka: { $: 0 }, tado: { $: 0 }, taiki: { $: 0 }, taki: { $: 0 }, tamaki: { $: 0 }, toba: { $: 0 }, tsu: { $: 0 }, udono: { $: 0 }, ureshino: { $: 0 }, watarai: { $: 0 }, yokkaichi: { $: 0 } }, miyagi: { $: 0, furukawa: { $: 0 }, higashimatsushima: { $: 0 }, ishinomaki: { $: 0 }, iwanuma: { $: 0 }, kakuda: { $: 0 }, kami: { $: 0 }, kawasaki: { $: 0 }, marumori: { $: 0 }, matsushima: { $: 0 }, minamisanriku: { $: 0 }, misato: { $: 0 }, murata: { $: 0 }, natori: { $: 0 }, ogawara: { $: 0 }, ohira: { $: 0 }, onagawa: { $: 0 }, osaki: { $: 0 }, rifu: { $: 0 }, semine: { $: 0 }, shibata: { $: 0 }, shichikashuku: { $: 0 }, shikama: { $: 0 }, shiogama: { $: 0 }, shiroishi: { $: 0 }, tagajo: { $: 0 }, taiwa: { $: 0 }, tome: { $: 0 }, tomiya: { $: 0 }, wakuya: { $: 0 }, watari: { $: 0 }, yamamoto: { $: 0 }, zao: { $: 0 } }, miyazaki: { $: 0, aya: { $: 0 }, ebino: { $: 0 }, gokase: { $: 0 }, hyuga: { $: 0 }, kadogawa: { $: 0 }, kawaminami: { $: 0 }, kijo: { $: 0 }, kitagawa: { $: 0 }, kitakata: { $: 0 }, kitaura: { $: 0 }, kobayashi: { $: 0 }, kunitomi: { $: 0 }, kushima: { $: 0 }, mimata: { $: 0 }, miyakonojo: { $: 0 }, miyazaki: { $: 0 }, morotsuka: { $: 0 }, nichinan: { $: 0 }, nishimera: { $: 0 }, nobeoka: { $: 0 }, saito: { $: 0 }, shiiba: { $: 0 }, shintomi: { $: 0 }, takaharu: { $: 0 }, takanabe: { $: 0 }, takazaki: { $: 0 }, tsuno: { $: 0 } }, nagano: { $: 0, achi: { $: 0 }, agematsu: { $: 0 }, anan: { $: 0 }, aoki: { $: 0 }, asahi: { $: 0 }, azumino: { $: 0 }, chikuhoku: { $: 0 }, chikuma: { $: 0 }, chino: { $: 0 }, fujimi: { $: 0 }, hakuba: { $: 0 }, hara: { $: 0 }, hiraya: { $: 0 }, iida: { $: 0 }, iijima: { $: 0 }, iiyama: { $: 0 }, iizuna: { $: 0 }, ikeda: { $: 0 }, ikusaka: { $: 0 }, ina: { $: 0 }, karuizawa: { $: 0 }, kawakami: { $: 0 }, kiso: { $: 0 }, kisofukushima: { $: 0 }, kitaaiki: { $: 0 }, komagane: { $: 0 }, komoro: { $: 0 }, matsukawa: { $: 0 }, matsumoto: { $: 0 }, miasa: { $: 0 }, minamiaiki: { $: 0 }, minamimaki: { $: 0 }, minamiminowa: { $: 0 }, minowa: { $: 0 }, miyada: { $: 0 }, miyota: { $: 0 }, mochizuki: { $: 0 }, nagano: { $: 0 }, nagawa: { $: 0 }, nagiso: { $: 0 }, nakagawa: { $: 0 }, nakano: { $: 0 }, nozawaonsen: { $: 0 }, obuse: { $: 0 }, ogawa: { $: 0 }, okaya: { $: 0 }, omachi: { $: 0 }, omi: { $: 0 }, ookuwa: { $: 0 }, ooshika: { $: 0 }, otaki: { $: 0 }, otari: { $: 0 }, sakae: { $: 0 }, sakaki: { $: 0 }, saku: { $: 0 }, sakuho: { $: 0 }, shimosuwa: { $: 0 }, shinanomachi: { $: 0 }, shiojiri: { $: 0 }, suwa: { $: 0 }, suzaka: { $: 0 }, takagi: { $: 0 }, takamori: { $: 0 }, takayama: { $: 0 }, tateshina: { $: 0 }, tatsuno: { $: 0 }, togakushi: { $: 0 }, togura: { $: 0 }, tomi: { $: 0 }, ueda: { $: 0 }, wada: { $: 0 }, yamagata: { $: 0 }, yamanouchi: { $: 0 }, yasaka: { $: 0 }, yasuoka: { $: 0 } }, nagasaki: { $: 0, chijiwa: { $: 0 }, futsu: { $: 0 }, goto: { $: 0 }, hasami: { $: 0 }, hirado: { $: 0 }, iki: { $: 0 }, isahaya: { $: 0 }, kawatana: { $: 0 }, kuchinotsu: { $: 0 }, matsuura: { $: 0 }, nagasaki: { $: 0 }, obama: { $: 0 }, omura: { $: 0 }, oseto: { $: 0 }, saikai: { $: 0 }, sasebo: { $: 0 }, seihi: { $: 0 }, shimabara: { $: 0 }, shinkamigoto: { $: 0 }, togitsu: { $: 0 }, tsushima: { $: 0 }, unzen: { $: 0 } }, nara: { $: 0, ando: { $: 0 }, gose: { $: 0 }, heguri: { $: 0 }, higashiyoshino: { $: 0 }, ikaruga: { $: 0 }, ikoma: { $: 0 }, kamikitayama: { $: 0 }, kanmaki: { $: 0 }, kashiba: { $: 0 }, kashihara: { $: 0 }, katsuragi: { $: 0 }, kawai: { $: 0 }, kawakami: { $: 0 }, kawanishi: { $: 0 }, koryo: { $: 0 }, kurotaki: { $: 0 }, mitsue: { $: 0 }, miyake: { $: 0 }, nara: { $: 0 }, nosegawa: { $: 0 }, oji: { $: 0 }, ouda: { $: 0 }, oyodo: { $: 0 }, sakurai: { $: 0 }, sango: { $: 0 }, shimoichi: { $: 0 }, shimokitayama: { $: 0 }, shinjo: { $: 0 }, soni: { $: 0 }, takatori: { $: 0 }, tawaramoto: { $: 0 }, tenkawa: { $: 0 }, tenri: { $: 0 }, uda: { $: 0 }, yamatokoriyama: { $: 0 }, yamatotakada: { $: 0 }, yamazoe: { $: 0 }, yoshino: { $: 0 } }, niigata: { $: 0, aga: { $: 0 }, agano: { $: 0 }, gosen: { $: 0 }, itoigawa: { $: 0 }, izumozaki: { $: 0 }, joetsu: { $: 0 }, kamo: { $: 0 }, kariwa: { $: 0 }, kashiwazaki: { $: 0 }, minamiuonuma: { $: 0 }, mitsuke: { $: 0 }, muika: { $: 0 }, murakami: { $: 0 }, myoko: { $: 0 }, nagaoka: { $: 0 }, niigata: { $: 0 }, ojiya: { $: 0 }, omi: { $: 0 }, sado: { $: 0 }, sanjo: { $: 0 }, seiro: { $: 0 }, seirou: { $: 0 }, sekikawa: { $: 0 }, shibata: { $: 0 }, tagami: { $: 0 }, tainai: { $: 0 }, tochio: { $: 0 }, tokamachi: { $: 0 }, tsubame: { $: 0 }, tsunan: { $: 0 }, uonuma: { $: 0 }, yahiko: { $: 0 }, yoita: { $: 0 }, yuzawa: { $: 0 } }, oita: { $: 0, beppu: { $: 0 }, bungoono: { $: 0 }, bungotakada: { $: 0 }, hasama: { $: 0 }, hiji: { $: 0 }, himeshima: { $: 0 }, hita: { $: 0 }, kamitsue: { $: 0 }, kokonoe: { $: 0 }, kuju: { $: 0 }, kunisaki: { $: 0 }, kusu: { $: 0 }, oita: { $: 0 }, saiki: { $: 0 }, taketa: { $: 0 }, tsukumi: { $: 0 }, usa: { $: 0 }, usuki: { $: 0 }, yufu: { $: 0 } }, okayama: { $: 0, akaiwa: { $: 0 }, asakuchi: { $: 0 }, bizen: { $: 0 }, hayashima: { $: 0 }, ibara: { $: 0 }, kagamino: { $: 0 }, kasaoka: { $: 0 }, kibichuo: { $: 0 }, kumenan: { $: 0 }, kurashiki: { $: 0 }, maniwa: { $: 0 }, misaki: { $: 0 }, nagi: { $: 0 }, niimi: { $: 0 }, nishiawakura: { $: 0 }, okayama: { $: 0 }, satosho: { $: 0 }, setouchi: { $: 0 }, shinjo: { $: 0 }, shoo: { $: 0 }, soja: { $: 0 }, takahashi: { $: 0 }, tamano: { $: 0 }, tsuyama: { $: 0 }, wake: { $: 0 }, yakage: { $: 0 } }, okinawa: { $: 0, aguni: { $: 0 }, ginowan: { $: 0 }, ginoza: { $: 0 }, gushikami: { $: 0 }, haebaru: { $: 0 }, higashi: { $: 0 }, hirara: { $: 0 }, iheya: { $: 0 }, ishigaki: { $: 0 }, ishikawa: { $: 0 }, itoman: { $: 0 }, izena: { $: 0 }, kadena: { $: 0 }, kin: { $: 0 }, kitadaito: { $: 0 }, kitanakagusuku: { $: 0 }, kumejima: { $: 0 }, kunigami: { $: 0 }, minamidaito: { $: 0 }, motobu: { $: 0 }, nago: { $: 0 }, naha: { $: 0 }, nakagusuku: { $: 0 }, nakijin: { $: 0 }, nanjo: { $: 0 }, nishihara: { $: 0 }, ogimi: { $: 0 }, okinawa: { $: 0 }, onna: { $: 0 }, shimoji: { $: 0 }, taketomi: { $: 0 }, tarama: { $: 0 }, tokashiki: { $: 0 }, tomigusuku: { $: 0 }, tonaki: { $: 0 }, urasoe: { $: 0 }, uruma: { $: 0 }, yaese: { $: 0 }, yomitan: { $: 0 }, yonabaru: { $: 0 }, yonaguni: { $: 0 }, zamami: { $: 0 } }, osaka: { $: 0, abeno: { $: 0 }, chihayaakasaka: { $: 0 }, chuo: { $: 0 }, daito: { $: 0 }, fujiidera: { $: 0 }, habikino: { $: 0 }, hannan: { $: 0 }, higashiosaka: { $: 0 }, higashisumiyoshi: { $: 0 }, higashiyodogawa: { $: 0 }, hirakata: { $: 0 }, ibaraki: { $: 0 }, ikeda: { $: 0 }, izumi: { $: 0 }, izumiotsu: { $: 0 }, izumisano: { $: 0 }, kadoma: { $: 0 }, kaizuka: { $: 0 }, kanan: { $: 0 }, kashiwara: { $: 0 }, katano: { $: 0 }, kawachinagano: { $: 0 }, kishiwada: { $: 0 }, kita: { $: 0 }, kumatori: { $: 0 }, matsubara: { $: 0 }, minato: { $: 0 }, minoh: { $: 0 }, misaki: { $: 0 }, moriguchi: { $: 0 }, neyagawa: { $: 0 }, nishi: { $: 0 }, nose: { $: 0 }, osakasayama: { $: 0 }, sakai: { $: 0 }, sayama: { $: 0 }, sennan: { $: 0 }, settsu: { $: 0 }, shijonawate: { $: 0 }, shimamoto: { $: 0 }, suita: { $: 0 }, tadaoka: { $: 0 }, taishi: { $: 0 }, tajiri: { $: 0 }, takaishi: { $: 0 }, takatsuki: { $: 0 }, tondabayashi: { $: 0 }, toyonaka: { $: 0 }, toyono: { $: 0 }, yao: { $: 0 } }, saga: { $: 0, ariake: { $: 0 }, arita: { $: 0 }, fukudomi: { $: 0 }, genkai: { $: 0 }, hamatama: { $: 0 }, hizen: { $: 0 }, imari: { $: 0 }, kamimine: { $: 0 }, kanzaki: { $: 0 }, karatsu: { $: 0 }, kashima: { $: 0 }, kitagata: { $: 0 }, kitahata: { $: 0 }, kiyama: { $: 0 }, kouhoku: { $: 0 }, kyuragi: { $: 0 }, nishiarita: { $: 0 }, ogi: { $: 0 }, omachi: { $: 0 }, ouchi: { $: 0 }, saga: { $: 0 }, shiroishi: { $: 0 }, taku: { $: 0 }, tara: { $: 0 }, tosu: { $: 0 }, yoshinogari: { $: 0 } }, saitama: { $: 0, arakawa: { $: 0 }, asaka: { $: 0 }, chichibu: { $: 0 }, fujimi: { $: 0 }, fujimino: { $: 0 }, fukaya: { $: 0 }, hanno: { $: 0 }, hanyu: { $: 0 }, hasuda: { $: 0 }, hatogaya: { $: 0 }, hatoyama: { $: 0 }, hidaka: { $: 0 }, higashichichibu: { $: 0 }, higashimatsuyama: { $: 0 }, honjo: { $: 0 }, ina: { $: 0 }, iruma: { $: 0 }, iwatsuki: { $: 0 }, kamiizumi: { $: 0 }, kamikawa: { $: 0 }, kamisato: { $: 0 }, kasukabe: { $: 0 }, kawagoe: { $: 0 }, kawaguchi: { $: 0 }, kawajima: { $: 0 }, kazo: { $: 0 }, kitamoto: { $: 0 }, koshigaya: { $: 0 }, kounosu: { $: 0 }, kuki: { $: 0 }, kumagaya: { $: 0 }, matsubushi: { $: 0 }, minano: { $: 0 }, misato: { $: 0 }, miyashiro: { $: 0 }, miyoshi: { $: 0 }, moroyama: { $: 0 }, nagatoro: { $: 0 }, namegawa: { $: 0 }, niiza: { $: 0 }, ogano: { $: 0 }, ogawa: { $: 0 }, ogose: { $: 0 }, okegawa: { $: 0 }, omiya: { $: 0 }, otaki: { $: 0 }, ranzan: { $: 0 }, ryokami: { $: 0 }, saitama: { $: 0 }, sakado: { $: 0 }, satte: { $: 0 }, sayama: { $: 0 }, shiki: { $: 0 }, shiraoka: { $: 0 }, soka: { $: 0 }, sugito: { $: 0 }, toda: { $: 0 }, tokigawa: { $: 0 }, tokorozawa: { $: 0 }, tsurugashima: { $: 0 }, urawa: { $: 0 }, warabi: { $: 0 }, yashio: { $: 0 }, yokoze: { $: 0 }, yono: { $: 0 }, yorii: { $: 0 }, yoshida: { $: 0 }, yoshikawa: { $: 0 }, yoshimi: { $: 0 } }, shiga: { $: 0, aisho: { $: 0 }, gamo: { $: 0 }, higashiomi: { $: 0 }, hikone: { $: 0 }, koka: { $: 0 }, konan: { $: 0 }, kosei: { $: 0 }, koto: { $: 0 }, kusatsu: { $: 0 }, maibara: { $: 0 }, moriyama: { $: 0 }, nagahama: { $: 0 }, nishiazai: { $: 0 }, notogawa: { $: 0 }, omihachiman: { $: 0 }, otsu: { $: 0 }, ritto: { $: 0 }, ryuoh: { $: 0 }, takashima: { $: 0 }, takatsuki: { $: 0 }, torahime: { $: 0 }, toyosato: { $: 0 }, yasu: { $: 0 } }, shimane: { $: 0, akagi: { $: 0 }, ama: { $: 0 }, gotsu: { $: 0 }, hamada: { $: 0 }, higashiizumo: { $: 0 }, hikawa: { $: 0 }, hikimi: { $: 0 }, izumo: { $: 0 }, kakinoki: { $: 0 }, masuda: { $: 0 }, matsue: { $: 0 }, misato: { $: 0 }, nishinoshima: { $: 0 }, ohda: { $: 0 }, okinoshima: { $: 0 }, okuizumo: { $: 0 }, shimane: { $: 0 }, tamayu: { $: 0 }, tsuwano: { $: 0 }, unnan: { $: 0 }, yakumo: { $: 0 }, yasugi: { $: 0 }, yatsuka: { $: 0 } }, shizuoka: { $: 0, arai: { $: 0 }, atami: { $: 0 }, fuji: { $: 0 }, fujieda: { $: 0 }, fujikawa: { $: 0 }, fujinomiya: { $: 0 }, fukuroi: { $: 0 }, gotemba: { $: 0 }, haibara: { $: 0 }, hamamatsu: { $: 0 }, higashiizu: { $: 0 }, ito: { $: 0 }, iwata: { $: 0 }, izu: { $: 0 }, izunokuni: { $: 0 }, kakegawa: { $: 0 }, kannami: { $: 0 }, kawanehon: { $: 0 }, kawazu: { $: 0 }, kikugawa: { $: 0 }, kosai: { $: 0 }, makinohara: { $: 0 }, matsuzaki: { $: 0 }, minamiizu: { $: 0 }, mishima: { $: 0 }, morimachi: { $: 0 }, nishiizu: { $: 0 }, numazu: { $: 0 }, omaezaki: { $: 0 }, shimada: { $: 0 }, shimizu: { $: 0 }, shimoda: { $: 0 }, shizuoka: { $: 0 }, susono: { $: 0 }, yaizu: { $: 0 }, yoshida: { $: 0 } }, tochigi: { $: 0, ashikaga: { $: 0 }, bato: { $: 0 }, haga: { $: 0 }, ichikai: { $: 0 }, iwafune: { $: 0 }, kaminokawa: { $: 0 }, kanuma: { $: 0 }, karasuyama: { $: 0 }, kuroiso: { $: 0 }, mashiko: { $: 0 }, mibu: { $: 0 }, moka: { $: 0 }, motegi: { $: 0 }, nasu: { $: 0 }, nasushiobara: { $: 0 }, nikko: { $: 0 }, nishikata: { $: 0 }, nogi: { $: 0 }, ohira: { $: 0 }, ohtawara: { $: 0 }, oyama: { $: 0 }, sakura: { $: 0 }, sano: { $: 0 }, shimotsuke: { $: 0 }, shioya: { $: 0 }, takanezawa: { $: 0 }, tochigi: { $: 0 }, tsuga: { $: 0 }, ujiie: { $: 0 }, utsunomiya: { $: 0 }, yaita: { $: 0 } }, tokushima: { $: 0, aizumi: { $: 0 }, anan: { $: 0 }, ichiba: { $: 0 }, itano: { $: 0 }, kainan: { $: 0 }, komatsushima: { $: 0 }, matsushige: { $: 0 }, mima: { $: 0 }, minami: { $: 0 }, miyoshi: { $: 0 }, mugi: { $: 0 }, nakagawa: { $: 0 }, naruto: { $: 0 }, sanagochi: { $: 0 }, shishikui: { $: 0 }, tokushima: { $: 0 }, wajiki: { $: 0 } }, tokyo: { $: 0, adachi: { $: 0 }, akiruno: { $: 0 }, akishima: { $: 0 }, aogashima: { $: 0 }, arakawa: { $: 0 }, bunkyo: { $: 0 }, chiyoda: { $: 0 }, chofu: { $: 0 }, chuo: { $: 0 }, edogawa: { $: 0 }, fuchu: { $: 0 }, fussa: { $: 0 }, hachijo: { $: 0 }, hachioji: { $: 0 }, hamura: { $: 0 }, higashikurume: { $: 0 }, higashimurayama: { $: 0 }, higashiyamato: { $: 0 }, hino: { $: 0 }, hinode: { $: 0 }, hinohara: { $: 0 }, inagi: { $: 0 }, itabashi: { $: 0 }, katsushika: { $: 0 }, kita: { $: 0 }, kiyose: { $: 0 }, kodaira: { $: 0 }, koganei: { $: 0 }, kokubunji: { $: 0 }, komae: { $: 0 }, koto: { $: 0 }, kouzushima: { $: 0 }, kunitachi: { $: 0 }, machida: { $: 0 }, meguro: { $: 0 }, minato: { $: 0 }, mitaka: { $: 0 }, mizuho: { $: 0 }, musashimurayama: { $: 0 }, musashino: { $: 0 }, nakano: { $: 0 }, nerima: { $: 0 }, ogasawara: { $: 0 }, okutama: { $: 0 }, ome: { $: 0 }, oshima: { $: 0 }, ota: { $: 0 }, setagaya: { $: 0 }, shibuya: { $: 0 }, shinagawa: { $: 0 }, shinjuku: { $: 0 }, suginami: { $: 0 }, sumida: { $: 0 }, tachikawa: { $: 0 }, taito: { $: 0 }, tama: { $: 0 }, toshima: { $: 0 } }, tottori: { $: 0, chizu: { $: 0 }, hino: { $: 0 }, kawahara: { $: 0 }, koge: { $: 0 }, kotoura: { $: 0 }, misasa: { $: 0 }, nanbu: { $: 0 }, nichinan: { $: 0 }, sakaiminato: { $: 0 }, tottori: { $: 0 }, wakasa: { $: 0 }, yazu: { $: 0 }, yonago: { $: 0 } }, toyama: { $: 0, asahi: { $: 0 }, fuchu: { $: 0 }, fukumitsu: { $: 0 }, funahashi: { $: 0 }, himi: { $: 0 }, imizu: { $: 0 }, inami: { $: 0 }, johana: { $: 0 }, kamiichi: { $: 0 }, kurobe: { $: 0 }, nakaniikawa: { $: 0 }, namerikawa: { $: 0 }, nanto: { $: 0 }, nyuzen: { $: 0 }, oyabe: { $: 0 }, taira: { $: 0 }, takaoka: { $: 0 }, tateyama: { $: 0 }, toga: { $: 0 }, tonami: { $: 0 }, toyama: { $: 0 }, unazuki: { $: 0 }, uozu: { $: 0 }, yamada: { $: 0 } }, wakayama: { $: 0, arida: { $: 0 }, aridagawa: { $: 0 }, gobo: { $: 0 }, hashimoto: { $: 0 }, hidaka: { $: 0 }, hirogawa: { $: 0 }, inami: { $: 0 }, iwade: { $: 0 }, kainan: { $: 0 }, kamitonda: { $: 0 }, katsuragi: { $: 0 }, kimino: { $: 0 }, kinokawa: { $: 0 }, kitayama: { $: 0 }, koya: { $: 0 }, koza: { $: 0 }, kozagawa: { $: 0 }, kudoyama: { $: 0 }, kushimoto: { $: 0 }, mihama: { $: 0 }, misato: { $: 0 }, nachikatsuura: { $: 0 }, shingu: { $: 0 }, shirahama: { $: 0 }, taiji: { $: 0 }, tanabe: { $: 0 }, wakayama: { $: 0 }, yuasa: { $: 0 }, yura: { $: 0 } }, yamagata: { $: 0, asahi: { $: 0 }, funagata: { $: 0 }, higashine: { $: 0 }, iide: { $: 0 }, kahoku: { $: 0 }, kaminoyama: { $: 0 }, kaneyama: { $: 0 }, kawanishi: { $: 0 }, mamurogawa: { $: 0 }, mikawa: { $: 0 }, murayama: { $: 0 }, nagai: { $: 0 }, nakayama: { $: 0 }, nanyo: { $: 0 }, nishikawa: { $: 0 }, obanazawa: { $: 0 }, oe: { $: 0 }, oguni: { $: 0 }, ohkura: { $: 0 }, oishida: { $: 0 }, sagae: { $: 0 }, sakata: { $: 0 }, sakegawa: { $: 0 }, shinjo: { $: 0 }, shirataka: { $: 0 }, shonai: { $: 0 }, takahata: { $: 0 }, tendo: { $: 0 }, tozawa: { $: 0 }, tsuruoka: { $: 0 }, yamagata: { $: 0 }, yamanobe: { $: 0 }, yonezawa: { $: 0 }, yuza: { $: 0 } }, yamaguchi: { $: 0, abu: { $: 0 }, hagi: { $: 0 }, hikari: { $: 0 }, hofu: { $: 0 }, iwakuni: { $: 0 }, kudamatsu: { $: 0 }, mitou: { $: 0 }, nagato: { $: 0 }, oshima: { $: 0 }, shimonoseki: { $: 0 }, shunan: { $: 0 }, tabuse: { $: 0 }, tokuyama: { $: 0 }, toyota: { $: 0 }, ube: { $: 0 }, yuu: { $: 0 } }, yamanashi: { $: 0, chuo: { $: 0 }, doshi: { $: 0 }, fuefuki: { $: 0 }, fujikawa: { $: 0 }, fujikawaguchiko: { $: 0 }, fujiyoshida: { $: 0 }, hayakawa: { $: 0 }, hokuto: { $: 0 }, ichikawamisato: { $: 0 }, kai: { $: 0 }, kofu: { $: 0 }, koshu: { $: 0 }, kosuge: { $: 0 }, "minami-alps": { $: 0 }, minobu: { $: 0 }, nakamichi: { $: 0 }, nanbu: { $: 0 }, narusawa: { $: 0 }, nirasaki: { $: 0 }, nishikatsura: { $: 0 }, oshino: { $: 0 }, otsuki: { $: 0 }, showa: { $: 0 }, tabayama: { $: 0 }, tsuru: { $: 0 }, uenohara: { $: 0 }, yamanakako: { $: 0 }, yamanashi: { $: 0 } }, "xn--ehqz56n": { $: 0 }, "xn--1lqs03n": { $: 0 }, "xn--qqqt11m": { $: 0 }, "xn--f6qx53a": { $: 0 }, "xn--djrs72d6uy": { $: 0 }, "xn--mkru45i": { $: 0 }, "xn--0trq7p7nn": { $: 0 }, "xn--5js045d": { $: 0 }, "xn--kbrq7o": { $: 0 }, "xn--pssu33l": { $: 0 }, "xn--ntsq17g": { $: 0 }, "xn--uisz3g": { $: 0 }, "xn--6btw5a": { $: 0 }, "xn--1ctwo": { $: 0 }, "xn--6orx2r": { $: 0 }, "xn--rht61e": { $: 0 }, "xn--rht27z": { $: 0 }, "xn--nit225k": { $: 0 }, "xn--rht3d": { $: 0 }, "xn--djty4k": { $: 0 }, "xn--klty5x": { $: 0 }, "xn--kltx9a": { $: 0 }, "xn--kltp7d": { $: 0 }, "xn--c3s14m": { $: 0 }, "xn--vgu402c": { $: 0 }, "xn--efvn9s": { $: 0 }, "xn--1lqs71d": { $: 0 }, "xn--4pvxs": { $: 0 }, "xn--uuwu58a": { $: 0 }, "xn--zbx025d": { $: 0 }, "xn--8pvr4u": { $: 0 }, "xn--5rtp49c": { $: 0 }, "xn--ntso0iqx3a": { $: 0 }, "xn--elqq16h": { $: 0 }, "xn--4it168d": { $: 0 }, "xn--klt787d": { $: 0 }, "xn--rny31h": { $: 0 }, "xn--7t0a264c": { $: 0 }, "xn--uist22h": { $: 0 }, "xn--8ltr62k": { $: 0 }, "xn--2m4a15e": { $: 0 }, "xn--32vp30h": { $: 0 }, "xn--4it797k": { $: 0 }, "xn--5rtq34k": { $: 0 }, "xn--k7yn95e": { $: 0 }, "xn--tor131o": { $: 0 }, "xn--d5qv7z876c": { $: 0 }, kawasaki: { "*": { $: 0 } }, kitakyushu: { "*": { $: 0 } }, kobe: { "*": { $: 0 } }, nagoya: { "*": { $: 0 } }, sapporo: { "*": { $: 0 } }, sendai: { "*": { $: 0 } }, yokohama: { "*": { $: 0 } }, buyshop: { $: 0 }, fashionstore: { $: 0 }, handcrafted: { $: 0 }, kawaiishop: { $: 0 }, supersale: { $: 0 }, theshop: { $: 0 }, "0am": { $: 0 }, "0g0": { $: 0 }, "0j0": { $: 0 }, "0t0": { $: 0 }, mydns: { $: 0 }, pgw: { $: 0 }, wjg: { $: 0 }, usercontent: { $: 0 }, angry: { $: 0 }, babyblue: { $: 0 }, babymilk: { $: 0 }, backdrop: { $: 0 }, bambina: { $: 0 }, bitter: { $: 0 }, blush: { $: 0 }, boo: { $: 0 }, boy: { $: 0 }, boyfriend: { $: 0 }, but: { $: 0 }, candypop: { $: 0 }, capoo: { $: 0 }, catfood: { $: 0 }, cheap: { $: 0 }, chicappa: { $: 0 }, chillout: { $: 0 }, chips: { $: 0 }, chowder: { $: 0 }, chu: { $: 0 }, ciao: { $: 0 }, cocotte: { $: 0 }, coolblog: { $: 0 }, cranky: { $: 0 }, cutegirl: { $: 0 }, daa: { $: 0 }, deca: { $: 0 }, deci: { $: 0 }, digick: { $: 0 }, egoism: { $: 0 }, fakefur: { $: 0 }, fem: { $: 0 }, flier: { $: 0 }, floppy: { $: 0 }, fool: { $: 0 }, frenchkiss: { $: 0 }, girlfriend: { $: 0 }, girly: { $: 0 }, gloomy: { $: 0 }, gonna: { $: 0 }, greater: { $: 0 }, hacca: { $: 0 }, heavy: { $: 0 }, her: { $: 0 }, hiho: { $: 0 }, hippy: { $: 0 }, holy: { $: 0 }, hungry: { $: 0 }, icurus: { $: 0 }, itigo: { $: 0 }, jellybean: { $: 0 }, kikirara: { $: 0 }, kill: { $: 0 }, kilo: { $: 0 }, kuron: { $: 0 }, littlestar: { $: 0 }, lolipopmc: { $: 0 }, lolitapunk: { $: 0 }, lomo: { $: 0 }, lovepop: { $: 0 }, lovesick: { $: 0 }, main: { $: 0 }, mods: { $: 0 }, mond: { $: 0 }, mongolian: { $: 0 }, moo: { $: 0 }, namaste: { $: 0 }, nikita: { $: 0 }, nobushi: { $: 0 }, noor: { $: 0 }, oops: { $: 0 }, parallel: { $: 0 }, parasite: { $: 0 }, pecori: { $: 0 }, peewee: { $: 0 }, penne: { $: 0 }, pepper: { $: 0 }, perma: { $: 0 }, pigboat: { $: 0 }, pinoko: { $: 0 }, punyu: { $: 0 }, pupu: { $: 0 }, pussycat: { $: 0 }, pya: { $: 0 }, raindrop: { $: 0 }, readymade: { $: 0 }, sadist: { $: 0 }, schoolbus: { $: 0 }, secret: { $: 0 }, staba: { $: 0 }, stripper: { $: 0 }, sub: { $: 0 }, sunnyday: { $: 0 }, thick: { $: 0 }, tonkotsu: { $: 0 }, under: { $: 0 }, upper: { $: 0 }, velvet: { $: 0 }, verse: { $: 0 }, versus: { $: 0 }, vivian: { $: 0 }, watson: { $: 0 }, weblike: { $: 0 }, whitesnow: { $: 0 }, zombie: { $: 0 }, hateblo: { $: 0 }, hatenablog: { $: 0 }, hatenadiary: { $: 0 }, "2-d": { $: 0 }, bona: { $: 0 }, crap: { $: 0 }, daynight: { $: 0 }, eek: { $: 0 }, flop: { $: 0 }, halfmoon: { $: 0 }, jeez: { $: 0 }, matrix: { $: 0 }, mimoza: { $: 0 }, netgamers: { $: 0 }, nyanta: { $: 0 }, o0o0: { $: 0 }, rdy: { $: 0 }, rgr: { $: 0 }, rulez: { $: 0 }, sakurastorage: { isk01: { s3: { $: 0 } }, isk02: { s3: { $: 0 } } }, saloon: { $: 0 }, sblo: { $: 0 }, skr: { $: 0 }, tank: { $: 0 }, "uh-oh": { $: 0 }, undo: { $: 0 }, webaccel: { rs: { $: 0 }, user: { $: 0 } }, websozai: { $: 0 }, xii: { $: 0 } }, ke: { $: 0, ac: { $: 0 }, co: { $: 0 }, go: { $: 0 }, info: { $: 0 }, me: { $: 0 }, mobi: { $: 0 }, ne: { $: 0 }, or: { $: 0 }, sc: { $: 0 } }, kg: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, org: { $: 0 }, us: { $: 0 }, xx: { $: 0 } }, kh: { "*": { $: 0 } }, ki: { $: 0, biz: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, info: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, km: { $: 0, ass: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, mil: { $: 0 }, nom: { $: 0 }, org: { $: 0 }, prd: { $: 0 }, tm: { $: 0 }, asso: { $: 0 }, coop: { $: 0 }, gouv: { $: 0 }, medecin: { $: 0 }, notaires: { $: 0 }, pharmaciens: { $: 0 }, presse: { $: 0 }, veterinaire: { $: 0 } }, kn: { $: 0, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, kp: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, org: { $: 0 }, rep: { $: 0 }, tra: { $: 0 } }, kr: { $: 0, ac: { $: 0 }, ai: { $: 0 }, co: { $: 0 }, es: { $: 0 }, go: { $: 0 }, hs: { $: 0 }, io: { $: 0 }, it: { $: 0 }, kg: { $: 0 }, me: { $: 0 }, mil: { $: 0 }, ms: { $: 0 }, ne: { $: 0 }, or: { $: 0 }, pe: { $: 0 }, re: { $: 0 }, sc: { $: 0 }, busan: { $: 0 }, chungbuk: { $: 0 }, chungnam: { $: 0 }, daegu: { $: 0 }, daejeon: { $: 0 }, gangwon: { $: 0 }, gwangju: { $: 0 }, gyeongbuk: { $: 0 }, gyeonggi: { $: 0 }, gyeongnam: { $: 0 }, incheon: { $: 0 }, jeju: { $: 0 }, jeonbuk: { $: 0 }, jeonnam: { $: 0 }, seoul: { $: 0 }, ulsan: { $: 0 }, c01: { $: 0 }, "eliv-cdn": { $: 0 }, "eliv-dns": { $: 0 }, mmv: { $: 0 }, vki: { $: 0 } }, kw: { $: 0, com: { $: 0 }, edu: { $: 0 }, emb: { $: 0 }, gov: { $: 0 }, ind: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, ky: { $: 0, com: { $: 0 }, edu: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, kz: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, org: { $: 0 }, jcloud: { $: 0 } }, la: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, info: { $: 0 }, int: { $: 0 }, net: { $: 0 }, org: { $: 0 }, per: { $: 0 }, bnr: { $: 0 } }, lb: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, lc: { $: 0, co: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 }, oy: { $: 0 } }, li: { $: 0 }, lk: { $: 0, ac: { $: 0 }, assn: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, grp: { $: 0 }, hotel: { $: 0 }, int: { $: 0 }, ltd: { $: 0 }, net: { $: 0 }, ngo: { $: 0 }, org: { $: 0 }, sch: { $: 0 }, soc: { $: 0 }, web: { $: 0 } }, lr: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, ls: { $: 0, ac: { $: 0 }, biz: { $: 0 }, co: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, info: { $: 0 }, net: { $: 0 }, org: { $: 0 }, sc: { $: 0 } }, lt: { $: 0, gov: { $: 0 } }, lu: { $: 0, "123website": { $: 0 } }, lv: { $: 0, asn: { $: 0 }, com: { $: 0 }, conf: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, id: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, ly: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, id: { $: 0 }, med: { $: 0 }, net: { $: 0 }, org: { $: 0 }, plc: { $: 0 }, sch: { $: 0 } }, ma: { $: 0, ac: { $: 0 }, co: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 }, press: { $: 0 } }, mc: { $: 0, asso: { $: 0 }, tm: { $: 0 } }, md: { $: 0, ir: { $: 0 } }, me: { $: 0, ac: { $: 0 }, co: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, its: { $: 0 }, net: { $: 0 }, org: { $: 0 }, priv: { $: 0 }, c66: { $: 0 }, craft: { $: 0 }, edgestack: { $: 0 }, filegear: { $: 0 }, glitch: { $: 0 }, "filegear-sg": { $: 0 }, lohmus: { $: 0 }, barsy: { $: 0 }, mcdir: { $: 0 }, brasilia: { $: 0 }, ddns: { $: 0 }, dnsfor: { $: 0 }, hopto: { $: 0 }, loginto: { $: 0 }, noip: { $: 0 }, webhop: { $: 0 }, soundcast: { $: 0 }, tcp4: { $: 0 }, vp4: { $: 0 }, diskstation: { $: 0 }, dscloud: { $: 0 }, i234: { $: 0 }, myds: { $: 0 }, synology: { $: 0 }, transip: { site: { $: 0 } }, nohost: { $: 0 } }, mg: { $: 0, co: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, mil: { $: 0 }, nom: { $: 0 }, org: { $: 0 }, prd: { $: 0 } }, mh: { $: 0 }, mil: { $: 0 }, mk: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, inf: { $: 0 }, name: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, ml: { $: 0, ac: { $: 0 }, art: { $: 0 }, asso: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, gouv: { $: 0 }, gov: { $: 0 }, info: { $: 0 }, inst: { $: 0 }, net: { $: 0 }, org: { $: 0 }, pr: { $: 0 }, presse: { $: 0 } }, mm: { "*": { $: 0 } }, mn: { $: 0, edu: { $: 0 }, gov: { $: 0 }, org: { $: 0 }, nyc: { $: 0 } }, mo: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, mobi: { $: 0, barsy: { $: 0 }, dscloud: { $: 0 } }, mp: { $: 0, ju: { $: 0 } }, mq: { $: 0 }, mr: { $: 0, gov: { $: 0 } }, ms: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 }, minisite: { $: 0 } }, mt: { $: 0, com: { $: 0 }, edu: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, mu: { $: 0, ac: { $: 0 }, co: { $: 0 }, com: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, or: { $: 0 }, org: { $: 0 } }, museum: { $: 0 }, mv: { $: 0, aero: { $: 0 }, biz: { $: 0 }, com: { $: 0 }, coop: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, info: { $: 0 }, int: { $: 0 }, mil: { $: 0 }, museum: { $: 0 }, name: { $: 0 }, net: { $: 0 }, org: { $: 0 }, pro: { $: 0 } }, mw: { $: 0, ac: { $: 0 }, biz: { $: 0 }, co: { $: 0 }, com: { $: 0 }, coop: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, int: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, mx: { $: 0, com: { $: 0 }, edu: { $: 0 }, gob: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, my: { $: 0, biz: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, mil: { $: 0 }, name: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, mz: { $: 0, ac: { $: 0 }, adv: { $: 0 }, co: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, na: { $: 0, alt: { $: 0 }, co: { $: 0 }, com: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, name: { $: 0, her: { forgot: { $: 0 } }, his: { forgot: { $: 0 } } }, nc: { $: 0, asso: { $: 0 }, nom: { $: 0 } }, ne: { $: 0 }, net: { $: 0, adobeaemcloud: { $: 0 }, "adobeio-static": { $: 0 }, adobeioruntime: { $: 0 }, akadns: { $: 0 }, akamai: { $: 0 }, "akamai-staging": { $: 0 }, akamaiedge: { $: 0 }, "akamaiedge-staging": { $: 0 }, akamaihd: { $: 0 }, "akamaihd-staging": { $: 0 }, akamaiorigin: { $: 0 }, "akamaiorigin-staging": { $: 0 }, akamaized: { $: 0 }, "akamaized-staging": { $: 0 }, edgekey: { $: 0 }, "edgekey-staging": { $: 0 }, edgesuite: { $: 0 }, "edgesuite-staging": { $: 0 }, alwaysdata: { $: 0 }, myamaze: { $: 0 }, cloudfront: { $: 0 }, appudo: { $: 0 }, "atlassian-dev": { prod: { cdn: { $: 0 } } }, myfritz: { $: 0 }, onavstack: { $: 0 }, shopselect: { $: 0 }, blackbaudcdn: { $: 0 }, boomla: { $: 0 }, bplaced: { $: 0 }, square7: { $: 0 }, cdn77: { r: { $: 0 } }, "cdn77-ssl": { $: 0 }, gb: { $: 0 }, hu: { $: 0 }, jp: { $: 0 }, se: { $: 0 }, uk: { $: 0 }, clickrising: { $: 0 }, "ddns-ip": { $: 0 }, "dns-cloud": { $: 0 }, "dns-dynamic": { $: 0 }, cloudaccess: { $: 0 }, cloudflare: { $: 0, cdn: { $: 0 } }, cloudflareanycast: { cdn: { $: 0 } }, cloudflarecn: { cdn: { $: 0 } }, cloudflareglobal: { cdn: { $: 0 } }, ctfcloud: { $: 0 }, "feste-ip": { $: 0 }, "knx-server": { $: 0 }, "static-access": { $: 0 }, cryptonomic: { "*": { $: 0 } }, dattolocal: { $: 0 }, mydatto: { $: 0 }, debian: { $: 0 }, definima: { $: 0 }, deno: { $: 0 }, "at-band-camp": { $: 0 }, blogdns: { $: 0 }, "broke-it": { $: 0 }, buyshouses: { $: 0 }, dnsalias: { $: 0 }, dnsdojo: { $: 0 }, "does-it": { $: 0 }, dontexist: { $: 0 }, dynalias: { $: 0 }, dynathome: { $: 0 }, endofinternet: { $: 0 }, "from-az": { $: 0 }, "from-co": { $: 0 }, "from-la": { $: 0 }, "from-ny": { $: 0 }, "gets-it": { $: 0 }, "ham-radio-op": { $: 0 }, homeftp: { $: 0 }, homeip: { $: 0 }, homelinux: { $: 0 }, homeunix: { $: 0 }, "in-the-band": { $: 0 }, "is-a-chef": { $: 0 }, "is-a-geek": { $: 0 }, "isa-geek": { $: 0 }, "kicks-ass": { $: 0 }, "office-on-the": { $: 0 }, podzone: { $: 0 }, "scrapper-site": { $: 0 }, selfip: { $: 0 }, "sells-it": { $: 0 }, servebbs: { $: 0 }, serveftp: { $: 0 }, thruhere: { $: 0 }, webhop: { $: 0 }, casacam: { $: 0 }, dynu: { $: 0 }, dynv6: { $: 0 }, twmail: { $: 0 }, ru: { $: 0 }, channelsdvr: { $: 0, u: { $: 0 } }, fastly: { freetls: { $: 0 }, map: { $: 0 }, prod: { a: { $: 0 }, global: { $: 0 } }, ssl: { a: { $: 0 }, b: { $: 0 }, global: { $: 0 } } }, fastlylb: { $: 0, map: { $: 0 } }, edgeapp: { $: 0 }, "keyword-on": { $: 0 }, "live-on": { $: 0 }, "server-on": { $: 0 }, "cdn-edges": { $: 0 }, heteml: { $: 0 }, cloudfunctions: { $: 0 }, "grafana-dev": { $: 0 }, iobb: { $: 0 }, moonscale: { $: 0 }, "in-dsl": { $: 0 }, "in-vpn": { $: 0 }, oninferno: { $: 0 }, botdash: { $: 0 }, "apps-1and1": { $: 0 }, ipifony: { $: 0 }, cloudjiffy: { $: 0, "fra1-de": { $: 0 }, "west1-us": { $: 0 } }, elastx: { "jls-sto1": { $: 0 }, "jls-sto2": { $: 0 }, "jls-sto3": { $: 0 } }, massivegrid: { paas: { "fr-1": { $: 0 }, "lon-1": { $: 0 }, "lon-2": { $: 0 }, "ny-1": { $: 0 }, "ny-2": { $: 0 }, "sg-1": { $: 0 } } }, saveincloud: { jelastic: { $: 0 }, "nordeste-idc": { $: 0 } }, scaleforce: { j: { $: 0 } }, kinghost: { $: 0 }, uni5: { $: 0 }, krellian: { $: 0 }, ggff: { $: 0 }, localcert: { $: 0 }, localto: { "*": { $: 0 } }, barsy: { $: 0 }, luyani: { $: 0 }, memset: { $: 0 }, "azure-api": { $: 0 }, "azure-mobile": { $: 0 }, azureedge: { $: 0 }, azurefd: { $: 0 }, azurestaticapps: { "1": { $: 0 }, "2": { $: 0 }, "3": { $: 0 }, "4": { $: 0 }, "5": { $: 0 }, "6": { $: 0 }, "7": { $: 0 }, $: 0, centralus: { $: 0 }, eastasia: { $: 0 }, eastus2: { $: 0 }, westeurope: { $: 0 }, westus2: { $: 0 } }, azurewebsites: { $: 0 }, cloudapp: { $: 0 }, trafficmanager: { $: 0 }, windows: { core: { blob: { $: 0 } }, servicebus: { $: 0 } }, mynetname: { sn: { $: 0 } }, routingthecloud: { $: 0 }, bounceme: { $: 0 }, ddns: { $: 0 }, "eating-organic": { $: 0 }, mydissent: { $: 0 }, myeffect: { $: 0 }, mymediapc: { $: 0 }, mypsx: { $: 0 }, mysecuritycamera: { $: 0 }, nhlfan: { $: 0 }, "no-ip": { $: 0 }, pgafan: { $: 0 }, privatizehealthinsurance: { $: 0 }, redirectme: { $: 0 }, serveblog: { $: 0 }, serveminecraft: { $: 0 }, sytes: { $: 0 }, dnsup: { $: 0 }, hicam: { $: 0 }, "now-dns": { $: 0 }, ownip: { $: 0 }, vpndns: { $: 0 }, cloudycluster: { $: 0 }, ovh: { hosting: { "*": { $: 0 } }, webpaas: { "*": { $: 0 } } }, rackmaze: { $: 0 }, myradweb: { $: 0 }, in: { $: 0 }, "subsc-pay": { $: 0 }, squares: { $: 0 }, schokokeks: { $: 0 }, "firewall-gateway": { $: 0 }, seidat: { $: 0 }, senseering: { $: 0 }, siteleaf: { $: 0 }, mafelo: { $: 0 }, myspreadshop: { $: 0 }, "vps-host": { $: 0, jelastic: { atl: { $: 0 }, njs: { $: 0 }, ric: { $: 0 } } }, srcf: { soc: { $: 0 }, user: { $: 0 } }, supabase: { $: 0 }, dsmynas: { $: 0 }, familyds: { $: 0 }, ts: { $: 0, c: { "*": { $: 0 } } }, torproject: { $: 0, pages: { $: 0 } }, vusercontent: { $: 0 }, "reserve-online": { $: 0 }, "community-pro": { $: 0 }, meinforum: { $: 0 }, yandexcloud: { $: 0, storage: { $: 0 }, website: { $: 0 } }, za: { $: 0 } }, nf: { $: 0, arts: { $: 0 }, com: { $: 0 }, firm: { $: 0 }, info: { $: 0 }, net: { $: 0 }, other: { $: 0 }, per: { $: 0 }, rec: { $: 0 }, store: { $: 0 }, web: { $: 0 } }, ng: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, i: { $: 0 }, mil: { $: 0 }, mobi: { $: 0 }, name: { $: 0 }, net: { $: 0 }, org: { $: 0 }, sch: { $: 0 }, biz: { $: 0, co: { $: 0 }, dl: { $: 0 }, go: { $: 0 }, lg: { $: 0 }, on: { $: 0 } }, col: { $: 0 }, firm: { $: 0 }, gen: { $: 0 }, ltd: { $: 0 }, ngo: { $: 0 }, plc: { $: 0 } }, ni: { $: 0, ac: { $: 0 }, biz: { $: 0 }, co: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, gob: { $: 0 }, in: { $: 0 }, info: { $: 0 }, int: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, nom: { $: 0 }, org: { $: 0 }, web: { $: 0 } }, nl: { $: 0, co: { $: 0 }, "hosting-cluster": { $: 0 }, gov: { $: 0 }, khplay: { $: 0 }, "123website": { $: 0 }, myspreadshop: { $: 0 }, transurl: { "*": { $: 0 } }, cistron: { $: 0 }, demon: { $: 0 } }, no: { $: 0, fhs: { $: 0 }, folkebibl: { $: 0 }, fylkesbibl: { $: 0 }, idrett: { $: 0 }, museum: { $: 0 }, priv: { $: 0 }, vgs: { $: 0 }, dep: { $: 0 }, herad: { $: 0 }, kommune: { $: 0 }, mil: { $: 0 }, stat: { $: 0 }, aa: { $: 0, gs: { $: 0 } }, ah: { $: 0, gs: { $: 0 } }, bu: { $: 0, gs: { $: 0 } }, fm: { $: 0, gs: { $: 0 } }, hl: { $: 0, gs: { $: 0 } }, hm: { $: 0, gs: { $: 0 } }, "jan-mayen": { $: 0, gs: { $: 0 } }, mr: { $: 0, gs: { $: 0 } }, nl: { $: 0, gs: { $: 0 } }, nt: { $: 0, gs: { $: 0 } }, of: { $: 0, gs: { $: 0 } }, ol: { $: 0, gs: { $: 0 } }, oslo: { $: 0, gs: { $: 0 } }, rl: { $: 0, gs: { $: 0 } }, sf: { $: 0, gs: { $: 0 } }, st: { $: 0, gs: { $: 0 } }, svalbard: { $: 0, gs: { $: 0 } }, tm: { $: 0, gs: { $: 0 } }, tr: { $: 0, gs: { $: 0 } }, va: { $: 0, gs: { $: 0 } }, vf: { $: 0, gs: { $: 0 } }, akrehamn: { $: 0 }, "xn--krehamn-dxa": { $: 0 }, algard: { $: 0 }, "xn--lgrd-poac": { $: 0 }, arna: { $: 0 }, bronnoysund: { $: 0 }, "xn--brnnysund-m8ac": { $: 0 }, brumunddal: { $: 0 }, bryne: { $: 0 }, drobak: { $: 0 }, "xn--drbak-wua": { $: 0 }, egersund: { $: 0 }, fetsund: { $: 0 }, floro: { $: 0 }, "xn--flor-jra": { $: 0 }, fredrikstad: { $: 0 }, hokksund: { $: 0 }, honefoss: { $: 0 }, "xn--hnefoss-q1a": { $: 0 }, jessheim: { $: 0 }, jorpeland: { $: 0 }, "xn--jrpeland-54a": { $: 0 }, kirkenes: { $: 0 }, kopervik: { $: 0 }, krokstadelva: { $: 0 }, langevag: { $: 0 }, "xn--langevg-jxa": { $: 0 }, leirvik: { $: 0 }, mjondalen: { $: 0 }, "xn--mjndalen-64a": { $: 0 }, "mo-i-rana": { $: 0 }, mosjoen: { $: 0 }, "xn--mosjen-eya": { $: 0 }, nesoddtangen: { $: 0 }, orkanger: { $: 0 }, osoyro: { $: 0 }, "xn--osyro-wua": { $: 0 }, raholt: { $: 0 }, "xn--rholt-mra": { $: 0 }, sandnessjoen: { $: 0 }, "xn--sandnessjen-ogb": { $: 0 }, skedsmokorset: { $: 0 }, slattum: { $: 0 }, spjelkavik: { $: 0 }, stathelle: { $: 0 }, stavern: { $: 0 }, stjordalshalsen: { $: 0 }, "xn--stjrdalshalsen-sqb": { $: 0 }, tananger: { $: 0 }, tranby: { $: 0 }, vossevangen: { $: 0 }, aarborte: { $: 0 }, aejrie: { $: 0 }, afjord: { $: 0 }, "xn--fjord-lra": { $: 0 }, agdenes: { $: 0 }, akershus: { nes: { $: 0 } }, aknoluokta: { $: 0 }, "xn--koluokta-7ya57h": { $: 0 }, al: { $: 0 }, "xn--l-1fa": { $: 0 }, alaheadju: { $: 0 }, "xn--laheadju-7ya": { $: 0 }, alesund: { $: 0 }, "xn--lesund-hua": { $: 0 }, alstahaug: { $: 0 }, alta: { $: 0 }, "xn--lt-liac": { $: 0 }, alvdal: { $: 0 }, amli: { $: 0 }, "xn--mli-tla": { $: 0 }, amot: { $: 0 }, "xn--mot-tla": { $: 0 }, andasuolo: { $: 0 }, andebu: { $: 0 }, andoy: { $: 0 }, "xn--andy-ira": { $: 0 }, ardal: { $: 0 }, "xn--rdal-poa": { $: 0 }, aremark: { $: 0 }, arendal: { $: 0 }, "xn--s-1fa": { $: 0 }, aseral: { $: 0 }, "xn--seral-lra": { $: 0 }, asker: { $: 0 }, askim: { $: 0 }, askoy: { $: 0 }, "xn--asky-ira": { $: 0 }, askvoll: { $: 0 }, asnes: { $: 0 }, "xn--snes-poa": { $: 0 }, audnedaln: { $: 0 }, aukra: { $: 0 }, aure: { $: 0 }, aurland: { $: 0 }, "aurskog-holand": { $: 0 }, "xn--aurskog-hland-jnb": { $: 0 }, austevoll: { $: 0 }, austrheim: { $: 0 }, averoy: { $: 0 }, "xn--avery-yua": { $: 0 }, badaddja: { $: 0 }, "xn--bdddj-mrabd": { $: 0 }, "xn--brum-voa": { $: 0 }, bahcavuotna: { $: 0 }, "xn--bhcavuotna-s4a": { $: 0 }, bahccavuotna: { $: 0 }, "xn--bhccavuotna-k7a": { $: 0 }, baidar: { $: 0 }, "xn--bidr-5nac": { $: 0 }, bajddar: { $: 0 }, "xn--bjddar-pta": { $: 0 }, balat: { $: 0 }, "xn--blt-elab": { $: 0 }, balestrand: { $: 0 }, ballangen: { $: 0 }, balsfjord: { $: 0 }, bamble: { $: 0 }, bardu: { $: 0 }, barum: { $: 0 }, batsfjord: { $: 0 }, "xn--btsfjord-9za": { $: 0 }, bearalvahki: { $: 0 }, "xn--bearalvhki-y4a": { $: 0 }, beardu: { $: 0 }, beiarn: { $: 0 }, berg: { $: 0 }, bergen: { $: 0 }, berlevag: { $: 0 }, "xn--berlevg-jxa": { $: 0 }, bievat: { $: 0 }, "xn--bievt-0qa": { $: 0 }, bindal: { $: 0 }, birkenes: { $: 0 }, bjarkoy: { $: 0 }, "xn--bjarky-fya": { $: 0 }, bjerkreim: { $: 0 }, bjugn: { $: 0 }, bodo: { $: 0 }, "xn--bod-2na": { $: 0 }, bokn: { $: 0 }, bomlo: { $: 0 }, "xn--bmlo-gra": { $: 0 }, bremanger: { $: 0 }, bronnoy: { $: 0 }, "xn--brnny-wuac": { $: 0 }, budejju: { $: 0 }, buskerud: { nes: { $: 0 } }, bygland: { $: 0 }, bykle: { $: 0 }, cahcesuolo: { $: 0 }, "xn--hcesuolo-7ya35b": { $: 0 }, davvenjarga: { $: 0 }, "xn--davvenjrga-y4a": { $: 0 }, davvesiida: { $: 0 }, deatnu: { $: 0 }, dielddanuorri: { $: 0 }, divtasvuodna: { $: 0 }, divttasvuotna: { $: 0 }, donna: { $: 0 }, "xn--dnna-gra": { $: 0 }, dovre: { $: 0 }, drammen: { $: 0 }, drangedal: { $: 0 }, dyroy: { $: 0 }, "xn--dyry-ira": { $: 0 }, eid: { $: 0 }, eidfjord: { $: 0 }, eidsberg: { $: 0 }, eidskog: { $: 0 }, eidsvoll: { $: 0 }, eigersund: { $: 0 }, elverum: { $: 0 }, enebakk: { $: 0 }, engerdal: { $: 0 }, etne: { $: 0 }, etnedal: { $: 0 }, evenassi: { $: 0 }, "xn--eveni-0qa01ga": { $: 0 }, evenes: { $: 0 }, "evje-og-hornnes": { $: 0 }, farsund: { $: 0 }, fauske: { $: 0 }, fedje: { $: 0 }, fet: { $: 0 }, finnoy: { $: 0 }, "xn--finny-yua": { $: 0 }, fitjar: { $: 0 }, fjaler: { $: 0 }, fjell: { $: 0 }, fla: { $: 0 }, "xn--fl-zia": { $: 0 }, flakstad: { $: 0 }, flatanger: { $: 0 }, flekkefjord: { $: 0 }, flesberg: { $: 0 }, flora: { $: 0 }, folldal: { $: 0 }, forde: { $: 0 }, "xn--frde-gra": { $: 0 }, forsand: { $: 0 }, fosnes: { $: 0 }, "xn--frna-woa": { $: 0 }, frana: { $: 0 }, frei: { $: 0 }, frogn: { $: 0 }, froland: { $: 0 }, frosta: { $: 0 }, froya: { $: 0 }, "xn--frya-hra": { $: 0 }, fuoisku: { $: 0 }, fuossko: { $: 0 }, fusa: { $: 0 }, fyresdal: { $: 0 }, gaivuotna: { $: 0 }, "xn--givuotna-8ya": { $: 0 }, galsa: { $: 0 }, "xn--gls-elac": { $: 0 }, gamvik: { $: 0 }, gangaviika: { $: 0 }, "xn--ggaviika-8ya47h": { $: 0 }, gaular: { $: 0 }, gausdal: { $: 0 }, giehtavuoatna: { $: 0 }, gildeskal: { $: 0 }, "xn--gildeskl-g0a": { $: 0 }, giske: { $: 0 }, gjemnes: { $: 0 }, gjerdrum: { $: 0 }, gjerstad: { $: 0 }, gjesdal: { $: 0 }, gjovik: { $: 0 }, "xn--gjvik-wua": { $: 0 }, gloppen: { $: 0 }, gol: { $: 0 }, gran: { $: 0 }, grane: { $: 0 }, granvin: { $: 0 }, gratangen: { $: 0 }, grimstad: { $: 0 }, grong: { $: 0 }, grue: { $: 0 }, gulen: { $: 0 }, guovdageaidnu: { $: 0 }, ha: { $: 0 }, "xn--h-2fa": { $: 0 }, habmer: { $: 0 }, "xn--hbmer-xqa": { $: 0 }, hadsel: { $: 0 }, "xn--hgebostad-g3a": { $: 0 }, hagebostad: { $: 0 }, halden: { $: 0 }, halsa: { $: 0 }, hamar: { $: 0 }, hamaroy: { $: 0 }, hammarfeasta: { $: 0 }, "xn--hmmrfeasta-s4ac": { $: 0 }, hammerfest: { $: 0 }, hapmir: { $: 0 }, "xn--hpmir-xqa": { $: 0 }, haram: { $: 0 }, hareid: { $: 0 }, harstad: { $: 0 }, hasvik: { $: 0 }, hattfjelldal: { $: 0 }, haugesund: { $: 0 }, hedmark: { os: { $: 0 }, valer: { $: 0 }, "xn--vler-qoa": { $: 0 } }, hemne: { $: 0 }, hemnes: { $: 0 }, hemsedal: { $: 0 }, hitra: { $: 0 }, hjartdal: { $: 0 }, hjelmeland: { $: 0 }, hobol: { $: 0 }, "xn--hobl-ira": { $: 0 }, hof: { $: 0 }, hol: { $: 0 }, hole: { $: 0 }, holmestrand: { $: 0 }, holtalen: { $: 0 }, "xn--holtlen-hxa": { $: 0 }, hordaland: { os: { $: 0 } }, hornindal: { $: 0 }, horten: { $: 0 }, hoyanger: { $: 0 }, "xn--hyanger-q1a": { $: 0 }, hoylandet: { $: 0 }, "xn--hylandet-54a": { $: 0 }, hurdal: { $: 0 }, hurum: { $: 0 }, hvaler: { $: 0 }, hyllestad: { $: 0 }, ibestad: { $: 0 }, inderoy: { $: 0 }, "xn--indery-fya": { $: 0 }, iveland: { $: 0 }, ivgu: { $: 0 }, jevnaker: { $: 0 }, jolster: { $: 0 }, "xn--jlster-bya": { $: 0 }, jondal: { $: 0 }, kafjord: { $: 0 }, "xn--kfjord-iua": { $: 0 }, karasjohka: { $: 0 }, "xn--krjohka-hwab49j": { $: 0 }, karasjok: { $: 0 }, karlsoy: { $: 0 }, karmoy: { $: 0 }, "xn--karmy-yua": { $: 0 }, kautokeino: { $: 0 }, klabu: { $: 0 }, "xn--klbu-woa": { $: 0 }, klepp: { $: 0 }, kongsberg: { $: 0 }, kongsvinger: { $: 0 }, kraanghke: { $: 0 }, "xn--kranghke-b0a": { $: 0 }, kragero: { $: 0 }, "xn--krager-gya": { $: 0 }, kristiansand: { $: 0 }, kristiansund: { $: 0 }, krodsherad: { $: 0 }, "xn--krdsherad-m8a": { $: 0 }, "xn--kvfjord-nxa": { $: 0 }, "xn--kvnangen-k0a": { $: 0 }, kvafjord: { $: 0 }, kvalsund: { $: 0 }, kvam: { $: 0 }, kvanangen: { $: 0 }, kvinesdal: { $: 0 }, kvinnherad: { $: 0 }, kviteseid: { $: 0 }, kvitsoy: { $: 0 }, "xn--kvitsy-fya": { $: 0 }, laakesvuemie: { $: 0 }, "xn--lrdal-sra": { $: 0 }, lahppi: { $: 0 }, "xn--lhppi-xqa": { $: 0 }, lardal: { $: 0 }, larvik: { $: 0 }, lavagis: { $: 0 }, lavangen: { $: 0 }, leangaviika: { $: 0 }, "xn--leagaviika-52b": { $: 0 }, lebesby: { $: 0 }, leikanger: { $: 0 }, leirfjord: { $: 0 }, leka: { $: 0 }, leksvik: { $: 0 }, lenvik: { $: 0 }, lerdal: { $: 0 }, lesja: { $: 0 }, levanger: { $: 0 }, lier: { $: 0 }, lierne: { $: 0 }, lillehammer: { $: 0 }, lillesand: { $: 0 }, lindas: { $: 0 }, "xn--linds-pra": { $: 0 }, lindesnes: { $: 0 }, loabat: { $: 0 }, "xn--loabt-0qa": { $: 0 }, lodingen: { $: 0 }, "xn--ldingen-q1a": { $: 0 }, lom: { $: 0 }, loppa: { $: 0 }, lorenskog: { $: 0 }, "xn--lrenskog-54a": { $: 0 }, loten: { $: 0 }, "xn--lten-gra": { $: 0 }, lund: { $: 0 }, lunner: { $: 0 }, luroy: { $: 0 }, "xn--lury-ira": { $: 0 }, luster: { $: 0 }, lyngdal: { $: 0 }, lyngen: { $: 0 }, malatvuopmi: { $: 0 }, "xn--mlatvuopmi-s4a": { $: 0 }, malselv: { $: 0 }, "xn--mlselv-iua": { $: 0 }, malvik: { $: 0 }, mandal: { $: 0 }, marker: { $: 0 }, marnardal: { $: 0 }, masfjorden: { $: 0 }, masoy: { $: 0 }, "xn--msy-ula0h": { $: 0 }, "matta-varjjat": { $: 0 }, "xn--mtta-vrjjat-k7af": { $: 0 }, meland: { $: 0 }, meldal: { $: 0 }, melhus: { $: 0 }, meloy: { $: 0 }, "xn--mely-ira": { $: 0 }, meraker: { $: 0 }, "xn--merker-kua": { $: 0 }, midsund: { $: 0 }, "midtre-gauldal": { $: 0 }, moareke: { $: 0 }, "xn--moreke-jua": { $: 0 }, modalen: { $: 0 }, modum: { $: 0 }, molde: { $: 0 }, "more-og-romsdal": { heroy: { $: 0 }, sande: { $: 0 } }, "xn--mre-og-romsdal-qqb": { "xn--hery-ira": { $: 0 }, sande: { $: 0 } }, moskenes: { $: 0 }, moss: { $: 0 }, mosvik: { $: 0 }, muosat: { $: 0 }, "xn--muost-0qa": { $: 0 }, naamesjevuemie: { $: 0 }, "xn--nmesjevuemie-tcba": { $: 0 }, "xn--nry-yla5g": { $: 0 }, namdalseid: { $: 0 }, namsos: { $: 0 }, namsskogan: { $: 0 }, nannestad: { $: 0 }, naroy: { $: 0 }, narviika: { $: 0 }, narvik: { $: 0 }, naustdal: { $: 0 }, navuotna: { $: 0 }, "xn--nvuotna-hwa": { $: 0 }, "nedre-eiker": { $: 0 }, nesna: { $: 0 }, nesodden: { $: 0 }, nesseby: { $: 0 }, nesset: { $: 0 }, nissedal: { $: 0 }, nittedal: { $: 0 }, "nord-aurdal": { $: 0 }, "nord-fron": { $: 0 }, "nord-odal": { $: 0 }, norddal: { $: 0 }, nordkapp: { $: 0 }, nordland: { bo: { $: 0 }, "xn--b-5ga": { $: 0 }, heroy: { $: 0 }, "xn--hery-ira": { $: 0 } }, "nordre-land": { $: 0 }, nordreisa: { $: 0 }, "nore-og-uvdal": { $: 0 }, notodden: { $: 0 }, notteroy: { $: 0 }, "xn--nttery-byae": { $: 0 }, odda: { $: 0 }, oksnes: { $: 0 }, "xn--ksnes-uua": { $: 0 }, omasvuotna: { $: 0 }, oppdal: { $: 0 }, oppegard: { $: 0 }, "xn--oppegrd-ixa": { $: 0 }, orkdal: { $: 0 }, orland: { $: 0 }, "xn--rland-uua": { $: 0 }, orskog: { $: 0 }, "xn--rskog-uua": { $: 0 }, orsta: { $: 0 }, "xn--rsta-fra": { $: 0 }, osen: { $: 0 }, osteroy: { $: 0 }, "xn--ostery-fya": { $: 0 }, ostfold: { valer: { $: 0 } }, "xn--stfold-9xa": { "xn--vler-qoa": { $: 0 } }, "ostre-toten": { $: 0 }, "xn--stre-toten-zcb": { $: 0 }, overhalla: { $: 0 }, "ovre-eiker": { $: 0 }, "xn--vre-eiker-k8a": { $: 0 }, oyer: { $: 0 }, "xn--yer-zna": { $: 0 }, oygarden: { $: 0 }, "xn--ygarden-p1a": { $: 0 }, "oystre-slidre": { $: 0 }, "xn--ystre-slidre-ujb": { $: 0 }, porsanger: { $: 0 }, porsangu: { $: 0 }, "xn--porsgu-sta26f": { $: 0 }, porsgrunn: { $: 0 }, rade: { $: 0 }, "xn--rde-ula": { $: 0 }, radoy: { $: 0 }, "xn--rady-ira": { $: 0 }, "xn--rlingen-mxa": { $: 0 }, rahkkeravju: { $: 0 }, "xn--rhkkervju-01af": { $: 0 }, raisa: { $: 0 }, "xn--risa-5na": { $: 0 }, rakkestad: { $: 0 }, ralingen: { $: 0 }, rana: { $: 0 }, randaberg: { $: 0 }, rauma: { $: 0 }, rendalen: { $: 0 }, rennebu: { $: 0 }, rennesoy: { $: 0 }, "xn--rennesy-v1a": { $: 0 }, rindal: { $: 0 }, ringebu: { $: 0 }, ringerike: { $: 0 }, ringsaker: { $: 0 }, risor: { $: 0 }, "xn--risr-ira": { $: 0 }, rissa: { $: 0 }, roan: { $: 0 }, rodoy: { $: 0 }, "xn--rdy-0nab": { $: 0 }, rollag: { $: 0 }, romsa: { $: 0 }, romskog: { $: 0 }, "xn--rmskog-bya": { $: 0 }, roros: { $: 0 }, "xn--rros-gra": { $: 0 }, rost: { $: 0 }, "xn--rst-0na": { $: 0 }, royken: { $: 0 }, "xn--ryken-vua": { $: 0 }, royrvik: { $: 0 }, "xn--ryrvik-bya": { $: 0 }, ruovat: { $: 0 }, rygge: { $: 0 }, salangen: { $: 0 }, salat: { $: 0 }, "xn--slat-5na": { $: 0 }, "xn--slt-elab": { $: 0 }, saltdal: { $: 0 }, samnanger: { $: 0 }, sandefjord: { $: 0 }, sandnes: { $: 0 }, sandoy: { $: 0 }, "xn--sandy-yua": { $: 0 }, sarpsborg: { $: 0 }, sauda: { $: 0 }, sauherad: { $: 0 }, sel: { $: 0 }, selbu: { $: 0 }, selje: { $: 0 }, seljord: { $: 0 }, siellak: { $: 0 }, sigdal: { $: 0 }, siljan: { $: 0 }, sirdal: { $: 0 }, skanit: { $: 0 }, "xn--sknit-yqa": { $: 0 }, skanland: { $: 0 }, "xn--sknland-fxa": { $: 0 }, skaun: { $: 0 }, skedsmo: { $: 0 }, ski: { $: 0 }, skien: { $: 0 }, skierva: { $: 0 }, "xn--skierv-uta": { $: 0 }, skiptvet: { $: 0 }, skjak: { $: 0 }, "xn--skjk-soa": { $: 0 }, skjervoy: { $: 0 }, "xn--skjervy-v1a": { $: 0 }, skodje: { $: 0 }, smola: { $: 0 }, "xn--smla-hra": { $: 0 }, snaase: { $: 0 }, "xn--snase-nra": { $: 0 }, snasa: { $: 0 }, "xn--snsa-roa": { $: 0 }, snillfjord: { $: 0 }, snoasa: { $: 0 }, sogndal: { $: 0 }, sogne: { $: 0 }, "xn--sgne-gra": { $: 0 }, sokndal: { $: 0 }, sola: { $: 0 }, solund: { $: 0 }, somna: { $: 0 }, "xn--smna-gra": { $: 0 }, "sondre-land": { $: 0 }, "xn--sndre-land-0cb": { $: 0 }, songdalen: { $: 0 }, "sor-aurdal": { $: 0 }, "xn--sr-aurdal-l8a": { $: 0 }, "sor-fron": { $: 0 }, "xn--sr-fron-q1a": { $: 0 }, "sor-odal": { $: 0 }, "xn--sr-odal-q1a": { $: 0 }, "sor-varanger": { $: 0 }, "xn--sr-varanger-ggb": { $: 0 }, sorfold: { $: 0 }, "xn--srfold-bya": { $: 0 }, sorreisa: { $: 0 }, "xn--srreisa-q1a": { $: 0 }, sortland: { $: 0 }, sorum: { $: 0 }, "xn--srum-gra": { $: 0 }, spydeberg: { $: 0 }, stange: { $: 0 }, stavanger: { $: 0 }, steigen: { $: 0 }, steinkjer: { $: 0 }, stjordal: { $: 0 }, "xn--stjrdal-s1a": { $: 0 }, stokke: { $: 0 }, "stor-elvdal": { $: 0 }, stord: { $: 0 }, stordal: { $: 0 }, storfjord: { $: 0 }, strand: { $: 0 }, stranda: { $: 0 }, stryn: { $: 0 }, sula: { $: 0 }, suldal: { $: 0 }, sund: { $: 0 }, sunndal: { $: 0 }, surnadal: { $: 0 }, sveio: { $: 0 }, svelvik: { $: 0 }, sykkylven: { $: 0 }, tana: { $: 0 }, telemark: { bo: { $: 0 }, "xn--b-5ga": { $: 0 } }, time: { $: 0 }, tingvoll: { $: 0 }, tinn: { $: 0 }, tjeldsund: { $: 0 }, tjome: { $: 0 }, "xn--tjme-hra": { $: 0 }, tokke: { $: 0 }, tolga: { $: 0 }, tonsberg: { $: 0 }, "xn--tnsberg-q1a": { $: 0 }, torsken: { $: 0 }, "xn--trna-woa": { $: 0 }, trana: { $: 0 }, tranoy: { $: 0 }, "xn--trany-yua": { $: 0 }, troandin: { $: 0 }, trogstad: { $: 0 }, "xn--trgstad-r1a": { $: 0 }, tromsa: { $: 0 }, tromso: { $: 0 }, "xn--troms-zua": { $: 0 }, trondheim: { $: 0 }, trysil: { $: 0 }, tvedestrand: { $: 0 }, tydal: { $: 0 }, tynset: { $: 0 }, tysfjord: { $: 0 }, tysnes: { $: 0 }, "xn--tysvr-vra": { $: 0 }, tysvar: { $: 0 }, ullensaker: { $: 0 }, ullensvang: { $: 0 }, ulvik: { $: 0 }, unjarga: { $: 0 }, "xn--unjrga-rta": { $: 0 }, utsira: { $: 0 }, vaapste: { $: 0 }, vadso: { $: 0 }, "xn--vads-jra": { $: 0 }, "xn--vry-yla5g": { $: 0 }, vaga: { $: 0 }, "xn--vg-yiab": { $: 0 }, vagan: { $: 0 }, "xn--vgan-qoa": { $: 0 }, vagsoy: { $: 0 }, "xn--vgsy-qoa0j": { $: 0 }, vaksdal: { $: 0 }, valle: { $: 0 }, vang: { $: 0 }, vanylven: { $: 0 }, vardo: { $: 0 }, "xn--vard-jra": { $: 0 }, varggat: { $: 0 }, "xn--vrggt-xqad": { $: 0 }, varoy: { $: 0 }, vefsn: { $: 0 }, vega: { $: 0 }, vegarshei: { $: 0 }, "xn--vegrshei-c0a": { $: 0 }, vennesla: { $: 0 }, verdal: { $: 0 }, verran: { $: 0 }, vestby: { $: 0 }, vestfold: { sande: { $: 0 } }, vestnes: { $: 0 }, "vestre-slidre": { $: 0 }, "vestre-toten": { $: 0 }, vestvagoy: { $: 0 }, "xn--vestvgy-ixa6o": { $: 0 }, vevelstad: { $: 0 }, vik: { $: 0 }, vikna: { $: 0 }, vindafjord: { $: 0 }, voagat: { $: 0 }, volda: { $: 0 }, voss: { $: 0 }, co: { $: 0 }, "123hjemmeside": { $: 0 }, myspreadshop: { $: 0 } }, np: { "*": { $: 0 } }, nr: { $: 0, biz: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, info: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, nu: { $: 0, merseine: { $: 0 }, mine: { $: 0 }, shacknet: { $: 0 }, enterprisecloud: { $: 0 } }, nz: { $: 0, ac: { $: 0 }, co: { $: 0 }, cri: { $: 0 }, geek: { $: 0 }, gen: { $: 0 }, govt: { $: 0 }, health: { $: 0 }, iwi: { $: 0 }, kiwi: { $: 0 }, maori: { $: 0 }, "xn--mori-qsa": { $: 0 }, mil: { $: 0 }, net: { $: 0 }, org: { $: 0 }, parliament: { $: 0 }, school: { $: 0 }, cloudns: { $: 0 } }, om: { $: 0, co: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, med: { $: 0 }, museum: { $: 0 }, net: { $: 0 }, org: { $: 0 }, pro: { $: 0 } }, onion: { $: 0 }, org: { $: 0, altervista: { $: 0 }, pimienta: { $: 0 }, poivron: { $: 0 }, potager: { $: 0 }, sweetpepper: { $: 0 }, cdn77: { c: { $: 0 }, rsc: { $: 0 } }, "cdn77-secure": { origin: { ssl: { $: 0 } } }, ae: { $: 0 }, cloudns: { $: 0 }, "ip-dynamic": { $: 0 }, ddnss: { $: 0 }, dpdns: { $: 0 }, duckdns: { $: 0 }, tunk: { $: 0 }, blogdns: { $: 0 }, blogsite: { $: 0 }, boldlygoingnowhere: { $: 0 }, dnsalias: { $: 0 }, dnsdojo: { $: 0 }, doesntexist: { $: 0 }, dontexist: { $: 0 }, doomdns: { $: 0 }, dvrdns: { $: 0 }, dynalias: { $: 0 }, dyndns: { $: 0, go: { $: 0 }, home: { $: 0 } }, endofinternet: { $: 0 }, endoftheinternet: { $: 0 }, "from-me": { $: 0 }, "game-host": { $: 0 }, gotdns: { $: 0 }, "hobby-site": { $: 0 }, homedns: { $: 0 }, homeftp: { $: 0 }, homelinux: { $: 0 }, homeunix: { $: 0 }, "is-a-bruinsfan": { $: 0 }, "is-a-candidate": { $: 0 }, "is-a-celticsfan": { $: 0 }, "is-a-chef": { $: 0 }, "is-a-geek": { $: 0 }, "is-a-knight": { $: 0 }, "is-a-linux-user": { $: 0 }, "is-a-patsfan": { $: 0 }, "is-a-soxfan": { $: 0 }, "is-found": { $: 0 }, "is-lost": { $: 0 }, "is-saved": { $: 0 }, "is-very-bad": { $: 0 }, "is-very-evil": { $: 0 }, "is-very-good": { $: 0 }, "is-very-nice": { $: 0 }, "is-very-sweet": { $: 0 }, "isa-geek": { $: 0 }, "kicks-ass": { $: 0 }, misconfused: { $: 0 }, podzone: { $: 0 }, readmyblog: { $: 0 }, selfip: { $: 0 }, sellsyourhome: { $: 0 }, servebbs: { $: 0 }, serveftp: { $: 0 }, servegame: { $: 0 }, "stuff-4-sale": { $: 0 }, webhop: { $: 0 }, accesscam: { $: 0 }, camdvr: { $: 0 }, freeddns: { $: 0 }, mywire: { $: 0 }, webredirect: { $: 0 }, twmail: { $: 0 }, eu: { $: 0, al: { $: 0 }, asso: { $: 0 }, at: { $: 0 }, au: { $: 0 }, be: { $: 0 }, bg: { $: 0 }, ca: { $: 0 }, cd: { $: 0 }, ch: { $: 0 }, cn: { $: 0 }, cy: { $: 0 }, cz: { $: 0 }, de: { $: 0 }, dk: { $: 0 }, edu: { $: 0 }, ee: { $: 0 }, es: { $: 0 }, fi: { $: 0 }, fr: { $: 0 }, gr: { $: 0 }, hr: { $: 0 }, hu: { $: 0 }, ie: { $: 0 }, il: { $: 0 }, in: { $: 0 }, int: { $: 0 }, is: { $: 0 }, it: { $: 0 }, jp: { $: 0 }, kr: { $: 0 }, lt: { $: 0 }, lu: { $: 0 }, lv: { $: 0 }, me: { $: 0 }, mk: { $: 0 }, mt: { $: 0 }, my: { $: 0 }, net: { $: 0 }, ng: { $: 0 }, nl: { $: 0 }, no: { $: 0 }, nz: { $: 0 }, pl: { $: 0 }, pt: { $: 0 }, ro: { $: 0 }, ru: { $: 0 }, se: { $: 0 }, si: { $: 0 }, sk: { $: 0 }, tr: { $: 0 }, uk: { $: 0 }, us: { $: 0 } }, fedorainfracloud: { $: 0 }, fedorapeople: { $: 0 }, fedoraproject: { cloud: { $: 0 }, os: { app: { $: 0 } }, stg: { os: { app: { $: 0 } } } }, freedesktop: { $: 0 }, hatenadiary: { $: 0 }, hepforge: { $: 0 }, "in-dsl": { $: 0 }, "in-vpn": { $: 0 }, js: { $: 0 }, barsy: { $: 0 }, mayfirst: { $: 0 }, routingthecloud: { $: 0 }, bmoattachments: { $: 0 }, "cable-modem": { $: 0 }, collegefan: { $: 0 }, couchpotatofries: { $: 0 }, hopto: { $: 0 }, mlbfan: { $: 0 }, myftp: { $: 0 }, mysecuritycamera: { $: 0 }, nflfan: { $: 0 }, "no-ip": { $: 0 }, "read-books": { $: 0 }, ufcfan: { $: 0 }, zapto: { $: 0 }, dynserv: { $: 0 }, "now-dns": { $: 0 }, "is-local": { $: 0 }, httpbin: { $: 0 }, pubtls: { $: 0 }, jpn: { $: 0 }, "my-firewall": { $: 0 }, myfirewall: { $: 0 }, spdns: { $: 0 }, "small-web": { $: 0 }, dsmynas: { $: 0 }, familyds: { $: 0 }, teckids: { s3: { $: 0 } }, tuxfamily: { $: 0 }, diskstation: { $: 0 }, hk: { $: 0 }, us: { $: 0 }, toolforge: { $: 0 }, wmcloud: { $: 0 }, wmflabs: { $: 0 }, za: { $: 0 } }, pa: { $: 0, abo: { $: 0 }, ac: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, gob: { $: 0 }, ing: { $: 0 }, med: { $: 0 }, net: { $: 0 }, nom: { $: 0 }, org: { $: 0 }, sld: { $: 0 } }, pe: { $: 0, com: { $: 0 }, edu: { $: 0 }, gob: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, nom: { $: 0 }, org: { $: 0 } }, pf: { $: 0, com: { $: 0 }, edu: { $: 0 }, org: { $: 0 } }, pg: { "*": { $: 0 } }, ph: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, i: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, ngo: { $: 0 }, org: { $: 0 }, cloudns: { $: 0 } }, pk: { $: 0, ac: { $: 0 }, biz: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, fam: { $: 0 }, gkp: { $: 0 }, gob: { $: 0 }, gog: { $: 0 }, gok: { $: 0 }, gop: { $: 0 }, gos: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 }, web: { $: 0 } }, pl: { $: 0, com: { $: 0 }, net: { $: 0 }, org: { $: 0 }, agro: { $: 0 }, aid: { $: 0 }, atm: { $: 0 }, auto: { $: 0 }, biz: { $: 0 }, edu: { $: 0 }, gmina: { $: 0 }, gsm: { $: 0 }, info: { $: 0 }, mail: { $: 0 }, media: { $: 0 }, miasta: { $: 0 }, mil: { $: 0 }, nieruchomosci: { $: 0 }, nom: { $: 0 }, pc: { $: 0 }, powiat: { $: 0 }, priv: { $: 0 }, realestate: { $: 0 }, rel: { $: 0 }, sex: { $: 0 }, shop: { $: 0 }, sklep: { $: 0 }, sos: { $: 0 }, szkola: { $: 0 }, targi: { $: 0 }, tm: { $: 0 }, tourism: { $: 0 }, travel: { $: 0 }, turystyka: { $: 0 }, gov: { $: 0, ap: { $: 0 }, griw: { $: 0 }, ic: { $: 0 }, is: { $: 0 }, kmpsp: { $: 0 }, konsulat: { $: 0 }, kppsp: { $: 0 }, kwp: { $: 0 }, kwpsp: { $: 0 }, mup: { $: 0 }, mw: { $: 0 }, oia: { $: 0 }, oirm: { $: 0 }, oke: { $: 0 }, oow: { $: 0 }, oschr: { $: 0 }, oum: { $: 0 }, pa: { $: 0 }, pinb: { $: 0 }, piw: { $: 0 }, po: { $: 0 }, pr: { $: 0 }, psp: { $: 0 }, psse: { $: 0 }, pup: { $: 0 }, rzgw: { $: 0 }, sa: { $: 0 }, sdn: { $: 0 }, sko: { $: 0 }, so: { $: 0 }, sr: { $: 0 }, starostwo: { $: 0 }, ug: { $: 0 }, ugim: { $: 0 }, um: { $: 0 }, umig: { $: 0 }, upow: { $: 0 }, uppo: { $: 0 }, us: { $: 0 }, uw: { $: 0 }, uzs: { $: 0 }, wif: { $: 0 }, wiih: { $: 0 }, winb: { $: 0 }, wios: { $: 0 }, witd: { $: 0 }, wiw: { $: 0 }, wkz: { $: 0 }, wsa: { $: 0 }, wskr: { $: 0 }, wsse: { $: 0 }, wuoz: { $: 0 }, wzmiuw: { $: 0 }, zp: { $: 0 }, zpisdn: { $: 0 } }, augustow: { $: 0 }, "babia-gora": { $: 0 }, bedzin: { $: 0 }, beskidy: { $: 0 }, bialowieza: { $: 0 }, bialystok: { $: 0 }, bielawa: { $: 0 }, bieszczady: { $: 0 }, boleslawiec: { $: 0 }, bydgoszcz: { $: 0 }, bytom: { $: 0 }, cieszyn: { $: 0 }, czeladz: { $: 0 }, czest: { $: 0 }, dlugoleka: { $: 0 }, elblag: { $: 0 }, elk: { $: 0 }, glogow: { $: 0 }, gniezno: { $: 0 }, gorlice: { $: 0 }, grajewo: { $: 0 }, ilawa: { $: 0 }, jaworzno: { $: 0 }, "jelenia-gora": { $: 0 }, jgora: { $: 0 }, kalisz: { $: 0 }, karpacz: { $: 0 }, kartuzy: { $: 0 }, kaszuby: { $: 0 }, katowice: { $: 0 }, "kazimierz-dolny": { $: 0 }, kepno: { $: 0 }, ketrzyn: { $: 0 }, klodzko: { $: 0 }, kobierzyce: { $: 0 }, kolobrzeg: { $: 0 }, konin: { $: 0 }, konskowola: { $: 0 }, kutno: { $: 0 }, lapy: { $: 0 }, lebork: { $: 0 }, legnica: { $: 0 }, lezajsk: { $: 0 }, limanowa: { $: 0 }, lomza: { $: 0 }, lowicz: { $: 0 }, lubin: { $: 0 }, lukow: { $: 0 }, malbork: { $: 0 }, malopolska: { $: 0 }, mazowsze: { $: 0 }, mazury: { $: 0 }, mielec: { $: 0 }, mielno: { $: 0 }, mragowo: { $: 0 }, naklo: { $: 0 }, nowaruda: { $: 0 }, nysa: { $: 0 }, olawa: { $: 0 }, olecko: { $: 0 }, olkusz: { $: 0 }, olsztyn: { $: 0 }, opoczno: { $: 0 }, opole: { $: 0 }, ostroda: { $: 0 }, ostroleka: { $: 0 }, ostrowiec: { $: 0 }, ostrowwlkp: { $: 0 }, pila: { $: 0 }, pisz: { $: 0 }, podhale: { $: 0 }, podlasie: { $: 0 }, polkowice: { $: 0 }, pomorskie: { $: 0 }, pomorze: { $: 0 }, prochowice: { $: 0 }, pruszkow: { $: 0 }, przeworsk: { $: 0 }, pulawy: { $: 0 }, radom: { $: 0 }, "rawa-maz": { $: 0 }, rybnik: { $: 0 }, rzeszow: { $: 0 }, sanok: { $: 0 }, sejny: { $: 0 }, skoczow: { $: 0 }, slask: { $: 0 }, slupsk: { $: 0 }, sosnowiec: { $: 0 }, "stalowa-wola": { $: 0 }, starachowice: { $: 0 }, stargard: { $: 0 }, suwalki: { $: 0 }, swidnica: { $: 0 }, swiebodzin: { $: 0 }, swinoujscie: { $: 0 }, szczecin: { $: 0 }, szczytno: { $: 0 }, tarnobrzeg: { $: 0 }, tgory: { $: 0 }, turek: { $: 0 }, tychy: { $: 0 }, ustka: { $: 0 }, walbrzych: { $: 0 }, warmia: { $: 0 }, warszawa: { $: 0 }, waw: { $: 0 }, wegrow: { $: 0 }, wielun: { $: 0 }, wlocl: { $: 0 }, wloclawek: { $: 0 }, wodzislaw: { $: 0 }, wolomin: { $: 0 }, wroclaw: { $: 0 }, zachpomor: { $: 0 }, zagan: { $: 0 }, zarow: { $: 0 }, zgora: { $: 0 }, zgorzelec: { $: 0 }, art: { $: 0 }, gliwice: { $: 0 }, krakow: { $: 0 }, poznan: { $: 0 }, wroc: { $: 0 }, zakopane: { $: 0 }, beep: { $: 0 }, "ecommerce-shop": { $: 0 }, cfolks: { $: 0 }, dfirma: { $: 0 }, dkonto: { $: 0 }, you2: { $: 0 }, shoparena: { $: 0 }, homesklep: { $: 0 }, sdscloud: { $: 0 }, unicloud: { $: 0 }, lodz: { $: 0 }, pabianice: { $: 0 }, plock: { $: 0 }, sieradz: { $: 0 }, skierniewice: { $: 0 }, zgierz: { $: 0 }, krasnik: { $: 0 }, leczna: { $: 0 }, lubartow: { $: 0 }, lublin: { $: 0 }, poniatowa: { $: 0 }, swidnik: { $: 0 }, co: { $: 0 }, torun: { $: 0 }, simplesite: { $: 0 }, myspreadshop: { $: 0 }, gda: { $: 0 }, gdansk: { $: 0 }, gdynia: { $: 0 }, med: { $: 0 }, sopot: { $: 0 }, bielsko: { $: 0 } }, pm: { $: 0, own: { $: 0 }, name: { $: 0 } }, pn: { $: 0, co: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, post: { $: 0 }, pr: { $: 0, biz: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, info: { $: 0 }, isla: { $: 0 }, name: { $: 0 }, net: { $: 0 }, org: { $: 0 }, pro: { $: 0 }, ac: { $: 0 }, est: { $: 0 }, prof: { $: 0 } }, pro: { $: 0, aaa: { $: 0 }, aca: { $: 0 }, acct: { $: 0 }, avocat: { $: 0 }, bar: { $: 0 }, cpa: { $: 0 }, eng: { $: 0 }, jur: { $: 0 }, law: { $: 0 }, med: { $: 0 }, recht: { $: 0 }, "12chars": { $: 0 }, cloudns: { $: 0 }, barsy: { $: 0 }, ngrok: { $: 0 } }, ps: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 }, plo: { $: 0 }, sec: { $: 0 } }, pt: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, int: { $: 0 }, net: { $: 0 }, nome: { $: 0 }, org: { $: 0 }, publ: { $: 0 }, "123paginaweb": { $: 0 } }, pw: { $: 0, gov: { $: 0 }, cloudns: { $: 0 }, x443: { $: 0 } }, py: { $: 0, com: { $: 0 }, coop: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, qa: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, mil: { $: 0 }, name: { $: 0 }, net: { $: 0 }, org: { $: 0 }, sch: { $: 0 } }, re: { $: 0, asso: { $: 0 }, com: { $: 0 }, netlib: { $: 0 }, can: { $: 0 } }, ro: { $: 0, arts: { $: 0 }, com: { $: 0 }, firm: { $: 0 }, info: { $: 0 }, nom: { $: 0 }, nt: { $: 0 }, org: { $: 0 }, rec: { $: 0 }, store: { $: 0 }, tm: { $: 0 }, www: { $: 0 }, co: { $: 0 }, shop: { $: 0 }, barsy: { $: 0 } }, rs: { $: 0, ac: { $: 0 }, co: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, in: { $: 0 }, org: { $: 0 }, brendly: { shop: { $: 0 } }, barsy: { $: 0 }, ox: { $: 0 } }, ru: { $: 0, ac: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, int: { $: 0 }, mil: { $: 0 }, eurodir: { $: 0 }, adygeya: { $: 0 }, bashkiria: { $: 0 }, bir: { $: 0 }, cbg: { $: 0 }, com: { $: 0 }, dagestan: { $: 0 }, grozny: { $: 0 }, kalmykia: { $: 0 }, kustanai: { $: 0 }, marine: { $: 0 }, mordovia: { $: 0 }, msk: { $: 0 }, mytis: { $: 0 }, nalchik: { $: 0 }, nov: { $: 0 }, pyatigorsk: { $: 0 }, spb: { $: 0 }, vladikavkaz: { $: 0 }, vladimir: { $: 0 }, na4u: { $: 0 }, mircloud: { $: 0 }, myjino: { $: 0, hosting: { "*": { $: 0 } }, landing: { "*": { $: 0 } }, spectrum: { "*": { $: 0 } }, vps: { "*": { $: 0 } } }, cldmail: { hb: { $: 0 } }, mcdir: { $: 0, vps: { $: 0 } }, mcpre: { $: 0 }, net: { $: 0 }, org: { $: 0 }, pp: { $: 0 }, lk3: { $: 0 }, ras: { $: 0 } }, rw: { $: 0, ac: { $: 0 }, co: { $: 0 }, coop: { $: 0 }, gov: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, sa: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, med: { $: 0 }, net: { $: 0 }, org: { $: 0 }, pub: { $: 0 }, sch: { $: 0 } }, sb: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, sc: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, sd: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, info: { $: 0 }, med: { $: 0 }, net: { $: 0 }, org: { $: 0 }, tv: { $: 0 } }, se: { $: 0, a: { $: 0 }, ac: { $: 0 }, b: { $: 0 }, bd: { $: 0 }, brand: { $: 0 }, c: { $: 0 }, d: { $: 0 }, e: { $: 0 }, f: { $: 0 }, fh: { $: 0 }, fhsk: { $: 0 }, fhv: { $: 0 }, g: { $: 0 }, h: { $: 0 }, i: { $: 0 }, k: { $: 0 }, komforb: { $: 0 }, kommunalforbund: { $: 0 }, komvux: { $: 0 }, l: { $: 0 }, lanbib: { $: 0 }, m: { $: 0 }, n: { $: 0 }, naturbruksgymn: { $: 0 }, o: { $: 0 }, org: { $: 0 }, p: { $: 0 }, parti: { $: 0 }, pp: { $: 0 }, press: { $: 0 }, r: { $: 0 }, s: { $: 0 }, t: { $: 0 }, tm: { $: 0 }, u: { $: 0 }, w: { $: 0 }, x: { $: 0 }, y: { $: 0 }, z: { $: 0 }, com: { $: 0 }, iopsys: { $: 0 }, "123minsida": { $: 0 }, itcouldbewor: { $: 0 }, myspreadshop: { $: 0 } }, sg: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 }, enscaled: { $: 0 } }, sh: { $: 0, com: { $: 0 }, gov: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, org: { $: 0 }, hashbang: { $: 0 }, botda: { $: 0 }, platform: { ent: { $: 0 }, eu: { $: 0 }, us: { $: 0 } }, now: { $: 0 } }, si: { $: 0, f5: { $: 0 }, gitapp: { $: 0 }, gitpage: { $: 0 } }, sj: { $: 0 }, sk: { $: 0 }, sl: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, sm: { $: 0 }, sn: { $: 0, art: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, gouv: { $: 0 }, org: { $: 0 }, perso: { $: 0 }, univ: { $: 0 } }, so: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, me: { $: 0 }, net: { $: 0 }, org: { $: 0 }, surveys: { $: 0 } }, sr: { $: 0 }, ss: { $: 0, biz: { $: 0 }, co: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, me: { $: 0 }, net: { $: 0 }, org: { $: 0 }, sch: { $: 0 } }, st: { $: 0, co: { $: 0 }, com: { $: 0 }, consulado: { $: 0 }, edu: { $: 0 }, embaixada: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, org: { $: 0 }, principe: { $: 0 }, saotome: { $: 0 }, store: { $: 0 }, helioho: { $: 0 }, kirara: { $: 0 }, noho: { $: 0 } }, su: { $: 0, abkhazia: { $: 0 }, adygeya: { $: 0 }, aktyubinsk: { $: 0 }, arkhangelsk: { $: 0 }, armenia: { $: 0 }, ashgabad: { $: 0 }, azerbaijan: { $: 0 }, balashov: { $: 0 }, bashkiria: { $: 0 }, bryansk: { $: 0 }, bukhara: { $: 0 }, chimkent: { $: 0 }, dagestan: { $: 0 }, "east-kazakhstan": { $: 0 }, exnet: { $: 0 }, georgia: { $: 0 }, grozny: { $: 0 }, ivanovo: { $: 0 }, jambyl: { $: 0 }, kalmykia: { $: 0 }, kaluga: { $: 0 }, karacol: { $: 0 }, karaganda: { $: 0 }, karelia: { $: 0 }, khakassia: { $: 0 }, krasnodar: { $: 0 }, kurgan: { $: 0 }, kustanai: { $: 0 }, lenug: { $: 0 }, mangyshlak: { $: 0 }, mordovia: { $: 0 }, msk: { $: 0 }, murmansk: { $: 0 }, nalchik: { $: 0 }, navoi: { $: 0 }, "north-kazakhstan": { $: 0 }, nov: { $: 0 }, obninsk: { $: 0 }, penza: { $: 0 }, pokrovsk: { $: 0 }, sochi: { $: 0 }, spb: { $: 0 }, tashkent: { $: 0 }, termez: { $: 0 }, togliatti: { $: 0 }, troitsk: { $: 0 }, tselinograd: { $: 0 }, tula: { $: 0 }, tuva: { $: 0 }, vladikavkaz: { $: 0 }, vladimir: { $: 0 }, vologda: { $: 0 } }, sv: { $: 0, com: { $: 0 }, edu: { $: 0 }, gob: { $: 0 }, org: { $: 0 }, red: { $: 0 } }, sx: { $: 0, gov: { $: 0 } }, sy: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, sz: { $: 0, ac: { $: 0 }, co: { $: 0 }, org: { $: 0 } }, tc: { $: 0 }, td: { $: 0 }, tel: { $: 0 }, tf: { $: 0, sch: { $: 0 } }, tg: { $: 0 }, th: { $: 0, ac: { $: 0 }, co: { $: 0 }, go: { $: 0 }, in: { $: 0 }, mi: { $: 0 }, net: { $: 0 }, or: { $: 0 }, online: { $: 0 }, shop: { $: 0 } }, tj: { $: 0, ac: { $: 0 }, biz: { $: 0 }, co: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, go: { $: 0 }, gov: { $: 0 }, int: { $: 0 }, mil: { $: 0 }, name: { $: 0 }, net: { $: 0 }, nic: { $: 0 }, org: { $: 0 }, test: { $: 0 }, web: { $: 0 } }, tk: { $: 0 }, tl: { $: 0, gov: { $: 0 } }, tm: { $: 0, co: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, nom: { $: 0 }, org: { $: 0 } }, tn: { $: 0, com: { $: 0 }, ens: { $: 0 }, fin: { $: 0 }, gov: { $: 0 }, ind: { $: 0 }, info: { $: 0 }, intl: { $: 0 }, mincom: { $: 0 }, nat: { $: 0 }, net: { $: 0 }, org: { $: 0 }, perso: { $: 0 }, tourism: { $: 0 }, orangecloud: { $: 0 } }, to: { "611": { $: 0 }, $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, org: { $: 0 }, oya: { $: 0 }, x0: { $: 0 }, quickconnect: { direct: { $: 0 } }, vpnplus: { $: 0 } }, tr: { $: 0, av: { $: 0 }, bbs: { $: 0 }, bel: { $: 0 }, biz: { $: 0 }, com: { $: 0 }, dr: { $: 0 }, edu: { $: 0 }, gen: { $: 0 }, gov: { $: 0 }, info: { $: 0 }, k12: { $: 0 }, kep: { $: 0 }, mil: { $: 0 }, name: { $: 0 }, net: { $: 0 }, org: { $: 0 }, pol: { $: 0 }, tel: { $: 0 }, tsk: { $: 0 }, tv: { $: 0 }, web: { $: 0 }, nc: { $: 0, gov: { $: 0 } } }, tt: { $: 0, biz: { $: 0 }, co: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, info: { $: 0 }, mil: { $: 0 }, name: { $: 0 }, net: { $: 0 }, org: { $: 0 }, pro: { $: 0 } }, tv: { $: 0, "better-than": { $: 0 }, dyndns: { $: 0 }, "on-the-web": { $: 0 }, "worse-than": { $: 0 }, from: { $: 0 }, sakura: { $: 0 } }, tw: { $: 0, club: { $: 0 }, com: { $: 0, mymailer: { $: 0 } }, ebiz: { $: 0 }, edu: { $: 0 }, game: { $: 0 }, gov: { $: 0 }, idv: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, org: { $: 0 }, url: { $: 0 }, mydns: { $: 0 } }, tz: { $: 0, ac: { $: 0 }, co: { $: 0 }, go: { $: 0 }, hotel: { $: 0 }, info: { $: 0 }, me: { $: 0 }, mil: { $: 0 }, mobi: { $: 0 }, ne: { $: 0 }, or: { $: 0 }, sc: { $: 0 }, tv: { $: 0 } }, ua: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, in: { $: 0 }, net: { $: 0 }, org: { $: 0 }, cherkassy: { $: 0 }, cherkasy: { $: 0 }, chernigov: { $: 0 }, chernihiv: { $: 0 }, chernivtsi: { $: 0 }, chernovtsy: { $: 0 }, ck: { $: 0 }, cn: { $: 0 }, cr: { $: 0 }, crimea: { $: 0 }, cv: { $: 0 }, dn: { $: 0 }, dnepropetrovsk: { $: 0 }, dnipropetrovsk: { $: 0 }, donetsk: { $: 0 }, dp: { $: 0 }, if: { $: 0 }, "ivano-frankivsk": { $: 0 }, kh: { $: 0 }, kharkiv: { $: 0 }, kharkov: { $: 0 }, kherson: { $: 0 }, khmelnitskiy: { $: 0 }, khmelnytskyi: { $: 0 }, kiev: { $: 0 }, kirovograd: { $: 0 }, km: { $: 0 }, kr: { $: 0 }, kropyvnytskyi: { $: 0 }, krym: { $: 0 }, ks: { $: 0 }, kv: { $: 0 }, kyiv: { $: 0 }, lg: { $: 0 }, lt: { $: 0 }, lugansk: { $: 0 }, luhansk: { $: 0 }, lutsk: { $: 0 }, lv: { $: 0 }, lviv: { $: 0 }, mk: { $: 0 }, mykolaiv: { $: 0 }, nikolaev: { $: 0 }, od: { $: 0 }, odesa: { $: 0 }, odessa: { $: 0 }, pl: { $: 0 }, poltava: { $: 0 }, rivne: { $: 0 }, rovno: { $: 0 }, rv: { $: 0 }, sb: { $: 0 }, sebastopol: { $: 0 }, sevastopol: { $: 0 }, sm: { $: 0 }, sumy: { $: 0 }, te: { $: 0 }, ternopil: { $: 0 }, uz: { $: 0 }, uzhgorod: { $: 0 }, uzhhorod: { $: 0 }, vinnica: { $: 0 }, vinnytsia: { $: 0 }, vn: { $: 0 }, volyn: { $: 0 }, yalta: { $: 0 }, zakarpattia: { $: 0 }, zaporizhzhe: { $: 0 }, zaporizhzhia: { $: 0 }, zhitomir: { $: 0 }, zhytomyr: { $: 0 }, zp: { $: 0 }, zt: { $: 0 }, cc: { $: 0 }, inf: { $: 0 }, ltd: { $: 0 }, cx: { $: 0 }, biz: { $: 0 }, co: { $: 0 }, pp: { $: 0 }, v: { $: 0 } }, ug: { $: 0, ac: { $: 0 }, co: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, go: { $: 0 }, gov: { $: 0 }, mil: { $: 0 }, ne: { $: 0 }, or: { $: 0 }, org: { $: 0 }, sc: { $: 0 }, us: { $: 0 } }, uk: { $: 0, ac: { $: 0 }, co: { $: 0, bytemark: { dh: { $: 0 }, vm: { $: 0 } }, layershift: { j: { $: 0 } }, barsy: { $: 0 }, barsyonline: { $: 0 }, retrosnub: { cust: { $: 0 } }, "nh-serv": { $: 0 }, "no-ip": { $: 0 }, adimo: { $: 0 }, myspreadshop: { $: 0 } }, gov: { $: 0, api: { $: 0 }, campaign: { $: 0 }, service: { $: 0 } }, ltd: { $: 0 }, me: { $: 0 }, net: { $: 0 }, nhs: { $: 0 }, org: { $: 0, glug: { $: 0 }, lug: { $: 0 }, lugs: { $: 0 }, affinitylottery: { $: 0 }, raffleentry: { $: 0 }, weeklylottery: { $: 0 } }, plc: { $: 0 }, police: { $: 0 }, sch: { "*": { $: 0 } }, conn: { $: 0 }, copro: { $: 0 }, hosp: { $: 0 }, "independent-commission": { $: 0 }, "independent-inquest": { $: 0 }, "independent-inquiry": { $: 0 }, "independent-panel": { $: 0 }, "independent-review": { $: 0 }, "public-inquiry": { $: 0 }, "royal-commission": { $: 0 }, pymnt: { $: 0 }, barsy: { $: 0 }, nimsite: { $: 0 }, oraclegovcloudapps: { "*": { $: 0 } } }, us: { $: 0, dni: { $: 0 }, isa: { $: 0 }, nsn: { $: 0 }, ak: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, al: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, ar: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, as: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, az: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, ca: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, co: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, ct: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, dc: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, de: { $: 0, cc: { $: 0 }, lib: { $: 0 } }, fl: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, ga: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, gu: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, hi: { $: 0, cc: { $: 0 }, lib: { $: 0 } }, ia: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, id: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, il: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, in: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, ks: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, ky: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, la: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, ma: { $: 0, k12: { $: 0, chtr: { $: 0 }, paroch: { $: 0 }, pvt: { $: 0 } }, cc: { $: 0 }, lib: { $: 0 } }, md: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, me: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, mi: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 }, "ann-arbor": { $: 0 }, cog: { $: 0 }, dst: { $: 0 }, eaton: { $: 0 }, gen: { $: 0 }, mus: { $: 0 }, tec: { $: 0 }, washtenaw: { $: 0 } }, mn: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, mo: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, ms: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, mt: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, nc: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, nd: { $: 0, cc: { $: 0 }, lib: { $: 0 } }, ne: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, nh: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, nj: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, nm: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, nv: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, ny: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, oh: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, ok: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, or: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, pa: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, pr: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, ri: { $: 0, cc: { $: 0 }, lib: { $: 0 } }, sc: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, sd: { $: 0, cc: { $: 0 }, lib: { $: 0 } }, tn: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, tx: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, ut: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, va: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, vi: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, vt: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, wa: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, wi: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } }, wv: { $: 0, cc: { $: 0 } }, wy: { $: 0, cc: { $: 0 }, k12: { $: 0 }, lib: { $: 0 } }, cloudns: { $: 0 }, "is-by": { $: 0 }, "land-4-sale": { $: 0 }, "stuff-4-sale": { $: 0 }, heliohost: { $: 0 }, enscaled: { phx: { $: 0 } }, mircloud: { $: 0 }, ngo: { $: 0 }, golffan: { $: 0 }, noip: { $: 0 }, pointto: { $: 0 }, freeddns: { $: 0 }, srv: { $: 0, gh: { $: 0 }, gl: { $: 0 } }, platterp: { $: 0 }, servername: { $: 0 } }, uy: { $: 0, com: { $: 0 }, edu: { $: 0 }, gub: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, uz: { $: 0, co: { $: 0 }, com: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, va: { $: 0 }, vc: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, org: { $: 0 }, gv: { $: 0, d: { $: 0 } }, "0e": { "*": { $: 0 } }, mydns: { $: 0 } }, ve: { $: 0, arts: { $: 0 }, bib: { $: 0 }, co: { $: 0 }, com: { $: 0 }, e12: { $: 0 }, edu: { $: 0 }, emprende: { $: 0 }, firm: { $: 0 }, gob: { $: 0 }, gov: { $: 0 }, info: { $: 0 }, int: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, nom: { $: 0 }, org: { $: 0 }, rar: { $: 0 }, rec: { $: 0 }, store: { $: 0 }, tec: { $: 0 }, web: { $: 0 } }, vg: { $: 0, edu: { $: 0 } }, vi: { $: 0, co: { $: 0 }, com: { $: 0 }, k12: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, vn: { $: 0, ac: { $: 0 }, ai: { $: 0 }, biz: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, health: { $: 0 }, id: { $: 0 }, info: { $: 0 }, int: { $: 0 }, io: { $: 0 }, name: { $: 0 }, net: { $: 0 }, org: { $: 0 }, pro: { $: 0 }, angiang: { $: 0 }, bacgiang: { $: 0 }, backan: { $: 0 }, baclieu: { $: 0 }, bacninh: { $: 0 }, "baria-vungtau": { $: 0 }, bentre: { $: 0 }, binhdinh: { $: 0 }, binhduong: { $: 0 }, binhphuoc: { $: 0 }, binhthuan: { $: 0 }, camau: { $: 0 }, cantho: { $: 0 }, caobang: { $: 0 }, daklak: { $: 0 }, daknong: { $: 0 }, danang: { $: 0 }, dienbien: { $: 0 }, dongnai: { $: 0 }, dongthap: { $: 0 }, gialai: { $: 0 }, hagiang: { $: 0 }, haiduong: { $: 0 }, haiphong: { $: 0 }, hanam: { $: 0 }, hanoi: { $: 0 }, hatinh: { $: 0 }, haugiang: { $: 0 }, hoabinh: { $: 0 }, hungyen: { $: 0 }, khanhhoa: { $: 0 }, kiengiang: { $: 0 }, kontum: { $: 0 }, laichau: { $: 0 }, lamdong: { $: 0 }, langson: { $: 0 }, laocai: { $: 0 }, longan: { $: 0 }, namdinh: { $: 0 }, nghean: { $: 0 }, ninhbinh: { $: 0 }, ninhthuan: { $: 0 }, phutho: { $: 0 }, phuyen: { $: 0 }, quangbinh: { $: 0 }, quangnam: { $: 0 }, quangngai: { $: 0 }, quangninh: { $: 0 }, quangtri: { $: 0 }, soctrang: { $: 0 }, sonla: { $: 0 }, tayninh: { $: 0 }, thaibinh: { $: 0 }, thainguyen: { $: 0 }, thanhhoa: { $: 0 }, thanhphohochiminh: { $: 0 }, thuathienhue: { $: 0 }, tiengiang: { $: 0 }, travinh: { $: 0 }, tuyenquang: { $: 0 }, vinhlong: { $: 0 }, vinhphuc: { $: 0 }, yenbai: { $: 0 } }, vu: { $: 0, com: { $: 0 }, edu: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, wf: { $: 0, biz: { $: 0 }, sch: { $: 0 } }, ws: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 }, advisor: { "*": { $: 0 } }, cloud66: { $: 0 }, dyndns: { $: 0 }, mypets: { $: 0 } }, yt: { $: 0, org: { $: 0 } }, "xn--mgbaam7a8h": { $: 0 }, "xn--y9a3aq": { $: 0 }, "xn--54b7fta0cc": { $: 0 }, "xn--90ae": { $: 0 }, "xn--mgbcpq6gpa1a": { $: 0 }, "xn--90ais": { $: 0 }, "xn--fiqs8s": { $: 0 }, "xn--fiqz9s": { $: 0 }, "xn--lgbbat1ad8j": { $: 0 }, "xn--wgbh1c": { $: 0 }, "xn--e1a4c": { $: 0 }, "xn--qxa6a": { $: 0 }, "xn--mgbah1a3hjkrd": { $: 0 }, "xn--node": { $: 0 }, "xn--qxam": { $: 0 }, "xn--j6w193g": { $: 0, "xn--gmqw5a": { $: 0 }, "xn--55qx5d": { $: 0 }, "xn--mxtq1m": { $: 0 }, "xn--wcvs22d": { $: 0 }, "xn--uc0atv": { $: 0 }, "xn--od0alg": { $: 0 } }, "xn--2scrj9c": { $: 0 }, "xn--3hcrj9c": { $: 0 }, "xn--45br5cyl": { $: 0 }, "xn--h2breg3eve": { $: 0 }, "xn--h2brj9c8c": { $: 0 }, "xn--mgbgu82a": { $: 0 }, "xn--rvc1e0am3e": { $: 0 }, "xn--h2brj9c": { $: 0 }, "xn--mgbbh1a": { $: 0 }, "xn--mgbbh1a71e": { $: 0 }, "xn--fpcrj9c3d": { $: 0 }, "xn--gecrj9c": { $: 0 }, "xn--s9brj9c": { $: 0 }, "xn--45brj9c": { $: 0 }, "xn--xkc2dl3a5ee0h": { $: 0 }, "xn--mgba3a4f16a": { $: 0 }, "xn--mgba3a4fra": { $: 0 }, "xn--mgbtx2b": { $: 0 }, "xn--mgbayh7gpa": { $: 0 }, "xn--3e0b707e": { $: 0 }, "xn--80ao21a": { $: 0 }, "xn--q7ce6a": { $: 0 }, "xn--fzc2c9e2c": { $: 0 }, "xn--xkc2al3hye2a": { $: 0 }, "xn--mgbc0a9azcg": { $: 0 }, "xn--d1alf": { $: 0 }, "xn--l1acc": { $: 0 }, "xn--mix891f": { $: 0 }, "xn--mix082f": { $: 0 }, "xn--mgbx4cd0ab": { $: 0 }, "xn--mgb9awbf": { $: 0 }, "xn--mgbai9azgqp6j": { $: 0 }, "xn--mgbai9a5eva00b": { $: 0 }, "xn--ygbi2ammx": { $: 0 }, "xn--90a3ac": { $: 0, "xn--80au": { $: 0 }, "xn--90azh": { $: 0 }, "xn--d1at": { $: 0 }, "xn--c1avg": { $: 0 }, "xn--o1ac": { $: 0 }, "xn--o1ach": { $: 0 } }, "xn--p1ai": { $: 0 }, "xn--wgbl6a": { $: 0 }, "xn--mgberp4a5d4ar": { $: 0 }, "xn--mgberp4a5d4a87g": { $: 0 }, "xn--mgbqly7c0a67fbc": { $: 0 }, "xn--mgbqly7cvafr": { $: 0 }, "xn--mgbpl2fh": { $: 0 }, "xn--yfro4i67o": { $: 0 }, "xn--clchc0ea0b2g2a9gcd": { $: 0 }, "xn--ogbpf8fl": { $: 0 }, "xn--mgbtf8fl": { $: 0 }, "xn--o3cw4h": { $: 0, "xn--o3cyx2a": { $: 0 }, "xn--12co0c3b4eva": { $: 0 }, "xn--m3ch0j3a": { $: 0 }, "xn--h3cuzk1di": { $: 0 }, "xn--12c1fe0br": { $: 0 }, "xn--12cfi8ixb8l": { $: 0 } }, "xn--pgbs0dh": { $: 0 }, "xn--kpry57d": { $: 0 }, "xn--kprw13d": { $: 0 }, "xn--nnx388a": { $: 0 }, "xn--j1amh": { $: 0 }, "xn--mgb2ddes": { $: 0 }, xxx: { $: 0 }, ye: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, org: { $: 0 } }, za: { ac: { $: 0 }, agric: { $: 0 }, alt: { $: 0 }, co: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, grondar: { $: 0 }, law: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, ngo: { $: 0 }, nic: { $: 0 }, nis: { $: 0 }, nom: { $: 0 }, org: { $: 0 }, school: { $: 0 }, tm: { $: 0 }, web: { $: 0 } }, zm: { $: 0, ac: { $: 0 }, biz: { $: 0 }, co: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, info: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, org: { $: 0 }, sch: { $: 0 } }, zw: { $: 0, ac: { $: 0 }, co: { $: 0 }, gov: { $: 0 }, mil: { $: 0 }, org: { $: 0 } }, aaa: { $: 0 }, aarp: { $: 0 }, abb: { $: 0 }, abbott: { $: 0 }, abbvie: { $: 0 }, abc: { $: 0 }, able: { $: 0 }, abogado: { $: 0 }, abudhabi: { $: 0 }, academy: { $: 0, official: { $: 0 } }, accenture: { $: 0 }, accountant: { $: 0 }, accountants: { $: 0 }, aco: { $: 0 }, actor: { $: 0 }, ads: { $: 0 }, adult: { $: 0 }, aeg: { $: 0 }, aetna: { $: 0 }, afl: { $: 0 }, africa: { $: 0 }, agakhan: { $: 0 }, agency: { $: 0 }, aig: { $: 0 }, airbus: { $: 0 }, airforce: { $: 0 }, airtel: { $: 0 }, akdn: { $: 0 }, alibaba: { $: 0 }, alipay: { $: 0 }, allfinanz: { $: 0 }, allstate: { $: 0 }, ally: { $: 0 }, alsace: { $: 0 }, alstom: { $: 0 }, amazon: { $: 0 }, americanexpress: { $: 0 }, americanfamily: { $: 0 }, amex: { $: 0 }, amfam: { $: 0 }, amica: { $: 0 }, amsterdam: { $: 0 }, analytics: { $: 0 }, android: { $: 0 }, anquan: { $: 0 }, anz: { $: 0 }, aol: { $: 0 }, apartments: { $: 0 }, app: { $: 0, adaptable: { $: 0 }, aiven: { $: 0 }, beget: { "*": { $: 0 } }, brave: { $: 0, s: { "*": { $: 0 } } }, clerk: { $: 0 }, clerkstage: { $: 0 }, wnext: { $: 0 }, csb: { $: 0, preview: { $: 0 } }, convex: { $: 0 }, deta: { $: 0 }, ondigitalocean: { $: 0 }, easypanel: { $: 0 }, encr: { $: 0, frontend: { $: 0 } }, evervault: { relay: { $: 0 } }, expo: { $: 0, staging: { $: 0 } }, edgecompute: { $: 0 }, "on-fleek": { $: 0 }, flutterflow: { $: 0 }, e2b: { $: 0 }, framer: { $: 0 }, github: { $: 0 }, hosted: { "*": { $: 0 } }, run: { "*": { $: 0 }, mtls: { "*": { $: 0 } } }, web: { $: 0 }, hasura: { $: 0 }, botdash: { $: 0 }, loginline: { $: 0 }, lovable: { $: 0 }, luyani: { $: 0 }, medusajs: { $: 0 }, messerli: { $: 0 }, netfy: { $: 0 }, netlify: { $: 0 }, ngrok: { $: 0 }, "ngrok-free": { $: 0 }, developer: { "*": { $: 0 } }, noop: { $: 0 }, northflank: { "*": { $: 0 } }, upsun: { "*": { $: 0 } }, replit: { $: 0, id: { $: 0 } }, nyat: { $: 0 }, snowflake: { "*": { $: 0 }, privatelink: { "*": { $: 0 } } }, streamlit: { $: 0 }, storipress: { $: 0 }, telebit: { $: 0 }, typedream: { $: 0 }, vercel: { $: 0 }, bookonline: { $: 0 }, wdh: { $: 0 }, windsurf: { $: 0 }, zeabur: { $: 0 }, zerops: { "*": { $: 0 } } }, apple: { $: 0 }, aquarelle: { $: 0 }, arab: { $: 0 }, aramco: { $: 0 }, archi: { $: 0 }, army: { $: 0 }, art: { $: 0 }, arte: { $: 0 }, asda: { $: 0 }, associates: { $: 0 }, athleta: { $: 0 }, attorney: { $: 0 }, auction: { $: 0 }, audi: { $: 0 }, audible: { $: 0 }, audio: { $: 0 }, auspost: { $: 0 }, author: { $: 0 }, auto: { $: 0 }, autos: { $: 0 }, aws: { $: 0, sagemaker: { "ap-northeast-1": { labeling: { $: 0 }, notebook: { $: 0 }, studio: { $: 0 } }, "ap-northeast-2": { labeling: { $: 0 }, notebook: { $: 0 }, studio: { $: 0 } }, "ap-south-1": { labeling: { $: 0 }, notebook: { $: 0 }, studio: { $: 0 } }, "ap-southeast-1": { labeling: { $: 0 }, notebook: { $: 0 }, studio: { $: 0 } }, "ap-southeast-2": { labeling: { $: 0 }, notebook: { $: 0 }, studio: { $: 0 } }, "ca-central-1": { labeling: { $: 0 }, notebook: { $: 0 }, "notebook-fips": { $: 0 }, studio: { $: 0 } }, "eu-central-1": { labeling: { $: 0 }, notebook: { $: 0 }, studio: { $: 0 } }, "eu-west-1": { labeling: { $: 0 }, notebook: { $: 0 }, studio: { $: 0 } }, "eu-west-2": { labeling: { $: 0 }, notebook: { $: 0 }, studio: { $: 0 } }, "us-east-1": { labeling: { $: 0 }, notebook: { $: 0 }, "notebook-fips": { $: 0 }, studio: { $: 0 } }, "us-east-2": { labeling: { $: 0 }, notebook: { $: 0 }, "notebook-fips": { $: 0 }, studio: { $: 0 } }, "us-west-2": { labeling: { $: 0 }, notebook: { $: 0 }, "notebook-fips": { $: 0 }, studio: { $: 0 } }, "af-south-1": { notebook: { $: 0 }, studio: { $: 0 } }, "ap-east-1": { notebook: { $: 0 }, studio: { $: 0 } }, "ap-northeast-3": { notebook: { $: 0 }, studio: { $: 0 } }, "ap-south-2": { notebook: { $: 0 } }, "ap-southeast-3": { notebook: { $: 0 }, studio: { $: 0 } }, "ap-southeast-4": { notebook: { $: 0 } }, "ca-west-1": { notebook: { $: 0 }, "notebook-fips": { $: 0 } }, "eu-central-2": { notebook: { $: 0 }, studio: { $: 0 } }, "eu-north-1": { notebook: { $: 0 }, studio: { $: 0 } }, "eu-south-1": { notebook: { $: 0 }, studio: { $: 0 } }, "eu-south-2": { notebook: { $: 0 }, studio: { $: 0 } }, "eu-west-3": { notebook: { $: 0 }, studio: { $: 0 } }, "il-central-1": { notebook: { $: 0 }, studio: { $: 0 } }, "me-central-1": { notebook: { $: 0 }, studio: { $: 0 } }, "me-south-1": { notebook: { $: 0 }, studio: { $: 0 } }, "sa-east-1": { notebook: { $: 0 }, studio: { $: 0 } }, "us-gov-east-1": { notebook: { $: 0 }, "notebook-fips": { $: 0 }, studio: { $: 0 }, "studio-fips": { $: 0 } }, "us-gov-west-1": { notebook: { $: 0 }, "notebook-fips": { $: 0 }, studio: { $: 0 }, "studio-fips": { $: 0 } }, "us-west-1": { notebook: { $: 0 }, "notebook-fips": { $: 0 }, studio: { $: 0 } }, experiments: { "*": { $: 0 } } }, repost: { private: { "*": { $: 0 } } }, on: { "ap-northeast-1": { "transfer-webapp": { $: 0 } }, "ap-southeast-1": { "transfer-webapp": { $: 0 } }, "ap-southeast-2": { "transfer-webapp": { $: 0 } }, "eu-central-1": { "transfer-webapp": { $: 0 } }, "eu-north-1": { "transfer-webapp": { $: 0 } }, "eu-west-1": { "transfer-webapp": { $: 0 } }, "us-east-1": { "transfer-webapp": { $: 0 } }, "us-east-2": { "transfer-webapp": { $: 0 } }, "us-west-2": { "transfer-webapp": { $: 0 } } } }, axa: { $: 0 }, azure: { $: 0 }, baby: { $: 0 }, baidu: { $: 0 }, banamex: { $: 0 }, band: { $: 0 }, bank: { $: 0 }, bar: { $: 0 }, barcelona: { $: 0 }, barclaycard: { $: 0 }, barclays: { $: 0 }, barefoot: { $: 0 }, bargains: { $: 0 }, baseball: { $: 0 }, basketball: { $: 0, aus: { $: 0 }, nz: { $: 0 } }, bauhaus: { $: 0 }, bayern: { $: 0 }, bbc: { $: 0 }, bbt: { $: 0 }, bbva: { $: 0 }, bcg: { $: 0 }, bcn: { $: 0 }, beats: { $: 0 }, beauty: { $: 0 }, beer: { $: 0 }, berlin: { $: 0 }, best: { $: 0 }, bestbuy: { $: 0 }, bet: { $: 0 }, bharti: { $: 0 }, bible: { $: 0 }, bid: { $: 0 }, bike: { $: 0 }, bing: { $: 0 }, bingo: { $: 0 }, bio: { $: 0 }, black: { $: 0 }, blackfriday: { $: 0 }, blockbuster: { $: 0 }, blog: { $: 0 }, bloomberg: { $: 0 }, blue: { $: 0 }, bms: { $: 0 }, bmw: { $: 0 }, bnpparibas: { $: 0 }, boats: { $: 0 }, boehringer: { $: 0 }, bofa: { $: 0 }, bom: { $: 0 }, bond: { $: 0 }, boo: { $: 0 }, book: { $: 0 }, booking: { $: 0 }, bosch: { $: 0 }, bostik: { $: 0 }, boston: { $: 0 }, bot: { $: 0 }, boutique: { $: 0 }, box: { $: 0 }, bradesco: { $: 0 }, bridgestone: { $: 0 }, broadway: { $: 0 }, broker: { $: 0 }, brother: { $: 0 }, brussels: { $: 0 }, build: { $: 0, v0: { $: 0 }, windsurf: { $: 0 } }, builders: { $: 0, cloudsite: { $: 0 } }, business: { $: 0, co: { $: 0 } }, buy: { $: 0 }, buzz: { $: 0 }, bzh: { $: 0 }, cab: { $: 0 }, cafe: { $: 0 }, cal: { $: 0 }, call: { $: 0 }, calvinklein: { $: 0 }, cam: { $: 0 }, camera: { $: 0 }, camp: { $: 0, emf: { at: { $: 0 } } }, canon: { $: 0 }, capetown: { $: 0 }, capital: { $: 0 }, capitalone: { $: 0 }, car: { $: 0 }, caravan: { $: 0 }, cards: { $: 0 }, care: { $: 0 }, career: { $: 0 }, careers: { $: 0 }, cars: { $: 0 }, casa: { $: 0, nabu: { ui: { $: 0 } } }, case: { $: 0 }, cash: { $: 0 }, casino: { $: 0 }, catering: { $: 0 }, catholic: { $: 0 }, cba: { $: 0 }, cbn: { $: 0 }, cbre: { $: 0 }, center: { $: 0 }, ceo: { $: 0 }, cern: { $: 0 }, cfa: { $: 0 }, cfd: { $: 0 }, chanel: { $: 0 }, channel: { $: 0 }, charity: { $: 0 }, chase: { $: 0 }, chat: { $: 0 }, cheap: { $: 0 }, chintai: { $: 0 }, christmas: { $: 0 }, chrome: { $: 0 }, church: { $: 0 }, cipriani: { $: 0 }, circle: { $: 0 }, cisco: { $: 0 }, citadel: { $: 0 }, citi: { $: 0 }, citic: { $: 0 }, city: { $: 0 }, claims: { $: 0 }, cleaning: { $: 0 }, click: { $: 0 }, clinic: { $: 0 }, clinique: { $: 0 }, clothing: { $: 0 }, cloud: { $: 0, convex: { $: 0 }, elementor: { $: 0 }, encoway: { eu: { $: 0 } }, statics: { "*": { $: 0 } }, ravendb: { $: 0 }, axarnet: { "es-1": { $: 0 } }, diadem: { $: 0 }, jelastic: { vip: { $: 0 } }, jele: { $: 0 }, "jenv-aruba": { aruba: { eur: { it1: { $: 0 } } }, it1: { $: 0 } }, keliweb: { $: 0, cs: { $: 0 } }, oxa: { $: 0, tn: { $: 0 }, uk: { $: 0 } }, primetel: { $: 0, uk: { $: 0 } }, reclaim: { ca: { $: 0 }, uk: { $: 0 }, us: { $: 0 } }, trendhosting: { ch: { $: 0 }, de: { $: 0 } }, jotelulu: { $: 0 }, kuleuven: { $: 0 }, laravel: { $: 0 }, linkyard: { $: 0 }, magentosite: { "*": { $: 0 } }, matlab: { $: 0 }, observablehq: { $: 0 }, perspecta: { $: 0 }, vapor: { $: 0 }, "on-rancher": { "*": { $: 0 } }, scw: { baremetal: { "fr-par-1": { $: 0 }, "fr-par-2": { $: 0 }, "nl-ams-1": { $: 0 } }, "fr-par": { cockpit: { $: 0 }, ddl: { $: 0 }, dtwh: { $: 0 }, fnc: { $: 0, functions: { $: 0 } }, ifr: { $: 0 }, k8s: { $: 0, nodes: { $: 0 } }, kafk: { $: 0 }, mgdb: { $: 0 }, rdb: { $: 0 }, s3: { $: 0 }, "s3-website": { $: 0 }, scbl: { $: 0 }, whm: { $: 0 } }, instances: { priv: { $: 0 }, pub: { $: 0 } }, k8s: { $: 0 }, "nl-ams": { cockpit: { $: 0 }, ddl: { $: 0 }, dtwh: { $: 0 }, ifr: { $: 0 }, k8s: { $: 0, nodes: { $: 0 } }, kafk: { $: 0 }, mgdb: { $: 0 }, rdb: { $: 0 }, s3: { $: 0 }, "s3-website": { $: 0 }, scbl: { $: 0 }, whm: { $: 0 } }, "pl-waw": { cockpit: { $: 0 }, ddl: { $: 0 }, dtwh: { $: 0 }, ifr: { $: 0 }, k8s: { $: 0, nodes: { $: 0 } }, kafk: { $: 0 }, mgdb: { $: 0 }, rdb: { $: 0 }, s3: { $: 0 }, "s3-website": { $: 0 }, scbl: { $: 0 } }, scalebook: { $: 0 }, smartlabeling: { $: 0 } }, servebolt: { $: 0 }, onstackit: { runs: { $: 0 } }, trafficplex: { $: 0 }, "unison-services": { $: 0 }, urown: { $: 0 }, voorloper: { $: 0 }, zap: { $: 0 } }, club: { $: 0, cloudns: { $: 0 }, jele: { $: 0 }, barsy: { $: 0 } }, clubmed: { $: 0 }, coach: { $: 0 }, codes: { $: 0, owo: { "*": { $: 0 } } }, coffee: { $: 0 }, college: { $: 0 }, cologne: { $: 0 }, commbank: { $: 0 }, community: { $: 0, nog: { $: 0 }, ravendb: { $: 0 }, myforum: { $: 0 } }, company: { $: 0 }, compare: { $: 0 }, computer: { $: 0 }, comsec: { $: 0 }, condos: { $: 0 }, construction: { $: 0 }, consulting: { $: 0 }, contact: { $: 0 }, contractors: { $: 0 }, cooking: { $: 0 }, cool: { $: 0, elementor: { $: 0 }, de: { $: 0 } }, corsica: { $: 0 }, country: { $: 0 }, coupon: { $: 0 }, coupons: { $: 0 }, courses: { $: 0 }, cpa: { $: 0 }, credit: { $: 0 }, creditcard: { $: 0 }, creditunion: { $: 0 }, cricket: { $: 0 }, crown: { $: 0 }, crs: { $: 0 }, cruise: { $: 0 }, cruises: { $: 0 }, cuisinella: { $: 0 }, cymru: { $: 0 }, cyou: { $: 0 }, dad: { $: 0 }, dance: { $: 0 }, data: { $: 0 }, date: { $: 0 }, dating: { $: 0 }, datsun: { $: 0 }, day: { $: 0 }, dclk: { $: 0 }, dds: { $: 0 }, deal: { $: 0 }, dealer: { $: 0 }, deals: { $: 0 }, degree: { $: 0 }, delivery: { $: 0 }, dell: { $: 0 }, deloitte: { $: 0 }, delta: { $: 0 }, democrat: { $: 0 }, dental: { $: 0 }, dentist: { $: 0 }, desi: { $: 0 }, design: { $: 0, graphic: { $: 0 }, bss: { $: 0 } }, dev: { $: 0, "12chars": { $: 0 }, myaddr: { $: 0 }, panel: { $: 0 }, lcl: { "*": { $: 0 } }, lclstage: { "*": { $: 0 } }, stg: { "*": { $: 0 } }, stgstage: { "*": { $: 0 } }, pages: { $: 0 }, r2: { $: 0 }, workers: { $: 0 }, deno: { $: 0 }, "deno-staging": { $: 0 }, deta: { $: 0 }, lp: { $: 0, api: { $: 0 }, objects: { $: 0 } }, evervault: { relay: { $: 0 } }, fly: { $: 0 }, githubpreview: { $: 0 }, gateway: { "*": { $: 0 } }, botdash: { $: 0 }, inbrowser: { "*": { $: 0 } }, "is-a-good": { $: 0 }, "is-a": { $: 0 }, iserv: { $: 0 }, runcontainers: { $: 0 }, localcert: { user: { "*": { $: 0 } } }, loginline: { $: 0 }, barsy: { $: 0 }, mediatech: { $: 0 }, modx: { $: 0 }, ngrok: { $: 0 }, "ngrok-free": { $: 0 }, "is-a-fullstack": { $: 0 }, "is-cool": { $: 0 }, "is-not-a": { $: 0 }, localplayer: { $: 0 }, xmit: { $: 0 }, "platter-app": { $: 0 }, replit: { $: 0, archer: { $: 0 }, bones: { $: 0 }, canary: { $: 0 }, global: { $: 0 }, hacker: { $: 0 }, id: { $: 0 }, janeway: { $: 0 }, kim: { $: 0 }, kira: { $: 0 }, kirk: { $: 0 }, odo: { $: 0 }, paris: { $: 0 }, picard: { $: 0 }, pike: { $: 0 }, prerelease: { $: 0 }, reed: { $: 0 }, riker: { $: 0 }, sisko: { $: 0 }, spock: { $: 0 }, staging: { $: 0 }, sulu: { $: 0 }, tarpit: { $: 0 }, teams: { $: 0 }, tucker: { $: 0 }, wesley: { $: 0 }, worf: { $: 0 } }, crm: { d: { "*": { $: 0 } }, w: { "*": { $: 0 } }, wa: { "*": { $: 0 } }, wb: { "*": { $: 0 } }, wc: { "*": { $: 0 } }, wd: { "*": { $: 0 } }, we: { "*": { $: 0 } }, wf: { "*": { $: 0 } } }, vercel: { $: 0 }, webhare: { "*": { $: 0 } }, hrsn: { $: 0 } }, dhl: { $: 0 }, diamonds: { $: 0 }, diet: { $: 0 }, digital: { $: 0, cloudapps: { $: 0, london: { $: 0 } } }, direct: { $: 0, libp2p: { $: 0 } }, directory: { $: 0 }, discount: { $: 0 }, discover: { $: 0 }, dish: { $: 0 }, diy: { $: 0 }, dnp: { $: 0 }, docs: { $: 0 }, doctor: { $: 0 }, dog: { $: 0 }, domains: { $: 0 }, dot: { $: 0 }, download: { $: 0 }, drive: { $: 0 }, dtv: { $: 0 }, dubai: { $: 0 }, dunlop: { $: 0 }, dupont: { $: 0 }, durban: { $: 0 }, dvag: { $: 0 }, dvr: { $: 0 }, earth: { $: 0 }, eat: { $: 0 }, eco: { $: 0 }, edeka: { $: 0 }, education: { $: 0, co: { $: 0 } }, email: { $: 0, crisp: { on: { $: 0 } }, tawk: { p: { $: 0 } }, tawkto: { p: { $: 0 } } }, emerck: { $: 0 }, energy: { $: 0 }, engineer: { $: 0 }, engineering: { $: 0 }, enterprises: { $: 0 }, epson: { $: 0 }, equipment: { $: 0 }, ericsson: { $: 0 }, erni: { $: 0 }, esq: { $: 0 }, estate: { $: 0, compute: { "*": { $: 0 } } }, eurovision: { $: 0 }, eus: { $: 0, party: { user: { $: 0 } } }, events: { $: 0, koobin: { $: 0 }, co: { $: 0 } }, exchange: { $: 0 }, expert: { $: 0 }, exposed: { $: 0 }, express: { $: 0 }, extraspace: { $: 0 }, fage: { $: 0 }, fail: { $: 0 }, fairwinds: { $: 0 }, faith: { $: 0 }, family: { $: 0 }, fan: { $: 0 }, fans: { $: 0 }, farm: { $: 0, storj: { $: 0 } }, farmers: { $: 0 }, fashion: { $: 0 }, fast: { $: 0 }, fedex: { $: 0 }, feedback: { $: 0 }, ferrari: { $: 0 }, ferrero: { $: 0 }, fidelity: { $: 0 }, fido: { $: 0 }, film: { $: 0 }, final: { $: 0 }, finance: { $: 0 }, financial: { $: 0, co: { $: 0 } }, fire: { $: 0 }, firestone: { $: 0 }, firmdale: { $: 0 }, fish: { $: 0 }, fishing: { $: 0 }, fit: { $: 0 }, fitness: { $: 0 }, flickr: { $: 0 }, flights: { $: 0 }, flir: { $: 0 }, florist: { $: 0 }, flowers: { $: 0 }, fly: { $: 0 }, foo: { $: 0 }, food: { $: 0 }, football: { $: 0 }, ford: { $: 0 }, forex: { $: 0 }, forsale: { $: 0 }, forum: { $: 0 }, foundation: { $: 0 }, fox: { $: 0 }, free: { $: 0 }, fresenius: { $: 0 }, frl: { $: 0 }, frogans: { $: 0 }, frontier: { $: 0 }, ftr: { $: 0 }, fujitsu: { $: 0 }, fun: { $: 0 }, fund: { $: 0 }, furniture: { $: 0 }, futbol: { $: 0 }, fyi: { $: 0 }, gal: { $: 0 }, gallery: { $: 0 }, gallo: { $: 0 }, gallup: { $: 0 }, game: { $: 0 }, games: { $: 0, pley: { $: 0 }, sheezy: { $: 0 } }, gap: { $: 0 }, garden: { $: 0 }, gay: { $: 0, pages: { $: 0 } }, gbiz: { $: 0 }, gdn: { $: 0, cnpy: { $: 0 } }, gea: { $: 0 }, gent: { $: 0 }, genting: { $: 0 }, george: { $: 0 }, ggee: { $: 0 }, gift: { $: 0 }, gifts: { $: 0 }, gives: { $: 0 }, giving: { $: 0 }, glass: { $: 0 }, gle: { $: 0 }, global: { $: 0, appwrite: { $: 0 } }, globo: { $: 0 }, gmail: { $: 0 }, gmbh: { $: 0 }, gmo: { $: 0 }, gmx: { $: 0 }, godaddy: { $: 0 }, gold: { $: 0 }, goldpoint: { $: 0 }, golf: { $: 0 }, goo: { $: 0 }, goodyear: { $: 0 }, goog: { $: 0, cloud: { $: 0 }, translate: { $: 0 }, usercontent: { "*": { $: 0 } } }, google: { $: 0 }, gop: { $: 0 }, got: { $: 0 }, grainger: { $: 0 }, graphics: { $: 0 }, gratis: { $: 0 }, green: { $: 0 }, gripe: { $: 0 }, grocery: { $: 0 }, group: { $: 0, discourse: { $: 0 } }, gucci: { $: 0 }, guge: { $: 0 }, guide: { $: 0 }, guitars: { $: 0 }, guru: { $: 0 }, hair: { $: 0 }, hamburg: { $: 0 }, hangout: { $: 0 }, haus: { $: 0 }, hbo: { $: 0 }, hdfc: { $: 0 }, hdfcbank: { $: 0 }, health: { $: 0, hra: { $: 0 } }, healthcare: { $: 0 }, help: { $: 0 }, helsinki: { $: 0 }, here: { $: 0 }, hermes: { $: 0 }, hiphop: { $: 0 }, hisamitsu: { $: 0 }, hitachi: { $: 0 }, hiv: { $: 0 }, hkt: { $: 0 }, hockey: { $: 0 }, holdings: { $: 0 }, holiday: { $: 0 }, homedepot: { $: 0 }, homegoods: { $: 0 }, homes: { $: 0 }, homesense: { $: 0 }, honda: { $: 0 }, horse: { $: 0 }, hospital: { $: 0 }, host: { $: 0, cloudaccess: { $: 0 }, freesite: { $: 0 }, easypanel: { $: 0 }, fastvps: { $: 0 }, myfast: { $: 0 }, tempurl: { $: 0 }, wpmudev: { $: 0 }, iserv: { $: 0 }, jele: { $: 0 }, mircloud: { $: 0 }, wp2: { $: 0 }, half: { $: 0 } }, hosting: { $: 0, opencraft: { $: 0 } }, hot: { $: 0 }, hotel: { $: 0 }, hotels: { $: 0 }, hotmail: { $: 0 }, house: { $: 0 }, how: { $: 0 }, hsbc: { $: 0 }, hughes: { $: 0 }, hyatt: { $: 0 }, hyundai: { $: 0 }, ibm: { $: 0 }, icbc: { $: 0 }, ice: { $: 0 }, icu: { $: 0 }, ieee: { $: 0 }, ifm: { $: 0 }, ikano: { $: 0 }, imamat: { $: 0 }, imdb: { $: 0 }, immo: { $: 0 }, immobilien: { $: 0 }, inc: { $: 0 }, industries: { $: 0 }, infiniti: { $: 0 }, ing: { $: 0 }, ink: { $: 0 }, institute: { $: 0 }, insurance: { $: 0 }, insure: { $: 0 }, international: { $: 0 }, intuit: { $: 0 }, investments: { $: 0 }, ipiranga: { $: 0 }, irish: { $: 0 }, ismaili: { $: 0 }, ist: { $: 0 }, istanbul: { $: 0 }, itau: { $: 0 }, itv: { $: 0 }, jaguar: { $: 0 }, java: { $: 0 }, jcb: { $: 0 }, jeep: { $: 0 }, jetzt: { $: 0 }, jewelry: { $: 0 }, jio: { $: 0 }, jll: { $: 0 }, jmp: { $: 0 }, jnj: { $: 0 }, joburg: { $: 0 }, jot: { $: 0 }, joy: { $: 0 }, jpmorgan: { $: 0 }, jprs: { $: 0 }, juegos: { $: 0 }, juniper: { $: 0 }, kaufen: { $: 0 }, kddi: { $: 0 }, kerryhotels: { $: 0 }, kerryproperties: { $: 0 }, kfh: { $: 0 }, kia: { $: 0 }, kids: { $: 0 }, kim: { $: 0 }, kindle: { $: 0 }, kitchen: { $: 0 }, kiwi: { $: 0 }, koeln: { $: 0 }, komatsu: { $: 0 }, kosher: { $: 0 }, kpmg: { $: 0 }, kpn: { $: 0 }, krd: { $: 0, co: { $: 0 }, edu: { $: 0 } }, kred: { $: 0 }, kuokgroup: { $: 0 }, kyoto: { $: 0 }, lacaixa: { $: 0 }, lamborghini: { $: 0 }, lamer: { $: 0 }, land: { $: 0 }, landrover: { $: 0 }, lanxess: { $: 0 }, lasalle: { $: 0 }, lat: { $: 0 }, latino: { $: 0 }, latrobe: { $: 0 }, law: { $: 0 }, lawyer: { $: 0 }, lds: { $: 0 }, lease: { $: 0 }, leclerc: { $: 0 }, lefrak: { $: 0 }, legal: { $: 0 }, lego: { $: 0 }, lexus: { $: 0 }, lgbt: { $: 0 }, lidl: { $: 0 }, life: { $: 0 }, lifeinsurance: { $: 0 }, lifestyle: { $: 0 }, lighting: { $: 0 }, like: { $: 0 }, lilly: { $: 0 }, limited: { $: 0 }, limo: { $: 0 }, lincoln: { $: 0 }, link: { $: 0, myfritz: { $: 0 }, cyon: { $: 0 }, dweb: { "*": { $: 0 } }, inbrowser: { "*": { $: 0 } }, nftstorage: { ipfs: { $: 0 } }, mypep: { $: 0 }, storacha: { ipfs: { $: 0 } }, w3s: { ipfs: { $: 0 } } }, live: { $: 0, aem: { $: 0 }, hlx: { $: 0 }, ewp: { "*": { $: 0 } } }, living: { $: 0 }, llc: { $: 0 }, llp: { $: 0 }, loan: { $: 0 }, loans: { $: 0 }, locker: { $: 0 }, locus: { $: 0 }, lol: { $: 0, omg: { $: 0 } }, london: { $: 0 }, lotte: { $: 0 }, lotto: { $: 0 }, love: { $: 0 }, lpl: { $: 0 }, lplfinancial: { $: 0 }, ltd: { $: 0 }, ltda: { $: 0 }, lundbeck: { $: 0 }, luxe: { $: 0 }, luxury: { $: 0 }, madrid: { $: 0 }, maif: { $: 0 }, maison: { $: 0 }, makeup: { $: 0 }, man: { $: 0 }, management: { $: 0 }, mango: { $: 0 }, map: { $: 0 }, market: { $: 0 }, marketing: { $: 0 }, markets: { $: 0 }, marriott: { $: 0 }, marshalls: { $: 0 }, mattel: { $: 0 }, mba: { $: 0 }, mckinsey: { $: 0 }, med: { $: 0 }, media: { $: 0, framer: { $: 0 } }, meet: { $: 0 }, melbourne: { $: 0 }, meme: { $: 0 }, memorial: { $: 0 }, men: { $: 0 }, menu: { $: 0, barsy: { $: 0 }, barsyonline: { $: 0 } }, merck: { $: 0 }, merckmsd: { $: 0 }, miami: { $: 0 }, microsoft: { $: 0 }, mini: { $: 0 }, mint: { $: 0 }, mit: { $: 0 }, mitsubishi: { $: 0 }, mlb: { $: 0 }, mls: { $: 0 }, mma: { $: 0 }, mobile: { $: 0 }, moda: { $: 0 }, moe: { $: 0 }, moi: { $: 0 }, mom: { $: 0 }, monash: { $: 0 }, money: { $: 0 }, monster: { $: 0 }, mormon: { $: 0 }, mortgage: { $: 0 }, moscow: { $: 0 }, moto: { $: 0 }, motorcycles: { $: 0 }, mov: { $: 0 }, movie: { $: 0 }, msd: { $: 0 }, mtn: { $: 0 }, mtr: { $: 0 }, music: { $: 0 }, nab: { $: 0 }, nagoya: { $: 0 }, navy: { $: 0 }, nba: { $: 0 }, nec: { $: 0 }, netbank: { $: 0 }, netflix: { $: 0 }, network: { $: 0, aem: { $: 0 }, alces: { "*": { $: 0 } }, co: { $: 0 }, arvo: { $: 0 }, azimuth: { $: 0 }, tlon: { $: 0 } }, neustar: { $: 0 }, new: { $: 0 }, news: { $: 0, noticeable: { $: 0 } }, next: { $: 0 }, nextdirect: { $: 0 }, nexus: { $: 0 }, nfl: { $: 0 }, ngo: { $: 0 }, nhk: { $: 0 }, nico: { $: 0 }, nike: { $: 0 }, nikon: { $: 0 }, ninja: { $: 0 }, nissan: { $: 0 }, nissay: { $: 0 }, nokia: { $: 0 }, norton: { $: 0 }, now: { $: 0 }, nowruz: { $: 0 }, nowtv: { $: 0 }, nra: { $: 0 }, nrw: { $: 0 }, ntt: { $: 0 }, nyc: { $: 0 }, obi: { $: 0 }, observer: { $: 0 }, office: { $: 0 }, okinawa: { $: 0 }, olayan: { $: 0 }, olayangroup: { $: 0 }, ollo: { $: 0 }, omega: { $: 0 }, one: { $: 0, kin: { "*": { $: 0 } }, service: { $: 0 } }, ong: { $: 0, obl: { $: 0 } }, onl: { $: 0 }, online: { $: 0, eero: { $: 0 }, "eero-stage": { $: 0 }, websitebuilder: { $: 0 }, barsy: { $: 0 } }, ooo: { $: 0 }, open: { $: 0 }, oracle: { $: 0 }, orange: { $: 0, tech: { $: 0 } }, organic: { $: 0 }, origins: { $: 0 }, osaka: { $: 0 }, otsuka: { $: 0 }, ott: { $: 0 }, ovh: { $: 0, nerdpol: { $: 0 } }, page: { $: 0, aem: { $: 0 }, hlx: { $: 0 }, translated: { $: 0 }, codeberg: { $: 0 }, heyflow: { $: 0 }, prvcy: { $: 0 }, rocky: { $: 0 }, pdns: { $: 0 }, plesk: { $: 0 } }, panasonic: { $: 0 }, paris: { $: 0 }, pars: { $: 0 }, partners: { $: 0 }, parts: { $: 0 }, party: { $: 0 }, pay: { $: 0 }, pccw: { $: 0 }, pet: { $: 0 }, pfizer: { $: 0 }, pharmacy: { $: 0 }, phd: { $: 0 }, philips: { $: 0 }, phone: { $: 0 }, photo: { $: 0 }, photography: { $: 0 }, photos: { $: 0, framer: { $: 0 } }, physio: { $: 0 }, pics: { $: 0 }, pictet: { $: 0 }, pictures: { "1337": { $: 0 }, $: 0 }, pid: { $: 0 }, pin: { $: 0 }, ping: { $: 0 }, pink: { $: 0 }, pioneer: { $: 0 }, pizza: { $: 0, ngrok: { $: 0 } }, place: { $: 0, co: { $: 0 } }, play: { $: 0 }, playstation: { $: 0 }, plumbing: { $: 0 }, plus: { $: 0 }, pnc: { $: 0 }, pohl: { $: 0 }, poker: { $: 0 }, politie: { $: 0 }, porn: { $: 0 }, praxi: { $: 0 }, press: { $: 0 }, prime: { $: 0 }, prod: { $: 0 }, productions: { $: 0 }, prof: { $: 0 }, progressive: { $: 0 }, promo: { $: 0 }, properties: { $: 0 }, property: { $: 0 }, protection: { $: 0 }, pru: { $: 0 }, prudential: { $: 0 }, pub: { $: 0, id: { "*": { $: 0 } }, kin: { "*": { $: 0 } }, barsy: { $: 0 } }, pwc: { $: 0 }, qpon: { $: 0 }, quebec: { $: 0 }, quest: { $: 0 }, racing: { $: 0 }, radio: { $: 0 }, read: { $: 0 }, realestate: { $: 0 }, realtor: { $: 0 }, realty: { $: 0 }, recipes: { $: 0 }, red: { $: 0 }, redstone: { $: 0 }, redumbrella: { $: 0 }, rehab: { $: 0 }, reise: { $: 0 }, reisen: { $: 0 }, reit: { $: 0 }, reliance: { $: 0 }, ren: { $: 0 }, rent: { $: 0 }, rentals: { $: 0 }, repair: { $: 0 }, report: { $: 0 }, republican: { $: 0 }, rest: { $: 0 }, restaurant: { $: 0 }, review: { $: 0 }, reviews: { $: 0, aem: { $: 0 } }, rexroth: { $: 0 }, rich: { $: 0 }, richardli: { $: 0 }, ricoh: { $: 0 }, ril: { $: 0 }, rio: { $: 0 }, rip: { $: 0, clan: { $: 0 } }, rocks: { $: 0, myddns: { $: 0 }, stackit: { $: 0 }, "lima-city": { $: 0 }, webspace: { $: 0 } }, rodeo: { $: 0 }, rogers: { $: 0 }, room: { $: 0 }, rsvp: { $: 0 }, rugby: { $: 0 }, ruhr: { $: 0 }, run: { $: 0, appwrite: { "*": { $: 0 } }, development: { $: 0 }, ravendb: { $: 0 }, liara: { $: 0, iran: { $: 0 } }, servers: { $: 0 }, build: { "*": { $: 0 } }, code: { "*": { $: 0 } }, database: { "*": { $: 0 } }, migration: { "*": { $: 0 } }, onporter: { $: 0 }, repl: { $: 0 }, stackit: { $: 0 }, val: { $: 0, web: { $: 0 } }, vercel: { $: 0 }, wix: { $: 0 } }, rwe: { $: 0 }, ryukyu: { $: 0 }, saarland: { $: 0 }, safe: { $: 0 }, safety: { $: 0 }, sakura: { $: 0 }, sale: { $: 0 }, salon: { $: 0 }, samsclub: { $: 0 }, samsung: { $: 0 }, sandvik: { $: 0 }, sandvikcoromant: { $: 0 }, sanofi: { $: 0 }, sap: { $: 0 }, sarl: { $: 0 }, sas: { $: 0 }, save: { $: 0 }, saxo: { $: 0 }, sbi: { $: 0 }, sbs: { $: 0 }, scb: { $: 0 }, schaeffler: { $: 0 }, schmidt: { $: 0 }, scholarships: { $: 0 }, school: { $: 0 }, schule: { $: 0 }, schwarz: { $: 0 }, science: { $: 0 }, scot: { $: 0, gov: { $: 0, service: { $: 0 } } }, search: { $: 0 }, seat: { $: 0 }, secure: { $: 0 }, security: { $: 0 }, seek: { $: 0 }, select: { $: 0 }, sener: { $: 0 }, services: { $: 0, loginline: { $: 0 } }, seven: { $: 0 }, sew: { $: 0 }, sex: { $: 0 }, sexy: { $: 0 }, sfr: { $: 0 }, shangrila: { $: 0 }, sharp: { $: 0 }, shell: { $: 0 }, shia: { $: 0 }, shiksha: { $: 0 }, shoes: { $: 0 }, shop: { $: 0, base: { $: 0 }, hoplix: { $: 0 }, barsy: { $: 0 }, barsyonline: { $: 0 }, shopware: { $: 0 } }, shopping: { $: 0 }, shouji: { $: 0 }, show: { $: 0 }, silk: { $: 0 }, sina: { $: 0 }, singles: { $: 0 }, site: { $: 0, square: { $: 0 }, canva: { my: { $: 0 } }, cloudera: { "*": { $: 0 } }, convex: { $: 0 }, cyon: { $: 0 }, caffeine: { $: 0 }, fastvps: { $: 0 }, figma: { $: 0 }, preview: { $: 0 }, heyflow: { $: 0 }, jele: { $: 0 }, jouwweb: { $: 0 }, loginline: { $: 0 }, barsy: { $: 0 }, notion: { $: 0 }, omniwe: { $: 0 }, opensocial: { $: 0 }, madethis: { $: 0 }, platformsh: { "*": { $: 0 } }, tst: { "*": { $: 0 } }, byen: { $: 0 }, srht: { $: 0 }, novecore: { $: 0 }, cpanel: { $: 0 }, wpsquared: { $: 0 } }, ski: { $: 0 }, skin: { $: 0 }, sky: { $: 0 }, skype: { $: 0 }, sling: { $: 0 }, smart: { $: 0 }, smile: { $: 0 }, sncf: { $: 0 }, soccer: { $: 0 }, social: { $: 0 }, softbank: { $: 0 }, software: { $: 0 }, sohu: { $: 0 }, solar: { $: 0 }, solutions: { $: 0 }, song: { $: 0 }, sony: { $: 0 }, soy: { $: 0 }, spa: { $: 0 }, space: { $: 0, myfast: { $: 0 }, heiyu: { $: 0 }, hf: { $: 0, static: { $: 0 } }, "app-ionos": { $: 0 }, project: { $: 0 }, uber: { $: 0 }, xs4all: { $: 0 } }, sport: { $: 0 }, spot: { $: 0 }, srl: { $: 0 }, stada: { $: 0 }, staples: { $: 0 }, star: { $: 0 }, statebank: { $: 0 }, statefarm: { $: 0 }, stc: { $: 0 }, stcgroup: { $: 0 }, stockholm: { $: 0 }, storage: { $: 0 }, store: { $: 0, barsy: { $: 0 }, sellfy: { $: 0 }, shopware: { $: 0 }, storebase: { $: 0 } }, stream: { $: 0 }, studio: { $: 0 }, study: { $: 0 }, style: { $: 0 }, sucks: { $: 0 }, supplies: { $: 0 }, supply: { $: 0 }, support: { $: 0, barsy: { $: 0 } }, surf: { $: 0 }, surgery: { $: 0 }, suzuki: { $: 0 }, swatch: { $: 0 }, swiss: { $: 0 }, sydney: { $: 0 }, systems: { $: 0, knightpoint: { $: 0 } }, tab: { $: 0 }, taipei: { $: 0 }, talk: { $: 0 }, taobao: { $: 0 }, target: { $: 0 }, tatamotors: { $: 0 }, tatar: { $: 0 }, tattoo: { $: 0 }, tax: { $: 0 }, taxi: { $: 0 }, tci: { $: 0 }, tdk: { $: 0 }, team: { $: 0, discourse: { $: 0 }, jelastic: { $: 0 } }, tech: { $: 0, cleverapps: { $: 0 } }, technology: { $: 0, co: { $: 0 } }, temasek: { $: 0 }, tennis: { $: 0 }, teva: { $: 0 }, thd: { $: 0 }, theater: { $: 0 }, theatre: { $: 0 }, tiaa: { $: 0 }, tickets: { $: 0 }, tienda: { $: 0 }, tips: { $: 0 }, tires: { $: 0 }, tirol: { $: 0 }, tjmaxx: { $: 0 }, tjx: { $: 0 }, tkmaxx: { $: 0 }, tmall: { $: 0 }, today: { $: 0, prequalifyme: { $: 0 } }, tokyo: { $: 0 }, tools: { $: 0, addr: { dyn: { $: 0 } }, myaddr: { $: 0 } }, top: { $: 0, ntdll: { $: 0 }, wadl: { "*": { $: 0 } } }, toray: { $: 0 }, toshiba: { $: 0 }, total: { $: 0 }, tours: { $: 0 }, town: { $: 0 }, toyota: { $: 0 }, toys: { $: 0 }, trade: { $: 0 }, trading: { $: 0 }, training: { $: 0 }, travel: { $: 0 }, travelers: { $: 0 }, travelersinsurance: { $: 0 }, trust: { $: 0 }, trv: { $: 0 }, tube: { $: 0 }, tui: { $: 0 }, tunes: { $: 0 }, tushu: { $: 0 }, tvs: { $: 0 }, ubank: { $: 0 }, ubs: { $: 0 }, unicom: { $: 0 }, university: { $: 0 }, uno: { $: 0 }, uol: { $: 0 }, ups: { $: 0 }, vacations: { $: 0 }, vana: { $: 0 }, vanguard: { $: 0 }, vegas: { $: 0 }, ventures: { $: 0 }, verisign: { $: 0 }, versicherung: { $: 0 }, vet: { $: 0 }, viajes: { $: 0 }, video: { $: 0 }, vig: { $: 0 }, viking: { $: 0 }, villas: { $: 0 }, vin: { $: 0 }, vip: { $: 0 }, virgin: { $: 0 }, visa: { $: 0 }, vision: { $: 0 }, viva: { $: 0 }, vivo: { $: 0 }, vlaanderen: { $: 0 }, vodka: { $: 0 }, volvo: { $: 0 }, vote: { $: 0 }, voting: { $: 0 }, voto: { $: 0 }, voyage: { $: 0 }, wales: { $: 0 }, walmart: { $: 0 }, walter: { $: 0 }, wang: { $: 0 }, wanggou: { $: 0 }, watch: { $: 0 }, watches: { $: 0 }, weather: { $: 0 }, weatherchannel: { $: 0 }, webcam: { $: 0 }, weber: { $: 0 }, website: { $: 0, framer: { $: 0 } }, wed: { $: 0 }, wedding: { $: 0 }, weibo: { $: 0 }, weir: { $: 0 }, whoswho: { $: 0 }, wien: { $: 0 }, wiki: { $: 0, framer: { $: 0 } }, williamhill: { $: 0 }, win: { $: 0 }, windows: { $: 0 }, wine: { $: 0 }, winners: { $: 0 }, wme: { $: 0 }, wolterskluwer: { $: 0 }, woodside: { $: 0 }, work: { $: 0 }, works: { $: 0 }, world: { $: 0 }, wow: { $: 0 }, wtc: { $: 0 }, wtf: { $: 0 }, xbox: { $: 0 }, xerox: { $: 0 }, xihuan: { $: 0 }, xin: { $: 0 }, "xn--11b4c3d": { $: 0 }, "xn--1ck2e1b": { $: 0 }, "xn--1qqw23a": { $: 0 }, "xn--30rr7y": { $: 0 }, "xn--3bst00m": { $: 0 }, "xn--3ds443g": { $: 0 }, "xn--3pxu8k": { $: 0 }, "xn--42c2d9a": { $: 0 }, "xn--45q11c": { $: 0 }, "xn--4gbrim": { $: 0 }, "xn--55qw42g": { $: 0 }, "xn--55qx5d": { $: 0 }, "xn--5su34j936bgsg": { $: 0 }, "xn--5tzm5g": { $: 0 }, "xn--6frz82g": { $: 0 }, "xn--6qq986b3xl": { $: 0 }, "xn--80adxhks": { $: 0 }, "xn--80aqecdr1a": { $: 0 }, "xn--80asehdb": { $: 0 }, "xn--80aswg": { $: 0 }, "xn--8y0a063a": { $: 0 }, "xn--9dbq2a": { $: 0 }, "xn--9et52u": { $: 0 }, "xn--9krt00a": { $: 0 }, "xn--b4w605ferd": { $: 0 }, "xn--bck1b9a5dre4c": { $: 0 }, "xn--c1avg": { $: 0 }, "xn--c2br7g": { $: 0 }, "xn--cck2b3b": { $: 0 }, "xn--cckwcxetd": { $: 0 }, "xn--cg4bki": { $: 0 }, "xn--czr694b": { $: 0 }, "xn--czrs0t": { $: 0 }, "xn--czru2d": { $: 0 }, "xn--d1acj3b": { $: 0 }, "xn--eckvdtc9d": { $: 0 }, "xn--efvy88h": { $: 0 }, "xn--fct429k": { $: 0 }, "xn--fhbei": { $: 0 }, "xn--fiq228c5hs": { $: 0 }, "xn--fiq64b": { $: 0 }, "xn--fjq720a": { $: 0 }, "xn--flw351e": { $: 0 }, "xn--fzys8d69uvgm": { $: 0 }, "xn--g2xx48c": { $: 0 }, "xn--gckr3f0f": { $: 0 }, "xn--gk3at1e": { $: 0 }, "xn--hxt814e": { $: 0 }, "xn--i1b6b1a6a2e": { $: 0 }, "xn--imr513n": { $: 0 }, "xn--io0a7i": { $: 0 }, "xn--j1aef": { $: 0 }, "xn--jlq480n2rg": { $: 0 }, "xn--jvr189m": { $: 0 }, "xn--kcrx77d1x4a": { $: 0 }, "xn--kput3i": { $: 0 }, "xn--mgba3a3ejt": { $: 0 }, "xn--mgba7c0bbn0a": { $: 0 }, "xn--mgbab2bd": { $: 0 }, "xn--mgbca7dzdo": { $: 0 }, "xn--mgbi4ecexp": { $: 0 }, "xn--mgbt3dhd": { $: 0 }, "xn--mk1bu44c": { $: 0 }, "xn--mxtq1m": { $: 0 }, "xn--ngbc5azd": { $: 0 }, "xn--ngbe9e0a": { $: 0 }, "xn--ngbrx": { $: 0 }, "xn--nqv7f": { $: 0 }, "xn--nqv7fs00ema": { $: 0 }, "xn--nyqy26a": { $: 0 }, "xn--otu796d": { $: 0 }, "xn--p1acf": { $: 0, "xn--90amc": { $: 0 }, "xn--j1aef": { $: 0 }, "xn--j1ael8b": { $: 0 }, "xn--h1ahn": { $: 0 }, "xn--j1adp": { $: 0 }, "xn--c1avg": { $: 0 }, "xn--80aaa0cvac": { $: 0 }, "xn--h1aliz": { $: 0 }, "xn--90a1af": { $: 0 }, "xn--41a": { $: 0 } }, "xn--pssy2u": { $: 0 }, "xn--q9jyb4c": { $: 0 }, "xn--qcka1pmc": { $: 0 }, "xn--rhqv96g": { $: 0 }, "xn--rovu88b": { $: 0 }, "xn--ses554g": { $: 0 }, "xn--t60b56a": { $: 0 }, "xn--tckwe": { $: 0 }, "xn--tiq49xqyj": { $: 0 }, "xn--unup4y": { $: 0 }, "xn--vermgensberater-ctb": { $: 0 }, "xn--vermgensberatung-pwb": { $: 0 }, "xn--vhquv": { $: 0 }, "xn--vuq861b": { $: 0 }, "xn--w4r85el8fhu5dnra": { $: 0 }, "xn--w4rs40l": { $: 0 }, "xn--xhq521b": { $: 0 }, "xn--zfr164b": { $: 0 }, xyz: { $: 0, botdash: { $: 0 }, telebit: { "*": { $: 0 } } }, yachts: { $: 0 }, yahoo: { $: 0 }, yamaxun: { $: 0 }, yandex: { $: 0 }, yodobashi: { $: 0 }, yoga: { $: 0 }, yokohama: { $: 0 }, you: { $: 0 }, youtube: { $: 0 }, yun: { $: 0 }, zappos: { $: 0 }, zara: { $: 0 }, zero: { $: 0 }, zip: { $: 0 }, zone: { $: 0, triton: { "*": { $: 0 } }, stackit: { $: 0 }, lima: { $: 0 } }, zuerich: { $: 0 } } };
    }
  });

  // node_modules/url/node_modules/punycode/punycode.js
  var require_punycode = __commonJS({
    "node_modules/url/node_modules/punycode/punycode.js"(exports, module) {
      init_polyfills();
      (function(root) {
        var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
        var freeModule = typeof module == "object" && module && !module.nodeType && module;
        var freeGlobal = typeof global == "object" && global;
        if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) {
          root = freeGlobal;
        }
        var punycode, maxInt = 2147483647, base = 36, tMin = 1, tMax = 26, skew = 38, damp = 700, initialBias = 72, initialN = 128, delimiter = "-", regexPunycode = /^xn--/, regexNonASCII = /[^\x20-\x7E]/, regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, errors = {
          "overflow": "Overflow: input needs wider integers to process",
          "not-basic": "Illegal input >= 0x80 (not a basic code point)",
          "invalid-input": "Invalid input"
        }, baseMinusTMin = base - tMin, floor = Math.floor, stringFromCharCode = String.fromCharCode, key;
        function error(type) {
          throw new RangeError(errors[type]);
        }
        function map(array, fn) {
          var length = array.length;
          var result = [];
          while (length--) {
            result[length] = fn(array[length]);
          }
          return result;
        }
        function mapDomain(string, fn) {
          var parts = string.split("@");
          var result = "";
          if (parts.length > 1) {
            result = parts[0] + "@";
            string = parts[1];
          }
          string = string.replace(regexSeparators, ".");
          var labels = string.split(".");
          var encoded = map(labels, fn).join(".");
          return result + encoded;
        }
        function ucs2decode(string) {
          var output = [], counter = 0, length = string.length, value, extra;
          while (counter < length) {
            value = string.charCodeAt(counter++);
            if (value >= 55296 && value <= 56319 && counter < length) {
              extra = string.charCodeAt(counter++);
              if ((extra & 64512) == 56320) {
                output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
              } else {
                output.push(value);
                counter--;
              }
            } else {
              output.push(value);
            }
          }
          return output;
        }
        function ucs2encode(array) {
          return map(array, function(value) {
            var output = "";
            if (value > 65535) {
              value -= 65536;
              output += stringFromCharCode(value >>> 10 & 1023 | 55296);
              value = 56320 | value & 1023;
            }
            output += stringFromCharCode(value);
            return output;
          }).join("");
        }
        function basicToDigit(codePoint) {
          if (codePoint - 48 < 10) {
            return codePoint - 22;
          }
          if (codePoint - 65 < 26) {
            return codePoint - 65;
          }
          if (codePoint - 97 < 26) {
            return codePoint - 97;
          }
          return base;
        }
        function digitToBasic(digit, flag) {
          return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
        }
        function adapt(delta, numPoints, firstTime) {
          var k = 0;
          delta = firstTime ? floor(delta / damp) : delta >> 1;
          delta += floor(delta / numPoints);
          for (; delta > baseMinusTMin * tMax >> 1; k += base) {
            delta = floor(delta / baseMinusTMin);
          }
          return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
        }
        function decode(input) {
          var output = [], inputLength = input.length, out, i = 0, n = initialN, bias = initialBias, basic, j, index, oldi, w, k, digit, t, baseMinusT;
          basic = input.lastIndexOf(delimiter);
          if (basic < 0) {
            basic = 0;
          }
          for (j = 0; j < basic; ++j) {
            if (input.charCodeAt(j) >= 128) {
              error("not-basic");
            }
            output.push(input.charCodeAt(j));
          }
          for (index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
            for (oldi = i, w = 1, k = base; ; k += base) {
              if (index >= inputLength) {
                error("invalid-input");
              }
              digit = basicToDigit(input.charCodeAt(index++));
              if (digit >= base || digit > floor((maxInt - i) / w)) {
                error("overflow");
              }
              i += digit * w;
              t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
              if (digit < t) {
                break;
              }
              baseMinusT = base - t;
              if (w > floor(maxInt / baseMinusT)) {
                error("overflow");
              }
              w *= baseMinusT;
            }
            out = output.length + 1;
            bias = adapt(i - oldi, out, oldi == 0);
            if (floor(i / out) > maxInt - n) {
              error("overflow");
            }
            n += floor(i / out);
            i %= out;
            output.splice(i++, 0, n);
          }
          return ucs2encode(output);
        }
        function encode(input) {
          var n, delta, handledCPCount, basicLength, bias, j, m, q, k, t, currentValue, output = [], inputLength, handledCPCountPlusOne, baseMinusT, qMinusT;
          input = ucs2decode(input);
          inputLength = input.length;
          n = initialN;
          delta = 0;
          bias = initialBias;
          for (j = 0; j < inputLength; ++j) {
            currentValue = input[j];
            if (currentValue < 128) {
              output.push(stringFromCharCode(currentValue));
            }
          }
          handledCPCount = basicLength = output.length;
          if (basicLength) {
            output.push(delimiter);
          }
          while (handledCPCount < inputLength) {
            for (m = maxInt, j = 0; j < inputLength; ++j) {
              currentValue = input[j];
              if (currentValue >= n && currentValue < m) {
                m = currentValue;
              }
            }
            handledCPCountPlusOne = handledCPCount + 1;
            if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
              error("overflow");
            }
            delta += (m - n) * handledCPCountPlusOne;
            n = m;
            for (j = 0; j < inputLength; ++j) {
              currentValue = input[j];
              if (currentValue < n && ++delta > maxInt) {
                error("overflow");
              }
              if (currentValue == n) {
                for (q = delta, k = base; ; k += base) {
                  t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                  if (q < t) {
                    break;
                  }
                  qMinusT = q - t;
                  baseMinusT = base - t;
                  output.push(
                    stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
                  );
                  q = floor(qMinusT / baseMinusT);
                }
                output.push(stringFromCharCode(digitToBasic(q, 0)));
                bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                delta = 0;
                ++handledCPCount;
              }
            }
            ++delta;
            ++n;
          }
          return output.join("");
        }
        function toUnicode(input) {
          return mapDomain(input, function(string) {
            return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
          });
        }
        function toASCII(input) {
          return mapDomain(input, function(string) {
            return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
          });
        }
        punycode = {
          /**
           * A string representing the current Punycode.js version number.
           * @memberOf punycode
           * @type String
           */
          "version": "1.4.1",
          /**
           * An object of methods to convert from JavaScript's internal character
           * representation (UCS-2) to Unicode code points, and back.
           * @see <https://mathiasbynens.be/notes/javascript-encoding>
           * @memberOf punycode
           * @type Object
           */
          "ucs2": {
            "decode": ucs2decode,
            "encode": ucs2encode
          },
          "decode": decode,
          "encode": encode,
          "toASCII": toASCII,
          "toUnicode": toUnicode
        };
        if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
          define("punycode", function() {
            return punycode;
          });
        } else if (freeExports && freeModule) {
          if (module.exports == freeExports) {
            freeModule.exports = punycode;
          } else {
            for (key in punycode) {
              punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
            }
          }
        } else {
          root.punycode = punycode;
        }
      })(exports);
    }
  });

  // (disabled):node_modules/object-inspect/util.inspect
  var require_util2 = __commonJS({
    "(disabled):node_modules/object-inspect/util.inspect"() {
      init_polyfills();
    }
  });

  // node_modules/object-inspect/index.js
  var require_object_inspect = __commonJS({
    "node_modules/object-inspect/index.js"(exports, module) {
      init_polyfills();
      var hasMap = typeof Map === "function" && Map.prototype;
      var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
      var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
      var mapForEach = hasMap && Map.prototype.forEach;
      var hasSet = typeof Set === "function" && Set.prototype;
      var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
      var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
      var setForEach = hasSet && Set.prototype.forEach;
      var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
      var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
      var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
      var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
      var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
      var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
      var booleanValueOf = Boolean.prototype.valueOf;
      var objectToString = Object.prototype.toString;
      var functionToString = Function.prototype.toString;
      var $match = String.prototype.match;
      var $slice = String.prototype.slice;
      var $replace = String.prototype.replace;
      var $toUpperCase = String.prototype.toUpperCase;
      var $toLowerCase = String.prototype.toLowerCase;
      var $test = RegExp.prototype.test;
      var $concat = Array.prototype.concat;
      var $join = Array.prototype.join;
      var $arrSlice = Array.prototype.slice;
      var $floor = Math.floor;
      var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
      var gOPS = Object.getOwnPropertySymbols;
      var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
      var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
      var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
      var isEnumerable = Object.prototype.propertyIsEnumerable;
      var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
        return O.__proto__;
      } : null);
      function addNumericSeparator(num, str) {
        if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
          return str;
        }
        var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if (typeof num === "number") {
          var int = num < 0 ? -$floor(-num) : $floor(num);
          if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
          }
        }
        return $replace.call(str, sepRegex, "$&_");
      }
      var utilInspect = require_util2();
      var inspectCustom = utilInspect.custom;
      var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
      var quotes = {
        __proto__: null,
        "double": '"',
        single: "'"
      };
      var quoteREs = {
        __proto__: null,
        "double": /(["\\])/g,
        single: /(['\\])/g
      };
      module.exports = function inspect_(obj, options, depth, seen) {
        var opts = options || {};
        if (has(opts, "quoteStyle") && !has(quotes, opts.quoteStyle)) {
          throw new TypeError('option "quoteStyle" must be "single" or "double"');
        }
        if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
          throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        }
        var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
        if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
          throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        }
        if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
          throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        }
        if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
          throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        }
        var numericSeparator = opts.numericSeparator;
        if (typeof obj === "undefined") {
          return "undefined";
        }
        if (obj === null) {
          return "null";
        }
        if (typeof obj === "boolean") {
          return obj ? "true" : "false";
        }
        if (typeof obj === "string") {
          return inspectString(obj, opts);
        }
        if (typeof obj === "number") {
          if (obj === 0) {
            return Infinity / obj > 0 ? "0" : "-0";
          }
          var str = String(obj);
          return numericSeparator ? addNumericSeparator(obj, str) : str;
        }
        if (typeof obj === "bigint") {
          var bigIntStr = String(obj) + "n";
          return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
        }
        var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
        if (typeof depth === "undefined") {
          depth = 0;
        }
        if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
          return isArray(obj) ? "[Array]" : "[Object]";
        }
        var indent = getIndent(opts, depth);
        if (typeof seen === "undefined") {
          seen = [];
        } else if (indexOf(seen, obj) >= 0) {
          return "[Circular]";
        }
        function inspect(value, from, noIndent) {
          if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
          }
          if (noIndent) {
            var newOpts = {
              depth: opts.depth
            };
            if (has(opts, "quoteStyle")) {
              newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
          }
          return inspect_(value, opts, depth + 1, seen);
        }
        if (typeof obj === "function" && !isRegExp(obj)) {
          var name = nameOf(obj);
          var keys2 = arrObjKeys(obj, inspect);
          return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys2.length > 0 ? " { " + $join.call(keys2, ", ") + " }" : "");
        }
        if (isSymbol(obj)) {
          var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
          return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
        }
        if (isElement(obj)) {
          var s = "<" + $toLowerCase.call(String(obj.nodeName));
          var attrs = obj.attributes || [];
          for (var i = 0; i < attrs.length; i++) {
            s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
          }
          s += ">";
          if (obj.childNodes && obj.childNodes.length) {
            s += "...";
          }
          s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
          return s;
        }
        if (isArray(obj)) {
          if (obj.length === 0) {
            return "[]";
          }
          var xs = arrObjKeys(obj, inspect);
          if (indent && !singleLineValues(xs)) {
            return "[" + indentedJoin(xs, indent) + "]";
          }
          return "[ " + $join.call(xs, ", ") + " ]";
        }
        if (isError(obj)) {
          var parts = arrObjKeys(obj, inspect);
          if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
            return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
          }
          if (parts.length === 0) {
            return "[" + String(obj) + "]";
          }
          return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
        }
        if (typeof obj === "object" && customInspect) {
          if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
            return utilInspect(obj, { depth: maxDepth - depth });
          } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
            return obj.inspect();
          }
        }
        if (isMap(obj)) {
          var mapParts = [];
          if (mapForEach) {
            mapForEach.call(obj, function(value, key) {
              mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
            });
          }
          return collectionOf("Map", mapSize.call(obj), mapParts, indent);
        }
        if (isSet(obj)) {
          var setParts = [];
          if (setForEach) {
            setForEach.call(obj, function(value) {
              setParts.push(inspect(value, obj));
            });
          }
          return collectionOf("Set", setSize.call(obj), setParts, indent);
        }
        if (isWeakMap(obj)) {
          return weakCollectionOf("WeakMap");
        }
        if (isWeakSet(obj)) {
          return weakCollectionOf("WeakSet");
        }
        if (isWeakRef(obj)) {
          return weakCollectionOf("WeakRef");
        }
        if (isNumber(obj)) {
          return markBoxed(inspect(Number(obj)));
        }
        if (isBigInt(obj)) {
          return markBoxed(inspect(bigIntValueOf.call(obj)));
        }
        if (isBoolean(obj)) {
          return markBoxed(booleanValueOf.call(obj));
        }
        if (isString(obj)) {
          return markBoxed(inspect(String(obj)));
        }
        if (typeof window !== "undefined" && obj === window) {
          return "{ [object Window] }";
        }
        if (typeof globalThis !== "undefined" && obj === globalThis || typeof global !== "undefined" && obj === global) {
          return "{ [object globalThis] }";
        }
        if (!isDate(obj) && !isRegExp(obj)) {
          var ys = arrObjKeys(obj, inspect);
          var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
          var protoTag = obj instanceof Object ? "" : "null prototype";
          var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
          var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
          var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
          if (ys.length === 0) {
            return tag + "{}";
          }
          if (indent) {
            return tag + "{" + indentedJoin(ys, indent) + "}";
          }
          return tag + "{ " + $join.call(ys, ", ") + " }";
        }
        return String(obj);
      };
      function wrapQuotes(s, defaultStyle, opts) {
        var style = opts.quoteStyle || defaultStyle;
        var quoteChar = quotes[style];
        return quoteChar + s + quoteChar;
      }
      function quote(s) {
        return $replace.call(String(s), /"/g, "&quot;");
      }
      function canTrustToString(obj) {
        return !toStringTag || !(typeof obj === "object" && (toStringTag in obj || typeof obj[toStringTag] !== "undefined"));
      }
      function isArray(obj) {
        return toStr(obj) === "[object Array]" && canTrustToString(obj);
      }
      function isDate(obj) {
        return toStr(obj) === "[object Date]" && canTrustToString(obj);
      }
      function isRegExp(obj) {
        return toStr(obj) === "[object RegExp]" && canTrustToString(obj);
      }
      function isError(obj) {
        return toStr(obj) === "[object Error]" && canTrustToString(obj);
      }
      function isString(obj) {
        return toStr(obj) === "[object String]" && canTrustToString(obj);
      }
      function isNumber(obj) {
        return toStr(obj) === "[object Number]" && canTrustToString(obj);
      }
      function isBoolean(obj) {
        return toStr(obj) === "[object Boolean]" && canTrustToString(obj);
      }
      function isSymbol(obj) {
        if (hasShammedSymbols) {
          return obj && typeof obj === "object" && obj instanceof Symbol;
        }
        if (typeof obj === "symbol") {
          return true;
        }
        if (!obj || typeof obj !== "object" || !symToString) {
          return false;
        }
        try {
          symToString.call(obj);
          return true;
        } catch (e) {
        }
        return false;
      }
      function isBigInt(obj) {
        if (!obj || typeof obj !== "object" || !bigIntValueOf) {
          return false;
        }
        try {
          bigIntValueOf.call(obj);
          return true;
        } catch (e) {
        }
        return false;
      }
      var hasOwn = Object.prototype.hasOwnProperty || function(key) {
        return key in this;
      };
      function has(obj, key) {
        return hasOwn.call(obj, key);
      }
      function toStr(obj) {
        return objectToString.call(obj);
      }
      function nameOf(f) {
        if (f.name) {
          return f.name;
        }
        var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
        if (m) {
          return m[1];
        }
        return null;
      }
      function indexOf(xs, x) {
        if (xs.indexOf) {
          return xs.indexOf(x);
        }
        for (var i = 0, l = xs.length; i < l; i++) {
          if (xs[i] === x) {
            return i;
          }
        }
        return -1;
      }
      function isMap(x) {
        if (!mapSize || !x || typeof x !== "object") {
          return false;
        }
        try {
          mapSize.call(x);
          try {
            setSize.call(x);
          } catch (s) {
            return true;
          }
          return x instanceof Map;
        } catch (e) {
        }
        return false;
      }
      function isWeakMap(x) {
        if (!weakMapHas || !x || typeof x !== "object") {
          return false;
        }
        try {
          weakMapHas.call(x, weakMapHas);
          try {
            weakSetHas.call(x, weakSetHas);
          } catch (s) {
            return true;
          }
          return x instanceof WeakMap;
        } catch (e) {
        }
        return false;
      }
      function isWeakRef(x) {
        if (!weakRefDeref || !x || typeof x !== "object") {
          return false;
        }
        try {
          weakRefDeref.call(x);
          return true;
        } catch (e) {
        }
        return false;
      }
      function isSet(x) {
        if (!setSize || !x || typeof x !== "object") {
          return false;
        }
        try {
          setSize.call(x);
          try {
            mapSize.call(x);
          } catch (m) {
            return true;
          }
          return x instanceof Set;
        } catch (e) {
        }
        return false;
      }
      function isWeakSet(x) {
        if (!weakSetHas || !x || typeof x !== "object") {
          return false;
        }
        try {
          weakSetHas.call(x, weakSetHas);
          try {
            weakMapHas.call(x, weakMapHas);
          } catch (s) {
            return true;
          }
          return x instanceof WeakSet;
        } catch (e) {
        }
        return false;
      }
      function isElement(x) {
        if (!x || typeof x !== "object") {
          return false;
        }
        if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
          return true;
        }
        return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
      }
      function inspectString(str, opts) {
        if (str.length > opts.maxStringLength) {
          var remaining = str.length - opts.maxStringLength;
          var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
          return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
        }
        var quoteRE = quoteREs[opts.quoteStyle || "single"];
        quoteRE.lastIndex = 0;
        var s = $replace.call($replace.call(str, quoteRE, "\\$1"), /[\x00-\x1f]/g, lowbyte);
        return wrapQuotes(s, "single", opts);
      }
      function lowbyte(c) {
        var n = c.charCodeAt(0);
        var x = {
          8: "b",
          9: "t",
          10: "n",
          12: "f",
          13: "r"
        }[n];
        if (x) {
          return "\\" + x;
        }
        return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
      }
      function markBoxed(str) {
        return "Object(" + str + ")";
      }
      function weakCollectionOf(type) {
        return type + " { ? }";
      }
      function collectionOf(type, size, entries2, indent) {
        var joinedEntries = indent ? indentedJoin(entries2, indent) : $join.call(entries2, ", ");
        return type + " (" + size + ") {" + joinedEntries + "}";
      }
      function singleLineValues(xs) {
        for (var i = 0; i < xs.length; i++) {
          if (indexOf(xs[i], "\n") >= 0) {
            return false;
          }
        }
        return true;
      }
      function getIndent(opts, depth) {
        var baseIndent;
        if (opts.indent === "	") {
          baseIndent = "	";
        } else if (typeof opts.indent === "number" && opts.indent > 0) {
          baseIndent = $join.call(Array(opts.indent + 1), " ");
        } else {
          return null;
        }
        return {
          base: baseIndent,
          prev: $join.call(Array(depth + 1), baseIndent)
        };
      }
      function indentedJoin(xs, indent) {
        if (xs.length === 0) {
          return "";
        }
        var lineJoiner = "\n" + indent.prev + indent.base;
        return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
      }
      function arrObjKeys(obj, inspect) {
        var isArr = isArray(obj);
        var xs = [];
        if (isArr) {
          xs.length = obj.length;
          for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
          }
        }
        var syms = typeof gOPS === "function" ? gOPS(obj) : [];
        var symMap;
        if (hasShammedSymbols) {
          symMap = {};
          for (var k = 0; k < syms.length; k++) {
            symMap["$" + syms[k]] = syms[k];
          }
        }
        for (var key in obj) {
          if (!has(obj, key)) {
            continue;
          }
          if (isArr && String(Number(key)) === key && key < obj.length) {
            continue;
          }
          if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
            continue;
          } else if ($test.call(/[^\w$]/, key)) {
            xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
          } else {
            xs.push(key + ": " + inspect(obj[key], obj));
          }
        }
        if (typeof gOPS === "function") {
          for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
              xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
            }
          }
        }
        return xs;
      }
    }
  });

  // node_modules/side-channel-list/index.js
  var require_side_channel_list = __commonJS({
    "node_modules/side-channel-list/index.js"(exports, module) {
      "use strict";
      init_polyfills();
      var inspect = require_object_inspect();
      var $TypeError = require_type();
      var listGetNode = function(list, key, isDelete) {
        var prev = list;
        var curr;
        for (; (curr = prev.next) != null; prev = curr) {
          if (curr.key === key) {
            prev.next = curr.next;
            if (!isDelete) {
              curr.next = /** @type {NonNullable<typeof list.next>} */
              list.next;
              list.next = curr;
            }
            return curr;
          }
        }
      };
      var listGet = function(objects, key) {
        if (!objects) {
          return void 0;
        }
        var node = listGetNode(objects, key);
        return node && node.value;
      };
      var listSet = function(objects, key, value) {
        var node = listGetNode(objects, key);
        if (node) {
          node.value = value;
        } else {
          objects.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
          {
            // eslint-disable-line no-param-reassign, no-extra-parens
            key,
            next: objects.next,
            value
          };
        }
      };
      var listHas = function(objects, key) {
        if (!objects) {
          return false;
        }
        return !!listGetNode(objects, key);
      };
      var listDelete = function(objects, key) {
        if (objects) {
          return listGetNode(objects, key, true);
        }
      };
      module.exports = function getSideChannelList() {
        var $o;
        var channel = {
          assert: function(key) {
            if (!channel.has(key)) {
              throw new $TypeError("Side channel does not contain " + inspect(key));
            }
          },
          "delete": function(key) {
            var root = $o && $o.next;
            var deletedNode = listDelete($o, key);
            if (deletedNode && root && root === deletedNode) {
              $o = void 0;
            }
            return !!deletedNode;
          },
          get: function(key) {
            return listGet($o, key);
          },
          has: function(key) {
            return listHas($o, key);
          },
          set: function(key, value) {
            if (!$o) {
              $o = {
                next: void 0
              };
            }
            listSet(
              /** @type {NonNullable<typeof $o>} */
              $o,
              key,
              value
            );
          }
        };
        return channel;
      };
    }
  });

  // node_modules/side-channel-map/index.js
  var require_side_channel_map = __commonJS({
    "node_modules/side-channel-map/index.js"(exports, module) {
      "use strict";
      init_polyfills();
      var GetIntrinsic = require_get_intrinsic();
      var callBound = require_call_bound();
      var inspect = require_object_inspect();
      var $TypeError = require_type();
      var $Map = GetIntrinsic("%Map%", true);
      var $mapGet = callBound("Map.prototype.get", true);
      var $mapSet = callBound("Map.prototype.set", true);
      var $mapHas = callBound("Map.prototype.has", true);
      var $mapDelete = callBound("Map.prototype.delete", true);
      var $mapSize = callBound("Map.prototype.size", true);
      module.exports = !!$Map && /** @type {Exclude<import('.'), false>} */
      function getSideChannelMap() {
        var $m;
        var channel = {
          assert: function(key) {
            if (!channel.has(key)) {
              throw new $TypeError("Side channel does not contain " + inspect(key));
            }
          },
          "delete": function(key) {
            if ($m) {
              var result = $mapDelete($m, key);
              if ($mapSize($m) === 0) {
                $m = void 0;
              }
              return result;
            }
            return false;
          },
          get: function(key) {
            if ($m) {
              return $mapGet($m, key);
            }
          },
          has: function(key) {
            if ($m) {
              return $mapHas($m, key);
            }
            return false;
          },
          set: function(key, value) {
            if (!$m) {
              $m = new $Map();
            }
            $mapSet($m, key, value);
          }
        };
        return channel;
      };
    }
  });

  // node_modules/side-channel-weakmap/index.js
  var require_side_channel_weakmap = __commonJS({
    "node_modules/side-channel-weakmap/index.js"(exports, module) {
      "use strict";
      init_polyfills();
      var GetIntrinsic = require_get_intrinsic();
      var callBound = require_call_bound();
      var inspect = require_object_inspect();
      var getSideChannelMap = require_side_channel_map();
      var $TypeError = require_type();
      var $WeakMap = GetIntrinsic("%WeakMap%", true);
      var $weakMapGet = callBound("WeakMap.prototype.get", true);
      var $weakMapSet = callBound("WeakMap.prototype.set", true);
      var $weakMapHas = callBound("WeakMap.prototype.has", true);
      var $weakMapDelete = callBound("WeakMap.prototype.delete", true);
      module.exports = $WeakMap ? (
        /** @type {Exclude<import('.'), false>} */
        function getSideChannelWeakMap() {
          var $wm;
          var $m;
          var channel = {
            assert: function(key) {
              if (!channel.has(key)) {
                throw new $TypeError("Side channel does not contain " + inspect(key));
              }
            },
            "delete": function(key) {
              if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                if ($wm) {
                  return $weakMapDelete($wm, key);
                }
              } else if (getSideChannelMap) {
                if ($m) {
                  return $m["delete"](key);
                }
              }
              return false;
            },
            get: function(key) {
              if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                if ($wm) {
                  return $weakMapGet($wm, key);
                }
              }
              return $m && $m.get(key);
            },
            has: function(key) {
              if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                if ($wm) {
                  return $weakMapHas($wm, key);
                }
              }
              return !!$m && $m.has(key);
            },
            set: function(key, value) {
              if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                if (!$wm) {
                  $wm = new $WeakMap();
                }
                $weakMapSet($wm, key, value);
              } else if (getSideChannelMap) {
                if (!$m) {
                  $m = getSideChannelMap();
                }
                $m.set(key, value);
              }
            }
          };
          return channel;
        }
      ) : getSideChannelMap;
    }
  });

  // node_modules/side-channel/index.js
  var require_side_channel = __commonJS({
    "node_modules/side-channel/index.js"(exports, module) {
      "use strict";
      init_polyfills();
      var $TypeError = require_type();
      var inspect = require_object_inspect();
      var getSideChannelList = require_side_channel_list();
      var getSideChannelMap = require_side_channel_map();
      var getSideChannelWeakMap = require_side_channel_weakmap();
      var makeChannel = getSideChannelWeakMap || getSideChannelMap || getSideChannelList;
      module.exports = function getSideChannel() {
        var $channelData;
        var channel = {
          assert: function(key) {
            if (!channel.has(key)) {
              throw new $TypeError("Side channel does not contain " + inspect(key));
            }
          },
          "delete": function(key) {
            return !!$channelData && $channelData["delete"](key);
          },
          get: function(key) {
            return $channelData && $channelData.get(key);
          },
          has: function(key) {
            return !!$channelData && $channelData.has(key);
          },
          set: function(key, value) {
            if (!$channelData) {
              $channelData = makeChannel();
            }
            $channelData.set(key, value);
          }
        };
        return channel;
      };
    }
  });

  // node_modules/qs/lib/formats.js
  var require_formats = __commonJS({
    "node_modules/qs/lib/formats.js"(exports, module) {
      "use strict";
      init_polyfills();
      var replace = String.prototype.replace;
      var percentTwenties = /%20/g;
      var Format = {
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
      };
      module.exports = {
        "default": Format.RFC3986,
        formatters: {
          RFC1738: function(value) {
            return replace.call(value, percentTwenties, "+");
          },
          RFC3986: function(value) {
            return String(value);
          }
        },
        RFC1738: Format.RFC1738,
        RFC3986: Format.RFC3986
      };
    }
  });

  // node_modules/qs/lib/utils.js
  var require_utils = __commonJS({
    "node_modules/qs/lib/utils.js"(exports, module) {
      "use strict";
      init_polyfills();
      var formats = require_formats();
      var getSideChannel = require_side_channel();
      var has = Object.prototype.hasOwnProperty;
      var isArray = Array.isArray;
      var overflowChannel = getSideChannel();
      var markOverflow = function markOverflow2(obj, maxIndex) {
        overflowChannel.set(obj, maxIndex);
        return obj;
      };
      var isOverflow = function isOverflow2(obj) {
        return overflowChannel.has(obj);
      };
      var getMaxIndex = function getMaxIndex2(obj) {
        return overflowChannel.get(obj);
      };
      var setMaxIndex = function setMaxIndex2(obj, maxIndex) {
        overflowChannel.set(obj, maxIndex);
      };
      var hexTable = (function() {
        var array = [];
        for (var i = 0; i < 256; ++i) {
          array[array.length] = "%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase();
        }
        return array;
      })();
      var compactQueue = function compactQueue2(queue) {
        while (queue.length > 1) {
          var item = queue.pop();
          var obj = item.obj[item.prop];
          if (isArray(obj)) {
            var compacted = [];
            for (var j = 0; j < obj.length; ++j) {
              if (typeof obj[j] !== "undefined") {
                compacted[compacted.length] = obj[j];
              }
            }
            item.obj[item.prop] = compacted;
          }
        }
      };
      var arrayToObject = function arrayToObject2(source, options) {
        var obj = options && options.plainObjects ? { __proto__: null } : {};
        for (var i = 0; i < source.length; ++i) {
          if (typeof source[i] !== "undefined") {
            obj[i] = source[i];
          }
        }
        return obj;
      };
      var merge = function merge2(target, source, options) {
        if (!source) {
          return target;
        }
        if (typeof source !== "object" && typeof source !== "function") {
          if (isArray(target)) {
            var nextIndex = target.length;
            if (options && typeof options.arrayLimit === "number" && nextIndex > options.arrayLimit) {
              return markOverflow(arrayToObject(target.concat(source), options), nextIndex);
            }
            target[nextIndex] = source;
          } else if (target && typeof target === "object") {
            if (isOverflow(target)) {
              var newIndex = getMaxIndex(target) + 1;
              target[newIndex] = source;
              setMaxIndex(target, newIndex);
            } else if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
              target[source] = true;
            }
          } else {
            return [target, source];
          }
          return target;
        }
        if (!target || typeof target !== "object") {
          if (isOverflow(source)) {
            var sourceKeys = Object.keys(source);
            var result = options && options.plainObjects ? { __proto__: null, 0: target } : { 0: target };
            for (var m = 0; m < sourceKeys.length; m++) {
              var oldKey = parseInt(sourceKeys[m], 10);
              result[oldKey + 1] = source[sourceKeys[m]];
            }
            return markOverflow(result, getMaxIndex(source) + 1);
          }
          var combined = [target].concat(source);
          if (options && typeof options.arrayLimit === "number" && combined.length > options.arrayLimit) {
            return markOverflow(arrayToObject(combined, options), combined.length - 1);
          }
          return combined;
        }
        var mergeTarget = target;
        if (isArray(target) && !isArray(source)) {
          mergeTarget = arrayToObject(target, options);
        }
        if (isArray(target) && isArray(source)) {
          source.forEach(function(item, i) {
            if (has.call(target, i)) {
              var targetItem = target[i];
              if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
                target[i] = merge2(targetItem, item, options);
              } else {
                target[target.length] = item;
              }
            } else {
              target[i] = item;
            }
          });
          return target;
        }
        return Object.keys(source).reduce(function(acc, key) {
          var value = source[key];
          if (has.call(acc, key)) {
            acc[key] = merge2(acc[key], value, options);
          } else {
            acc[key] = value;
          }
          if (isOverflow(source) && !isOverflow(acc)) {
            markOverflow(acc, getMaxIndex(source));
          }
          if (isOverflow(acc)) {
            var keyNum = parseInt(key, 10);
            if (String(keyNum) === key && keyNum >= 0 && keyNum > getMaxIndex(acc)) {
              setMaxIndex(acc, keyNum);
            }
          }
          return acc;
        }, mergeTarget);
      };
      var assign = function assignSingleSource(target, source) {
        return Object.keys(source).reduce(function(acc, key) {
          acc[key] = source[key];
          return acc;
        }, target);
      };
      var decode = function(str, defaultDecoder, charset) {
        var strWithoutPlus = str.replace(/\+/g, " ");
        if (charset === "iso-8859-1") {
          return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
        }
        try {
          return decodeURIComponent(strWithoutPlus);
        } catch (e) {
          return strWithoutPlus;
        }
      };
      var limit = 1024;
      var encode = function encode2(str, defaultEncoder, charset, kind, format) {
        if (str.length === 0) {
          return str;
        }
        var string = str;
        if (typeof str === "symbol") {
          string = Symbol.prototype.toString.call(str);
        } else if (typeof str !== "string") {
          string = String(str);
        }
        if (charset === "iso-8859-1") {
          return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
            return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
          });
        }
        var out = "";
        for (var j = 0; j < string.length; j += limit) {
          var segment = string.length >= limit ? string.slice(j, j + limit) : string;
          var arr = [];
          for (var i = 0; i < segment.length; ++i) {
            var c = segment.charCodeAt(i);
            if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats.RFC1738 && (c === 40 || c === 41)) {
              arr[arr.length] = segment.charAt(i);
              continue;
            }
            if (c < 128) {
              arr[arr.length] = hexTable[c];
              continue;
            }
            if (c < 2048) {
              arr[arr.length] = hexTable[192 | c >> 6] + hexTable[128 | c & 63];
              continue;
            }
            if (c < 55296 || c >= 57344) {
              arr[arr.length] = hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
              continue;
            }
            i += 1;
            c = 65536 + ((c & 1023) << 10 | segment.charCodeAt(i) & 1023);
            arr[arr.length] = hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
          }
          out += arr.join("");
        }
        return out;
      };
      var compact = function compact2(value) {
        var queue = [{ obj: { o: value }, prop: "o" }];
        var refs = [];
        for (var i = 0; i < queue.length; ++i) {
          var item = queue[i];
          var obj = item.obj[item.prop];
          var keys2 = Object.keys(obj);
          for (var j = 0; j < keys2.length; ++j) {
            var key = keys2[j];
            var val = obj[key];
            if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
              queue[queue.length] = { obj, prop: key };
              refs[refs.length] = val;
            }
          }
        }
        compactQueue(queue);
        return value;
      };
      var isRegExp = function isRegExp2(obj) {
        return Object.prototype.toString.call(obj) === "[object RegExp]";
      };
      var isBuffer = function isBuffer2(obj) {
        if (!obj || typeof obj !== "object") {
          return false;
        }
        return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
      };
      var combine = function combine2(a, b, arrayLimit, plainObjects) {
        if (isOverflow(a)) {
          var newIndex = getMaxIndex(a) + 1;
          a[newIndex] = b;
          setMaxIndex(a, newIndex);
          return a;
        }
        var result = [].concat(a, b);
        if (result.length > arrayLimit) {
          return markOverflow(arrayToObject(result, { plainObjects }), result.length - 1);
        }
        return result;
      };
      var maybeMap = function maybeMap2(val, fn) {
        if (isArray(val)) {
          var mapped = [];
          for (var i = 0; i < val.length; i += 1) {
            mapped[mapped.length] = fn(val[i]);
          }
          return mapped;
        }
        return fn(val);
      };
      module.exports = {
        arrayToObject,
        assign,
        combine,
        compact,
        decode,
        encode,
        isBuffer,
        isOverflow,
        isRegExp,
        markOverflow,
        maybeMap,
        merge
      };
    }
  });

  // node_modules/qs/lib/stringify.js
  var require_stringify = __commonJS({
    "node_modules/qs/lib/stringify.js"(exports, module) {
      "use strict";
      init_polyfills();
      var getSideChannel = require_side_channel();
      var utils = require_utils();
      var formats = require_formats();
      var has = Object.prototype.hasOwnProperty;
      var arrayPrefixGenerators = {
        brackets: function brackets(prefix) {
          return prefix + "[]";
        },
        comma: "comma",
        indices: function indices(prefix, key) {
          return prefix + "[" + key + "]";
        },
        repeat: function repeat(prefix) {
          return prefix;
        }
      };
      var isArray = Array.isArray;
      var push = Array.prototype.push;
      var pushToArray = function(arr, valueOrArray) {
        push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
      };
      var toISO = Date.prototype.toISOString;
      var defaultFormat = formats["default"];
      var defaults = {
        addQueryPrefix: false,
        allowDots: false,
        allowEmptyArrays: false,
        arrayFormat: "indices",
        charset: "utf-8",
        charsetSentinel: false,
        commaRoundTrip: false,
        delimiter: "&",
        encode: true,
        encodeDotInKeys: false,
        encoder: utils.encode,
        encodeValuesOnly: false,
        filter: void 0,
        format: defaultFormat,
        formatter: formats.formatters[defaultFormat],
        // deprecated
        indices: false,
        serializeDate: function serializeDate(date) {
          return toISO.call(date);
        },
        skipNulls: false,
        strictNullHandling: false
      };
      var isNonNullishPrimitive = function isNonNullishPrimitive2(v) {
        return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
      };
      var sentinel = {};
      var stringify = function stringify2(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
        var obj = object;
        var tmpSc = sideChannel;
        var step = 0;
        var findFlag = false;
        while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
          var pos = tmpSc.get(object);
          step += 1;
          if (typeof pos !== "undefined") {
            if (pos === step) {
              throw new RangeError("Cyclic object value");
            } else {
              findFlag = true;
            }
          }
          if (typeof tmpSc.get(sentinel) === "undefined") {
            step = 0;
          }
        }
        if (typeof filter === "function") {
          obj = filter(prefix, obj);
        } else if (obj instanceof Date) {
          obj = serializeDate(obj);
        } else if (generateArrayPrefix === "comma" && isArray(obj)) {
          obj = utils.maybeMap(obj, function(value2) {
            if (value2 instanceof Date) {
              return serializeDate(value2);
            }
            return value2;
          });
        }
        if (obj === null) {
          if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, "key", format) : prefix;
          }
          obj = "";
        }
        if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
          if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key", format);
            return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format))];
          }
          return [formatter(prefix) + "=" + formatter(String(obj))];
        }
        var values2 = [];
        if (typeof obj === "undefined") {
          return values2;
        }
        var objKeys;
        if (generateArrayPrefix === "comma" && isArray(obj)) {
          if (encodeValuesOnly && encoder) {
            obj = utils.maybeMap(obj, encoder);
          }
          objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
        } else if (isArray(filter)) {
          objKeys = filter;
        } else {
          var keys2 = Object.keys(obj);
          objKeys = sort ? keys2.sort(sort) : keys2;
        }
        var encodedPrefix = encodeDotInKeys ? String(prefix).replace(/\./g, "%2E") : String(prefix);
        var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? encodedPrefix + "[]" : encodedPrefix;
        if (allowEmptyArrays && isArray(obj) && obj.length === 0) {
          return adjustedPrefix + "[]";
        }
        for (var j = 0; j < objKeys.length; ++j) {
          var key = objKeys[j];
          var value = typeof key === "object" && key && typeof key.value !== "undefined" ? key.value : obj[key];
          if (skipNulls && value === null) {
            continue;
          }
          var encodedKey = allowDots && encodeDotInKeys ? String(key).replace(/\./g, "%2E") : String(key);
          var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + encodedKey : "[" + encodedKey + "]");
          sideChannel.set(object, step);
          var valueSideChannel = getSideChannel();
          valueSideChannel.set(sentinel, sideChannel);
          pushToArray(values2, stringify2(
            value,
            keyPrefix,
            generateArrayPrefix,
            commaRoundTrip,
            allowEmptyArrays,
            strictNullHandling,
            skipNulls,
            encodeDotInKeys,
            generateArrayPrefix === "comma" && encodeValuesOnly && isArray(obj) ? null : encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset,
            valueSideChannel
          ));
        }
        return values2;
      };
      var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
        if (!opts) {
          return defaults;
        }
        if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
          throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
        }
        if (typeof opts.encodeDotInKeys !== "undefined" && typeof opts.encodeDotInKeys !== "boolean") {
          throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
        }
        if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
          throw new TypeError("Encoder has to be a function.");
        }
        var charset = opts.charset || defaults.charset;
        if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        }
        var format = formats["default"];
        if (typeof opts.format !== "undefined") {
          if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError("Unknown format option provided.");
          }
          format = opts.format;
        }
        var formatter = formats.formatters[format];
        var filter = defaults.filter;
        if (typeof opts.filter === "function" || isArray(opts.filter)) {
          filter = opts.filter;
        }
        var arrayFormat;
        if (opts.arrayFormat in arrayPrefixGenerators) {
          arrayFormat = opts.arrayFormat;
        } else if ("indices" in opts) {
          arrayFormat = opts.indices ? "indices" : "repeat";
        } else {
          arrayFormat = defaults.arrayFormat;
        }
        if ("commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
          throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
        }
        var allowDots = typeof opts.allowDots === "undefined" ? opts.encodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
        return {
          addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
          allowDots,
          allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
          arrayFormat,
          charset,
          charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
          commaRoundTrip: !!opts.commaRoundTrip,
          delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
          encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
          encodeDotInKeys: typeof opts.encodeDotInKeys === "boolean" ? opts.encodeDotInKeys : defaults.encodeDotInKeys,
          encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
          encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
          filter,
          format,
          formatter,
          serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
          skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
          sort: typeof opts.sort === "function" ? opts.sort : null,
          strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
        };
      };
      module.exports = function(object, opts) {
        var obj = object;
        var options = normalizeStringifyOptions(opts);
        var objKeys;
        var filter;
        if (typeof options.filter === "function") {
          filter = options.filter;
          obj = filter("", obj);
        } else if (isArray(options.filter)) {
          filter = options.filter;
          objKeys = filter;
        }
        var keys2 = [];
        if (typeof obj !== "object" || obj === null) {
          return "";
        }
        var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
        var commaRoundTrip = generateArrayPrefix === "comma" && options.commaRoundTrip;
        if (!objKeys) {
          objKeys = Object.keys(obj);
        }
        if (options.sort) {
          objKeys.sort(options.sort);
        }
        var sideChannel = getSideChannel();
        for (var i = 0; i < objKeys.length; ++i) {
          var key = objKeys[i];
          var value = obj[key];
          if (options.skipNulls && value === null) {
            continue;
          }
          pushToArray(keys2, stringify(
            value,
            key,
            generateArrayPrefix,
            commaRoundTrip,
            options.allowEmptyArrays,
            options.strictNullHandling,
            options.skipNulls,
            options.encodeDotInKeys,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset,
            sideChannel
          ));
        }
        var joined = keys2.join(options.delimiter);
        var prefix = options.addQueryPrefix === true ? "?" : "";
        if (options.charsetSentinel) {
          if (options.charset === "iso-8859-1") {
            prefix += "utf8=%26%2310003%3B&";
          } else {
            prefix += "utf8=%E2%9C%93&";
          }
        }
        return joined.length > 0 ? prefix + joined : "";
      };
    }
  });

  // node_modules/qs/lib/parse.js
  var require_parse = __commonJS({
    "node_modules/qs/lib/parse.js"(exports, module) {
      "use strict";
      init_polyfills();
      var utils = require_utils();
      var has = Object.prototype.hasOwnProperty;
      var isArray = Array.isArray;
      var defaults = {
        allowDots: false,
        allowEmptyArrays: false,
        allowPrototypes: false,
        allowSparse: false,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: false,
        comma: false,
        decodeDotInKeys: false,
        decoder: utils.decode,
        delimiter: "&",
        depth: 5,
        duplicates: "combine",
        ignoreQueryPrefix: false,
        interpretNumericEntities: false,
        parameterLimit: 1e3,
        parseArrays: true,
        plainObjects: false,
        strictDepth: false,
        strictNullHandling: false,
        throwOnLimitExceeded: false
      };
      var interpretNumericEntities = function(str) {
        return str.replace(/&#(\d+);/g, function($0, numberStr) {
          return String.fromCharCode(parseInt(numberStr, 10));
        });
      };
      var parseArrayValue = function(val, options, currentArrayLength) {
        if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
          return val.split(",");
        }
        if (options.throwOnLimitExceeded && currentArrayLength >= options.arrayLimit) {
          throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
        }
        return val;
      };
      var isoSentinel = "utf8=%26%2310003%3B";
      var charsetSentinel = "utf8=%E2%9C%93";
      var parseValues = function parseQueryStringValues(str, options) {
        var obj = { __proto__: null };
        var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
        cleanStr = cleanStr.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
        var parts = cleanStr.split(
          options.delimiter,
          options.throwOnLimitExceeded ? limit + 1 : limit
        );
        if (options.throwOnLimitExceeded && parts.length > limit) {
          throw new RangeError("Parameter limit exceeded. Only " + limit + " parameter" + (limit === 1 ? "" : "s") + " allowed.");
        }
        var skipIndex = -1;
        var i;
        var charset = options.charset;
        if (options.charsetSentinel) {
          for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf("utf8=") === 0) {
              if (parts[i] === charsetSentinel) {
                charset = "utf-8";
              } else if (parts[i] === isoSentinel) {
                charset = "iso-8859-1";
              }
              skipIndex = i;
              i = parts.length;
            }
          }
        }
        for (i = 0; i < parts.length; ++i) {
          if (i === skipIndex) {
            continue;
          }
          var part = parts[i];
          var bracketEqualsPos = part.indexOf("]=");
          var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
          var key;
          var val;
          if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, "key");
            val = options.strictNullHandling ? null : "";
          } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
            if (key !== null) {
              val = utils.maybeMap(
                parseArrayValue(
                  part.slice(pos + 1),
                  options,
                  isArray(obj[key]) ? obj[key].length : 0
                ),
                function(encodedVal) {
                  return options.decoder(encodedVal, defaults.decoder, charset, "value");
                }
              );
            }
          }
          if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
            val = interpretNumericEntities(String(val));
          }
          if (part.indexOf("[]=") > -1) {
            val = isArray(val) ? [val] : val;
          }
          if (options.comma && isArray(val) && val.length > options.arrayLimit) {
            if (options.throwOnLimitExceeded) {
              throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
            }
            val = utils.combine([], val, options.arrayLimit, options.plainObjects);
          }
          if (key !== null) {
            var existing = has.call(obj, key);
            if (existing && options.duplicates === "combine") {
              obj[key] = utils.combine(
                obj[key],
                val,
                options.arrayLimit,
                options.plainObjects
              );
            } else if (!existing || options.duplicates === "last") {
              obj[key] = val;
            }
          }
        }
        return obj;
      };
      var parseObject = function(chain, val, options, valuesParsed) {
        var currentArrayLength = 0;
        if (chain.length > 0 && chain[chain.length - 1] === "[]") {
          var parentKey = chain.slice(0, -1).join("");
          currentArrayLength = Array.isArray(val) && val[parentKey] ? val[parentKey].length : 0;
        }
        var leaf = valuesParsed ? val : parseArrayValue(val, options, currentArrayLength);
        for (var i = chain.length - 1; i >= 0; --i) {
          var obj;
          var root = chain[i];
          if (root === "[]" && options.parseArrays) {
            if (utils.isOverflow(leaf)) {
              obj = leaf;
            } else {
              obj = options.allowEmptyArrays && (leaf === "" || options.strictNullHandling && leaf === null) ? [] : utils.combine(
                [],
                leaf,
                options.arrayLimit,
                options.plainObjects
              );
            }
          } else {
            obj = options.plainObjects ? { __proto__: null } : {};
            var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
            var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, ".") : cleanRoot;
            var index = parseInt(decodedRoot, 10);
            var isValidArrayIndex = !isNaN(index) && root !== decodedRoot && String(index) === decodedRoot && index >= 0 && options.parseArrays;
            if (!options.parseArrays && decodedRoot === "") {
              obj = { 0: leaf };
            } else if (isValidArrayIndex && index < options.arrayLimit) {
              obj = [];
              obj[index] = leaf;
            } else if (isValidArrayIndex && options.throwOnLimitExceeded) {
              throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
            } else if (isValidArrayIndex) {
              obj[index] = leaf;
              utils.markOverflow(obj, index);
            } else if (decodedRoot !== "__proto__") {
              obj[decodedRoot] = leaf;
            }
          }
          leaf = obj;
        }
        return leaf;
      };
      var splitKeyIntoSegments = function splitKeyIntoSegments2(givenKey, options) {
        var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
        if (options.depth <= 0) {
          if (!options.plainObjects && has.call(Object.prototype, key)) {
            if (!options.allowPrototypes) {
              return;
            }
          }
          return [key];
        }
        var brackets = /(\[[^[\]]*])/;
        var child = /(\[[^[\]]*])/g;
        var segment = brackets.exec(key);
        var parent = segment ? key.slice(0, segment.index) : key;
        var keys2 = [];
        if (parent) {
          if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
              return;
            }
          }
          keys2[keys2.length] = parent;
        }
        var i = 0;
        while ((segment = child.exec(key)) !== null && i < options.depth) {
          i += 1;
          var segmentContent = segment[1].slice(1, -1);
          if (!options.plainObjects && has.call(Object.prototype, segmentContent)) {
            if (!options.allowPrototypes) {
              return;
            }
          }
          keys2[keys2.length] = segment[1];
        }
        if (segment) {
          if (options.strictDepth === true) {
            throw new RangeError("Input depth exceeded depth option of " + options.depth + " and strictDepth is true");
          }
          keys2[keys2.length] = "[" + key.slice(segment.index) + "]";
        }
        return keys2;
      };
      var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
        if (!givenKey) {
          return;
        }
        var keys2 = splitKeyIntoSegments(givenKey, options);
        if (!keys2) {
          return;
        }
        return parseObject(keys2, val, options, valuesParsed);
      };
      var normalizeParseOptions = function normalizeParseOptions2(opts) {
        if (!opts) {
          return defaults;
        }
        if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
          throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
        }
        if (typeof opts.decodeDotInKeys !== "undefined" && typeof opts.decodeDotInKeys !== "boolean") {
          throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
        }
        if (opts.decoder !== null && typeof opts.decoder !== "undefined" && typeof opts.decoder !== "function") {
          throw new TypeError("Decoder has to be a function.");
        }
        if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        }
        if (typeof opts.throwOnLimitExceeded !== "undefined" && typeof opts.throwOnLimitExceeded !== "boolean") {
          throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
        }
        var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
        var duplicates = typeof opts.duplicates === "undefined" ? defaults.duplicates : opts.duplicates;
        if (duplicates !== "combine" && duplicates !== "first" && duplicates !== "last") {
          throw new TypeError("The duplicates option must be either combine, first, or last");
        }
        var allowDots = typeof opts.allowDots === "undefined" ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
        return {
          allowDots,
          allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
          allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
          allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
          arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
          charset,
          charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
          comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
          decodeDotInKeys: typeof opts.decodeDotInKeys === "boolean" ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
          decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
          delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
          // eslint-disable-next-line no-implicit-coercion, no-extra-parens
          depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
          duplicates,
          ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
          interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
          parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
          parseArrays: opts.parseArrays !== false,
          plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
          strictDepth: typeof opts.strictDepth === "boolean" ? !!opts.strictDepth : defaults.strictDepth,
          strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling,
          throwOnLimitExceeded: typeof opts.throwOnLimitExceeded === "boolean" ? opts.throwOnLimitExceeded : false
        };
      };
      module.exports = function(str, opts) {
        var options = normalizeParseOptions(opts);
        if (str === "" || str === null || typeof str === "undefined") {
          return options.plainObjects ? { __proto__: null } : {};
        }
        var tempObj = typeof str === "string" ? parseValues(str, options) : str;
        var obj = options.plainObjects ? { __proto__: null } : {};
        var keys2 = Object.keys(tempObj);
        for (var i = 0; i < keys2.length; ++i) {
          var key = keys2[i];
          var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
          obj = utils.merge(obj, newObj, options);
        }
        if (options.allowSparse === true) {
          return obj;
        }
        return utils.compact(obj);
      };
    }
  });

  // node_modules/qs/lib/index.js
  var require_lib2 = __commonJS({
    "node_modules/qs/lib/index.js"(exports, module) {
      "use strict";
      init_polyfills();
      var stringify = require_stringify();
      var parse = require_parse();
      var formats = require_formats();
      module.exports = {
        formats,
        parse,
        stringify
      };
    }
  });

  // node_modules/url/url.js
  var require_url = __commonJS({
    "node_modules/url/url.js"(exports) {
      "use strict";
      init_polyfills();
      var punycode = require_punycode();
      function Url() {
        this.protocol = null;
        this.slashes = null;
        this.auth = null;
        this.host = null;
        this.port = null;
        this.hostname = null;
        this.hash = null;
        this.search = null;
        this.query = null;
        this.pathname = null;
        this.path = null;
        this.href = null;
      }
      var protocolPattern = /^([a-z0-9.+-]+:)/i;
      var portPattern = /:[0-9]*$/;
      var simplePathPattern = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/;
      var delims = [
        "<",
        ">",
        '"',
        "`",
        " ",
        "\r",
        "\n",
        "	"
      ];
      var unwise = [
        "{",
        "}",
        "|",
        "\\",
        "^",
        "`"
      ].concat(delims);
      var autoEscape = ["'"].concat(unwise);
      var nonHostChars = [
        "%",
        "/",
        "?",
        ";",
        "#"
      ].concat(autoEscape);
      var hostEndingChars = [
        "/",
        "?",
        "#"
      ];
      var hostnameMaxLen = 255;
      var hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/;
      var hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
      var unsafeProtocol = {
        javascript: true,
        "javascript:": true
      };
      var hostlessProtocol = {
        javascript: true,
        "javascript:": true
      };
      var slashedProtocol = {
        http: true,
        https: true,
        ftp: true,
        gopher: true,
        file: true,
        "http:": true,
        "https:": true,
        "ftp:": true,
        "gopher:": true,
        "file:": true
      };
      var querystring = require_lib2();
      function urlParse(url, parseQueryString, slashesDenoteHost) {
        if (url && typeof url === "object" && url instanceof Url) {
          return url;
        }
        var u = new Url();
        u.parse(url, parseQueryString, slashesDenoteHost);
        return u;
      }
      Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
        if (typeof url !== "string") {
          throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
        }
        var queryIndex = url.indexOf("?"), splitter = queryIndex !== -1 && queryIndex < url.indexOf("#") ? "?" : "#", uSplit = url.split(splitter), slashRegex = /\\/g;
        uSplit[0] = uSplit[0].replace(slashRegex, "/");
        url = uSplit.join(splitter);
        var rest = url;
        rest = rest.trim();
        if (!slashesDenoteHost && url.split("#").length === 1) {
          var simplePath = simplePathPattern.exec(rest);
          if (simplePath) {
            this.path = rest;
            this.href = rest;
            this.pathname = simplePath[1];
            if (simplePath[2]) {
              this.search = simplePath[2];
              if (parseQueryString) {
                this.query = querystring.parse(this.search.substr(1));
              } else {
                this.query = this.search.substr(1);
              }
            } else if (parseQueryString) {
              this.search = "";
              this.query = {};
            }
            return this;
          }
        }
        var proto = protocolPattern.exec(rest);
        if (proto) {
          proto = proto[0];
          var lowerProto = proto.toLowerCase();
          this.protocol = lowerProto;
          rest = rest.substr(proto.length);
        }
        if (slashesDenoteHost || proto || rest.match(/^\/\/[^@/]+@[^@/]+/)) {
          var slashes = rest.substr(0, 2) === "//";
          if (slashes && !(proto && hostlessProtocol[proto])) {
            rest = rest.substr(2);
            this.slashes = true;
          }
        }
        if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
          var hostEnd = -1;
          for (var i = 0; i < hostEndingChars.length; i++) {
            var hec = rest.indexOf(hostEndingChars[i]);
            if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
              hostEnd = hec;
            }
          }
          var auth, atSign;
          if (hostEnd === -1) {
            atSign = rest.lastIndexOf("@");
          } else {
            atSign = rest.lastIndexOf("@", hostEnd);
          }
          if (atSign !== -1) {
            auth = rest.slice(0, atSign);
            rest = rest.slice(atSign + 1);
            this.auth = decodeURIComponent(auth);
          }
          hostEnd = -1;
          for (var i = 0; i < nonHostChars.length; i++) {
            var hec = rest.indexOf(nonHostChars[i]);
            if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
              hostEnd = hec;
            }
          }
          if (hostEnd === -1) {
            hostEnd = rest.length;
          }
          this.host = rest.slice(0, hostEnd);
          rest = rest.slice(hostEnd);
          this.parseHost();
          this.hostname = this.hostname || "";
          var ipv6Hostname = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
          if (!ipv6Hostname) {
            var hostparts = this.hostname.split(/\./);
            for (var i = 0, l = hostparts.length; i < l; i++) {
              var part = hostparts[i];
              if (!part) {
                continue;
              }
              if (!part.match(hostnamePartPattern)) {
                var newpart = "";
                for (var j = 0, k = part.length; j < k; j++) {
                  if (part.charCodeAt(j) > 127) {
                    newpart += "x";
                  } else {
                    newpart += part[j];
                  }
                }
                if (!newpart.match(hostnamePartPattern)) {
                  var validParts = hostparts.slice(0, i);
                  var notHost = hostparts.slice(i + 1);
                  var bit = part.match(hostnamePartStart);
                  if (bit) {
                    validParts.push(bit[1]);
                    notHost.unshift(bit[2]);
                  }
                  if (notHost.length) {
                    rest = "/" + notHost.join(".") + rest;
                  }
                  this.hostname = validParts.join(".");
                  break;
                }
              }
            }
          }
          if (this.hostname.length > hostnameMaxLen) {
            this.hostname = "";
          } else {
            this.hostname = this.hostname.toLowerCase();
          }
          if (!ipv6Hostname) {
            this.hostname = punycode.toASCII(this.hostname);
          }
          var p = this.port ? ":" + this.port : "";
          var h = this.hostname || "";
          this.host = h + p;
          this.href += this.host;
          if (ipv6Hostname) {
            this.hostname = this.hostname.substr(1, this.hostname.length - 2);
            if (rest[0] !== "/") {
              rest = "/" + rest;
            }
          }
        }
        if (!unsafeProtocol[lowerProto]) {
          for (var i = 0, l = autoEscape.length; i < l; i++) {
            var ae = autoEscape[i];
            if (rest.indexOf(ae) === -1) {
              continue;
            }
            var esc = encodeURIComponent(ae);
            if (esc === ae) {
              esc = escape(ae);
            }
            rest = rest.split(ae).join(esc);
          }
        }
        var hash = rest.indexOf("#");
        if (hash !== -1) {
          this.hash = rest.substr(hash);
          rest = rest.slice(0, hash);
        }
        var qm = rest.indexOf("?");
        if (qm !== -1) {
          this.search = rest.substr(qm);
          this.query = rest.substr(qm + 1);
          if (parseQueryString) {
            this.query = querystring.parse(this.query);
          }
          rest = rest.slice(0, qm);
        } else if (parseQueryString) {
          this.search = "";
          this.query = {};
        }
        if (rest) {
          this.pathname = rest;
        }
        if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
          this.pathname = "/";
        }
        if (this.pathname || this.search) {
          var p = this.pathname || "";
          var s = this.search || "";
          this.path = p + s;
        }
        this.href = this.format();
        return this;
      };
      function urlFormat(obj) {
        if (typeof obj === "string") {
          obj = urlParse(obj);
        }
        if (!(obj instanceof Url)) {
          return Url.prototype.format.call(obj);
        }
        return obj.format();
      }
      Url.prototype.format = function() {
        var auth = this.auth || "";
        if (auth) {
          auth = encodeURIComponent(auth);
          auth = auth.replace(/%3A/i, ":");
          auth += "@";
        }
        var protocol = this.protocol || "", pathname = this.pathname || "", hash = this.hash || "", host = false, query = "";
        if (this.host) {
          host = auth + this.host;
        } else if (this.hostname) {
          host = auth + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]");
          if (this.port) {
            host += ":" + this.port;
          }
        }
        if (this.query && typeof this.query === "object" && Object.keys(this.query).length) {
          query = querystring.stringify(this.query, {
            arrayFormat: "repeat",
            addQueryPrefix: false
          });
        }
        var search = this.search || query && "?" + query || "";
        if (protocol && protocol.substr(-1) !== ":") {
          protocol += ":";
        }
        if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
          host = "//" + (host || "");
          if (pathname && pathname.charAt(0) !== "/") {
            pathname = "/" + pathname;
          }
        } else if (!host) {
          host = "";
        }
        if (hash && hash.charAt(0) !== "#") {
          hash = "#" + hash;
        }
        if (search && search.charAt(0) !== "?") {
          search = "?" + search;
        }
        pathname = pathname.replace(/[?#]/g, function(match) {
          return encodeURIComponent(match);
        });
        search = search.replace("#", "%23");
        return protocol + host + pathname + search + hash;
      };
      function urlResolve(source, relative) {
        return urlParse(source, false, true).resolve(relative);
      }
      Url.prototype.resolve = function(relative) {
        return this.resolveObject(urlParse(relative, false, true)).format();
      };
      function urlResolveObject(source, relative) {
        if (!source) {
          return relative;
        }
        return urlParse(source, false, true).resolveObject(relative);
      }
      Url.prototype.resolveObject = function(relative) {
        if (typeof relative === "string") {
          var rel = new Url();
          rel.parse(relative, false, true);
          relative = rel;
        }
        var result = new Url();
        var tkeys = Object.keys(this);
        for (var tk = 0; tk < tkeys.length; tk++) {
          var tkey = tkeys[tk];
          result[tkey] = this[tkey];
        }
        result.hash = relative.hash;
        if (relative.href === "") {
          result.href = result.format();
          return result;
        }
        if (relative.slashes && !relative.protocol) {
          var rkeys = Object.keys(relative);
          for (var rk = 0; rk < rkeys.length; rk++) {
            var rkey = rkeys[rk];
            if (rkey !== "protocol") {
              result[rkey] = relative[rkey];
            }
          }
          if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
            result.pathname = "/";
            result.path = result.pathname;
          }
          result.href = result.format();
          return result;
        }
        if (relative.protocol && relative.protocol !== result.protocol) {
          if (!slashedProtocol[relative.protocol]) {
            var keys2 = Object.keys(relative);
            for (var v = 0; v < keys2.length; v++) {
              var k = keys2[v];
              result[k] = relative[k];
            }
            result.href = result.format();
            return result;
          }
          result.protocol = relative.protocol;
          if (!relative.host && !hostlessProtocol[relative.protocol]) {
            var relPath = (relative.pathname || "").split("/");
            while (relPath.length && !(relative.host = relPath.shift())) {
            }
            if (!relative.host) {
              relative.host = "";
            }
            if (!relative.hostname) {
              relative.hostname = "";
            }
            if (relPath[0] !== "") {
              relPath.unshift("");
            }
            if (relPath.length < 2) {
              relPath.unshift("");
            }
            result.pathname = relPath.join("/");
          } else {
            result.pathname = relative.pathname;
          }
          result.search = relative.search;
          result.query = relative.query;
          result.host = relative.host || "";
          result.auth = relative.auth;
          result.hostname = relative.hostname || relative.host;
          result.port = relative.port;
          if (result.pathname || result.search) {
            var p = result.pathname || "";
            var s = result.search || "";
            result.path = p + s;
          }
          result.slashes = result.slashes || relative.slashes;
          result.href = result.format();
          return result;
        }
        var isSourceAbs = result.pathname && result.pathname.charAt(0) === "/", isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === "/", mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname, removeAllDots = mustEndAbs, srcPath = result.pathname && result.pathname.split("/") || [], relPath = relative.pathname && relative.pathname.split("/") || [], psychotic = result.protocol && !slashedProtocol[result.protocol];
        if (psychotic) {
          result.hostname = "";
          result.port = null;
          if (result.host) {
            if (srcPath[0] === "") {
              srcPath[0] = result.host;
            } else {
              srcPath.unshift(result.host);
            }
          }
          result.host = "";
          if (relative.protocol) {
            relative.hostname = null;
            relative.port = null;
            if (relative.host) {
              if (relPath[0] === "") {
                relPath[0] = relative.host;
              } else {
                relPath.unshift(relative.host);
              }
            }
            relative.host = null;
          }
          mustEndAbs = mustEndAbs && (relPath[0] === "" || srcPath[0] === "");
        }
        if (isRelAbs) {
          result.host = relative.host || relative.host === "" ? relative.host : result.host;
          result.hostname = relative.hostname || relative.hostname === "" ? relative.hostname : result.hostname;
          result.search = relative.search;
          result.query = relative.query;
          srcPath = relPath;
        } else if (relPath.length) {
          if (!srcPath) {
            srcPath = [];
          }
          srcPath.pop();
          srcPath = srcPath.concat(relPath);
          result.search = relative.search;
          result.query = relative.query;
        } else if (relative.search != null) {
          if (psychotic) {
            result.host = srcPath.shift();
            result.hostname = result.host;
            var authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
            if (authInHost) {
              result.auth = authInHost.shift();
              result.hostname = authInHost.shift();
              result.host = result.hostname;
            }
          }
          result.search = relative.search;
          result.query = relative.query;
          if (result.pathname !== null || result.search !== null) {
            result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
          }
          result.href = result.format();
          return result;
        }
        if (!srcPath.length) {
          result.pathname = null;
          if (result.search) {
            result.path = "/" + result.search;
          } else {
            result.path = null;
          }
          result.href = result.format();
          return result;
        }
        var last = srcPath.slice(-1)[0];
        var hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && (last === "." || last === "..") || last === "";
        var up = 0;
        for (var i = srcPath.length; i >= 0; i--) {
          last = srcPath[i];
          if (last === ".") {
            srcPath.splice(i, 1);
          } else if (last === "..") {
            srcPath.splice(i, 1);
            up++;
          } else if (up) {
            srcPath.splice(i, 1);
            up--;
          }
        }
        if (!mustEndAbs && !removeAllDots) {
          for (; up--; up) {
            srcPath.unshift("..");
          }
        }
        if (mustEndAbs && srcPath[0] !== "" && (!srcPath[0] || srcPath[0].charAt(0) !== "/")) {
          srcPath.unshift("");
        }
        if (hasTrailingSlash && srcPath.join("/").substr(-1) !== "/") {
          srcPath.push("");
        }
        var isAbsolute = srcPath[0] === "" || srcPath[0] && srcPath[0].charAt(0) === "/";
        if (psychotic) {
          result.hostname = isAbsolute ? "" : srcPath.length ? srcPath.shift() : "";
          result.host = result.hostname;
          var authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
          if (authInHost) {
            result.auth = authInHost.shift();
            result.hostname = authInHost.shift();
            result.host = result.hostname;
          }
        }
        mustEndAbs = mustEndAbs || result.host && srcPath.length;
        if (mustEndAbs && !isAbsolute) {
          srcPath.unshift("");
        }
        if (srcPath.length > 0) {
          result.pathname = srcPath.join("/");
        } else {
          result.pathname = null;
          result.path = null;
        }
        if (result.pathname !== null || result.search !== null) {
          result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
        }
        result.auth = relative.auth || result.auth;
        result.slashes = result.slashes || relative.slashes;
        result.href = result.format();
        return result;
      };
      Url.prototype.parseHost = function() {
        var host = this.host;
        var port = portPattern.exec(host);
        if (port) {
          port = port[0];
          if (port !== ":") {
            this.port = port.substr(1);
          }
          host = host.substr(0, host.length - port.length);
        }
        if (host) {
          this.hostname = host;
        }
      };
      exports.parse = urlParse;
      exports.resolve = urlResolve;
      exports.resolveObject = urlResolveObject;
      exports.format = urlFormat;
      exports.Url = Url;
    }
  });

  // node_modules/tldjs/lib/is-valid.js
  var require_is_valid = __commonJS({
    "node_modules/tldjs/lib/is-valid.js"(exports, module) {
      "use strict";
      init_polyfills();
      function isDigit(code) {
        return code >= 48 && code <= 57;
      }
      function isAlpha(code) {
        return code >= 97 && code <= 122;
      }
      module.exports = function isValid(hostname) {
        if (typeof hostname !== "string") {
          return false;
        }
        if (hostname.length > 255) {
          return false;
        }
        if (hostname.length === 0) {
          return false;
        }
        var firstCharCode = hostname.charCodeAt(0);
        if (!(isAlpha(firstCharCode) || isDigit(firstCharCode))) {
          return false;
        }
        var lastDotIndex = -1;
        var lastCharCode;
        var code;
        var len = hostname.length;
        for (var i = 0; i < len; i += 1) {
          code = hostname.charCodeAt(i);
          if (code === 46) {
            if (
              // Check that previous label is < 63 bytes long (64 = 63 + '.')
              i - lastDotIndex > 64 || // Check that previous character was not already a '.'
              lastCharCode === 46 || // Check that the previous label does not end with a '-'
              lastCharCode === 45
            ) {
              return false;
            }
            lastDotIndex = i;
          } else if (!(isAlpha(code) || isDigit(code) || code === 45)) {
            return false;
          }
          lastCharCode = code;
        }
        return (
          // Check that last label is shorter than 63 chars
          len - lastDotIndex - 1 <= 63 && // Check that the last character is an allowed trailing label character.
          // Since we already checked that the char is a valid hostname character,
          // we only need to check that it's different from '-'.
          lastCharCode !== 45
        );
      };
    }
  });

  // node_modules/tldjs/lib/clean-host.js
  var require_clean_host = __commonJS({
    "node_modules/tldjs/lib/clean-host.js"(exports, module) {
      init_polyfills();
      var URL2 = require_url();
      var isValid = require_is_valid();
      var hasPrefixRE = /^(([a-z][a-z0-9+.-]*)?:)?\/\//;
      function trimTrailingDots(value) {
        if (value[value.length - 1] === ".") {
          return value.substr(0, value.length - 1);
        }
        return value;
      }
      function checkTrimmingNeeded(value) {
        return value.length > 0 && (value.charCodeAt(0) <= 32 || value.charCodeAt(value.length - 1) <= 32);
      }
      function checkLowerCaseNeeded(value) {
        for (var i = 0; i < value.length; i += 1) {
          var code = value.charCodeAt(i);
          if (code >= 65 && code <= 90) {
            return true;
          }
        }
        return false;
      }
      module.exports = function extractHostname(value) {
        if (isValid(value)) {
          return trimTrailingDots(value);
        }
        var url = value;
        if (typeof url !== "string") {
          url = "" + url;
        }
        var needsTrimming = checkTrimmingNeeded(url);
        if (needsTrimming) {
          url = url.trim();
        }
        var needsLowerCase = checkLowerCaseNeeded(url);
        if (needsLowerCase) {
          url = url.toLowerCase();
        }
        if ((needsLowerCase || needsTrimming) && isValid(url)) {
          return trimTrailingDots(url);
        }
        if (!hasPrefixRE.test(url)) {
          url = "//" + url;
        }
        var parts = URL2.parse(url, null, true);
        if (parts.hostname) {
          return trimTrailingDots(parts.hostname);
        }
        return null;
      };
    }
  });

  // node_modules/tldjs/lib/domain.js
  var require_domain = __commonJS({
    "node_modules/tldjs/lib/domain.js"(exports, module) {
      "use strict";
      init_polyfills();
      function endsWith(str, pattern) {
        return str.lastIndexOf(pattern) === str.length - pattern.length;
      }
      function shareSameDomainSuffix(hostname, vhost) {
        if (endsWith(hostname, vhost)) {
          return hostname.length === vhost.length || hostname[hostname.length - vhost.length - 1] === ".";
        }
        return false;
      }
      function extractDomainWithSuffix(hostname, publicSuffix) {
        var publicSuffixIndex = hostname.length - publicSuffix.length - 2;
        var lastDotBeforeSuffixIndex = hostname.lastIndexOf(".", publicSuffixIndex);
        if (lastDotBeforeSuffixIndex === -1) {
          return hostname;
        }
        return hostname.substr(lastDotBeforeSuffixIndex + 1);
      }
      module.exports = function getDomain(validHosts, suffix, hostname) {
        for (var i = 0; i < validHosts.length; i += 1) {
          var vhost = validHosts[i];
          if (shareSameDomainSuffix(hostname, vhost)) {
            return vhost;
          }
        }
        if (suffix === null) {
          return null;
        }
        if (suffix.length === hostname.length) {
          return null;
        }
        return extractDomainWithSuffix(hostname, suffix);
      };
    }
  });

  // node_modules/tldjs/lib/from-host.js
  var require_from_host = __commonJS({
    "node_modules/tldjs/lib/from-host.js"(exports, module) {
      "use strict";
      init_polyfills();
      module.exports = function extractTldFromHost(hostname) {
        var lastDotIndex = hostname.lastIndexOf(".");
        if (lastDotIndex === -1) {
          return null;
        }
        return hostname.substr(lastDotIndex + 1);
      };
    }
  });

  // node_modules/tldjs/lib/public-suffix.js
  var require_public_suffix = __commonJS({
    "node_modules/tldjs/lib/public-suffix.js"(exports, module) {
      "use strict";
      init_polyfills();
      var extractTldFromHost = require_from_host();
      module.exports = function getPublicSuffix(rules, hostname) {
        if (rules.hasTld(hostname)) {
          return hostname;
        }
        var candidate = rules.suffixLookup(hostname);
        if (candidate === null) {
          return extractTldFromHost(hostname);
        }
        return candidate;
      };
    }
  });

  // node_modules/tldjs/lib/subdomain.js
  var require_subdomain = __commonJS({
    "node_modules/tldjs/lib/subdomain.js"(exports, module) {
      "use strict";
      init_polyfills();
      module.exports = function getSubdomain(hostname, domain) {
        if (domain === null) {
          return null;
        }
        return hostname.substr(0, hostname.length - domain.length - 1);
      };
    }
  });

  // node_modules/tldjs/lib/is-ip.js
  var require_is_ip = __commonJS({
    "node_modules/tldjs/lib/is-ip.js"(exports, module) {
      "use strict";
      init_polyfills();
      function isProbablyIpv4(hostname) {
        var numberOfDots = 0;
        for (var i = 0; i < hostname.length; i += 1) {
          var code = hostname.charCodeAt(i);
          if (code === 46) {
            numberOfDots += 1;
          } else if (code < 48 || code > 57) {
            return false;
          }
        }
        return numberOfDots === 3 && hostname[0] !== "." && hostname[hostname.length - 1] !== ".";
      }
      function isProbablyIpv6(hostname) {
        var hasColon = false;
        for (var i = 0; i < hostname.length; i += 1) {
          var code = hostname.charCodeAt(i);
          if (code === 58) {
            hasColon = true;
          } else if (!(code >= 48 && code <= 57 || // 0-9
          code >= 97 && code <= 102)) {
            return false;
          }
        }
        return hasColon;
      }
      module.exports = function isIp(hostname) {
        if (typeof hostname !== "string") {
          return false;
        }
        if (hostname.length === 0) {
          return false;
        }
        return isProbablyIpv6(hostname) || isProbablyIpv4(hostname);
      };
    }
  });

  // node_modules/tldjs/lib/tld-exists.js
  var require_tld_exists = __commonJS({
    "node_modules/tldjs/lib/tld-exists.js"(exports, module) {
      "use strict";
      init_polyfills();
      var extractTldFromHost = require_from_host();
      module.exports = function tldExists(rules, hostname) {
        if (rules.hasTld(hostname)) {
          return true;
        }
        var hostTld = extractTldFromHost(hostname);
        if (hostTld === null) {
          return false;
        }
        return rules.hasTld(hostTld);
      };
    }
  });

  // node_modules/tldjs/index.js
  var require_tldjs = __commonJS({
    "node_modules/tldjs/index.js"(exports, module) {
      "use strict";
      init_polyfills();
      var deprecate = require_util().deprecate;
      var Trie = require_suffix_trie();
      var allRules = Trie.fromJson(require_rules());
      var extractHostname = require_clean_host();
      var getDomain = require_domain();
      var getPublicSuffix = require_public_suffix();
      var getSubdomain = require_subdomain();
      var isValidHostname = require_is_valid();
      var isIp = require_is_ip();
      var tldExists = require_tld_exists();
      var TLD_EXISTS = 1;
      var PUBLIC_SUFFIX = 2;
      var DOMAIN = 3;
      var SUB_DOMAIN = 4;
      var ALL = 5;
      function factory(options) {
        var rules = options.rules || allRules || {};
        var validHosts = options.validHosts || [];
        var _extractHostname = options.extractHostname || extractHostname;
        function parse(url, _step) {
          var step = _step || ALL;
          var result = {
            hostname: _extractHostname(url),
            isValid: null,
            isIp: null,
            tldExists: false,
            publicSuffix: null,
            domain: null,
            subdomain: null
          };
          if (result.hostname === null) {
            result.isIp = false;
            result.isValid = false;
            return result;
          }
          result.isIp = isIp(result.hostname);
          if (result.isIp) {
            result.isValid = true;
            return result;
          }
          result.isValid = isValidHostname(result.hostname);
          if (result.isValid === false) {
            return result;
          }
          if (step === ALL || step === TLD_EXISTS) {
            result.tldExists = tldExists(rules, result.hostname);
          }
          if (step === TLD_EXISTS) {
            return result;
          }
          result.publicSuffix = getPublicSuffix(rules, result.hostname);
          if (step === PUBLIC_SUFFIX) {
            return result;
          }
          result.domain = getDomain(validHosts, result.publicSuffix, result.hostname);
          if (step === DOMAIN) {
            return result;
          }
          result.subdomain = getSubdomain(result.hostname, result.domain);
          return result;
        }
        return {
          extractHostname: _extractHostname,
          isValidHostname,
          isValid: deprecate(function isValid(hostname) {
            return isValidHostname(hostname);
          }, '"isValid" is deprecated, please use "isValidHostname" instead.'),
          parse,
          tldExists: function(url) {
            return parse(url, TLD_EXISTS).tldExists;
          },
          getPublicSuffix: function(url) {
            return parse(url, PUBLIC_SUFFIX).publicSuffix;
          },
          getDomain: function(url) {
            return parse(url, DOMAIN).domain;
          },
          getSubdomain: function(url) {
            return parse(url, SUB_DOMAIN).subdomain;
          },
          fromUserSettings: factory
        };
      }
      module.exports = factory({});
    }
  });

  // node_modules/normalize-url/index.js
  var normalize_url_exports = {};
  __export(normalize_url_exports, {
    default: () => normalizeUrl
  });
  function normalizeUrl(urlString, options) {
    options = {
      defaultProtocol: "http",
      normalizeProtocol: true,
      forceHttp: false,
      forceHttps: false,
      stripAuthentication: true,
      stripHash: false,
      stripTextFragment: true,
      stripWWW: true,
      removeQueryParameters: [/^utm_\w+/i],
      removeTrailingSlash: true,
      removeSingleSlash: true,
      removeDirectoryIndex: false,
      removeExplicitPort: false,
      sortQueryParameters: true,
      removePath: false,
      transformPath: false,
      ...options
    };
    if (typeof options.defaultProtocol === "string" && !options.defaultProtocol.endsWith(":")) {
      options.defaultProtocol = `${options.defaultProtocol}:`;
    }
    urlString = urlString.trim();
    if (/^data:/i.test(urlString)) {
      return normalizeDataURL(urlString, options);
    }
    if (hasCustomProtocol(urlString)) {
      return urlString;
    }
    const hasRelativeProtocol = urlString.startsWith("//");
    const isRelativeUrl = !hasRelativeProtocol && /^\.*\//.test(urlString);
    if (!isRelativeUrl) {
      urlString = urlString.replace(/^(?!(?:\w+:)?\/\/)|^\/\//, options.defaultProtocol);
    }
    const urlObject = new URL(urlString);
    if (options.forceHttp && options.forceHttps) {
      throw new Error("The `forceHttp` and `forceHttps` options cannot be used together");
    }
    if (options.forceHttp && urlObject.protocol === "https:") {
      urlObject.protocol = "http:";
    }
    if (options.forceHttps && urlObject.protocol === "http:") {
      urlObject.protocol = "https:";
    }
    if (options.stripAuthentication) {
      urlObject.username = "";
      urlObject.password = "";
    }
    if (options.stripHash) {
      urlObject.hash = "";
    } else if (options.stripTextFragment) {
      urlObject.hash = urlObject.hash.replace(/#?:~:text.*?$/i, "");
    }
    if (urlObject.pathname) {
      const protocolRegex = /\b[a-z][a-z\d+\-.]{1,50}:\/\//g;
      let lastIndex = 0;
      let result = "";
      for (; ; ) {
        const match = protocolRegex.exec(urlObject.pathname);
        if (!match) {
          break;
        }
        const protocol = match[0];
        const protocolAtIndex = match.index;
        const intermediate = urlObject.pathname.slice(lastIndex, protocolAtIndex);
        result += intermediate.replace(/\/{2,}/g, "/");
        result += protocol;
        lastIndex = protocolAtIndex + protocol.length;
      }
      const remnant = urlObject.pathname.slice(lastIndex, urlObject.pathname.length);
      result += remnant.replace(/\/{2,}/g, "/");
      urlObject.pathname = result;
    }
    if (urlObject.pathname) {
      try {
        urlObject.pathname = decodeURI(urlObject.pathname).replace(/\\/g, "%5C");
      } catch {
      }
    }
    if (options.removeDirectoryIndex === true) {
      options.removeDirectoryIndex = [/^index\.[a-z]+$/];
    }
    if (Array.isArray(options.removeDirectoryIndex) && options.removeDirectoryIndex.length > 0) {
      let pathComponents = urlObject.pathname.split("/");
      const lastComponent = pathComponents[pathComponents.length - 1];
      if (testParameter(lastComponent, options.removeDirectoryIndex)) {
        pathComponents = pathComponents.slice(0, -1);
        urlObject.pathname = pathComponents.slice(1).join("/") + "/";
      }
    }
    if (options.removePath) {
      urlObject.pathname = "/";
    }
    if (options.transformPath && typeof options.transformPath === "function") {
      const pathComponents = urlObject.pathname.split("/").filter(Boolean);
      const newComponents = options.transformPath(pathComponents);
      urlObject.pathname = newComponents?.length > 0 ? `/${newComponents.join("/")}` : "/";
    }
    if (urlObject.hostname) {
      urlObject.hostname = urlObject.hostname.replace(/\.$/, "");
      if (options.stripWWW && /^www\.(?!www\.)[a-z\-\d]{1,63}\.[a-z.\-\d]{2,63}$/.test(urlObject.hostname)) {
        urlObject.hostname = urlObject.hostname.replace(/^www\./, "");
      }
    }
    if (Array.isArray(options.removeQueryParameters)) {
      for (const key of [...urlObject.searchParams.keys()]) {
        if (testParameter(key, options.removeQueryParameters)) {
          urlObject.searchParams.delete(key);
        }
      }
    }
    if (!Array.isArray(options.keepQueryParameters) && options.removeQueryParameters === true) {
      urlObject.search = "";
    }
    if (Array.isArray(options.keepQueryParameters) && options.keepQueryParameters.length > 0) {
      for (const key of [...urlObject.searchParams.keys()]) {
        if (!testParameter(key, options.keepQueryParameters)) {
          urlObject.searchParams.delete(key);
        }
      }
    }
    if (options.sortQueryParameters) {
      const originalSearch = urlObject.search;
      urlObject.searchParams.sort();
      try {
        urlObject.search = decodeURIComponent(urlObject.search);
      } catch {
      }
      const partsWithoutEquals = originalSearch.slice(1).split("&").filter((p) => p && !p.includes("="));
      for (const part of partsWithoutEquals) {
        const decoded = decodeURIComponent(part);
        urlObject.search = urlObject.search.replace(`?${decoded}=`, `?${decoded}`).replace(`&${decoded}=`, `&${decoded}`);
      }
    }
    if (options.removeTrailingSlash) {
      urlObject.pathname = urlObject.pathname.replace(/\/$/, "");
    }
    if (options.removeExplicitPort && urlObject.port) {
      urlObject.port = "";
    }
    const oldUrlString = urlString;
    urlString = urlObject.toString();
    if (!options.removeSingleSlash && urlObject.pathname === "/" && !oldUrlString.endsWith("/") && urlObject.hash === "") {
      urlString = urlString.replace(/\/$/, "");
    }
    if ((options.removeTrailingSlash || urlObject.pathname === "/") && urlObject.hash === "" && options.removeSingleSlash) {
      urlString = urlString.replace(/\/$/, "");
    }
    if (hasRelativeProtocol && !options.normalizeProtocol) {
      urlString = urlString.replace(/^http:\/\//, "//");
    }
    if (options.stripProtocol) {
      urlString = urlString.replace(/^(?:https?:)?\/\//, "");
    }
    return urlString;
  }
  var DATA_URL_DEFAULT_MIME_TYPE, DATA_URL_DEFAULT_CHARSET, testParameter, supportedProtocols, hasCustomProtocol, normalizeDataURL;
  var init_normalize_url = __esm({
    "node_modules/normalize-url/index.js"() {
      init_polyfills();
      DATA_URL_DEFAULT_MIME_TYPE = "text/plain";
      DATA_URL_DEFAULT_CHARSET = "us-ascii";
      testParameter = (name, filters) => filters.some((filter) => filter instanceof RegExp ? filter.test(name) : filter === name);
      supportedProtocols = /* @__PURE__ */ new Set([
        "https:",
        "http:",
        "file:"
      ]);
      hasCustomProtocol = (urlString) => {
        try {
          const { protocol } = new URL(urlString);
          return protocol.endsWith(":") && !protocol.includes(".") && !supportedProtocols.has(protocol);
        } catch {
          return false;
        }
      };
      normalizeDataURL = (urlString, { stripHash }) => {
        const match = /^data:(?<type>[^,]*?),(?<data>[^#]*?)(?:#(?<hash>.*))?$/.exec(urlString);
        if (!match) {
          throw new Error(`Invalid URL: ${urlString}`);
        }
        let { type, data, hash } = match.groups;
        const mediaType = type.split(";");
        hash = stripHash ? "" : hash;
        let isBase64 = false;
        if (mediaType[mediaType.length - 1] === "base64") {
          mediaType.pop();
          isBase64 = true;
        }
        const mimeType = mediaType.shift()?.toLowerCase() ?? "";
        const attributes = mediaType.map((attribute) => {
          let [key, value = ""] = attribute.split("=").map((string) => string.trim());
          if (key === "charset") {
            value = value.toLowerCase();
            if (value === DATA_URL_DEFAULT_CHARSET) {
              return "";
            }
          }
          return `${key}${value ? `=${value}` : ""}`;
        }).filter(Boolean);
        const normalizedMediaType = [
          ...attributes
        ];
        if (isBase64) {
          normalizedMediaType.push("base64");
        }
        if (normalizedMediaType.length > 0 || mimeType && mimeType !== DATA_URL_DEFAULT_MIME_TYPE) {
          normalizedMediaType.unshift(mimeType);
        }
        return `data:${normalizedMediaType.join(";")},${isBase64 ? data.trim() : data}${hash ? `#${hash}` : ""}`;
      };
    }
  });

  // src/view/utils/pages.js
  var require_pages = __commonJS({
    "src/view/utils/pages.js"(exports, module) {
      init_polyfills();
      module.exports = {
        "home.cargo": "./pages/home.html",
        "about.cargo": "./pages/about.html",
        "error.cargo": "./pages/error.html",
        "crash.cargo": "./pages/crash.html"
      };
    }
  });

  // src/view/utils/isCargoURL.js
  var require_isCargoURL = __commonJS({
    "src/view/utils/isCargoURL.js"(exports, module) {
      init_polyfills();
      var pages = require_pages();
      module.exports = (url) => {
        if (url.startsWith("file:///")) {
          for (let p in pages) {
            if (url.indexOf(pages[p].substr(1)) != -1) {
              return true;
            }
          }
        }
        return false;
      };
    }
  });

  // src/view/utils/uuid.js
  var require_uuid = __commonJS({
    "src/view/utils/uuid.js"(exports, module) {
      init_polyfills();
      module.exports = () => {
        if (typeof crypto !== "undefined" && crypto.randomUUID) {
          return crypto.randomUUID();
        }
        if (typeof crypto !== "undefined" && crypto.getRandomValues) {
          const array = new Uint8Array(16);
          crypto.getRandomValues(array);
          array[6] = array[6] & 15 | 64;
          array[8] = array[8] & 63 | 128;
          const hex = Array.from(array, (byte) => byte.toString(16).padStart(2, "0"));
          return [
            hex.slice(0, 4).join(""),
            hex.slice(4, 6).join(""),
            hex.slice(6, 8).join(""),
            hex.slice(8, 10).join(""),
            hex.slice(10, 16).join("")
          ].join("-");
        }
        console.warn("UUID: Falling back to Math.random() - consider updating your environment");
        let uuid = "";
        for (let i = 0; i < 32; i++) {
          const random = Math.random() * 16 | 0;
          if (i === 8 || i === 12 || i === 16 || i === 20) {
            uuid += "-";
          }
          uuid += (i === 12 ? 4 : i === 16 ? random & 3 | 8 : random).toString(16);
        }
        return uuid;
      };
    }
  });

  // src/view/webview.js
  var require_webview = __commonJS({
    "src/view/webview.js"(exports, module) {
      init_polyfills();
      var html = require_xou();
      var vxv = require_vxv_umd();
      var { parse } = require_tldjs();
      var normalizeUrl2 = (init_normalize_url(), __toCommonJS(normalize_url_exports));
      var pages = require_pages();
      var isCargoURL = require_isCargoURL();
      var uuid = require_uuid();
      var ALLOWED_PROTOCOLS = ["http:", "https:", "file:", "data:"];
      var DANGEROUS_PROTOCOLS = ["javascript:", "vbscript:", "data:", "file:"];
      var isValidUrl = (urlString) => {
        try {
          const parsed = new URL(urlString);
          if (DANGEROUS_PROTOCOLS.includes(parsed.protocol)) {
            console.warn(`Blocked navigation to dangerous protocol: ${parsed.protocol}`);
            return false;
          }
          if (!ALLOWED_PROTOCOLS.includes(parsed.protocol)) {
            console.warn(`Blocked navigation to unsupported protocol: ${parsed.protocol}`);
            return false;
          }
          return true;
        } catch (e) {
          return false;
        }
      };
      module.exports = (emitter2, state2) => {
        let focusedView = -1;
        const didStartLoading = () => {
          emitter2.emit("progress-start");
        };
        const didStopLoading = () => {
          const webview2 = document.querySelector(`#${state2.views[focusedView].id}`);
          webview2.style.background = "white";
          emitter2.emit("progress-stop");
        };
        const pageTitleUpdated = () => {
          const webview2 = document.querySelector(`#${state2.views[focusedView].id}`);
          state2.title = "Loading";
          state2.url = "";
          try {
            state2.title = webview2.getTitle();
            state2.url = webview2.getURL();
          } catch (err) {
          }
          emitter2.emit("titlebar-title-updated");
          emitter2.emit("tabs-render");
        };
        const didNavigate = (e) => {
          const webview2 = document.querySelector(`#${state2.views[focusedView].id}`);
          state2.url = webview2.getURL();
          emitter2.emit("titlebar-url-updated");
          setTimeout(() => {
            emitter2.emit("history-navigated", { url: state2.url, title: webview2.getTitle() });
          }, 20);
        };
        const click = () => {
          emitter2.emit("titlebar-title-updated");
        };
        const loadingError = (err) => {
          console.log(err);
          const webview2 = document.querySelector(`#${state2.views[focusedView].id}`);
          webview2.setAttribute("src", "./pages/error.html");
        };
        const newWindow = (e) => {
          e.preventDefault();
          try {
            if (!e.url || !isValidUrl(e.url)) {
              console.warn("Blocked new window with invalid/dangerous URL:", e.url);
              return;
            }
            const protocol = new URL(e.url).protocol;
            if (e.disposition == "new-window") {
            } else if (e.disposition == "foreground-tab" || e.disposition == "background-tab" || e.disposition == "default" || e.disposition == "other") {
              emitter2.emit("tabs-create", e.url);
            }
          } catch (err) {
            console.error("Error handling new window:", err);
          }
        };
        const changeView = (id) => {
          const el = state2.views[id];
          if (focusedView >= 0) state2.views[focusedView].element.style.display = "none";
          el.element.style.display = "block";
          el.element.focus();
          focusedView = id;
          pageTitleUpdated();
          emitter2.emit("tabs-render");
        };
        const create = (src) => {
          const id = "_wv_" + uuid();
          src = src || "./pages/home.html";
          const viewElement = html`<div style="display: none;">
      <webview id="${id}" src="${src}" allowpopups autosize style="width: 100%; height: calc(100vh - 40px);"></webview>
    </div>`;
          document.body.appendChild(viewElement);
          state2.views.push({
            element: viewElement,
            id
          });
          changeView(state2.views.length - 1);
          const webview2 = document.querySelector(`#${id}`);
          webview2.addEventListener("did-start-loading", didStartLoading);
          webview2.addEventListener("did-stop-loading", didStopLoading);
          webview2.addEventListener("page-title-updated", pageTitleUpdated);
          webview2.addEventListener("did-navigate", didNavigate);
          webview2.addEventListener("click", click);
          webview2.addEventListener("did-fail-load", loadingError);
          return state2.views.length - 1;
        };
        const remove2 = (viewIndex) => {
          const el = state2.views[viewIndex];
          const webview2 = document.querySelector(`#${el.id}`);
          webview2.removeEventListener("did-start-loading", didStartLoading);
          webview2.removeEventListener("did-stop-loading", didStopLoading);
          webview2.removeEventListener("page-title-updated", pageTitleUpdated);
          webview2.removeEventListener("did-navigate", didNavigate);
          webview2.removeEventListener("click", click);
          webview2.removeEventListener("did-fail-load", loadingError);
          state2.views.splice(viewIndex, 1);
          focusedView = 0;
          el.element.remove();
          if (state2.views.length == 0) {
            emitter2.emit("tabs-db-flush");
            window.close();
          }
          let newIndex = viewIndex - 1;
          if (newIndex < 0) {
            newIndex = 0;
          }
          changeView(newIndex);
        };
        const changeTheme = (name) => {
          state2.theme = name;
          document.getElementById("theme").setAttribute("href", "./static/theme/" + state2.theme + ".css");
        };
        emitter2.on("webview-create", create);
        emitter2.on("webview-remove", remove2);
        emitter2.on("webview-change", changeView);
        emitter2.on("webview-set-focus", () => {
          const webview2 = document.querySelector(`#${state2.views[focusedView].id}`);
          webview2.focus();
        });
        emitter2.on("webview-devtools", () => {
          const webview2 = document.querySelector(`#${state2.views[focusedView].id}`);
          if (!webview2) return;
          console.log("DevTools Shortcut Triggered");
          console.log("isDevToolsOpened:", webview2.isDevToolsOpened());
          if (webview2.isDevToolsOpened()) {
            webview2.closeDevTools();
            console.log("Closing DevTools");
          } else {
            webview2.openDevTools({ mode: "bottom" });
            console.log("Opening DevTools");
          }
        });
        emitter2.on("webview-back", () => {
          const webview2 = document.querySelector(`#${state2.views[focusedView].id}`);
          if (webview2 && webview2.canGoBack()) {
            webview2.goBack();
          }
        });
        emitter2.on("webview-forward", () => {
          const webview2 = document.querySelector(`#${state2.views[focusedView].id}`);
          if (webview2 && webview2.canGoForward()) {
            webview2.goForward();
          }
        });
        emitter2.on("webview-reload", () => {
          const webview2 = document.querySelector(`#${state2.views[focusedView].id}`);
          if (webview2) {
            webview2.reload();
          }
        });
        emitter2.on("webview-home", () => {
          const webview2 = document.querySelector(`#${state2.views[focusedView].id}`);
          webview2.setAttribute("src", "./pages/home.html#" + state2.theme);
        });
        emitter2.on("webview-about", () => {
          const webview2 = document.querySelector(`#${state2.views[focusedView].id}`);
          webview2.setAttribute("src", "./pages/about.html");
        });
        emitter2.on("navigate", (options) => {
          try {
            const webview2 = document.querySelector(`#${state2.views[focusedView].id}`);
            if (!webview2) {
              console.error("No webview found for navigation");
              return;
            }
            webview2.focus();
            let slug = options.slug;
            if (!slug || typeof slug !== "string") {
              console.error("Invalid URL provided:", slug);
              return;
            }
            slug = slug.trim();
            const lowerSlug = slug.toLowerCase();
            if (lowerSlug.startsWith("javascript:") || lowerSlug.startsWith("vbscript:") || lowerSlug.startsWith("data:")) {
              console.warn("Blocked navigation to dangerous protocol in URL:", slug);
              return;
            }
            if (slug.startsWith("file:///")) {
              const isInternalPage = Object.values(pages).some(
                (page) => slug.includes(page)
              );
              if (isInternalPage) {
                return webview2.loadURL(slug);
              } else {
                console.warn("Blocked navigation to unauthorized file:", slug);
                return;
              }
            }
            const url = normalizeUrl2(slug);
            const parsed = parse(url, true);
            if (!isValidUrl(url)) {
              console.warn("URL failed validation:", url);
              return;
            }
            if (!slug.startsWith("http://") && !slug.startsWith("https://")) {
              slug = "http://" + slug;
            }
            if (parsed.domain != null && parsed.isValid == true) {
              if (pages[parsed.domain] != null) {
                webview2.setAttribute("src", pages[parsed.domain]);
              } else {
                webview2.loadURL(slug);
              }
            } else {
              slug = options.expand ? `http://www.${options.slug}.com` : `https://duckduckgo.com/?q=${encodeURIComponent(options.slug)}`;
              webview2.loadURL(slug);
            }
          } catch (err) {
            console.error("Error during navigation:", err);
          }
        });
        emitter2.on("tabs-next", () => {
          if (focusedView + 1 < state2.views.length) {
            changeView(focusedView + 1);
          }
        });
        emitter2.on("tabs-prev", () => {
          if (focusedView - 1 >= 0) {
            changeView(focusedView - 1);
          }
        });
        emitter2.on("tabs-go-to", (id) => {
          if (id < state2.views.length && id >= 0) {
            changeView(id);
          }
        });
        emitter2.on("tabs-last", () => {
          changeView(state2.views.length - 1);
        });
        emitter2.on("dark-mode", () => {
          if (state2.theme === "dark") {
            changeTheme("light");
          } else {
            changeTheme("dark");
          }
        });
      };
    }
  });

  // src/view/keyboard.js
  var require_keyboard = __commonJS({
    "src/view/keyboard.js"(exports, module) {
      init_polyfills();
      module.exports = (emitter2, state2) => {
        const handleKeyDown = (ev) => {
          const key = ev.key.toLowerCase();
          const isCmdOrCtrl = ev.metaKey || ev.ctrlKey;
          const isShift = ev.shiftKey;
          if (isCmdOrCtrl && key === "t" && !isShift) {
            ev.preventDefault();
            emitter2.emit("tabs-create");
            return;
          }
          if (isCmdOrCtrl && key === "w" && !isShift) {
            ev.preventDefault();
            emitter2.emit("tabs-remove-current");
            return;
          }
          if (isCmdOrCtrl && key === "r" && !isShift) {
            ev.preventDefault();
            emitter2.emit("webview-reload");
            return;
          }
          if (isCmdOrCtrl && key === "arrowleft" && !isShift) {
            ev.preventDefault();
            emitter2.emit("webview-back");
            return;
          }
          if (isCmdOrCtrl && key === "arrowright" && !isShift) {
            ev.preventDefault();
            emitter2.emit("webview-forward");
            return;
          }
          if (isCmdOrCtrl && isShift && key === "d") {
            ev.preventDefault();
            emitter2.emit("webview-devtools");
            return;
          }
          if (isCmdOrCtrl && isShift && key === "a") {
            ev.preventDefault();
            emitter2.emit("webview-about");
            return;
          }
          if (isCmdOrCtrl && isShift && key === "h") {
            ev.preventDefault();
            emitter2.emit("webview-home");
            return;
          }
          if (isCmdOrCtrl && key === "h" && !isShift) {
            ev.preventDefault();
            emitter2.emit("history-toggle");
            return;
          }
          if (isCmdOrCtrl && !isShift && key >= "1" && key <= "9") {
            ev.preventDefault();
            const tabIndex = parseInt(key) - 1;
            emitter2.emit("tabs-go-to", tabIndex);
            return;
          }
        };
        document.addEventListener("keydown", handleKeyDown);
        const cleanup = () => {
          document.removeEventListener("keydown", handleKeyDown);
        };
        state2.cleanupKeyboard = cleanup;
      };
    }
  });

  // src/view/alert.js
  var require_alert = __commonJS({
    "src/view/alert.js"(exports, module) {
      init_polyfills();
      var xou = require_xou();
      var vxv = require_vxv_umd();
      var alertStyles = vxv`
  font-family: sans-serif;
  left: 0px;
  right: 0px;
  position: fixed;
  padding: 8px 15px;
  background: white;
  text-align: center;
  opacity: 0;
  transition: all .3s;
  margin: 0px;
  padding: 0px;

  & h1 {
    margin: 10px 0px 5px 0px;
  }

  & p {
    margin: 0px 0px 0px 0px;
  }

  &.top {
    border-bottom: solid #E0E0E0 1px;
    top: 0px;
  }

  &.bottom {
    border-top: solid #E0E0E0 1px;
    bottom: 0px;
  }
`;
      module.exports = (opts) => {
        opts.classes = opts.classes || [];
        opts.position = opts.position || "top";
        opts.classes = typeof opts.classes == "string" ? [opts.classes] : opts.classes;
        if (opts.position !== "top" && opts.position !== "bottom") {
          throw new Error("position must be `top` or `bottom`");
        }
        const heading = opts.noH1 == false ? xou`<h1>${opts.heading}</h1>` : "";
        const element = xou`<div class="alert ${alertStyles} ${opts.position} ${opts.classes.join(" ")}">
    ${heading}
    <p>${opts.text}</p>
  </div>`;
        document.body.appendChild(element);
        setTimeout(() => {
          element.style.opacity = 1;
        }, 5);
        const fn = () => {
          element.style.opacity = 0;
          setTimeout(() => {
            element.remove();
          }, 300);
        };
        return fn;
      };
    }
  });

  // src/view/menu.js
  var require_menu = __commonJS({
    "src/view/menu.js"(exports, module) {
      init_polyfills();
      var html = require_xou();
      var vxv = require_vxv_umd();
      var alert = require_alert();
      var styles = vxv`
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  display: block;
  float: left;
  margin: 0px auto;
  width: 25%;
}

li a {
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px 14px 16px;
  text-decoration: none;
}

.back, .forward {
  font-size: 12px;
}
`;
      var toggle = false;
      var a = () => {
      };
      module.exports = (emitter2, state2) => {
        const element = html`<div id="menu" class="${styles}">
    <ul>
      <li><a class="home">Home</a></li>
      <li><a class="about">About</a></li>
      <li><a class="back">◀</a></li>
      <li><a class="forward">▶</a></li>
    </ul>
  </div>`;
        emitter2.on("menu-toggle", () => {
          if (toggle) {
            document.querySelector(".home").removeEventListener("click", home);
            document.querySelector(".about").removeEventListener("click", about);
            document.querySelector(".forward").removeEventListener("click", forward);
            document.querySelector(".back").removeEventListener("click", back);
            a();
            toggle = !toggle;
          } else {
            a = alert({
              // heading: 'Menu',
              text: element,
              position: "bottom"
            });
            document.querySelector(".home").addEventListener("click", home);
            document.querySelector(".about").addEventListener("click", about);
            document.querySelector(".forward").addEventListener("click", forward);
            document.querySelector(".back").addEventListener("click", back);
            toggle = !toggle;
          }
        });
        const forward = () => {
          emitter2.emit("webview-forward");
          emitter2.emit("menu-toggle");
        };
        const back = () => {
          emitter2.emit("webview-back");
          emitter2.emit("menu-toggle");
        };
        const home = () => {
          emitter2.emit("webview-home");
          emitter2.emit("menu-toggle");
        };
        const about = () => {
          emitter2.emit("webview-about");
          emitter2.emit("menu-toggle");
        };
      };
    }
  });

  // node_modules/vkey/index.js
  var require_vkey = __commonJS({
    "node_modules/vkey/index.js"(exports, module) {
      "use strict";
      init_polyfills();
      var ua = typeof window !== "undefined" ? window.navigator.userAgent : "";
      var isOSX = /OS X/.test(ua);
      var isOpera = /Opera/.test(ua);
      var maybeFirefox = !/like Gecko/.test(ua) && !isOpera;
      var i;
      var output = module.exports = {
        0: isOSX ? "<menu>" : "<UNK>",
        1: "<mouse 1>",
        2: "<mouse 2>",
        3: "<break>",
        4: "<mouse 3>",
        5: "<mouse 4>",
        6: "<mouse 5>",
        8: "<backspace>",
        9: "<tab>",
        12: "<clear>",
        13: "<enter>",
        16: "<shift>",
        17: "<control>",
        18: "<alt>",
        19: "<pause>",
        20: "<caps-lock>",
        21: "<ime-hangul>",
        23: "<ime-junja>",
        24: "<ime-final>",
        25: "<ime-kanji>",
        27: "<escape>",
        28: "<ime-convert>",
        29: "<ime-nonconvert>",
        30: "<ime-accept>",
        31: "<ime-mode-change>",
        32: "<space>",
        33: "<page-up>",
        34: "<page-down>",
        35: "<end>",
        36: "<home>",
        37: "<left>",
        38: "<up>",
        39: "<right>",
        40: "<down>",
        41: "<select>",
        42: "<print>",
        43: "<execute>",
        44: "<snapshot>",
        45: "<insert>",
        46: "<delete>",
        47: "<help>",
        91: "<meta>",
        92: "<meta>",
        93: isOSX ? "<meta>" : "<menu>",
        95: "<sleep>",
        106: "<num-*>",
        107: "<num-+>",
        108: "<num-enter>",
        109: "<num-->",
        110: "<num-.>",
        111: "<num-/>",
        144: "<num-lock>",
        145: "<scroll-lock>",
        160: "<shift-left>",
        161: "<shift-right>",
        162: "<control-left>",
        163: "<control-right>",
        164: "<alt-left>",
        165: "<alt-right>",
        166: "<browser-back>",
        167: "<browser-forward>",
        168: "<browser-refresh>",
        169: "<browser-stop>",
        170: "<browser-search>",
        171: "<browser-favorites>",
        172: "<browser-home>",
        173: isOSX && maybeFirefox ? "-" : "<volume-mute>",
        174: "<volume-down>",
        175: "<volume-up>",
        176: "<next-track>",
        177: "<prev-track>",
        178: "<stop>",
        179: "<play-pause>",
        180: "<launch-mail>",
        181: "<launch-media-select>",
        182: "<launch-app 1>",
        183: "<launch-app 2>",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        223: "<meta>",
        224: "<meta>",
        226: "<alt-gr>",
        229: "<ime-process>",
        231: isOpera ? "`" : "<unicode>",
        246: "<attention>",
        247: "<crsel>",
        248: "<exsel>",
        249: "<erase-eof>",
        250: "<play>",
        251: "<zoom>",
        252: "<no-name>",
        253: "<pa-1>",
        254: "<clear>"
      };
      for (i = 58; i < 65; ++i) {
        output[i] = String.fromCharCode(i);
      }
      for (i = 48; i < 58; ++i) {
        output[i] = i - 48 + "";
      }
      for (i = 65; i < 91; ++i) {
        output[i] = String.fromCharCode(i);
      }
      for (i = 96; i < 106; ++i) {
        output[i] = "<num-" + (i - 96) + ">";
      }
      for (i = 112; i < 136; ++i) {
        output[i] = "F" + (i - 111);
      }
    }
  });

  // src/view/utils/betterURL.js
  var require_betterURL = __commonJS({
    "src/view/utils/betterURL.js"(exports, module) {
      init_polyfills();
      var pages = require_pages();
      module.exports = (url) => {
        if (url.startsWith("file:///")) {
          for (let p in pages) {
            if (url.indexOf(pages[p].substr(1)) != -1) {
              return `https://${p}`;
            }
          }
        }
        return url;
      };
    }
  });

  // src/view/titlebar.js
  var require_titlebar = __commonJS({
    "src/view/titlebar.js"(exports, module) {
      init_polyfills();
      var html = require_xou();
      var vxv = require_vxv_umd();
      var vkey = require_vkey();
      var betterUrl = require_betterURL();
      var icons = {
        back: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>',
        forward: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
        reload: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
        home: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
        newTab: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',
        history: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>'
      };
      var topbarStyle = vxv`
width: 100%;
-webkit-app-region: drag;
z-index: 9999;
position: relative;

& .bar {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding-top: 14px; /* Increase top padding for traffic lights */
  height: 54px;      /* Taller header */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 80px; 
  padding-right: 24px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03); /* Soft, deep shadow */
  border-bottom: 1px solid rgba(0,0,0,0.05); /* Very subtle border */
}

& .controls {
  display: flex;
  align-items: center;
  gap: 12px; /* More breathing room */
  -webkit-app-region: no-drag;
}

& .btn {
  background: transparent;
  border: none;
  cursor: pointer;
  color: #5f6368;
  padding: 8px; /* Larger hit area */
  border-radius: 8px; /* Softer corners */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(0,0,0,0.06);
    color: #000;
    transform: translateY(-1px); /* Micro-interaction */
  }
  
  &:active {
    transform: translateY(0px);
  }
}

& .input-container {
  flex: 1;
  text-align: center;
  margin: 0 24px;
}

& .input {
  text-align: center;
  background: #f1f3f4;
  color: #202124;
  padding: 10px 20px;
  width: 100%;
  max-width: 600px;
  border: 1px solid transparent;
  border-radius: 12px; /* Modern curve */
  outline: none;
  font-size: 13px;
  font-weight: 500;
  transition: all .2s cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-app-region: no-drag;
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.02);

  &:hover {
    background: #e8eaed;
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.05);
  }

  &:focus {
    background: white;
    border-color: #1a73e8; /* Accent color focus */
    box-shadow: 0 2px 8px rgba(26,115,232,0.15);
    text-align: left;
    padding-left: 20px;
  }
}
`;
      module.exports = (emitter2, state2) => {
        const tooltips = {
          back: "Go Back",
          forward: "Go Forward",
          reload: "Reload Page",
          home: "Go Home",
          newTab: "New Tab",
          history: "View History"
        };
        const btn = (iconName, action) => {
          const div = document.createElement("div");
          div.innerHTML = icons[iconName];
          const svg = div.firstChild;
          return html`<button class="btn" onclick=${action} title="${tooltips[iconName] || iconName}">
      ${svg}
    </button>`;
        };
        const element = html`<div>
    <div id="titlebar" class="${topbarStyle}">
      <div class="bar">
        <!-- Left Controls -->
        <div class="controls">
          ${btn("back", () => emitter2.emit("webview-back"))}
          ${btn("forward", () => emitter2.emit("webview-forward"))}
          ${btn("reload", () => emitter2.emit("webview-reload"))}
          ${btn("home", () => emitter2.emit("webview-home"))}
        </div>

        <!-- Address Bar -->
        <div class="input-container">
          <input type="text" class="input urlbar" value="${state2.url}">
        </div>

        <!-- Right Controls -->
        <div class="controls">
          ${btn("newTab", () => emitter2.emit("tabs-create"))}
          ${btn("history", () => emitter2.emit("history-toggle"))}
        </div>
      </div>
    </div>
  </div>`;
        document.body.appendChild(element);
        emitter2.on("titlebar-title-updated", () => {
          if (!state2.hovering) {
            const urlbar = document.querySelector(".urlbar");
            if (urlbar) {
              urlbar.value = state2.title || "";
            }
          }
        });
        emitter2.on("titlebar-url-updated", () => {
          if (state2.hovering) {
            const urlbar = document.querySelector(".urlbar");
            if (urlbar) {
              urlbar.value = betterUrl(state2.url);
            }
          }
        });
        const urlInput = document.querySelector(".urlbar");
        if (!urlInput) {
          console.error("URL input element not found");
          return;
        }
        urlInput.addEventListener("mouseover", () => {
          urlInput.value = betterUrl(state2.url);
          urlInput.focus();
          urlInput.select();
          state2.hovering = true;
        });
        urlInput.addEventListener("mouseleave", () => {
          urlInput.value = state2.title || "";
          urlInput.blur();
          emitter2.emit("webview-set-focus");
          state2.hovering = false;
        });
        urlInput.addEventListener("keydown", (ev) => {
          if (vkey[ev.keyCode] == "<enter>") {
            ev.preventDefault();
            emitter2.emit("navigate", {
              slug: urlInput.value,
              expand: ev.ctrlKey
            });
          }
        }, false);
      };
    }
  });

  // src/view/utils/dotify.js
  var require_dotify = __commonJS({
    "src/view/utils/dotify.js"(exports, module) {
      init_polyfills();
      module.exports = (str, len) => {
        len = len || 25;
        if (str.length > len) {
          return str.substr(0, len - 3) + "...";
        }
        return str;
      };
    }
  });

  // src/view/tabs.js
  var require_tabs = __commonJS({
    "src/view/tabs.js"(exports, module) {
      init_polyfills();
      var html = require_xou();
      var vxv = require_vxv_umd();
      var alert = require_alert();
      var betterUrl = require_betterURL();
      var dotify = require_dotify();
      var styles = vxv`
top: 68px; /* Push down to clear taller titlebar + spacing */
left: 0px;
right: 0px;
position: fixed;
padding: 0 24px; /* Match titlebar padding */
background: transparent; /* Transparent track */
text-align: center;
margin: 0px;
border: none;
transition: opacity .3s;

display: none;
opacity: 0;

:global(.tabs) {
border-radius:10px red solid;
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  margin-top: 68px;
}

:global(.simplebar-scrollbar) {
  border-radius: 4px!important;
  background-color: rgba(0,0,0,0.1);
}

:global(.simplebar-track.horizontal) {
  height: 6px;
  background: transparent;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  text-align: left;
  display: flex;
  gap: 8px; /* Space between tabs */
}

li {
  display: inline-flex;
  align-items: center;
  width: 200px;
  padding: 8px 16px;
  background: rgba(255,255,255,0.7); /* translucent inactive */
  border: 1px solid transparent;
  border-radius: 8px 8px 0 0; /* Rounded top */
  /* OR fully rounded pill: border-radius: 8px; */
  border-radius: 10px;
  
  height: 36px;
  transition: all .2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  font-size: 12px;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
  cursor: pointer;
}

li a {
  color: #5f6368;
  text-align: left;
  text-decoration: none;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none; /* Let parent handle click */
}

li:hover {
  background: rgba(255,255,255,0.9);
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);

  .close {
    opacity: 1;
  }
}

li.active {
  background: #FFF;
  border: 1px solid rgba(0,0,0,0.08);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  color: #1a73e8;
  z-index: 2;

  & a {
    color: #202124;
    font-weight: 600;
  }

  .close {
    opacity: 1;
  }
}

.close {
  position: absolute !important;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  transition: all .2s;
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  font-size: 14px;
  line-height: 10px;
  color: #999;
  
  &:hover {
    background: rgba(0,0,0,0.1);
    color: #d93025;
  }
}
`;
      module.exports = (emitter2, state2) => {
        const render = () => {
          const el = html`<div id="tabs" class="${styles}">
      <ul class="tabs-bar">
        ${state2.views.map((view, id) => {
            const webview2 = document.querySelector(`#${view.id}`);
            const active = view.element.style.display == "block" ? true : false;
            let title = "Loading";
            try {
              title = dotify(webview2.getTitle());
            } catch (err) {
            }
            if (title == "" || title == " " || title == void 0) {
              title = dotify(webview2.getURL());
            }
            if (title == "" || title == " " || title == void 0) {
              title = dotify(betterUrl(webview2.getAttribute("src")) || "Loading");
            }
            let closeClicked = false;
            return html`<li class="${active == true ? "active" : ""}" onclick=${() => {
              if (!closeClicked) {
                emitter2.emit("webview-change", id);
                emitter2.emit("tabs-render");
              }
            }}><a class="nav">${title} <span class="close" onclick=${(e) => {
              closeClicked = true;
              e.preventDefault();
              emitter2.emit("webview-remove", id);
              setTimeout(() => {
                closeClicked = false;
              }, 10);
            }}>×</span></a></li>`;
          })}
      </ul>
    </div>`;
          new SimpleBar(el.querySelector(".tabs-bar"));
          el.style.display = "block";
          el.style.opacity = "1";
          return el;
        };
        const element = render();
        document.body.appendChild(element);
        emitter2.on("tabs-render", () => {
          const newEl = render();
          html.update(element, newEl);
        });
        emitter2.on("tabs-create", (src) => {
          emitter2.emit("webview-create", src);
          emitter2.emit("tabs-render");
        });
        emitter2.on("tabs-remove-current", () => {
          state2.views.forEach((view, id) => {
            const active = view.element.style.display == "block" ? true : false;
            if (active) {
              emitter2.emit("webview-remove", id);
              emitter2.emit("tabs-render");
            }
          });
        });
      };
    }
  });

  // node_modules/nprogress/nprogress.js
  var require_nprogress = __commonJS({
    "node_modules/nprogress/nprogress.js"(exports, module) {
      init_polyfills();
      (function(root, factory) {
        if (typeof define === "function" && define.amd) {
          define(factory);
        } else if (typeof exports === "object") {
          module.exports = factory();
        } else {
          root.NProgress = factory();
        }
      })(exports, function() {
        var NProgress = {};
        NProgress.version = "0.2.0";
        var Settings = NProgress.settings = {
          minimum: 0.08,
          easing: "ease",
          positionUsing: "",
          speed: 200,
          trickle: true,
          trickleRate: 0.02,
          trickleSpeed: 800,
          showSpinner: true,
          barSelector: '[role="bar"]',
          spinnerSelector: '[role="spinner"]',
          parent: "body",
          template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        };
        NProgress.configure = function(options) {
          var key, value;
          for (key in options) {
            value = options[key];
            if (value !== void 0 && options.hasOwnProperty(key)) Settings[key] = value;
          }
          return this;
        };
        NProgress.status = null;
        NProgress.set = function(n) {
          var started = NProgress.isStarted();
          n = clamp(n, Settings.minimum, 1);
          NProgress.status = n === 1 ? null : n;
          var progress2 = NProgress.render(!started), bar = progress2.querySelector(Settings.barSelector), speed = Settings.speed, ease = Settings.easing;
          progress2.offsetWidth;
          queue(function(next) {
            if (Settings.positionUsing === "") Settings.positionUsing = NProgress.getPositioningCSS();
            css(bar, barPositionCSS(n, speed, ease));
            if (n === 1) {
              css(progress2, {
                transition: "none",
                opacity: 1
              });
              progress2.offsetWidth;
              setTimeout(function() {
                css(progress2, {
                  transition: "all " + speed + "ms linear",
                  opacity: 0
                });
                setTimeout(function() {
                  NProgress.remove();
                  next();
                }, speed);
              }, speed);
            } else {
              setTimeout(next, speed);
            }
          });
          return this;
        };
        NProgress.isStarted = function() {
          return typeof NProgress.status === "number";
        };
        NProgress.start = function() {
          if (!NProgress.status) NProgress.set(0);
          var work = function() {
            setTimeout(function() {
              if (!NProgress.status) return;
              NProgress.trickle();
              work();
            }, Settings.trickleSpeed);
          };
          if (Settings.trickle) work();
          return this;
        };
        NProgress.done = function(force) {
          if (!force && !NProgress.status) return this;
          return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
        };
        NProgress.inc = function(amount) {
          var n = NProgress.status;
          if (!n) {
            return NProgress.start();
          } else {
            if (typeof amount !== "number") {
              amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
            }
            n = clamp(n + amount, 0, 0.994);
            return NProgress.set(n);
          }
        };
        NProgress.trickle = function() {
          return NProgress.inc(Math.random() * Settings.trickleRate);
        };
        (function() {
          var initial = 0, current = 0;
          NProgress.promise = function($promise) {
            if (!$promise || $promise.state() === "resolved") {
              return this;
            }
            if (current === 0) {
              NProgress.start();
            }
            initial++;
            current++;
            $promise.always(function() {
              current--;
              if (current === 0) {
                initial = 0;
                NProgress.done();
              } else {
                NProgress.set((initial - current) / initial);
              }
            });
            return this;
          };
        })();
        NProgress.render = function(fromStart) {
          if (NProgress.isRendered()) return document.getElementById("nprogress");
          addClass(document.documentElement, "nprogress-busy");
          var progress2 = document.createElement("div");
          progress2.id = "nprogress";
          progress2.innerHTML = Settings.template;
          var bar = progress2.querySelector(Settings.barSelector), perc = fromStart ? "-100" : toBarPerc(NProgress.status || 0), parent = document.querySelector(Settings.parent), spinner;
          css(bar, {
            transition: "all 0 linear",
            transform: "translate3d(" + perc + "%,0,0)"
          });
          if (!Settings.showSpinner) {
            spinner = progress2.querySelector(Settings.spinnerSelector);
            spinner && removeElement(spinner);
          }
          if (parent != document.body) {
            addClass(parent, "nprogress-custom-parent");
          }
          parent.appendChild(progress2);
          return progress2;
        };
        NProgress.remove = function() {
          removeClass(document.documentElement, "nprogress-busy");
          removeClass(document.querySelector(Settings.parent), "nprogress-custom-parent");
          var progress2 = document.getElementById("nprogress");
          progress2 && removeElement(progress2);
        };
        NProgress.isRendered = function() {
          return !!document.getElementById("nprogress");
        };
        NProgress.getPositioningCSS = function() {
          var bodyStyle = document.body.style;
          var vendorPrefix = "WebkitTransform" in bodyStyle ? "Webkit" : "MozTransform" in bodyStyle ? "Moz" : "msTransform" in bodyStyle ? "ms" : "OTransform" in bodyStyle ? "O" : "";
          if (vendorPrefix + "Perspective" in bodyStyle) {
            return "translate3d";
          } else if (vendorPrefix + "Transform" in bodyStyle) {
            return "translate";
          } else {
            return "margin";
          }
        };
        function clamp(n, min, max) {
          if (n < min) return min;
          if (n > max) return max;
          return n;
        }
        function toBarPerc(n) {
          return (-1 + n) * 100;
        }
        function barPositionCSS(n, speed, ease) {
          var barCSS;
          if (Settings.positionUsing === "translate3d") {
            barCSS = { transform: "translate3d(" + toBarPerc(n) + "%,0,0)" };
          } else if (Settings.positionUsing === "translate") {
            barCSS = { transform: "translate(" + toBarPerc(n) + "%,0)" };
          } else {
            barCSS = { "margin-left": toBarPerc(n) + "%" };
          }
          barCSS.transition = "all " + speed + "ms " + ease;
          return barCSS;
        }
        var queue = /* @__PURE__ */ (function() {
          var pending = [];
          function next() {
            var fn = pending.shift();
            if (fn) {
              fn(next);
            }
          }
          return function(fn) {
            pending.push(fn);
            if (pending.length == 1) next();
          };
        })();
        var css = /* @__PURE__ */ (function() {
          var cssPrefixes = ["Webkit", "O", "Moz", "ms"], cssProps = {};
          function camelCase(string) {
            return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
              return letter.toUpperCase();
            });
          }
          function getVendorProp(name) {
            var style = document.body.style;
            if (name in style) return name;
            var i = cssPrefixes.length, capName = name.charAt(0).toUpperCase() + name.slice(1), vendorName;
            while (i--) {
              vendorName = cssPrefixes[i] + capName;
              if (vendorName in style) return vendorName;
            }
            return name;
          }
          function getStyleProp(name) {
            name = camelCase(name);
            return cssProps[name] || (cssProps[name] = getVendorProp(name));
          }
          function applyCss(element, prop, value) {
            prop = getStyleProp(prop);
            element.style[prop] = value;
          }
          return function(element, properties) {
            var args = arguments, prop, value;
            if (args.length == 2) {
              for (prop in properties) {
                value = properties[prop];
                if (value !== void 0 && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
              }
            } else {
              applyCss(element, args[1], args[2]);
            }
          };
        })();
        function hasClass(element, name) {
          var list = typeof element == "string" ? element : classList(element);
          return list.indexOf(" " + name + " ") >= 0;
        }
        function addClass(element, name) {
          var oldList = classList(element), newList = oldList + name;
          if (hasClass(oldList, name)) return;
          element.className = newList.substring(1);
        }
        function removeClass(element, name) {
          var oldList = classList(element), newList;
          if (!hasClass(element, name)) return;
          newList = oldList.replace(" " + name + " ", " ");
          element.className = newList.substring(1, newList.length - 1);
        }
        function classList(element) {
          return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
        }
        function removeElement(element) {
          element && element.parentNode && element.parentNode.removeChild(element);
        }
        return NProgress;
      });
    }
  });

  // src/view/progress.js
  var require_progress = __commonJS({
    "src/view/progress.js"(exports, module) {
      init_polyfills();
      var nprogress = require_nprogress();
      module.exports = (emitter2) => {
        nprogress.configure({ showSpinner: false });
        emitter2.on("progress-start", () => {
          nprogress.start();
        });
        emitter2.on("progress-stop", () => {
          nprogress.done();
        });
      };
    }
  });

  // node_modules/dexie/dist/dexie.js
  var require_dexie = __commonJS({
    "node_modules/dexie/dist/dexie.js"(exports, module) {
      init_polyfills();
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, global2.Dexie = factory());
      })(exports, (function() {
        "use strict";
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        function __extends(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        }
        var __assign = function() {
          __assign = Object.assign || function __assign2(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
          };
          return __assign.apply(this, arguments);
        };
        function __spreadArray(to, from, pack) {
          if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar) ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
          return to.concat(ar || Array.prototype.slice.call(from));
        }
        var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
        var keys2 = Object.keys;
        var isArray = Array.isArray;
        if (typeof Promise !== "undefined" && !_global.Promise) {
          _global.Promise = Promise;
        }
        function extend(obj, extension) {
          if (typeof extension !== "object")
            return obj;
          keys2(extension).forEach(function(key) {
            obj[key] = extension[key];
          });
          return obj;
        }
        var getProto = Object.getPrototypeOf;
        var _hasOwn = {}.hasOwnProperty;
        function hasOwn(obj, prop) {
          return _hasOwn.call(obj, prop);
        }
        function props(proto, extension) {
          if (typeof extension === "function")
            extension = extension(getProto(proto));
          (typeof Reflect === "undefined" ? keys2 : Reflect.ownKeys)(extension).forEach(function(key) {
            setProp(proto, key, extension[key]);
          });
        }
        var defineProperty = Object.defineProperty;
        function setProp(obj, prop, functionOrGetSet, options) {
          defineProperty(obj, prop, extend(functionOrGetSet && hasOwn(functionOrGetSet, "get") && typeof functionOrGetSet.get === "function" ? { get: functionOrGetSet.get, set: functionOrGetSet.set, configurable: true } : { value: functionOrGetSet, configurable: true, writable: true }, options));
        }
        function derive(Child) {
          return {
            from: function(Parent) {
              Child.prototype = Object.create(Parent.prototype);
              setProp(Child.prototype, "constructor", Child);
              return {
                extend: props.bind(null, Child.prototype)
              };
            }
          };
        }
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        function getPropertyDescriptor(obj, prop) {
          var pd = getOwnPropertyDescriptor(obj, prop);
          var proto;
          return pd || (proto = getProto(obj)) && getPropertyDescriptor(proto, prop);
        }
        var _slice = [].slice;
        function slice(args, start, end) {
          return _slice.call(args, start, end);
        }
        function override(origFunc, overridedFactory) {
          return overridedFactory(origFunc);
        }
        function assert(b) {
          if (!b)
            throw new Error("Assertion Failed");
        }
        function asap$1(fn) {
          if (_global.setImmediate)
            setImmediate(fn);
          else
            setTimeout(fn, 0);
        }
        function arrayToObject(array, extractor) {
          return array.reduce(function(result, item, i) {
            var nameAndValue = extractor(item, i);
            if (nameAndValue)
              result[nameAndValue[0]] = nameAndValue[1];
            return result;
          }, {});
        }
        function getByKeyPath(obj, keyPath) {
          if (typeof keyPath === "string" && hasOwn(obj, keyPath))
            return obj[keyPath];
          if (!keyPath)
            return obj;
          if (typeof keyPath !== "string") {
            var rv = [];
            for (var i = 0, l = keyPath.length; i < l; ++i) {
              var val = getByKeyPath(obj, keyPath[i]);
              rv.push(val);
            }
            return rv;
          }
          var period = keyPath.indexOf(".");
          if (period !== -1) {
            var innerObj = obj[keyPath.substr(0, period)];
            return innerObj == null ? void 0 : getByKeyPath(innerObj, keyPath.substr(period + 1));
          }
          return void 0;
        }
        function setByKeyPath(obj, keyPath, value) {
          if (!obj || keyPath === void 0)
            return;
          if ("isFrozen" in Object && Object.isFrozen(obj))
            return;
          if (typeof keyPath !== "string" && "length" in keyPath) {
            assert(typeof value !== "string" && "length" in value);
            for (var i = 0, l = keyPath.length; i < l; ++i) {
              setByKeyPath(obj, keyPath[i], value[i]);
            }
          } else {
            var period = keyPath.indexOf(".");
            if (period !== -1) {
              var currentKeyPath = keyPath.substr(0, period);
              var remainingKeyPath = keyPath.substr(period + 1);
              if (remainingKeyPath === "")
                if (value === void 0) {
                  if (isArray(obj) && !isNaN(parseInt(currentKeyPath)))
                    obj.splice(currentKeyPath, 1);
                  else
                    delete obj[currentKeyPath];
                } else
                  obj[currentKeyPath] = value;
              else {
                var innerObj = obj[currentKeyPath];
                if (!innerObj || !hasOwn(obj, currentKeyPath))
                  innerObj = obj[currentKeyPath] = {};
                setByKeyPath(innerObj, remainingKeyPath, value);
              }
            } else {
              if (value === void 0) {
                if (isArray(obj) && !isNaN(parseInt(keyPath)))
                  obj.splice(keyPath, 1);
                else
                  delete obj[keyPath];
              } else
                obj[keyPath] = value;
            }
          }
        }
        function delByKeyPath(obj, keyPath) {
          if (typeof keyPath === "string")
            setByKeyPath(obj, keyPath, void 0);
          else if ("length" in keyPath)
            [].map.call(keyPath, function(kp) {
              setByKeyPath(obj, kp, void 0);
            });
        }
        function shallowClone(obj) {
          var rv = {};
          for (var m in obj) {
            if (hasOwn(obj, m))
              rv[m] = obj[m];
          }
          return rv;
        }
        var concat = [].concat;
        function flatten(a) {
          return concat.apply([], a);
        }
        var intrinsicTypeNames = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(flatten([8, 16, 32, 64].map(function(num) {
          return ["Int", "Uint", "Float"].map(function(t) {
            return t + num + "Array";
          });
        }))).filter(function(t) {
          return _global[t];
        });
        var intrinsicTypes = new Set(intrinsicTypeNames.map(function(t) {
          return _global[t];
        }));
        function cloneSimpleObjectTree(o) {
          var rv = {};
          for (var k in o)
            if (hasOwn(o, k)) {
              var v = o[k];
              rv[k] = !v || typeof v !== "object" || intrinsicTypes.has(v.constructor) ? v : cloneSimpleObjectTree(v);
            }
          return rv;
        }
        function objectIsEmpty(o) {
          for (var k in o)
            if (hasOwn(o, k))
              return false;
          return true;
        }
        var circularRefs = null;
        function deepClone(any) {
          circularRefs = /* @__PURE__ */ new WeakMap();
          var rv = innerDeepClone(any);
          circularRefs = null;
          return rv;
        }
        function innerDeepClone(x) {
          if (!x || typeof x !== "object")
            return x;
          var rv = circularRefs.get(x);
          if (rv)
            return rv;
          if (isArray(x)) {
            rv = [];
            circularRefs.set(x, rv);
            for (var i = 0, l = x.length; i < l; ++i) {
              rv.push(innerDeepClone(x[i]));
            }
          } else if (intrinsicTypes.has(x.constructor)) {
            rv = x;
          } else {
            var proto = getProto(x);
            rv = proto === Object.prototype ? {} : Object.create(proto);
            circularRefs.set(x, rv);
            for (var prop in x) {
              if (hasOwn(x, prop)) {
                rv[prop] = innerDeepClone(x[prop]);
              }
            }
          }
          return rv;
        }
        var toString = {}.toString;
        function toStringTag(o) {
          return toString.call(o).slice(8, -1);
        }
        var iteratorSymbol = typeof Symbol !== "undefined" ? Symbol.iterator : "@@iterator";
        var getIteratorOf = typeof iteratorSymbol === "symbol" ? function(x) {
          var i;
          return x != null && (i = x[iteratorSymbol]) && i.apply(x);
        } : function() {
          return null;
        };
        function delArrayItem(a, x) {
          var i = a.indexOf(x);
          if (i >= 0)
            a.splice(i, 1);
          return i >= 0;
        }
        var NO_CHAR_ARRAY = {};
        function getArrayOf(arrayLike) {
          var i, a, x, it;
          if (arguments.length === 1) {
            if (isArray(arrayLike))
              return arrayLike.slice();
            if (this === NO_CHAR_ARRAY && typeof arrayLike === "string")
              return [arrayLike];
            if (it = getIteratorOf(arrayLike)) {
              a = [];
              while (x = it.next(), !x.done)
                a.push(x.value);
              return a;
            }
            if (arrayLike == null)
              return [arrayLike];
            i = arrayLike.length;
            if (typeof i === "number") {
              a = new Array(i);
              while (i--)
                a[i] = arrayLike[i];
              return a;
            }
            return [arrayLike];
          }
          i = arguments.length;
          a = new Array(i);
          while (i--)
            a[i] = arguments[i];
          return a;
        }
        var isAsyncFunction = typeof Symbol !== "undefined" ? function(fn) {
          return fn[Symbol.toStringTag] === "AsyncFunction";
        } : function() {
          return false;
        };
        var dexieErrorNames = [
          "Modify",
          "Bulk",
          "OpenFailed",
          "VersionChange",
          "Schema",
          "Upgrade",
          "InvalidTable",
          "MissingAPI",
          "NoSuchDatabase",
          "InvalidArgument",
          "SubTransaction",
          "Unsupported",
          "Internal",
          "DatabaseClosed",
          "PrematureCommit",
          "ForeignAwait"
        ];
        var idbDomErrorNames = [
          "Unknown",
          "Constraint",
          "Data",
          "TransactionInactive",
          "ReadOnly",
          "Version",
          "NotFound",
          "InvalidState",
          "InvalidAccess",
          "Abort",
          "Timeout",
          "QuotaExceeded",
          "Syntax",
          "DataClone"
        ];
        var errorList = dexieErrorNames.concat(idbDomErrorNames);
        var defaultTexts = {
          VersionChanged: "Database version changed by other database connection",
          DatabaseClosed: "Database has been closed",
          Abort: "Transaction aborted",
          TransactionInactive: "Transaction has already completed or failed",
          MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
        };
        function DexieError(name, msg) {
          this.name = name;
          this.message = msg;
        }
        derive(DexieError).from(Error).extend({
          toString: function() {
            return this.name + ": " + this.message;
          }
        });
        function getMultiErrorMessage(msg, failures) {
          return msg + ". Errors: " + Object.keys(failures).map(function(key) {
            return failures[key].toString();
          }).filter(function(v, i, s) {
            return s.indexOf(v) === i;
          }).join("\n");
        }
        function ModifyError(msg, failures, successCount, failedKeys) {
          this.failures = failures;
          this.failedKeys = failedKeys;
          this.successCount = successCount;
          this.message = getMultiErrorMessage(msg, failures);
        }
        derive(ModifyError).from(DexieError);
        function BulkError(msg, failures) {
          this.name = "BulkError";
          this.failures = Object.keys(failures).map(function(pos) {
            return failures[pos];
          });
          this.failuresByPos = failures;
          this.message = getMultiErrorMessage(msg, this.failures);
        }
        derive(BulkError).from(DexieError);
        var errnames = errorList.reduce(function(obj, name) {
          return obj[name] = name + "Error", obj;
        }, {});
        var BaseException = DexieError;
        var exceptions = errorList.reduce(function(obj, name) {
          var fullName = name + "Error";
          function DexieError2(msgOrInner, inner) {
            this.name = fullName;
            if (!msgOrInner) {
              this.message = defaultTexts[name] || fullName;
              this.inner = null;
            } else if (typeof msgOrInner === "string") {
              this.message = "".concat(msgOrInner).concat(!inner ? "" : "\n " + inner);
              this.inner = inner || null;
            } else if (typeof msgOrInner === "object") {
              this.message = "".concat(msgOrInner.name, " ").concat(msgOrInner.message);
              this.inner = msgOrInner;
            }
          }
          derive(DexieError2).from(BaseException);
          obj[name] = DexieError2;
          return obj;
        }, {});
        exceptions.Syntax = SyntaxError;
        exceptions.Type = TypeError;
        exceptions.Range = RangeError;
        var exceptionMap = idbDomErrorNames.reduce(function(obj, name) {
          obj[name + "Error"] = exceptions[name];
          return obj;
        }, {});
        function mapError(domError, message) {
          if (!domError || domError instanceof DexieError || domError instanceof TypeError || domError instanceof SyntaxError || !domError.name || !exceptionMap[domError.name])
            return domError;
          var rv = new exceptionMap[domError.name](message || domError.message, domError);
          if ("stack" in domError) {
            setProp(rv, "stack", { get: function() {
              return this.inner.stack;
            } });
          }
          return rv;
        }
        var fullNameExceptions = errorList.reduce(function(obj, name) {
          if (["Syntax", "Type", "Range"].indexOf(name) === -1)
            obj[name + "Error"] = exceptions[name];
          return obj;
        }, {});
        fullNameExceptions.ModifyError = ModifyError;
        fullNameExceptions.DexieError = DexieError;
        fullNameExceptions.BulkError = BulkError;
        function nop() {
        }
        function mirror(val) {
          return val;
        }
        function pureFunctionChain(f1, f2) {
          if (f1 == null || f1 === mirror)
            return f2;
          return function(val) {
            return f2(f1(val));
          };
        }
        function callBoth(on1, on2) {
          return function() {
            on1.apply(this, arguments);
            on2.apply(this, arguments);
          };
        }
        function hookCreatingChain(f1, f2) {
          if (f1 === nop)
            return f2;
          return function() {
            var res = f1.apply(this, arguments);
            if (res !== void 0)
              arguments[0] = res;
            var onsuccess = this.onsuccess, onerror = this.onerror;
            this.onsuccess = null;
            this.onerror = null;
            var res2 = f2.apply(this, arguments);
            if (onsuccess)
              this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
            if (onerror)
              this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
            return res2 !== void 0 ? res2 : res;
          };
        }
        function hookDeletingChain(f1, f2) {
          if (f1 === nop)
            return f2;
          return function() {
            f1.apply(this, arguments);
            var onsuccess = this.onsuccess, onerror = this.onerror;
            this.onsuccess = this.onerror = null;
            f2.apply(this, arguments);
            if (onsuccess)
              this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
            if (onerror)
              this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
          };
        }
        function hookUpdatingChain(f1, f2) {
          if (f1 === nop)
            return f2;
          return function(modifications) {
            var res = f1.apply(this, arguments);
            extend(modifications, res);
            var onsuccess = this.onsuccess, onerror = this.onerror;
            this.onsuccess = null;
            this.onerror = null;
            var res2 = f2.apply(this, arguments);
            if (onsuccess)
              this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
            if (onerror)
              this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
            return res === void 0 ? res2 === void 0 ? void 0 : res2 : extend(res, res2);
          };
        }
        function reverseStoppableEventChain(f1, f2) {
          if (f1 === nop)
            return f2;
          return function() {
            if (f2.apply(this, arguments) === false)
              return false;
            return f1.apply(this, arguments);
          };
        }
        function promisableChain(f1, f2) {
          if (f1 === nop)
            return f2;
          return function() {
            var res = f1.apply(this, arguments);
            if (res && typeof res.then === "function") {
              var thiz = this, i = arguments.length, args = new Array(i);
              while (i--)
                args[i] = arguments[i];
              return res.then(function() {
                return f2.apply(thiz, args);
              });
            }
            return f2.apply(this, arguments);
          };
        }
        var debug = typeof location !== "undefined" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
        function setDebug(value, filter) {
          debug = value;
        }
        var INTERNAL = {};
        var ZONE_ECHO_LIMIT = 100, _a$1 = typeof Promise === "undefined" ? [] : (function() {
          var globalP = Promise.resolve();
          if (typeof crypto === "undefined" || !crypto.subtle)
            return [globalP, getProto(globalP), globalP];
          var nativeP = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
          return [
            nativeP,
            getProto(nativeP),
            globalP
          ];
        })(), resolvedNativePromise = _a$1[0], nativePromiseProto = _a$1[1], resolvedGlobalPromise = _a$1[2], nativePromiseThen = nativePromiseProto && nativePromiseProto.then;
        var NativePromise = resolvedNativePromise && resolvedNativePromise.constructor;
        var patchGlobalPromise = !!resolvedGlobalPromise;
        function schedulePhysicalTick() {
          queueMicrotask(physicalTick);
        }
        var asap = function(callback, args) {
          microtickQueue.push([callback, args]);
          if (needsNewPhysicalTick) {
            schedulePhysicalTick();
            needsNewPhysicalTick = false;
          }
        };
        var isOutsideMicroTick = true, needsNewPhysicalTick = true, unhandledErrors = [], rejectingErrors = [], rejectionMapper = mirror;
        var globalPSD = {
          id: "global",
          global: true,
          ref: 0,
          unhandleds: [],
          onunhandled: nop,
          pgp: false,
          env: {},
          finalize: nop
        };
        var PSD = globalPSD;
        var microtickQueue = [];
        var numScheduledCalls = 0;
        var tickFinalizers = [];
        function DexiePromise(fn) {
          if (typeof this !== "object")
            throw new TypeError("Promises must be constructed via new");
          this._listeners = [];
          this._lib = false;
          var psd = this._PSD = PSD;
          if (typeof fn !== "function") {
            if (fn !== INTERNAL)
              throw new TypeError("Not a function");
            this._state = arguments[1];
            this._value = arguments[2];
            if (this._state === false)
              handleRejection(this, this._value);
            return;
          }
          this._state = null;
          this._value = null;
          ++psd.ref;
          executePromiseTask(this, fn);
        }
        var thenProp = {
          get: function() {
            var psd = PSD, microTaskId = totalEchoes;
            function then(onFulfilled, onRejected) {
              var _this = this;
              var possibleAwait = !psd.global && (psd !== PSD || microTaskId !== totalEchoes);
              var cleanup = possibleAwait && !decrementExpectedAwaits();
              var rv = new DexiePromise(function(resolve, reject) {
                propagateToListener(_this, new Listener(nativeAwaitCompatibleWrap(onFulfilled, psd, possibleAwait, cleanup), nativeAwaitCompatibleWrap(onRejected, psd, possibleAwait, cleanup), resolve, reject, psd));
              });
              if (this._consoleTask)
                rv._consoleTask = this._consoleTask;
              return rv;
            }
            then.prototype = INTERNAL;
            return then;
          },
          set: function(value) {
            setProp(this, "then", value && value.prototype === INTERNAL ? thenProp : {
              get: function() {
                return value;
              },
              set: thenProp.set
            });
          }
        };
        props(DexiePromise.prototype, {
          then: thenProp,
          _then: function(onFulfilled, onRejected) {
            propagateToListener(this, new Listener(null, null, onFulfilled, onRejected, PSD));
          },
          catch: function(onRejected) {
            if (arguments.length === 1)
              return this.then(null, onRejected);
            var type2 = arguments[0], handler = arguments[1];
            return typeof type2 === "function" ? this.then(null, function(err) {
              return err instanceof type2 ? handler(err) : PromiseReject(err);
            }) : this.then(null, function(err) {
              return err && err.name === type2 ? handler(err) : PromiseReject(err);
            });
          },
          finally: function(onFinally) {
            return this.then(function(value) {
              return DexiePromise.resolve(onFinally()).then(function() {
                return value;
              });
            }, function(err) {
              return DexiePromise.resolve(onFinally()).then(function() {
                return PromiseReject(err);
              });
            });
          },
          timeout: function(ms, msg) {
            var _this = this;
            return ms < Infinity ? new DexiePromise(function(resolve, reject) {
              var handle = setTimeout(function() {
                return reject(new exceptions.Timeout(msg));
              }, ms);
              _this.then(resolve, reject).finally(clearTimeout.bind(null, handle));
            }) : this;
          }
        });
        if (typeof Symbol !== "undefined" && Symbol.toStringTag)
          setProp(DexiePromise.prototype, Symbol.toStringTag, "Dexie.Promise");
        globalPSD.env = snapShot();
        function Listener(onFulfilled, onRejected, resolve, reject, zone) {
          this.onFulfilled = typeof onFulfilled === "function" ? onFulfilled : null;
          this.onRejected = typeof onRejected === "function" ? onRejected : null;
          this.resolve = resolve;
          this.reject = reject;
          this.psd = zone;
        }
        props(DexiePromise, {
          all: function() {
            var values2 = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
            return new DexiePromise(function(resolve, reject) {
              if (values2.length === 0)
                resolve([]);
              var remaining = values2.length;
              values2.forEach(function(a, i) {
                return DexiePromise.resolve(a).then(function(x) {
                  values2[i] = x;
                  if (!--remaining)
                    resolve(values2);
                }, reject);
              });
            });
          },
          resolve: function(value) {
            if (value instanceof DexiePromise)
              return value;
            if (value && typeof value.then === "function")
              return new DexiePromise(function(resolve, reject) {
                value.then(resolve, reject);
              });
            var rv = new DexiePromise(INTERNAL, true, value);
            return rv;
          },
          reject: PromiseReject,
          race: function() {
            var values2 = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
            return new DexiePromise(function(resolve, reject) {
              values2.map(function(value) {
                return DexiePromise.resolve(value).then(resolve, reject);
              });
            });
          },
          PSD: {
            get: function() {
              return PSD;
            },
            set: function(value) {
              return PSD = value;
            }
          },
          totalEchoes: { get: function() {
            return totalEchoes;
          } },
          newPSD: newScope,
          usePSD,
          scheduler: {
            get: function() {
              return asap;
            },
            set: function(value) {
              asap = value;
            }
          },
          rejectionMapper: {
            get: function() {
              return rejectionMapper;
            },
            set: function(value) {
              rejectionMapper = value;
            }
          },
          follow: function(fn, zoneProps) {
            return new DexiePromise(function(resolve, reject) {
              return newScope(function(resolve2, reject2) {
                var psd = PSD;
                psd.unhandleds = [];
                psd.onunhandled = reject2;
                psd.finalize = callBoth(function() {
                  var _this = this;
                  run_at_end_of_this_or_next_physical_tick(function() {
                    _this.unhandleds.length === 0 ? resolve2() : reject2(_this.unhandleds[0]);
                  });
                }, psd.finalize);
                fn();
              }, zoneProps, resolve, reject);
            });
          }
        });
        if (NativePromise) {
          if (NativePromise.allSettled)
            setProp(DexiePromise, "allSettled", function() {
              var possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
              return new DexiePromise(function(resolve) {
                if (possiblePromises.length === 0)
                  resolve([]);
                var remaining = possiblePromises.length;
                var results = new Array(remaining);
                possiblePromises.forEach(function(p, i) {
                  return DexiePromise.resolve(p).then(function(value) {
                    return results[i] = { status: "fulfilled", value };
                  }, function(reason) {
                    return results[i] = { status: "rejected", reason };
                  }).then(function() {
                    return --remaining || resolve(results);
                  });
                });
              });
            });
          if (NativePromise.any && typeof AggregateError !== "undefined")
            setProp(DexiePromise, "any", function() {
              var possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
              return new DexiePromise(function(resolve, reject) {
                if (possiblePromises.length === 0)
                  reject(new AggregateError([]));
                var remaining = possiblePromises.length;
                var failures = new Array(remaining);
                possiblePromises.forEach(function(p, i) {
                  return DexiePromise.resolve(p).then(function(value) {
                    return resolve(value);
                  }, function(failure) {
                    failures[i] = failure;
                    if (!--remaining)
                      reject(new AggregateError(failures));
                  });
                });
              });
            });
          if (NativePromise.withResolvers)
            DexiePromise.withResolvers = NativePromise.withResolvers;
        }
        function executePromiseTask(promise, fn) {
          try {
            fn(function(value) {
              if (promise._state !== null)
                return;
              if (value === promise)
                throw new TypeError("A promise cannot be resolved with itself.");
              var shouldExecuteTick = promise._lib && beginMicroTickScope();
              if (value && typeof value.then === "function") {
                executePromiseTask(promise, function(resolve, reject) {
                  value instanceof DexiePromise ? value._then(resolve, reject) : value.then(resolve, reject);
                });
              } else {
                promise._state = true;
                promise._value = value;
                propagateAllListeners(promise);
              }
              if (shouldExecuteTick)
                endMicroTickScope();
            }, handleRejection.bind(null, promise));
          } catch (ex) {
            handleRejection(promise, ex);
          }
        }
        function handleRejection(promise, reason) {
          rejectingErrors.push(reason);
          if (promise._state !== null)
            return;
          var shouldExecuteTick = promise._lib && beginMicroTickScope();
          reason = rejectionMapper(reason);
          promise._state = false;
          promise._value = reason;
          addPossiblyUnhandledError(promise);
          propagateAllListeners(promise);
          if (shouldExecuteTick)
            endMicroTickScope();
        }
        function propagateAllListeners(promise) {
          var listeners = promise._listeners;
          promise._listeners = [];
          for (var i = 0, len = listeners.length; i < len; ++i) {
            propagateToListener(promise, listeners[i]);
          }
          var psd = promise._PSD;
          --psd.ref || psd.finalize();
          if (numScheduledCalls === 0) {
            ++numScheduledCalls;
            asap(function() {
              if (--numScheduledCalls === 0)
                finalizePhysicalTick();
            }, []);
          }
        }
        function propagateToListener(promise, listener) {
          if (promise._state === null) {
            promise._listeners.push(listener);
            return;
          }
          var cb = promise._state ? listener.onFulfilled : listener.onRejected;
          if (cb === null) {
            return (promise._state ? listener.resolve : listener.reject)(promise._value);
          }
          ++listener.psd.ref;
          ++numScheduledCalls;
          asap(callListener, [cb, promise, listener]);
        }
        function callListener(cb, promise, listener) {
          try {
            var ret, value = promise._value;
            if (!promise._state && rejectingErrors.length)
              rejectingErrors = [];
            ret = debug && promise._consoleTask ? promise._consoleTask.run(function() {
              return cb(value);
            }) : cb(value);
            if (!promise._state && rejectingErrors.indexOf(value) === -1) {
              markErrorAsHandled(promise);
            }
            listener.resolve(ret);
          } catch (e) {
            listener.reject(e);
          } finally {
            if (--numScheduledCalls === 0)
              finalizePhysicalTick();
            --listener.psd.ref || listener.psd.finalize();
          }
        }
        function physicalTick() {
          usePSD(globalPSD, function() {
            beginMicroTickScope() && endMicroTickScope();
          });
        }
        function beginMicroTickScope() {
          var wasRootExec = isOutsideMicroTick;
          isOutsideMicroTick = false;
          needsNewPhysicalTick = false;
          return wasRootExec;
        }
        function endMicroTickScope() {
          var callbacks, i, l;
          do {
            while (microtickQueue.length > 0) {
              callbacks = microtickQueue;
              microtickQueue = [];
              l = callbacks.length;
              for (i = 0; i < l; ++i) {
                var item = callbacks[i];
                item[0].apply(null, item[1]);
              }
            }
          } while (microtickQueue.length > 0);
          isOutsideMicroTick = true;
          needsNewPhysicalTick = true;
        }
        function finalizePhysicalTick() {
          var unhandledErrs = unhandledErrors;
          unhandledErrors = [];
          unhandledErrs.forEach(function(p) {
            p._PSD.onunhandled.call(null, p._value, p);
          });
          var finalizers = tickFinalizers.slice(0);
          var i = finalizers.length;
          while (i)
            finalizers[--i]();
        }
        function run_at_end_of_this_or_next_physical_tick(fn) {
          function finalizer() {
            fn();
            tickFinalizers.splice(tickFinalizers.indexOf(finalizer), 1);
          }
          tickFinalizers.push(finalizer);
          ++numScheduledCalls;
          asap(function() {
            if (--numScheduledCalls === 0)
              finalizePhysicalTick();
          }, []);
        }
        function addPossiblyUnhandledError(promise) {
          if (!unhandledErrors.some(function(p) {
            return p._value === promise._value;
          }))
            unhandledErrors.push(promise);
        }
        function markErrorAsHandled(promise) {
          var i = unhandledErrors.length;
          while (i)
            if (unhandledErrors[--i]._value === promise._value) {
              unhandledErrors.splice(i, 1);
              return;
            }
        }
        function PromiseReject(reason) {
          return new DexiePromise(INTERNAL, false, reason);
        }
        function wrap(fn, errorCatcher) {
          var psd = PSD;
          return function() {
            var wasRootExec = beginMicroTickScope(), outerScope = PSD;
            try {
              switchToZone(psd, true);
              return fn.apply(this, arguments);
            } catch (e) {
              errorCatcher && errorCatcher(e);
            } finally {
              switchToZone(outerScope, false);
              if (wasRootExec)
                endMicroTickScope();
            }
          };
        }
        var task = { awaits: 0, echoes: 0, id: 0 };
        var taskCounter = 0;
        var zoneStack = [];
        var zoneEchoes = 0;
        var totalEchoes = 0;
        var zone_id_counter = 0;
        function newScope(fn, props2, a1, a2) {
          var parent = PSD, psd = Object.create(parent);
          psd.parent = parent;
          psd.ref = 0;
          psd.global = false;
          psd.id = ++zone_id_counter;
          globalPSD.env;
          psd.env = patchGlobalPromise ? {
            Promise: DexiePromise,
            PromiseProp: { value: DexiePromise, configurable: true, writable: true },
            all: DexiePromise.all,
            race: DexiePromise.race,
            allSettled: DexiePromise.allSettled,
            any: DexiePromise.any,
            resolve: DexiePromise.resolve,
            reject: DexiePromise.reject
          } : {};
          if (props2)
            extend(psd, props2);
          ++parent.ref;
          psd.finalize = function() {
            --this.parent.ref || this.parent.finalize();
          };
          var rv = usePSD(psd, fn, a1, a2);
          if (psd.ref === 0)
            psd.finalize();
          return rv;
        }
        function incrementExpectedAwaits() {
          if (!task.id)
            task.id = ++taskCounter;
          ++task.awaits;
          task.echoes += ZONE_ECHO_LIMIT;
          return task.id;
        }
        function decrementExpectedAwaits() {
          if (!task.awaits)
            return false;
          if (--task.awaits === 0)
            task.id = 0;
          task.echoes = task.awaits * ZONE_ECHO_LIMIT;
          return true;
        }
        if (("" + nativePromiseThen).indexOf("[native code]") === -1) {
          incrementExpectedAwaits = decrementExpectedAwaits = nop;
        }
        function onPossibleParallellAsync(possiblePromise) {
          if (task.echoes && possiblePromise && possiblePromise.constructor === NativePromise) {
            incrementExpectedAwaits();
            return possiblePromise.then(function(x) {
              decrementExpectedAwaits();
              return x;
            }, function(e) {
              decrementExpectedAwaits();
              return rejection(e);
            });
          }
          return possiblePromise;
        }
        function zoneEnterEcho(targetZone) {
          ++totalEchoes;
          if (!task.echoes || --task.echoes === 0) {
            task.echoes = task.awaits = task.id = 0;
          }
          zoneStack.push(PSD);
          switchToZone(targetZone, true);
        }
        function zoneLeaveEcho() {
          var zone = zoneStack[zoneStack.length - 1];
          zoneStack.pop();
          switchToZone(zone, false);
        }
        function switchToZone(targetZone, bEnteringZone) {
          var currentZone = PSD;
          if (bEnteringZone ? task.echoes && (!zoneEchoes++ || targetZone !== PSD) : zoneEchoes && (!--zoneEchoes || targetZone !== PSD)) {
            queueMicrotask(bEnteringZone ? zoneEnterEcho.bind(null, targetZone) : zoneLeaveEcho);
          }
          if (targetZone === PSD)
            return;
          PSD = targetZone;
          if (currentZone === globalPSD)
            globalPSD.env = snapShot();
          if (patchGlobalPromise) {
            var GlobalPromise = globalPSD.env.Promise;
            var targetEnv = targetZone.env;
            if (currentZone.global || targetZone.global) {
              Object.defineProperty(_global, "Promise", targetEnv.PromiseProp);
              GlobalPromise.all = targetEnv.all;
              GlobalPromise.race = targetEnv.race;
              GlobalPromise.resolve = targetEnv.resolve;
              GlobalPromise.reject = targetEnv.reject;
              if (targetEnv.allSettled)
                GlobalPromise.allSettled = targetEnv.allSettled;
              if (targetEnv.any)
                GlobalPromise.any = targetEnv.any;
            }
          }
        }
        function snapShot() {
          var GlobalPromise = _global.Promise;
          return patchGlobalPromise ? {
            Promise: GlobalPromise,
            PromiseProp: Object.getOwnPropertyDescriptor(_global, "Promise"),
            all: GlobalPromise.all,
            race: GlobalPromise.race,
            allSettled: GlobalPromise.allSettled,
            any: GlobalPromise.any,
            resolve: GlobalPromise.resolve,
            reject: GlobalPromise.reject
          } : {};
        }
        function usePSD(psd, fn, a1, a2, a3) {
          var outerScope = PSD;
          try {
            switchToZone(psd, true);
            return fn(a1, a2, a3);
          } finally {
            switchToZone(outerScope, false);
          }
        }
        function nativeAwaitCompatibleWrap(fn, zone, possibleAwait, cleanup) {
          return typeof fn !== "function" ? fn : function() {
            var outerZone = PSD;
            if (possibleAwait)
              incrementExpectedAwaits();
            switchToZone(zone, true);
            try {
              return fn.apply(this, arguments);
            } finally {
              switchToZone(outerZone, false);
              if (cleanup)
                queueMicrotask(decrementExpectedAwaits);
            }
          };
        }
        function execInGlobalContext(cb) {
          if (Promise === NativePromise && task.echoes === 0) {
            if (zoneEchoes === 0) {
              cb();
            } else {
              enqueueNativeMicroTask(cb);
            }
          } else {
            setTimeout(cb, 0);
          }
        }
        var rejection = DexiePromise.reject;
        function tempTransaction(db, mode, storeNames, fn) {
          if (!db.idbdb || !db._state.openComplete && (!PSD.letThrough && !db._vip)) {
            if (db._state.openComplete) {
              return rejection(new exceptions.DatabaseClosed(db._state.dbOpenError));
            }
            if (!db._state.isBeingOpened) {
              if (!db._state.autoOpen)
                return rejection(new exceptions.DatabaseClosed());
              db.open().catch(nop);
            }
            return db._state.dbReadyPromise.then(function() {
              return tempTransaction(db, mode, storeNames, fn);
            });
          } else {
            var trans = db._createTransaction(mode, storeNames, db._dbSchema);
            try {
              trans.create();
              db._state.PR1398_maxLoop = 3;
            } catch (ex) {
              if (ex.name === errnames.InvalidState && db.isOpen() && --db._state.PR1398_maxLoop > 0) {
                console.warn("Dexie: Need to reopen db");
                db.close({ disableAutoOpen: false });
                return db.open().then(function() {
                  return tempTransaction(db, mode, storeNames, fn);
                });
              }
              return rejection(ex);
            }
            return trans._promise(mode, function(resolve, reject) {
              return newScope(function() {
                PSD.trans = trans;
                return fn(resolve, reject, trans);
              });
            }).then(function(result) {
              if (mode === "readwrite")
                try {
                  trans.idbtrans.commit();
                } catch (_a2) {
                }
              return mode === "readonly" ? result : trans._completion.then(function() {
                return result;
              });
            });
          }
        }
        var DEXIE_VERSION = "4.2.1";
        var maxString = String.fromCharCode(65535);
        var minKey = -Infinity;
        var INVALID_KEY_ARGUMENT = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.";
        var STRING_EXPECTED = "String expected.";
        var connections = [];
        var DBNAMES_DB = "__dbnames";
        var READONLY = "readonly";
        var READWRITE = "readwrite";
        function combine(filter1, filter2) {
          return filter1 ? filter2 ? function() {
            return filter1.apply(this, arguments) && filter2.apply(this, arguments);
          } : filter1 : filter2;
        }
        var AnyRange = {
          type: 3,
          lower: -Infinity,
          lowerOpen: false,
          upper: [[]],
          upperOpen: false
        };
        function workaroundForUndefinedPrimKey(keyPath) {
          return typeof keyPath === "string" && !/\./.test(keyPath) ? function(obj) {
            if (obj[keyPath] === void 0 && keyPath in obj) {
              obj = deepClone(obj);
              delete obj[keyPath];
            }
            return obj;
          } : function(obj) {
            return obj;
          };
        }
        function Entity2() {
          throw exceptions.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
        }
        function cmp2(a, b) {
          try {
            var ta = type(a);
            var tb = type(b);
            if (ta !== tb) {
              if (ta === "Array")
                return 1;
              if (tb === "Array")
                return -1;
              if (ta === "binary")
                return 1;
              if (tb === "binary")
                return -1;
              if (ta === "string")
                return 1;
              if (tb === "string")
                return -1;
              if (ta === "Date")
                return 1;
              if (tb !== "Date")
                return NaN;
              return -1;
            }
            switch (ta) {
              case "number":
              case "Date":
              case "string":
                return a > b ? 1 : a < b ? -1 : 0;
              case "binary": {
                return compareUint8Arrays(getUint8Array(a), getUint8Array(b));
              }
              case "Array":
                return compareArrays(a, b);
            }
          } catch (_a2) {
          }
          return NaN;
        }
        function compareArrays(a, b) {
          var al = a.length;
          var bl = b.length;
          var l = al < bl ? al : bl;
          for (var i = 0; i < l; ++i) {
            var res = cmp2(a[i], b[i]);
            if (res !== 0)
              return res;
          }
          return al === bl ? 0 : al < bl ? -1 : 1;
        }
        function compareUint8Arrays(a, b) {
          var al = a.length;
          var bl = b.length;
          var l = al < bl ? al : bl;
          for (var i = 0; i < l; ++i) {
            if (a[i] !== b[i])
              return a[i] < b[i] ? -1 : 1;
          }
          return al === bl ? 0 : al < bl ? -1 : 1;
        }
        function type(x) {
          var t = typeof x;
          if (t !== "object")
            return t;
          if (ArrayBuffer.isView(x))
            return "binary";
          var tsTag = toStringTag(x);
          return tsTag === "ArrayBuffer" ? "binary" : tsTag;
        }
        function getUint8Array(a) {
          if (a instanceof Uint8Array)
            return a;
          if (ArrayBuffer.isView(a))
            return new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
          return new Uint8Array(a);
        }
        function builtInDeletionTrigger(table, keys3, res) {
          var yProps = table.schema.yProps;
          if (!yProps)
            return res;
          if (keys3 && res.numFailures > 0)
            keys3 = keys3.filter(function(_, i) {
              return !res.failures[i];
            });
          return Promise.all(yProps.map(function(_a2) {
            var updatesTable = _a2.updatesTable;
            return keys3 ? table.db.table(updatesTable).where("k").anyOf(keys3).delete() : table.db.table(updatesTable).clear();
          })).then(function() {
            return res;
          });
        }
        var PropModification2 = (function() {
          function PropModification3(spec) {
            this["@@propmod"] = spec;
          }
          PropModification3.prototype.execute = function(value) {
            var _a2;
            var spec = this["@@propmod"];
            if (spec.add !== void 0) {
              var term = spec.add;
              if (isArray(term)) {
                return __spreadArray(__spreadArray([], isArray(value) ? value : [], true), term, true).sort();
              }
              if (typeof term === "number")
                return (Number(value) || 0) + term;
              if (typeof term === "bigint") {
                try {
                  return BigInt(value) + term;
                } catch (_b) {
                  return BigInt(0) + term;
                }
              }
              throw new TypeError("Invalid term ".concat(term));
            }
            if (spec.remove !== void 0) {
              var subtrahend_1 = spec.remove;
              if (isArray(subtrahend_1)) {
                return isArray(value) ? value.filter(function(item) {
                  return !subtrahend_1.includes(item);
                }).sort() : [];
              }
              if (typeof subtrahend_1 === "number")
                return Number(value) - subtrahend_1;
              if (typeof subtrahend_1 === "bigint") {
                try {
                  return BigInt(value) - subtrahend_1;
                } catch (_c) {
                  return BigInt(0) - subtrahend_1;
                }
              }
              throw new TypeError("Invalid subtrahend ".concat(subtrahend_1));
            }
            var prefixToReplace = (_a2 = spec.replacePrefix) === null || _a2 === void 0 ? void 0 : _a2[0];
            if (prefixToReplace && typeof value === "string" && value.startsWith(prefixToReplace)) {
              return spec.replacePrefix[1] + value.substring(prefixToReplace.length);
            }
            return value;
          };
          return PropModification3;
        })();
        function applyUpdateSpec(obj, changes) {
          var keyPaths = keys2(changes);
          var numKeys = keyPaths.length;
          var anythingModified = false;
          for (var i = 0; i < numKeys; ++i) {
            var keyPath = keyPaths[i];
            var value = changes[keyPath];
            var origValue = getByKeyPath(obj, keyPath);
            if (value instanceof PropModification2) {
              setByKeyPath(obj, keyPath, value.execute(origValue));
              anythingModified = true;
            } else if (origValue !== value) {
              setByKeyPath(obj, keyPath, value);
              anythingModified = true;
            }
          }
          return anythingModified;
        }
        var Table = (function() {
          function Table2() {
          }
          Table2.prototype._trans = function(mode, fn, writeLocked) {
            var trans = this._tx || PSD.trans;
            var tableName = this.name;
            var task2 = debug && typeof console !== "undefined" && console.createTask && console.createTask("Dexie: ".concat(mode === "readonly" ? "read" : "write", " ").concat(this.name));
            function checkTableInTransaction(resolve, reject, trans2) {
              if (!trans2.schema[tableName])
                throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
              return fn(trans2.idbtrans, trans2);
            }
            var wasRootExec = beginMicroTickScope();
            try {
              var p = trans && trans.db._novip === this.db._novip ? trans === PSD.trans ? trans._promise(mode, checkTableInTransaction, writeLocked) : newScope(function() {
                return trans._promise(mode, checkTableInTransaction, writeLocked);
              }, { trans, transless: PSD.transless || PSD }) : tempTransaction(this.db, mode, [this.name], checkTableInTransaction);
              if (task2) {
                p._consoleTask = task2;
                p = p.catch(function(err) {
                  console.trace(err);
                  return rejection(err);
                });
              }
              return p;
            } finally {
              if (wasRootExec)
                endMicroTickScope();
            }
          };
          Table2.prototype.get = function(keyOrCrit, cb) {
            var _this = this;
            if (keyOrCrit && keyOrCrit.constructor === Object)
              return this.where(keyOrCrit).first(cb);
            if (keyOrCrit == null)
              return rejection(new exceptions.Type("Invalid argument to Table.get()"));
            return this._trans("readonly", function(trans) {
              return _this.core.get({ trans, key: keyOrCrit }).then(function(res) {
                return _this.hook.reading.fire(res);
              });
            }).then(cb);
          };
          Table2.prototype.where = function(indexOrCrit) {
            if (typeof indexOrCrit === "string")
              return new this.db.WhereClause(this, indexOrCrit);
            if (isArray(indexOrCrit))
              return new this.db.WhereClause(this, "[".concat(indexOrCrit.join("+"), "]"));
            var keyPaths = keys2(indexOrCrit);
            if (keyPaths.length === 1)
              return this.where(keyPaths[0]).equals(indexOrCrit[keyPaths[0]]);
            var compoundIndex = this.schema.indexes.concat(this.schema.primKey).filter(function(ix) {
              if (ix.compound && keyPaths.every(function(keyPath) {
                return ix.keyPath.indexOf(keyPath) >= 0;
              })) {
                for (var i = 0; i < keyPaths.length; ++i) {
                  if (keyPaths.indexOf(ix.keyPath[i]) === -1)
                    return false;
                }
                return true;
              }
              return false;
            }).sort(function(a, b) {
              return a.keyPath.length - b.keyPath.length;
            })[0];
            if (compoundIndex && this.db._maxKey !== maxString) {
              var keyPathsInValidOrder = compoundIndex.keyPath.slice(0, keyPaths.length);
              return this.where(keyPathsInValidOrder).equals(keyPathsInValidOrder.map(function(kp) {
                return indexOrCrit[kp];
              }));
            }
            if (!compoundIndex && debug)
              console.warn("The query ".concat(JSON.stringify(indexOrCrit), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(keyPaths.join("+"), "]"));
            var idxByName = this.schema.idxByName;
            function equals(a, b) {
              return cmp2(a, b) === 0;
            }
            var _a2 = keyPaths.reduce(function(_a3, keyPath) {
              var prevIndex = _a3[0], prevFilterFn = _a3[1];
              var index = idxByName[keyPath];
              var value = indexOrCrit[keyPath];
              return [
                prevIndex || index,
                prevIndex || !index ? combine(prevFilterFn, index && index.multi ? function(x) {
                  var prop = getByKeyPath(x, keyPath);
                  return isArray(prop) && prop.some(function(item) {
                    return equals(value, item);
                  });
                } : function(x) {
                  return equals(value, getByKeyPath(x, keyPath));
                }) : prevFilterFn
              ];
            }, [null, null]), idx = _a2[0], filterFunction = _a2[1];
            return idx ? this.where(idx.name).equals(indexOrCrit[idx.keyPath]).filter(filterFunction) : compoundIndex ? this.filter(filterFunction) : this.where(keyPaths).equals("");
          };
          Table2.prototype.filter = function(filterFunction) {
            return this.toCollection().and(filterFunction);
          };
          Table2.prototype.count = function(thenShortcut) {
            return this.toCollection().count(thenShortcut);
          };
          Table2.prototype.offset = function(offset) {
            return this.toCollection().offset(offset);
          };
          Table2.prototype.limit = function(numRows) {
            return this.toCollection().limit(numRows);
          };
          Table2.prototype.each = function(callback) {
            return this.toCollection().each(callback);
          };
          Table2.prototype.toArray = function(thenShortcut) {
            return this.toCollection().toArray(thenShortcut);
          };
          Table2.prototype.toCollection = function() {
            return new this.db.Collection(new this.db.WhereClause(this));
          };
          Table2.prototype.orderBy = function(index) {
            return new this.db.Collection(new this.db.WhereClause(this, isArray(index) ? "[".concat(index.join("+"), "]") : index));
          };
          Table2.prototype.reverse = function() {
            return this.toCollection().reverse();
          };
          Table2.prototype.mapToClass = function(constructor) {
            var _a2 = this, db = _a2.db, tableName = _a2.name;
            this.schema.mappedClass = constructor;
            if (constructor.prototype instanceof Entity2) {
              constructor = (function(_super) {
                __extends(class_1, _super);
                function class_1() {
                  return _super !== null && _super.apply(this, arguments) || this;
                }
                Object.defineProperty(class_1.prototype, "db", {
                  get: function() {
                    return db;
                  },
                  enumerable: false,
                  configurable: true
                });
                class_1.prototype.table = function() {
                  return tableName;
                };
                return class_1;
              })(constructor);
            }
            var inheritedProps = /* @__PURE__ */ new Set();
            for (var proto = constructor.prototype; proto; proto = getProto(proto)) {
              Object.getOwnPropertyNames(proto).forEach(function(propName) {
                return inheritedProps.add(propName);
              });
            }
            var readHook = function(obj) {
              if (!obj)
                return obj;
              var res = Object.create(constructor.prototype);
              for (var m in obj)
                if (!inheritedProps.has(m))
                  try {
                    res[m] = obj[m];
                  } catch (_) {
                  }
              return res;
            };
            if (this.schema.readHook) {
              this.hook.reading.unsubscribe(this.schema.readHook);
            }
            this.schema.readHook = readHook;
            this.hook("reading", readHook);
            return constructor;
          };
          Table2.prototype.defineClass = function() {
            function Class(content) {
              extend(this, content);
            }
            return this.mapToClass(Class);
          };
          Table2.prototype.add = function(obj, key) {
            var _this = this;
            var _a2 = this.schema.primKey, auto = _a2.auto, keyPath = _a2.keyPath;
            var objToAdd = obj;
            if (keyPath && auto) {
              objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
            }
            return this._trans("readwrite", function(trans) {
              return _this.core.mutate({ trans, type: "add", keys: key != null ? [key] : null, values: [objToAdd] });
            }).then(function(res) {
              return res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult;
            }).then(function(lastResult) {
              if (keyPath) {
                try {
                  setByKeyPath(obj, keyPath, lastResult);
                } catch (_) {
                }
              }
              return lastResult;
            });
          };
          Table2.prototype.upsert = function(key, modifications) {
            var _this = this;
            var keyPath = this.schema.primKey.keyPath;
            return this._trans("readwrite", function(trans) {
              return _this.core.get({ trans, key }).then(function(existing) {
                var obj = existing !== null && existing !== void 0 ? existing : {};
                applyUpdateSpec(obj, modifications);
                if (keyPath)
                  setByKeyPath(obj, keyPath, key);
                return _this.core.mutate({
                  trans,
                  type: "put",
                  values: [obj],
                  keys: [key],
                  upsert: true,
                  updates: { keys: [key], changeSpecs: [modifications] }
                }).then(function(res) {
                  return res.numFailures ? DexiePromise.reject(res.failures[0]) : !!existing;
                });
              });
            });
          };
          Table2.prototype.update = function(keyOrObject, modifications) {
            if (typeof keyOrObject === "object" && !isArray(keyOrObject)) {
              var key = getByKeyPath(keyOrObject, this.schema.primKey.keyPath);
              if (key === void 0)
                return rejection(new exceptions.InvalidArgument("Given object does not contain its primary key"));
              return this.where(":id").equals(key).modify(modifications);
            } else {
              return this.where(":id").equals(keyOrObject).modify(modifications);
            }
          };
          Table2.prototype.put = function(obj, key) {
            var _this = this;
            var _a2 = this.schema.primKey, auto = _a2.auto, keyPath = _a2.keyPath;
            var objToAdd = obj;
            if (keyPath && auto) {
              objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
            }
            return this._trans("readwrite", function(trans) {
              return _this.core.mutate({ trans, type: "put", values: [objToAdd], keys: key != null ? [key] : null });
            }).then(function(res) {
              return res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult;
            }).then(function(lastResult) {
              if (keyPath) {
                try {
                  setByKeyPath(obj, keyPath, lastResult);
                } catch (_) {
                }
              }
              return lastResult;
            });
          };
          Table2.prototype.delete = function(key) {
            var _this = this;
            return this._trans("readwrite", function(trans) {
              return _this.core.mutate({ trans, type: "delete", keys: [key] }).then(function(res) {
                return builtInDeletionTrigger(_this, [key], res);
              }).then(function(res) {
                return res.numFailures ? DexiePromise.reject(res.failures[0]) : void 0;
              });
            });
          };
          Table2.prototype.clear = function() {
            var _this = this;
            return this._trans("readwrite", function(trans) {
              return _this.core.mutate({ trans, type: "deleteRange", range: AnyRange }).then(function(res) {
                return builtInDeletionTrigger(_this, null, res);
              });
            }).then(function(res) {
              return res.numFailures ? DexiePromise.reject(res.failures[0]) : void 0;
            });
          };
          Table2.prototype.bulkGet = function(keys3) {
            var _this = this;
            return this._trans("readonly", function(trans) {
              return _this.core.getMany({
                keys: keys3,
                trans
              }).then(function(result) {
                return result.map(function(res) {
                  return _this.hook.reading.fire(res);
                });
              });
            });
          };
          Table2.prototype.bulkAdd = function(objects, keysOrOptions, options) {
            var _this = this;
            var keys3 = Array.isArray(keysOrOptions) ? keysOrOptions : void 0;
            options = options || (keys3 ? void 0 : keysOrOptions);
            var wantResults = options ? options.allKeys : void 0;
            return this._trans("readwrite", function(trans) {
              var _a2 = _this.schema.primKey, auto = _a2.auto, keyPath = _a2.keyPath;
              if (keyPath && keys3)
                throw new exceptions.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
              if (keys3 && keys3.length !== objects.length)
                throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
              var numObjects = objects.length;
              var objectsToAdd = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
              return _this.core.mutate({ trans, type: "add", keys: keys3, values: objectsToAdd, wantResults }).then(function(_a3) {
                var numFailures = _a3.numFailures, results = _a3.results, lastResult = _a3.lastResult, failures = _a3.failures;
                var result = wantResults ? results : lastResult;
                if (numFailures === 0)
                  return result;
                throw new BulkError("".concat(_this.name, ".bulkAdd(): ").concat(numFailures, " of ").concat(numObjects, " operations failed"), failures);
              });
            });
          };
          Table2.prototype.bulkPut = function(objects, keysOrOptions, options) {
            var _this = this;
            var keys3 = Array.isArray(keysOrOptions) ? keysOrOptions : void 0;
            options = options || (keys3 ? void 0 : keysOrOptions);
            var wantResults = options ? options.allKeys : void 0;
            return this._trans("readwrite", function(trans) {
              var _a2 = _this.schema.primKey, auto = _a2.auto, keyPath = _a2.keyPath;
              if (keyPath && keys3)
                throw new exceptions.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
              if (keys3 && keys3.length !== objects.length)
                throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
              var numObjects = objects.length;
              var objectsToPut = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
              return _this.core.mutate({ trans, type: "put", keys: keys3, values: objectsToPut, wantResults }).then(function(_a3) {
                var numFailures = _a3.numFailures, results = _a3.results, lastResult = _a3.lastResult, failures = _a3.failures;
                var result = wantResults ? results : lastResult;
                if (numFailures === 0)
                  return result;
                throw new BulkError("".concat(_this.name, ".bulkPut(): ").concat(numFailures, " of ").concat(numObjects, " operations failed"), failures);
              });
            });
          };
          Table2.prototype.bulkUpdate = function(keysAndChanges) {
            var _this = this;
            var coreTable = this.core;
            var keys3 = keysAndChanges.map(function(entry) {
              return entry.key;
            });
            var changeSpecs = keysAndChanges.map(function(entry) {
              return entry.changes;
            });
            var offsetMap = [];
            return this._trans("readwrite", function(trans) {
              return coreTable.getMany({ trans, keys: keys3, cache: "clone" }).then(function(objs) {
                var resultKeys = [];
                var resultObjs = [];
                keysAndChanges.forEach(function(_a2, idx) {
                  var key = _a2.key, changes = _a2.changes;
                  var obj = objs[idx];
                  if (obj) {
                    for (var _i = 0, _b = Object.keys(changes); _i < _b.length; _i++) {
                      var keyPath = _b[_i];
                      var value = changes[keyPath];
                      if (keyPath === _this.schema.primKey.keyPath) {
                        if (cmp2(value, key) !== 0) {
                          throw new exceptions.Constraint("Cannot update primary key in bulkUpdate()");
                        }
                      } else {
                        setByKeyPath(obj, keyPath, value);
                      }
                    }
                    offsetMap.push(idx);
                    resultKeys.push(key);
                    resultObjs.push(obj);
                  }
                });
                var numEntries = resultKeys.length;
                return coreTable.mutate({
                  trans,
                  type: "put",
                  keys: resultKeys,
                  values: resultObjs,
                  updates: {
                    keys: keys3,
                    changeSpecs
                  }
                }).then(function(_a2) {
                  var numFailures = _a2.numFailures, failures = _a2.failures;
                  if (numFailures === 0)
                    return numEntries;
                  for (var _i = 0, _b = Object.keys(failures); _i < _b.length; _i++) {
                    var offset = _b[_i];
                    var mappedOffset = offsetMap[Number(offset)];
                    if (mappedOffset != null) {
                      var failure = failures[offset];
                      delete failures[offset];
                      failures[mappedOffset] = failure;
                    }
                  }
                  throw new BulkError("".concat(_this.name, ".bulkUpdate(): ").concat(numFailures, " of ").concat(numEntries, " operations failed"), failures);
                });
              });
            });
          };
          Table2.prototype.bulkDelete = function(keys3) {
            var _this = this;
            var numKeys = keys3.length;
            return this._trans("readwrite", function(trans) {
              return _this.core.mutate({ trans, type: "delete", keys: keys3 }).then(function(res) {
                return builtInDeletionTrigger(_this, keys3, res);
              });
            }).then(function(_a2) {
              var numFailures = _a2.numFailures, lastResult = _a2.lastResult, failures = _a2.failures;
              if (numFailures === 0)
                return lastResult;
              throw new BulkError("".concat(_this.name, ".bulkDelete(): ").concat(numFailures, " of ").concat(numKeys, " operations failed"), failures);
            });
          };
          return Table2;
        })();
        function Events(ctx) {
          var evs = {};
          var rv = function(eventName, subscriber) {
            if (subscriber) {
              var i2 = arguments.length, args = new Array(i2 - 1);
              while (--i2)
                args[i2 - 1] = arguments[i2];
              evs[eventName].subscribe.apply(null, args);
              return ctx;
            } else if (typeof eventName === "string") {
              return evs[eventName];
            }
          };
          rv.addEventType = add3;
          for (var i = 1, l = arguments.length; i < l; ++i) {
            add3(arguments[i]);
          }
          return rv;
          function add3(eventName, chainFunction, defaultFunction) {
            if (typeof eventName === "object")
              return addConfiguredEvents(eventName);
            if (!chainFunction)
              chainFunction = reverseStoppableEventChain;
            if (!defaultFunction)
              defaultFunction = nop;
            var context = {
              subscribers: [],
              fire: defaultFunction,
              subscribe: function(cb) {
                if (context.subscribers.indexOf(cb) === -1) {
                  context.subscribers.push(cb);
                  context.fire = chainFunction(context.fire, cb);
                }
              },
              unsubscribe: function(cb) {
                context.subscribers = context.subscribers.filter(function(fn) {
                  return fn !== cb;
                });
                context.fire = context.subscribers.reduce(chainFunction, defaultFunction);
              }
            };
            evs[eventName] = rv[eventName] = context;
            return context;
          }
          function addConfiguredEvents(cfg) {
            keys2(cfg).forEach(function(eventName) {
              var args = cfg[eventName];
              if (isArray(args)) {
                add3(eventName, cfg[eventName][0], cfg[eventName][1]);
              } else if (args === "asap") {
                var context = add3(eventName, mirror, function fire() {
                  var i2 = arguments.length, args2 = new Array(i2);
                  while (i2--)
                    args2[i2] = arguments[i2];
                  context.subscribers.forEach(function(fn) {
                    asap$1(function fireEvent() {
                      fn.apply(null, args2);
                    });
                  });
                });
              } else
                throw new exceptions.InvalidArgument("Invalid event config");
            });
          }
        }
        function makeClassConstructor(prototype, constructor) {
          derive(constructor).from({ prototype });
          return constructor;
        }
        function createTableConstructor(db) {
          return makeClassConstructor(Table.prototype, function Table2(name, tableSchema, trans) {
            this.db = db;
            this._tx = trans;
            this.name = name;
            this.schema = tableSchema;
            this.hook = db._allTables[name] ? db._allTables[name].hook : Events(null, {
              "creating": [hookCreatingChain, nop],
              "reading": [pureFunctionChain, mirror],
              "updating": [hookUpdatingChain, nop],
              "deleting": [hookDeletingChain, nop]
            });
          });
        }
        function isPlainKeyRange(ctx, ignoreLimitFilter) {
          return !(ctx.filter || ctx.algorithm || ctx.or) && (ignoreLimitFilter ? ctx.justLimit : !ctx.replayFilter);
        }
        function addFilter(ctx, fn) {
          ctx.filter = combine(ctx.filter, fn);
        }
        function addReplayFilter(ctx, factory, isLimitFilter) {
          var curr = ctx.replayFilter;
          ctx.replayFilter = curr ? function() {
            return combine(curr(), factory());
          } : factory;
          ctx.justLimit = isLimitFilter && !curr;
        }
        function addMatchFilter(ctx, fn) {
          ctx.isMatch = combine(ctx.isMatch, fn);
        }
        function getIndexOrStore(ctx, coreSchema) {
          if (ctx.isPrimKey)
            return coreSchema.primaryKey;
          var index = coreSchema.getIndexByKeyPath(ctx.index);
          if (!index)
            throw new exceptions.Schema("KeyPath " + ctx.index + " on object store " + coreSchema.name + " is not indexed");
          return index;
        }
        function openCursor(ctx, coreTable, trans) {
          var index = getIndexOrStore(ctx, coreTable.schema);
          return coreTable.openCursor({
            trans,
            values: !ctx.keysOnly,
            reverse: ctx.dir === "prev",
            unique: !!ctx.unique,
            query: {
              index,
              range: ctx.range
            }
          });
        }
        function iter(ctx, fn, coreTrans, coreTable) {
          var filter = ctx.replayFilter ? combine(ctx.filter, ctx.replayFilter()) : ctx.filter;
          if (!ctx.or) {
            return iterate(openCursor(ctx, coreTable, coreTrans), combine(ctx.algorithm, filter), fn, !ctx.keysOnly && ctx.valueMapper);
          } else {
            var set_1 = {};
            var union = function(item, cursor, advance) {
              if (!filter || filter(cursor, advance, function(result) {
                return cursor.stop(result);
              }, function(err) {
                return cursor.fail(err);
              })) {
                var primaryKey = cursor.primaryKey;
                var key = "" + primaryKey;
                if (key === "[object ArrayBuffer]")
                  key = "" + new Uint8Array(primaryKey);
                if (!hasOwn(set_1, key)) {
                  set_1[key] = true;
                  fn(item, cursor, advance);
                }
              }
            };
            return Promise.all([
              ctx.or._iterate(union, coreTrans),
              iterate(openCursor(ctx, coreTable, coreTrans), ctx.algorithm, union, !ctx.keysOnly && ctx.valueMapper)
            ]);
          }
        }
        function iterate(cursorPromise, filter, fn, valueMapper) {
          var mappedFn = valueMapper ? function(x, c, a) {
            return fn(valueMapper(x), c, a);
          } : fn;
          var wrappedFn = wrap(mappedFn);
          return cursorPromise.then(function(cursor) {
            if (cursor) {
              return cursor.start(function() {
                var c = function() {
                  return cursor.continue();
                };
                if (!filter || filter(cursor, function(advancer) {
                  return c = advancer;
                }, function(val) {
                  cursor.stop(val);
                  c = nop;
                }, function(e) {
                  cursor.fail(e);
                  c = nop;
                }))
                  wrappedFn(cursor.value, cursor, function(advancer) {
                    return c = advancer;
                  });
                c();
              });
            }
          });
        }
        var Collection = (function() {
          function Collection2() {
          }
          Collection2.prototype._read = function(fn, cb) {
            var ctx = this._ctx;
            return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans("readonly", fn).then(cb);
          };
          Collection2.prototype._write = function(fn) {
            var ctx = this._ctx;
            return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans("readwrite", fn, "locked");
          };
          Collection2.prototype._addAlgorithm = function(fn) {
            var ctx = this._ctx;
            ctx.algorithm = combine(ctx.algorithm, fn);
          };
          Collection2.prototype._iterate = function(fn, coreTrans) {
            return iter(this._ctx, fn, coreTrans, this._ctx.table.core);
          };
          Collection2.prototype.clone = function(props2) {
            var rv = Object.create(this.constructor.prototype), ctx = Object.create(this._ctx);
            if (props2)
              extend(ctx, props2);
            rv._ctx = ctx;
            return rv;
          };
          Collection2.prototype.raw = function() {
            this._ctx.valueMapper = null;
            return this;
          };
          Collection2.prototype.each = function(fn) {
            var ctx = this._ctx;
            return this._read(function(trans) {
              return iter(ctx, fn, trans, ctx.table.core);
            });
          };
          Collection2.prototype.count = function(cb) {
            var _this = this;
            return this._read(function(trans) {
              var ctx = _this._ctx;
              var coreTable = ctx.table.core;
              if (isPlainKeyRange(ctx, true)) {
                return coreTable.count({
                  trans,
                  query: {
                    index: getIndexOrStore(ctx, coreTable.schema),
                    range: ctx.range
                  }
                }).then(function(count2) {
                  return Math.min(count2, ctx.limit);
                });
              } else {
                var count = 0;
                return iter(ctx, function() {
                  ++count;
                  return false;
                }, trans, coreTable).then(function() {
                  return count;
                });
              }
            }).then(cb);
          };
          Collection2.prototype.sortBy = function(keyPath, cb) {
            var parts = keyPath.split(".").reverse(), lastPart = parts[0], lastIndex = parts.length - 1;
            function getval(obj, i) {
              if (i)
                return getval(obj[parts[i]], i - 1);
              return obj[lastPart];
            }
            var order = this._ctx.dir === "next" ? 1 : -1;
            function sorter(a, b) {
              var aVal = getval(a, lastIndex), bVal = getval(b, lastIndex);
              return cmp2(aVal, bVal) * order;
            }
            return this.toArray(function(a) {
              return a.sort(sorter);
            }).then(cb);
          };
          Collection2.prototype.toArray = function(cb) {
            var _this = this;
            return this._read(function(trans) {
              var ctx = _this._ctx;
              if (ctx.dir === "next" && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
                var valueMapper_1 = ctx.valueMapper;
                var index = getIndexOrStore(ctx, ctx.table.core.schema);
                return ctx.table.core.query({
                  trans,
                  limit: ctx.limit,
                  values: true,
                  query: {
                    index,
                    range: ctx.range
                  }
                }).then(function(_a2) {
                  var result = _a2.result;
                  return valueMapper_1 ? result.map(valueMapper_1) : result;
                });
              } else {
                var a_1 = [];
                return iter(ctx, function(item) {
                  return a_1.push(item);
                }, trans, ctx.table.core).then(function() {
                  return a_1;
                });
              }
            }, cb);
          };
          Collection2.prototype.offset = function(offset) {
            var ctx = this._ctx;
            if (offset <= 0)
              return this;
            ctx.offset += offset;
            if (isPlainKeyRange(ctx)) {
              addReplayFilter(ctx, function() {
                var offsetLeft = offset;
                return function(cursor, advance) {
                  if (offsetLeft === 0)
                    return true;
                  if (offsetLeft === 1) {
                    --offsetLeft;
                    return false;
                  }
                  advance(function() {
                    cursor.advance(offsetLeft);
                    offsetLeft = 0;
                  });
                  return false;
                };
              });
            } else {
              addReplayFilter(ctx, function() {
                var offsetLeft = offset;
                return function() {
                  return --offsetLeft < 0;
                };
              });
            }
            return this;
          };
          Collection2.prototype.limit = function(numRows) {
            this._ctx.limit = Math.min(this._ctx.limit, numRows);
            addReplayFilter(this._ctx, function() {
              var rowsLeft = numRows;
              return function(cursor, advance, resolve) {
                if (--rowsLeft <= 0)
                  advance(resolve);
                return rowsLeft >= 0;
              };
            }, true);
            return this;
          };
          Collection2.prototype.until = function(filterFunction, bIncludeStopEntry) {
            addFilter(this._ctx, function(cursor, advance, resolve) {
              if (filterFunction(cursor.value)) {
                advance(resolve);
                return bIncludeStopEntry;
              } else {
                return true;
              }
            });
            return this;
          };
          Collection2.prototype.first = function(cb) {
            return this.limit(1).toArray(function(a) {
              return a[0];
            }).then(cb);
          };
          Collection2.prototype.last = function(cb) {
            return this.reverse().first(cb);
          };
          Collection2.prototype.filter = function(filterFunction) {
            addFilter(this._ctx, function(cursor) {
              return filterFunction(cursor.value);
            });
            addMatchFilter(this._ctx, filterFunction);
            return this;
          };
          Collection2.prototype.and = function(filter) {
            return this.filter(filter);
          };
          Collection2.prototype.or = function(indexName) {
            return new this.db.WhereClause(this._ctx.table, indexName, this);
          };
          Collection2.prototype.reverse = function() {
            this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev";
            if (this._ondirectionchange)
              this._ondirectionchange(this._ctx.dir);
            return this;
          };
          Collection2.prototype.desc = function() {
            return this.reverse();
          };
          Collection2.prototype.eachKey = function(cb) {
            var ctx = this._ctx;
            ctx.keysOnly = !ctx.isMatch;
            return this.each(function(val, cursor) {
              cb(cursor.key, cursor);
            });
          };
          Collection2.prototype.eachUniqueKey = function(cb) {
            this._ctx.unique = "unique";
            return this.eachKey(cb);
          };
          Collection2.prototype.eachPrimaryKey = function(cb) {
            var ctx = this._ctx;
            ctx.keysOnly = !ctx.isMatch;
            return this.each(function(val, cursor) {
              cb(cursor.primaryKey, cursor);
            });
          };
          Collection2.prototype.keys = function(cb) {
            var ctx = this._ctx;
            ctx.keysOnly = !ctx.isMatch;
            var a = [];
            return this.each(function(item, cursor) {
              a.push(cursor.key);
            }).then(function() {
              return a;
            }).then(cb);
          };
          Collection2.prototype.primaryKeys = function(cb) {
            var ctx = this._ctx;
            if (ctx.dir === "next" && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
              return this._read(function(trans) {
                var index = getIndexOrStore(ctx, ctx.table.core.schema);
                return ctx.table.core.query({
                  trans,
                  values: false,
                  limit: ctx.limit,
                  query: {
                    index,
                    range: ctx.range
                  }
                });
              }).then(function(_a2) {
                var result = _a2.result;
                return result;
              }).then(cb);
            }
            ctx.keysOnly = !ctx.isMatch;
            var a = [];
            return this.each(function(item, cursor) {
              a.push(cursor.primaryKey);
            }).then(function() {
              return a;
            }).then(cb);
          };
          Collection2.prototype.uniqueKeys = function(cb) {
            this._ctx.unique = "unique";
            return this.keys(cb);
          };
          Collection2.prototype.firstKey = function(cb) {
            return this.limit(1).keys(function(a) {
              return a[0];
            }).then(cb);
          };
          Collection2.prototype.lastKey = function(cb) {
            return this.reverse().firstKey(cb);
          };
          Collection2.prototype.distinct = function() {
            var ctx = this._ctx, idx = ctx.index && ctx.table.schema.idxByName[ctx.index];
            if (!idx || !idx.multi)
              return this;
            var set2 = {};
            addFilter(this._ctx, function(cursor) {
              var strKey = cursor.primaryKey.toString();
              var found = hasOwn(set2, strKey);
              set2[strKey] = true;
              return !found;
            });
            return this;
          };
          Collection2.prototype.modify = function(changes) {
            var _this = this;
            var ctx = this._ctx;
            return this._write(function(trans) {
              var modifyer;
              if (typeof changes === "function") {
                modifyer = changes;
              } else {
                modifyer = function(item) {
                  return applyUpdateSpec(item, changes);
                };
              }
              var coreTable = ctx.table.core;
              var _a2 = coreTable.schema.primaryKey, outbound = _a2.outbound, extractKey = _a2.extractKey;
              var limit = 200;
              var modifyChunkSize = _this.db._options.modifyChunkSize;
              if (modifyChunkSize) {
                if (typeof modifyChunkSize == "object") {
                  limit = modifyChunkSize[coreTable.name] || modifyChunkSize["*"] || 200;
                } else {
                  limit = modifyChunkSize;
                }
              }
              var totalFailures = [];
              var successCount = 0;
              var failedKeys = [];
              var applyMutateResult = function(expectedCount, res) {
                var failures = res.failures, numFailures = res.numFailures;
                successCount += expectedCount - numFailures;
                for (var _i = 0, _a3 = keys2(failures); _i < _a3.length; _i++) {
                  var pos = _a3[_i];
                  totalFailures.push(failures[pos]);
                }
              };
              var isUnconditionalDelete = changes === deleteCallback;
              return _this.clone().primaryKeys().then(function(keys3) {
                var criteria = isPlainKeyRange(ctx) && ctx.limit === Infinity && (typeof changes !== "function" || isUnconditionalDelete) && {
                  index: ctx.index,
                  range: ctx.range
                };
                var nextChunk = function(offset) {
                  var count = Math.min(limit, keys3.length - offset);
                  var keysInChunk = keys3.slice(offset, offset + count);
                  return (isUnconditionalDelete ? Promise.resolve([]) : coreTable.getMany({
                    trans,
                    keys: keysInChunk,
                    cache: "immutable"
                  })).then(function(values2) {
                    var addValues = [];
                    var putValues = [];
                    var putKeys = outbound ? [] : null;
                    var deleteKeys = isUnconditionalDelete ? keysInChunk : [];
                    if (!isUnconditionalDelete)
                      for (var i = 0; i < count; ++i) {
                        var origValue = values2[i];
                        var ctx_1 = {
                          value: deepClone(origValue),
                          primKey: keys3[offset + i]
                        };
                        if (modifyer.call(ctx_1, ctx_1.value, ctx_1) !== false) {
                          if (ctx_1.value == null) {
                            deleteKeys.push(keys3[offset + i]);
                          } else if (!outbound && cmp2(extractKey(origValue), extractKey(ctx_1.value)) !== 0) {
                            deleteKeys.push(keys3[offset + i]);
                            addValues.push(ctx_1.value);
                          } else {
                            putValues.push(ctx_1.value);
                            if (outbound)
                              putKeys.push(keys3[offset + i]);
                          }
                        }
                      }
                    return Promise.resolve(addValues.length > 0 && coreTable.mutate({ trans, type: "add", values: addValues }).then(function(res) {
                      for (var pos in res.failures) {
                        deleteKeys.splice(parseInt(pos), 1);
                      }
                      applyMutateResult(addValues.length, res);
                    })).then(function() {
                      return (putValues.length > 0 || criteria && typeof changes === "object") && coreTable.mutate({
                        trans,
                        type: "put",
                        keys: putKeys,
                        values: putValues,
                        criteria,
                        changeSpec: typeof changes !== "function" && changes,
                        isAdditionalChunk: offset > 0
                      }).then(function(res) {
                        return applyMutateResult(putValues.length, res);
                      });
                    }).then(function() {
                      return (deleteKeys.length > 0 || criteria && isUnconditionalDelete) && coreTable.mutate({
                        trans,
                        type: "delete",
                        keys: deleteKeys,
                        criteria,
                        isAdditionalChunk: offset > 0
                      }).then(function(res) {
                        return builtInDeletionTrigger(ctx.table, deleteKeys, res);
                      }).then(function(res) {
                        return applyMutateResult(deleteKeys.length, res);
                      });
                    }).then(function() {
                      return keys3.length > offset + count && nextChunk(offset + limit);
                    });
                  });
                };
                return nextChunk(0).then(function() {
                  if (totalFailures.length > 0)
                    throw new ModifyError("Error modifying one or more objects", totalFailures, successCount, failedKeys);
                  return keys3.length;
                });
              });
            });
          };
          Collection2.prototype.delete = function() {
            var ctx = this._ctx, range = ctx.range;
            if (isPlainKeyRange(ctx) && !ctx.table.schema.yProps && (ctx.isPrimKey || range.type === 3)) {
              return this._write(function(trans) {
                var primaryKey = ctx.table.core.schema.primaryKey;
                var coreRange = range;
                return ctx.table.core.count({ trans, query: { index: primaryKey, range: coreRange } }).then(function(count) {
                  return ctx.table.core.mutate({ trans, type: "deleteRange", range: coreRange }).then(function(_a2) {
                    var failures = _a2.failures, numFailures = _a2.numFailures;
                    if (numFailures)
                      throw new ModifyError("Could not delete some values", Object.keys(failures).map(function(pos) {
                        return failures[pos];
                      }), count - numFailures);
                    return count - numFailures;
                  });
                });
              });
            }
            return this.modify(deleteCallback);
          };
          return Collection2;
        })();
        var deleteCallback = function(value, ctx) {
          return ctx.value = null;
        };
        function createCollectionConstructor(db) {
          return makeClassConstructor(Collection.prototype, function Collection2(whereClause, keyRangeGenerator) {
            this.db = db;
            var keyRange = AnyRange, error = null;
            if (keyRangeGenerator)
              try {
                keyRange = keyRangeGenerator();
              } catch (ex) {
                error = ex;
              }
            var whereCtx = whereClause._ctx;
            var table = whereCtx.table;
            var readingHook = table.hook.reading.fire;
            this._ctx = {
              table,
              index: whereCtx.index,
              isPrimKey: !whereCtx.index || table.schema.primKey.keyPath && whereCtx.index === table.schema.primKey.name,
              range: keyRange,
              keysOnly: false,
              dir: "next",
              unique: "",
              algorithm: null,
              filter: null,
              replayFilter: null,
              justLimit: true,
              isMatch: null,
              offset: 0,
              limit: Infinity,
              error,
              or: whereCtx.or,
              valueMapper: readingHook !== mirror ? readingHook : null
            };
          });
        }
        function simpleCompare(a, b) {
          return a < b ? -1 : a === b ? 0 : 1;
        }
        function simpleCompareReverse(a, b) {
          return a > b ? -1 : a === b ? 0 : 1;
        }
        function fail(collectionOrWhereClause, err, T) {
          var collection = collectionOrWhereClause instanceof WhereClause ? new collectionOrWhereClause.Collection(collectionOrWhereClause) : collectionOrWhereClause;
          collection._ctx.error = T ? new T(err) : new TypeError(err);
          return collection;
        }
        function emptyCollection(whereClause) {
          return new whereClause.Collection(whereClause, function() {
            return rangeEqual("");
          }).limit(0);
        }
        function upperFactory(dir) {
          return dir === "next" ? function(s) {
            return s.toUpperCase();
          } : function(s) {
            return s.toLowerCase();
          };
        }
        function lowerFactory(dir) {
          return dir === "next" ? function(s) {
            return s.toLowerCase();
          } : function(s) {
            return s.toUpperCase();
          };
        }
        function nextCasing(key, lowerKey, upperNeedle, lowerNeedle, cmp3, dir) {
          var length = Math.min(key.length, lowerNeedle.length);
          var llp = -1;
          for (var i = 0; i < length; ++i) {
            var lwrKeyChar = lowerKey[i];
            if (lwrKeyChar !== lowerNeedle[i]) {
              if (cmp3(key[i], upperNeedle[i]) < 0)
                return key.substr(0, i) + upperNeedle[i] + upperNeedle.substr(i + 1);
              if (cmp3(key[i], lowerNeedle[i]) < 0)
                return key.substr(0, i) + lowerNeedle[i] + upperNeedle.substr(i + 1);
              if (llp >= 0)
                return key.substr(0, llp) + lowerKey[llp] + upperNeedle.substr(llp + 1);
              return null;
            }
            if (cmp3(key[i], lwrKeyChar) < 0)
              llp = i;
          }
          if (length < lowerNeedle.length && dir === "next")
            return key + upperNeedle.substr(key.length);
          if (length < key.length && dir === "prev")
            return key.substr(0, upperNeedle.length);
          return llp < 0 ? null : key.substr(0, llp) + lowerNeedle[llp] + upperNeedle.substr(llp + 1);
        }
        function addIgnoreCaseAlgorithm(whereClause, match, needles, suffix) {
          var upper, lower, compare, upperNeedles, lowerNeedles, direction, nextKeySuffix, needlesLen = needles.length;
          if (!needles.every(function(s) {
            return typeof s === "string";
          })) {
            return fail(whereClause, STRING_EXPECTED);
          }
          function initDirection(dir) {
            upper = upperFactory(dir);
            lower = lowerFactory(dir);
            compare = dir === "next" ? simpleCompare : simpleCompareReverse;
            var needleBounds = needles.map(function(needle) {
              return { lower: lower(needle), upper: upper(needle) };
            }).sort(function(a, b) {
              return compare(a.lower, b.lower);
            });
            upperNeedles = needleBounds.map(function(nb) {
              return nb.upper;
            });
            lowerNeedles = needleBounds.map(function(nb) {
              return nb.lower;
            });
            direction = dir;
            nextKeySuffix = dir === "next" ? "" : suffix;
          }
          initDirection("next");
          var c = new whereClause.Collection(whereClause, function() {
            return createRange(upperNeedles[0], lowerNeedles[needlesLen - 1] + suffix);
          });
          c._ondirectionchange = function(direction2) {
            initDirection(direction2);
          };
          var firstPossibleNeedle = 0;
          c._addAlgorithm(function(cursor, advance, resolve) {
            var key = cursor.key;
            if (typeof key !== "string")
              return false;
            var lowerKey = lower(key);
            if (match(lowerKey, lowerNeedles, firstPossibleNeedle)) {
              return true;
            } else {
              var lowestPossibleCasing = null;
              for (var i = firstPossibleNeedle; i < needlesLen; ++i) {
                var casing = nextCasing(key, lowerKey, upperNeedles[i], lowerNeedles[i], compare, direction);
                if (casing === null && lowestPossibleCasing === null)
                  firstPossibleNeedle = i + 1;
                else if (lowestPossibleCasing === null || compare(lowestPossibleCasing, casing) > 0) {
                  lowestPossibleCasing = casing;
                }
              }
              if (lowestPossibleCasing !== null) {
                advance(function() {
                  cursor.continue(lowestPossibleCasing + nextKeySuffix);
                });
              } else {
                advance(resolve);
              }
              return false;
            }
          });
          return c;
        }
        function createRange(lower, upper, lowerOpen, upperOpen) {
          return {
            type: 2,
            lower,
            upper,
            lowerOpen,
            upperOpen
          };
        }
        function rangeEqual(value) {
          return {
            type: 1,
            lower: value,
            upper: value
          };
        }
        var WhereClause = (function() {
          function WhereClause2() {
          }
          Object.defineProperty(WhereClause2.prototype, "Collection", {
            get: function() {
              return this._ctx.table.db.Collection;
            },
            enumerable: false,
            configurable: true
          });
          WhereClause2.prototype.between = function(lower, upper, includeLower, includeUpper) {
            includeLower = includeLower !== false;
            includeUpper = includeUpper === true;
            try {
              if (this._cmp(lower, upper) > 0 || this._cmp(lower, upper) === 0 && (includeLower || includeUpper) && !(includeLower && includeUpper))
                return emptyCollection(this);
              return new this.Collection(this, function() {
                return createRange(lower, upper, !includeLower, !includeUpper);
              });
            } catch (e) {
              return fail(this, INVALID_KEY_ARGUMENT);
            }
          };
          WhereClause2.prototype.equals = function(value) {
            if (value == null)
              return fail(this, INVALID_KEY_ARGUMENT);
            return new this.Collection(this, function() {
              return rangeEqual(value);
            });
          };
          WhereClause2.prototype.above = function(value) {
            if (value == null)
              return fail(this, INVALID_KEY_ARGUMENT);
            return new this.Collection(this, function() {
              return createRange(value, void 0, true);
            });
          };
          WhereClause2.prototype.aboveOrEqual = function(value) {
            if (value == null)
              return fail(this, INVALID_KEY_ARGUMENT);
            return new this.Collection(this, function() {
              return createRange(value, void 0, false);
            });
          };
          WhereClause2.prototype.below = function(value) {
            if (value == null)
              return fail(this, INVALID_KEY_ARGUMENT);
            return new this.Collection(this, function() {
              return createRange(void 0, value, false, true);
            });
          };
          WhereClause2.prototype.belowOrEqual = function(value) {
            if (value == null)
              return fail(this, INVALID_KEY_ARGUMENT);
            return new this.Collection(this, function() {
              return createRange(void 0, value);
            });
          };
          WhereClause2.prototype.startsWith = function(str) {
            if (typeof str !== "string")
              return fail(this, STRING_EXPECTED);
            return this.between(str, str + maxString, true, true);
          };
          WhereClause2.prototype.startsWithIgnoreCase = function(str) {
            if (str === "")
              return this.startsWith(str);
            return addIgnoreCaseAlgorithm(this, function(x, a) {
              return x.indexOf(a[0]) === 0;
            }, [str], maxString);
          };
          WhereClause2.prototype.equalsIgnoreCase = function(str) {
            return addIgnoreCaseAlgorithm(this, function(x, a) {
              return x === a[0];
            }, [str], "");
          };
          WhereClause2.prototype.anyOfIgnoreCase = function() {
            var set2 = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
            if (set2.length === 0)
              return emptyCollection(this);
            return addIgnoreCaseAlgorithm(this, function(x, a) {
              return a.indexOf(x) !== -1;
            }, set2, "");
          };
          WhereClause2.prototype.startsWithAnyOfIgnoreCase = function() {
            var set2 = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
            if (set2.length === 0)
              return emptyCollection(this);
            return addIgnoreCaseAlgorithm(this, function(x, a) {
              return a.some(function(n) {
                return x.indexOf(n) === 0;
              });
            }, set2, maxString);
          };
          WhereClause2.prototype.anyOf = function() {
            var _this = this;
            var set2 = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
            var compare = this._cmp;
            try {
              set2.sort(compare);
            } catch (e) {
              return fail(this, INVALID_KEY_ARGUMENT);
            }
            if (set2.length === 0)
              return emptyCollection(this);
            var c = new this.Collection(this, function() {
              return createRange(set2[0], set2[set2.length - 1]);
            });
            c._ondirectionchange = function(direction) {
              compare = direction === "next" ? _this._ascending : _this._descending;
              set2.sort(compare);
            };
            var i = 0;
            c._addAlgorithm(function(cursor, advance, resolve) {
              var key = cursor.key;
              while (compare(key, set2[i]) > 0) {
                ++i;
                if (i === set2.length) {
                  advance(resolve);
                  return false;
                }
              }
              if (compare(key, set2[i]) === 0) {
                return true;
              } else {
                advance(function() {
                  cursor.continue(set2[i]);
                });
                return false;
              }
            });
            return c;
          };
          WhereClause2.prototype.notEqual = function(value) {
            return this.inAnyRange([[minKey, value], [value, this.db._maxKey]], { includeLowers: false, includeUppers: false });
          };
          WhereClause2.prototype.noneOf = function() {
            var set2 = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
            if (set2.length === 0)
              return new this.Collection(this);
            try {
              set2.sort(this._ascending);
            } catch (e) {
              return fail(this, INVALID_KEY_ARGUMENT);
            }
            var ranges = set2.reduce(function(res, val) {
              return res ? res.concat([[res[res.length - 1][1], val]]) : [[minKey, val]];
            }, null);
            ranges.push([set2[set2.length - 1], this.db._maxKey]);
            return this.inAnyRange(ranges, { includeLowers: false, includeUppers: false });
          };
          WhereClause2.prototype.inAnyRange = function(ranges, options) {
            var _this = this;
            var cmp3 = this._cmp, ascending = this._ascending, descending = this._descending, min = this._min, max = this._max;
            if (ranges.length === 0)
              return emptyCollection(this);
            if (!ranges.every(function(range) {
              return range[0] !== void 0 && range[1] !== void 0 && ascending(range[0], range[1]) <= 0;
            })) {
              return fail(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", exceptions.InvalidArgument);
            }
            var includeLowers = !options || options.includeLowers !== false;
            var includeUppers = options && options.includeUppers === true;
            function addRange2(ranges2, newRange) {
              var i = 0, l = ranges2.length;
              for (; i < l; ++i) {
                var range = ranges2[i];
                if (cmp3(newRange[0], range[1]) < 0 && cmp3(newRange[1], range[0]) > 0) {
                  range[0] = min(range[0], newRange[0]);
                  range[1] = max(range[1], newRange[1]);
                  break;
                }
              }
              if (i === l)
                ranges2.push(newRange);
              return ranges2;
            }
            var sortDirection = ascending;
            function rangeSorter(a, b) {
              return sortDirection(a[0], b[0]);
            }
            var set2;
            try {
              set2 = ranges.reduce(addRange2, []);
              set2.sort(rangeSorter);
            } catch (ex) {
              return fail(this, INVALID_KEY_ARGUMENT);
            }
            var rangePos = 0;
            var keyIsBeyondCurrentEntry = includeUppers ? function(key) {
              return ascending(key, set2[rangePos][1]) > 0;
            } : function(key) {
              return ascending(key, set2[rangePos][1]) >= 0;
            };
            var keyIsBeforeCurrentEntry = includeLowers ? function(key) {
              return descending(key, set2[rangePos][0]) > 0;
            } : function(key) {
              return descending(key, set2[rangePos][0]) >= 0;
            };
            function keyWithinCurrentRange(key) {
              return !keyIsBeyondCurrentEntry(key) && !keyIsBeforeCurrentEntry(key);
            }
            var checkKey = keyIsBeyondCurrentEntry;
            var c = new this.Collection(this, function() {
              return createRange(set2[0][0], set2[set2.length - 1][1], !includeLowers, !includeUppers);
            });
            c._ondirectionchange = function(direction) {
              if (direction === "next") {
                checkKey = keyIsBeyondCurrentEntry;
                sortDirection = ascending;
              } else {
                checkKey = keyIsBeforeCurrentEntry;
                sortDirection = descending;
              }
              set2.sort(rangeSorter);
            };
            c._addAlgorithm(function(cursor, advance, resolve) {
              var key = cursor.key;
              while (checkKey(key)) {
                ++rangePos;
                if (rangePos === set2.length) {
                  advance(resolve);
                  return false;
                }
              }
              if (keyWithinCurrentRange(key)) {
                return true;
              } else if (_this._cmp(key, set2[rangePos][1]) === 0 || _this._cmp(key, set2[rangePos][0]) === 0) {
                return false;
              } else {
                advance(function() {
                  if (sortDirection === ascending)
                    cursor.continue(set2[rangePos][0]);
                  else
                    cursor.continue(set2[rangePos][1]);
                });
                return false;
              }
            });
            return c;
          };
          WhereClause2.prototype.startsWithAnyOf = function() {
            var set2 = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
            if (!set2.every(function(s) {
              return typeof s === "string";
            })) {
              return fail(this, "startsWithAnyOf() only works with strings");
            }
            if (set2.length === 0)
              return emptyCollection(this);
            return this.inAnyRange(set2.map(function(str) {
              return [str, str + maxString];
            }));
          };
          return WhereClause2;
        })();
        function createWhereClauseConstructor(db) {
          return makeClassConstructor(WhereClause.prototype, function WhereClause2(table, index, orCollection) {
            this.db = db;
            this._ctx = {
              table,
              index: index === ":id" ? null : index,
              or: orCollection
            };
            this._cmp = this._ascending = cmp2;
            this._descending = function(a, b) {
              return cmp2(b, a);
            };
            this._max = function(a, b) {
              return cmp2(a, b) > 0 ? a : b;
            };
            this._min = function(a, b) {
              return cmp2(a, b) < 0 ? a : b;
            };
            this._IDBKeyRange = db._deps.IDBKeyRange;
            if (!this._IDBKeyRange)
              throw new exceptions.MissingAPI();
          });
        }
        function eventRejectHandler(reject) {
          return wrap(function(event) {
            preventDefault(event);
            reject(event.target.error);
            return false;
          });
        }
        function preventDefault(event) {
          if (event.stopPropagation)
            event.stopPropagation();
          if (event.preventDefault)
            event.preventDefault();
        }
        var DEXIE_STORAGE_MUTATED_EVENT_NAME = "storagemutated";
        var STORAGE_MUTATED_DOM_EVENT_NAME = "x-storagemutated-1";
        var globalEvents = Events(null, DEXIE_STORAGE_MUTATED_EVENT_NAME);
        var Transaction = (function() {
          function Transaction2() {
          }
          Transaction2.prototype._lock = function() {
            assert(!PSD.global);
            ++this._reculock;
            if (this._reculock === 1 && !PSD.global)
              PSD.lockOwnerFor = this;
            return this;
          };
          Transaction2.prototype._unlock = function() {
            assert(!PSD.global);
            if (--this._reculock === 0) {
              if (!PSD.global)
                PSD.lockOwnerFor = null;
              while (this._blockedFuncs.length > 0 && !this._locked()) {
                var fnAndPSD = this._blockedFuncs.shift();
                try {
                  usePSD(fnAndPSD[1], fnAndPSD[0]);
                } catch (e) {
                }
              }
            }
            return this;
          };
          Transaction2.prototype._locked = function() {
            return this._reculock && PSD.lockOwnerFor !== this;
          };
          Transaction2.prototype.create = function(idbtrans) {
            var _this = this;
            if (!this.mode)
              return this;
            var idbdb = this.db.idbdb;
            var dbOpenError = this.db._state.dbOpenError;
            assert(!this.idbtrans);
            if (!idbtrans && !idbdb) {
              switch (dbOpenError && dbOpenError.name) {
                case "DatabaseClosedError":
                  throw new exceptions.DatabaseClosed(dbOpenError);
                case "MissingAPIError":
                  throw new exceptions.MissingAPI(dbOpenError.message, dbOpenError);
                default:
                  throw new exceptions.OpenFailed(dbOpenError);
              }
            }
            if (!this.active)
              throw new exceptions.TransactionInactive();
            assert(this._completion._state === null);
            idbtrans = this.idbtrans = idbtrans || (this.db.core ? this.db.core.transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability }) : idbdb.transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability }));
            idbtrans.onerror = wrap(function(ev) {
              preventDefault(ev);
              _this._reject(idbtrans.error);
            });
            idbtrans.onabort = wrap(function(ev) {
              preventDefault(ev);
              _this.active && _this._reject(new exceptions.Abort(idbtrans.error));
              _this.active = false;
              _this.on("abort").fire(ev);
            });
            idbtrans.oncomplete = wrap(function() {
              _this.active = false;
              _this._resolve();
              if ("mutatedParts" in idbtrans) {
                globalEvents.storagemutated.fire(idbtrans["mutatedParts"]);
              }
            });
            return this;
          };
          Transaction2.prototype._promise = function(mode, fn, bWriteLock) {
            var _this = this;
            if (mode === "readwrite" && this.mode !== "readwrite")
              return rejection(new exceptions.ReadOnly("Transaction is readonly"));
            if (!this.active)
              return rejection(new exceptions.TransactionInactive());
            if (this._locked()) {
              return new DexiePromise(function(resolve, reject) {
                _this._blockedFuncs.push([function() {
                  _this._promise(mode, fn, bWriteLock).then(resolve, reject);
                }, PSD]);
              });
            } else if (bWriteLock) {
              return newScope(function() {
                var p2 = new DexiePromise(function(resolve, reject) {
                  _this._lock();
                  var rv = fn(resolve, reject, _this);
                  if (rv && rv.then)
                    rv.then(resolve, reject);
                });
                p2.finally(function() {
                  return _this._unlock();
                });
                p2._lib = true;
                return p2;
              });
            } else {
              var p = new DexiePromise(function(resolve, reject) {
                var rv = fn(resolve, reject, _this);
                if (rv && rv.then)
                  rv.then(resolve, reject);
              });
              p._lib = true;
              return p;
            }
          };
          Transaction2.prototype._root = function() {
            return this.parent ? this.parent._root() : this;
          };
          Transaction2.prototype.waitFor = function(promiseLike) {
            var root = this._root();
            var promise = DexiePromise.resolve(promiseLike);
            if (root._waitingFor) {
              root._waitingFor = root._waitingFor.then(function() {
                return promise;
              });
            } else {
              root._waitingFor = promise;
              root._waitingQueue = [];
              var store = root.idbtrans.objectStore(root.storeNames[0]);
              (function spin() {
                ++root._spinCount;
                while (root._waitingQueue.length)
                  root._waitingQueue.shift()();
                if (root._waitingFor)
                  store.get(-Infinity).onsuccess = spin;
              })();
            }
            var currentWaitPromise = root._waitingFor;
            return new DexiePromise(function(resolve, reject) {
              promise.then(function(res) {
                return root._waitingQueue.push(wrap(resolve.bind(null, res)));
              }, function(err) {
                return root._waitingQueue.push(wrap(reject.bind(null, err)));
              }).finally(function() {
                if (root._waitingFor === currentWaitPromise) {
                  root._waitingFor = null;
                }
              });
            });
          };
          Transaction2.prototype.abort = function() {
            if (this.active) {
              this.active = false;
              if (this.idbtrans)
                this.idbtrans.abort();
              this._reject(new exceptions.Abort());
            }
          };
          Transaction2.prototype.table = function(tableName) {
            var memoizedTables = this._memoizedTables || (this._memoizedTables = {});
            if (hasOwn(memoizedTables, tableName))
              return memoizedTables[tableName];
            var tableSchema = this.schema[tableName];
            if (!tableSchema) {
              throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
            }
            var transactionBoundTable = new this.db.Table(tableName, tableSchema, this);
            transactionBoundTable.core = this.db.core.table(tableName);
            memoizedTables[tableName] = transactionBoundTable;
            return transactionBoundTable;
          };
          return Transaction2;
        })();
        function createTransactionConstructor(db) {
          return makeClassConstructor(Transaction.prototype, function Transaction2(mode, storeNames, dbschema, chromeTransactionDurability, parent) {
            var _this = this;
            if (mode !== "readonly")
              storeNames.forEach(function(storeName) {
                var _a2;
                var yProps = (_a2 = dbschema[storeName]) === null || _a2 === void 0 ? void 0 : _a2.yProps;
                if (yProps)
                  storeNames = storeNames.concat(yProps.map(function(p) {
                    return p.updatesTable;
                  }));
              });
            this.db = db;
            this.mode = mode;
            this.storeNames = storeNames;
            this.schema = dbschema;
            this.chromeTransactionDurability = chromeTransactionDurability;
            this.idbtrans = null;
            this.on = Events(this, "complete", "error", "abort");
            this.parent = parent || null;
            this.active = true;
            this._reculock = 0;
            this._blockedFuncs = [];
            this._resolve = null;
            this._reject = null;
            this._waitingFor = null;
            this._waitingQueue = null;
            this._spinCount = 0;
            this._completion = new DexiePromise(function(resolve, reject) {
              _this._resolve = resolve;
              _this._reject = reject;
            });
            this._completion.then(function() {
              _this.active = false;
              _this.on.complete.fire();
            }, function(e) {
              var wasActive = _this.active;
              _this.active = false;
              _this.on.error.fire(e);
              _this.parent ? _this.parent._reject(e) : wasActive && _this.idbtrans && _this.idbtrans.abort();
              return rejection(e);
            });
          });
        }
        function createIndexSpec(name, keyPath, unique, multi, auto, compound, isPrimKey, type2) {
          return {
            name,
            keyPath,
            unique,
            multi,
            auto,
            compound,
            src: (unique && !isPrimKey ? "&" : "") + (multi ? "*" : "") + (auto ? "++" : "") + nameFromKeyPath(keyPath),
            type: type2
          };
        }
        function nameFromKeyPath(keyPath) {
          return typeof keyPath === "string" ? keyPath : keyPath ? "[" + [].join.call(keyPath, "+") + "]" : "";
        }
        function createTableSchema(name, primKey, indexes) {
          return {
            name,
            primKey,
            indexes,
            mappedClass: null,
            idxByName: arrayToObject(indexes, function(index) {
              return [index.name, index];
            })
          };
        }
        function safariMultiStoreFix(storeNames) {
          return storeNames.length === 1 ? storeNames[0] : storeNames;
        }
        var getMaxKey = function(IdbKeyRange) {
          try {
            IdbKeyRange.only([[]]);
            getMaxKey = function() {
              return [[]];
            };
            return [[]];
          } catch (e) {
            getMaxKey = function() {
              return maxString;
            };
            return maxString;
          }
        };
        function getKeyExtractor(keyPath) {
          if (keyPath == null) {
            return function() {
              return void 0;
            };
          } else if (typeof keyPath === "string") {
            return getSinglePathKeyExtractor(keyPath);
          } else {
            return function(obj) {
              return getByKeyPath(obj, keyPath);
            };
          }
        }
        function getSinglePathKeyExtractor(keyPath) {
          var split = keyPath.split(".");
          if (split.length === 1) {
            return function(obj) {
              return obj[keyPath];
            };
          } else {
            return function(obj) {
              return getByKeyPath(obj, keyPath);
            };
          }
        }
        function arrayify(arrayLike) {
          return [].slice.call(arrayLike);
        }
        var _id_counter = 0;
        function getKeyPathAlias(keyPath) {
          return keyPath == null ? ":id" : typeof keyPath === "string" ? keyPath : "[".concat(keyPath.join("+"), "]");
        }
        function createDBCore(db, IdbKeyRange, tmpTrans) {
          function extractSchema(db2, trans) {
            var tables2 = arrayify(db2.objectStoreNames);
            return {
              schema: {
                name: db2.name,
                tables: tables2.map(function(table) {
                  return trans.objectStore(table);
                }).map(function(store) {
                  var keyPath = store.keyPath, autoIncrement = store.autoIncrement;
                  var compound = isArray(keyPath);
                  var outbound = keyPath == null;
                  var indexByKeyPath = {};
                  var result = {
                    name: store.name,
                    primaryKey: {
                      name: null,
                      isPrimaryKey: true,
                      outbound,
                      compound,
                      keyPath,
                      autoIncrement,
                      unique: true,
                      extractKey: getKeyExtractor(keyPath)
                    },
                    indexes: arrayify(store.indexNames).map(function(indexName) {
                      return store.index(indexName);
                    }).map(function(index) {
                      var name = index.name, unique = index.unique, multiEntry = index.multiEntry, keyPath2 = index.keyPath;
                      var compound2 = isArray(keyPath2);
                      var result2 = {
                        name,
                        compound: compound2,
                        keyPath: keyPath2,
                        unique,
                        multiEntry,
                        extractKey: getKeyExtractor(keyPath2)
                      };
                      indexByKeyPath[getKeyPathAlias(keyPath2)] = result2;
                      return result2;
                    }),
                    getIndexByKeyPath: function(keyPath2) {
                      return indexByKeyPath[getKeyPathAlias(keyPath2)];
                    }
                  };
                  indexByKeyPath[":id"] = result.primaryKey;
                  if (keyPath != null) {
                    indexByKeyPath[getKeyPathAlias(keyPath)] = result.primaryKey;
                  }
                  return result;
                })
              },
              hasGetAll: tables2.length > 0 && "getAll" in trans.objectStore(tables2[0]) && !(typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
            };
          }
          function makeIDBKeyRange(range) {
            if (range.type === 3)
              return null;
            if (range.type === 4)
              throw new Error("Cannot convert never type to IDBKeyRange");
            var lower = range.lower, upper = range.upper, lowerOpen = range.lowerOpen, upperOpen = range.upperOpen;
            var idbRange = lower === void 0 ? upper === void 0 ? null : IdbKeyRange.upperBound(upper, !!upperOpen) : upper === void 0 ? IdbKeyRange.lowerBound(lower, !!lowerOpen) : IdbKeyRange.bound(lower, upper, !!lowerOpen, !!upperOpen);
            return idbRange;
          }
          function createDbCoreTable(tableSchema) {
            var tableName = tableSchema.name;
            function mutate(_a3) {
              var trans = _a3.trans, type2 = _a3.type, keys3 = _a3.keys, values2 = _a3.values, range = _a3.range;
              return new Promise(function(resolve, reject) {
                resolve = wrap(resolve);
                var store = trans.objectStore(tableName);
                var outbound = store.keyPath == null;
                var isAddOrPut = type2 === "put" || type2 === "add";
                if (!isAddOrPut && type2 !== "delete" && type2 !== "deleteRange")
                  throw new Error("Invalid operation type: " + type2);
                var length = (keys3 || values2 || { length: 1 }).length;
                if (keys3 && values2 && keys3.length !== values2.length) {
                  throw new Error("Given keys array must have same length as given values array.");
                }
                if (length === 0)
                  return resolve({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
                var req;
                var reqs = [];
                var failures = [];
                var numFailures = 0;
                var errorHandler = function(event) {
                  ++numFailures;
                  preventDefault(event);
                };
                if (type2 === "deleteRange") {
                  if (range.type === 4)
                    return resolve({ numFailures, failures, results: [], lastResult: void 0 });
                  if (range.type === 3)
                    reqs.push(req = store.clear());
                  else
                    reqs.push(req = store.delete(makeIDBKeyRange(range)));
                } else {
                  var _a4 = isAddOrPut ? outbound ? [values2, keys3] : [values2, null] : [keys3, null], args1 = _a4[0], args2 = _a4[1];
                  if (isAddOrPut) {
                    for (var i = 0; i < length; ++i) {
                      reqs.push(req = args2 && args2[i] !== void 0 ? store[type2](args1[i], args2[i]) : store[type2](args1[i]));
                      req.onerror = errorHandler;
                    }
                  } else {
                    for (var i = 0; i < length; ++i) {
                      reqs.push(req = store[type2](args1[i]));
                      req.onerror = errorHandler;
                    }
                  }
                }
                var done = function(event) {
                  var lastResult = event.target.result;
                  reqs.forEach(function(req2, i2) {
                    return req2.error != null && (failures[i2] = req2.error);
                  });
                  resolve({
                    numFailures,
                    failures,
                    results: type2 === "delete" ? keys3 : reqs.map(function(req2) {
                      return req2.result;
                    }),
                    lastResult
                  });
                };
                req.onerror = function(event) {
                  errorHandler(event);
                  done(event);
                };
                req.onsuccess = done;
              });
            }
            function openCursor2(_a3) {
              var trans = _a3.trans, values2 = _a3.values, query2 = _a3.query, reverse = _a3.reverse, unique = _a3.unique;
              return new Promise(function(resolve, reject) {
                resolve = wrap(resolve);
                var index = query2.index, range = query2.range;
                var store = trans.objectStore(tableName);
                var source = index.isPrimaryKey ? store : store.index(index.name);
                var direction = reverse ? unique ? "prevunique" : "prev" : unique ? "nextunique" : "next";
                var req = values2 || !("openKeyCursor" in source) ? source.openCursor(makeIDBKeyRange(range), direction) : source.openKeyCursor(makeIDBKeyRange(range), direction);
                req.onerror = eventRejectHandler(reject);
                req.onsuccess = wrap(function(ev) {
                  var cursor = req.result;
                  if (!cursor) {
                    resolve(null);
                    return;
                  }
                  cursor.___id = ++_id_counter;
                  cursor.done = false;
                  var _cursorContinue = cursor.continue.bind(cursor);
                  var _cursorContinuePrimaryKey = cursor.continuePrimaryKey;
                  if (_cursorContinuePrimaryKey)
                    _cursorContinuePrimaryKey = _cursorContinuePrimaryKey.bind(cursor);
                  var _cursorAdvance = cursor.advance.bind(cursor);
                  var doThrowCursorIsNotStarted = function() {
                    throw new Error("Cursor not started");
                  };
                  var doThrowCursorIsStopped = function() {
                    throw new Error("Cursor not stopped");
                  };
                  cursor.trans = trans;
                  cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsNotStarted;
                  cursor.fail = wrap(reject);
                  cursor.next = function() {
                    var _this = this;
                    var gotOne = 1;
                    return this.start(function() {
                      return gotOne-- ? _this.continue() : _this.stop();
                    }).then(function() {
                      return _this;
                    });
                  };
                  cursor.start = function(callback) {
                    var iterationPromise = new Promise(function(resolveIteration, rejectIteration) {
                      resolveIteration = wrap(resolveIteration);
                      req.onerror = eventRejectHandler(rejectIteration);
                      cursor.fail = rejectIteration;
                      cursor.stop = function(value) {
                        cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsStopped;
                        resolveIteration(value);
                      };
                    });
                    var guardedCallback = function() {
                      if (req.result) {
                        try {
                          callback();
                        } catch (err) {
                          cursor.fail(err);
                        }
                      } else {
                        cursor.done = true;
                        cursor.start = function() {
                          throw new Error("Cursor behind last entry");
                        };
                        cursor.stop();
                      }
                    };
                    req.onsuccess = wrap(function(ev2) {
                      req.onsuccess = guardedCallback;
                      guardedCallback();
                    });
                    cursor.continue = _cursorContinue;
                    cursor.continuePrimaryKey = _cursorContinuePrimaryKey;
                    cursor.advance = _cursorAdvance;
                    guardedCallback();
                    return iterationPromise;
                  };
                  resolve(cursor);
                }, reject);
              });
            }
            function query(hasGetAll2) {
              return function(request) {
                return new Promise(function(resolve, reject) {
                  resolve = wrap(resolve);
                  var trans = request.trans, values2 = request.values, limit = request.limit, query2 = request.query;
                  var nonInfinitLimit = limit === Infinity ? void 0 : limit;
                  var index = query2.index, range = query2.range;
                  var store = trans.objectStore(tableName);
                  var source = index.isPrimaryKey ? store : store.index(index.name);
                  var idbKeyRange = makeIDBKeyRange(range);
                  if (limit === 0)
                    return resolve({ result: [] });
                  if (hasGetAll2) {
                    var req = values2 ? source.getAll(idbKeyRange, nonInfinitLimit) : source.getAllKeys(idbKeyRange, nonInfinitLimit);
                    req.onsuccess = function(event) {
                      return resolve({ result: event.target.result });
                    };
                    req.onerror = eventRejectHandler(reject);
                  } else {
                    var count_1 = 0;
                    var req_1 = values2 || !("openKeyCursor" in source) ? source.openCursor(idbKeyRange) : source.openKeyCursor(idbKeyRange);
                    var result_1 = [];
                    req_1.onsuccess = function(event) {
                      var cursor = req_1.result;
                      if (!cursor)
                        return resolve({ result: result_1 });
                      result_1.push(values2 ? cursor.value : cursor.primaryKey);
                      if (++count_1 === limit)
                        return resolve({ result: result_1 });
                      cursor.continue();
                    };
                    req_1.onerror = eventRejectHandler(reject);
                  }
                });
              };
            }
            return {
              name: tableName,
              schema: tableSchema,
              mutate,
              getMany: function(_a3) {
                var trans = _a3.trans, keys3 = _a3.keys;
                return new Promise(function(resolve, reject) {
                  resolve = wrap(resolve);
                  var store = trans.objectStore(tableName);
                  var length = keys3.length;
                  var result = new Array(length);
                  var keyCount = 0;
                  var callbackCount = 0;
                  var req;
                  var successHandler = function(event) {
                    var req2 = event.target;
                    if ((result[req2._pos] = req2.result) != null)
                      ;
                    if (++callbackCount === keyCount)
                      resolve(result);
                  };
                  var errorHandler = eventRejectHandler(reject);
                  for (var i = 0; i < length; ++i) {
                    var key = keys3[i];
                    if (key != null) {
                      req = store.get(keys3[i]);
                      req._pos = i;
                      req.onsuccess = successHandler;
                      req.onerror = errorHandler;
                      ++keyCount;
                    }
                  }
                  if (keyCount === 0)
                    resolve(result);
                });
              },
              get: function(_a3) {
                var trans = _a3.trans, key = _a3.key;
                return new Promise(function(resolve, reject) {
                  resolve = wrap(resolve);
                  var store = trans.objectStore(tableName);
                  var req = store.get(key);
                  req.onsuccess = function(event) {
                    return resolve(event.target.result);
                  };
                  req.onerror = eventRejectHandler(reject);
                });
              },
              query: query(hasGetAll),
              openCursor: openCursor2,
              count: function(_a3) {
                var query2 = _a3.query, trans = _a3.trans;
                var index = query2.index, range = query2.range;
                return new Promise(function(resolve, reject) {
                  var store = trans.objectStore(tableName);
                  var source = index.isPrimaryKey ? store : store.index(index.name);
                  var idbKeyRange = makeIDBKeyRange(range);
                  var req = idbKeyRange ? source.count(idbKeyRange) : source.count();
                  req.onsuccess = wrap(function(ev) {
                    return resolve(ev.target.result);
                  });
                  req.onerror = eventRejectHandler(reject);
                });
              }
            };
          }
          var _a2 = extractSchema(db, tmpTrans), schema = _a2.schema, hasGetAll = _a2.hasGetAll;
          var tables = schema.tables.map(function(tableSchema) {
            return createDbCoreTable(tableSchema);
          });
          var tableMap = {};
          tables.forEach(function(table) {
            return tableMap[table.name] = table;
          });
          return {
            stack: "dbcore",
            transaction: db.transaction.bind(db),
            table: function(name) {
              var result = tableMap[name];
              if (!result)
                throw new Error("Table '".concat(name, "' not found"));
              return tableMap[name];
            },
            MIN_KEY: -Infinity,
            MAX_KEY: getMaxKey(IdbKeyRange),
            schema
          };
        }
        function createMiddlewareStack(stackImpl, middlewares) {
          return middlewares.reduce(function(down, _a2) {
            var create = _a2.create;
            return __assign(__assign({}, down), create(down));
          }, stackImpl);
        }
        function createMiddlewareStacks(middlewares, idbdb, _a2, tmpTrans) {
          var IDBKeyRange = _a2.IDBKeyRange;
          _a2.indexedDB;
          var dbcore = createMiddlewareStack(createDBCore(idbdb, IDBKeyRange, tmpTrans), middlewares.dbcore);
          return {
            dbcore
          };
        }
        function generateMiddlewareStacks(db, tmpTrans) {
          var idbdb = tmpTrans.db;
          var stacks = createMiddlewareStacks(db._middlewares, idbdb, db._deps, tmpTrans);
          db.core = stacks.dbcore;
          db.tables.forEach(function(table) {
            var tableName = table.name;
            if (db.core.schema.tables.some(function(tbl) {
              return tbl.name === tableName;
            })) {
              table.core = db.core.table(tableName);
              if (db[tableName] instanceof db.Table) {
                db[tableName].core = table.core;
              }
            }
          });
        }
        function setApiOnPlace(db, objs, tableNames, dbschema) {
          tableNames.forEach(function(tableName) {
            var schema = dbschema[tableName];
            objs.forEach(function(obj) {
              var propDesc = getPropertyDescriptor(obj, tableName);
              if (!propDesc || "value" in propDesc && propDesc.value === void 0) {
                if (obj === db.Transaction.prototype || obj instanceof db.Transaction) {
                  setProp(obj, tableName, {
                    get: function() {
                      return this.table(tableName);
                    },
                    set: function(value) {
                      defineProperty(this, tableName, { value, writable: true, configurable: true, enumerable: true });
                    }
                  });
                } else {
                  obj[tableName] = new db.Table(tableName, schema);
                }
              }
            });
          });
        }
        function removeTablesApi(db, objs) {
          objs.forEach(function(obj) {
            for (var key in obj) {
              if (obj[key] instanceof db.Table)
                delete obj[key];
            }
          });
        }
        function lowerVersionFirst(a, b) {
          return a._cfg.version - b._cfg.version;
        }
        function runUpgraders(db, oldVersion, idbUpgradeTrans, reject) {
          var globalSchema = db._dbSchema;
          if (idbUpgradeTrans.objectStoreNames.contains("$meta") && !globalSchema.$meta) {
            globalSchema.$meta = createTableSchema("$meta", parseIndexSyntax("")[0], []);
            db._storeNames.push("$meta");
          }
          var trans = db._createTransaction("readwrite", db._storeNames, globalSchema);
          trans.create(idbUpgradeTrans);
          trans._completion.catch(reject);
          var rejectTransaction = trans._reject.bind(trans);
          var transless = PSD.transless || PSD;
          newScope(function() {
            PSD.trans = trans;
            PSD.transless = transless;
            if (oldVersion === 0) {
              keys2(globalSchema).forEach(function(tableName) {
                createTable(idbUpgradeTrans, tableName, globalSchema[tableName].primKey, globalSchema[tableName].indexes);
              });
              generateMiddlewareStacks(db, idbUpgradeTrans);
              DexiePromise.follow(function() {
                return db.on.populate.fire(trans);
              }).catch(rejectTransaction);
            } else {
              generateMiddlewareStacks(db, idbUpgradeTrans);
              return getExistingVersion(db, trans, oldVersion).then(function(oldVersion2) {
                return updateTablesAndIndexes(db, oldVersion2, trans, idbUpgradeTrans);
              }).catch(rejectTransaction);
            }
          });
        }
        function patchCurrentVersion(db, idbUpgradeTrans) {
          createMissingTables(db._dbSchema, idbUpgradeTrans);
          if (idbUpgradeTrans.db.version % 10 === 0 && !idbUpgradeTrans.objectStoreNames.contains("$meta")) {
            idbUpgradeTrans.db.createObjectStore("$meta").add(Math.ceil(idbUpgradeTrans.db.version / 10 - 1), "version");
          }
          var globalSchema = buildGlobalSchema(db, db.idbdb, idbUpgradeTrans);
          adjustToExistingIndexNames(db, db._dbSchema, idbUpgradeTrans);
          var diff = getSchemaDiff(globalSchema, db._dbSchema);
          var _loop_1 = function(tableChange2) {
            if (tableChange2.change.length || tableChange2.recreate) {
              console.warn("Unable to patch indexes of table ".concat(tableChange2.name, " because it has changes on the type of index or primary key."));
              return { value: void 0 };
            }
            var store = idbUpgradeTrans.objectStore(tableChange2.name);
            tableChange2.add.forEach(function(idx) {
              if (debug)
                console.debug("Dexie upgrade patch: Creating missing index ".concat(tableChange2.name, ".").concat(idx.src));
              addIndex(store, idx);
            });
          };
          for (var _i = 0, _a2 = diff.change; _i < _a2.length; _i++) {
            var tableChange = _a2[_i];
            var state_1 = _loop_1(tableChange);
            if (typeof state_1 === "object")
              return state_1.value;
          }
        }
        function getExistingVersion(db, trans, oldVersion) {
          if (trans.storeNames.includes("$meta")) {
            return trans.table("$meta").get("version").then(function(metaVersion) {
              return metaVersion != null ? metaVersion : oldVersion;
            });
          } else {
            return DexiePromise.resolve(oldVersion);
          }
        }
        function updateTablesAndIndexes(db, oldVersion, trans, idbUpgradeTrans) {
          var queue = [];
          var versions = db._versions;
          var globalSchema = db._dbSchema = buildGlobalSchema(db, db.idbdb, idbUpgradeTrans);
          var versToRun = versions.filter(function(v) {
            return v._cfg.version >= oldVersion;
          });
          if (versToRun.length === 0) {
            return DexiePromise.resolve();
          }
          versToRun.forEach(function(version) {
            queue.push(function() {
              var oldSchema = globalSchema;
              var newSchema = version._cfg.dbschema;
              adjustToExistingIndexNames(db, oldSchema, idbUpgradeTrans);
              adjustToExistingIndexNames(db, newSchema, idbUpgradeTrans);
              globalSchema = db._dbSchema = newSchema;
              var diff = getSchemaDiff(oldSchema, newSchema);
              diff.add.forEach(function(tuple) {
                createTable(idbUpgradeTrans, tuple[0], tuple[1].primKey, tuple[1].indexes);
              });
              diff.change.forEach(function(change) {
                if (change.recreate) {
                  throw new exceptions.Upgrade("Not yet support for changing primary key");
                } else {
                  var store_1 = idbUpgradeTrans.objectStore(change.name);
                  change.add.forEach(function(idx) {
                    return addIndex(store_1, idx);
                  });
                  change.change.forEach(function(idx) {
                    store_1.deleteIndex(idx.name);
                    addIndex(store_1, idx);
                  });
                  change.del.forEach(function(idxName) {
                    return store_1.deleteIndex(idxName);
                  });
                }
              });
              var contentUpgrade = version._cfg.contentUpgrade;
              if (contentUpgrade && version._cfg.version > oldVersion) {
                generateMiddlewareStacks(db, idbUpgradeTrans);
                trans._memoizedTables = {};
                var upgradeSchema_1 = shallowClone(newSchema);
                diff.del.forEach(function(table) {
                  upgradeSchema_1[table] = oldSchema[table];
                });
                removeTablesApi(db, [db.Transaction.prototype]);
                setApiOnPlace(db, [db.Transaction.prototype], keys2(upgradeSchema_1), upgradeSchema_1);
                trans.schema = upgradeSchema_1;
                var contentUpgradeIsAsync_1 = isAsyncFunction(contentUpgrade);
                if (contentUpgradeIsAsync_1) {
                  incrementExpectedAwaits();
                }
                var returnValue_1;
                var promiseFollowed = DexiePromise.follow(function() {
                  returnValue_1 = contentUpgrade(trans);
                  if (returnValue_1) {
                    if (contentUpgradeIsAsync_1) {
                      var decrementor = decrementExpectedAwaits.bind(null, null);
                      returnValue_1.then(decrementor, decrementor);
                    }
                  }
                });
                return returnValue_1 && typeof returnValue_1.then === "function" ? DexiePromise.resolve(returnValue_1) : promiseFollowed.then(function() {
                  return returnValue_1;
                });
              }
            });
            queue.push(function(idbtrans) {
              var newSchema = version._cfg.dbschema;
              deleteRemovedTables(newSchema, idbtrans);
              removeTablesApi(db, [db.Transaction.prototype]);
              setApiOnPlace(db, [db.Transaction.prototype], db._storeNames, db._dbSchema);
              trans.schema = db._dbSchema;
            });
            queue.push(function(idbtrans) {
              if (db.idbdb.objectStoreNames.contains("$meta")) {
                if (Math.ceil(db.idbdb.version / 10) === version._cfg.version) {
                  db.idbdb.deleteObjectStore("$meta");
                  delete db._dbSchema.$meta;
                  db._storeNames = db._storeNames.filter(function(name) {
                    return name !== "$meta";
                  });
                } else {
                  idbtrans.objectStore("$meta").put(version._cfg.version, "version");
                }
              }
            });
          });
          function runQueue() {
            return queue.length ? DexiePromise.resolve(queue.shift()(trans.idbtrans)).then(runQueue) : DexiePromise.resolve();
          }
          return runQueue().then(function() {
            createMissingTables(globalSchema, idbUpgradeTrans);
          });
        }
        function getSchemaDiff(oldSchema, newSchema) {
          var diff = {
            del: [],
            add: [],
            change: []
          };
          var table;
          for (table in oldSchema) {
            if (!newSchema[table])
              diff.del.push(table);
          }
          for (table in newSchema) {
            var oldDef = oldSchema[table], newDef = newSchema[table];
            if (!oldDef) {
              diff.add.push([table, newDef]);
            } else {
              var change = {
                name: table,
                def: newDef,
                recreate: false,
                del: [],
                add: [],
                change: []
              };
              if ("" + (oldDef.primKey.keyPath || "") !== "" + (newDef.primKey.keyPath || "") || oldDef.primKey.auto !== newDef.primKey.auto) {
                change.recreate = true;
                diff.change.push(change);
              } else {
                var oldIndexes = oldDef.idxByName;
                var newIndexes = newDef.idxByName;
                var idxName = void 0;
                for (idxName in oldIndexes) {
                  if (!newIndexes[idxName])
                    change.del.push(idxName);
                }
                for (idxName in newIndexes) {
                  var oldIdx = oldIndexes[idxName], newIdx = newIndexes[idxName];
                  if (!oldIdx)
                    change.add.push(newIdx);
                  else if (oldIdx.src !== newIdx.src)
                    change.change.push(newIdx);
                }
                if (change.del.length > 0 || change.add.length > 0 || change.change.length > 0) {
                  diff.change.push(change);
                }
              }
            }
          }
          return diff;
        }
        function createTable(idbtrans, tableName, primKey, indexes) {
          var store = idbtrans.db.createObjectStore(tableName, primKey.keyPath ? { keyPath: primKey.keyPath, autoIncrement: primKey.auto } : { autoIncrement: primKey.auto });
          indexes.forEach(function(idx) {
            return addIndex(store, idx);
          });
          return store;
        }
        function createMissingTables(newSchema, idbtrans) {
          keys2(newSchema).forEach(function(tableName) {
            if (!idbtrans.db.objectStoreNames.contains(tableName)) {
              if (debug)
                console.debug("Dexie: Creating missing table", tableName);
              createTable(idbtrans, tableName, newSchema[tableName].primKey, newSchema[tableName].indexes);
            }
          });
        }
        function deleteRemovedTables(newSchema, idbtrans) {
          [].slice.call(idbtrans.db.objectStoreNames).forEach(function(storeName) {
            return newSchema[storeName] == null && idbtrans.db.deleteObjectStore(storeName);
          });
        }
        function addIndex(store, idx) {
          store.createIndex(idx.name, idx.keyPath, { unique: idx.unique, multiEntry: idx.multi });
        }
        function buildGlobalSchema(db, idbdb, tmpTrans) {
          var globalSchema = {};
          var dbStoreNames = slice(idbdb.objectStoreNames, 0);
          dbStoreNames.forEach(function(storeName) {
            var store = tmpTrans.objectStore(storeName);
            var keyPath = store.keyPath;
            var primKey = createIndexSpec(nameFromKeyPath(keyPath), keyPath || "", true, false, !!store.autoIncrement, keyPath && typeof keyPath !== "string", true);
            var indexes = [];
            for (var j = 0; j < store.indexNames.length; ++j) {
              var idbindex = store.index(store.indexNames[j]);
              keyPath = idbindex.keyPath;
              var index = createIndexSpec(idbindex.name, keyPath, !!idbindex.unique, !!idbindex.multiEntry, false, keyPath && typeof keyPath !== "string", false);
              indexes.push(index);
            }
            globalSchema[storeName] = createTableSchema(storeName, primKey, indexes);
          });
          return globalSchema;
        }
        function readGlobalSchema(db, idbdb, tmpTrans) {
          db.verno = idbdb.version / 10;
          var globalSchema = db._dbSchema = buildGlobalSchema(db, idbdb, tmpTrans);
          db._storeNames = slice(idbdb.objectStoreNames, 0);
          setApiOnPlace(db, [db._allTables], keys2(globalSchema), globalSchema);
        }
        function verifyInstalledSchema(db, tmpTrans) {
          var installedSchema = buildGlobalSchema(db, db.idbdb, tmpTrans);
          var diff = getSchemaDiff(installedSchema, db._dbSchema);
          return !(diff.add.length || diff.change.some(function(ch) {
            return ch.add.length || ch.change.length;
          }));
        }
        function adjustToExistingIndexNames(db, schema, idbtrans) {
          var storeNames = idbtrans.db.objectStoreNames;
          for (var i = 0; i < storeNames.length; ++i) {
            var storeName = storeNames[i];
            var store = idbtrans.objectStore(storeName);
            db._hasGetAll = "getAll" in store;
            for (var j = 0; j < store.indexNames.length; ++j) {
              var indexName = store.indexNames[j];
              var keyPath = store.index(indexName).keyPath;
              var dexieName = typeof keyPath === "string" ? keyPath : "[" + slice(keyPath).join("+") + "]";
              if (schema[storeName]) {
                var indexSpec = schema[storeName].idxByName[dexieName];
                if (indexSpec) {
                  indexSpec.name = indexName;
                  delete schema[storeName].idxByName[dexieName];
                  schema[storeName].idxByName[indexName] = indexSpec;
                }
              }
            }
          }
          if (typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && _global.WorkerGlobalScope && _global instanceof _global.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) {
            db._hasGetAll = false;
          }
        }
        function parseIndexSyntax(primKeyAndIndexes) {
          return primKeyAndIndexes.split(",").map(function(index, indexNum) {
            var _a2;
            var typeSplit = index.split(":");
            var type2 = (_a2 = typeSplit[1]) === null || _a2 === void 0 ? void 0 : _a2.trim();
            index = typeSplit[0].trim();
            var name = index.replace(/([&*]|\+\+)/g, "");
            var keyPath = /^\[/.test(name) ? name.match(/^\[(.*)\]$/)[1].split("+") : name;
            return createIndexSpec(name, keyPath || null, /\&/.test(index), /\*/.test(index), /\+\+/.test(index), isArray(keyPath), indexNum === 0, type2);
          });
        }
        var Version = (function() {
          function Version2() {
          }
          Version2.prototype._createTableSchema = function(name, primKey, indexes) {
            return createTableSchema(name, primKey, indexes);
          };
          Version2.prototype._parseIndexSyntax = function(primKeyAndIndexes) {
            return parseIndexSyntax(primKeyAndIndexes);
          };
          Version2.prototype._parseStoresSpec = function(stores, outSchema) {
            var _this = this;
            keys2(stores).forEach(function(tableName) {
              if (stores[tableName] !== null) {
                var indexes = _this._parseIndexSyntax(stores[tableName]);
                var primKey = indexes.shift();
                if (!primKey) {
                  throw new exceptions.Schema("Invalid schema for table " + tableName + ": " + stores[tableName]);
                }
                primKey.unique = true;
                if (primKey.multi)
                  throw new exceptions.Schema("Primary key cannot be multiEntry*");
                indexes.forEach(function(idx) {
                  if (idx.auto)
                    throw new exceptions.Schema("Only primary key can be marked as autoIncrement (++)");
                  if (!idx.keyPath)
                    throw new exceptions.Schema("Index must have a name and cannot be an empty string");
                });
                var tblSchema = _this._createTableSchema(tableName, primKey, indexes);
                outSchema[tableName] = tblSchema;
              }
            });
          };
          Version2.prototype.stores = function(stores) {
            var db = this.db;
            this._cfg.storesSource = this._cfg.storesSource ? extend(this._cfg.storesSource, stores) : stores;
            var versions = db._versions;
            var storesSpec = {};
            var dbschema = {};
            versions.forEach(function(version) {
              extend(storesSpec, version._cfg.storesSource);
              dbschema = version._cfg.dbschema = {};
              version._parseStoresSpec(storesSpec, dbschema);
            });
            db._dbSchema = dbschema;
            removeTablesApi(db, [db._allTables, db, db.Transaction.prototype]);
            setApiOnPlace(db, [db._allTables, db, db.Transaction.prototype, this._cfg.tables], keys2(dbschema), dbschema);
            db._storeNames = keys2(dbschema);
            return this;
          };
          Version2.prototype.upgrade = function(upgradeFunction) {
            this._cfg.contentUpgrade = promisableChain(this._cfg.contentUpgrade || nop, upgradeFunction);
            return this;
          };
          return Version2;
        })();
        function createVersionConstructor(db) {
          return makeClassConstructor(Version.prototype, function Version2(versionNumber) {
            this.db = db;
            this._cfg = {
              version: versionNumber,
              storesSource: null,
              dbschema: {},
              tables: {},
              contentUpgrade: null
            };
          });
        }
        function getDbNamesTable(indexedDB2, IDBKeyRange) {
          var dbNamesDB = indexedDB2["_dbNamesDB"];
          if (!dbNamesDB) {
            dbNamesDB = indexedDB2["_dbNamesDB"] = new Dexie$1(DBNAMES_DB, {
              addons: [],
              indexedDB: indexedDB2,
              IDBKeyRange
            });
            dbNamesDB.version(1).stores({ dbnames: "name" });
          }
          return dbNamesDB.table("dbnames");
        }
        function hasDatabasesNative(indexedDB2) {
          return indexedDB2 && typeof indexedDB2.databases === "function";
        }
        function getDatabaseNames(_a2) {
          var indexedDB2 = _a2.indexedDB, IDBKeyRange = _a2.IDBKeyRange;
          return hasDatabasesNative(indexedDB2) ? Promise.resolve(indexedDB2.databases()).then(function(infos) {
            return infos.map(function(info) {
              return info.name;
            }).filter(function(name) {
              return name !== DBNAMES_DB;
            });
          }) : getDbNamesTable(indexedDB2, IDBKeyRange).toCollection().primaryKeys();
        }
        function _onDatabaseCreated(_a2, name) {
          var indexedDB2 = _a2.indexedDB, IDBKeyRange = _a2.IDBKeyRange;
          !hasDatabasesNative(indexedDB2) && name !== DBNAMES_DB && getDbNamesTable(indexedDB2, IDBKeyRange).put({ name }).catch(nop);
        }
        function _onDatabaseDeleted(_a2, name) {
          var indexedDB2 = _a2.indexedDB, IDBKeyRange = _a2.IDBKeyRange;
          !hasDatabasesNative(indexedDB2) && name !== DBNAMES_DB && getDbNamesTable(indexedDB2, IDBKeyRange).delete(name).catch(nop);
        }
        function vip(fn) {
          return newScope(function() {
            PSD.letThrough = true;
            return fn();
          });
        }
        function idbReady() {
          var isSafari = !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent);
          if (!isSafari || !indexedDB.databases)
            return Promise.resolve();
          var intervalId;
          return new Promise(function(resolve) {
            var tryIdb = function() {
              return indexedDB.databases().finally(resolve);
            };
            intervalId = setInterval(tryIdb, 100);
            tryIdb();
          }).finally(function() {
            return clearInterval(intervalId);
          });
        }
        var _a;
        function isEmptyRange(node) {
          return !("from" in node);
        }
        var RangeSet2 = function(fromOrTree, to) {
          if (this) {
            extend(this, arguments.length ? { d: 1, from: fromOrTree, to: arguments.length > 1 ? to : fromOrTree } : { d: 0 });
          } else {
            var rv = new RangeSet2();
            if (fromOrTree && "d" in fromOrTree) {
              extend(rv, fromOrTree);
            }
            return rv;
          }
        };
        props(RangeSet2.prototype, (_a = {
          add: function(rangeSet) {
            mergeRanges2(this, rangeSet);
            return this;
          },
          addKey: function(key) {
            addRange(this, key, key);
            return this;
          },
          addKeys: function(keys3) {
            var _this = this;
            keys3.forEach(function(key) {
              return addRange(_this, key, key);
            });
            return this;
          },
          hasKey: function(key) {
            var node = getRangeSetIterator(this).next(key).value;
            return node && cmp2(node.from, key) <= 0 && cmp2(node.to, key) >= 0;
          }
        }, _a[iteratorSymbol] = function() {
          return getRangeSetIterator(this);
        }, _a));
        function addRange(target, from, to) {
          var diff = cmp2(from, to);
          if (isNaN(diff))
            return;
          if (diff > 0)
            throw RangeError();
          if (isEmptyRange(target))
            return extend(target, { from, to, d: 1 });
          var left = target.l;
          var right = target.r;
          if (cmp2(to, target.from) < 0) {
            left ? addRange(left, from, to) : target.l = { from, to, d: 1, l: null, r: null };
            return rebalance(target);
          }
          if (cmp2(from, target.to) > 0) {
            right ? addRange(right, from, to) : target.r = { from, to, d: 1, l: null, r: null };
            return rebalance(target);
          }
          if (cmp2(from, target.from) < 0) {
            target.from = from;
            target.l = null;
            target.d = right ? right.d + 1 : 1;
          }
          if (cmp2(to, target.to) > 0) {
            target.to = to;
            target.r = null;
            target.d = target.l ? target.l.d + 1 : 1;
          }
          var rightWasCutOff = !target.r;
          if (left && !target.l) {
            mergeRanges2(target, left);
          }
          if (right && rightWasCutOff) {
            mergeRanges2(target, right);
          }
        }
        function mergeRanges2(target, newSet) {
          function _addRangeSet(target2, _a2) {
            var from = _a2.from, to = _a2.to, l = _a2.l, r = _a2.r;
            addRange(target2, from, to);
            if (l)
              _addRangeSet(target2, l);
            if (r)
              _addRangeSet(target2, r);
          }
          if (!isEmptyRange(newSet))
            _addRangeSet(target, newSet);
        }
        function rangesOverlap2(rangeSet1, rangeSet2) {
          var i1 = getRangeSetIterator(rangeSet2);
          var nextResult1 = i1.next();
          if (nextResult1.done)
            return false;
          var a = nextResult1.value;
          var i2 = getRangeSetIterator(rangeSet1);
          var nextResult2 = i2.next(a.from);
          var b = nextResult2.value;
          while (!nextResult1.done && !nextResult2.done) {
            if (cmp2(b.from, a.to) <= 0 && cmp2(b.to, a.from) >= 0)
              return true;
            cmp2(a.from, b.from) < 0 ? a = (nextResult1 = i1.next(b.from)).value : b = (nextResult2 = i2.next(a.from)).value;
          }
          return false;
        }
        function getRangeSetIterator(node) {
          var state2 = isEmptyRange(node) ? null : { s: 0, n: node };
          return {
            next: function(key) {
              var keyProvided = arguments.length > 0;
              while (state2) {
                switch (state2.s) {
                  case 0:
                    state2.s = 1;
                    if (keyProvided) {
                      while (state2.n.l && cmp2(key, state2.n.from) < 0)
                        state2 = { up: state2, n: state2.n.l, s: 1 };
                    } else {
                      while (state2.n.l)
                        state2 = { up: state2, n: state2.n.l, s: 1 };
                    }
                  case 1:
                    state2.s = 2;
                    if (!keyProvided || cmp2(key, state2.n.to) <= 0)
                      return { value: state2.n, done: false };
                  case 2:
                    if (state2.n.r) {
                      state2.s = 3;
                      state2 = { up: state2, n: state2.n.r, s: 0 };
                      continue;
                    }
                  case 3:
                    state2 = state2.up;
                }
              }
              return { done: true };
            }
          };
        }
        function rebalance(target) {
          var _a2, _b;
          var diff = (((_a2 = target.r) === null || _a2 === void 0 ? void 0 : _a2.d) || 0) - (((_b = target.l) === null || _b === void 0 ? void 0 : _b.d) || 0);
          var r = diff > 1 ? "r" : diff < -1 ? "l" : "";
          if (r) {
            var l = r === "r" ? "l" : "r";
            var rootClone = __assign({}, target);
            var oldRootRight = target[r];
            target.from = oldRootRight.from;
            target.to = oldRootRight.to;
            target[r] = oldRootRight[r];
            rootClone[r] = oldRootRight[l];
            target[l] = rootClone;
            rootClone.d = computeDepth(rootClone);
          }
          target.d = computeDepth(target);
        }
        function computeDepth(_a2) {
          var r = _a2.r, l = _a2.l;
          return (r ? l ? Math.max(r.d, l.d) : r.d : l ? l.d : 0) + 1;
        }
        function extendObservabilitySet(target, newSet) {
          keys2(newSet).forEach(function(part) {
            if (target[part])
              mergeRanges2(target[part], newSet[part]);
            else
              target[part] = cloneSimpleObjectTree(newSet[part]);
          });
          return target;
        }
        function obsSetsOverlap(os1, os2) {
          return os1.all || os2.all || Object.keys(os1).some(function(key) {
            return os2[key] && rangesOverlap2(os2[key], os1[key]);
          });
        }
        var cache = {};
        var unsignaledParts = {};
        var isTaskEnqueued = false;
        function signalSubscribersLazily(part, optimistic) {
          extendObservabilitySet(unsignaledParts, part);
          if (!isTaskEnqueued) {
            isTaskEnqueued = true;
            setTimeout(function() {
              isTaskEnqueued = false;
              var parts = unsignaledParts;
              unsignaledParts = {};
              signalSubscribersNow(parts, false);
            }, 0);
          }
        }
        function signalSubscribersNow(updatedParts, deleteAffectedCacheEntries) {
          if (deleteAffectedCacheEntries === void 0) {
            deleteAffectedCacheEntries = false;
          }
          var queriesToSignal = /* @__PURE__ */ new Set();
          if (updatedParts.all) {
            for (var _i = 0, _a2 = Object.values(cache); _i < _a2.length; _i++) {
              var tblCache = _a2[_i];
              collectTableSubscribers(tblCache, updatedParts, queriesToSignal, deleteAffectedCacheEntries);
            }
          } else {
            for (var key in updatedParts) {
              var parts = /^idb\:\/\/(.*)\/(.*)\//.exec(key);
              if (parts) {
                var dbName = parts[1], tableName = parts[2];
                var tblCache = cache["idb://".concat(dbName, "/").concat(tableName)];
                if (tblCache)
                  collectTableSubscribers(tblCache, updatedParts, queriesToSignal, deleteAffectedCacheEntries);
              }
            }
          }
          queriesToSignal.forEach(function(requery) {
            return requery();
          });
        }
        function collectTableSubscribers(tblCache, updatedParts, outQueriesToSignal, deleteAffectedCacheEntries) {
          var updatedEntryLists = [];
          for (var _i = 0, _a2 = Object.entries(tblCache.queries.query); _i < _a2.length; _i++) {
            var _b = _a2[_i], indexName = _b[0], entries2 = _b[1];
            var filteredEntries = [];
            for (var _c = 0, entries_1 = entries2; _c < entries_1.length; _c++) {
              var entry = entries_1[_c];
              if (obsSetsOverlap(updatedParts, entry.obsSet)) {
                entry.subscribers.forEach(function(requery) {
                  return outQueriesToSignal.add(requery);
                });
              } else if (deleteAffectedCacheEntries) {
                filteredEntries.push(entry);
              }
            }
            if (deleteAffectedCacheEntries)
              updatedEntryLists.push([indexName, filteredEntries]);
          }
          if (deleteAffectedCacheEntries) {
            for (var _d = 0, updatedEntryLists_1 = updatedEntryLists; _d < updatedEntryLists_1.length; _d++) {
              var _e = updatedEntryLists_1[_d], indexName = _e[0], filteredEntries = _e[1];
              tblCache.queries.query[indexName] = filteredEntries;
            }
          }
        }
        function dexieOpen(db) {
          var state2 = db._state;
          var indexedDB2 = db._deps.indexedDB;
          if (state2.isBeingOpened || db.idbdb)
            return state2.dbReadyPromise.then(function() {
              return state2.dbOpenError ? rejection(state2.dbOpenError) : db;
            });
          state2.isBeingOpened = true;
          state2.dbOpenError = null;
          state2.openComplete = false;
          var openCanceller = state2.openCanceller;
          var nativeVerToOpen = Math.round(db.verno * 10);
          var schemaPatchMode = false;
          function throwIfCancelled() {
            if (state2.openCanceller !== openCanceller)
              throw new exceptions.DatabaseClosed("db.open() was cancelled");
          }
          var resolveDbReady = state2.dbReadyResolve, upgradeTransaction = null, wasCreated = false;
          var tryOpenDB = function() {
            return new DexiePromise(function(resolve, reject) {
              throwIfCancelled();
              if (!indexedDB2)
                throw new exceptions.MissingAPI();
              var dbName = db.name;
              var req = state2.autoSchema || !nativeVerToOpen ? indexedDB2.open(dbName) : indexedDB2.open(dbName, nativeVerToOpen);
              if (!req)
                throw new exceptions.MissingAPI();
              req.onerror = eventRejectHandler(reject);
              req.onblocked = wrap(db._fireOnBlocked);
              req.onupgradeneeded = wrap(function(e) {
                upgradeTransaction = req.transaction;
                if (state2.autoSchema && !db._options.allowEmptyDB) {
                  req.onerror = preventDefault;
                  upgradeTransaction.abort();
                  req.result.close();
                  var delreq = indexedDB2.deleteDatabase(dbName);
                  delreq.onsuccess = delreq.onerror = wrap(function() {
                    reject(new exceptions.NoSuchDatabase("Database ".concat(dbName, " doesnt exist")));
                  });
                } else {
                  upgradeTransaction.onerror = eventRejectHandler(reject);
                  var oldVer = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion;
                  wasCreated = oldVer < 1;
                  db.idbdb = req.result;
                  if (schemaPatchMode) {
                    patchCurrentVersion(db, upgradeTransaction);
                  }
                  runUpgraders(db, oldVer / 10, upgradeTransaction, reject);
                }
              }, reject);
              req.onsuccess = wrap(function() {
                upgradeTransaction = null;
                var idbdb = db.idbdb = req.result;
                var objectStoreNames = slice(idbdb.objectStoreNames);
                if (objectStoreNames.length > 0)
                  try {
                    var tmpTrans = idbdb.transaction(safariMultiStoreFix(objectStoreNames), "readonly");
                    if (state2.autoSchema)
                      readGlobalSchema(db, idbdb, tmpTrans);
                    else {
                      adjustToExistingIndexNames(db, db._dbSchema, tmpTrans);
                      if (!verifyInstalledSchema(db, tmpTrans) && !schemaPatchMode) {
                        console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this.");
                        idbdb.close();
                        nativeVerToOpen = idbdb.version + 1;
                        schemaPatchMode = true;
                        return resolve(tryOpenDB());
                      }
                    }
                    generateMiddlewareStacks(db, tmpTrans);
                  } catch (e) {
                  }
                connections.push(db);
                idbdb.onversionchange = wrap(function(ev) {
                  state2.vcFired = true;
                  db.on("versionchange").fire(ev);
                });
                idbdb.onclose = wrap(function() {
                  db.close({ disableAutoOpen: false });
                });
                if (wasCreated)
                  _onDatabaseCreated(db._deps, dbName);
                resolve();
              }, reject);
            }).catch(function(err) {
              switch (err === null || err === void 0 ? void 0 : err.name) {
                case "UnknownError":
                  if (state2.PR1398_maxLoop > 0) {
                    state2.PR1398_maxLoop--;
                    console.warn("Dexie: Workaround for Chrome UnknownError on open()");
                    return tryOpenDB();
                  }
                  break;
                case "VersionError":
                  if (nativeVerToOpen > 0) {
                    nativeVerToOpen = 0;
                    return tryOpenDB();
                  }
                  break;
              }
              return DexiePromise.reject(err);
            });
          };
          return DexiePromise.race([
            openCanceller,
            (typeof navigator === "undefined" ? DexiePromise.resolve() : idbReady()).then(tryOpenDB)
          ]).then(function() {
            throwIfCancelled();
            state2.onReadyBeingFired = [];
            return DexiePromise.resolve(vip(function() {
              return db.on.ready.fire(db.vip);
            })).then(function fireRemainders() {
              if (state2.onReadyBeingFired.length > 0) {
                var remainders_1 = state2.onReadyBeingFired.reduce(promisableChain, nop);
                state2.onReadyBeingFired = [];
                return DexiePromise.resolve(vip(function() {
                  return remainders_1(db.vip);
                })).then(fireRemainders);
              }
            });
          }).finally(function() {
            if (state2.openCanceller === openCanceller) {
              state2.onReadyBeingFired = null;
              state2.isBeingOpened = false;
            }
          }).catch(function(err) {
            state2.dbOpenError = err;
            try {
              upgradeTransaction && upgradeTransaction.abort();
            } catch (_a2) {
            }
            if (openCanceller === state2.openCanceller) {
              db._close();
            }
            return rejection(err);
          }).finally(function() {
            state2.openComplete = true;
            resolveDbReady();
          }).then(function() {
            if (wasCreated) {
              var everything_1 = {};
              db.tables.forEach(function(table) {
                table.schema.indexes.forEach(function(idx) {
                  if (idx.name)
                    everything_1["idb://".concat(db.name, "/").concat(table.name, "/").concat(idx.name)] = new RangeSet2(-Infinity, [[[]]]);
                });
                everything_1["idb://".concat(db.name, "/").concat(table.name, "/")] = everything_1["idb://".concat(db.name, "/").concat(table.name, "/:dels")] = new RangeSet2(-Infinity, [[[]]]);
              });
              globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME).fire(everything_1);
              signalSubscribersNow(everything_1, true);
            }
            return db;
          });
        }
        function awaitIterator(iterator) {
          var callNext = function(result) {
            return iterator.next(result);
          }, doThrow = function(error) {
            return iterator.throw(error);
          }, onSuccess = step(callNext), onError = step(doThrow);
          function step(getNext) {
            return function(val) {
              var next = getNext(val), value = next.value;
              return next.done ? value : !value || typeof value.then !== "function" ? isArray(value) ? Promise.all(value).then(onSuccess, onError) : onSuccess(value) : value.then(onSuccess, onError);
            };
          }
          return step(callNext)();
        }
        function extractTransactionArgs(mode, _tableArgs_, scopeFunc) {
          var i = arguments.length;
          if (i < 2)
            throw new exceptions.InvalidArgument("Too few arguments");
          var args = new Array(i - 1);
          while (--i)
            args[i - 1] = arguments[i];
          scopeFunc = args.pop();
          var tables = flatten(args);
          return [mode, tables, scopeFunc];
        }
        function enterTransactionScope(db, mode, storeNames, parentTransaction, scopeFunc) {
          return DexiePromise.resolve().then(function() {
            var transless = PSD.transless || PSD;
            var trans = db._createTransaction(mode, storeNames, db._dbSchema, parentTransaction);
            trans.explicit = true;
            var zoneProps = {
              trans,
              transless
            };
            if (parentTransaction) {
              trans.idbtrans = parentTransaction.idbtrans;
            } else {
              try {
                trans.create();
                trans.idbtrans._explicit = true;
                db._state.PR1398_maxLoop = 3;
              } catch (ex) {
                if (ex.name === errnames.InvalidState && db.isOpen() && --db._state.PR1398_maxLoop > 0) {
                  console.warn("Dexie: Need to reopen db");
                  db.close({ disableAutoOpen: false });
                  return db.open().then(function() {
                    return enterTransactionScope(db, mode, storeNames, null, scopeFunc);
                  });
                }
                return rejection(ex);
              }
            }
            var scopeFuncIsAsync = isAsyncFunction(scopeFunc);
            if (scopeFuncIsAsync) {
              incrementExpectedAwaits();
            }
            var returnValue;
            var promiseFollowed = DexiePromise.follow(function() {
              returnValue = scopeFunc.call(trans, trans);
              if (returnValue) {
                if (scopeFuncIsAsync) {
                  var decrementor = decrementExpectedAwaits.bind(null, null);
                  returnValue.then(decrementor, decrementor);
                } else if (typeof returnValue.next === "function" && typeof returnValue.throw === "function") {
                  returnValue = awaitIterator(returnValue);
                }
              }
            }, zoneProps);
            return (returnValue && typeof returnValue.then === "function" ? DexiePromise.resolve(returnValue).then(function(x) {
              return trans.active ? x : rejection(new exceptions.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : promiseFollowed.then(function() {
              return returnValue;
            })).then(function(x) {
              if (parentTransaction)
                trans._resolve();
              return trans._completion.then(function() {
                return x;
              });
            }).catch(function(e) {
              trans._reject(e);
              return rejection(e);
            });
          });
        }
        function pad(a, value, count) {
          var result = isArray(a) ? a.slice() : [a];
          for (var i = 0; i < count; ++i)
            result.push(value);
          return result;
        }
        function createVirtualIndexMiddleware(down) {
          return __assign(__assign({}, down), { table: function(tableName) {
            var table = down.table(tableName);
            var schema = table.schema;
            var indexLookup = {};
            var allVirtualIndexes = [];
            function addVirtualIndexes(keyPath, keyTail, lowLevelIndex) {
              var keyPathAlias = getKeyPathAlias(keyPath);
              var indexList = indexLookup[keyPathAlias] = indexLookup[keyPathAlias] || [];
              var keyLength = keyPath == null ? 0 : typeof keyPath === "string" ? 1 : keyPath.length;
              var isVirtual = keyTail > 0;
              var virtualIndex = __assign(__assign({}, lowLevelIndex), { name: isVirtual ? "".concat(keyPathAlias, "(virtual-from:").concat(lowLevelIndex.name, ")") : lowLevelIndex.name, lowLevelIndex, isVirtual, keyTail, keyLength, extractKey: getKeyExtractor(keyPath), unique: !isVirtual && lowLevelIndex.unique });
              indexList.push(virtualIndex);
              if (!virtualIndex.isPrimaryKey) {
                allVirtualIndexes.push(virtualIndex);
              }
              if (keyLength > 1) {
                var virtualKeyPath = keyLength === 2 ? keyPath[0] : keyPath.slice(0, keyLength - 1);
                addVirtualIndexes(virtualKeyPath, keyTail + 1, lowLevelIndex);
              }
              indexList.sort(function(a, b) {
                return a.keyTail - b.keyTail;
              });
              return virtualIndex;
            }
            var primaryKey = addVirtualIndexes(schema.primaryKey.keyPath, 0, schema.primaryKey);
            indexLookup[":id"] = [primaryKey];
            for (var _i = 0, _a2 = schema.indexes; _i < _a2.length; _i++) {
              var index = _a2[_i];
              addVirtualIndexes(index.keyPath, 0, index);
            }
            function findBestIndex(keyPath) {
              var result2 = indexLookup[getKeyPathAlias(keyPath)];
              return result2 && result2[0];
            }
            function translateRange(range, keyTail) {
              return {
                type: range.type === 1 ? 2 : range.type,
                lower: pad(range.lower, range.lowerOpen ? down.MAX_KEY : down.MIN_KEY, keyTail),
                lowerOpen: true,
                upper: pad(range.upper, range.upperOpen ? down.MIN_KEY : down.MAX_KEY, keyTail),
                upperOpen: true
              };
            }
            function translateRequest(req) {
              var index2 = req.query.index;
              return index2.isVirtual ? __assign(__assign({}, req), { query: {
                index: index2.lowLevelIndex,
                range: translateRange(req.query.range, index2.keyTail)
              } }) : req;
            }
            var result = __assign(__assign({}, table), { schema: __assign(__assign({}, schema), { primaryKey, indexes: allVirtualIndexes, getIndexByKeyPath: findBestIndex }), count: function(req) {
              return table.count(translateRequest(req));
            }, query: function(req) {
              return table.query(translateRequest(req));
            }, openCursor: function(req) {
              var _a3 = req.query.index, keyTail = _a3.keyTail, isVirtual = _a3.isVirtual, keyLength = _a3.keyLength;
              if (!isVirtual)
                return table.openCursor(req);
              function createVirtualCursor(cursor) {
                function _continue(key) {
                  key != null ? cursor.continue(pad(key, req.reverse ? down.MAX_KEY : down.MIN_KEY, keyTail)) : req.unique ? cursor.continue(cursor.key.slice(0, keyLength).concat(req.reverse ? down.MIN_KEY : down.MAX_KEY, keyTail)) : cursor.continue();
                }
                var virtualCursor = Object.create(cursor, {
                  continue: { value: _continue },
                  continuePrimaryKey: {
                    value: function(key, primaryKey2) {
                      cursor.continuePrimaryKey(pad(key, down.MAX_KEY, keyTail), primaryKey2);
                    }
                  },
                  primaryKey: {
                    get: function() {
                      return cursor.primaryKey;
                    }
                  },
                  key: {
                    get: function() {
                      var key = cursor.key;
                      return keyLength === 1 ? key[0] : key.slice(0, keyLength);
                    }
                  },
                  value: {
                    get: function() {
                      return cursor.value;
                    }
                  }
                });
                return virtualCursor;
              }
              return table.openCursor(translateRequest(req)).then(function(cursor) {
                return cursor && createVirtualCursor(cursor);
              });
            } });
            return result;
          } });
        }
        var virtualIndexMiddleware = {
          stack: "dbcore",
          name: "VirtualIndexMiddleware",
          level: 1,
          create: createVirtualIndexMiddleware
        };
        function getObjectDiff(a, b, rv, prfx) {
          rv = rv || {};
          prfx = prfx || "";
          keys2(a).forEach(function(prop) {
            if (!hasOwn(b, prop)) {
              rv[prfx + prop] = void 0;
            } else {
              var ap = a[prop], bp = b[prop];
              if (typeof ap === "object" && typeof bp === "object" && ap && bp) {
                var apTypeName = toStringTag(ap);
                var bpTypeName = toStringTag(bp);
                if (apTypeName !== bpTypeName) {
                  rv[prfx + prop] = b[prop];
                } else if (apTypeName === "Object") {
                  getObjectDiff(ap, bp, rv, prfx + prop + ".");
                } else if (ap !== bp) {
                  rv[prfx + prop] = b[prop];
                }
              } else if (ap !== bp)
                rv[prfx + prop] = b[prop];
            }
          });
          keys2(b).forEach(function(prop) {
            if (!hasOwn(a, prop)) {
              rv[prfx + prop] = b[prop];
            }
          });
          return rv;
        }
        function getEffectiveKeys(primaryKey, req) {
          if (req.type === "delete")
            return req.keys;
          return req.keys || req.values.map(primaryKey.extractKey);
        }
        var hooksMiddleware = {
          stack: "dbcore",
          name: "HooksMiddleware",
          level: 2,
          create: function(downCore) {
            return __assign(__assign({}, downCore), { table: function(tableName) {
              var downTable = downCore.table(tableName);
              var primaryKey = downTable.schema.primaryKey;
              var tableMiddleware = __assign(__assign({}, downTable), { mutate: function(req) {
                var dxTrans = PSD.trans;
                var _a2 = dxTrans.table(tableName).hook, deleting = _a2.deleting, creating = _a2.creating, updating = _a2.updating;
                switch (req.type) {
                  case "add":
                    if (creating.fire === nop)
                      break;
                    return dxTrans._promise("readwrite", function() {
                      return addPutOrDelete(req);
                    }, true);
                  case "put":
                    if (creating.fire === nop && updating.fire === nop)
                      break;
                    return dxTrans._promise("readwrite", function() {
                      return addPutOrDelete(req);
                    }, true);
                  case "delete":
                    if (deleting.fire === nop)
                      break;
                    return dxTrans._promise("readwrite", function() {
                      return addPutOrDelete(req);
                    }, true);
                  case "deleteRange":
                    if (deleting.fire === nop)
                      break;
                    return dxTrans._promise("readwrite", function() {
                      return deleteRange(req);
                    }, true);
                }
                return downTable.mutate(req);
                function addPutOrDelete(req2) {
                  var dxTrans2 = PSD.trans;
                  var keys3 = req2.keys || getEffectiveKeys(primaryKey, req2);
                  if (!keys3)
                    throw new Error("Keys missing");
                  req2 = req2.type === "add" || req2.type === "put" ? __assign(__assign({}, req2), { keys: keys3 }) : __assign({}, req2);
                  if (req2.type !== "delete")
                    req2.values = __spreadArray([], req2.values, true);
                  if (req2.keys)
                    req2.keys = __spreadArray([], req2.keys, true);
                  return getExistingValues(downTable, req2, keys3).then(function(existingValues) {
                    var contexts = keys3.map(function(key, i) {
                      var existingValue = existingValues[i];
                      var ctx = { onerror: null, onsuccess: null };
                      if (req2.type === "delete") {
                        deleting.fire.call(ctx, key, existingValue, dxTrans2);
                      } else if (req2.type === "add" || existingValue === void 0) {
                        var generatedPrimaryKey = creating.fire.call(ctx, key, req2.values[i], dxTrans2);
                        if (key == null && generatedPrimaryKey != null) {
                          key = generatedPrimaryKey;
                          req2.keys[i] = key;
                          if (!primaryKey.outbound) {
                            setByKeyPath(req2.values[i], primaryKey.keyPath, key);
                          }
                        }
                      } else {
                        var objectDiff = getObjectDiff(existingValue, req2.values[i]);
                        var additionalChanges_1 = updating.fire.call(ctx, objectDiff, key, existingValue, dxTrans2);
                        if (additionalChanges_1) {
                          var requestedValue_1 = req2.values[i];
                          Object.keys(additionalChanges_1).forEach(function(keyPath) {
                            if (hasOwn(requestedValue_1, keyPath)) {
                              requestedValue_1[keyPath] = additionalChanges_1[keyPath];
                            } else {
                              setByKeyPath(requestedValue_1, keyPath, additionalChanges_1[keyPath]);
                            }
                          });
                        }
                      }
                      return ctx;
                    });
                    return downTable.mutate(req2).then(function(_a3) {
                      var failures = _a3.failures, results = _a3.results, numFailures = _a3.numFailures, lastResult = _a3.lastResult;
                      for (var i = 0; i < keys3.length; ++i) {
                        var primKey = results ? results[i] : keys3[i];
                        var ctx = contexts[i];
                        if (primKey == null) {
                          ctx.onerror && ctx.onerror(failures[i]);
                        } else {
                          ctx.onsuccess && ctx.onsuccess(
                            req2.type === "put" && existingValues[i] ? req2.values[i] : primKey
                          );
                        }
                      }
                      return { failures, results, numFailures, lastResult };
                    }).catch(function(error) {
                      contexts.forEach(function(ctx) {
                        return ctx.onerror && ctx.onerror(error);
                      });
                      return Promise.reject(error);
                    });
                  });
                }
                function deleteRange(req2) {
                  return deleteNextChunk(req2.trans, req2.range, 1e4);
                }
                function deleteNextChunk(trans, range, limit) {
                  return downTable.query({ trans, values: false, query: { index: primaryKey, range }, limit }).then(function(_a3) {
                    var result = _a3.result;
                    return addPutOrDelete({ type: "delete", keys: result, trans }).then(function(res) {
                      if (res.numFailures > 0)
                        return Promise.reject(res.failures[0]);
                      if (result.length < limit) {
                        return { failures: [], numFailures: 0, lastResult: void 0 };
                      } else {
                        return deleteNextChunk(trans, __assign(__assign({}, range), { lower: result[result.length - 1], lowerOpen: true }), limit);
                      }
                    });
                  });
                }
              } });
              return tableMiddleware;
            } });
          }
        };
        function getExistingValues(table, req, effectiveKeys) {
          return req.type === "add" ? Promise.resolve([]) : table.getMany({ trans: req.trans, keys: effectiveKeys, cache: "immutable" });
        }
        function getFromTransactionCache(keys3, cache2, clone) {
          try {
            if (!cache2)
              return null;
            if (cache2.keys.length < keys3.length)
              return null;
            var result = [];
            for (var i = 0, j = 0; i < cache2.keys.length && j < keys3.length; ++i) {
              if (cmp2(cache2.keys[i], keys3[j]) !== 0)
                continue;
              result.push(clone ? deepClone(cache2.values[i]) : cache2.values[i]);
              ++j;
            }
            return result.length === keys3.length ? result : null;
          } catch (_a2) {
            return null;
          }
        }
        var cacheExistingValuesMiddleware = {
          stack: "dbcore",
          level: -1,
          create: function(core) {
            return {
              table: function(tableName) {
                var table = core.table(tableName);
                return __assign(__assign({}, table), { getMany: function(req) {
                  if (!req.cache) {
                    return table.getMany(req);
                  }
                  var cachedResult = getFromTransactionCache(req.keys, req.trans["_cache"], req.cache === "clone");
                  if (cachedResult) {
                    return DexiePromise.resolve(cachedResult);
                  }
                  return table.getMany(req).then(function(res) {
                    req.trans["_cache"] = {
                      keys: req.keys,
                      values: req.cache === "clone" ? deepClone(res) : res
                    };
                    return res;
                  });
                }, mutate: function(req) {
                  if (req.type !== "add")
                    req.trans["_cache"] = null;
                  return table.mutate(req);
                } });
              }
            };
          }
        };
        function isCachableContext(ctx, table) {
          return ctx.trans.mode === "readonly" && !!ctx.subscr && !ctx.trans.explicit && ctx.trans.db._options.cache !== "disabled" && !table.schema.primaryKey.outbound;
        }
        function isCachableRequest(type2, req) {
          switch (type2) {
            case "query":
              return req.values && !req.unique;
            case "get":
              return false;
            case "getMany":
              return false;
            case "count":
              return false;
            case "openCursor":
              return false;
          }
        }
        var observabilityMiddleware = {
          stack: "dbcore",
          level: 0,
          name: "Observability",
          create: function(core) {
            var dbName = core.schema.name;
            var FULL_RANGE = new RangeSet2(core.MIN_KEY, core.MAX_KEY);
            return __assign(__assign({}, core), { transaction: function(stores, mode, options) {
              if (PSD.subscr && mode !== "readonly") {
                throw new exceptions.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(PSD.querier));
              }
              return core.transaction(stores, mode, options);
            }, table: function(tableName) {
              var table = core.table(tableName);
              var schema = table.schema;
              var primaryKey = schema.primaryKey, indexes = schema.indexes;
              var extractKey = primaryKey.extractKey, outbound = primaryKey.outbound;
              var indexesWithAutoIncPK = primaryKey.autoIncrement && indexes.filter(function(index) {
                return index.compound && index.keyPath.includes(primaryKey.keyPath);
              });
              var tableClone = __assign(__assign({}, table), { mutate: function(req) {
                var _a2, _b;
                var trans = req.trans;
                var mutatedParts = req.mutatedParts || (req.mutatedParts = {});
                var getRangeSet = function(indexName) {
                  var part = "idb://".concat(dbName, "/").concat(tableName, "/").concat(indexName);
                  return mutatedParts[part] || (mutatedParts[part] = new RangeSet2());
                };
                var pkRangeSet = getRangeSet("");
                var delsRangeSet = getRangeSet(":dels");
                var type2 = req.type;
                var _c = req.type === "deleteRange" ? [req.range] : req.type === "delete" ? [req.keys] : req.values.length < 50 ? [getEffectiveKeys(primaryKey, req).filter(function(id) {
                  return id;
                }), req.values] : [], keys3 = _c[0], newObjs = _c[1];
                var oldCache = req.trans["_cache"];
                if (isArray(keys3)) {
                  pkRangeSet.addKeys(keys3);
                  var oldObjs = type2 === "delete" || keys3.length === newObjs.length ? getFromTransactionCache(keys3, oldCache) : null;
                  if (!oldObjs) {
                    delsRangeSet.addKeys(keys3);
                  }
                  if (oldObjs || newObjs) {
                    trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs);
                  }
                } else if (keys3) {
                  var range = {
                    from: (_a2 = keys3.lower) !== null && _a2 !== void 0 ? _a2 : core.MIN_KEY,
                    to: (_b = keys3.upper) !== null && _b !== void 0 ? _b : core.MAX_KEY
                  };
                  delsRangeSet.add(range);
                  pkRangeSet.add(range);
                } else {
                  pkRangeSet.add(FULL_RANGE);
                  delsRangeSet.add(FULL_RANGE);
                  schema.indexes.forEach(function(idx) {
                    return getRangeSet(idx.name).add(FULL_RANGE);
                  });
                }
                return table.mutate(req).then(function(res) {
                  if (keys3 && (req.type === "add" || req.type === "put")) {
                    pkRangeSet.addKeys(res.results);
                    if (indexesWithAutoIncPK) {
                      indexesWithAutoIncPK.forEach(function(idx) {
                        var idxVals = req.values.map(function(v) {
                          return idx.extractKey(v);
                        });
                        var pkPos = idx.keyPath.findIndex(function(prop) {
                          return prop === primaryKey.keyPath;
                        });
                        for (var i = 0, len = res.results.length; i < len; ++i) {
                          idxVals[i][pkPos] = res.results[i];
                        }
                        getRangeSet(idx.name).addKeys(idxVals);
                      });
                    }
                  }
                  trans.mutatedParts = extendObservabilitySet(trans.mutatedParts || {}, mutatedParts);
                  return res;
                });
              } });
              var getRange = function(_a2) {
                var _b, _c;
                var _d = _a2.query, index = _d.index, range = _d.range;
                return [
                  index,
                  new RangeSet2((_b = range.lower) !== null && _b !== void 0 ? _b : core.MIN_KEY, (_c = range.upper) !== null && _c !== void 0 ? _c : core.MAX_KEY)
                ];
              };
              var readSubscribers = {
                get: function(req) {
                  return [primaryKey, new RangeSet2(req.key)];
                },
                getMany: function(req) {
                  return [primaryKey, new RangeSet2().addKeys(req.keys)];
                },
                count: getRange,
                query: getRange,
                openCursor: getRange
              };
              keys2(readSubscribers).forEach(function(method) {
                tableClone[method] = function(req) {
                  var subscr = PSD.subscr;
                  var isLiveQuery = !!subscr;
                  var cachable = isCachableContext(PSD, table) && isCachableRequest(method, req);
                  var obsSet = cachable ? req.obsSet = {} : subscr;
                  if (isLiveQuery) {
                    var getRangeSet = function(indexName) {
                      var part = "idb://".concat(dbName, "/").concat(tableName, "/").concat(indexName);
                      return obsSet[part] || (obsSet[part] = new RangeSet2());
                    };
                    var pkRangeSet_1 = getRangeSet("");
                    var delsRangeSet_1 = getRangeSet(":dels");
                    var _a2 = readSubscribers[method](req), queriedIndex = _a2[0], queriedRanges = _a2[1];
                    if (method === "query" && queriedIndex.isPrimaryKey && !req.values) {
                      delsRangeSet_1.add(queriedRanges);
                    } else {
                      getRangeSet(queriedIndex.name || "").add(queriedRanges);
                    }
                    if (!queriedIndex.isPrimaryKey) {
                      if (method === "count") {
                        delsRangeSet_1.add(FULL_RANGE);
                      } else {
                        var keysPromise_1 = method === "query" && outbound && req.values && table.query(__assign(__assign({}, req), { values: false }));
                        return table[method].apply(this, arguments).then(function(res) {
                          if (method === "query") {
                            if (outbound && req.values) {
                              return keysPromise_1.then(function(_a3) {
                                var resultingKeys = _a3.result;
                                pkRangeSet_1.addKeys(resultingKeys);
                                return res;
                              });
                            }
                            var pKeys = req.values ? res.result.map(extractKey) : res.result;
                            if (req.values) {
                              pkRangeSet_1.addKeys(pKeys);
                            } else {
                              delsRangeSet_1.addKeys(pKeys);
                            }
                          } else if (method === "openCursor") {
                            var cursor_1 = res;
                            var wantValues_1 = req.values;
                            return cursor_1 && Object.create(cursor_1, {
                              key: {
                                get: function() {
                                  delsRangeSet_1.addKey(cursor_1.primaryKey);
                                  return cursor_1.key;
                                }
                              },
                              primaryKey: {
                                get: function() {
                                  var pkey = cursor_1.primaryKey;
                                  delsRangeSet_1.addKey(pkey);
                                  return pkey;
                                }
                              },
                              value: {
                                get: function() {
                                  wantValues_1 && pkRangeSet_1.addKey(cursor_1.primaryKey);
                                  return cursor_1.value;
                                }
                              }
                            });
                          }
                          return res;
                        });
                      }
                    }
                  }
                  return table[method].apply(this, arguments);
                };
              });
              return tableClone;
            } });
          }
        };
        function trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs) {
          function addAffectedIndex(ix) {
            var rangeSet = getRangeSet(ix.name || "");
            function extractKey(obj) {
              return obj != null ? ix.extractKey(obj) : null;
            }
            var addKeyOrKeys = function(key) {
              return ix.multiEntry && isArray(key) ? key.forEach(function(key2) {
                return rangeSet.addKey(key2);
              }) : rangeSet.addKey(key);
            };
            (oldObjs || newObjs).forEach(function(_, i) {
              var oldKey = oldObjs && extractKey(oldObjs[i]);
              var newKey = newObjs && extractKey(newObjs[i]);
              if (cmp2(oldKey, newKey) !== 0) {
                if (oldKey != null)
                  addKeyOrKeys(oldKey);
                if (newKey != null)
                  addKeyOrKeys(newKey);
              }
            });
          }
          schema.indexes.forEach(addAffectedIndex);
        }
        function adjustOptimisticFromFailures(tblCache, req, res) {
          if (res.numFailures === 0)
            return req;
          if (req.type === "deleteRange") {
            return null;
          }
          var numBulkOps = req.keys ? req.keys.length : "values" in req && req.values ? req.values.length : 1;
          if (res.numFailures === numBulkOps) {
            return null;
          }
          var clone = __assign({}, req);
          if (isArray(clone.keys)) {
            clone.keys = clone.keys.filter(function(_, i) {
              return !(i in res.failures);
            });
          }
          if ("values" in clone && isArray(clone.values)) {
            clone.values = clone.values.filter(function(_, i) {
              return !(i in res.failures);
            });
          }
          return clone;
        }
        function isAboveLower(key, range) {
          return range.lower === void 0 ? true : range.lowerOpen ? cmp2(key, range.lower) > 0 : cmp2(key, range.lower) >= 0;
        }
        function isBelowUpper(key, range) {
          return range.upper === void 0 ? true : range.upperOpen ? cmp2(key, range.upper) < 0 : cmp2(key, range.upper) <= 0;
        }
        function isWithinRange(key, range) {
          return isAboveLower(key, range) && isBelowUpper(key, range);
        }
        function applyOptimisticOps(result, req, ops, table, cacheEntry, immutable) {
          if (!ops || ops.length === 0)
            return result;
          var index = req.query.index;
          var multiEntry = index.multiEntry;
          var queryRange = req.query.range;
          var primaryKey = table.schema.primaryKey;
          var extractPrimKey = primaryKey.extractKey;
          var extractIndex = index.extractKey;
          var extractLowLevelIndex = (index.lowLevelIndex || index).extractKey;
          var finalResult = ops.reduce(function(result2, op) {
            var modifedResult = result2;
            var includedValues = [];
            if (op.type === "add" || op.type === "put") {
              var includedPKs = new RangeSet2();
              for (var i = op.values.length - 1; i >= 0; --i) {
                var value = op.values[i];
                var pk = extractPrimKey(value);
                if (includedPKs.hasKey(pk))
                  continue;
                var key = extractIndex(value);
                if (multiEntry && isArray(key) ? key.some(function(k) {
                  return isWithinRange(k, queryRange);
                }) : isWithinRange(key, queryRange)) {
                  includedPKs.addKey(pk);
                  includedValues.push(value);
                }
              }
            }
            switch (op.type) {
              case "add": {
                var existingKeys_1 = new RangeSet2().addKeys(req.values ? result2.map(function(v) {
                  return extractPrimKey(v);
                }) : result2);
                modifedResult = result2.concat(req.values ? includedValues.filter(function(v) {
                  var key2 = extractPrimKey(v);
                  if (existingKeys_1.hasKey(key2))
                    return false;
                  existingKeys_1.addKey(key2);
                  return true;
                }) : includedValues.map(function(v) {
                  return extractPrimKey(v);
                }).filter(function(k) {
                  if (existingKeys_1.hasKey(k))
                    return false;
                  existingKeys_1.addKey(k);
                  return true;
                }));
                break;
              }
              case "put": {
                var keySet_1 = new RangeSet2().addKeys(op.values.map(function(v) {
                  return extractPrimKey(v);
                }));
                modifedResult = result2.filter(
                  function(item) {
                    return !keySet_1.hasKey(req.values ? extractPrimKey(item) : item);
                  }
                ).concat(
                  req.values ? includedValues : includedValues.map(function(v) {
                    return extractPrimKey(v);
                  })
                );
                break;
              }
              case "delete":
                var keysToDelete_1 = new RangeSet2().addKeys(op.keys);
                modifedResult = result2.filter(function(item) {
                  return !keysToDelete_1.hasKey(req.values ? extractPrimKey(item) : item);
                });
                break;
              case "deleteRange":
                var range_1 = op.range;
                modifedResult = result2.filter(function(item) {
                  return !isWithinRange(extractPrimKey(item), range_1);
                });
                break;
            }
            return modifedResult;
          }, result);
          if (finalResult === result)
            return result;
          finalResult.sort(function(a, b) {
            return cmp2(extractLowLevelIndex(a), extractLowLevelIndex(b)) || cmp2(extractPrimKey(a), extractPrimKey(b));
          });
          if (req.limit && req.limit < Infinity) {
            if (finalResult.length > req.limit) {
              finalResult.length = req.limit;
            } else if (result.length === req.limit && finalResult.length < req.limit) {
              cacheEntry.dirty = true;
            }
          }
          return immutable ? Object.freeze(finalResult) : finalResult;
        }
        function areRangesEqual(r1, r2) {
          return cmp2(r1.lower, r2.lower) === 0 && cmp2(r1.upper, r2.upper) === 0 && !!r1.lowerOpen === !!r2.lowerOpen && !!r1.upperOpen === !!r2.upperOpen;
        }
        function compareLowers(lower1, lower2, lowerOpen1, lowerOpen2) {
          if (lower1 === void 0)
            return lower2 !== void 0 ? -1 : 0;
          if (lower2 === void 0)
            return 1;
          var c = cmp2(lower1, lower2);
          if (c === 0) {
            if (lowerOpen1 && lowerOpen2)
              return 0;
            if (lowerOpen1)
              return 1;
            if (lowerOpen2)
              return -1;
          }
          return c;
        }
        function compareUppers(upper1, upper2, upperOpen1, upperOpen2) {
          if (upper1 === void 0)
            return upper2 !== void 0 ? 1 : 0;
          if (upper2 === void 0)
            return -1;
          var c = cmp2(upper1, upper2);
          if (c === 0) {
            if (upperOpen1 && upperOpen2)
              return 0;
            if (upperOpen1)
              return -1;
            if (upperOpen2)
              return 1;
          }
          return c;
        }
        function isSuperRange(r1, r2) {
          return compareLowers(r1.lower, r2.lower, r1.lowerOpen, r2.lowerOpen) <= 0 && compareUppers(r1.upper, r2.upper, r1.upperOpen, r2.upperOpen) >= 0;
        }
        function findCompatibleQuery(dbName, tableName, type2, req) {
          var tblCache = cache["idb://".concat(dbName, "/").concat(tableName)];
          if (!tblCache)
            return [];
          var queries = tblCache.queries[type2];
          if (!queries)
            return [null, false, tblCache, null];
          var indexName = req.query ? req.query.index.name : null;
          var entries2 = queries[indexName || ""];
          if (!entries2)
            return [null, false, tblCache, null];
          switch (type2) {
            case "query":
              var equalEntry = entries2.find(function(entry) {
                return entry.req.limit === req.limit && entry.req.values === req.values && areRangesEqual(entry.req.query.range, req.query.range);
              });
              if (equalEntry)
                return [
                  equalEntry,
                  true,
                  tblCache,
                  entries2
                ];
              var superEntry = entries2.find(function(entry) {
                var limit = "limit" in entry.req ? entry.req.limit : Infinity;
                return limit >= req.limit && (req.values ? entry.req.values : true) && isSuperRange(entry.req.query.range, req.query.range);
              });
              return [superEntry, false, tblCache, entries2];
            case "count":
              var countQuery = entries2.find(function(entry) {
                return areRangesEqual(entry.req.query.range, req.query.range);
              });
              return [countQuery, !!countQuery, tblCache, entries2];
          }
        }
        function subscribeToCacheEntry(cacheEntry, container, requery, signal) {
          cacheEntry.subscribers.add(requery);
          signal.addEventListener("abort", function() {
            cacheEntry.subscribers.delete(requery);
            if (cacheEntry.subscribers.size === 0) {
              enqueForDeletion(cacheEntry, container);
            }
          });
        }
        function enqueForDeletion(cacheEntry, container) {
          setTimeout(function() {
            if (cacheEntry.subscribers.size === 0) {
              delArrayItem(container, cacheEntry);
            }
          }, 3e3);
        }
        var cacheMiddleware = {
          stack: "dbcore",
          level: 0,
          name: "Cache",
          create: function(core) {
            var dbName = core.schema.name;
            var coreMW = __assign(__assign({}, core), { transaction: function(stores, mode, options) {
              var idbtrans = core.transaction(stores, mode, options);
              if (mode === "readwrite") {
                var ac_1 = new AbortController();
                var signal = ac_1.signal;
                var endTransaction = function(wasCommitted) {
                  return function() {
                    ac_1.abort();
                    if (mode === "readwrite") {
                      var affectedSubscribers_1 = /* @__PURE__ */ new Set();
                      for (var _i = 0, stores_1 = stores; _i < stores_1.length; _i++) {
                        var storeName = stores_1[_i];
                        var tblCache = cache["idb://".concat(dbName, "/").concat(storeName)];
                        if (tblCache) {
                          var table = core.table(storeName);
                          var ops = tblCache.optimisticOps.filter(function(op) {
                            return op.trans === idbtrans;
                          });
                          if (idbtrans._explicit && wasCommitted && idbtrans.mutatedParts) {
                            for (var _a2 = 0, _b = Object.values(tblCache.queries.query); _a2 < _b.length; _a2++) {
                              var entries2 = _b[_a2];
                              for (var _c = 0, _d = entries2.slice(); _c < _d.length; _c++) {
                                var entry = _d[_c];
                                if (obsSetsOverlap(entry.obsSet, idbtrans.mutatedParts)) {
                                  delArrayItem(entries2, entry);
                                  entry.subscribers.forEach(function(requery) {
                                    return affectedSubscribers_1.add(requery);
                                  });
                                }
                              }
                            }
                          } else if (ops.length > 0) {
                            tblCache.optimisticOps = tblCache.optimisticOps.filter(function(op) {
                              return op.trans !== idbtrans;
                            });
                            for (var _e = 0, _f = Object.values(tblCache.queries.query); _e < _f.length; _e++) {
                              var entries2 = _f[_e];
                              for (var _g = 0, _h = entries2.slice(); _g < _h.length; _g++) {
                                var entry = _h[_g];
                                if (entry.res != null && idbtrans.mutatedParts) {
                                  if (wasCommitted && !entry.dirty) {
                                    var freezeResults = Object.isFrozen(entry.res);
                                    var modRes = applyOptimisticOps(entry.res, entry.req, ops, table, entry, freezeResults);
                                    if (entry.dirty) {
                                      delArrayItem(entries2, entry);
                                      entry.subscribers.forEach(function(requery) {
                                        return affectedSubscribers_1.add(requery);
                                      });
                                    } else if (modRes !== entry.res) {
                                      entry.res = modRes;
                                      entry.promise = DexiePromise.resolve({ result: modRes });
                                    }
                                  } else {
                                    if (entry.dirty) {
                                      delArrayItem(entries2, entry);
                                    }
                                    entry.subscribers.forEach(function(requery) {
                                      return affectedSubscribers_1.add(requery);
                                    });
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      affectedSubscribers_1.forEach(function(requery) {
                        return requery();
                      });
                    }
                  };
                };
                idbtrans.addEventListener("abort", endTransaction(false), {
                  signal
                });
                idbtrans.addEventListener("error", endTransaction(false), {
                  signal
                });
                idbtrans.addEventListener("complete", endTransaction(true), {
                  signal
                });
              }
              return idbtrans;
            }, table: function(tableName) {
              var downTable = core.table(tableName);
              var primKey = downTable.schema.primaryKey;
              var tableMW = __assign(__assign({}, downTable), { mutate: function(req) {
                var trans = PSD.trans;
                if (primKey.outbound || trans.db._options.cache === "disabled" || trans.explicit || trans.idbtrans.mode !== "readwrite") {
                  return downTable.mutate(req);
                }
                var tblCache = cache["idb://".concat(dbName, "/").concat(tableName)];
                if (!tblCache)
                  return downTable.mutate(req);
                var promise = downTable.mutate(req);
                if ((req.type === "add" || req.type === "put") && (req.values.length >= 50 || getEffectiveKeys(primKey, req).some(function(key) {
                  return key == null;
                }))) {
                  promise.then(function(res) {
                    var reqWithResolvedKeys = __assign(__assign({}, req), { values: req.values.map(function(value, i) {
                      var _a2;
                      if (res.failures[i])
                        return value;
                      var valueWithKey = ((_a2 = primKey.keyPath) === null || _a2 === void 0 ? void 0 : _a2.includes(".")) ? deepClone(value) : __assign({}, value);
                      setByKeyPath(valueWithKey, primKey.keyPath, res.results[i]);
                      return valueWithKey;
                    }) });
                    var adjustedReq = adjustOptimisticFromFailures(tblCache, reqWithResolvedKeys, res);
                    tblCache.optimisticOps.push(adjustedReq);
                    queueMicrotask(function() {
                      return req.mutatedParts && signalSubscribersLazily(req.mutatedParts);
                    });
                  });
                } else {
                  tblCache.optimisticOps.push(req);
                  req.mutatedParts && signalSubscribersLazily(req.mutatedParts);
                  promise.then(function(res) {
                    if (res.numFailures > 0) {
                      delArrayItem(tblCache.optimisticOps, req);
                      var adjustedReq = adjustOptimisticFromFailures(tblCache, req, res);
                      if (adjustedReq) {
                        tblCache.optimisticOps.push(adjustedReq);
                      }
                      req.mutatedParts && signalSubscribersLazily(req.mutatedParts);
                    }
                  });
                  promise.catch(function() {
                    delArrayItem(tblCache.optimisticOps, req);
                    req.mutatedParts && signalSubscribersLazily(req.mutatedParts);
                  });
                }
                return promise;
              }, query: function(req) {
                var _a2;
                if (!isCachableContext(PSD, downTable) || !isCachableRequest("query", req))
                  return downTable.query(req);
                var freezeResults = ((_a2 = PSD.trans) === null || _a2 === void 0 ? void 0 : _a2.db._options.cache) === "immutable";
                var _b = PSD, requery = _b.requery, signal = _b.signal;
                var _c = findCompatibleQuery(dbName, tableName, "query", req), cacheEntry = _c[0], exactMatch = _c[1], tblCache = _c[2], container = _c[3];
                if (cacheEntry && exactMatch) {
                  cacheEntry.obsSet = req.obsSet;
                } else {
                  var promise = downTable.query(req).then(function(res) {
                    var result = res.result;
                    if (cacheEntry)
                      cacheEntry.res = result;
                    if (freezeResults) {
                      for (var i = 0, l = result.length; i < l; ++i) {
                        Object.freeze(result[i]);
                      }
                      Object.freeze(result);
                    } else {
                      res.result = deepClone(result);
                    }
                    return res;
                  }).catch(function(error) {
                    if (container && cacheEntry)
                      delArrayItem(container, cacheEntry);
                    return Promise.reject(error);
                  });
                  cacheEntry = {
                    obsSet: req.obsSet,
                    promise,
                    subscribers: /* @__PURE__ */ new Set(),
                    type: "query",
                    req,
                    dirty: false
                  };
                  if (container) {
                    container.push(cacheEntry);
                  } else {
                    container = [cacheEntry];
                    if (!tblCache) {
                      tblCache = cache["idb://".concat(dbName, "/").concat(tableName)] = {
                        queries: {
                          query: {},
                          count: {}
                        },
                        objs: /* @__PURE__ */ new Map(),
                        optimisticOps: [],
                        unsignaledParts: {}
                      };
                    }
                    tblCache.queries.query[req.query.index.name || ""] = container;
                  }
                }
                subscribeToCacheEntry(cacheEntry, container, requery, signal);
                return cacheEntry.promise.then(function(res) {
                  return {
                    result: applyOptimisticOps(res.result, req, tblCache === null || tblCache === void 0 ? void 0 : tblCache.optimisticOps, downTable, cacheEntry, freezeResults)
                  };
                });
              } });
              return tableMW;
            } });
            return coreMW;
          }
        };
        function vipify(target, vipDb) {
          return new Proxy(target, {
            get: function(target2, prop, receiver) {
              if (prop === "db")
                return vipDb;
              return Reflect.get(target2, prop, receiver);
            }
          });
        }
        var Dexie$1 = (function() {
          function Dexie3(name, options) {
            var _this = this;
            this._middlewares = {};
            this.verno = 0;
            var deps = Dexie3.dependencies;
            this._options = options = __assign({
              addons: Dexie3.addons,
              autoOpen: true,
              indexedDB: deps.indexedDB,
              IDBKeyRange: deps.IDBKeyRange,
              cache: "cloned"
            }, options);
            this._deps = {
              indexedDB: options.indexedDB,
              IDBKeyRange: options.IDBKeyRange
            };
            var addons = options.addons;
            this._dbSchema = {};
            this._versions = [];
            this._storeNames = [];
            this._allTables = {};
            this.idbdb = null;
            this._novip = this;
            var state2 = {
              dbOpenError: null,
              isBeingOpened: false,
              onReadyBeingFired: null,
              openComplete: false,
              dbReadyResolve: nop,
              dbReadyPromise: null,
              cancelOpen: nop,
              openCanceller: null,
              autoSchema: true,
              PR1398_maxLoop: 3,
              autoOpen: options.autoOpen
            };
            state2.dbReadyPromise = new DexiePromise(function(resolve) {
              state2.dbReadyResolve = resolve;
            });
            state2.openCanceller = new DexiePromise(function(_, reject) {
              state2.cancelOpen = reject;
            });
            this._state = state2;
            this.name = name;
            this.on = Events(this, "populate", "blocked", "versionchange", "close", { ready: [promisableChain, nop] });
            this.once = function(event, callback) {
              var fn = function() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
                }
                _this.on(event).unsubscribe(fn);
                callback.apply(_this, args);
              };
              return _this.on(event, fn);
            };
            this.on.ready.subscribe = override(this.on.ready.subscribe, function(subscribe) {
              return function(subscriber, bSticky) {
                Dexie3.vip(function() {
                  var state3 = _this._state;
                  if (state3.openComplete) {
                    if (!state3.dbOpenError)
                      DexiePromise.resolve().then(subscriber);
                    if (bSticky)
                      subscribe(subscriber);
                  } else if (state3.onReadyBeingFired) {
                    state3.onReadyBeingFired.push(subscriber);
                    if (bSticky)
                      subscribe(subscriber);
                  } else {
                    subscribe(subscriber);
                    var db_1 = _this;
                    if (!bSticky)
                      subscribe(function unsubscribe() {
                        db_1.on.ready.unsubscribe(subscriber);
                        db_1.on.ready.unsubscribe(unsubscribe);
                      });
                  }
                });
              };
            });
            this.Collection = createCollectionConstructor(this);
            this.Table = createTableConstructor(this);
            this.Transaction = createTransactionConstructor(this);
            this.Version = createVersionConstructor(this);
            this.WhereClause = createWhereClauseConstructor(this);
            this.on("versionchange", function(ev) {
              if (ev.newVersion > 0)
                console.warn("Another connection wants to upgrade database '".concat(_this.name, "'. Closing db now to resume the upgrade."));
              else
                console.warn("Another connection wants to delete database '".concat(_this.name, "'. Closing db now to resume the delete request."));
              _this.close({ disableAutoOpen: false });
            });
            this.on("blocked", function(ev) {
              if (!ev.newVersion || ev.newVersion < ev.oldVersion)
                console.warn("Dexie.delete('".concat(_this.name, "') was blocked"));
              else
                console.warn("Upgrade '".concat(_this.name, "' blocked by other connection holding version ").concat(ev.oldVersion / 10));
            });
            this._maxKey = getMaxKey(options.IDBKeyRange);
            this._createTransaction = function(mode, storeNames, dbschema, parentTransaction) {
              return new _this.Transaction(mode, storeNames, dbschema, _this._options.chromeTransactionDurability, parentTransaction);
            };
            this._fireOnBlocked = function(ev) {
              _this.on("blocked").fire(ev);
              connections.filter(function(c) {
                return c.name === _this.name && c !== _this && !c._state.vcFired;
              }).map(function(c) {
                return c.on("versionchange").fire(ev);
              });
            };
            this.use(cacheExistingValuesMiddleware);
            this.use(cacheMiddleware);
            this.use(observabilityMiddleware);
            this.use(virtualIndexMiddleware);
            this.use(hooksMiddleware);
            var vipDB = new Proxy(this, {
              get: function(_, prop, receiver) {
                if (prop === "_vip")
                  return true;
                if (prop === "table")
                  return function(tableName) {
                    return vipify(_this.table(tableName), vipDB);
                  };
                var rv = Reflect.get(_, prop, receiver);
                if (rv instanceof Table)
                  return vipify(rv, vipDB);
                if (prop === "tables")
                  return rv.map(function(t) {
                    return vipify(t, vipDB);
                  });
                if (prop === "_createTransaction")
                  return function() {
                    var tx = rv.apply(this, arguments);
                    return vipify(tx, vipDB);
                  };
                return rv;
              }
            });
            this.vip = vipDB;
            addons.forEach(function(addon) {
              return addon(_this);
            });
          }
          Dexie3.prototype.version = function(versionNumber) {
            if (isNaN(versionNumber) || versionNumber < 0.1)
              throw new exceptions.Type("Given version is not a positive number");
            versionNumber = Math.round(versionNumber * 10) / 10;
            if (this.idbdb || this._state.isBeingOpened)
              throw new exceptions.Schema("Cannot add version when database is open");
            this.verno = Math.max(this.verno, versionNumber);
            var versions = this._versions;
            var versionInstance = versions.filter(function(v) {
              return v._cfg.version === versionNumber;
            })[0];
            if (versionInstance)
              return versionInstance;
            versionInstance = new this.Version(versionNumber);
            versions.push(versionInstance);
            versions.sort(lowerVersionFirst);
            versionInstance.stores({});
            this._state.autoSchema = false;
            return versionInstance;
          };
          Dexie3.prototype._whenReady = function(fn) {
            var _this = this;
            return this.idbdb && (this._state.openComplete || PSD.letThrough || this._vip) ? fn() : new DexiePromise(function(resolve, reject) {
              if (_this._state.openComplete) {
                return reject(new exceptions.DatabaseClosed(_this._state.dbOpenError));
              }
              if (!_this._state.isBeingOpened) {
                if (!_this._state.autoOpen) {
                  reject(new exceptions.DatabaseClosed());
                  return;
                }
                _this.open().catch(nop);
              }
              _this._state.dbReadyPromise.then(resolve, reject);
            }).then(fn);
          };
          Dexie3.prototype.use = function(_a2) {
            var stack = _a2.stack, create = _a2.create, level = _a2.level, name = _a2.name;
            if (name)
              this.unuse({ stack, name });
            var middlewares = this._middlewares[stack] || (this._middlewares[stack] = []);
            middlewares.push({ stack, create, level: level == null ? 10 : level, name });
            middlewares.sort(function(a, b) {
              return a.level - b.level;
            });
            return this;
          };
          Dexie3.prototype.unuse = function(_a2) {
            var stack = _a2.stack, name = _a2.name, create = _a2.create;
            if (stack && this._middlewares[stack]) {
              this._middlewares[stack] = this._middlewares[stack].filter(function(mw) {
                return create ? mw.create !== create : name ? mw.name !== name : false;
              });
            }
            return this;
          };
          Dexie3.prototype.open = function() {
            var _this = this;
            return usePSD(
              globalPSD,
              function() {
                return dexieOpen(_this);
              }
            );
          };
          Dexie3.prototype._close = function() {
            this.on.close.fire(new CustomEvent("close"));
            var state2 = this._state;
            var idx = connections.indexOf(this);
            if (idx >= 0)
              connections.splice(idx, 1);
            if (this.idbdb) {
              try {
                this.idbdb.close();
              } catch (e) {
              }
              this.idbdb = null;
            }
            if (!state2.isBeingOpened) {
              state2.dbReadyPromise = new DexiePromise(function(resolve) {
                state2.dbReadyResolve = resolve;
              });
              state2.openCanceller = new DexiePromise(function(_, reject) {
                state2.cancelOpen = reject;
              });
            }
          };
          Dexie3.prototype.close = function(_a2) {
            var _b = _a2 === void 0 ? { disableAutoOpen: true } : _a2, disableAutoOpen = _b.disableAutoOpen;
            var state2 = this._state;
            if (disableAutoOpen) {
              if (state2.isBeingOpened) {
                state2.cancelOpen(new exceptions.DatabaseClosed());
              }
              this._close();
              state2.autoOpen = false;
              state2.dbOpenError = new exceptions.DatabaseClosed();
            } else {
              this._close();
              state2.autoOpen = this._options.autoOpen || state2.isBeingOpened;
              state2.openComplete = false;
              state2.dbOpenError = null;
            }
          };
          Dexie3.prototype.delete = function(closeOptions) {
            var _this = this;
            if (closeOptions === void 0) {
              closeOptions = { disableAutoOpen: true };
            }
            var hasInvalidArguments = arguments.length > 0 && typeof arguments[0] !== "object";
            var state2 = this._state;
            return new DexiePromise(function(resolve, reject) {
              var doDelete = function() {
                _this.close(closeOptions);
                var req = _this._deps.indexedDB.deleteDatabase(_this.name);
                req.onsuccess = wrap(function() {
                  _onDatabaseDeleted(_this._deps, _this.name);
                  resolve();
                });
                req.onerror = eventRejectHandler(reject);
                req.onblocked = _this._fireOnBlocked;
              };
              if (hasInvalidArguments)
                throw new exceptions.InvalidArgument("Invalid closeOptions argument to db.delete()");
              if (state2.isBeingOpened) {
                state2.dbReadyPromise.then(doDelete);
              } else {
                doDelete();
              }
            });
          };
          Dexie3.prototype.backendDB = function() {
            return this.idbdb;
          };
          Dexie3.prototype.isOpen = function() {
            return this.idbdb !== null;
          };
          Dexie3.prototype.hasBeenClosed = function() {
            var dbOpenError = this._state.dbOpenError;
            return dbOpenError && dbOpenError.name === "DatabaseClosed";
          };
          Dexie3.prototype.hasFailed = function() {
            return this._state.dbOpenError !== null;
          };
          Dexie3.prototype.dynamicallyOpened = function() {
            return this._state.autoSchema;
          };
          Object.defineProperty(Dexie3.prototype, "tables", {
            get: function() {
              var _this = this;
              return keys2(this._allTables).map(function(name) {
                return _this._allTables[name];
              });
            },
            enumerable: false,
            configurable: true
          });
          Dexie3.prototype.transaction = function() {
            var args = extractTransactionArgs.apply(this, arguments);
            return this._transaction.apply(this, args);
          };
          Dexie3.prototype._transaction = function(mode, tables, scopeFunc) {
            var _this = this;
            var parentTransaction = PSD.trans;
            if (!parentTransaction || parentTransaction.db !== this || mode.indexOf("!") !== -1)
              parentTransaction = null;
            var onlyIfCompatible = mode.indexOf("?") !== -1;
            mode = mode.replace("!", "").replace("?", "");
            var idbMode, storeNames;
            try {
              storeNames = tables.map(function(table) {
                var storeName = table instanceof _this.Table ? table.name : table;
                if (typeof storeName !== "string")
                  throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
                return storeName;
              });
              if (mode == "r" || mode === READONLY)
                idbMode = READONLY;
              else if (mode == "rw" || mode == READWRITE)
                idbMode = READWRITE;
              else
                throw new exceptions.InvalidArgument("Invalid transaction mode: " + mode);
              if (parentTransaction) {
                if (parentTransaction.mode === READONLY && idbMode === READWRITE) {
                  if (onlyIfCompatible) {
                    parentTransaction = null;
                  } else
                    throw new exceptions.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
                }
                if (parentTransaction) {
                  storeNames.forEach(function(storeName) {
                    if (parentTransaction && parentTransaction.storeNames.indexOf(storeName) === -1) {
                      if (onlyIfCompatible) {
                        parentTransaction = null;
                      } else
                        throw new exceptions.SubTransaction("Table " + storeName + " not included in parent transaction.");
                    }
                  });
                }
                if (onlyIfCompatible && parentTransaction && !parentTransaction.active) {
                  parentTransaction = null;
                }
              }
            } catch (e) {
              return parentTransaction ? parentTransaction._promise(null, function(_, reject) {
                reject(e);
              }) : rejection(e);
            }
            var enterTransaction = enterTransactionScope.bind(null, this, idbMode, storeNames, parentTransaction, scopeFunc);
            return parentTransaction ? parentTransaction._promise(idbMode, enterTransaction, "lock") : PSD.trans ? usePSD(PSD.transless, function() {
              return _this._whenReady(enterTransaction);
            }) : this._whenReady(enterTransaction);
          };
          Dexie3.prototype.table = function(tableName) {
            if (!hasOwn(this._allTables, tableName)) {
              throw new exceptions.InvalidTable("Table ".concat(tableName, " does not exist"));
            }
            return this._allTables[tableName];
          };
          return Dexie3;
        })();
        var symbolObservable = typeof Symbol !== "undefined" && "observable" in Symbol ? Symbol.observable : "@@observable";
        var Observable = (function() {
          function Observable2(subscribe) {
            this._subscribe = subscribe;
          }
          Observable2.prototype.subscribe = function(x, error, complete) {
            return this._subscribe(!x || typeof x === "function" ? { next: x, error, complete } : x);
          };
          Observable2.prototype[symbolObservable] = function() {
            return this;
          };
          return Observable2;
        })();
        var domDeps;
        try {
          domDeps = {
            indexedDB: _global.indexedDB || _global.mozIndexedDB || _global.webkitIndexedDB || _global.msIndexedDB,
            IDBKeyRange: _global.IDBKeyRange || _global.webkitIDBKeyRange
          };
        } catch (e) {
          domDeps = { indexedDB: null, IDBKeyRange: null };
        }
        function liveQuery2(querier) {
          var hasValue = false;
          var currentValue;
          var observable = new Observable(function(observer) {
            var scopeFuncIsAsync = isAsyncFunction(querier);
            function execute(ctx) {
              var wasRootExec = beginMicroTickScope();
              try {
                if (scopeFuncIsAsync) {
                  incrementExpectedAwaits();
                }
                var rv = newScope(querier, ctx);
                if (scopeFuncIsAsync) {
                  rv = rv.finally(decrementExpectedAwaits);
                }
                return rv;
              } finally {
                wasRootExec && endMicroTickScope();
              }
            }
            var closed = false;
            var abortController;
            var accumMuts = {};
            var currentObs = {};
            var subscription = {
              get closed() {
                return closed;
              },
              unsubscribe: function() {
                if (closed)
                  return;
                closed = true;
                if (abortController)
                  abortController.abort();
                if (startedListening)
                  globalEvents.storagemutated.unsubscribe(mutationListener);
              }
            };
            observer.start && observer.start(subscription);
            var startedListening = false;
            var doQuery = function() {
              return execInGlobalContext(_doQuery);
            };
            function shouldNotify() {
              return obsSetsOverlap(currentObs, accumMuts);
            }
            var mutationListener = function(parts) {
              extendObservabilitySet(accumMuts, parts);
              if (shouldNotify()) {
                doQuery();
              }
            };
            var _doQuery = function() {
              if (closed || !domDeps.indexedDB) {
                return;
              }
              accumMuts = {};
              var subscr = {};
              if (abortController)
                abortController.abort();
              abortController = new AbortController();
              var ctx = {
                subscr,
                signal: abortController.signal,
                requery: doQuery,
                querier,
                trans: null
              };
              var ret = execute(ctx);
              Promise.resolve(ret).then(function(result) {
                hasValue = true;
                currentValue = result;
                if (closed || ctx.signal.aborted) {
                  return;
                }
                accumMuts = {};
                currentObs = subscr;
                if (!objectIsEmpty(currentObs) && !startedListening) {
                  globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, mutationListener);
                  startedListening = true;
                }
                execInGlobalContext(function() {
                  return !closed && observer.next && observer.next(result);
                });
              }, function(err) {
                hasValue = false;
                if (!["DatabaseClosedError", "AbortError"].includes(err === null || err === void 0 ? void 0 : err.name)) {
                  if (!closed)
                    execInGlobalContext(function() {
                      if (closed)
                        return;
                      observer.error && observer.error(err);
                    });
                }
              });
            };
            setTimeout(doQuery, 0);
            return subscription;
          });
          observable.hasValue = function() {
            return hasValue;
          };
          observable.getValue = function() {
            return currentValue;
          };
          return observable;
        }
        var Dexie2 = Dexie$1;
        props(Dexie2, __assign(__assign({}, fullNameExceptions), {
          delete: function(databaseName) {
            var db = new Dexie2(databaseName, { addons: [] });
            return db.delete();
          },
          exists: function(name) {
            return new Dexie2(name, { addons: [] }).open().then(function(db) {
              db.close();
              return true;
            }).catch("NoSuchDatabaseError", function() {
              return false;
            });
          },
          getDatabaseNames: function(cb) {
            try {
              return getDatabaseNames(Dexie2.dependencies).then(cb);
            } catch (_a2) {
              return rejection(new exceptions.MissingAPI());
            }
          },
          defineClass: function() {
            function Class(content) {
              extend(this, content);
            }
            return Class;
          },
          ignoreTransaction: function(scopeFunc) {
            return PSD.trans ? usePSD(PSD.transless, scopeFunc) : scopeFunc();
          },
          vip,
          async: function(generatorFn) {
            return function() {
              try {
                var rv = awaitIterator(generatorFn.apply(this, arguments));
                if (!rv || typeof rv.then !== "function")
                  return DexiePromise.resolve(rv);
                return rv;
              } catch (e) {
                return rejection(e);
              }
            };
          },
          spawn: function(generatorFn, args, thiz) {
            try {
              var rv = awaitIterator(generatorFn.apply(thiz, args || []));
              if (!rv || typeof rv.then !== "function")
                return DexiePromise.resolve(rv);
              return rv;
            } catch (e) {
              return rejection(e);
            }
          },
          currentTransaction: {
            get: function() {
              return PSD.trans || null;
            }
          },
          waitFor: function(promiseOrFunction, optionalTimeout) {
            var promise = DexiePromise.resolve(typeof promiseOrFunction === "function" ? Dexie2.ignoreTransaction(promiseOrFunction) : promiseOrFunction).timeout(optionalTimeout || 6e4);
            return PSD.trans ? PSD.trans.waitFor(promise) : promise;
          },
          Promise: DexiePromise,
          debug: {
            get: function() {
              return debug;
            },
            set: function(value) {
              setDebug(value);
            }
          },
          derive,
          extend,
          props,
          override,
          Events,
          on: globalEvents,
          liveQuery: liveQuery2,
          extendObservabilitySet,
          getByKeyPath,
          setByKeyPath,
          delByKeyPath,
          shallowClone,
          deepClone,
          getObjectDiff,
          cmp: cmp2,
          asap: asap$1,
          minKey,
          addons: [],
          connections,
          errnames,
          dependencies: domDeps,
          cache,
          semVer: DEXIE_VERSION,
          version: DEXIE_VERSION.split(".").map(function(n) {
            return parseInt(n);
          }).reduce(function(p, c, i) {
            return p + c / Math.pow(10, i * 2);
          })
        }));
        Dexie2.maxKey = getMaxKey(Dexie2.dependencies.IDBKeyRange);
        if (typeof dispatchEvent !== "undefined" && typeof addEventListener !== "undefined") {
          globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, function(updatedParts) {
            if (!propagatingLocally) {
              var event_1;
              event_1 = new CustomEvent(STORAGE_MUTATED_DOM_EVENT_NAME, {
                detail: updatedParts
              });
              propagatingLocally = true;
              dispatchEvent(event_1);
              propagatingLocally = false;
            }
          });
          addEventListener(STORAGE_MUTATED_DOM_EVENT_NAME, function(_a2) {
            var detail = _a2.detail;
            if (!propagatingLocally) {
              propagateLocally(detail);
            }
          });
        }
        function propagateLocally(updateParts) {
          var wasMe = propagatingLocally;
          try {
            propagatingLocally = true;
            globalEvents.storagemutated.fire(updateParts);
            signalSubscribersNow(updateParts, true);
          } finally {
            propagatingLocally = wasMe;
          }
        }
        var propagatingLocally = false;
        var bc;
        var createBC = function() {
        };
        if (typeof BroadcastChannel !== "undefined") {
          createBC = function() {
            bc = new BroadcastChannel(STORAGE_MUTATED_DOM_EVENT_NAME);
            bc.onmessage = function(ev) {
              return ev.data && propagateLocally(ev.data);
            };
          };
          createBC();
          if (typeof bc.unref === "function") {
            bc.unref();
          }
          globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, function(changedParts) {
            if (!propagatingLocally) {
              bc.postMessage(changedParts);
            }
          });
        }
        if (typeof addEventListener !== "undefined") {
          addEventListener("pagehide", function(event) {
            if (!Dexie$1.disableBfCache && event.persisted) {
              if (debug)
                console.debug("Dexie: handling persisted pagehide");
              bc === null || bc === void 0 ? void 0 : bc.close();
              for (var _i = 0, connections_1 = connections; _i < connections_1.length; _i++) {
                var db = connections_1[_i];
                db.close({ disableAutoOpen: false });
              }
            }
          });
          addEventListener("pageshow", function(event) {
            if (!Dexie$1.disableBfCache && event.persisted) {
              if (debug)
                console.debug("Dexie: handling persisted pageshow");
              createBC();
              propagateLocally({ all: new RangeSet2(-Infinity, [[]]) });
            }
          });
        }
        function add2(value) {
          return new PropModification2({ add: value });
        }
        function remove2(value) {
          return new PropModification2({ remove: value });
        }
        function replacePrefix2(a, b) {
          return new PropModification2({ replacePrefix: [a, b] });
        }
        DexiePromise.rejectionMapper = mapError;
        setDebug(debug);
        var namedExports = /* @__PURE__ */ Object.freeze({
          __proto__: null,
          Dexie: Dexie$1,
          liveQuery: liveQuery2,
          Entity: Entity2,
          cmp: cmp2,
          PropModification: PropModification2,
          replacePrefix: replacePrefix2,
          add: add2,
          remove: remove2,
          "default": Dexie$1,
          RangeSet: RangeSet2,
          mergeRanges: mergeRanges2,
          rangesOverlap: rangesOverlap2
        });
        __assign(Dexie$1, namedExports, { default: Dexie$1 });
        return Dexie$1;
      }));
    }
  });

  // node_modules/dexie/import-wrapper.mjs
  var import_wrapper_exports = {};
  __export(import_wrapper_exports, {
    Dexie: () => Dexie,
    DexieYProvider: () => DexieYProvider,
    Entity: () => Entity,
    PropModification: () => PropModification,
    RangeSet: () => RangeSet,
    add: () => add,
    cmp: () => cmp,
    default: () => import_wrapper_default,
    liveQuery: () => liveQuery,
    mergeRanges: () => mergeRanges,
    rangesOverlap: () => rangesOverlap,
    remove: () => remove,
    replacePrefix: () => replacePrefix
  });
  var import_dexie, DexieSymbol, Dexie, liveQuery, mergeRanges, rangesOverlap, RangeSet, cmp, Entity, PropModification, replacePrefix, add, remove, DexieYProvider, import_wrapper_default;
  var init_import_wrapper = __esm({
    "node_modules/dexie/import-wrapper.mjs"() {
      init_polyfills();
      import_dexie = __toESM(require_dexie(), 1);
      DexieSymbol = /* @__PURE__ */ Symbol.for("Dexie");
      Dexie = globalThis[DexieSymbol] || (globalThis[DexieSymbol] = import_dexie.default);
      if (import_dexie.default.semVer !== Dexie.semVer) {
        throw new Error(`Two different versions of Dexie loaded in the same app: ${import_dexie.default.semVer} and ${Dexie.semVer}`);
      }
      ({
        liveQuery,
        mergeRanges,
        rangesOverlap,
        RangeSet,
        cmp,
        Entity,
        PropModification,
        replacePrefix,
        add,
        remove,
        DexieYProvider
      } = Dexie);
      import_wrapper_default = Dexie;
    }
  });

  // src/view/history.js
  var require_history = __commonJS({
    "src/view/history.js"(exports, module) {
      init_polyfills();
      var html = require_xou();
      var vxv = require_vxv_umd();
      var alert = require_alert();
      var dotify = require_dotify();
      var Dexie2 = (init_import_wrapper(), __toCommonJS(import_wrapper_exports));
      var styles = vxv`
height: calc(100vh - 60px); /* Adjusted for header */
overflow-y: auto;

/* Frosted Glass Background */
background: rgba(255, 255, 255, 0.85);
backdrop-filter: blur(20px) saturate(180%);
-webkit-backdrop-filter: blur(20px) saturate(180%);

padding: 0;
font-family: -apple-system, BlinkMacSystemFont, "Inter", sans-serif;

.history-container {
  max-width: 680px; /* Narrower for better readability */
  margin: 0 auto;
  padding: 40px 20px;
}

h2 {
  font-size: 11px;
  color: #888;
  margin: 32px 0 12px 12px; /* Indented slightly to match list items */
  text-transform: uppercase;
  letter-spacing: 0.8px;
  font-weight: 600;
  border: none;
  padding: 0;
}

/* Remove card look, go for clean list */
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  background: transparent;
  box-shadow: none;
  border-radius: 0;
}

li {
  padding: 10px 14px;
  margin-bottom: 2px;
  border-bottom: none; /* No dividers */
  border-radius: 8px; /* Rounded corners on hover */
  display: flex;
  flex-direction: column;
  transition: all 0.15s ease;
  cursor: default;

  &:hover {
    background: rgba(0, 0, 0, 0.05); /* Subtle grey pill hover */
    transform: scale(1.005);
  }
}

.title {
  font-size: 14px;
  color: #222;
  font-weight: 500;
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: -0.01em;
}

.meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #888;
}

.url {
  color: #666; /* Neutral color, not heavy blue */
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 75%;
  cursor: pointer;
  transition: color 0.1s;

  &:hover {
    color: #000; /* Darken on hover instead of underline */
    text-decoration: none;
  }
}

.time {
  color: #bbb;
  font-variant-numeric: tabular-nums; /* Monospaced numbers for alignment */
  font-size: 11px;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: rgba(0,0,0,0.1);
  border-radius: 3px;
}
`;
      var overlayStyles = vxv`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0px;
  z-index: 100;
  
  /* Blended Header */
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0,0,0,0.05);
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  font-family: -apple-system, BlinkMacSystemFont, "Inter", sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: #333;
  letter-spacing: -0.01em;
`;
      var toggle = false;
      var a = () => {
      };
      var db = new Dexie2("history");
      db.version(1).stores({
        visit: "url, title, timestamp"
      });
      var getGroupTitle = (timestamp) => {
        const date = new Date(timestamp);
        const now = /* @__PURE__ */ new Date();
        const yesterday = new Date(now);
        yesterday.setDate(yesterday.getDate() - 1);
        if (date.toDateString() === now.toDateString()) {
          return "Today";
        } else if (date.toDateString() === yesterday.toDateString()) {
          return "Yesterday";
        } else {
          return date.toLocaleDateString(void 0, { weekday: "long", year: "numeric", month: "long", day: "numeric" });
        }
      };
      module.exports = (emitter2) => {
        const titleBarOverlay = html`<div id="history-overlay" class="${overlayStyles}">History</div>`;
        const element = html`<div id="history" class="${styles}">
    <div class="history-container"></div>
  </div>`;
        emitter2.on("history-toggle", () => {
          if (toggle) {
            a();
            toggle = !toggle;
            if (document.body.contains(titleBarOverlay)) {
              document.body.removeChild(titleBarOverlay);
            }
          } else {
            try {
              a = alert({
                text: element,
                position: "bottom"
              });
              document.body.appendChild(titleBarOverlay);
              const container = element.querySelector(".history-container");
              if (!container) {
                console.error("History container not found");
                return;
              }
              container.innerHTML = "";
              db.visit.orderBy("timestamp").reverse().toArray().then((visits) => {
                const groups = {};
                visits.forEach((visit) => {
                  const group = getGroupTitle(visit.timestamp);
                  if (!groups[group]) groups[group] = [];
                  groups[group].push(visit);
                });
                for (const [groupTitle, items] of Object.entries(groups)) {
                  const groupHeader = html`<h2>${groupTitle}</h2>`;
                  const list = html`<ul></ul>`;
                  items.forEach((data) => {
                    const date = new Date(data.timestamp);
                    const timeStr = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
                    const li = html`<li>
                  <span class="title">${dotify(data.title || "No Title", 60)}</span>
                  <div class="meta">
                    <span class="url" onclick=${() => {
                      emitter2.emit("tabs-create", data.url);
                      a();
                      toggle = !toggle;
                      if (document.body.contains(titleBarOverlay)) {
                        document.body.removeChild(titleBarOverlay);
                      }
                    }}>${dotify(data.url, 50)}</span>
                    <span class="time">${timeStr}</span>
                  </div>
                </li>`;
                    list.appendChild(li);
                  });
                  container.appendChild(groupHeader);
                  container.appendChild(list);
                }
              }).catch((err) => {
                console.error("Error loading history from database:", err);
                const errorMsg = html`<p style="color: #d93025; text-align: center; padding: 20px;">Unable to load history. Please try again.</p>`;
                container.appendChild(errorMsg);
              });
              toggle = !toggle;
            } catch (err) {
              console.error("Error toggling history view:", err);
            }
          }
        });
        emitter2.on("history-navigated", (data) => {
          try {
            if (!data || !data.url) {
              console.warn("Invalid history data:", data);
              return;
            }
            const time = (/* @__PURE__ */ new Date()).getTime();
            db.visit.add({
              url: data.url,
              title: data.title || "No Title",
              timestamp: time
            }).catch((err) => {
              console.error("Error saving history entry:", err);
            });
          } catch (err) {
            console.error("Error in history-navigated handler:", err);
          }
        });
      };
    }
  });

  // src/view.js
  init_polyfills();
  var mitt = (init_mitt(), __toCommonJS(mitt_exports));
  var keyval = (init_dist(), __toCommonJS(dist_exports));
  var webview = require_webview();
  var keyboard = require_keyboard();
  var menu = require_menu();
  var titlebar = require_titlebar();
  var tabs = require_tabs();
  var progress = require_progress();
  var history = require_history();
  var emitter = mitt();
  var state = {
    url: "https://home.cargo",
    views: [],
    theme: "light",
    tabsInterval: null
    // Store interval ID for cleanup
    // store
  };
  document.addEventListener("DOMContentLoaded", () => {
    titlebar(emitter, state);
    progress(emitter);
    history(emitter);
    webview(emitter, state);
    menu(emitter, state);
    keyboard(emitter, state);
    setTimeout(() => {
      tabs(emitter, state);
    }, 200);
    const urlbar = document.querySelector(".urlbar");
    if (urlbar) {
      urlbar.focus();
    }
    keyval.get("tabs").then((val) => {
      if (!Array.isArray(val)) {
        keyval.set("tabs", []);
        emitter.emit("webview-create");
        return;
      }
      if (val.length === 0) {
        emitter.emit("webview-create");
      } else {
        for (let v of val) {
          emitter.emit("webview-create", v);
        }
      }
    }).catch((err) => {
      console.error("Error loading tabs from storage:", err);
      emitter.emit("webview-create");
    });
    state.tabsInterval = setInterval(() => {
      try {
        const tabs2 = [];
        for (let view of state.views) {
          const webviewEl = document.querySelector("#" + view.id);
          if (webviewEl) {
            tabs2.push(webviewEl.getURL());
          }
        }
        keyval.set("tabs", tabs2).catch((err) => {
          console.error("Error saving tabs:", err);
        });
      } catch (err) {
        console.error("Error in tab save interval:", err);
      }
    }, 500);
  });
  window.addEventListener("beforeunload", () => {
    if (state.tabsInterval) {
      clearInterval(state.tabsInterval);
      state.tabsInterval = null;
    }
  });
  emitter.on("tabs-db-flush", () => {
    keyval.set("tabs", []).catch((err) => {
      console.error("Error flushing tabs:", err);
    });
  });
})();
/*! Bundled license information:

punycode/punycode.js:
  (*! https://mths.be/punycode v1.4.1 by @mathias *)

nprogress/nprogress.js:
  (* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
   * @license MIT *)

dexie/dist/dexie.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
