!(function (e) {
  var r = {};
  function t(n) {
    if (r[n]) return r[n].exports;
    var s = (r[n] = { i: n, l: !1, exports: {} });
    return e[n].call(s.exports, s, s.exports, t), (s.l = !0), s.exports;
  }
  (t.m = e),
    (t.c = r),
    (t.d = function (e, r, n) {
      t.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: n });
    }),
    (t.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.t = function (e, r) {
      if ((1 & r && (e = t(e)), 8 & r)) return e;
      if (4 & r && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (t.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & r && "string" != typeof e)
      )
        for (var s in e)
          t.d(
            n,
            s,
            function (r) {
              return e[r];
            }.bind(null, s)
          );
      return n;
    }),
    (t.n = function (e) {
      var r =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(r, "a", r), r;
    }),
    (t.o = function (e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }),
    (t.p = ""),
    t((t.s = 145));
})({
  145: function (e, r, t) {
    "use strict";
    t.r(r);
    t(39);
    var n = t(4),
      s = t.n(n);
    s.a.browserAction.onClicked.addListener(function () {
      s.a.tabs.create({ url: "chrome://bookmarks/" });
    }),
      s.a.runtime.onMessage.addListener(function (e) {
        var r, t, n, a;
        return regeneratorRuntime.async(
          function (o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  (r = e.action),
                    (o.t0 = r),
                    (o.next = "open-tabs" === o.t0 ? 4 : 22);
                  break;
                case 4:
                  if (((t = e.urls), (n = e.parentWindow))) {
                    o.next = 20;
                    break;
                  }
                  a = 0;
                case 7:
                  if (!(a < t.length)) {
                    o.next = 18;
                    break;
                  }
                  return (
                    (o.prev = 8),
                    (o.next = 11),
                    regeneratorRuntime.awrap(s.a.tabs.create({ url: t[a] }))
                  );
                case 11:
                  o.next = 15;
                  break;
                case 13:
                  (o.prev = 13), (o.t1 = o.catch(8));
                case 15:
                  (a += 1), (o.next = 7);
                  break;
                case 18:
                  o.next = 21;
                  break;
                case 20:
                  s.a.windows.create({ url: t, incognito: "private" === n });
                case 21:
                case 22:
                  return o.abrupt("break", 23);
                case 23:
                case "end":
                  return o.stop();
              }
          },
          null,
          null,
          [[8, 13]]
        );
      });
  },
  39: function (e, r, t) {
    var n = (function (e) {
      "use strict";
      var r,
        t = Object.prototype,
        n = t.hasOwnProperty,
        s = "function" == typeof Symbol ? Symbol : {},
        a = s.iterator || "@@iterator",
        o = s.asyncIterator || "@@asyncIterator",
        i = s.toStringTag || "@@toStringTag";
      function g(e, r, t, n) {
        var s = r && r.prototype instanceof x ? r : x,
          a = Object.create(s.prototype),
          o = new j(n || []);
        return (
          (a._invoke = (function (e, r, t) {
            var n = l;
            return function (s, a) {
              if (n === A) throw new Error("Generator is already running");
              if (n === u) {
                if ("throw" === s) throw a;
                return T();
              }
              for (t.method = s, t.arg = a; ; ) {
                var o = t.delegate;
                if (o) {
                  var i = E(o, t);
                  if (i) {
                    if (i === f) continue;
                    return i;
                  }
                }
                if ("next" === t.method) t.sent = t._sent = t.arg;
                else if ("throw" === t.method) {
                  if (n === l) throw ((n = u), t.arg);
                  t.dispatchException(t.arg);
                } else "return" === t.method && t.abrupt("return", t.arg);
                n = A;
                var g = m(e, r, t);
                if ("normal" === g.type) {
                  if (((n = t.done ? u : c), g.arg === f)) continue;
                  return { value: g.arg, done: t.done };
                }
                "throw" === g.type &&
                  ((n = u), (t.method = "throw"), (t.arg = g.arg));
              }
            };
          })(e, t, o)),
          a
        );
      }
      function m(e, r, t) {
        try {
          return { type: "normal", arg: e.call(r, t) };
        } catch (e) {
          return { type: "throw", arg: e };
        }
      }
      e.wrap = g;
      var l = "suspendedStart",
        c = "suspendedYield",
        A = "executing",
        u = "completed",
        f = {};
      function x() {}
      function h() {}
      function p() {}
      var d = {};
      d[a] = function () {
        return this;
      };
      var y = Object.getPrototypeOf,
        b = y && y(y(C([])));
      b && b !== t && n.call(b, a) && (d = b);
      var v = (p.prototype = x.prototype = Object.create(d));
      function w(e) {
        ["next", "throw", "return"].forEach(function (r) {
          e[r] = function (e) {
            return this._invoke(r, e);
          };
        });
      }
      function k(e) {
        var r;
        this._invoke = function (t, s) {
          function a() {
            return new Promise(function (r, a) {
              !(function r(t, s, a, o) {
                var i = m(e[t], e, s);
                if ("throw" !== i.type) {
                  var g = i.arg,
                    l = g.value;
                  return l && "object" == typeof l && n.call(l, "__await")
                    ? Promise.resolve(l.__await).then(
                        function (e) {
                          r("next", e, a, o);
                        },
                        function (e) {
                          r("throw", e, a, o);
                        }
                      )
                    : Promise.resolve(l).then(
                        function (e) {
                          (g.value = e), a(g);
                        },
                        function (e) {
                          return r("throw", e, a, o);
                        }
                      );
                }
                o(i.arg);
              })(t, s, r, a);
            });
          }
          return (r = r ? r.then(a, a) : a());
        };
      }
      function E(e, t) {
        var n = e.iterator[t.method];
        if (n === r) {
          if (((t.delegate = null), "throw" === t.method)) {
            if (
              e.iterator.return &&
              ((t.method = "return"),
              (t.arg = r),
              E(e, t),
              "throw" === t.method)
            )
              return f;
            (t.method = "throw"),
              (t.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return f;
        }
        var s = m(n, e.iterator, t.arg);
        if ("throw" === s.type)
          return (t.method = "throw"), (t.arg = s.arg), (t.delegate = null), f;
        var a = s.arg;
        return a
          ? a.done
            ? ((t[e.resultName] = a.value),
              (t.next = e.nextLoc),
              "return" !== t.method && ((t.method = "next"), (t.arg = r)),
              (t.delegate = null),
              f)
            : a
          : ((t.method = "throw"),
            (t.arg = new TypeError("iterator result is not an object")),
            (t.delegate = null),
            f);
      }
      function P(e) {
        var r = { tryLoc: e[0] };
        1 in e && (r.catchLoc = e[1]),
          2 in e && ((r.finallyLoc = e[2]), (r.afterLoc = e[3])),
          this.tryEntries.push(r);
      }
      function L(e) {
        var r = e.completion || {};
        (r.type = "normal"), delete r.arg, (e.completion = r);
      }
      function j(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(P, this),
          this.reset(!0);
      }
      function C(e) {
        if (e) {
          var t = e[a];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var s = -1,
              o = function t() {
                for (; ++s < e.length; )
                  if (n.call(e, s)) return (t.value = e[s]), (t.done = !1), t;
                return (t.value = r), (t.done = !0), t;
              };
            return (o.next = o);
          }
        }
        return { next: T };
      }
      function T() {
        return { value: r, done: !0 };
      }
      return (
        (h.prototype = v.constructor = p),
        (p.constructor = h),
        (p[i] = h.displayName = "GeneratorFunction"),
        (e.isGeneratorFunction = function (e) {
          var r = "function" == typeof e && e.constructor;
          return (
            !!r &&
            (r === h || "GeneratorFunction" === (r.displayName || r.name))
          );
        }),
        (e.mark = function (e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, p)
              : ((e.__proto__ = p), i in e || (e[i] = "GeneratorFunction")),
            (e.prototype = Object.create(v)),
            e
          );
        }),
        (e.awrap = function (e) {
          return { __await: e };
        }),
        w(k.prototype),
        (k.prototype[o] = function () {
          return this;
        }),
        (e.AsyncIterator = k),
        (e.async = function (r, t, n, s) {
          var a = new k(g(r, t, n, s));
          return e.isGeneratorFunction(t)
            ? a
            : a.next().then(function (e) {
                return e.done ? e.value : a.next();
              });
        }),
        w(v),
        (v[i] = "Generator"),
        (v[a] = function () {
          return this;
        }),
        (v.toString = function () {
          return "[object Generator]";
        }),
        (e.keys = function (e) {
          var r = [];
          for (var t in e) r.push(t);
          return (
            r.reverse(),
            function t() {
              for (; r.length; ) {
                var n = r.pop();
                if (n in e) return (t.value = n), (t.done = !1), t;
              }
              return (t.done = !0), t;
            }
          );
        }),
        (e.values = C),
        (j.prototype = {
          constructor: j,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = r),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = r),
              this.tryEntries.forEach(L),
              !e)
            )
              for (var t in this)
                "t" === t.charAt(0) &&
                  n.call(this, t) &&
                  !isNaN(+t.slice(1)) &&
                  (this[t] = r);
          },
          stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var t = this;
            function s(n, s) {
              return (
                (i.type = "throw"),
                (i.arg = e),
                (t.next = n),
                s && ((t.method = "next"), (t.arg = r)),
                !!s
              );
            }
            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
              var o = this.tryEntries[a],
                i = o.completion;
              if ("root" === o.tryLoc) return s("end");
              if (o.tryLoc <= this.prev) {
                var g = n.call(o, "catchLoc"),
                  m = n.call(o, "finallyLoc");
                if (g && m) {
                  if (this.prev < o.catchLoc) return s(o.catchLoc, !0);
                  if (this.prev < o.finallyLoc) return s(o.finallyLoc);
                } else if (g) {
                  if (this.prev < o.catchLoc) return s(o.catchLoc, !0);
                } else {
                  if (!m)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < o.finallyLoc) return s(o.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, r) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var s = this.tryEntries[t];
              if (
                s.tryLoc <= this.prev &&
                n.call(s, "finallyLoc") &&
                this.prev < s.finallyLoc
              ) {
                var a = s;
                break;
              }
            }
            a &&
              ("break" === e || "continue" === e) &&
              a.tryLoc <= r &&
              r <= a.finallyLoc &&
              (a = null);
            var o = a ? a.completion : {};
            return (
              (o.type = e),
              (o.arg = r),
              a
                ? ((this.method = "next"), (this.next = a.finallyLoc), f)
                : this.complete(o)
            );
          },
          complete: function (e, r) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === e.type && r && (this.next = r),
              f
            );
          },
          finish: function (e) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var t = this.tryEntries[r];
              if (t.finallyLoc === e)
                return this.complete(t.completion, t.afterLoc), L(t), f;
            }
          },
          catch: function (e) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var t = this.tryEntries[r];
              if (t.tryLoc === e) {
                var n = t.completion;
                if ("throw" === n.type) {
                  var s = n.arg;
                  L(t);
                }
                return s;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, t, n) {
            return (
              (this.delegate = { iterator: C(e), resultName: t, nextLoc: n }),
              "next" === this.method && (this.arg = r),
              f
            );
          },
        }),
        e
      );
    })(e.exports);
    try {
      regeneratorRuntime = n;
    } catch (e) {
      Function("r", "regeneratorRuntime = r")(n);
    }
  },
  4: function (e, r, t) {
    var n, s, a;
    (s = [e]),
      void 0 ===
        (a =
          "function" ==
          typeof (n = function (e) {
            "use strict";
            if (
              "undefined" == typeof browser ||
              Object.getPrototypeOf(browser) !== Object.prototype
            ) {
              const r =
                  "The message port closed before a response was received.",
                t =
                  "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",
                n = (e) => {
                  const n = {
                    alarms: {
                      clear: { minArgs: 0, maxArgs: 1 },
                      clearAll: { minArgs: 0, maxArgs: 0 },
                      get: { minArgs: 0, maxArgs: 1 },
                      getAll: { minArgs: 0, maxArgs: 0 },
                    },
                    bookmarks: {
                      create: { minArgs: 1, maxArgs: 1 },
                      get: { minArgs: 1, maxArgs: 1 },
                      getChildren: { minArgs: 1, maxArgs: 1 },
                      getRecent: { minArgs: 1, maxArgs: 1 },
                      getSubTree: { minArgs: 1, maxArgs: 1 },
                      getTree: { minArgs: 0, maxArgs: 0 },
                      move: { minArgs: 2, maxArgs: 2 },
                      remove: { minArgs: 1, maxArgs: 1 },
                      removeTree: { minArgs: 1, maxArgs: 1 },
                      search: { minArgs: 1, maxArgs: 1 },
                      update: { minArgs: 2, maxArgs: 2 },
                    },
                    browserAction: {
                      disable: {
                        minArgs: 0,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                      enable: {
                        minArgs: 0,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                      getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                      getBadgeText: { minArgs: 1, maxArgs: 1 },
                      getPopup: { minArgs: 1, maxArgs: 1 },
                      getTitle: { minArgs: 1, maxArgs: 1 },
                      openPopup: { minArgs: 0, maxArgs: 0 },
                      setBadgeBackgroundColor: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                      setBadgeText: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                      setIcon: { minArgs: 1, maxArgs: 1 },
                      setPopup: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                      setTitle: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                    },
                    browsingData: {
                      remove: { minArgs: 2, maxArgs: 2 },
                      removeCache: { minArgs: 1, maxArgs: 1 },
                      removeCookies: { minArgs: 1, maxArgs: 1 },
                      removeDownloads: { minArgs: 1, maxArgs: 1 },
                      removeFormData: { minArgs: 1, maxArgs: 1 },
                      removeHistory: { minArgs: 1, maxArgs: 1 },
                      removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                      removePasswords: { minArgs: 1, maxArgs: 1 },
                      removePluginData: { minArgs: 1, maxArgs: 1 },
                      settings: { minArgs: 0, maxArgs: 0 },
                    },
                    commands: { getAll: { minArgs: 0, maxArgs: 0 } },
                    contextMenus: {
                      remove: { minArgs: 1, maxArgs: 1 },
                      removeAll: { minArgs: 0, maxArgs: 0 },
                      update: { minArgs: 2, maxArgs: 2 },
                    },
                    cookies: {
                      get: { minArgs: 1, maxArgs: 1 },
                      getAll: { minArgs: 1, maxArgs: 1 },
                      getAllCookieStores: { minArgs: 0, maxArgs: 0 },
                      remove: { minArgs: 1, maxArgs: 1 },
                      set: { minArgs: 1, maxArgs: 1 },
                    },
                    devtools: {
                      inspectedWindow: {
                        eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: !1 },
                      },
                      panels: {
                        create: {
                          minArgs: 3,
                          maxArgs: 3,
                          singleCallbackArg: !0,
                        },
                      },
                    },
                    downloads: {
                      cancel: { minArgs: 1, maxArgs: 1 },
                      download: { minArgs: 1, maxArgs: 1 },
                      erase: { minArgs: 1, maxArgs: 1 },
                      getFileIcon: { minArgs: 1, maxArgs: 2 },
                      open: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                      pause: { minArgs: 1, maxArgs: 1 },
                      removeFile: { minArgs: 1, maxArgs: 1 },
                      resume: { minArgs: 1, maxArgs: 1 },
                      search: { minArgs: 1, maxArgs: 1 },
                      show: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                    },
                    extension: {
                      isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 },
                      isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 },
                    },
                    history: {
                      addUrl: { minArgs: 1, maxArgs: 1 },
                      deleteAll: { minArgs: 0, maxArgs: 0 },
                      deleteRange: { minArgs: 1, maxArgs: 1 },
                      deleteUrl: { minArgs: 1, maxArgs: 1 },
                      getVisits: { minArgs: 1, maxArgs: 1 },
                      search: { minArgs: 1, maxArgs: 1 },
                    },
                    i18n: {
                      detectLanguage: { minArgs: 1, maxArgs: 1 },
                      getAcceptLanguages: { minArgs: 0, maxArgs: 0 },
                    },
                    identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
                    idle: { queryState: { minArgs: 1, maxArgs: 1 } },
                    management: {
                      get: { minArgs: 1, maxArgs: 1 },
                      getAll: { minArgs: 0, maxArgs: 0 },
                      getSelf: { minArgs: 0, maxArgs: 0 },
                      setEnabled: { minArgs: 2, maxArgs: 2 },
                      uninstallSelf: { minArgs: 0, maxArgs: 1 },
                    },
                    notifications: {
                      clear: { minArgs: 1, maxArgs: 1 },
                      create: { minArgs: 1, maxArgs: 2 },
                      getAll: { minArgs: 0, maxArgs: 0 },
                      getPermissionLevel: { minArgs: 0, maxArgs: 0 },
                      update: { minArgs: 2, maxArgs: 2 },
                    },
                    pageAction: {
                      getPopup: { minArgs: 1, maxArgs: 1 },
                      getTitle: { minArgs: 1, maxArgs: 1 },
                      hide: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                      setIcon: { minArgs: 1, maxArgs: 1 },
                      setPopup: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                      setTitle: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                      show: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                    },
                    permissions: {
                      contains: { minArgs: 1, maxArgs: 1 },
                      getAll: { minArgs: 0, maxArgs: 0 },
                      remove: { minArgs: 1, maxArgs: 1 },
                      request: { minArgs: 1, maxArgs: 1 },
                    },
                    runtime: {
                      getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                      getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                      openOptionsPage: { minArgs: 0, maxArgs: 0 },
                      requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                      sendMessage: { minArgs: 1, maxArgs: 3 },
                      sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                      setUninstallURL: { minArgs: 1, maxArgs: 1 },
                    },
                    sessions: {
                      getDevices: { minArgs: 0, maxArgs: 1 },
                      getRecentlyClosed: { minArgs: 0, maxArgs: 1 },
                      restore: { minArgs: 0, maxArgs: 1 },
                    },
                    storage: {
                      local: {
                        clear: { minArgs: 0, maxArgs: 0 },
                        get: { minArgs: 0, maxArgs: 1 },
                        getBytesInUse: { minArgs: 0, maxArgs: 1 },
                        remove: { minArgs: 1, maxArgs: 1 },
                        set: { minArgs: 1, maxArgs: 1 },
                      },
                      managed: {
                        get: { minArgs: 0, maxArgs: 1 },
                        getBytesInUse: { minArgs: 0, maxArgs: 1 },
                      },
                      sync: {
                        clear: { minArgs: 0, maxArgs: 0 },
                        get: { minArgs: 0, maxArgs: 1 },
                        getBytesInUse: { minArgs: 0, maxArgs: 1 },
                        remove: { minArgs: 1, maxArgs: 1 },
                        set: { minArgs: 1, maxArgs: 1 },
                      },
                    },
                    tabs: {
                      captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                      create: { minArgs: 1, maxArgs: 1 },
                      detectLanguage: { minArgs: 0, maxArgs: 1 },
                      discard: { minArgs: 0, maxArgs: 1 },
                      duplicate: { minArgs: 1, maxArgs: 1 },
                      executeScript: { minArgs: 1, maxArgs: 2 },
                      get: { minArgs: 1, maxArgs: 1 },
                      getCurrent: { minArgs: 0, maxArgs: 0 },
                      getZoom: { minArgs: 0, maxArgs: 1 },
                      getZoomSettings: { minArgs: 0, maxArgs: 1 },
                      highlight: { minArgs: 1, maxArgs: 1 },
                      insertCSS: { minArgs: 1, maxArgs: 2 },
                      move: { minArgs: 2, maxArgs: 2 },
                      query: { minArgs: 1, maxArgs: 1 },
                      reload: { minArgs: 0, maxArgs: 2 },
                      remove: { minArgs: 1, maxArgs: 1 },
                      removeCSS: { minArgs: 1, maxArgs: 2 },
                      sendMessage: { minArgs: 2, maxArgs: 3 },
                      setZoom: { minArgs: 1, maxArgs: 2 },
                      setZoomSettings: { minArgs: 1, maxArgs: 2 },
                      update: { minArgs: 1, maxArgs: 2 },
                    },
                    topSites: { get: { minArgs: 0, maxArgs: 0 } },
                    webNavigation: {
                      getAllFrames: { minArgs: 1, maxArgs: 1 },
                      getFrame: { minArgs: 1, maxArgs: 1 },
                    },
                    webRequest: {
                      handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 },
                    },
                    windows: {
                      create: { minArgs: 0, maxArgs: 1 },
                      get: { minArgs: 1, maxArgs: 2 },
                      getAll: { minArgs: 0, maxArgs: 1 },
                      getCurrent: { minArgs: 0, maxArgs: 1 },
                      getLastFocused: { minArgs: 0, maxArgs: 1 },
                      remove: { minArgs: 1, maxArgs: 1 },
                      update: { minArgs: 2, maxArgs: 2 },
                    },
                  };
                  if (0 === Object.keys(n).length)
                    throw new Error(
                      "api-metadata.json has not been included in browser-polyfill"
                    );
                  class s extends WeakMap {
                    constructor(e, r) {
                      super(r), (this.createItem = e);
                    }
                    get(e) {
                      return (
                        this.has(e) || this.set(e, this.createItem(e)),
                        super.get(e)
                      );
                    }
                  }
                  const a =
                      (r, t) =>
                      (...n) => {
                        e.runtime.lastError
                          ? r.reject(e.runtime.lastError)
                          : t.singleCallbackArg ||
                            (n.length <= 1 && !1 !== t.singleCallbackArg)
                          ? r.resolve(n[0])
                          : r.resolve(n);
                      },
                    o = (e) => (1 == e ? "argument" : "arguments"),
                    i = (e, r, t) =>
                      new Proxy(r, { apply: (r, n, s) => t.call(n, e, ...s) });
                  let g = Function.call.bind(Object.prototype.hasOwnProperty);
                  const m = (e, r = {}, t = {}) => {
                      let n = Object.create(null),
                        s = {
                          has: (r, t) => t in e || t in n,
                          get(s, l, c) {
                            if (l in n) return n[l];
                            if (!(l in e)) return;
                            let A = e[l];
                            if ("function" == typeof A)
                              if ("function" == typeof r[l])
                                A = i(e, e[l], r[l]);
                              else if (g(t, l)) {
                                let r = ((e, r) =>
                                  function (t, ...n) {
                                    if (n.length < r.minArgs)
                                      throw new Error(
                                        `Expected at least ${r.minArgs} ${o(
                                          r.minArgs
                                        )} for ${e}(), got ${n.length}`
                                      );
                                    if (n.length > r.maxArgs)
                                      throw new Error(
                                        `Expected at most ${r.maxArgs} ${o(
                                          r.maxArgs
                                        )} for ${e}(), got ${n.length}`
                                      );
                                    return new Promise((s, o) => {
                                      if (r.fallbackToNoCallback)
                                        try {
                                          t[e](
                                            ...n,
                                            a({ resolve: s, reject: o }, r)
                                          );
                                        } catch (a) {
                                          console.warn(
                                            `${e} API method doesn't seem to support the callback parameter, ` +
                                              "falling back to call it without a callback: ",
                                            a
                                          ),
                                            t[e](...n),
                                            (r.fallbackToNoCallback = !1),
                                            (r.noCallback = !0),
                                            s();
                                        }
                                      else
                                        r.noCallback
                                          ? (t[e](...n), s())
                                          : t[e](
                                              ...n,
                                              a({ resolve: s, reject: o }, r)
                                            );
                                    });
                                  })(l, t[l]);
                                A = i(e, e[l], r);
                              } else A = A.bind(e);
                            else {
                              if (
                                "object" != typeof A ||
                                null === A ||
                                (!g(r, l) && !g(t, l))
                              )
                                return (
                                  Object.defineProperty(n, l, {
                                    configurable: !0,
                                    enumerable: !0,
                                    get: () => e[l],
                                    set(r) {
                                      e[l] = r;
                                    },
                                  }),
                                  A
                                );
                              A = m(A, r[l], t[l]);
                            }
                            return (n[l] = A), A;
                          },
                          set: (r, t, s, a) => (
                            t in n ? (n[t] = s) : (e[t] = s), !0
                          ),
                          defineProperty: (e, r, t) =>
                            Reflect.defineProperty(n, r, t),
                          deleteProperty: (e, r) =>
                            Reflect.deleteProperty(n, r),
                        },
                        l = Object.create(e);
                      return new Proxy(l, s);
                    },
                    l = (e) => ({
                      addListener(r, t, ...n) {
                        r.addListener(e.get(t), ...n);
                      },
                      hasListener: (r, t) => r.hasListener(e.get(t)),
                      removeListener(r, t) {
                        r.removeListener(e.get(t));
                      },
                    });
                  let c = !1;
                  const A = new s((e) =>
                      "function" != typeof e
                        ? e
                        : function (r, n, s) {
                            let a,
                              o,
                              i = !1,
                              g = new Promise((e) => {
                                a = function (r) {
                                  c ||
                                    (console.warn(t, new Error().stack),
                                    (c = !0)),
                                    (i = !0),
                                    e(r);
                                };
                              });
                            try {
                              o = e(r, n, a);
                            } catch (e) {
                              o = Promise.reject(e);
                            }
                            const m =
                              !0 !== o &&
                              ((e) =>
                                e &&
                                "object" == typeof e &&
                                "function" == typeof e.then)(o);
                            if (!0 !== o && !m && !i) return !1;
                            const l = (e) => {
                              e.then(
                                (e) => {
                                  s(e);
                                },
                                (e) => {
                                  let r;
                                  (r =
                                    e &&
                                    (e instanceof Error ||
                                      "string" == typeof e.message)
                                      ? e.message
                                      : "An unexpected error occurred"),
                                    s({
                                      __mozWebExtensionPolyfillReject__: !0,
                                      message: r,
                                    });
                                }
                              ).catch((e) => {
                                console.error(
                                  "Failed to send onMessage rejected reply",
                                  e
                                );
                              });
                            };
                            return l(m ? o : g), !0;
                          }
                    ),
                    u = ({ reject: t, resolve: n }, s) => {
                      e.runtime.lastError
                        ? e.runtime.lastError.message === r
                          ? n()
                          : t(e.runtime.lastError)
                        : s && s.__mozWebExtensionPolyfillReject__
                        ? t(new Error(s.message))
                        : n(s);
                    },
                    f = (e, r, t, ...n) => {
                      if (n.length < r.minArgs)
                        throw new Error(
                          `Expected at least ${r.minArgs} ${o(
                            r.minArgs
                          )} for ${e}(), got ${n.length}`
                        );
                      if (n.length > r.maxArgs)
                        throw new Error(
                          `Expected at most ${r.maxArgs} ${o(
                            r.maxArgs
                          )} for ${e}(), got ${n.length}`
                        );
                      return new Promise((e, r) => {
                        const s = u.bind(null, { resolve: e, reject: r });
                        n.push(s), t.sendMessage(...n);
                      });
                    },
                    x = {
                      runtime: {
                        onMessage: l(A),
                        onMessageExternal: l(A),
                        sendMessage: f.bind(null, "sendMessage", {
                          minArgs: 1,
                          maxArgs: 3,
                        }),
                      },
                      tabs: {
                        sendMessage: f.bind(null, "sendMessage", {
                          minArgs: 2,
                          maxArgs: 3,
                        }),
                      },
                    },
                    h = {
                      clear: { minArgs: 1, maxArgs: 1 },
                      get: { minArgs: 1, maxArgs: 1 },
                      set: { minArgs: 1, maxArgs: 1 },
                    };
                  return (
                    (n.privacy = {
                      network: {
                        networkPredictionEnabled: h,
                        webRTCIPHandlingPolicy: h,
                      },
                      services: { passwordSavingEnabled: h },
                      websites: {
                        hyperlinkAuditingEnabled: h,
                        referrersEnabled: h,
                      },
                    }),
                    m(e, x, n)
                  );
                };
              if (
                "object" != typeof chrome ||
                !chrome ||
                !chrome.runtime ||
                !chrome.runtime.id
              )
                throw new Error(
                  "This script should only be loaded in a browser extension."
                );
              e.exports = n(chrome);
            } else e.exports = browser;
          })
            ? n.apply(r, s)
            : n) || (e.exports = a);
  },
});
