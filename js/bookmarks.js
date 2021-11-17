!(function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var o = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          n.d(
            r,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 202));
})([
  function (t, e, n) {
    var r = n(8),
      o = n(62).f,
      i = n(16),
      a = n(22),
      s = n(55),
      c = n(153),
      l = n(80);
    t.exports = function (t, e) {
      var n,
        u,
        f,
        d,
        h,
        p = t.target,
        m = t.global,
        g = t.stat;
      if ((n = m ? r : g ? r[p] || s(p, {}) : (r[p] || {}).prototype))
        for (u in e) {
          if (
            ((d = e[u]),
            (f = t.noTargetGet ? (h = o(n, u)) && h.value : n[u]),
            !l(m ? u : p + (g ? "." : "#") + u, t.forced) && void 0 !== f)
          ) {
            if (typeof d == typeof f) continue;
            c(d, f);
          }
          (t.sham || (f && f.sham)) && i(d, "sham", !0), a(n, u, d, t);
        }
    };
  },
  function (t, e, n) {
    var r = n(12);
    t.exports = function (t) {
      if (!r(t)) throw TypeError(String(t) + " is not an object");
      return t;
    };
  },
  function (t, e) {
    t.exports = !1;
  },
  function (t, e, n) {
    var r = n(1),
      o = n(90),
      i = n(25),
      a = n(9),
      s = n(51),
      c = n(89),
      l = function (t, e) {
        (this.stopped = t), (this.result = e);
      };
    (t.exports = function (t, e, n, u, f) {
      var d,
        h,
        p,
        m,
        g,
        v,
        b,
        y = a(e, n, u ? 2 : 1);
      if (f) d = t;
      else {
        if ("function" != typeof (h = s(t)))
          throw TypeError("Target is not iterable");
        if (o(h)) {
          for (p = 0, m = i(t.length); m > p; p++)
            if ((g = u ? y(r((b = t[p]))[0], b[1]) : y(t[p])) && g instanceof l)
              return g;
          return new l(!1);
        }
        d = h.call(t);
      }
      for (v = d.next; !(b = v.call(d)).done; )
        if ("object" == typeof (g = c(d, y, b.value, u)) && g && g instanceof l)
          return g;
      return new l(!1);
    }).stop = function (t) {
      return new l(!0, t);
    };
  },
  function (t, e, n) {
    var r, o, i;
    (o = [t]),
      void 0 ===
        (i =
          "function" ==
          typeof (r = function (t) {
            "use strict";
            if (
              "undefined" == typeof browser ||
              Object.getPrototypeOf(browser) !== Object.prototype
            ) {
              const e =
                  "The message port closed before a response was received.",
                n =
                  "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",
                r = (t) => {
                  const r = {
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
                  if (0 === Object.keys(r).length)
                    throw new Error(
                      "api-metadata.json has not been included in browser-polyfill"
                    );
                  class o extends WeakMap {
                    constructor(t, e) {
                      super(e), (this.createItem = t);
                    }
                    get(t) {
                      return (
                        this.has(t) || this.set(t, this.createItem(t)),
                        super.get(t)
                      );
                    }
                  }
                  const i =
                      (e, n) =>
                      (...r) => {
                        t.runtime.lastError
                          ? e.reject(t.runtime.lastError)
                          : n.singleCallbackArg ||
                            (r.length <= 1 && !1 !== n.singleCallbackArg)
                          ? e.resolve(r[0])
                          : e.resolve(r);
                      },
                    a = (t) => (1 == t ? "argument" : "arguments"),
                    s = (t, e, n) =>
                      new Proxy(e, { apply: (e, r, o) => n.call(r, t, ...o) });
                  let c = Function.call.bind(Object.prototype.hasOwnProperty);
                  const l = (t, e = {}, n = {}) => {
                      let r = Object.create(null),
                        o = {
                          has: (e, n) => n in t || n in r,
                          get(o, u, f) {
                            if (u in r) return r[u];
                            if (!(u in t)) return;
                            let d = t[u];
                            if ("function" == typeof d)
                              if ("function" == typeof e[u])
                                d = s(t, t[u], e[u]);
                              else if (c(n, u)) {
                                let e = ((t, e) =>
                                  function (n, ...r) {
                                    if (r.length < e.minArgs)
                                      throw new Error(
                                        `Expected at least ${e.minArgs} ${a(
                                          e.minArgs
                                        )} for ${t}(), got ${r.length}`
                                      );
                                    if (r.length > e.maxArgs)
                                      throw new Error(
                                        `Expected at most ${e.maxArgs} ${a(
                                          e.maxArgs
                                        )} for ${t}(), got ${r.length}`
                                      );
                                    return new Promise((o, a) => {
                                      if (e.fallbackToNoCallback)
                                        try {
                                          n[t](
                                            ...r,
                                            i({ resolve: o, reject: a }, e)
                                          );
                                        } catch (i) {
                                          console.warn(
                                            `${t} API method doesn't seem to support the callback parameter, ` +
                                              "falling back to call it without a callback: ",
                                            i
                                          ),
                                            n[t](...r),
                                            (e.fallbackToNoCallback = !1),
                                            (e.noCallback = !0),
                                            o();
                                        }
                                      else
                                        e.noCallback
                                          ? (n[t](...r), o())
                                          : n[t](
                                              ...r,
                                              i({ resolve: o, reject: a }, e)
                                            );
                                    });
                                  })(u, n[u]);
                                d = s(t, t[u], e);
                              } else d = d.bind(t);
                            else {
                              if (
                                "object" != typeof d ||
                                null === d ||
                                (!c(e, u) && !c(n, u))
                              )
                                return (
                                  Object.defineProperty(r, u, {
                                    configurable: !0,
                                    enumerable: !0,
                                    get: () => t[u],
                                    set(e) {
                                      t[u] = e;
                                    },
                                  }),
                                  d
                                );
                              d = l(d, e[u], n[u]);
                            }
                            return (r[u] = d), d;
                          },
                          set: (e, n, o, i) => (
                            n in r ? (r[n] = o) : (t[n] = o), !0
                          ),
                          defineProperty: (t, e, n) =>
                            Reflect.defineProperty(r, e, n),
                          deleteProperty: (t, e) =>
                            Reflect.deleteProperty(r, e),
                        },
                        u = Object.create(t);
                      return new Proxy(u, o);
                    },
                    u = (t) => ({
                      addListener(e, n, ...r) {
                        e.addListener(t.get(n), ...r);
                      },
                      hasListener: (e, n) => e.hasListener(t.get(n)),
                      removeListener(e, n) {
                        e.removeListener(t.get(n));
                      },
                    });
                  let f = !1;
                  const d = new o((t) =>
                      "function" != typeof t
                        ? t
                        : function (e, r, o) {
                            let i,
                              a,
                              s = !1,
                              c = new Promise((t) => {
                                i = function (e) {
                                  f ||
                                    (console.warn(n, new Error().stack),
                                    (f = !0)),
                                    (s = !0),
                                    t(e);
                                };
                              });
                            try {
                              a = t(e, r, i);
                            } catch (t) {
                              a = Promise.reject(t);
                            }
                            const l =
                              !0 !== a &&
                              ((t) =>
                                t &&
                                "object" == typeof t &&
                                "function" == typeof t.then)(a);
                            if (!0 !== a && !l && !s) return !1;
                            const u = (t) => {
                              t.then(
                                (t) => {
                                  o(t);
                                },
                                (t) => {
                                  let e;
                                  (e =
                                    t &&
                                    (t instanceof Error ||
                                      "string" == typeof t.message)
                                      ? t.message
                                      : "An unexpected error occurred"),
                                    o({
                                      __mozWebExtensionPolyfillReject__: !0,
                                      message: e,
                                    });
                                }
                              ).catch((t) => {
                                console.error(
                                  "Failed to send onMessage rejected reply",
                                  t
                                );
                              });
                            };
                            return u(l ? a : c), !0;
                          }
                    ),
                    h = ({ reject: n, resolve: r }, o) => {
                      t.runtime.lastError
                        ? t.runtime.lastError.message === e
                          ? r()
                          : n(t.runtime.lastError)
                        : o && o.__mozWebExtensionPolyfillReject__
                        ? n(new Error(o.message))
                        : r(o);
                    },
                    p = (t, e, n, ...r) => {
                      if (r.length < e.minArgs)
                        throw new Error(
                          `Expected at least ${e.minArgs} ${a(
                            e.minArgs
                          )} for ${t}(), got ${r.length}`
                        );
                      if (r.length > e.maxArgs)
                        throw new Error(
                          `Expected at most ${e.maxArgs} ${a(
                            e.maxArgs
                          )} for ${t}(), got ${r.length}`
                        );
                      return new Promise((t, e) => {
                        const o = h.bind(null, { resolve: t, reject: e });
                        r.push(o), n.sendMessage(...r);
                      });
                    },
                    m = {
                      runtime: {
                        onMessage: u(d),
                        onMessageExternal: u(d),
                        sendMessage: p.bind(null, "sendMessage", {
                          minArgs: 1,
                          maxArgs: 3,
                        }),
                      },
                      tabs: {
                        sendMessage: p.bind(null, "sendMessage", {
                          minArgs: 2,
                          maxArgs: 3,
                        }),
                      },
                    },
                    g = {
                      clear: { minArgs: 1, maxArgs: 1 },
                      get: { minArgs: 1, maxArgs: 1 },
                      set: { minArgs: 1, maxArgs: 1 },
                    };
                  return (
                    (r.privacy = {
                      network: {
                        networkPredictionEnabled: g,
                        webRTCIPHandlingPolicy: g,
                      },
                      services: { passwordSavingEnabled: g },
                      websites: {
                        hyperlinkAuditingEnabled: g,
                        referrersEnabled: g,
                      },
                    }),
                    l(t, m, r)
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
              t.exports = r(chrome);
            } else t.exports = browser;
          })
            ? r.apply(e, o)
            : r) || (t.exports = i);
  },
  function (t, e) {
    t.exports = function (t) {
      if ("function" != typeof t)
        throw TypeError(String(t) + " is not a function");
      return t;
    };
  },
  function (t, e, n) {
    var r = n(8),
      o = n(42),
      i = n(57),
      a = n(149),
      s = r.Symbol,
      c = o("wks");
    t.exports = function (t) {
      return c[t] || (c[t] = (a && s[t]) || (a ? s : i)("Symbol." + t));
    };
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function (t, e, n) {
    (function (e) {
      var n = function (t) {
        return t && t.Math == Math && t;
      };
      t.exports =
        n("object" == typeof globalThis && globalThis) ||
        n("object" == typeof window && window) ||
        n("object" == typeof self && self) ||
        n("object" == typeof e && e) ||
        Function("return this")();
    }.call(this, n(147)));
  },
  function (t, e, n) {
    var r = n(5);
    t.exports = function (t, e, n) {
      if ((r(t), void 0 === e)) return t;
      switch (n) {
        case 0:
          return function () {
            return t.call(e);
          };
        case 1:
          return function (n) {
            return t.call(e, n);
          };
        case 2:
          return function (n, r) {
            return t.call(e, n, r);
          };
        case 3:
          return function (n, r, o) {
            return t.call(e, n, r, o);
          };
      }
      return function () {
        return t.apply(e, arguments);
      };
    };
  },
  function (t, e, n) {
    n(0)({ target: "Object", stat: !0, sham: !n(13) }, { create: n(27) });
  },
  function (t, e, n) {
    var r = n(151),
      o = n(8),
      i = function (t) {
        return "function" == typeof t ? t : void 0;
      };
    t.exports = function (t, e) {
      return arguments.length < 2
        ? i(r[t]) || i(o[t])
        : (r[t] && r[t][e]) || (o[t] && o[t][e]);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    };
  },
  function (t, e, n) {
    var r = n(7);
    t.exports = !r(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    });
  },
  function (t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function (t, e) {
      return n.call(t, e);
    };
  },
  function (t, e, n) {
    var r = n(8),
      o = n(86),
      i = n(158),
      a = n(16);
    for (var s in o) {
      var c = r[s],
        l = c && c.prototype;
      if (l && l.forEach !== i)
        try {
          a(l, "forEach", i);
        } catch (t) {
          l.forEach = i;
        }
    }
  },
  function (t, e, n) {
    var r = n(13),
      o = n(18),
      i = n(31);
    t.exports = r
      ? function (t, e, n) {
          return o.f(t, e, i(1, n));
        }
      : function (t, e, n) {
          return (t[e] = n), t;
        };
  },
  function (t, e, n) {
    var r = n(2),
      o = n(52);
    t.exports = r
      ? o
      : function (t) {
          return Map.prototype.entries.call(t);
        };
  },
  function (t, e, n) {
    var r = n(13),
      o = n(72),
      i = n(1),
      a = n(56),
      s = Object.defineProperty;
    e.f = r
      ? s
      : function (t, e, n) {
          if ((i(t), (e = a(e, !0)), i(n), o))
            try {
              return s(t, e, n);
            } catch (t) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported");
          return "value" in n && (t[e] = n.value), t;
        };
  },
  function (t, e, n) {
    var r = n(1),
      o = n(5),
      i = n(6)("species");
    t.exports = function (t, e) {
      var n,
        a = r(t).constructor;
      return void 0 === a || null == (n = r(a)[i]) ? e : o(n);
    };
  },
  function (t, e, n) {
    var r = n(40),
      o = n(21);
    t.exports = function (t) {
      return r(o(t));
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    };
  },
  function (t, e, n) {
    var r = n(8),
      o = n(42),
      i = n(16),
      a = n(14),
      s = n(55),
      c = n(77),
      l = n(28),
      u = l.get,
      f = l.enforce,
      d = String(c).split("toString");
    o("inspectSource", function (t) {
      return c.call(t);
    }),
      (t.exports = function (t, e, n, o) {
        var c = !!o && !!o.unsafe,
          l = !!o && !!o.enumerable,
          u = !!o && !!o.noTargetGet;
        "function" == typeof n &&
          ("string" != typeof e || a(n, "name") || i(n, "name", e),
          (f(n).source = d.join("string" == typeof e ? e : ""))),
          t !== r
            ? (c ? !u && t[e] && (l = !0) : delete t[e],
              l ? (t[e] = n) : i(t, e, n))
            : l
            ? (t[e] = n)
            : s(e, n);
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && u(this).source) || c.call(this);
      });
  },
  function (t, e, n) {
    var r = n(21);
    t.exports = function (t) {
      return Object(r(t));
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(20),
      o = n(41),
      i = n(32),
      a = n(28),
      s = n(61),
      c = a.set,
      l = a.getterFor("Array Iterator");
    (t.exports = s(
      Array,
      "Array",
      function (t, e) {
        c(this, { type: "Array Iterator", target: r(t), index: 0, kind: e });
      },
      function () {
        var t = l(this),
          e = t.target,
          n = t.kind,
          r = t.index++;
        return !e || r >= e.length
          ? ((t.target = void 0), { value: void 0, done: !0 })
          : "keys" == n
          ? { value: r, done: !1 }
          : "values" == n
          ? { value: e[r], done: !1 }
          : { value: [r, e[r]], done: !1 };
      },
      "values"
    )),
      (i.Arguments = i.Array),
      o("keys"),
      o("values"),
      o("entries");
  },
  function (t, e, n) {
    var r = n(44),
      o = Math.min;
    t.exports = function (t) {
      return t > 0 ? o(r(t), 9007199254740991) : 0;
    };
  },
  function (t, e, n) {
    var r = n(2),
      o = n(52);
    t.exports = r
      ? o
      : function (t) {
          return Set.prototype.values.call(t);
        };
  },
  function (t, e, n) {
    var r = n(1),
      o = n(74),
      i = n(59),
      a = n(45),
      s = n(150),
      c = n(73),
      l = n(60)("IE_PROTO"),
      u = function () {},
      f = function () {
        var t,
          e = c("iframe"),
          n = i.length;
        for (
          e.style.display = "none",
            s.appendChild(e),
            e.src = String("javascript:"),
            (t = e.contentWindow.document).open(),
            t.write("<script>document.F=Object</script>"),
            t.close(),
            f = t.F;
          n--;

        )
          delete f.prototype[i[n]];
        return f();
      };
    (t.exports =
      Object.create ||
      function (t, e) {
        var n;
        return (
          null !== t
            ? ((u.prototype = r(t)),
              (n = new u()),
              (u.prototype = null),
              (n[l] = t))
            : (n = f()),
          void 0 === e ? n : o(n, e)
        );
      }),
      (a[l] = !0);
  },
  function (t, e, n) {
    var r,
      o,
      i,
      a = n(152),
      s = n(8),
      c = n(12),
      l = n(16),
      u = n(14),
      f = n(60),
      d = n(45),
      h = s.WeakMap;
    if (a) {
      var p = new h(),
        m = p.get,
        g = p.has,
        v = p.set;
      (r = function (t, e) {
        return v.call(p, t, e), e;
      }),
        (o = function (t) {
          return m.call(p, t) || {};
        }),
        (i = function (t) {
          return g.call(p, t);
        });
    } else {
      var b = f("state");
      (d[b] = !0),
        (r = function (t, e) {
          return l(t, b, e), e;
        }),
        (o = function (t) {
          return u(t, b) ? t[b] : {};
        }),
        (i = function (t) {
          return u(t, b);
        });
    }
    t.exports = {
      set: r,
      get: o,
      has: i,
      enforce: function (t) {
        return i(t) ? o(t) : r(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var n;
          if (!c(e) || (n = o(e)).type !== t)
            throw TypeError("Incompatible receiver, " + t + " required");
          return n;
        };
      },
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(66).charAt,
      o = n(28),
      i = n(61),
      a = o.set,
      s = o.getterFor("String Iterator");
    i(
      String,
      "String",
      function (t) {
        a(this, { type: "String Iterator", string: String(t), index: 0 });
      },
      function () {
        var t,
          e = s(this),
          n = e.string,
          o = e.index;
        return o >= n.length
          ? { value: void 0, done: !0 }
          : ((t = r(n, o)), (e.index += t.length), { value: t, done: !1 });
      }
    );
  },
  function (t, e) {
    var n = {}.toString;
    t.exports = function (t) {
      return n.call(t).slice(8, -1);
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    };
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, n) {
    var r = n(18).f,
      o = n(14),
      i = n(6)("toStringTag");
    t.exports = function (t, e, n) {
      t &&
        !o((t = n ? t : t.prototype), i) &&
        r(t, i, { configurable: !0, value: e });
    };
  },
  function (t, e, n) {
    var r = n(0),
      o = n(84);
    r(
      { target: "Object", stat: !0, forced: Object.assign !== o },
      { assign: o }
    );
  },
  function (t, e, n) {
    var r = n(8),
      o = n(86),
      i = n(24),
      a = n(16),
      s = n(6),
      c = s("iterator"),
      l = s("toStringTag"),
      u = i.values;
    for (var f in o) {
      var d = r[f],
        h = d && d.prototype;
      if (h) {
        if (h[c] !== u)
          try {
            a(h, c, u);
          } catch (t) {
            h[c] = u;
          }
        if ((h[l] || a(h, l, f), o[f]))
          for (var p in i)
            if (h[p] !== i[p])
              try {
                a(h, p, i[p]);
              } catch (t) {
                h[p] = i[p];
              }
      }
    }
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(58).includes,
      i = n(41);
    r(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
      i("includes");
  },
  function (t, e, n) {
    var r = n(22),
      o = Date.prototype,
      i = o.toString,
      a = o.getTime;
    new Date(NaN) + "" != "Invalid Date" &&
      r(o, "toString", function () {
        var t = a.call(this);
        return t == t ? i.call(this) : "Invalid Date";
      });
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(165),
      i = n(21);
    r(
      { target: "String", proto: !0, forced: !n(167)("includes") },
      {
        includes: function (t) {
          return !!~String(i(this)).indexOf(
            o(t),
            arguments.length > 1 ? arguments[1] : void 0
          );
        },
      }
    );
  },
  function (t, e, n) {
    var r = (function (t) {
      "use strict";
      var e,
        n = Object.prototype,
        r = n.hasOwnProperty,
        o = "function" == typeof Symbol ? Symbol : {},
        i = o.iterator || "@@iterator",
        a = o.asyncIterator || "@@asyncIterator",
        s = o.toStringTag || "@@toStringTag";
      function c(t, e, n, r) {
        var o = e && e.prototype instanceof m ? e : m,
          i = Object.create(o.prototype),
          a = new $(r || []);
        return (
          (i._invoke = (function (t, e, n) {
            var r = u;
            return function (o, i) {
              if (r === d) throw new Error("Generator is already running");
              if (r === h) {
                if ("throw" === o) throw i;
                return T();
              }
              for (n.method = o, n.arg = i; ; ) {
                var a = n.delegate;
                if (a) {
                  var s = A(a, n);
                  if (s) {
                    if (s === p) continue;
                    return s;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (r === u) throw ((r = h), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = d;
                var c = l(t, e, n);
                if ("normal" === c.type) {
                  if (((r = n.done ? h : f), c.arg === p)) continue;
                  return { value: c.arg, done: n.done };
                }
                "throw" === c.type &&
                  ((r = h), (n.method = "throw"), (n.arg = c.arg));
              }
            };
          })(t, n, a)),
          i
        );
      }
      function l(t, e, n) {
        try {
          return { type: "normal", arg: t.call(e, n) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      t.wrap = c;
      var u = "suspendedStart",
        f = "suspendedYield",
        d = "executing",
        h = "completed",
        p = {};
      function m() {}
      function g() {}
      function v() {}
      var b = {};
      b[i] = function () {
        return this;
      };
      var y = Object.getPrototypeOf,
        x = y && y(y(L([])));
      x && x !== n && r.call(x, i) && (b = x);
      var _ = (v.prototype = m.prototype = Object.create(b));
      function k(t) {
        ["next", "throw", "return"].forEach(function (e) {
          t[e] = function (t) {
            return this._invoke(e, t);
          };
        });
      }
      function w(t) {
        var e;
        this._invoke = function (n, o) {
          function i() {
            return new Promise(function (e, i) {
              !(function e(n, o, i, a) {
                var s = l(t[n], t, o);
                if ("throw" !== s.type) {
                  var c = s.arg,
                    u = c.value;
                  return u && "object" == typeof u && r.call(u, "__await")
                    ? Promise.resolve(u.__await).then(
                        function (t) {
                          e("next", t, i, a);
                        },
                        function (t) {
                          e("throw", t, i, a);
                        }
                      )
                    : Promise.resolve(u).then(
                        function (t) {
                          (c.value = t), i(c);
                        },
                        function (t) {
                          return e("throw", t, i, a);
                        }
                      );
                }
                a(s.arg);
              })(n, o, e, i);
            });
          }
          return (e = e ? e.then(i, i) : i());
        };
      }
      function A(t, n) {
        var r = t.iterator[n.method];
        if (r === e) {
          if (((n.delegate = null), "throw" === n.method)) {
            if (
              t.iterator.return &&
              ((n.method = "return"),
              (n.arg = e),
              A(t, n),
              "throw" === n.method)
            )
              return p;
            (n.method = "throw"),
              (n.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return p;
        }
        var o = l(r, t.iterator, n.arg);
        if ("throw" === o.type)
          return (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), p;
        var i = o.arg;
        return i
          ? i.done
            ? ((n[t.resultName] = i.value),
              (n.next = t.nextLoc),
              "return" !== n.method && ((n.method = "next"), (n.arg = e)),
              (n.delegate = null),
              p)
            : i
          : ((n.method = "throw"),
            (n.arg = new TypeError("iterator result is not an object")),
            (n.delegate = null),
            p);
      }
      function S(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function O(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function $(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(S, this),
          this.reset(!0);
      }
      function L(t) {
        if (t) {
          var n = t[i];
          if (n) return n.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var o = -1,
              a = function n() {
                for (; ++o < t.length; )
                  if (r.call(t, o)) return (n.value = t[o]), (n.done = !1), n;
                return (n.value = e), (n.done = !0), n;
              };
            return (a.next = a);
          }
        }
        return { next: T };
      }
      function T() {
        return { value: e, done: !0 };
      }
      return (
        (g.prototype = _.constructor = v),
        (v.constructor = g),
        (v[s] = g.displayName = "GeneratorFunction"),
        (t.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return (
            !!e &&
            (e === g || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (t.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, v)
              : ((t.__proto__ = v), s in t || (t[s] = "GeneratorFunction")),
            (t.prototype = Object.create(_)),
            t
          );
        }),
        (t.awrap = function (t) {
          return { __await: t };
        }),
        k(w.prototype),
        (w.prototype[a] = function () {
          return this;
        }),
        (t.AsyncIterator = w),
        (t.async = function (e, n, r, o) {
          var i = new w(c(e, n, r, o));
          return t.isGeneratorFunction(n)
            ? i
            : i.next().then(function (t) {
                return t.done ? t.value : i.next();
              });
        }),
        k(_),
        (_[s] = "Generator"),
        (_[i] = function () {
          return this;
        }),
        (_.toString = function () {
          return "[object Generator]";
        }),
        (t.keys = function (t) {
          var e = [];
          for (var n in t) e.push(n);
          return (
            e.reverse(),
            function n() {
              for (; e.length; ) {
                var r = e.pop();
                if (r in t) return (n.value = r), (n.done = !1), n;
              }
              return (n.done = !0), n;
            }
          );
        }),
        (t.values = L),
        ($.prototype = {
          constructor: $,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = e),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = e),
              this.tryEntries.forEach(O),
              !t)
            )
              for (var n in this)
                "t" === n.charAt(0) &&
                  r.call(this, n) &&
                  !isNaN(+n.slice(1)) &&
                  (this[n] = e);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var n = this;
            function o(r, o) {
              return (
                (s.type = "throw"),
                (s.arg = t),
                (n.next = r),
                o && ((n.method = "next"), (n.arg = e)),
                !!o
              );
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var a = this.tryEntries[i],
                s = a.completion;
              if ("root" === a.tryLoc) return o("end");
              if (a.tryLoc <= this.prev) {
                var c = r.call(a, "catchLoc"),
                  l = r.call(a, "finallyLoc");
                if (c && l) {
                  if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                } else if (c) {
                  if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                } else {
                  if (!l)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var o = this.tryEntries[n];
              if (
                o.tryLoc <= this.prev &&
                r.call(o, "finallyLoc") &&
                this.prev < o.finallyLoc
              ) {
                var i = o;
                break;
              }
            }
            i &&
              ("break" === t || "continue" === t) &&
              i.tryLoc <= e &&
              e <= i.finallyLoc &&
              (i = null);
            var a = i ? i.completion : {};
            return (
              (a.type = t),
              (a.arg = e),
              i
                ? ((this.method = "next"), (this.next = i.finallyLoc), p)
                : this.complete(a)
            );
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === t.type && e && (this.next = e),
              p
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];
              if (n.finallyLoc === t)
                return this.complete(n.completion, n.afterLoc), O(n), p;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];
              if (n.tryLoc === t) {
                var r = n.completion;
                if ("throw" === r.type) {
                  var o = r.arg;
                  O(n);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, n, r) {
            return (
              (this.delegate = { iterator: L(t), resultName: n, nextLoc: r }),
              "next" === this.method && (this.arg = e),
              p
            );
          },
        }),
        t
      );
    })(t.exports);
    try {
      regeneratorRuntime = r;
    } catch (t) {
      Function("r", "regeneratorRuntime = r")(r);
    }
  },
  function (t, e, n) {
    var r = n(7),
      o = n(30),
      i = "".split;
    t.exports = r(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (t) {
          return "String" == o(t) ? i.call(t, "") : Object(t);
        }
      : Object;
  },
  function (t, e, n) {
    var r = n(6),
      o = n(27),
      i = n(16),
      a = r("unscopables"),
      s = Array.prototype;
    null == s[a] && i(s, a, o(null)),
      (t.exports = function (t) {
        s[a][t] = !0;
      });
  },
  function (t, e, n) {
    var r = n(2),
      o = n(148);
    (t.exports = function (t, e) {
      return o[t] || (o[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: "3.4.1",
      mode: r ? "pure" : "global",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
    });
  },
  function (t, e, n) {
    var r = n(75),
      o = n(59);
    t.exports =
      Object.keys ||
      function (t) {
        return r(t, o);
      };
  },
  function (t, e) {
    var n = Math.ceil,
      r = Math.floor;
    t.exports = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
    };
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, n) {
    var r = n(0),
      o = n(23),
      i = n(43);
    r(
      {
        target: "Object",
        stat: !0,
        forced: n(7)(function () {
          i(1);
        }),
      },
      {
        keys: function (t) {
          return i(o(t));
        },
      }
    );
  },
  function (t, e, n) {
    var r = n(0),
      o = n(156);
    r({ global: !0, forced: parseInt != o }, { parseInt: o });
  },
  function (t, e, n) {
    var r = n(9),
      o = n(40),
      i = n(23),
      a = n(25),
      s = n(159),
      c = [].push,
      l = function (t) {
        var e = 1 == t,
          n = 2 == t,
          l = 3 == t,
          u = 4 == t,
          f = 6 == t,
          d = 5 == t || f;
        return function (h, p, m, g) {
          for (
            var v,
              b,
              y = i(h),
              x = o(y),
              _ = r(p, m, 3),
              k = a(x.length),
              w = 0,
              A = g || s,
              S = e ? A(h, k) : n ? A(h, 0) : void 0;
            k > w;
            w++
          )
            if ((d || w in x) && ((b = _((v = x[w]), w, y)), t))
              if (e) S[w] = b;
              else if (b)
                switch (t) {
                  case 3:
                    return !0;
                  case 5:
                    return v;
                  case 6:
                    return w;
                  case 2:
                    c.call(S, v);
                }
              else if (u) return !1;
          return f ? -1 : l || u ? u : S;
        };
      };
    t.exports = {
      forEach: l(0),
      map: l(1),
      filter: l(2),
      some: l(3),
      every: l(4),
      find: l(5),
      findIndex: l(6),
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(7);
    t.exports = function (t, e) {
      var n = [][t];
      return (
        !n ||
        !r(function () {
          n.call(
            null,
            e ||
              function () {
                throw 1;
              },
            1
          );
        })
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e, n) {
      if (!(t instanceof e))
        throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
      return t;
    };
  },
  function (t, e, n) {
    var r = n(91),
      o = n(32),
      i = n(6)("iterator");
    t.exports = function (t) {
      if (null != t) return t[i] || t["@@iterator"] || o[r(t)];
    };
  },
  function (t, e, n) {
    var r = n(1),
      o = n(51);
    t.exports = function (t) {
      var e = o(t);
      if ("function" != typeof e)
        throw TypeError(String(t) + " is not iterable");
      return r(e.call(t));
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(12),
      i = n(67),
      a = n(76),
      s = n(25),
      c = n(20),
      l = n(69),
      u = n(93),
      f = n(6)("species"),
      d = [].slice,
      h = Math.max;
    r(
      { target: "Array", proto: !0, forced: !u("slice") },
      {
        slice: function (t, e) {
          var n,
            r,
            u,
            p = c(this),
            m = s(p.length),
            g = a(t, m),
            v = a(void 0 === e ? m : e, m);
          if (
            i(p) &&
            ("function" != typeof (n = p.constructor) ||
            (n !== Array && !i(n.prototype))
              ? o(n) && null === (n = n[f]) && (n = void 0)
              : (n = void 0),
            n === Array || void 0 === n)
          )
            return d.call(p, g, v);
          for (
            r = new (void 0 === n ? Array : n)(h(v - g, 0)), u = 0;
            g < v;
            g++, u++
          )
            g in p && l(r, u, p[g]);
          return (r.length = u), r;
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.mapValues = function (t, e) {
        var n = {};
        for (var r in t)
          if (t.hasOwnProperty(r)) {
            var o = t[r];
            n[r] = e(o);
          }
        return n;
      }),
      (e.assignDeep = function t(e) {
        for (var n = [], r = 1; r < arguments.length; r++)
          n[r - 1] = arguments[r];
        return (
          n.forEach(function (n) {
            if (n)
              for (var r in n)
                if (n.hasOwnProperty(r)) {
                  var o = n[r];
                  Array.isArray(o)
                    ? (e[r] = o.slice(0))
                    : "object" == typeof o
                    ? (e[r] || (e[r] = {}), t(e[r], o))
                    : (e[r] = o);
                }
          }),
          e
        );
      });
  },
  function (t, e, n) {
    var r = n(8),
      o = n(16);
    t.exports = function (t, e) {
      try {
        o(r, t, e);
      } catch (n) {
        r[t] = e;
      }
      return e;
    };
  },
  function (t, e, n) {
    var r = n(12);
    t.exports = function (t, e) {
      if (!r(t)) return t;
      var n, o;
      if (e && "function" == typeof (n = t.toString) && !r((o = n.call(t))))
        return o;
      if ("function" == typeof (n = t.valueOf) && !r((o = n.call(t)))) return o;
      if (!e && "function" == typeof (n = t.toString) && !r((o = n.call(t))))
        return o;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (t, e) {
    var n = 0,
      r = Math.random();
    t.exports = function (t) {
      return (
        "Symbol(" +
        String(void 0 === t ? "" : t) +
        ")_" +
        (++n + r).toString(36)
      );
    };
  },
  function (t, e, n) {
    var r = n(20),
      o = n(25),
      i = n(76),
      a = function (t) {
        return function (e, n, a) {
          var s,
            c = r(e),
            l = o(c.length),
            u = i(a, l);
          if (t && n != n) {
            for (; l > u; ) if ((s = c[u++]) != s) return !0;
          } else
            for (; l > u; u++)
              if ((t || u in c) && c[u] === n) return t || u || 0;
          return !t && -1;
        };
      };
    t.exports = { includes: a(!0), indexOf: a(!1) };
  },
  function (t, e) {
    t.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  },
  function (t, e, n) {
    var r = n(42),
      o = n(57),
      i = r("keys");
    t.exports = function (t) {
      return i[t] || (i[t] = o(t));
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(81),
      i = n(64),
      a = n(65),
      s = n(33),
      c = n(16),
      l = n(22),
      u = n(6),
      f = n(2),
      d = n(32),
      h = n(82),
      p = h.IteratorPrototype,
      m = h.BUGGY_SAFARI_ITERATORS,
      g = u("iterator"),
      v = function () {
        return this;
      };
    t.exports = function (t, e, n, u, h, b, y) {
      o(n, e, u);
      var x,
        _,
        k,
        w = function (t) {
          if (t === h && L) return L;
          if (!m && t in O) return O[t];
          switch (t) {
            case "keys":
            case "values":
            case "entries":
              return function () {
                return new n(this, t);
              };
          }
          return function () {
            return new n(this);
          };
        },
        A = e + " Iterator",
        S = !1,
        O = t.prototype,
        $ = O[g] || O["@@iterator"] || (h && O[h]),
        L = (!m && $) || w(h),
        T = ("Array" == e && O.entries) || $;
      if (
        (T &&
          ((x = i(T.call(new t()))),
          p !== Object.prototype &&
            x.next &&
            (f ||
              i(x) === p ||
              (a ? a(x, p) : "function" != typeof x[g] && c(x, g, v)),
            s(x, A, !0, !0),
            f && (d[A] = v))),
        "values" == h &&
          $ &&
          "values" !== $.name &&
          ((S = !0),
          (L = function () {
            return $.call(this);
          })),
        (f && !y) || O[g] === L || c(O, g, L),
        (d[e] = L),
        h)
      )
        if (
          ((_ = {
            values: w("values"),
            keys: b ? L : w("keys"),
            entries: w("entries"),
          }),
          y)
        )
          for (k in _) (!m && !S && k in O) || l(O, k, _[k]);
        else r({ target: e, proto: !0, forced: m || S }, _);
      return _;
    };
  },
  function (t, e, n) {
    var r = n(13),
      o = n(63),
      i = n(31),
      a = n(20),
      s = n(56),
      c = n(14),
      l = n(72),
      u = Object.getOwnPropertyDescriptor;
    e.f = r
      ? u
      : function (t, e) {
          if (((t = a(t)), (e = s(e, !0)), l))
            try {
              return u(t, e);
            } catch (t) {}
          if (c(t, e)) return i(!o.f.call(t, e), t[e]);
        };
  },
  function (t, e, n) {
    "use strict";
    var r = {}.propertyIsEnumerable,
      o = Object.getOwnPropertyDescriptor,
      i = o && !r.call({ 1: 2 }, 1);
    e.f = i
      ? function (t) {
          var e = o(this, t);
          return !!e && e.enumerable;
        }
      : r;
  },
  function (t, e, n) {
    var r = n(14),
      o = n(23),
      i = n(60),
      a = n(83),
      s = i("IE_PROTO"),
      c = Object.prototype;
    t.exports = a
      ? Object.getPrototypeOf
      : function (t) {
          return (
            (t = o(t)),
            r(t, s)
              ? t[s]
              : "function" == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? c
              : null
          );
        };
  },
  function (t, e, n) {
    var r = n(1),
      o = n(155);
    t.exports =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var t,
              e = !1,
              n = {};
            try {
              (t = Object.getOwnPropertyDescriptor(
                Object.prototype,
                "__proto__"
              ).set).call(n, []),
                (e = n instanceof Array);
            } catch (t) {}
            return function (n, i) {
              return r(n), o(i), e ? t.call(n, i) : (n.__proto__ = i), n;
            };
          })()
        : void 0);
  },
  function (t, e, n) {
    var r = n(44),
      o = n(21),
      i = function (t) {
        return function (e, n) {
          var i,
            a,
            s = String(o(e)),
            c = r(n),
            l = s.length;
          return c < 0 || c >= l
            ? t
              ? ""
              : void 0
            : (i = s.charCodeAt(c)) < 55296 ||
              i > 56319 ||
              c + 1 === l ||
              (a = s.charCodeAt(c + 1)) < 56320 ||
              a > 57343
            ? t
              ? s.charAt(c)
              : i
            : t
            ? s.slice(c, c + 2)
            : a - 56320 + ((i - 55296) << 10) + 65536;
        };
      };
    t.exports = { codeAt: i(!1), charAt: i(!0) };
  },
  function (t, e, n) {
    var r = n(30);
    t.exports =
      Array.isArray ||
      function (t) {
        return "Array" == r(t);
      };
  },
  function (t, e, n) {
    "use strict";
    n(29);
    var r,
      o = n(0),
      i = n(13),
      a = n(87),
      s = n(8),
      c = n(74),
      l = n(22),
      u = n(50),
      f = n(14),
      d = n(84),
      h = n(88),
      p = n(66).codeAt,
      m = n(160),
      g = n(33),
      v = n(161),
      b = n(28),
      y = s.URL,
      x = v.URLSearchParams,
      _ = v.getState,
      k = b.set,
      w = b.getterFor("URL"),
      A = Math.floor,
      S = Math.pow,
      O = /[A-Za-z]/,
      $ = /[\d+\-.A-Za-z]/,
      L = /\d/,
      T = /^(0x|0X)/,
      C = /^[0-7]+$/,
      E = /^\d+$/,
      M = /^[\dA-Fa-f]+$/,
      I = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,
      j = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
      D = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
      P = /[\u0009\u000A\u000D]/g,
      F = function (t, e) {
        var n, r, o;
        if ("[" == e.charAt(0)) {
          if ("]" != e.charAt(e.length - 1)) return "Invalid host";
          if (!(n = B(e.slice(1, -1)))) return "Invalid host";
          t.host = n;
        } else if (G(t)) {
          if (((e = m(e)), I.test(e))) return "Invalid host";
          if (null === (n = R(e))) return "Invalid host";
          t.host = n;
        } else {
          if (j.test(e)) return "Invalid host";
          for (n = "", r = h(e), o = 0; o < r.length; o++) n += z(r[o], N);
          t.host = n;
        }
      },
      R = function (t) {
        var e,
          n,
          r,
          o,
          i,
          a,
          s,
          c = t.split(".");
        if ((c.length && "" == c[c.length - 1] && c.pop(), (e = c.length) > 4))
          return t;
        for (n = [], r = 0; r < e; r++) {
          if ("" == (o = c[r])) return t;
          if (
            ((i = 10),
            o.length > 1 &&
              "0" == o.charAt(0) &&
              ((i = T.test(o) ? 16 : 8), (o = o.slice(8 == i ? 1 : 2))),
            "" === o)
          )
            a = 0;
          else {
            if (!(10 == i ? E : 8 == i ? C : M).test(o)) return t;
            a = parseInt(o, i);
          }
          n.push(a);
        }
        for (r = 0; r < e; r++)
          if (((a = n[r]), r == e - 1)) {
            if (a >= S(256, 5 - e)) return null;
          } else if (a > 255) return null;
        for (s = n.pop(), r = 0; r < n.length; r++) s += n[r] * S(256, 3 - r);
        return s;
      },
      B = function (t) {
        var e,
          n,
          r,
          o,
          i,
          a,
          s,
          c = [0, 0, 0, 0, 0, 0, 0, 0],
          l = 0,
          u = null,
          f = 0,
          d = function () {
            return t.charAt(f);
          };
        if (":" == d()) {
          if (":" != t.charAt(1)) return;
          (f += 2), (u = ++l);
        }
        for (; d(); ) {
          if (8 == l) return;
          if (":" != d()) {
            for (e = n = 0; n < 4 && M.test(d()); )
              (e = 16 * e + parseInt(d(), 16)), f++, n++;
            if ("." == d()) {
              if (0 == n) return;
              if (((f -= n), l > 6)) return;
              for (r = 0; d(); ) {
                if (((o = null), r > 0)) {
                  if (!("." == d() && r < 4)) return;
                  f++;
                }
                if (!L.test(d())) return;
                for (; L.test(d()); ) {
                  if (((i = parseInt(d(), 10)), null === o)) o = i;
                  else {
                    if (0 == o) return;
                    o = 10 * o + i;
                  }
                  if (o > 255) return;
                  f++;
                }
                (c[l] = 256 * c[l] + o), (2 != ++r && 4 != r) || l++;
              }
              if (4 != r) return;
              break;
            }
            if (":" == d()) {
              if ((f++, !d())) return;
            } else if (d()) return;
            c[l++] = e;
          } else {
            if (null !== u) return;
            f++, (u = ++l);
          }
        }
        if (null !== u)
          for (a = l - u, l = 7; 0 != l && a > 0; )
            (s = c[l]), (c[l--] = c[u + a - 1]), (c[u + --a] = s);
        else if (8 != l) return;
        return c;
      },
      q = function (t) {
        var e, n, r, o;
        if ("number" == typeof t) {
          for (e = [], n = 0; n < 4; n++) e.unshift(t % 256), (t = A(t / 256));
          return e.join(".");
        }
        if ("object" == typeof t) {
          for (
            e = "",
              r = (function (t) {
                for (var e = null, n = 1, r = null, o = 0, i = 0; i < 8; i++)
                  0 !== t[i]
                    ? (o > n && ((e = r), (n = o)), (r = null), (o = 0))
                    : (null === r && (r = i), ++o);
                return o > n && ((e = r), (n = o)), e;
              })(t),
              n = 0;
            n < 8;
            n++
          )
            (o && 0 === t[n]) ||
              (o && (o = !1),
              r === n
                ? ((e += n ? ":" : "::"), (o = !0))
                : ((e += t[n].toString(16)), n < 7 && (e += ":")));
          return "[" + e + "]";
        }
        return t;
      },
      N = {},
      H = d({}, N, { " ": 1, '"': 1, "<": 1, ">": 1, "`": 1 }),
      U = d({}, H, { "#": 1, "?": 1, "{": 1, "}": 1 }),
      V = d({}, U, {
        "/": 1,
        ":": 1,
        ";": 1,
        "=": 1,
        "@": 1,
        "[": 1,
        "\\": 1,
        "]": 1,
        "^": 1,
        "|": 1,
      }),
      z = function (t, e) {
        var n = p(t, 0);
        return n > 32 && n < 127 && !f(e, t) ? t : encodeURIComponent(t);
      },
      W = { ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443 },
      G = function (t) {
        return f(W, t.scheme);
      },
      K = function (t) {
        return "" != t.username || "" != t.password;
      },
      Y = function (t) {
        return !t.host || t.cannotBeABaseURL || "file" == t.scheme;
      },
      J = function (t, e) {
        var n;
        return (
          2 == t.length &&
          O.test(t.charAt(0)) &&
          (":" == (n = t.charAt(1)) || (!e && "|" == n))
        );
      },
      X = function (t) {
        var e;
        return (
          t.length > 1 &&
          J(t.slice(0, 2)) &&
          (2 == t.length ||
            "/" === (e = t.charAt(2)) ||
            "\\" === e ||
            "?" === e ||
            "#" === e)
        );
      },
      Q = function (t) {
        var e = t.path,
          n = e.length;
        !n || ("file" == t.scheme && 1 == n && J(e[0], !0)) || e.pop();
      },
      Z = function (t) {
        return "." === t || "%2e" === t.toLowerCase();
      },
      tt = {},
      et = {},
      nt = {},
      rt = {},
      ot = {},
      it = {},
      at = {},
      st = {},
      ct = {},
      lt = {},
      ut = {},
      ft = {},
      dt = {},
      ht = {},
      pt = {},
      mt = {},
      gt = {},
      vt = {},
      bt = {},
      yt = {},
      xt = {},
      _t = function (t, e, n, o) {
        var i,
          a,
          s,
          c,
          l,
          u = n || tt,
          d = 0,
          p = "",
          m = !1,
          g = !1,
          v = !1;
        for (
          n ||
            ((t.scheme = ""),
            (t.username = ""),
            (t.password = ""),
            (t.host = null),
            (t.port = null),
            (t.path = []),
            (t.query = null),
            (t.fragment = null),
            (t.cannotBeABaseURL = !1),
            (e = e.replace(D, ""))),
            e = e.replace(P, ""),
            i = h(e);
          d <= i.length;

        ) {
          switch (((a = i[d]), u)) {
            case tt:
              if (!a || !O.test(a)) {
                if (n) return "Invalid scheme";
                u = nt;
                continue;
              }
              (p += a.toLowerCase()), (u = et);
              break;
            case et:
              if (a && ($.test(a) || "+" == a || "-" == a || "." == a))
                p += a.toLowerCase();
              else {
                if (":" != a) {
                  if (n) return "Invalid scheme";
                  (p = ""), (u = nt), (d = 0);
                  continue;
                }
                if (
                  n &&
                  (G(t) != f(W, p) ||
                    ("file" == p && (K(t) || null !== t.port)) ||
                    ("file" == t.scheme && !t.host))
                )
                  return;
                if (((t.scheme = p), n))
                  return void (
                    G(t) &&
                    W[t.scheme] == t.port &&
                    (t.port = null)
                  );
                (p = ""),
                  "file" == t.scheme
                    ? (u = ht)
                    : G(t) && o && o.scheme == t.scheme
                    ? (u = rt)
                    : G(t)
                    ? (u = st)
                    : "/" == i[d + 1]
                    ? ((u = ot), d++)
                    : ((t.cannotBeABaseURL = !0), t.path.push(""), (u = bt));
              }
              break;
            case nt:
              if (!o || (o.cannotBeABaseURL && "#" != a))
                return "Invalid scheme";
              if (o.cannotBeABaseURL && "#" == a) {
                (t.scheme = o.scheme),
                  (t.path = o.path.slice()),
                  (t.query = o.query),
                  (t.fragment = ""),
                  (t.cannotBeABaseURL = !0),
                  (u = xt);
                break;
              }
              u = "file" == o.scheme ? ht : it;
              continue;
            case rt:
              if ("/" != a || "/" != i[d + 1]) {
                u = it;
                continue;
              }
              (u = ct), d++;
              break;
            case ot:
              if ("/" == a) {
                u = lt;
                break;
              }
              u = vt;
              continue;
            case it:
              if (((t.scheme = o.scheme), a == r))
                (t.username = o.username),
                  (t.password = o.password),
                  (t.host = o.host),
                  (t.port = o.port),
                  (t.path = o.path.slice()),
                  (t.query = o.query);
              else if ("/" == a || ("\\" == a && G(t))) u = at;
              else if ("?" == a)
                (t.username = o.username),
                  (t.password = o.password),
                  (t.host = o.host),
                  (t.port = o.port),
                  (t.path = o.path.slice()),
                  (t.query = ""),
                  (u = yt);
              else {
                if ("#" != a) {
                  (t.username = o.username),
                    (t.password = o.password),
                    (t.host = o.host),
                    (t.port = o.port),
                    (t.path = o.path.slice()),
                    t.path.pop(),
                    (u = vt);
                  continue;
                }
                (t.username = o.username),
                  (t.password = o.password),
                  (t.host = o.host),
                  (t.port = o.port),
                  (t.path = o.path.slice()),
                  (t.query = o.query),
                  (t.fragment = ""),
                  (u = xt);
              }
              break;
            case at:
              if (!G(t) || ("/" != a && "\\" != a)) {
                if ("/" != a) {
                  (t.username = o.username),
                    (t.password = o.password),
                    (t.host = o.host),
                    (t.port = o.port),
                    (u = vt);
                  continue;
                }
                u = lt;
              } else u = ct;
              break;
            case st:
              if (((u = ct), "/" != a || "/" != p.charAt(d + 1))) continue;
              d++;
              break;
            case ct:
              if ("/" != a && "\\" != a) {
                u = lt;
                continue;
              }
              break;
            case lt:
              if ("@" == a) {
                m && (p = "%40" + p), (m = !0), (s = h(p));
                for (var b = 0; b < s.length; b++) {
                  var y = s[b];
                  if (":" != y || v) {
                    var x = z(y, V);
                    v ? (t.password += x) : (t.username += x);
                  } else v = !0;
                }
                p = "";
              } else if (
                a == r ||
                "/" == a ||
                "?" == a ||
                "#" == a ||
                ("\\" == a && G(t))
              ) {
                if (m && "" == p) return "Invalid authority";
                (d -= h(p).length + 1), (p = ""), (u = ut);
              } else p += a;
              break;
            case ut:
            case ft:
              if (n && "file" == t.scheme) {
                u = mt;
                continue;
              }
              if (":" != a || g) {
                if (
                  a == r ||
                  "/" == a ||
                  "?" == a ||
                  "#" == a ||
                  ("\\" == a && G(t))
                ) {
                  if (G(t) && "" == p) return "Invalid host";
                  if (n && "" == p && (K(t) || null !== t.port)) return;
                  if ((c = F(t, p))) return c;
                  if (((p = ""), (u = gt), n)) return;
                  continue;
                }
                "[" == a ? (g = !0) : "]" == a && (g = !1), (p += a);
              } else {
                if ("" == p) return "Invalid host";
                if ((c = F(t, p))) return c;
                if (((p = ""), (u = dt), n == ft)) return;
              }
              break;
            case dt:
              if (!L.test(a)) {
                if (
                  a == r ||
                  "/" == a ||
                  "?" == a ||
                  "#" == a ||
                  ("\\" == a && G(t)) ||
                  n
                ) {
                  if ("" != p) {
                    var _ = parseInt(p, 10);
                    if (_ > 65535) return "Invalid port";
                    (t.port = G(t) && _ === W[t.scheme] ? null : _), (p = "");
                  }
                  if (n) return;
                  u = gt;
                  continue;
                }
                return "Invalid port";
              }
              p += a;
              break;
            case ht:
              if (((t.scheme = "file"), "/" == a || "\\" == a)) u = pt;
              else {
                if (!o || "file" != o.scheme) {
                  u = vt;
                  continue;
                }
                if (a == r)
                  (t.host = o.host),
                    (t.path = o.path.slice()),
                    (t.query = o.query);
                else if ("?" == a)
                  (t.host = o.host),
                    (t.path = o.path.slice()),
                    (t.query = ""),
                    (u = yt);
                else {
                  if ("#" != a) {
                    X(i.slice(d).join("")) ||
                      ((t.host = o.host), (t.path = o.path.slice()), Q(t)),
                      (u = vt);
                    continue;
                  }
                  (t.host = o.host),
                    (t.path = o.path.slice()),
                    (t.query = o.query),
                    (t.fragment = ""),
                    (u = xt);
                }
              }
              break;
            case pt:
              if ("/" == a || "\\" == a) {
                u = mt;
                break;
              }
              o &&
                "file" == o.scheme &&
                !X(i.slice(d).join("")) &&
                (J(o.path[0], !0) ? t.path.push(o.path[0]) : (t.host = o.host)),
                (u = vt);
              continue;
            case mt:
              if (a == r || "/" == a || "\\" == a || "?" == a || "#" == a) {
                if (!n && J(p)) u = vt;
                else if ("" == p) {
                  if (((t.host = ""), n)) return;
                  u = gt;
                } else {
                  if ((c = F(t, p))) return c;
                  if (("localhost" == t.host && (t.host = ""), n)) return;
                  (p = ""), (u = gt);
                }
                continue;
              }
              p += a;
              break;
            case gt:
              if (G(t)) {
                if (((u = vt), "/" != a && "\\" != a)) continue;
              } else if (n || "?" != a)
                if (n || "#" != a) {
                  if (a != r && ((u = vt), "/" != a)) continue;
                } else (t.fragment = ""), (u = xt);
              else (t.query = ""), (u = yt);
              break;
            case vt:
              if (
                a == r ||
                "/" == a ||
                ("\\" == a && G(t)) ||
                (!n && ("?" == a || "#" == a))
              ) {
                if (
                  (".." === (l = (l = p).toLowerCase()) ||
                  "%2e." === l ||
                  ".%2e" === l ||
                  "%2e%2e" === l
                    ? (Q(t), "/" == a || ("\\" == a && G(t)) || t.path.push(""))
                    : Z(p)
                    ? "/" == a || ("\\" == a && G(t)) || t.path.push("")
                    : ("file" == t.scheme &&
                        !t.path.length &&
                        J(p) &&
                        (t.host && (t.host = ""), (p = p.charAt(0) + ":")),
                      t.path.push(p)),
                  (p = ""),
                  "file" == t.scheme && (a == r || "?" == a || "#" == a))
                )
                  for (; t.path.length > 1 && "" === t.path[0]; )
                    t.path.shift();
                "?" == a
                  ? ((t.query = ""), (u = yt))
                  : "#" == a && ((t.fragment = ""), (u = xt));
              } else p += z(a, U);
              break;
            case bt:
              "?" == a
                ? ((t.query = ""), (u = yt))
                : "#" == a
                ? ((t.fragment = ""), (u = xt))
                : a != r && (t.path[0] += z(a, N));
              break;
            case yt:
              n || "#" != a
                ? a != r &&
                  ("'" == a && G(t)
                    ? (t.query += "%27")
                    : (t.query += "#" == a ? "%23" : z(a, N)))
                : ((t.fragment = ""), (u = xt));
              break;
            case xt:
              a != r && (t.fragment += z(a, H));
          }
          d++;
        }
      },
      kt = function (t) {
        var e,
          n,
          r = u(this, kt, "URL"),
          o = arguments.length > 1 ? arguments[1] : void 0,
          a = String(t),
          s = k(r, { type: "URL" });
        if (void 0 !== o)
          if (o instanceof kt) e = w(o);
          else if ((n = _t((e = {}), String(o)))) throw TypeError(n);
        if ((n = _t(s, a, null, e))) throw TypeError(n);
        var c = (s.searchParams = new x()),
          l = _(c);
        l.updateSearchParams(s.query),
          (l.updateURL = function () {
            s.query = String(c) || null;
          }),
          i ||
            ((r.href = At.call(r)),
            (r.origin = St.call(r)),
            (r.protocol = Ot.call(r)),
            (r.username = $t.call(r)),
            (r.password = Lt.call(r)),
            (r.host = Tt.call(r)),
            (r.hostname = Ct.call(r)),
            (r.port = Et.call(r)),
            (r.pathname = Mt.call(r)),
            (r.search = It.call(r)),
            (r.searchParams = jt.call(r)),
            (r.hash = Dt.call(r)));
      },
      wt = kt.prototype,
      At = function () {
        var t = w(this),
          e = t.scheme,
          n = t.username,
          r = t.password,
          o = t.host,
          i = t.port,
          a = t.path,
          s = t.query,
          c = t.fragment,
          l = e + ":";
        return (
          null !== o
            ? ((l += "//"),
              K(t) && (l += n + (r ? ":" + r : "") + "@"),
              (l += q(o)),
              null !== i && (l += ":" + i))
            : "file" == e && (l += "//"),
          (l += t.cannotBeABaseURL ? a[0] : a.length ? "/" + a.join("/") : ""),
          null !== s && (l += "?" + s),
          null !== c && (l += "#" + c),
          l
        );
      },
      St = function () {
        var t = w(this),
          e = t.scheme,
          n = t.port;
        if ("blob" == e)
          try {
            return new URL(e.path[0]).origin;
          } catch (t) {
            return "null";
          }
        return "file" != e && G(t)
          ? e + "://" + q(t.host) + (null !== n ? ":" + n : "")
          : "null";
      },
      Ot = function () {
        return w(this).scheme + ":";
      },
      $t = function () {
        return w(this).username;
      },
      Lt = function () {
        return w(this).password;
      },
      Tt = function () {
        var t = w(this),
          e = t.host,
          n = t.port;
        return null === e ? "" : null === n ? q(e) : q(e) + ":" + n;
      },
      Ct = function () {
        var t = w(this).host;
        return null === t ? "" : q(t);
      },
      Et = function () {
        var t = w(this).port;
        return null === t ? "" : String(t);
      },
      Mt = function () {
        var t = w(this),
          e = t.path;
        return t.cannotBeABaseURL ? e[0] : e.length ? "/" + e.join("/") : "";
      },
      It = function () {
        var t = w(this).query;
        return t ? "?" + t : "";
      },
      jt = function () {
        return w(this).searchParams;
      },
      Dt = function () {
        var t = w(this).fragment;
        return t ? "#" + t : "";
      },
      Pt = function (t, e) {
        return { get: t, set: e, configurable: !0, enumerable: !0 };
      };
    if (
      (i &&
        c(wt, {
          href: Pt(At, function (t) {
            var e = w(this),
              n = String(t),
              r = _t(e, n);
            if (r) throw TypeError(r);
            _(e.searchParams).updateSearchParams(e.query);
          }),
          origin: Pt(St),
          protocol: Pt(Ot, function (t) {
            var e = w(this);
            _t(e, String(t) + ":", tt);
          }),
          username: Pt($t, function (t) {
            var e = w(this),
              n = h(String(t));
            if (!Y(e)) {
              e.username = "";
              for (var r = 0; r < n.length; r++) e.username += z(n[r], V);
            }
          }),
          password: Pt(Lt, function (t) {
            var e = w(this),
              n = h(String(t));
            if (!Y(e)) {
              e.password = "";
              for (var r = 0; r < n.length; r++) e.password += z(n[r], V);
            }
          }),
          host: Pt(Tt, function (t) {
            var e = w(this);
            e.cannotBeABaseURL || _t(e, String(t), ut);
          }),
          hostname: Pt(Ct, function (t) {
            var e = w(this);
            e.cannotBeABaseURL || _t(e, String(t), ft);
          }),
          port: Pt(Et, function (t) {
            var e = w(this);
            Y(e) || ("" == (t = String(t)) ? (e.port = null) : _t(e, t, dt));
          }),
          pathname: Pt(Mt, function (t) {
            var e = w(this);
            e.cannotBeABaseURL || ((e.path = []), _t(e, t + "", gt));
          }),
          search: Pt(It, function (t) {
            var e = w(this);
            "" == (t = String(t))
              ? (e.query = null)
              : ("?" == t.charAt(0) && (t = t.slice(1)),
                (e.query = ""),
                _t(e, t, yt)),
              _(e.searchParams).updateSearchParams(e.query);
          }),
          searchParams: Pt(jt),
          hash: Pt(Dt, function (t) {
            var e = w(this);
            "" != (t = String(t))
              ? ("#" == t.charAt(0) && (t = t.slice(1)),
                (e.fragment = ""),
                _t(e, t, xt))
              : (e.fragment = null);
          }),
        }),
      l(
        wt,
        "toJSON",
        function () {
          return At.call(this);
        },
        { enumerable: !0 }
      ),
      l(
        wt,
        "toString",
        function () {
          return At.call(this);
        },
        { enumerable: !0 }
      ),
      y)
    ) {
      var Ft = y.createObjectURL,
        Rt = y.revokeObjectURL;
      Ft &&
        l(kt, "createObjectURL", function (t) {
          return Ft.apply(y, arguments);
        }),
        Rt &&
          l(kt, "revokeObjectURL", function (t) {
            return Rt.apply(y, arguments);
          });
    }
    g(kt, "URL"), o({ global: !0, forced: !a, sham: !i }, { URL: kt });
  },
  function (t, e, n) {
    "use strict";
    var r = n(56),
      o = n(18),
      i = n(31);
    t.exports = function (t, e, n) {
      var a = r(e);
      a in t ? o.f(t, a, i(0, n)) : (t[a] = n);
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(58).indexOf,
      i = n(49),
      a = [].indexOf,
      s = !!a && 1 / [1].indexOf(1, -0) < 0,
      c = i("indexOf");
    r(
      { target: "Array", proto: !0, forced: s || c },
      {
        indexOf: function (t) {
          return s
            ? a.apply(this, arguments) || 0
            : o(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(48).map;
    r(
      { target: "Array", proto: !0, forced: !n(93)("map") },
      {
        map: function (t) {
          return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
  },
  function (t, e, n) {
    var r = n(13),
      o = n(7),
      i = n(73);
    t.exports =
      !r &&
      !o(function () {
        return (
          7 !=
          Object.defineProperty(i("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (t, e, n) {
    var r = n(8),
      o = n(12),
      i = r.document,
      a = o(i) && o(i.createElement);
    t.exports = function (t) {
      return a ? i.createElement(t) : {};
    };
  },
  function (t, e, n) {
    var r = n(13),
      o = n(18),
      i = n(1),
      a = n(43);
    t.exports = r
      ? Object.defineProperties
      : function (t, e) {
          i(t);
          for (var n, r = a(e), s = r.length, c = 0; s > c; )
            o.f(t, (n = r[c++]), e[n]);
          return t;
        };
  },
  function (t, e, n) {
    var r = n(14),
      o = n(20),
      i = n(58).indexOf,
      a = n(45);
    t.exports = function (t, e) {
      var n,
        s = o(t),
        c = 0,
        l = [];
      for (n in s) !r(a, n) && r(s, n) && l.push(n);
      for (; e.length > c; ) r(s, (n = e[c++])) && (~i(l, n) || l.push(n));
      return l;
    };
  },
  function (t, e, n) {
    var r = n(44),
      o = Math.max,
      i = Math.min;
    t.exports = function (t, e) {
      var n = r(t);
      return n < 0 ? o(n + e, 0) : i(n, e);
    };
  },
  function (t, e, n) {
    var r = n(42);
    t.exports = r("native-function-to-string", Function.toString);
  },
  function (t, e, n) {
    var r = n(11),
      o = n(154),
      i = n(79),
      a = n(1);
    t.exports =
      r("Reflect", "ownKeys") ||
      function (t) {
        var e = o.f(a(t)),
          n = i.f;
        return n ? e.concat(n(t)) : e;
      };
  },
  function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  },
  function (t, e, n) {
    var r = n(7),
      o = /#|\.prototype\./,
      i = function (t, e) {
        var n = s[a(t)];
        return n == l || (n != c && ("function" == typeof e ? r(e) : !!e));
      },
      a = (i.normalize = function (t) {
        return String(t).replace(o, ".").toLowerCase();
      }),
      s = (i.data = {}),
      c = (i.NATIVE = "N"),
      l = (i.POLYFILL = "P");
    t.exports = i;
  },
  function (t, e, n) {
    "use strict";
    var r = n(82).IteratorPrototype,
      o = n(27),
      i = n(31),
      a = n(33),
      s = n(32),
      c = function () {
        return this;
      };
    t.exports = function (t, e, n) {
      var l = e + " Iterator";
      return (
        (t.prototype = o(r, { next: i(1, n) })), a(t, l, !1, !0), (s[l] = c), t
      );
    };
  },
  function (t, e, n) {
    "use strict";
    var r,
      o,
      i,
      a = n(64),
      s = n(16),
      c = n(14),
      l = n(6),
      u = n(2),
      f = l("iterator"),
      d = !1;
    [].keys &&
      ("next" in (i = [].keys())
        ? (o = a(a(i))) !== Object.prototype && (r = o)
        : (d = !0)),
      null == r && (r = {}),
      u ||
        c(r, f) ||
        s(r, f, function () {
          return this;
        }),
      (t.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: d });
  },
  function (t, e, n) {
    var r = n(7);
    t.exports = !r(function () {
      function t() {}
      return (
        (t.prototype.constructor = null),
        Object.getPrototypeOf(new t()) !== t.prototype
      );
    });
  },
  function (t, e, n) {
    "use strict";
    var r = n(13),
      o = n(7),
      i = n(43),
      a = n(79),
      s = n(63),
      c = n(23),
      l = n(40),
      u = Object.assign;
    t.exports =
      !u ||
      o(function () {
        var t = {},
          e = {},
          n = Symbol();
        return (
          (t[n] = 7),
          "abcdefghijklmnopqrst".split("").forEach(function (t) {
            e[t] = t;
          }),
          7 != u({}, t)[n] || "abcdefghijklmnopqrst" != i(u({}, e)).join("")
        );
      })
        ? function (t, e) {
            for (
              var n = c(t), o = arguments.length, u = 1, f = a.f, d = s.f;
              o > u;

            )
              for (
                var h,
                  p = l(arguments[u++]),
                  m = f ? i(p).concat(f(p)) : i(p),
                  g = m.length,
                  v = 0;
                g > v;

              )
                (h = m[v++]), (r && !d.call(p, h)) || (n[h] = p[h]);
            return n;
          }
        : u;
  },
  function (t, e) {
    t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
  },
  function (t, e) {
    t.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    };
  },
  function (t, e, n) {
    var r = n(7),
      o = n(6),
      i = n(2),
      a = o("iterator");
    t.exports = !r(function () {
      var t = new URL("b?a=1&b=2&c=3", "http://a"),
        e = t.searchParams,
        n = "";
      return (
        (t.pathname = "c%20d"),
        e.forEach(function (t, r) {
          e.delete("b"), (n += r + t);
        }),
        (i && !t.toJSON) ||
          !e.sort ||
          "http://a/c%20d?a=1&c=3" !== t.href ||
          "3" !== e.get("c") ||
          "a=1" !== String(new URLSearchParams("?a=1")) ||
          !e[a] ||
          "a" !== new URL("https://a@b").username ||
          "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") ||
          "xn--e1aybc" !== new URL("http://тест").host ||
          "#%D0%B1" !== new URL("http://a#б").hash ||
          "a1c3" !== n ||
          "x" !== new URL("http://x", void 0).host
      );
    });
  },
  function (t, e, n) {
    "use strict";
    var r = n(9),
      o = n(23),
      i = n(89),
      a = n(90),
      s = n(25),
      c = n(69),
      l = n(51);
    t.exports = function (t) {
      var e,
        n,
        u,
        f,
        d,
        h = o(t),
        p = "function" == typeof this ? this : Array,
        m = arguments.length,
        g = m > 1 ? arguments[1] : void 0,
        v = void 0 !== g,
        b = 0,
        y = l(h);
      if (
        (v && (g = r(g, m > 2 ? arguments[2] : void 0, 2)),
        null == y || (p == Array && a(y)))
      )
        for (n = new p((e = s(h.length))); e > b; b++)
          c(n, b, v ? g(h[b], b) : h[b]);
      else
        for (d = (f = y.call(h)).next, n = new p(); !(u = d.call(f)).done; b++)
          c(n, b, v ? i(f, g, [u.value, b], !0) : u.value);
      return (n.length = b), n;
    };
  },
  function (t, e, n) {
    var r = n(1);
    t.exports = function (t, e, n, o) {
      try {
        return o ? e(r(n)[0], n[1]) : e(n);
      } catch (e) {
        var i = t.return;
        throw (void 0 !== i && r(i.call(t)), e);
      }
    };
  },
  function (t, e, n) {
    var r = n(6),
      o = n(32),
      i = r("iterator"),
      a = Array.prototype;
    t.exports = function (t) {
      return void 0 !== t && (o.Array === t || a[i] === t);
    };
  },
  function (t, e, n) {
    var r = n(30),
      o = n(6)("toStringTag"),
      i =
        "Arguments" ==
        r(
          (function () {
            return arguments;
          })()
        );
    t.exports = function (t) {
      var e, n, a;
      return void 0 === t
        ? "Undefined"
        : null === t
        ? "Null"
        : "string" ==
          typeof (n = (function (t, e) {
            try {
              return t[e];
            } catch (t) {}
          })((e = Object(t)), o))
        ? n
        : i
        ? r(e)
        : "Object" == (a = r(e)) && "function" == typeof e.callee
        ? "Arguments"
        : a;
    };
  },
  function (t, e, n) {
    var r = n(22);
    t.exports = function (t, e, n) {
      for (var o in e) r(t, o, e[o], n);
      return t;
    };
  },
  function (t, e, n) {
    var r = n(7),
      o = n(6),
      i = n(164),
      a = o("species");
    t.exports = function (t) {
      return (
        i >= 51 ||
        !r(function () {
          var e = [];
          return (
            ((e.constructor = {})[a] = function () {
              return { foo: 1 };
            }),
            1 !== e[t](Boolean).foo
          );
        })
      );
    };
  },
  function (t, e, n) {
    var r = n(11);
    t.exports = r("navigator", "userAgent") || "";
  },
  function (t, e, n) {
    var r = n(0),
      o = n(88);
    r(
      {
        target: "Array",
        stat: !0,
        forced: !n(96)(function (t) {
          Array.from(t);
        }),
      },
      { from: o }
    );
  },
  function (t, e, n) {
    var r = n(6)("iterator"),
      o = !1;
    try {
      var i = 0,
        a = {
          next: function () {
            return { done: !!i++ };
          },
          return: function () {
            o = !0;
          },
        };
      (a[r] = function () {
        return this;
      }),
        Array.from(a, function () {
          throw 2;
        });
    } catch (t) {}
    t.exports = function (t, e) {
      if (!e && !o) return !1;
      var n = !1;
      try {
        var i = {};
        (i[r] = function () {
          return {
            next: function () {
              return { done: (n = !0) };
            },
          };
        }),
          t(i);
      } catch (t) {}
      return n;
    };
  },
  function (t, e, n) {
    n(0)(
      { target: "Date", stat: !0 },
      {
        now: function () {
          return new Date().getTime();
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(5),
      o = n(12),
      i = [].slice,
      a = {},
      s = function (t, e, n) {
        if (!(e in a)) {
          for (var r = [], o = 0; o < e; o++) r[o] = "a[" + o + "]";
          a[e] = Function("C,a", "return new C(" + r.join(",") + ")");
        }
        return a[e](t, n);
      };
    t.exports =
      Function.bind ||
      function (t) {
        var e = r(this),
          n = i.call(arguments, 1),
          a = function () {
            var r = n.concat(i.call(arguments));
            return this instanceof a ? s(e, r.length, r) : e.apply(t, r);
          };
        return o(e.prototype) && (a.prototype = e.prototype), a;
      };
  },
  function (t, e, n) {
    "use strict";
    var r = n(100),
      o = n(102);
    t.exports = r(
      "Map",
      function (t) {
        return function () {
          return t(this, arguments.length ? arguments[0] : void 0);
        };
      },
      o,
      !0
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(8),
      i = n(80),
      a = n(22),
      s = n(101),
      c = n(3),
      l = n(50),
      u = n(12),
      f = n(7),
      d = n(96),
      h = n(33),
      p = n(172);
    t.exports = function (t, e, n, m, g) {
      var v = o[t],
        b = v && v.prototype,
        y = v,
        x = m ? "set" : "add",
        _ = {},
        k = function (t) {
          var e = b[t];
          a(
            b,
            t,
            "add" == t
              ? function (t) {
                  return e.call(this, 0 === t ? 0 : t), this;
                }
              : "delete" == t
              ? function (t) {
                  return !(g && !u(t)) && e.call(this, 0 === t ? 0 : t);
                }
              : "get" == t
              ? function (t) {
                  return g && !u(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
                }
              : "has" == t
              ? function (t) {
                  return !(g && !u(t)) && e.call(this, 0 === t ? 0 : t);
                }
              : function (t, n) {
                  return e.call(this, 0 === t ? 0 : t, n), this;
                }
          );
        };
      if (
        i(
          t,
          "function" != typeof v ||
            !(
              g ||
              (b.forEach &&
                !f(function () {
                  new v().entries().next();
                }))
            )
        )
      )
        (y = n.getConstructor(e, t, m, x)), (s.REQUIRED = !0);
      else if (i(t, !0)) {
        var w = new y(),
          A = w[x](g ? {} : -0, 1) != w,
          S = f(function () {
            w.has(1);
          }),
          O = d(function (t) {
            new v(t);
          }),
          $ =
            !g &&
            f(function () {
              for (var t = new v(), e = 5; e--; ) t[x](e, e);
              return !t.has(-0);
            });
        O ||
          (((y = e(function (e, n) {
            l(e, y, t);
            var r = p(new v(), e, y);
            return null != n && c(n, r[x], r, m), r;
          })).prototype = b),
          (b.constructor = y)),
          (S || $) && (k("delete"), k("has"), m && k("get")),
          ($ || A) && k(x),
          g && b.clear && delete b.clear;
      }
      return (
        (_[t] = y),
        r({ global: !0, forced: y != v }, _),
        h(y, t),
        g || n.setStrong(y, t, m),
        y
      );
    };
  },
  function (t, e, n) {
    var r = n(45),
      o = n(12),
      i = n(14),
      a = n(18).f,
      s = n(57),
      c = n(171),
      l = s("meta"),
      u = 0,
      f =
        Object.isExtensible ||
        function () {
          return !0;
        },
      d = function (t) {
        a(t, l, { value: { objectID: "O" + ++u, weakData: {} } });
      },
      h = (t.exports = {
        REQUIRED: !1,
        fastKey: function (t, e) {
          if (!o(t))
            return "symbol" == typeof t
              ? t
              : ("string" == typeof t ? "S" : "P") + t;
          if (!i(t, l)) {
            if (!f(t)) return "F";
            if (!e) return "E";
            d(t);
          }
          return t[l].objectID;
        },
        getWeakData: function (t, e) {
          if (!i(t, l)) {
            if (!f(t)) return !0;
            if (!e) return !1;
            d(t);
          }
          return t[l].weakData;
        },
        onFreeze: function (t) {
          return c && h.REQUIRED && f(t) && !i(t, l) && d(t), t;
        },
      });
    r[l] = !0;
  },
  function (t, e, n) {
    "use strict";
    var r = n(18).f,
      o = n(27),
      i = n(92),
      a = n(9),
      s = n(50),
      c = n(3),
      l = n(61),
      u = n(173),
      f = n(13),
      d = n(101).fastKey,
      h = n(28),
      p = h.set,
      m = h.getterFor;
    t.exports = {
      getConstructor: function (t, e, n, l) {
        var u = t(function (t, r) {
            s(t, u, e),
              p(t, {
                type: e,
                index: o(null),
                first: void 0,
                last: void 0,
                size: 0,
              }),
              f || (t.size = 0),
              null != r && c(r, t[l], t, n);
          }),
          h = m(e),
          g = function (t, e, n) {
            var r,
              o,
              i = h(t),
              a = v(t, e);
            return (
              a
                ? (a.value = n)
                : ((i.last = a =
                    {
                      index: (o = d(e, !0)),
                      key: e,
                      value: n,
                      previous: (r = i.last),
                      next: void 0,
                      removed: !1,
                    }),
                  i.first || (i.first = a),
                  r && (r.next = a),
                  f ? i.size++ : t.size++,
                  "F" !== o && (i.index[o] = a)),
              t
            );
          },
          v = function (t, e) {
            var n,
              r = h(t),
              o = d(e);
            if ("F" !== o) return r.index[o];
            for (n = r.first; n; n = n.next) if (n.key == e) return n;
          };
        return (
          i(u.prototype, {
            clear: function () {
              for (var t = h(this), e = t.index, n = t.first; n; )
                (n.removed = !0),
                  n.previous && (n.previous = n.previous.next = void 0),
                  delete e[n.index],
                  (n = n.next);
              (t.first = t.last = void 0), f ? (t.size = 0) : (this.size = 0);
            },
            delete: function (t) {
              var e = h(this),
                n = v(this, t);
              if (n) {
                var r = n.next,
                  o = n.previous;
                delete e.index[n.index],
                  (n.removed = !0),
                  o && (o.next = r),
                  r && (r.previous = o),
                  e.first == n && (e.first = r),
                  e.last == n && (e.last = o),
                  f ? e.size-- : this.size--;
              }
              return !!n;
            },
            forEach: function (t) {
              for (
                var e,
                  n = h(this),
                  r = a(t, arguments.length > 1 ? arguments[1] : void 0, 3);
                (e = e ? e.next : n.first);

              )
                for (r(e.value, e.key, this); e && e.removed; ) e = e.previous;
            },
            has: function (t) {
              return !!v(this, t);
            },
          }),
          i(
            u.prototype,
            n
              ? {
                  get: function (t) {
                    var e = v(this, t);
                    return e && e.value;
                  },
                  set: function (t, e) {
                    return g(this, 0 === t ? 0 : t, e);
                  },
                }
              : {
                  add: function (t) {
                    return g(this, (t = 0 === t ? 0 : t), t);
                  },
                }
          ),
          f &&
            r(u.prototype, "size", {
              get: function () {
                return h(this).size;
              },
            }),
          u
        );
      },
      setStrong: function (t, e, n) {
        var r = e + " Iterator",
          o = m(e),
          i = m(r);
        l(
          t,
          e,
          function (t, e) {
            p(this, { type: r, target: t, state: o(t), kind: e, last: void 0 });
          },
          function () {
            for (var t = i(this), e = t.kind, n = t.last; n && n.removed; )
              n = n.previous;
            return t.target && (t.last = n = n ? n.next : t.state.first)
              ? "keys" == e
                ? { value: n.key, done: !1 }
                : "values" == e
                ? { value: n.value, done: !1 }
                : { value: [n.key, n.value], done: !1 }
              : ((t.target = void 0), { value: void 0, done: !0 });
          },
          n ? "entries" : "values",
          !n,
          !0
        ),
          u(e);
      },
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(100),
      o = n(102);
    t.exports = r(
      "Set",
      function (t) {
        return function () {
          return t(this, arguments.length ? arguments[0] : void 0);
        };
      },
      o
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(16),
      o = n(22),
      i = n(7),
      a = n(6),
      s = n(105),
      c = a("species"),
      l = !i(function () {
        var t = /./;
        return (
          (t.exec = function () {
            var t = [];
            return (t.groups = { a: "7" }), t;
          }),
          "7" !== "".replace(t, "$<a>")
        );
      }),
      u = !i(function () {
        var t = /(?:)/,
          e = t.exec;
        t.exec = function () {
          return e.apply(this, arguments);
        };
        var n = "ab".split(t);
        return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
      });
    t.exports = function (t, e, n, f) {
      var d = a(t),
        h = !i(function () {
          var e = {};
          return (
            (e[d] = function () {
              return 7;
            }),
            7 != ""[t](e)
          );
        }),
        p =
          h &&
          !i(function () {
            var e = !1,
              n = /a/;
            return (
              "split" === t &&
                (((n = {}).constructor = {}),
                (n.constructor[c] = function () {
                  return n;
                }),
                (n.flags = ""),
                (n[d] = /./[d])),
              (n.exec = function () {
                return (e = !0), null;
              }),
              n[d](""),
              !e
            );
          });
      if (!h || !p || ("replace" === t && !l) || ("split" === t && !u)) {
        var m = /./[d],
          g = n(d, ""[t], function (t, e, n, r, o) {
            return e.exec === s
              ? h && !o
                ? { done: !0, value: m.call(e, n, r) }
                : { done: !0, value: t.call(n, e, r) }
              : { done: !1 };
          }),
          v = g[0],
          b = g[1];
        o(String.prototype, t, v),
          o(
            RegExp.prototype,
            d,
            2 == e
              ? function (t, e) {
                  return b.call(t, this, e);
                }
              : function (t) {
                  return b.call(t, this);
                }
          ),
          f && r(RegExp.prototype[d], "sham", !0);
      }
    };
  },
  function (t, e, n) {
    "use strict";
    var r,
      o,
      i = n(179),
      a = RegExp.prototype.exec,
      s = String.prototype.replace,
      c = a,
      l =
        ((r = /a/),
        (o = /b*/g),
        a.call(r, "a"),
        a.call(o, "a"),
        0 !== r.lastIndex || 0 !== o.lastIndex),
      u = void 0 !== /()??/.exec("")[1];
    (l || u) &&
      (c = function (t) {
        var e,
          n,
          r,
          o,
          c = this;
        return (
          u && (n = new RegExp("^" + c.source + "$(?!\\s)", i.call(c))),
          l && (e = c.lastIndex),
          (r = a.call(c, t)),
          l && r && (c.lastIndex = c.global ? r.index + r[0].length : e),
          u &&
            r &&
            r.length > 1 &&
            s.call(r[0], n, function () {
              for (o = 1; o < arguments.length - 2; o++)
                void 0 === arguments[o] && (r[o] = void 0);
            }),
          r
        );
      }),
      (t.exports = c);
  },
  function (t, e, n) {
    "use strict";
    var r = n(66).charAt;
    t.exports = function (t, e, n) {
      return e + (n ? r(t, e).length : 1);
    };
  },
  function (t, e, n) {
    var r = n(30),
      o = n(105);
    t.exports = function (t, e) {
      var n = t.exec;
      if ("function" == typeof n) {
        var i = n.call(t, e);
        if ("object" != typeof i)
          throw TypeError(
            "RegExp exec method returned something other than an Object or null"
          );
        return i;
      }
      if ("RegExp" !== r(t))
        throw TypeError("RegExp#exec called on incompatible receiver");
      return o.call(t, e);
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(180);
    r(
      { target: "String", proto: !0, forced: n(181)("anchor") },
      {
        anchor: function (t) {
          return o(this, "a", "name", t);
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(2),
      i = n(110);
    r(
      { target: "Map", proto: !0, real: !0, forced: o },
      {
        deleteAll: function () {
          return i.apply(this, arguments);
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(1),
      o = n(5);
    t.exports = function () {
      for (
        var t,
          e = r(this),
          n = o(e.delete),
          i = !0,
          a = 0,
          s = arguments.length;
        a < s;
        a++
      )
        (t = n.call(e, arguments[a])), (i = i && t);
      return !!i;
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(2),
      i = n(1),
      a = n(9),
      s = n(17),
      c = n(3);
    r(
      { target: "Map", proto: !0, real: !0, forced: o },
      {
        every: function (t) {
          var e = i(this),
            n = s(e),
            r = a(t, arguments.length > 1 ? arguments[1] : void 0, 3);
          return !c(
            n,
            function (t, n) {
              if (!r(n, t, e)) return c.stop();
            },
            void 0,
            !0,
            !0
          ).stopped;
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(2),
      i = n(11),
      a = n(1),
      s = n(5),
      c = n(9),
      l = n(19),
      u = n(17),
      f = n(3);
    r(
      { target: "Map", proto: !0, real: !0, forced: o },
      {
        filter: function (t) {
          var e = a(this),
            n = u(e),
            r = c(t, arguments.length > 1 ? arguments[1] : void 0, 3),
            o = new (l(e, i("Map")))(),
            d = s(o.set);
          return (
            f(
              n,
              function (t, n) {
                r(n, t, e) && d.call(o, t, n);
              },
              void 0,
              !0,
              !0
            ),
            o
          );
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(2),
      i = n(1),
      a = n(9),
      s = n(17),
      c = n(3);
    r(
      { target: "Map", proto: !0, real: !0, forced: o },
      {
        find: function (t) {
          var e = i(this),
            n = s(e),
            r = a(t, arguments.length > 1 ? arguments[1] : void 0, 3);
          return c(
            n,
            function (t, n) {
              if (r(n, t, e)) return c.stop(n);
            },
            void 0,
            !0,
            !0
          ).result;
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(2),
      i = n(1),
      a = n(9),
      s = n(17),
      c = n(3);
    r(
      { target: "Map", proto: !0, real: !0, forced: o },
      {
        findKey: function (t) {
          var e = i(this),
            n = s(e),
            r = a(t, arguments.length > 1 ? arguments[1] : void 0, 3);
          return c(
            n,
            function (t, n) {
              if (r(n, t, e)) return c.stop(t);
            },
            void 0,
            !0,
            !0
          ).result;
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(2),
      i = n(1),
      a = n(17),
      s = n(182),
      c = n(3);
    r(
      { target: "Map", proto: !0, real: !0, forced: o },
      {
        includes: function (t) {
          return c(
            a(i(this)),
            function (e, n) {
              if (s(n, t)) return c.stop();
            },
            void 0,
            !0,
            !0
          ).stopped;
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(2),
      i = n(1),
      a = n(17),
      s = n(3);
    r(
      { target: "Map", proto: !0, real: !0, forced: o },
      {
        keyOf: function (t) {
          return s(
            a(i(this)),
            function (e, n) {
              if (n === t) return s.stop(e);
            },
            void 0,
            !0,
            !0
          ).result;
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(2),
      i = n(11),
      a = n(1),
      s = n(5),
      c = n(9),
      l = n(19),
      u = n(17),
      f = n(3);
    r(
      { target: "Map", proto: !0, real: !0, forced: o },
      {
        mapKeys: function (t) {
          var e = a(this),
            n = u(e),
            r = c(t, arguments.length > 1 ? arguments[1] : void 0, 3),
            o = new (l(e, i("Map")))(),
            d = s(o.set);
          return (
            f(
              n,
              function (t, n) {
                d.call(o, r(n, t, e), n);
              },
              void 0,
              !0,
              !0
            ),
            o
          );
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(2),
      i = n(11),
      a = n(1),
      s = n(5),
      c = n(9),
      l = n(19),
      u = n(17),
      f = n(3);
    r(
      { target: "Map", proto: !0, real: !0, forced: o },
      {
        mapValues: function (t) {
          var e = a(this),
            n = u(e),
            r = c(t, arguments.length > 1 ? arguments[1] : void 0, 3),
            o = new (l(e, i("Map")))(),
            d = s(o.set);
          return (
            f(
              n,
              function (t, n) {
                d.call(o, t, r(n, t, e));
              },
              void 0,
              !0,
              !0
            ),
            o
          );
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(2),
      i = n(1),
      a = n(5),
      s = n(3);
    r(
      { target: "Map", proto: !0, real: !0, forced: o },
      {
        merge: function (t) {
          for (var e = i(this), n = a(e.set), r = 0; r < arguments.length; )
            s(arguments[r++], n, e, !0);
          return e;
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(2),
      i = n(1),
      a = n(5),
      s = n(17),
      c = n(3);
    r(
      { target: "Map", proto: !0, real: !0, forced: o },
      {
        reduce: function (t) {
          var e = i(this),
            n = s(e),
            r = arguments.length < 2,
            o = r ? void 0 : arguments[1];
          if (
            (a(t),
            c(
              n,
              function (n, i) {
                r ? ((r = !1), (o = i)) : (o = t(o, i, n, e));
              },
              void 0,
              !0,
              !0
            ),
            r)
          )
            throw TypeError("Reduce of empty map with no initial value");
          return o;
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(2),
      i = n(1),
      a = n(9),
      s = n(17),
      c = n(3);
    r(
      { target: "Map", proto: !0, real: !0, forced: o },
      {
        some: function (t) {
          var e = i(this),
            n = s(e),
            r = a(t, arguments.length > 1 ? arguments[1] : void 0, 3);
          return c(
            n,
            function (t, n) {
              if (r(n, t, e)) return c.stop();
            },
            void 0,
            !0,
            !0
          ).stopped;
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(2),
      i = n(1),
      a = n(5);
    r(
      { target: "Map", proto: !0, real: !0, forced: o },
      {
        update: function (t, e) {
          var n = i(this),
            r = arguments.length;
          a(e);
          var o = n.has(t);
          if (!o && r < 3) throw TypeError("Updating absent value");
          var s = o ? n.get(t) : a(r > 2 ? arguments[2] : void 0)(t, n);
          return n.set(t, e(s, t, n)), n;
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(2),
      i = n(183);
    r(
      { target: "Set", proto: !0, real: !0, forced: o },
      {
        addAll: function () {
          return i.apply(this, arguments);
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(2),
      i = n(110);
    r(
      { target: "Set", proto: !0, real: !0, forced: o },
      {
        deleteAll: function () {
          return i.apply(this, arguments);
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(2),
      i = n(11),
      a = n(1),
      s = n(5),
      c = n(19),
      l = n(3);
    r(
      { target: "Set", proto: !0, real: !0, forced: o },
      {
        difference: function (t) {
          var e = a(this),
            n = new (c(e, i("Set")))(e),
            r = s(n.delete);
          return (
            l(t, function (t) {
              r.call(n, t);
            }),
            n
          );
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(2),
      i = n(1),
      a = n(9),
      s = n(26),
      c = n(3);
    r(
      { target: "Set", proto: !0, real: !0, forced: o },
      {
        every: function (t) {
          var e = i(this),
            n = s(e),
            r = a(t, arguments.length > 1 ? arguments[1] : void 0, 3);
          return !c(
            n,
            function (t) {
              if (!r(t, t, e)) return c.stop();
            },
            void 0,
            !1,
            !0
          ).stopped;
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(2),
      i = n(11),
      a = n(1),
      s = n(5),
      c = n(9),
      l = n(19),
      u = n(26),
      f = n(3);
    r(
      { target: "Set", proto: !0, real: !0, forced: o },
      {
        filter: function (t) {
          var e = a(this),
            n = u(e),
            r = c(t, arguments.length > 1 ? arguments[1] : void 0, 3),
            o = new (l(e, i("Set")))(),
            d = s(o.add);
          return (
            f(
              n,
              function (t) {
                r(t, t, e) && d.call(o, t);
              },
              void 0,
              !1,
              !0
            ),
            o
          );
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(2),
      i = n(1),
      a = n(9),
      s = n(26),
      c = n(3);
    r(
      { target: "Set", proto: !0, real: !0, forced: o },
      {
        find: function (t) {
          var e = i(this),
            n = s(e),
            r = a(t, arguments.length > 1 ? arguments[1] : void 0, 3);
          return c(
            n,
            function (t) {
              if (r(t, t, e)) return c.stop(t);
            },
            void 0,
            !1,
            !0
          ).result;
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(2),
      i = n(11),
      a = n(1),
      s = n(5),
      c = n(19),
      l = n(3);
    r(
      { target: "Set", proto: !0, real: !0, forced: o },
      {
        intersection: function (t) {
          var e = a(this),
            n = new (c(e, i("Set")))(),
            r = s(e.has),
            o = s(n.add);
          return (
            l(t, function (t) {
              r.call(e, t) && o.call(n, t);
            }),
            n
          );
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(2),
      i = n(1),
      a = n(5),
      s = n(3);
    r(
      { target: "Set", proto: !0, real: !0, forced: o },
      {
        isDisjointFrom: function (t) {
          var e = i(this),
            n = a(e.has);
          return !s(t, function (t) {
            if (!0 === n.call(e, t)) return s.stop();
          }).stopped;
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(2),
      i = n(11),
      a = n(1),
      s = n(5),
      c = n(52),
      l = n(3);
    r(
      { target: "Set", proto: !0, real: !0, forced: o },
      {
        isSubsetOf: function (t) {
          var e = c(this),
            n = a(t),
            r = n.has;
          return (
            "function" != typeof r && ((n = new (i("Set"))(t)), (r = s(n.has))),
            !l(
              e,
              function (t) {
                if (!1 === r.call(n, t)) return l.stop();
              },
              void 0,
              !1,
              !0
            ).stopped
          );
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(2),
      i = n(1),
      a = n(5),
      s = n(3);
    r(
      { target: "Set", proto: !0, real: !0, forced: o },
      {
        isSupersetOf: function (t) {
          var e = i(this),
            n = a(e.has);
          return !s(t, function (t) {
            if (!1 === n.call(e, t)) return s.stop();
          }).stopped;
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(2),
      i = n(1),
      a = n(26),
      s = n(3);
    r(
      { target: "Set", proto: !0, real: !0, forced: o },
      {
        join: function (t) {
          var e = i(this),
            n = a(e),
            r = void 0 === t ? "," : String(t),
            o = [];
          return s(n, o.push, o, !1, !0), o.join(r);
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(2),
      i = n(11),
      a = n(1),
      s = n(5),
      c = n(9),
      l = n(19),
      u = n(26),
      f = n(3);
    r(
      { target: "Set", proto: !0, real: !0, forced: o },
      {
        map: function (t) {
          var e = a(this),
            n = u(e),
            r = c(t, arguments.length > 1 ? arguments[1] : void 0, 3),
            o = new (l(e, i("Set")))(),
            d = s(o.add);
          return (
            f(
              n,
              function (t) {
                d.call(o, r(t, t, e));
              },
              void 0,
              !1,
              !0
            ),
            o
          );
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(2),
      i = n(1),
      a = n(5),
      s = n(26),
      c = n(3);
    r(
      { target: "Set", proto: !0, real: !0, forced: o },
      {
        reduce: function (t) {
          var e = i(this),
            n = s(e),
            r = arguments.length < 2,
            o = r ? void 0 : arguments[1];
          if (
            (a(t),
            c(
              n,
              function (n) {
                r ? ((r = !1), (o = n)) : (o = t(o, n, n, e));
              },
              void 0,
              !1,
              !0
            ),
            r)
          )
            throw TypeError("Reduce of empty set with no initial value");
          return o;
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(2),
      i = n(1),
      a = n(9),
      s = n(26),
      c = n(3);
    r(
      { target: "Set", proto: !0, real: !0, forced: o },
      {
        some: function (t) {
          var e = i(this),
            n = s(e),
            r = a(t, arguments.length > 1 ? arguments[1] : void 0, 3);
          return c(
            n,
            function (t) {
              if (r(t, t, e)) return c.stop();
            },
            void 0,
            !1,
            !0
          ).stopped;
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(2),
      i = n(11),
      a = n(1),
      s = n(5),
      c = n(19),
      l = n(3);
    r(
      { target: "Set", proto: !0, real: !0, forced: o },
      {
        symmetricDifference: function (t) {
          var e = a(this),
            n = new (c(e, i("Set")))(e),
            r = s(n.delete),
            o = s(n.add);
          return (
            l(t, function (t) {
              r.call(n, t) || o.call(n, t);
            }),
            n
          );
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(2),
      i = n(11),
      a = n(1),
      s = n(5),
      c = n(19),
      l = n(3);
    r(
      { target: "Set", proto: !0, real: !0, forced: o },
      {
        union: function (t) {
          var e = a(this),
            n = new (c(e, i("Set")))(e);
          return l(t, s(n.add), n), n;
        },
      }
    );
  },
  function (t, e, n) {
    var r = n(0),
      o = n(185).values;
    r(
      { target: "Object", stat: !0 },
      {
        values: function (t) {
          return o(t);
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(5),
      i = n(23),
      a = n(7),
      s = n(49),
      c = [],
      l = c.sort,
      u = a(function () {
        c.sort(void 0);
      }),
      f = a(function () {
        c.sort(null);
      }),
      d = s("sort");
    r(
      { target: "Array", proto: !0, forced: u || !f || d },
      {
        sort: function (t) {
          return void 0 === t ? l.call(i(this)) : l.call(i(this), o(t));
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(190),
      o = n(191),
      i = n(54),
      a = (function () {
        function t(e, n) {
          (this._src = e), (this.opts = i.assignDeep({}, t.DefaultOpts, n));
        }
        return (
          (t.use = function (t) {
            this._pipeline = t;
          }),
          (t.from = function (t) {
            return new o.default(t);
          }),
          Object.defineProperty(t.prototype, "result", {
            get: function () {
              return this._result;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype._process = function (e, n) {
            this.opts.quantizer;
            e.scaleDown(this.opts);
            var o = r.buildProcessOptions(this.opts, n);
            return t._pipeline.process(e.getImageData(), o);
          }),
          (t.prototype.palette = function () {
            return this.swatches();
          }),
          (t.prototype.swatches = function () {
            throw new Error(
              "Method deprecated. Use `Vibrant.result.palettes[name]` instead"
            );
          }),
          (t.prototype.getPalette = function () {
            var t = this,
              e = arguments[0],
              n = arguments[1],
              r = "string" == typeof e ? e : "default",
              o = "string" == typeof e ? n : e,
              i = new this.opts.ImageClass();
            return i
              .load(this._src)
              .then(function (e) {
                return t._process(e, { generators: [r] });
              })
              .then(function (e) {
                return (t._result = e), e.palettes[r];
              })
              .then(function (t) {
                return i.remove(), o && o(void 0, t), t;
              })
              .catch(function (t) {
                return i.remove(), o && o(t), Promise.reject(t);
              });
          }),
          (t.prototype.getPalettes = function () {
            var t = this,
              e = arguments[0],
              n = arguments[1],
              r = Array.isArray(e) ? e : ["*"],
              o = Array.isArray(e) ? n : e,
              i = new this.opts.ImageClass();
            return i
              .load(this._src)
              .then(function (e) {
                return t._process(e, { generators: r });
              })
              .then(function (e) {
                return (t._result = e), e.palettes;
              })
              .then(function (t) {
                return i.remove(), o && o(void 0, t), t;
              })
              .catch(function (t) {
                return i.remove(), o && o(t), Promise.reject(t);
              });
          }),
          (t.DefaultOpts = { colorCount: 64, quality: 5, filters: [] }),
          t
        );
      })();
    e.default = a;
  },
  function (t, e, n) {
    window,
      (t.exports = (function () {
        return ((n = {}),
        (t.m = e =
          [
            function (t, e, n) {
              "use strict";
              function r(t, e) {
                e = e || { bubbles: !1, cancelable: !1, detail: void 0 };
                var n = document.createEvent("CustomEvent");
                return (
                  n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n
                );
              }
              var o;
              (e.__esModule = !0),
                (e.hasClassInTree = function (t, e) {
                  function n(t, e) {
                    return e && t && t.classList && t.classList.contains(e)
                      ? t
                      : null;
                  }
                  return (
                    n(t, e) ||
                    (function t(e, r) {
                      return e && e !== document
                        ? n(e, r)
                          ? e
                          : t(e.parentNode, r)
                        : null;
                    })(t, e)
                  );
                }),
                (e.ensureElementInView = function (t, e) {
                  var n = t.scrollTop + t.offsetTop,
                    r = n + t.clientHeight,
                    o = e.offsetTop,
                    i = o + e.clientHeight;
                  o < n
                    ? (t.scrollTop -= n - o)
                    : r < i && (t.scrollTop += i - r);
                }),
                (e.putContent = function (t, e, n) {
                  var r = t.offsetHeight,
                    o = t.getBoundingClientRect(),
                    i = n ? o.top : o.top - r,
                    a = n ? o.bottom : o.bottom + r;
                  return i <= 0
                    ? "below"
                    : a >= window.innerHeight
                    ? "above"
                    : n
                    ? e
                    : "below";
                }),
                (e.debounce = function (t, e, n) {
                  var r;
                  return (
                    void 0 === e && (e = 100),
                    void 0 === n && (n = !1),
                    function () {
                      for (var o = [], i = 0; i < arguments.length; i++)
                        o[i] = arguments[i];
                      var a = self,
                        s = n && !r;
                      clearTimeout(r),
                        (r = setTimeout(function () {
                          (r = null), n || t.apply(a, o);
                        }, e)),
                        s && t.apply(a, o);
                    }
                  );
                }),
                (e.isValueInArrayOfObjects = function (t, e, n) {
                  if (!Array.isArray(t)) return t[e] === n;
                  for (var r = 0, o = t; r < o.length; r++) {
                    var i = o[r];
                    if (i && i[e] && i[e] === n) return !0;
                  }
                  return !1;
                }),
                (e.highlight = function (t, e, n) {
                  var r = t,
                    o = new RegExp("(" + e.trim() + ")(?![^<]*>[^<>]*</)", "i");
                  if (!t.match(o)) return t;
                  var i = t.match(o).index,
                    a = i + t.match(o)[0].toString().length,
                    s = t.substring(i, a);
                  return r.replace(
                    o,
                    '<mark class="' + n + '">' + s + "</mark>"
                  );
                }),
                "function" != typeof (o = window).CustomEvent &&
                  ((r.prototype = o.Event.prototype), (o.CustomEvent = r));
            },
            function (t, e, n) {
              "use strict";
              e.__esModule = !0;
              var r =
                ((o.prototype.newOption = function (t) {
                  return {
                    id: t.id ? t.id : String(Math.floor(1e8 * Math.random())),
                    value: t.value ? t.value : "",
                    text: t.text ? t.text : "",
                    innerHTML: t.innerHTML ? t.innerHTML : "",
                    selected: !!t.selected && t.selected,
                    display: void 0 === t.display || t.display,
                    disabled: !!t.disabled && t.disabled,
                    placeholder: !!t.placeholder && t.placeholder,
                    class: t.class ? t.class : void 0,
                    data: t.data ? t.data : {},
                  };
                }),
                (o.prototype.add = function (t) {
                  this.data.push({
                    id: String(Math.floor(1e8 * Math.random())),
                    value: t.value,
                    text: t.text,
                    innerHTML: "",
                    selected: !1,
                    display: !0,
                    disabled: !1,
                    placeholder: !1,
                    class: void 0,
                    data: {},
                  });
                }),
                (o.prototype.parseSelectData = function () {
                  this.data = [];
                  for (
                    var t = 0, e = this.main.select.element.childNodes;
                    t < e.length;
                    t++
                  ) {
                    var n = e[t];
                    if ("OPTGROUP" === n.nodeName) {
                      for (
                        var r = { label: n.label, options: [] },
                          o = 0,
                          i = n.childNodes;
                        o < i.length;
                        o++
                      ) {
                        var a = i[o];
                        if ("OPTION" === a.nodeName) {
                          var s = this.pullOptionData(a);
                          r.options.push(s),
                            s.placeholder &&
                              "" !== s.text.trim() &&
                              (this.main.config.placeholderText = s.text);
                        }
                      }
                      this.data.push(r);
                    } else
                      "OPTION" === n.nodeName &&
                        ((s = this.pullOptionData(n)),
                        this.data.push(s),
                        s.placeholder &&
                          "" !== s.text.trim() &&
                          (this.main.config.placeholderText = s.text));
                  }
                }),
                (o.prototype.pullOptionData = function (t) {
                  return {
                    id:
                      (!!t.dataset && t.dataset.id) ||
                      String(Math.floor(1e8 * Math.random())),
                    value: t.value,
                    text: t.text,
                    innerHTML: t.innerHTML,
                    selected: t.selected,
                    disabled: t.disabled,
                    placeholder: "true" === t.dataset.placeholder,
                    class: t.className,
                    style: t.style.cssText,
                    data: t.dataset,
                  };
                }),
                (o.prototype.setSelectedFromSelect = function () {
                  if (this.main.config.isMultiple) {
                    for (
                      var t = [], e = 0, n = this.main.select.element.options;
                      e < n.length;
                      e++
                    ) {
                      var r = n[e];
                      if (r.selected) {
                        var o = this.getObjectFromData(r.value, "value");
                        o && o.id && t.push(o.id);
                      }
                    }
                    this.setSelected(t, "id");
                  } else {
                    var i = this.main.select.element;
                    if (-1 !== i.selectedIndex) {
                      var a = i.options[i.selectedIndex].value;
                      this.setSelected(a, "value");
                    }
                  }
                }),
                (o.prototype.setSelected = function (t, e) {
                  void 0 === e && (e = "id");
                  for (var n = 0, r = this.data; n < r.length; n++) {
                    var o = r[n];
                    if (o.hasOwnProperty("label")) {
                      if (o.hasOwnProperty("options")) {
                        var i = o.options;
                        if (i)
                          for (var a = 0, s = i; a < s.length; a++) {
                            var c = s[a];
                            c.placeholder ||
                              (c.selected = this.shouldBeSelected(c, t, e));
                          }
                      }
                    } else o.selected = this.shouldBeSelected(o, t, e);
                  }
                }),
                (o.prototype.shouldBeSelected = function (t, e, n) {
                  if ((void 0 === n && (n = "id"), Array.isArray(e)))
                    for (var r = 0, o = e; r < o.length; r++) {
                      var i = o[r];
                      if (n in t && String(t[n]) === String(i)) return !0;
                    }
                  else if (n in t && String(t[n]) === String(e)) return !0;
                  return !1;
                }),
                (o.prototype.getSelected = function () {
                  for (
                    var t = {
                        text: "",
                        placeholder: this.main.config.placeholderText,
                      },
                      e = [],
                      n = 0,
                      r = this.data;
                    n < r.length;
                    n++
                  ) {
                    var o = r[n];
                    if (o.hasOwnProperty("label")) {
                      if (o.hasOwnProperty("options")) {
                        var i = o.options;
                        if (i)
                          for (var a = 0, s = i; a < s.length; a++) {
                            var c = s[a];
                            c.selected &&
                              (this.main.config.isMultiple
                                ? e.push(c)
                                : (t = c));
                          }
                      }
                    } else
                      o.selected &&
                        (this.main.config.isMultiple ? e.push(o) : (t = o));
                  }
                  return this.main.config.isMultiple ? e : t;
                }),
                (o.prototype.addToSelected = function (t, e) {
                  if (
                    (void 0 === e && (e = "id"), this.main.config.isMultiple)
                  ) {
                    var n = [],
                      r = this.getSelected();
                    if (Array.isArray(r))
                      for (var o = 0, i = r; o < i.length; o++) {
                        var a = i[o];
                        n.push(a[e]);
                      }
                    n.push(t), this.setSelected(n, e);
                  }
                }),
                (o.prototype.removeFromSelected = function (t, e) {
                  if (
                    (void 0 === e && (e = "id"), this.main.config.isMultiple)
                  ) {
                    for (
                      var n = [], r = 0, o = this.getSelected();
                      r < o.length;
                      r++
                    ) {
                      var i = o[r];
                      String(i[e]) !== String(t) && n.push(i[e]);
                    }
                    this.setSelected(n, e);
                  }
                }),
                (o.prototype.onDataChange = function () {
                  this.main.onChange &&
                    this.isOnChangeEnabled &&
                    this.main.onChange(
                      JSON.parse(JSON.stringify(this.getSelected()))
                    );
                }),
                (o.prototype.getObjectFromData = function (t, e) {
                  void 0 === e && (e = "id");
                  for (var n = 0, r = this.data; n < r.length; n++) {
                    var o = r[n];
                    if (e in o && String(o[e]) === String(t)) return o;
                    if (o.hasOwnProperty("options")) {
                      var i = o;
                      if (i.options)
                        for (var a = 0, s = i.options; a < s.length; a++) {
                          var c = s[a];
                          if (String(c[e]) === String(t)) return c;
                        }
                    }
                  }
                  return null;
                }),
                (o.prototype.search = function (t) {
                  if ("" !== (this.searchValue = t).trim()) {
                    var e = this.main.config.searchFilter,
                      n = this.data.slice(0);
                    t = t.trim();
                    var r = n.map(function (n) {
                      if (n.hasOwnProperty("options")) {
                        var r = n,
                          o = [];
                        if (
                          (r.options &&
                            (o = r.options.filter(function (n) {
                              return e(n, t);
                            })),
                          0 !== o.length)
                        ) {
                          var i = Object.assign({}, r);
                          return (i.options = o), i;
                        }
                      }
                      return n.hasOwnProperty("text") && e(n, t) ? n : null;
                    });
                    this.filtered = r.filter(function (t) {
                      return t;
                    });
                  } else this.filtered = null;
                }),
                o);
              function o(t) {
                (this.contentOpen = !1),
                  (this.contentPosition = "below"),
                  (this.isOnChangeEnabled = !0),
                  (this.main = t.main),
                  (this.searchValue = ""),
                  (this.data = []),
                  (this.filtered = null),
                  this.parseSelectData(),
                  this.setSelectedFromSelect();
              }
              function i(t) {
                return (
                  void 0 !== t.text ||
                  (console.error(
                    "Data object option must have at least have a text value. Check object: " +
                      JSON.stringify(t)
                  ),
                  !1)
                );
              }
              (e.Data = r),
                (e.validateData = function (t) {
                  if (!t)
                    return (
                      console.error("Data must be an array of objects"), !1
                    );
                  for (var e = 0, n = 0, r = t; n < r.length; n++) {
                    var o = r[n];
                    if (o.hasOwnProperty("label")) {
                      if (o.hasOwnProperty("options")) {
                        var a = o.options;
                        if (a)
                          for (var s = 0, c = a; s < c.length; s++)
                            i(c[s]) || e++;
                      }
                    } else i(o) || e++;
                  }
                  return 0 === e;
                }),
                (e.validateOption = i);
            },
            function (t, e, n) {
              "use strict";
              e.__esModule = !0;
              var r = n(3),
                o = n(4),
                i = n(5),
                a = n(1),
                s = n(0),
                c =
                  ((l.prototype.validate = function (t) {
                    var e =
                      "string" == typeof t.select
                        ? document.querySelector(t.select)
                        : t.select;
                    if (!e) throw new Error("Could not find select element");
                    if ("SELECT" !== e.tagName)
                      throw new Error("Element isnt of type select");
                    return e;
                  }),
                  (l.prototype.selected = function () {
                    if (this.config.isMultiple) {
                      for (
                        var t = [], e = 0, n = (o = this.data.getSelected());
                        e < n.length;
                        e++
                      ) {
                        var r = n[e];
                        t.push(r.value);
                      }
                      return t;
                    }
                    var o;
                    return (o = this.data.getSelected()) ? o.value : "";
                  }),
                  (l.prototype.set = function (t, e, n, r) {
                    void 0 === e && (e = "value"),
                      void 0 === n && (n = !0),
                      void 0 === r && (r = !0),
                      this.config.isMultiple && !Array.isArray(t)
                        ? this.data.addToSelected(t, e)
                        : this.data.setSelected(t, e),
                      this.select.setValue(),
                      this.data.onDataChange(),
                      this.render(),
                      n && this.close();
                  }),
                  (l.prototype.setSelected = function (t, e, n, r) {
                    void 0 === e && (e = "value"),
                      void 0 === n && (n = !0),
                      void 0 === r && (r = !0),
                      this.set(t, e, n, r);
                  }),
                  (l.prototype.setData = function (t) {
                    if (a.validateData(t)) {
                      var e = JSON.parse(JSON.stringify(t)),
                        n = this.data.getSelected();
                      if (this.config.isAjax && n)
                        if (this.config.isMultiple)
                          for (var r = 0, o = n.reverse(); r < o.length; r++) {
                            var i = o[r];
                            e.unshift(i);
                          }
                        else
                          e.unshift(this.data.getSelected()),
                            e.unshift({ text: "", placeholder: !0 });
                      this.select.create(e),
                        this.data.parseSelectData(),
                        this.data.setSelectedFromSelect();
                    } else
                      console.error(
                        "Validation problem on: #" + this.select.element.id
                      );
                  }),
                  (l.prototype.addData = function (t) {
                    a.validateData([t])
                      ? (this.data.add(this.data.newOption(t)),
                        this.select.create(this.data.data),
                        this.data.parseSelectData(),
                        this.data.setSelectedFromSelect(),
                        this.render())
                      : console.error(
                          "Validation problem on: #" + this.select.element.id
                        );
                  }),
                  (l.prototype.open = function () {
                    var t = this;
                    if (this.config.isEnabled && !this.data.contentOpen) {
                      if (
                        (this.beforeOpen && this.beforeOpen(),
                        this.config.isMultiple && this.slim.multiSelected
                          ? this.slim.multiSelected.plus.classList.add(
                              "ss-cross"
                            )
                          : this.slim.singleSelected &&
                            (this.slim.singleSelected.arrowIcon.arrow.classList.remove(
                              "arrow-down"
                            ),
                            this.slim.singleSelected.arrowIcon.arrow.classList.add(
                              "arrow-up"
                            )),
                        this.slim[
                          this.config.isMultiple
                            ? "multiSelected"
                            : "singleSelected"
                        ].container.classList.add(
                          "above" === this.data.contentPosition
                            ? this.config.openAbove
                            : this.config.openBelow
                        ),
                        this.slim.content.classList.add(this.config.open),
                        "up" === this.config.showContent.toLowerCase()
                          ? this.moveContentAbove()
                          : "down" === this.config.showContent.toLowerCase()
                          ? this.moveContentBelow()
                          : "above" ===
                            s.putContent(
                              this.slim.content,
                              this.data.contentPosition,
                              this.data.contentOpen
                            )
                          ? this.moveContentAbove()
                          : this.moveContentBelow(),
                        !this.config.isMultiple)
                      ) {
                        var e = this.data.getSelected();
                        if (e) {
                          var n = e.id,
                            r = this.slim.list.querySelector(
                              '[data-id="' + n + '"]'
                            );
                          r && s.ensureElementInView(this.slim.list, r);
                        }
                      }
                      setTimeout(function () {
                        (t.data.contentOpen = !0),
                          t.config.searchFocus && t.slim.search.input.focus(),
                          t.afterOpen && t.afterOpen();
                      }, this.config.timeoutDelay);
                    }
                  }),
                  (l.prototype.close = function () {
                    var t = this;
                    this.data.contentOpen &&
                      (this.beforeClose && this.beforeClose(),
                      this.config.isMultiple && this.slim.multiSelected
                        ? (this.slim.multiSelected.container.classList.remove(
                            this.config.openAbove
                          ),
                          this.slim.multiSelected.container.classList.remove(
                            this.config.openBelow
                          ),
                          this.slim.multiSelected.plus.classList.remove(
                            "ss-cross"
                          ))
                        : this.slim.singleSelected &&
                          (this.slim.singleSelected.container.classList.remove(
                            this.config.openAbove
                          ),
                          this.slim.singleSelected.container.classList.remove(
                            this.config.openBelow
                          ),
                          this.slim.singleSelected.arrowIcon.arrow.classList.add(
                            "arrow-down"
                          ),
                          this.slim.singleSelected.arrowIcon.arrow.classList.remove(
                            "arrow-up"
                          )),
                      this.slim.content.classList.remove(this.config.open),
                      (this.data.contentOpen = !1),
                      this.search(""),
                      setTimeout(function () {
                        t.slim.content.removeAttribute("style"),
                          (t.data.contentPosition = "below"),
                          t.config.isMultiple && t.slim.multiSelected
                            ? (t.slim.multiSelected.container.classList.remove(
                                t.config.openAbove
                              ),
                              t.slim.multiSelected.container.classList.remove(
                                t.config.openBelow
                              ))
                            : t.slim.singleSelected &&
                              (t.slim.singleSelected.container.classList.remove(
                                t.config.openAbove
                              ),
                              t.slim.singleSelected.container.classList.remove(
                                t.config.openBelow
                              )),
                          t.slim.search.input.blur(),
                          t.afterClose && t.afterClose();
                      }, this.config.timeoutDelay));
                  }),
                  (l.prototype.moveContentAbove = function () {
                    var t = 0;
                    this.config.isMultiple && this.slim.multiSelected
                      ? (t = this.slim.multiSelected.container.offsetHeight)
                      : this.slim.singleSelected &&
                        (t = this.slim.singleSelected.container.offsetHeight);
                    var e = t + this.slim.content.offsetHeight - 1;
                    (this.slim.content.style.margin = "-" + e + "px 0 0 0"),
                      (this.slim.content.style.height = e - t + 1 + "px"),
                      (this.slim.content.style.transformOrigin =
                        "center bottom"),
                      (this.data.contentPosition = "above"),
                      this.config.isMultiple && this.slim.multiSelected
                        ? (this.slim.multiSelected.container.classList.remove(
                            this.config.openBelow
                          ),
                          this.slim.multiSelected.container.classList.add(
                            this.config.openAbove
                          ))
                        : this.slim.singleSelected &&
                          (this.slim.singleSelected.container.classList.remove(
                            this.config.openBelow
                          ),
                          this.slim.singleSelected.container.classList.add(
                            this.config.openAbove
                          ));
                  }),
                  (l.prototype.moveContentBelow = function () {
                    this.slim.content.removeAttribute("style"),
                      (this.data.contentPosition = "below"),
                      this.config.isMultiple && this.slim.multiSelected
                        ? (this.slim.multiSelected.container.classList.remove(
                            this.config.openAbove
                          ),
                          this.slim.multiSelected.container.classList.add(
                            this.config.openBelow
                          ))
                        : this.slim.singleSelected &&
                          (this.slim.singleSelected.container.classList.remove(
                            this.config.openAbove
                          ),
                          this.slim.singleSelected.container.classList.add(
                            this.config.openBelow
                          ));
                  }),
                  (l.prototype.enable = function () {
                    (this.config.isEnabled = !0),
                      this.config.isMultiple && this.slim.multiSelected
                        ? this.slim.multiSelected.container.classList.remove(
                            this.config.disabled
                          )
                        : this.slim.singleSelected &&
                          this.slim.singleSelected.container.classList.remove(
                            this.config.disabled
                          ),
                      (this.select.triggerMutationObserver = !1),
                      (this.select.element.disabled = !1),
                      (this.slim.search.input.disabled = !1),
                      (this.select.triggerMutationObserver = !0);
                  }),
                  (l.prototype.disable = function () {
                    (this.config.isEnabled = !1),
                      this.config.isMultiple && this.slim.multiSelected
                        ? this.slim.multiSelected.container.classList.add(
                            this.config.disabled
                          )
                        : this.slim.singleSelected &&
                          this.slim.singleSelected.container.classList.add(
                            this.config.disabled
                          ),
                      (this.select.triggerMutationObserver = !1),
                      (this.select.element.disabled = !0),
                      (this.slim.search.input.disabled = !0),
                      (this.select.triggerMutationObserver = !0);
                  }),
                  (l.prototype.search = function (t) {
                    if (this.data.searchValue !== t)
                      if (
                        ((this.slim.search.input.value = t), this.config.isAjax)
                      ) {
                        var e = this;
                        (this.config.isSearching = !0),
                          this.render(),
                          this.ajax &&
                            this.ajax(t, function (n) {
                              (e.config.isSearching = !1),
                                Array.isArray(n)
                                  ? (n.unshift({ text: "", placeholder: !0 }),
                                    e.setData(n),
                                    e.data.search(t),
                                    e.render())
                                  : "string" == typeof n
                                  ? e.slim.options(n)
                                  : e.render();
                            });
                      } else this.data.search(t), this.render();
                  }),
                  (l.prototype.setSearchText = function (t) {
                    this.config.searchText = t;
                  }),
                  (l.prototype.render = function () {
                    this.config.isMultiple
                      ? this.slim.values()
                      : (this.slim.placeholder(), this.slim.deselect()),
                      this.slim.options();
                  }),
                  (l.prototype.destroy = function (t) {
                    void 0 === t && (t = null);
                    var e = t
                        ? document.querySelector("." + t)
                        : this.slim.container,
                      n = t
                        ? document.querySelector("[data-ssid=" + t + "]")
                        : this.select.element;
                    e &&
                      n &&
                      ((n.style.display = null),
                      delete n.dataset.ssid,
                      (n.slim = null),
                      e.parentElement && e.parentElement.removeChild(e));
                  }),
                  l);
              function l(t) {
                var e = this;
                (this.ajax = null),
                  (this.addable = null),
                  (this.beforeOnChange = null),
                  (this.onChange = null),
                  (this.beforeOpen = null),
                  (this.afterOpen = null),
                  (this.beforeClose = null),
                  (this.afterClose = null);
                var n = this.validate(t);
                n.dataset.ssid && this.destroy(n.dataset.ssid),
                  t.ajax && (this.ajax = t.ajax),
                  t.addable && (this.addable = t.addable),
                  (this.config = new r.Config({
                    select: n,
                    isAjax: !!t.ajax,
                    showSearch: t.showSearch,
                    searchPlaceholder: t.searchPlaceholder,
                    searchText: t.searchText,
                    searchingText: t.searchingText,
                    searchFocus: t.searchFocus,
                    searchHighlight: t.searchHighlight,
                    searchFilter: t.searchFilter,
                    closeOnSelect: t.closeOnSelect,
                    showContent: t.showContent,
                    placeholderText: t.placeholder,
                    allowDeselect: t.allowDeselect,
                    allowDeselectOption: t.allowDeselectOption,
                    hideSelectedOption: t.hideSelectedOption,
                    deselectLabel: t.deselectLabel,
                    isEnabled: t.isEnabled,
                    valuesUseText: t.valuesUseText,
                    showOptionTooltips: t.showOptionTooltips,
                    selectByGroup: t.selectByGroup,
                    limit: t.limit,
                    timeoutDelay: t.timeoutDelay,
                  })),
                  (this.select = new o.Select({ select: n, main: this })),
                  (this.data = new a.Data({ main: this })),
                  (this.slim = new i.Slim({ main: this })),
                  this.select.element.parentNode &&
                    this.select.element.parentNode.insertBefore(
                      this.slim.container,
                      this.select.element.nextSibling
                    ),
                  t.data ? this.setData(t.data) : this.render(),
                  document.addEventListener("click", function (t) {
                    t.target &&
                      !s.hasClassInTree(t.target, e.config.id) &&
                      e.close();
                  }),
                  window.addEventListener(
                    "scroll",
                    s.debounce(function (t) {
                      e.data.contentOpen &&
                        "auto" === e.config.showContent &&
                        ("above" ===
                        s.putContent(
                          e.slim.content,
                          e.data.contentPosition,
                          e.data.contentOpen
                        )
                          ? e.moveContentAbove()
                          : e.moveContentBelow());
                    }),
                    !1
                  ),
                  t.beforeOnChange && (this.beforeOnChange = t.beforeOnChange),
                  t.onChange && (this.onChange = t.onChange),
                  t.beforeOpen && (this.beforeOpen = t.beforeOpen),
                  t.afterOpen && (this.afterOpen = t.afterOpen),
                  t.beforeClose && (this.beforeClose = t.beforeClose),
                  t.afterClose && (this.afterClose = t.afterClose),
                  this.config.isEnabled || this.disable();
              }
              e.default = c;
            },
            function (t, e, n) {
              "use strict";
              e.__esModule = !0;
              var r =
                ((o.prototype.searchFilter = function (t, e) {
                  return -1 !== t.text.toLowerCase().indexOf(e.toLowerCase());
                }),
                o);
              function o(t) {
                (this.id = ""),
                  (this.isMultiple = !1),
                  (this.isAjax = !1),
                  (this.isSearching = !1),
                  (this.showSearch = !0),
                  (this.searchFocus = !0),
                  (this.searchHighlight = !1),
                  (this.closeOnSelect = !0),
                  (this.showContent = "auto"),
                  (this.searchPlaceholder = "Search"),
                  (this.searchText = "No Results"),
                  (this.searchingText = "Searching..."),
                  (this.placeholderText = "Select Value"),
                  (this.allowDeselect = !1),
                  (this.allowDeselectOption = !1),
                  (this.hideSelectedOption = !1),
                  (this.deselectLabel = "x"),
                  (this.isEnabled = !0),
                  (this.valuesUseText = !1),
                  (this.showOptionTooltips = !1),
                  (this.selectByGroup = !1),
                  (this.limit = 0),
                  (this.timeoutDelay = 200),
                  (this.main = "ss-main"),
                  (this.singleSelected = "ss-single-selected"),
                  (this.arrow = "ss-arrow"),
                  (this.multiSelected = "ss-multi-selected"),
                  (this.add = "ss-add"),
                  (this.plus = "ss-plus"),
                  (this.values = "ss-values"),
                  (this.value = "ss-value"),
                  (this.valueText = "ss-value-text"),
                  (this.valueDelete = "ss-value-delete"),
                  (this.content = "ss-content"),
                  (this.open = "ss-open"),
                  (this.openAbove = "ss-open-above"),
                  (this.openBelow = "ss-open-below"),
                  (this.search = "ss-search"),
                  (this.searchHighlighter = "ss-search-highlight"),
                  (this.addable = "ss-addable"),
                  (this.list = "ss-list"),
                  (this.optgroup = "ss-optgroup"),
                  (this.optgroupLabel = "ss-optgroup-label"),
                  (this.optgroupLabelSelectable =
                    "ss-optgroup-label-selectable"),
                  (this.option = "ss-option"),
                  (this.optionSelected = "ss-option-selected"),
                  (this.highlighted = "ss-highlighted"),
                  (this.disabled = "ss-disabled"),
                  (this.hide = "ss-hide"),
                  (this.id = "ss-" + Math.floor(1e5 * Math.random())),
                  (this.style = t.select.style.cssText),
                  (this.class = t.select.className.split(" ")),
                  (this.isMultiple = t.select.multiple),
                  (this.isAjax = t.isAjax),
                  (this.showSearch = !1 !== t.showSearch),
                  (this.searchFocus = !1 !== t.searchFocus),
                  (this.searchHighlight = !0 === t.searchHighlight),
                  (this.closeOnSelect = !1 !== t.closeOnSelect),
                  t.showContent && (this.showContent = t.showContent),
                  (this.isEnabled = !1 !== t.isEnabled),
                  t.searchPlaceholder &&
                    (this.searchPlaceholder = t.searchPlaceholder),
                  t.searchText && (this.searchText = t.searchText),
                  t.searchingText && (this.searchingText = t.searchingText),
                  t.placeholderText &&
                    (this.placeholderText = t.placeholderText),
                  (this.allowDeselect = !0 === t.allowDeselect),
                  (this.allowDeselectOption = !0 === t.allowDeselectOption),
                  (this.hideSelectedOption = !0 === t.hideSelectedOption),
                  t.deselectLabel && (this.deselectLabel = t.deselectLabel),
                  t.valuesUseText && (this.valuesUseText = t.valuesUseText),
                  t.showOptionTooltips &&
                    (this.showOptionTooltips = t.showOptionTooltips),
                  t.selectByGroup && (this.selectByGroup = t.selectByGroup),
                  t.limit && (this.limit = t.limit),
                  t.searchFilter && (this.searchFilter = t.searchFilter),
                  null != t.timeoutDelay &&
                    (this.timeoutDelay = t.timeoutDelay);
              }
              e.Config = r;
            },
            function (t, e, n) {
              "use strict";
              e.__esModule = !0;
              var r =
                ((o.prototype.setValue = function () {
                  if (this.main.data.getSelected()) {
                    if (this.main.config.isMultiple)
                      for (
                        var t = this.main.data.getSelected(),
                          e = 0,
                          n = this.element.options;
                        e < n.length;
                        e++
                      ) {
                        var r = n[e];
                        r.selected = !1;
                        for (var o = 0, i = t; o < i.length; o++)
                          i[o].value === r.value && (r.selected = !0);
                      }
                    else
                      (t = this.main.data.getSelected()),
                        (this.element.value = t ? t.value : "");
                    (this.main.data.isOnChangeEnabled = !1),
                      this.element.dispatchEvent(
                        new CustomEvent("change", { bubbles: !0 })
                      ),
                      (this.main.data.isOnChangeEnabled = !0);
                  }
                }),
                (o.prototype.addAttributes = function () {
                  (this.element.tabIndex = -1),
                    (this.element.style.display = "none"),
                    (this.element.dataset.ssid = this.main.config.id);
                }),
                (o.prototype.addEventListeners = function () {
                  var t = this;
                  this.element.addEventListener("change", function (e) {
                    t.main.data.setSelectedFromSelect(), t.main.render();
                  });
                }),
                (o.prototype.addMutationObserver = function () {
                  var t = this;
                  this.main.config.isAjax ||
                    ((this.mutationObserver = new MutationObserver(function (
                      e
                    ) {
                      t.triggerMutationObserver &&
                        (t.main.data.parseSelectData(),
                        t.main.data.setSelectedFromSelect(),
                        t.main.render(),
                        e.forEach(function (e) {
                          "class" === e.attributeName &&
                            t.main.slim.updateContainerDivClass(
                              t.main.slim.container
                            );
                        }));
                    })),
                    this.observeMutationObserver());
                }),
                (o.prototype.observeMutationObserver = function () {
                  this.mutationObserver &&
                    this.mutationObserver.observe(this.element, {
                      attributes: !0,
                      childList: !0,
                      characterData: !0,
                    });
                }),
                (o.prototype.disconnectMutationObserver = function () {
                  this.mutationObserver && this.mutationObserver.disconnect();
                }),
                (o.prototype.create = function (t) {
                  this.element.innerHTML = "";
                  for (var e = 0, n = t; e < n.length; e++) {
                    var r = n[e];
                    if (r.hasOwnProperty("options")) {
                      var o = r,
                        i = document.createElement("optgroup");
                      if (((i.label = o.label), o.options))
                        for (var a = 0, s = o.options; a < s.length; a++) {
                          var c = s[a];
                          i.appendChild(this.createOption(c));
                        }
                      this.element.appendChild(i);
                    } else this.element.appendChild(this.createOption(r));
                  }
                }),
                (o.prototype.createOption = function (t) {
                  var e = document.createElement("option");
                  return (
                    (e.value = t.value || t.text),
                    (e.innerHTML = t.innerHTML || t.text),
                    t.selected && (e.selected = t.selected),
                    t.disabled && (e.disabled = !0),
                    t.placeholder && e.setAttribute("data-placeholder", "true"),
                    t.class &&
                      t.class.split(" ").forEach(function (t) {
                        e.classList.add(t);
                      }),
                    t.data &&
                      "object" == typeof t.data &&
                      Object.keys(t.data).forEach(function (n) {
                        e.setAttribute("data-" + n, t.data[n]);
                      }),
                    e
                  );
                }),
                o);
              function o(t) {
                (this.triggerMutationObserver = !0),
                  (this.element = t.select),
                  (this.main = t.main),
                  this.element.disabled && (this.main.config.isEnabled = !1),
                  this.addAttributes(),
                  this.addEventListeners(),
                  (this.mutationObserver = null),
                  this.addMutationObserver(),
                  (this.element.slim = t.main);
              }
              e.Select = r;
            },
            function (t, e, n) {
              "use strict";
              e.__esModule = !0;
              var r = n(0),
                o = n(1),
                i =
                  ((a.prototype.containerDiv = function () {
                    var t = document.createElement("div");
                    return (
                      (t.style.cssText = this.main.config.style),
                      this.updateContainerDivClass(t),
                      t
                    );
                  }),
                  (a.prototype.updateContainerDivClass = function (t) {
                    (this.main.config.class =
                      this.main.select.element.className.split(" ")),
                      (t.className = ""),
                      t.classList.add(this.main.config.id),
                      t.classList.add(this.main.config.main);
                    for (
                      var e = 0, n = this.main.config.class;
                      e < n.length;
                      e++
                    ) {
                      var r = n[e];
                      "" !== r.trim() && t.classList.add(r);
                    }
                  }),
                  (a.prototype.singleSelectedDiv = function () {
                    var t = this,
                      e = document.createElement("div");
                    e.classList.add(this.main.config.singleSelected);
                    var n = document.createElement("span");
                    n.classList.add("placeholder"), e.appendChild(n);
                    var r = document.createElement("span");
                    (r.innerHTML = this.main.config.deselectLabel),
                      r.classList.add("ss-deselect"),
                      (r.onclick = function (e) {
                        e.stopPropagation(),
                          t.main.config.isEnabled && t.main.set("");
                      }),
                      e.appendChild(r);
                    var o = document.createElement("span");
                    o.classList.add(this.main.config.arrow);
                    var i = document.createElement("span");
                    return (
                      i.classList.add("arrow-down"),
                      o.appendChild(i),
                      e.appendChild(o),
                      (e.onclick = function () {
                        t.main.config.isEnabled &&
                          (t.main.data.contentOpen
                            ? t.main.close()
                            : t.main.open());
                      }),
                      {
                        container: e,
                        placeholder: n,
                        deselect: r,
                        arrowIcon: { container: o, arrow: i },
                      }
                    );
                  }),
                  (a.prototype.placeholder = function () {
                    var t = this.main.data.getSelected();
                    if (null === t || (t && t.placeholder)) {
                      var e = document.createElement("span");
                      e.classList.add(this.main.config.disabled),
                        (e.innerHTML = this.main.config.placeholderText),
                        this.singleSelected &&
                          (this.singleSelected.placeholder.innerHTML =
                            e.outerHTML);
                    } else {
                      var n = "";
                      t &&
                        (n =
                          t.innerHTML && !0 !== this.main.config.valuesUseText
                            ? t.innerHTML
                            : t.text),
                        this.singleSelected &&
                          (this.singleSelected.placeholder.innerHTML = t
                            ? n
                            : "");
                    }
                  }),
                  (a.prototype.deselect = function () {
                    if (this.singleSelected) {
                      if (!this.main.config.allowDeselect)
                        return void this.singleSelected.deselect.classList.add(
                          "ss-hide"
                        );
                      "" === this.main.selected()
                        ? this.singleSelected.deselect.classList.add("ss-hide")
                        : this.singleSelected.deselect.classList.remove(
                            "ss-hide"
                          );
                    }
                  }),
                  (a.prototype.multiSelectedDiv = function () {
                    var t = this,
                      e = document.createElement("div");
                    e.classList.add(this.main.config.multiSelected);
                    var n = document.createElement("div");
                    n.classList.add(this.main.config.values), e.appendChild(n);
                    var r = document.createElement("div");
                    r.classList.add(this.main.config.add);
                    var o = document.createElement("span");
                    return (
                      o.classList.add(this.main.config.plus),
                      (o.onclick = function (e) {
                        t.main.data.contentOpen &&
                          (t.main.close(), e.stopPropagation());
                      }),
                      r.appendChild(o),
                      e.appendChild(r),
                      (e.onclick = function (e) {
                        t.main.config.isEnabled &&
                          (e.target.classList.contains(
                            t.main.config.valueDelete
                          ) ||
                            (t.main.data.contentOpen
                              ? t.main.close()
                              : t.main.open()));
                      }),
                      { container: e, values: n, add: r, plus: o }
                    );
                  }),
                  (a.prototype.values = function () {
                    if (this.multiSelected) {
                      for (
                        var t,
                          e = this.multiSelected.values.childNodes,
                          n = this.main.data.getSelected(),
                          r = [],
                          o = 0,
                          i = e;
                        o < i.length;
                        o++
                      ) {
                        var a = i[o];
                        t = !0;
                        for (var s = 0, c = n; s < c.length; s++) {
                          var l = c[s];
                          String(l.id) === String(a.dataset.id) && (t = !1);
                        }
                        t && r.push(a);
                      }
                      for (var u = 0, f = r; u < f.length; u++) {
                        var d = f[u];
                        d.classList.add("ss-out"),
                          this.multiSelected.values.removeChild(d);
                      }
                      for (
                        e = this.multiSelected.values.childNodes, l = 0;
                        l < n.length;
                        l++
                      ) {
                        t = !1;
                        for (var h = 0, p = e; h < p.length; h++)
                          (a = p[h]),
                            String(n[l].id) === String(a.dataset.id) &&
                              (t = !0);
                        t ||
                          (0 !== e.length &&
                          HTMLElement.prototype.insertAdjacentElement
                            ? 0 === l
                              ? this.multiSelected.values.insertBefore(
                                  this.valueDiv(n[l]),
                                  e[l]
                                )
                              : e[l - 1].insertAdjacentElement(
                                  "afterend",
                                  this.valueDiv(n[l])
                                )
                            : this.multiSelected.values.appendChild(
                                this.valueDiv(n[l])
                              ));
                      }
                      if (0 === n.length) {
                        var m = document.createElement("span");
                        m.classList.add(this.main.config.disabled),
                          (m.innerHTML = this.main.config.placeholderText),
                          (this.multiSelected.values.innerHTML = m.outerHTML);
                      }
                    }
                  }),
                  (a.prototype.valueDiv = function (t) {
                    var e = this,
                      n = document.createElement("div");
                    n.classList.add(this.main.config.value),
                      (n.dataset.id = t.id);
                    var r = document.createElement("span");
                    r.classList.add(this.main.config.valueText),
                      (r.innerHTML =
                        t.innerHTML && !0 !== this.main.config.valuesUseText
                          ? t.innerHTML
                          : t.text),
                      n.appendChild(r);
                    var o = document.createElement("span");
                    return (
                      o.classList.add(this.main.config.valueDelete),
                      (o.innerHTML = this.main.config.deselectLabel),
                      (o.onclick = function (n) {
                        n.preventDefault(), n.stopPropagation();
                        var r = !1;
                        if (e.main.config.isEnabled) {
                          if (
                            (e.main.beforeOnChange || (r = !0),
                            e.main.beforeOnChange)
                          ) {
                            for (
                              var o = e.main.data.getSelected(),
                                i = JSON.parse(JSON.stringify(o)),
                                a = 0;
                              a < i.length;
                              a++
                            )
                              i[a].id === t.id && i.splice(a, 1);
                            !1 !== e.main.beforeOnChange(i) && (r = !0);
                          }
                          r &&
                            (e.main.data.removeFromSelected(t.id, "id"),
                            e.main.render(),
                            e.main.select.setValue(),
                            e.main.data.onDataChange());
                        }
                      }),
                      n.appendChild(o),
                      n
                    );
                  }),
                  (a.prototype.contentDiv = function () {
                    var t = document.createElement("div");
                    return t.classList.add(this.main.config.content), t;
                  }),
                  (a.prototype.searchDiv = function () {
                    var t = this,
                      e = document.createElement("div"),
                      n = document.createElement("input"),
                      r = document.createElement("div");
                    e.classList.add(this.main.config.search);
                    var i = { container: e, input: n };
                    return (
                      this.main.config.showSearch ||
                        (e.classList.add(this.main.config.hide),
                        (n.readOnly = !0)),
                      (n.type = "search"),
                      (n.placeholder = this.main.config.searchPlaceholder),
                      (n.tabIndex = 0),
                      n.setAttribute(
                        "aria-label",
                        this.main.config.searchPlaceholder
                      ),
                      (n.onclick = function (e) {
                        setTimeout(function () {
                          "" === e.target.value && t.main.search("");
                        }, 10);
                      }),
                      (n.onkeydown = function (e) {
                        "ArrowUp" === e.key
                          ? (t.main.open(), t.highlightUp(), e.preventDefault())
                          : "ArrowDown" === e.key
                          ? (t.main.open(),
                            t.highlightDown(),
                            e.preventDefault())
                          : "Tab" === e.key
                          ? t.main.data.contentOpen
                            ? t.main.close()
                            : setTimeout(function () {
                                t.main.close();
                              }, t.main.config.timeoutDelay)
                          : "Enter" === e.key && e.preventDefault();
                      }),
                      (n.onkeyup = function (e) {
                        var o = e.target;
                        if ("Enter" === e.key) {
                          if (t.main.addable && e.ctrlKey)
                            return (
                              r.click(),
                              e.preventDefault(),
                              void e.stopPropagation()
                            );
                          var i = t.list.querySelector(
                            "." + t.main.config.highlighted
                          );
                          i && i.click();
                        } else
                          "ArrowUp" === e.key ||
                            "ArrowDown" === e.key ||
                            ("Escape" === e.key
                              ? t.main.close()
                              : t.main.config.showSearch &&
                                t.main.data.contentOpen
                              ? t.main.search(o.value)
                              : (n.value = ""));
                        e.preventDefault(), e.stopPropagation();
                      }),
                      (n.onfocus = function () {
                        t.main.open();
                      }),
                      e.appendChild(n),
                      this.main.addable &&
                        (r.classList.add(this.main.config.addable),
                        (r.innerHTML = "+"),
                        (r.onclick = function (e) {
                          if (t.main.addable) {
                            e.preventDefault(), e.stopPropagation();
                            var n = t.search.input.value;
                            if ("" === n.trim())
                              return void t.search.input.focus();
                            var r = t.main.addable(n),
                              i = "";
                            if (!r) return;
                            "object" == typeof r
                              ? o.validateOption(r) &&
                                (t.main.addData(r),
                                (i = r.value ? r.value : r.text))
                              : (t.main.addData(
                                  t.main.data.newOption({ text: r, value: r })
                                ),
                                (i = r)),
                              t.main.search(""),
                              setTimeout(function () {
                                t.main.set(i, "value", !1, !1);
                              }, 100),
                              t.main.config.closeOnSelect &&
                                setTimeout(function () {
                                  t.main.close();
                                }, 100);
                          }
                        }),
                        e.appendChild(r),
                        (i.addable = r)),
                      i
                    );
                  }),
                  (a.prototype.highlightUp = function () {
                    var t = this.list.querySelector(
                        "." + this.main.config.highlighted
                      ),
                      e = null;
                    if (t)
                      for (
                        e = t.previousSibling;
                        null !== e &&
                        e.classList.contains(this.main.config.disabled);

                      )
                        e = e.previousSibling;
                    else {
                      var n = this.list.querySelectorAll(
                        "." +
                          this.main.config.option +
                          ":not(." +
                          this.main.config.disabled +
                          ")"
                      );
                      e = n[n.length - 1];
                    }
                    if (
                      (e &&
                        e.classList.contains(this.main.config.optgroupLabel) &&
                        (e = null),
                      null === e)
                    ) {
                      var o = t.parentNode;
                      if (
                        o.classList.contains(this.main.config.optgroup) &&
                        o.previousSibling
                      ) {
                        var i = o.previousSibling.querySelectorAll(
                          "." +
                            this.main.config.option +
                            ":not(." +
                            this.main.config.disabled +
                            ")"
                        );
                        i.length && (e = i[i.length - 1]);
                      }
                    }
                    e &&
                      (t && t.classList.remove(this.main.config.highlighted),
                      e.classList.add(this.main.config.highlighted),
                      r.ensureElementInView(this.list, e));
                  }),
                  (a.prototype.highlightDown = function () {
                    var t = this.list.querySelector(
                        "." + this.main.config.highlighted
                      ),
                      e = null;
                    if (t)
                      for (
                        e = t.nextSibling;
                        null !== e &&
                        e.classList.contains(this.main.config.disabled);

                      )
                        e = e.nextSibling;
                    else
                      e = this.list.querySelector(
                        "." +
                          this.main.config.option +
                          ":not(." +
                          this.main.config.disabled +
                          ")"
                      );
                    if (null === e && null !== t) {
                      var n = t.parentNode;
                      n.classList.contains(this.main.config.optgroup) &&
                        n.nextSibling &&
                        (e = n.nextSibling.querySelector(
                          "." +
                            this.main.config.option +
                            ":not(." +
                            this.main.config.disabled +
                            ")"
                        ));
                    }
                    e &&
                      (t && t.classList.remove(this.main.config.highlighted),
                      e.classList.add(this.main.config.highlighted),
                      r.ensureElementInView(this.list, e));
                  }),
                  (a.prototype.listDiv = function () {
                    var t = document.createElement("div");
                    return t.classList.add(this.main.config.list), t;
                  }),
                  (a.prototype.options = function (t) {
                    void 0 === t && (t = "");
                    var e,
                      n = this.main.data.filtered || this.main.data.data;
                    if ((this.list.innerHTML = "") !== t)
                      return (
                        (e = document.createElement("div")).classList.add(
                          this.main.config.option
                        ),
                        e.classList.add(this.main.config.disabled),
                        (e.innerHTML = t),
                        void this.list.appendChild(e)
                      );
                    if (this.main.config.isAjax && this.main.config.isSearching)
                      return (
                        (e = document.createElement("div")).classList.add(
                          this.main.config.option
                        ),
                        e.classList.add(this.main.config.disabled),
                        (e.innerHTML = this.main.config.searchingText),
                        void this.list.appendChild(e)
                      );
                    if (0 === n.length) {
                      var r = document.createElement("div");
                      return (
                        r.classList.add(this.main.config.option),
                        r.classList.add(this.main.config.disabled),
                        (r.innerHTML = this.main.config.searchText),
                        void this.list.appendChild(r)
                      );
                    }
                    for (
                      var o = function (t) {
                          if (t.hasOwnProperty("label")) {
                            var e = t,
                              n = document.createElement("div");
                            n.classList.add(i.main.config.optgroup);
                            var r = document.createElement("div");
                            r.classList.add(i.main.config.optgroupLabel),
                              i.main.config.selectByGroup &&
                                i.main.config.isMultiple &&
                                r.classList.add(
                                  i.main.config.optgroupLabelSelectable
                                ),
                              (r.innerHTML = e.label),
                              n.appendChild(r);
                            var o = e.options;
                            if (o) {
                              for (var a = 0, s = o; a < s.length; a++) {
                                var c = s[a];
                                n.appendChild(i.option(c));
                              }
                              if (
                                i.main.config.selectByGroup &&
                                i.main.config.isMultiple
                              ) {
                                var l = i;
                                r.addEventListener("click", function (t) {
                                  t.preventDefault(), t.stopPropagation();
                                  for (
                                    var e = 0, r = n.children;
                                    e < r.length;
                                    e++
                                  ) {
                                    var o = r[e];
                                    -1 !==
                                      o.className.indexOf(
                                        l.main.config.option
                                      ) && o.click();
                                  }
                                });
                              }
                            }
                            i.list.appendChild(n);
                          } else i.list.appendChild(i.option(t));
                        },
                        i = this,
                        a = 0,
                        s = n;
                      a < s.length;
                      a++
                    )
                      o(s[a]);
                  }),
                  (a.prototype.option = function (t) {
                    if (t.placeholder) {
                      var e = document.createElement("div");
                      return (
                        e.classList.add(this.main.config.option),
                        e.classList.add(this.main.config.hide),
                        e
                      );
                    }
                    var n = document.createElement("div");
                    n.classList.add(this.main.config.option),
                      t.class &&
                        t.class.split(" ").forEach(function (t) {
                          n.classList.add(t);
                        }),
                      t.style && (n.style.cssText = t.style);
                    var o = this.main.data.getSelected();
                    (n.dataset.id = t.id),
                      this.main.config.searchHighlight &&
                      this.main.slim &&
                      t.innerHTML &&
                      "" !== this.main.slim.search.input.value.trim()
                        ? (n.innerHTML = r.highlight(
                            t.innerHTML,
                            this.main.slim.search.input.value,
                            this.main.config.searchHighlighter
                          ))
                        : t.innerHTML && (n.innerHTML = t.innerHTML),
                      this.main.config.showOptionTooltips &&
                        n.textContent &&
                        n.setAttribute("title", n.textContent);
                    var i = this;
                    n.addEventListener("click", function (e) {
                      e.preventDefault(), e.stopPropagation();
                      var n = this.dataset.id;
                      if (
                        !0 === t.selected &&
                        i.main.config.allowDeselectOption
                      ) {
                        var r = !1;
                        if (
                          ((i.main.beforeOnChange &&
                            i.main.config.isMultiple) ||
                            (r = !0),
                          i.main.beforeOnChange && i.main.config.isMultiple)
                        ) {
                          for (
                            var a = i.main.data.getSelected(),
                              s = JSON.parse(JSON.stringify(a)),
                              c = 0;
                            c < s.length;
                            c++
                          )
                            s[c].id === n && s.splice(c, 1);
                          !1 !== i.main.beforeOnChange(s) && (r = !0);
                        }
                        r &&
                          (i.main.config.isMultiple
                            ? (i.main.data.removeFromSelected(n, "id"),
                              i.main.render(),
                              i.main.select.setValue(),
                              i.main.data.onDataChange())
                            : i.main.set(""));
                      } else {
                        if (t.disabled || t.selected) return;
                        if (
                          i.main.config.limit &&
                          Array.isArray(o) &&
                          i.main.config.limit <= o.length
                        )
                          return;
                        if (i.main.beforeOnChange) {
                          var l = void 0,
                            u = JSON.parse(
                              JSON.stringify(i.main.data.getObjectFromData(n))
                            );
                          (u.selected = !0),
                            i.main.config.isMultiple
                              ? (l = JSON.parse(JSON.stringify(o))).push(u)
                              : (l = JSON.parse(JSON.stringify(u))),
                            !1 !== i.main.beforeOnChange(l) &&
                              i.main.set(n, "id", i.main.config.closeOnSelect);
                        } else i.main.set(n, "id", i.main.config.closeOnSelect);
                      }
                    });
                    var a = o && r.isValueInArrayOfObjects(o, "id", t.id);
                    return (
                      (t.disabled || a) &&
                        ((n.onclick = null),
                        i.main.config.allowDeselectOption ||
                          n.classList.add(this.main.config.disabled),
                        i.main.config.hideSelectedOption &&
                          n.classList.add(this.main.config.hide)),
                      a
                        ? n.classList.add(this.main.config.optionSelected)
                        : n.classList.remove(this.main.config.optionSelected),
                      n
                    );
                  }),
                  a);
              function a(t) {
                (this.main = t.main),
                  (this.container = this.containerDiv()),
                  (this.content = this.contentDiv()),
                  (this.search = this.searchDiv()),
                  (this.list = this.listDiv()),
                  this.options(),
                  (this.singleSelected = null),
                  (this.multiSelected = null),
                  this.main.config.isMultiple
                    ? ((this.multiSelected = this.multiSelectedDiv()),
                      this.multiSelected &&
                        this.container.appendChild(
                          this.multiSelected.container
                        ))
                    : ((this.singleSelected = this.singleSelectedDiv()),
                      this.container.appendChild(
                        this.singleSelected.container
                      )),
                  this.container.appendChild(this.content),
                  this.content.appendChild(this.search.container),
                  this.content.appendChild(this.list);
              }
              e.Slim = i;
            },
          ]),
        (t.c = n),
        (t.d = function (e, n, r) {
          t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: r });
        }),
        (t.r = function (t) {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (t.t = function (e, n) {
          if ((1 & n && (e = t(e)), 8 & n)) return e;
          if (4 & n && "object" == typeof e && e && e.__esModule) return e;
          var r = Object.create(null);
          if (
            (t.r(r),
            Object.defineProperty(r, "default", { enumerable: !0, value: e }),
            2 & n && "string" != typeof e)
          )
            for (var o in e)
              t.d(
                r,
                o,
                function (t) {
                  return e[t];
                }.bind(null, o)
              );
          return r;
        }),
        (t.n = function (e) {
          var n =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return t.d(n, "a", n), n;
        }),
        (t.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (t.p = ""),
        t((t.s = 2))).default;
        function t(r) {
          if (n[r]) return n[r].exports;
          var o = (n[r] = { i: r, l: !1, exports: {} });
          return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
        }
        var e, n;
      })());
  },
  function (t, e, n) {
    /*! Selectionjs 1.3.0 MIT | https://github.com/Simonwep/selection */
    window,
      (t.exports = (function (t) {
        var e = {};
        function n(r) {
          if (e[r]) return e[r].exports;
          var o = (e[r] = { i: r, l: !1, exports: {} });
          return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
        }
        return (
          (n.m = t),
          (n.c = e),
          (n.d = function (t, e, r) {
            n.o(t, e) ||
              Object.defineProperty(t, e, { enumerable: !0, get: r });
          }),
          (n.r = function (t) {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(t, "u", { value: !0 });
          }),
          (n.t = function (t, e) {
            if ((1 & e && (t = n(t)), 8 & e)) return t;
            if (4 & e && "object" == typeof t && t && t.u) return t;
            var r = Object.create(null);
            if (
              (n.r(r),
              Object.defineProperty(r, "default", { enumerable: !0, value: t }),
              2 & e && "string" != typeof t)
            )
              for (var o in t)
                n.d(
                  r,
                  o,
                  function (e) {
                    return t[e];
                  }.bind(null, o)
                );
            return r;
          }),
          (n.n = function (t) {
            var e =
              t && t.u
                ? function () {
                    return t.default;
                  }
                : function () {
                    return t;
                  };
            return n.d(e, "a", e), e;
          }),
          (n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }),
          (n.p = "dist/"),
          n((n.s = 1))
        );
      })([
        function (t) {
          t.exports = JSON.parse('{"a":"1.3.0"}');
        },
        function (t, e, n) {
          "use strict";
          function r(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(t);
              e &&
                (r = r.filter(function (e) {
                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })),
                n.push.apply(n, r);
            }
            return n;
          }
          function o(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? r(n, !0).forEach(function (e) {
                    i(t, e, n[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : r(n).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(n, e)
                    );
                  });
            }
            return t;
          }
          function i(t, e, n) {
            return (
              e in t
                ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[e] = n),
              t
            );
          }
          function a(t, e, n, r, i = {}) {
            e instanceof HTMLCollection || e instanceof NodeList
              ? (e = Array.from(e))
              : Array.isArray(e) || (e = [e]),
              Array.isArray(n) || (n = [n]);
            for (const a of e)
              for (const e of n) a[t](e, r, o({ capture: !1 }, i));
            return Array.prototype.slice.call(arguments, 1);
          }
          n.r(e);
          const s = a.bind(null, "addEventListener"),
            c = a.bind(null, "removeEventListener"),
            l = (t, e = "px") => ("number" == typeof t ? t + e : t);
          function u(t, e, n) {
            const r = t && t.style;
            if (r)
              if ("object" == typeof e) for (const t in e) r[t] = l(e[t]);
              else {
                if (null === n) {
                  const r = document.defaultView;
                  return (
                    r && r.getComputedStyle
                      ? (n = r.getComputedStyle(t, null))
                      : t.currentStyle && (n = t.currentStyle),
                    null === e ? n : n[e]
                  );
                }
                r[e] = l(n);
              }
          }
          function f(t, e, n) {
            switch (n || "touch") {
              case "center": {
                const n = e.left + e.width / 2,
                  r = e.top + e.height / 2;
                return (
                  n >= t.left && n <= t.right && r >= t.top && r <= t.bottom
                );
              }
              case "cover":
                return (
                  e.left >= t.left &&
                  e.top >= t.top &&
                  e.right <= t.right &&
                  e.bottom <= t.bottom
                );
              case "touch":
                return (
                  t.right >= e.left &&
                  t.left <= e.right &&
                  t.bottom >= e.top &&
                  t.top <= e.bottom
                );
            }
          }
          function d(t) {
            Array.isArray(t) || (t = [t]);
            const e = [];
            for (let n = 0, r = t.length; n < r; n++) {
              const r = t[n];
              "string" == typeof r
                ? e.push(...document.querySelectorAll(r))
                : r instanceof HTMLElement && e.push(r);
            }
            return e;
          }
          function h(t) {
            let e = t.path || (t.composedPath && t.composedPath());
            if (e) return e;
            let n = t.target.parentElement;
            for (e = [t.target, n]; (n = n.parentElement); ) e.push(n);
            return e.push(document, window), e;
          }
          function p(t, e) {
            const n = t.indexOf(e);
            ~n && t.splice(n, 1);
          }
          function m(t) {
            const e = (t.touches && t.touches[0]) || t;
            return { tap: e, x: e.clientX, y: e.clientY, target: e.target };
          }
          var g = n(0);
          const { abs: v, max: b, min: y, round: x, ceil: _ } = Math,
            k = document,
            w = (t) => t.preventDefault();
          function A(t = {}) {
            const e = {
              options: Object.assign(
                {
                  class: "selection-area",
                  mode: "touch",
                  startThreshold: 10,
                  singleClick: !0,
                  disableTouch: !1,
                  selectables: [],
                  scrollSpeedDivider: 10,
                  startareas: ["html"],
                  boundaries: ["html"],
                  selectionAreaContainer: "body",
                },
                t
              ),
              v: [],
              h: [],
              _: [],
              g: { added: [], removed: [] },
              j: { beforestart: [], start: [], move: [], stop: [] },
              O: k.createElement("div"),
              S: k.createElement("div"),
              T: !0,
              A: { x: null, y: null },
              L() {
                e.S.appendChild(e.O),
                  e.O.classList.add(e.options.class),
                  u(e.O, {
                    willChange: "top, left, bottom, right, width, height",
                    top: 0,
                    left: 0,
                    position: "fixed",
                  }),
                  u(e.S, {
                    overflow: "hidden",
                    position: "fixed",
                    transform: "translate3d(0, 0, 0)",
                    pointerEvents: "none",
                    zIndex: 1,
                  }),
                  e.enable();
              },
              M(t) {
                const n = "on" === t ? s : c;
                n(k, "mousedown", e.C),
                  e.options.disableTouch ||
                    n(k, "touchstart", e.C, { passive: !1 });
              },
              C(t) {
                const { x: n, y: r, target: o } = m(t),
                  i = o.getBoundingClientRect(),
                  a = d(e.options.startareas);
                (e.H = d(e.options.boundaries)),
                  (e.k = e.H.find((t) => f(t.getBoundingClientRect(), i)));
                const c = h(t);
                e.k &&
                  a.find((t) => c.includes(t)) &&
                  e.H.find((t) => c.includes(t)) &&
                  !1 !== e.F("beforestart", t) &&
                  ((e.q = n),
                  (e.D = r),
                  (e.N = 0),
                  (e.W = 0),
                  (e.I = !0),
                  (e._ = []),
                  e.clearSelection(!1),
                  s(k, "selectstart", w),
                  s(k, ["touchmove", "mousemove"], e.J, { passive: !1 }),
                  s(k, ["mouseup", "touchcancel", "touchend"], e.P));
              },
              B(t) {
                let { target: n } = m(t);
                for (e.resolveSelectables(); !e.h.includes(n); ) {
                  if (!n.parentElement) return;
                  n = n.parentElement;
                }
                e.F("start", t);
                const r = e.v;
                if (t.shiftKey && r.length) {
                  const o = r[r.length - 1],
                    [i, a] = 4 & o.compareDocumentPosition(n) ? [n, o] : [o, n],
                    s = [
                      ...e.h.filter(
                        (t) =>
                          4 & t.compareDocumentPosition(i) &&
                          2 & t.compareDocumentPosition(a)
                      ),
                      n,
                    ];
                  e.select(s), e.F("move", t), e.F("stop", t);
                } else
                  e.v.includes(n) ? e.removeFromSelection(n) : e.select(n),
                    e.F("move", t),
                    e.F("stop", t);
              },
              J(t) {
                const { x: n, y: r } = m(t),
                  { startThreshold: o } = e.options,
                  { q: i, D: a } = e,
                  l = typeof o;
                if (
                  ("number" === l && v(n + r - (i + a)) >= o) ||
                  ("object" === l && v(n - i) >= o.x) ||
                  v(r - a) >= o.y
                ) {
                  c(k, ["mousemove", "touchmove"], e.J, { passive: !1 }),
                    s(k, ["mousemove", "touchmove"], e.G, { passive: !1 }),
                    u(e.O, "display", "block"),
                    d(e.options.selectionAreaContainer)[0].appendChild(e.S),
                    e.resolveSelectables(),
                    (e.I = !1);
                  const n = (e.K = e.k.getBoundingClientRect());
                  x(e.k.scrollHeight) !== x(n.height) ||
                  x(e.k.scrollWidth) !== x(n.width)
                    ? ((e.T = !0),
                      s(window, "wheel", e.R, { passive: !1 }),
                      (e.h = e.h.filter((t) => e.k.contains(t))),
                      u(e.S, {
                        top: n.top,
                        left: n.left,
                        width: n.width,
                        height: n.height,
                      }),
                      u(e.O, { marginTop: -n.top, marginLeft: -n.left }))
                    : ((e.T = !1),
                      u(e.S, {
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }),
                      u(e.O, { marginTop: 0, marginLeft: 0 })),
                    e.G(t),
                    e.F("start", t);
                }
                t.preventDefault();
              },
              G(t) {
                const { x: n, y: r } = m(t),
                  o = e.k;
                let i = e.A;
                (e.N = n),
                  (e.W = r),
                  !e.T || (null === i.y && null === i.x)
                    ? (e.U(), e.V(), e.F("move", t))
                    : requestAnimationFrame(function n() {
                        if (null === (i = e.A).y && null === i.x) return;
                        const { scrollTop: r, scrollLeft: a } = o;
                        null !== i.y &&
                          ((o.scrollTop += _(
                            i.y / e.options.scrollSpeedDivider
                          )),
                          (e.D -= o.scrollTop - r)),
                          null !== i.x &&
                            ((o.scrollLeft += _(
                              i.x / e.options.scrollSpeedDivider
                            )),
                            (e.q -= o.scrollLeft - a)),
                          e.U(),
                          e.V(),
                          e.F("move", t),
                          requestAnimationFrame(n);
                      }),
                  t.preventDefault();
              },
              R(t) {
                const { scrollSpeedDivider: n } = e.options;
                (e.A.y += n * (-1 * t.wheelDeltaY)),
                  (e.A.x += n * (-1 * t.wheelDeltaX)),
                  e.G(t),
                  t.preventDefault();
              },
              U() {
                const {
                    scrollTop: t,
                    scrollHeight: n,
                    clientHeight: r,
                    scrollLeft: o,
                    scrollWidth: i,
                    clientWidth: a,
                  } = e.k,
                  s = e.K,
                  c = e.A;
                let l = e.N,
                  u = e.W;
                l < s.left
                  ? ((c.x = o ? -v(s.left - l) : null), (l = s.left))
                  : l > s.left + s.width
                  ? ((c.x = i - o - a ? v(s.left + s.width - l) : null),
                    (l = s.left + s.width))
                  : (c.x = null),
                  u < s.top
                    ? ((c.y = t ? -v(s.top - u) : null), (u = s.top))
                    : u > s.top + s.height
                    ? ((c.y = n - t - r ? v(s.top + s.height - u) : null),
                      (u = s.top + s.height))
                    : (c.y = null);
                const f = y(e.q, l),
                  d = y(e.D, u),
                  h = b(e.q, l),
                  p = b(e.D, u);
                Object.assign(e.O.style, {
                  top: "".concat(d, "px"),
                  left: "".concat(f, "px"),
                  width: "".concat(h - f, "px"),
                  height: "".concat(p - d, "px"),
                });
              },
              P(t, n) {
                c(k, ["mousemove", "touchmove"], e.J),
                  c(k, ["touchmove", "mousemove"], e.G),
                  c(k, ["mouseup", "touchcancel", "touchend"], e.P),
                  t && e.I && e.options.singleClick
                    ? e.B(t)
                    : e.I || n || (e.V(), e.F("stop", t)),
                  (e.A = { x: null, y: null }),
                  c(window, "wheel", e.R),
                  e.S.remove(),
                  c(k, "selectstart", w),
                  u(e.O, "display", "none");
              },
              V() {
                const { _: t, h: n, O: r, options: o } = e,
                  { mode: i } = o,
                  a = r.getBoundingClientRect(),
                  s = [],
                  c = [],
                  l = [];
                for (let e, r = 0, o = n.length; (e = n[r]), r < o; r++)
                  f(a, e.getBoundingClientRect(), i) &&
                    (t.includes(e) || c.push(e), s.push(e));
                for (let e, n = 0, r = t.length; (e = t[n]), n < r; n++)
                  s.includes(e) || l.push(e);
                (e._ = s), (e.g = { added: c, removed: l });
              },
              F(t, n) {
                let r = !0;
                for (const o of e.j[t])
                  r =
                    o.call(e, {
                      inst: e,
                      area: e.O,
                      selected: e._.concat(e.v),
                      changed: e.g,
                      oe: n,
                    }) && r;
                return r;
              },
              on: (t, n) => (e.j[t].push(n), e),
              off(t, n) {
                const r = e.j[t];
                if (r) {
                  const t = r.indexOf(n);
                  ~t && r.splice(t, 1);
                }
                return e;
              },
              resolveSelectables() {
                e.h = d(e.options.selectables);
              },
              keepSelection() {
                const { _: t, v: n } = e;
                for (let e, r = 0, o = t.length; (e = t[r]), r < o; r++)
                  n.includes(e) || n.push(e);
              },
              clearSelection(t = !0) {
                t && (e.v = []),
                  (e._ = []),
                  (e.g.added = []),
                  (e.g.removed = []);
              },
              removeFromSelection(t) {
                e.g.removed.push(t), p(e.v, t), p(e._, t);
              },
              getSelection: () => e.v,
              cancel(t = !1) {
                e.P(null, !t);
              },
              option(t, n) {
                const { options: r } = e;
                return void 0 === n ? r[t] : (r[t] = n);
              },
              disable() {
                e.M("off");
              },
              destroy() {
                e.disable(), e.S.remove();
              },
              enable() {
                e.M("on");
              },
              select(t) {
                const { _: n, v: r } = e,
                  o = d(t).filter((t) => !n.includes(t) && !r.includes(t));
                return e._.push(...o), e.g.added.push(...o), o;
              },
            };
            return e.L(), e;
          }
          (A.utils = {
            on: s,
            off: c,
            css: u,
            intersects: f,
            selectAll: d,
            eventPath: h,
            removeElement: p,
          }),
            (A.create = (t) => A(t)),
            (A.version = g.a),
            (e.default = A);
        },
      ]).default);
  },
  function (t, e, n) {
    "use strict";
    var r = n(188),
      o = n(194),
      i = n(200);
    r.use(new o.WorkerPipeline(i)), (t.exports = r);
  },
  ,
  function (t, e, n) {},
  function (t, e) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (n = window);
    }
    t.exports = n;
  },
  function (t, e, n) {
    var r = n(8),
      o = n(55),
      i = r["__core-js_shared__"] || o("__core-js_shared__", {});
    t.exports = i;
  },
  function (t, e, n) {
    var r = n(7);
    t.exports =
      !!Object.getOwnPropertySymbols &&
      !r(function () {
        return !String(Symbol());
      });
  },
  function (t, e, n) {
    var r = n(11);
    t.exports = r("document", "documentElement");
  },
  function (t, e, n) {
    t.exports = n(8);
  },
  function (t, e, n) {
    var r = n(8),
      o = n(77),
      i = r.WeakMap;
    t.exports = "function" == typeof i && /native code/.test(o.call(i));
  },
  function (t, e, n) {
    var r = n(14),
      o = n(78),
      i = n(62),
      a = n(18);
    t.exports = function (t, e) {
      for (var n = o(e), s = a.f, c = i.f, l = 0; l < n.length; l++) {
        var u = n[l];
        r(t, u) || s(t, u, c(e, u));
      }
    };
  },
  function (t, e, n) {
    var r = n(75),
      o = n(59).concat("length", "prototype");
    e.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return r(t, o);
      };
  },
  function (t, e, n) {
    var r = n(12);
    t.exports = function (t) {
      if (!r(t) && null !== t)
        throw TypeError("Can't set " + String(t) + " as a prototype");
      return t;
    };
  },
  function (t, e, n) {
    var r = n(8),
      o = n(157).trim,
      i = n(85),
      a = r.parseInt,
      s = /^[+-]?0[Xx]/,
      c = 8 !== a(i + "08") || 22 !== a(i + "0x16");
    t.exports = c
      ? function (t, e) {
          var n = o(String(t));
          return a(n, e >>> 0 || (s.test(n) ? 16 : 10));
        }
      : a;
  },
  function (t, e, n) {
    var r = n(21),
      o = "[" + n(85) + "]",
      i = RegExp("^" + o + o + "*"),
      a = RegExp(o + o + "*$"),
      s = function (t) {
        return function (e) {
          var n = String(r(e));
          return (
            1 & t && (n = n.replace(i, "")), 2 & t && (n = n.replace(a, "")), n
          );
        };
      };
    t.exports = { start: s(1), end: s(2), trim: s(3) };
  },
  function (t, e, n) {
    "use strict";
    var r = n(48).forEach,
      o = n(49);
    t.exports = o("forEach")
      ? function (t) {
          return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
        }
      : [].forEach;
  },
  function (t, e, n) {
    var r = n(12),
      o = n(67),
      i = n(6)("species");
    t.exports = function (t, e) {
      var n;
      return (
        o(t) &&
          ("function" != typeof (n = t.constructor) ||
          (n !== Array && !o(n.prototype))
            ? r(n) && null === (n = n[i]) && (n = void 0)
            : (n = void 0)),
        new (void 0 === n ? Array : n)(0 === e ? 0 : e)
      );
    };
  },
  function (t, e, n) {
    "use strict";
    var r = /[^\0-\u007E]/,
      o = /[.\u3002\uFF0E\uFF61]/g,
      i = "Overflow: input needs wider integers to process",
      a = Math.floor,
      s = String.fromCharCode,
      c = function (t) {
        return t + 22 + 75 * (t < 26);
      },
      l = function (t, e, n) {
        var r = 0;
        for (t = n ? a(t / 700) : t >> 1, t += a(t / e); t > 455; r += 36)
          t = a(t / 35);
        return a(r + (36 * t) / (t + 38));
      },
      u = function (t) {
        var e,
          n,
          r = [],
          o = (t = (function (t) {
            for (var e = [], n = 0, r = t.length; n < r; ) {
              var o = t.charCodeAt(n++);
              if (o >= 55296 && o <= 56319 && n < r) {
                var i = t.charCodeAt(n++);
                56320 == (64512 & i)
                  ? e.push(((1023 & o) << 10) + (1023 & i) + 65536)
                  : (e.push(o), n--);
              } else e.push(o);
            }
            return e;
          })(t)).length,
          u = 128,
          f = 0,
          d = 72;
        for (e = 0; e < t.length; e++) (n = t[e]) < 128 && r.push(s(n));
        var h = r.length,
          p = h;
        for (h && r.push("-"); p < o; ) {
          var m = 2147483647;
          for (e = 0; e < t.length; e++) (n = t[e]) >= u && n < m && (m = n);
          var g = p + 1;
          if (m - u > a((2147483647 - f) / g)) throw RangeError(i);
          for (f += (m - u) * g, u = m, e = 0; e < t.length; e++) {
            if ((n = t[e]) < u && ++f > 2147483647) throw RangeError(i);
            if (n == u) {
              for (var v = f, b = 36; ; b += 36) {
                var y = b <= d ? 1 : b >= d + 26 ? 26 : b - d;
                if (v < y) break;
                var x = v - y,
                  _ = 36 - y;
                r.push(s(c(y + (x % _)))), (v = a(x / _));
              }
              r.push(s(c(v))), (d = l(f, g, p == h)), (f = 0), ++p;
            }
          }
          ++f, ++u;
        }
        return r.join("");
      };
    t.exports = function (t) {
      var e,
        n,
        i = [],
        a = t.toLowerCase().replace(o, ".").split(".");
      for (e = 0; e < a.length; e++)
        (n = a[e]), i.push(r.test(n) ? "xn--" + u(n) : n);
      return i.join(".");
    };
  },
  function (t, e, n) {
    "use strict";
    n(24);
    var r = n(0),
      o = n(11),
      i = n(87),
      a = n(22),
      s = n(92),
      c = n(33),
      l = n(81),
      u = n(28),
      f = n(50),
      d = n(14),
      h = n(9),
      p = n(91),
      m = n(1),
      g = n(12),
      v = n(27),
      b = n(31),
      y = n(52),
      x = n(51),
      _ = n(6),
      k = o("fetch"),
      w = o("Headers"),
      A = _("iterator"),
      S = u.set,
      O = u.getterFor("URLSearchParams"),
      $ = u.getterFor("URLSearchParamsIterator"),
      L = /\+/g,
      T = Array(4),
      C = function (t) {
        return (
          T[t - 1] || (T[t - 1] = RegExp("((?:%[\\da-f]{2}){" + t + "})", "gi"))
        );
      },
      E = function (t) {
        try {
          return decodeURIComponent(t);
        } catch (e) {
          return t;
        }
      },
      M = function (t) {
        var e = t.replace(L, " "),
          n = 4;
        try {
          return decodeURIComponent(e);
        } catch (t) {
          for (; n; ) e = e.replace(C(n--), E);
          return e;
        }
      },
      I = /[!'()~]|%20/g,
      j = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
      },
      D = function (t) {
        return j[t];
      },
      P = function (t) {
        return encodeURIComponent(t).replace(I, D);
      },
      F = function (t, e) {
        if (e)
          for (var n, r, o = e.split("&"), i = 0; i < o.length; )
            (n = o[i++]).length &&
              ((r = n.split("=")),
              t.push({ key: M(r.shift()), value: M(r.join("=")) }));
      },
      R = function (t) {
        (this.entries.length = 0), F(this.entries, t);
      },
      B = function (t, e) {
        if (t < e) throw TypeError("Not enough arguments");
      },
      q = l(
        function (t, e) {
          S(this, {
            type: "URLSearchParamsIterator",
            iterator: y(O(t).entries),
            kind: e,
          });
        },
        "Iterator",
        function () {
          var t = $(this),
            e = t.kind,
            n = t.iterator.next(),
            r = n.value;
          return (
            n.done ||
              (n.value =
                "keys" === e
                  ? r.key
                  : "values" === e
                  ? r.value
                  : [r.key, r.value]),
            n
          );
        }
      ),
      N = function () {
        f(this, N, "URLSearchParams");
        var t,
          e,
          n,
          r,
          o,
          i,
          a,
          s,
          c,
          l = arguments.length > 0 ? arguments[0] : void 0,
          u = this,
          h = [];
        if (
          (S(u, {
            type: "URLSearchParams",
            entries: h,
            updateURL: function () {},
            updateSearchParams: R,
          }),
          void 0 !== l)
        )
          if (g(l))
            if ("function" == typeof (t = x(l)))
              for (n = (e = t.call(l)).next; !(r = n.call(e)).done; ) {
                if (
                  (a = (i = (o = y(m(r.value))).next).call(o)).done ||
                  (s = i.call(o)).done ||
                  !i.call(o).done
                )
                  throw TypeError("Expected sequence with length 2");
                h.push({ key: a.value + "", value: s.value + "" });
              }
            else for (c in l) d(l, c) && h.push({ key: c, value: l[c] + "" });
          else
            F(
              h,
              "string" == typeof l
                ? "?" === l.charAt(0)
                  ? l.slice(1)
                  : l
                : l + ""
            );
      },
      H = N.prototype;
    s(
      H,
      {
        append: function (t, e) {
          B(arguments.length, 2);
          var n = O(this);
          n.entries.push({ key: t + "", value: e + "" }), n.updateURL();
        },
        delete: function (t) {
          B(arguments.length, 1);
          for (
            var e = O(this), n = e.entries, r = t + "", o = 0;
            o < n.length;

          )
            n[o].key === r ? n.splice(o, 1) : o++;
          e.updateURL();
        },
        get: function (t) {
          B(arguments.length, 1);
          for (var e = O(this).entries, n = t + "", r = 0; r < e.length; r++)
            if (e[r].key === n) return e[r].value;
          return null;
        },
        getAll: function (t) {
          B(arguments.length, 1);
          for (
            var e = O(this).entries, n = t + "", r = [], o = 0;
            o < e.length;
            o++
          )
            e[o].key === n && r.push(e[o].value);
          return r;
        },
        has: function (t) {
          B(arguments.length, 1);
          for (var e = O(this).entries, n = t + "", r = 0; r < e.length; )
            if (e[r++].key === n) return !0;
          return !1;
        },
        set: function (t, e) {
          B(arguments.length, 1);
          for (
            var n,
              r = O(this),
              o = r.entries,
              i = !1,
              a = t + "",
              s = e + "",
              c = 0;
            c < o.length;
            c++
          )
            (n = o[c]).key === a &&
              (i ? o.splice(c--, 1) : ((i = !0), (n.value = s)));
          i || o.push({ key: a, value: s }), r.updateURL();
        },
        sort: function () {
          var t,
            e,
            n,
            r = O(this),
            o = r.entries,
            i = o.slice();
          for (o.length = 0, n = 0; n < i.length; n++) {
            for (t = i[n], e = 0; e < n; e++)
              if (o[e].key > t.key) {
                o.splice(e, 0, t);
                break;
              }
            e === n && o.push(t);
          }
          r.updateURL();
        },
        forEach: function (t) {
          for (
            var e,
              n = O(this).entries,
              r = h(t, arguments.length > 1 ? arguments[1] : void 0, 3),
              o = 0;
            o < n.length;

          )
            r((e = n[o++]).value, e.key, this);
        },
        keys: function () {
          return new q(this, "keys");
        },
        values: function () {
          return new q(this, "values");
        },
        entries: function () {
          return new q(this, "entries");
        },
      },
      { enumerable: !0 }
    ),
      a(H, A, H.entries),
      a(
        H,
        "toString",
        function () {
          for (var t, e = O(this).entries, n = [], r = 0; r < e.length; )
            (t = e[r++]), n.push(P(t.key) + "=" + P(t.value));
          return n.join("&");
        },
        { enumerable: !0 }
      ),
      c(N, "URLSearchParams"),
      r({ global: !0, forced: !i }, { URLSearchParams: N }),
      i ||
        "function" != typeof k ||
        "function" != typeof w ||
        r(
          { global: !0, enumerable: !0, forced: !0 },
          {
            fetch: function (t) {
              var e,
                n,
                r,
                o = [t];
              return (
                arguments.length > 1 &&
                  ((e = arguments[1]),
                  g(e) &&
                    ((n = e.body),
                    "URLSearchParams" === p(n) &&
                      ((r = e.headers ? new w(e.headers) : new w()).has(
                        "content-type"
                      ) ||
                        r.set(
                          "content-type",
                          "application/x-www-form-urlencoded;charset=UTF-8"
                        ),
                      (e = v(e, { body: b(0, String(n)), headers: b(0, r) })))),
                  o.push(e)),
                k.apply(this, o)
              );
            },
          }
        ),
      (t.exports = { URLSearchParams: N, getState: O });
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(48).find,
      i = n(41),
      a = !0;
    "find" in [] &&
      Array(1).find(function () {
        a = !1;
      }),
      r(
        { target: "Array", proto: !0, forced: a },
        {
          find: function (t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      ),
      i("find");
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(48).findIndex,
      i = n(41),
      a = !0;
    "findIndex" in [] &&
      Array(1).findIndex(function () {
        a = !1;
      }),
      r(
        { target: "Array", proto: !0, forced: a },
        {
          findIndex: function (t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      ),
      i("findIndex");
  },
  function (t, e, n) {
    var r,
      o,
      i = n(8),
      a = n(94),
      s = i.process,
      c = s && s.versions,
      l = c && c.v8;
    l
      ? (o = (r = l.split("."))[0] + r[1])
      : a &&
        (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
        (r = a.match(/Chrome\/(\d+)/)) &&
        (o = r[1]),
      (t.exports = o && +o);
  },
  function (t, e, n) {
    var r = n(166);
    t.exports = function (t) {
      if (r(t))
        throw TypeError("The method doesn't accept regular expressions");
      return t;
    };
  },
  function (t, e, n) {
    var r = n(12),
      o = n(30),
      i = n(6)("match");
    t.exports = function (t) {
      var e;
      return r(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t));
    };
  },
  function (t, e, n) {
    var r = n(6)("match");
    t.exports = function (t) {
      var e = /./;
      try {
        "/./"[t](e);
      } catch (n) {
        try {
          return (e[r] = !1), "/./"[t](e);
        } catch (t) {}
      }
      return !1;
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(40),
      i = n(20),
      a = n(49),
      s = [].join,
      c = o != Object,
      l = a("join", ",");
    r(
      { target: "Array", proto: !0, forced: c || l },
      {
        join: function (t) {
          return s.call(i(this), void 0 === t ? "," : t);
        },
      }
    );
  },
  function (t, e, n) {
    n(0)({ target: "Function", proto: !0 }, { bind: n(98) });
  },
  function (t, e, n) {
    var r = n(13),
      o = n(18).f,
      i = Function.prototype,
      a = i.toString,
      s = /^\s*function ([^ (]*)/;
    !r ||
      "name" in i ||
      o(i, "name", {
        configurable: !0,
        get: function () {
          try {
            return a.call(this).match(s)[1];
          } catch (t) {
            return "";
          }
        },
      });
  },
  function (t, e, n) {
    var r = n(7);
    t.exports = !r(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    });
  },
  function (t, e, n) {
    var r = n(12),
      o = n(65);
    t.exports = function (t, e, n) {
      var i, a;
      return (
        o &&
          "function" == typeof (i = e.constructor) &&
          i !== n &&
          r((a = i.prototype)) &&
          a !== n.prototype &&
          o(t, a),
        t
      );
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(11),
      o = n(18),
      i = n(6),
      a = n(13),
      s = i("species");
    t.exports = function (t) {
      var e = r(t),
        n = o.f;
      a &&
        e &&
        !e[s] &&
        n(e, s, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    };
  },
  function (t, e, n) {
    var r = n(0),
      o = n(13),
      i = n(78),
      a = n(20),
      s = n(62),
      c = n(69);
    r(
      { target: "Object", stat: !0, sham: !o },
      {
        getOwnPropertyDescriptors: function (t) {
          for (
            var e, n, r = a(t), o = s.f, l = i(r), u = {}, f = 0;
            l.length > f;

          )
            void 0 !== (n = o(r, (e = l[f++]))) && c(u, e, n);
          return u;
        },
      }
    );
  },
  function (t, e, n) {
    var r = n(0),
      o = n(7),
      i = n(23),
      a = n(64),
      s = n(83);
    r(
      {
        target: "Object",
        stat: !0,
        forced: o(function () {
          a(1);
        }),
        sham: !s,
      },
      {
        getPrototypeOf: function (t) {
          return a(i(t));
        },
      }
    );
  },
  function (t, e, n) {
    n(0)({ target: "Object", stat: !0 }, { setPrototypeOf: n(65) });
  },
  function (t, e, n) {
    var r = n(0),
      o = n(11),
      i = n(5),
      a = n(1),
      s = n(12),
      c = n(27),
      l = n(98),
      u = n(7),
      f = o("Reflect", "construct"),
      d = u(function () {
        function t() {}
        return !(f(function () {}, [], t) instanceof t);
      }),
      h = !u(function () {
        f(function () {});
      }),
      p = d || h;
    r(
      { target: "Reflect", stat: !0, forced: p, sham: p },
      {
        construct: function (t, e) {
          i(t), a(e);
          var n = arguments.length < 3 ? t : i(arguments[2]);
          if (h && !d) return f(t, e, n);
          if (t == n) {
            switch (e.length) {
              case 0:
                return new t();
              case 1:
                return new t(e[0]);
              case 2:
                return new t(e[0], e[1]);
              case 3:
                return new t(e[0], e[1], e[2]);
              case 4:
                return new t(e[0], e[1], e[2], e[3]);
            }
            var r = [null];
            return r.push.apply(r, e), new (l.apply(t, r))();
          }
          var o = n.prototype,
            u = c(s(o) ? o : Object.prototype),
            p = Function.apply.call(t, u, e);
          return s(p) ? p : u;
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(104),
      o = n(1),
      i = n(23),
      a = n(25),
      s = n(44),
      c = n(21),
      l = n(106),
      u = n(107),
      f = Math.max,
      d = Math.min,
      h = Math.floor,
      p = /\$([$&'`]|\d\d?|<[^>]*>)/g,
      m = /\$([$&'`]|\d\d?)/g;
    r("replace", 2, function (t, e, n) {
      return [
        function (n, r) {
          var o = c(this),
            i = null == n ? void 0 : n[t];
          return void 0 !== i ? i.call(n, o, r) : e.call(String(o), n, r);
        },
        function (t, i) {
          var c = n(e, t, this, i);
          if (c.done) return c.value;
          var h = o(t),
            p = String(this),
            m = "function" == typeof i;
          m || (i = String(i));
          var g = h.global;
          if (g) {
            var v = h.unicode;
            h.lastIndex = 0;
          }
          for (var b = []; ; ) {
            var y = u(h, p);
            if (null === y) break;
            if ((b.push(y), !g)) break;
            "" === String(y[0]) && (h.lastIndex = l(p, a(h.lastIndex), v));
          }
          for (var x, _ = "", k = 0, w = 0; w < b.length; w++) {
            y = b[w];
            for (
              var A = String(y[0]),
                S = f(d(s(y.index), p.length), 0),
                O = [],
                $ = 1;
              $ < y.length;
              $++
            )
              O.push(void 0 === (x = y[$]) ? x : String(x));
            var L = y.groups;
            if (m) {
              var T = [A].concat(O, S, p);
              void 0 !== L && T.push(L);
              var C = String(i.apply(void 0, T));
            } else C = r(A, p, S, O, L, i);
            S >= k && ((_ += p.slice(k, S) + C), (k = S + A.length));
          }
          return _ + p.slice(k);
        },
      ];
      function r(t, n, r, o, a, s) {
        var c = r + t.length,
          l = o.length,
          u = m;
        return (
          void 0 !== a && ((a = i(a)), (u = p)),
          e.call(s, u, function (e, i) {
            var s;
            switch (i.charAt(0)) {
              case "$":
                return "$";
              case "&":
                return t;
              case "`":
                return n.slice(0, r);
              case "'":
                return n.slice(c);
              case "<":
                s = a[i.slice(1, -1)];
                break;
              default:
                var u = +i;
                if (0 === u) return e;
                if (u > l) {
                  var f = h(u / 10);
                  return 0 === f
                    ? e
                    : f <= l
                    ? void 0 === o[f - 1]
                      ? i.charAt(1)
                      : o[f - 1] + i.charAt(1)
                    : e;
                }
                s = o[u - 1];
            }
            return void 0 === s ? "" : s;
          })
        );
      }
    });
  },
  function (t, e, n) {
    "use strict";
    var r = n(1);
    t.exports = function () {
      var t = r(this),
        e = "";
      return (
        t.global && (e += "g"),
        t.ignoreCase && (e += "i"),
        t.multiline && (e += "m"),
        t.dotAll && (e += "s"),
        t.unicode && (e += "u"),
        t.sticky && (e += "y"),
        e
      );
    };
  },
  function (t, e, n) {
    var r = n(21),
      o = /"/g;
    t.exports = function (t, e, n, i) {
      var a = String(r(t)),
        s = "<" + e;
      return (
        "" !== n &&
          (s += " " + n + '="' + String(i).replace(o, "&quot;") + '"'),
        s + ">" + a + "</" + e + ">"
      );
    };
  },
  function (t, e, n) {
    var r = n(7);
    t.exports = function (t) {
      return r(function () {
        var e = ""[t]('"');
        return e !== e.toLowerCase() || e.split('"').length > 3;
      });
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return t === e || (t != t && e != e);
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(1),
      o = n(5);
    t.exports = function () {
      for (
        var t = r(this), e = o(t.add), n = 0, i = arguments.length;
        n < i;
        n++
      )
        e.call(t, arguments[n]);
      return t;
    };
  },
  function (t, e, n) {
    n(0)({ target: "Array", stat: !0 }, { isArray: n(67) });
  },
  function (t, e, n) {
    var r = n(13),
      o = n(43),
      i = n(20),
      a = n(63).f,
      s = function (t) {
        return function (e) {
          for (var n, s = i(e), c = o(s), l = c.length, u = 0, f = []; l > u; )
            (n = c[u++]), (r && !a.call(s, n)) || f.push(t ? [n, s[n]] : s[n]);
          return f;
        };
      };
    t.exports = { entries: s(!0), values: s(!1) };
  },
  function (t, e, n) {
    var r = n(0),
      o = n(8),
      i = n(94),
      a = [].slice,
      s = function (t) {
        return function (e, n) {
          var r = arguments.length > 2,
            o = r ? a.call(arguments, 2) : void 0;
          return t(
            r
              ? function () {
                  ("function" == typeof e ? e : Function(e)).apply(this, o);
                }
              : e,
            n
          );
        };
      };
    r(
      { global: !0, bind: !0, forced: /MSIE .\./.test(i) },
      { setTimeout: s(o.setTimeout), setInterval: s(o.setInterval) }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(104),
      o = n(1),
      i = n(25),
      a = n(21),
      s = n(106),
      c = n(107);
    r("match", 1, function (t, e, n) {
      return [
        function (e) {
          var n = a(this),
            r = null == e ? void 0 : e[t];
          return void 0 !== r ? r.call(e, n) : new RegExp(e)[t](String(n));
        },
        function (t) {
          var r = n(e, t, this);
          if (r.done) return r.value;
          var a = o(t),
            l = String(this);
          if (!a.global) return c(a, l);
          var u = a.unicode;
          a.lastIndex = 0;
          for (var f, d = [], h = 0; null !== (f = c(a, l)); ) {
            var p = String(f[0]);
            (d[h] = p),
              "" === p && (a.lastIndex = s(l, i(a.lastIndex), u)),
              h++;
          }
          return 0 === h ? null : d;
        },
      ];
    });
  },
  function (t, e, n) {
    "use strict";
    var r = n(189),
      o = n(192);
    (r.default.DefaultOpts.ImageClass = o.default), (t.exports = r.default);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(141);
    (r.default.DefaultOpts.quantizer = "mmcq"),
      (r.default.DefaultOpts.generators = ["default"]),
      (r.default.DefaultOpts.filters = ["default"]),
      (e.default = r.default);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(54);
    e.buildProcessOptions = function (t, e) {
      var n = t.colorCount,
        o = t.quantizer,
        i = t.generators,
        a = t.filters,
        s = { colorCount: n },
        c = "string" == typeof o ? { name: o, options: {} } : o;
      return (
        (c.options = r.assignDeep({}, s, c.options)),
        r.assignDeep({}, { quantizer: c, generators: i, filters: a }, e)
      );
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(141),
      o = n(54),
      i = (function () {
        function t(t, e) {
          void 0 === e && (e = {}),
            (this._src = t),
            (this._opts = o.assignDeep({}, r.default.DefaultOpts, e));
        }
        return (
          (t.prototype.maxColorCount = function (t) {
            return (this._opts.colorCount = t), this;
          }),
          (t.prototype.maxDimension = function (t) {
            return (this._opts.maxDimension = t), this;
          }),
          (t.prototype.addFilter = function (t) {
            return (
              this._opts.filters
                ? this._opts.filters.push(t)
                : (this._opts.filters = [t]),
              this
            );
          }),
          (t.prototype.removeFilter = function (t) {
            if (this._opts.filters) {
              var e = this._opts.filters.indexOf(t);
              e > 0 && this._opts.filters.splice(e);
            }
            return this;
          }),
          (t.prototype.clearFilters = function () {
            return (this._opts.filters = []), this;
          }),
          (t.prototype.quality = function (t) {
            return (this._opts.quality = t), this;
          }),
          (t.prototype.useImageClass = function (t) {
            return (this._opts.ImageClass = t), this;
          }),
          (t.prototype.useGenerator = function (t, e) {
            return (
              this._opts.generators || (this._opts.generators = []),
              this._opts.generators.push(e ? { name: t, options: e } : t),
              this
            );
          }),
          (t.prototype.useQuantizer = function (t, e) {
            return (
              (this._opts.quantizer = e ? { name: t, options: e } : t), this
            );
          }),
          (t.prototype.build = function () {
            return new r.default(this._src, this._opts);
          }),
          (t.prototype.getPalette = function (t) {
            return this.build().getPalette(t);
          }),
          (t.prototype.getSwatches = function (t) {
            return this.build().getPalette(t);
          }),
          t
        );
      })();
    e.default = i;
  },
  function (t, e, n) {
    "use strict";
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (t, e) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          r(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        });
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        o(e, t),
        (e.prototype._initCanvas = function () {
          var t = this.image,
            e = (this._canvas = document.createElement("canvas")),
            n = e.getContext("2d");
          if (!n) throw new ReferenceError("Failed to create canvas context");
          (this._context = n),
            (e.className = "@vibrant/canvas"),
            (e.style.display = "none"),
            (this._width = e.width = t.width),
            (this._height = e.height = t.height),
            n.drawImage(t, 0, 0),
            document.body.appendChild(e);
        }),
        (e.prototype.load = function (t) {
          var e,
            n,
            r,
            o,
            i,
            a,
            s,
            c = this;
          if ("string" == typeof t)
            (e = document.createElement("img")),
              (n = t),
              ((s = new URL(n, location.href)).protocol === location.protocol &&
                s.host === location.host &&
                s.port === location.port) ||
                ((r = window.location.href),
                (o = n),
                (i = new URL(r)),
                (a = new URL(o)),
                i.protocol === a.protocol &&
                  i.hostname === a.hostname &&
                  i.port === a.port) ||
                (e.crossOrigin = "anonymous"),
              (e.src = n);
          else {
            if (!(t instanceof HTMLImageElement))
              return Promise.reject(
                new Error("Cannot load buffer as an image in browser")
              );
            (e = t), (n = t.src);
          }
          return (
            (this.image = e),
            new Promise(function (t, r) {
              var o = function () {
                c._initCanvas(), t(c);
              };
              e.complete
                ? o()
                : ((e.onload = o),
                  (e.onerror = function (t) {
                    return r(new Error("Fail to load image: " + n));
                  }));
            })
          );
        }),
        (e.prototype.clear = function () {
          this._context.clearRect(0, 0, this._width, this._height);
        }),
        (e.prototype.update = function (t) {
          this._context.putImageData(t, 0, 0);
        }),
        (e.prototype.getWidth = function () {
          return this._width;
        }),
        (e.prototype.getHeight = function () {
          return this._height;
        }),
        (e.prototype.resize = function (t, e, n) {
          var r = this._canvas,
            o = this._context,
            i = this.image;
          (this._width = r.width = t),
            (this._height = r.height = e),
            o.scale(n, n),
            o.drawImage(i, 0, 0);
        }),
        (e.prototype.getPixelCount = function () {
          return this._width * this._height;
        }),
        (e.prototype.getImageData = function () {
          return this._context.getImageData(0, 0, this._width, this._height);
        }),
        (e.prototype.remove = function () {
          this._canvas &&
            this._canvas.parentNode &&
            this._canvas.parentNode.removeChild(this._canvas);
        }),
        e
      );
    })(n(193).ImageBase);
    e.default = i;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = (function () {
      function t() {}
      return (
        (t.prototype.scaleDown = function (t) {
          var e = this.getWidth(),
            n = this.getHeight(),
            r = 1;
          if (t.maxDimension > 0) {
            var o = Math.max(e, n);
            o > t.maxDimension && (r = t.maxDimension / o);
          } else r = 1 / t.quality;
          r < 1 && this.resize(e * r, n * r, r);
        }),
        t
      );
    })();
    (e.ImageBase = r),
      (e.applyFilters = function (t, e) {
        if (e.length > 0)
          for (
            var n = t.data,
              r = n.length / 4,
              o = void 0,
              i = void 0,
              a = void 0,
              s = void 0,
              c = void 0,
              l = 0;
            l < r;
            l++
          ) {
            (i = n[(o = 4 * l) + 0]),
              (a = n[o + 1]),
              (s = n[o + 2]),
              (c = n[o + 3]);
            for (var u = 0; u < e.length; u++)
              if (!e[u](i, a, s, c)) {
                n[o + 3] = 0;
                break;
              }
          }
        return t;
      });
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(195),
      o = n(198),
      i = n(54),
      a = (function () {
        function t(t) {
          (this.PipelineWorker = t),
            (this._manager = new r.default()),
            this._manager.register("pipeline", t);
        }
        return (
          (t.prototype._rehydrate = function (t) {
            var e = t.colors,
              n = t.palettes;
            return (
              (t.colors = e.map(function (t) {
                return o.Swatch.clone(t);
              })),
              (t.palettes = i.mapValues(n, function (t) {
                return i.mapValues(t, function (t) {
                  return t ? o.Swatch.clone(t) : null;
                });
              })),
              t
            );
          }),
          (t.prototype.process = function (t, e) {
            var n = this;
            return this._manager
              .invokeWorker("pipeline", [t, e], [t.data.buffer])
              .then(function (t) {
                return n._rehydrate(t);
              });
          }),
          t
        );
      })();
    e.WorkerPipeline = a;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(196),
      o = (function () {
        function t() {
          this._pools = {};
        }
        return (
          (t.prototype.register = function (t, e) {
            this._pools[t] = new r.default(e);
          }),
          (t.prototype.hasWorker = function (t) {
            return !!this._pools[t];
          }),
          (t.prototype.getWorker = function (t) {
            return this._pools[t];
          }),
          (t.prototype.invokeWorker = function (t, e, n) {
            return this.hasWorker(t)
              ? this.getWorker(t).invoke(e, n)
              : Promise.reject("Worker '" + t + "' does not exist");
          }),
          t
        );
      })();
    e.default = o;
  },
  function (t, e, n) {
    "use strict";
    var r =
      (this && this.__rest) ||
      function (t, e) {
        var n = {};
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            e.indexOf(r) < 0 &&
            (n[r] = t[r]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(t); o < r.length; o++)
            e.indexOf(r[o]) < 0 && (n[r[o]] = t[r[o]]);
        }
        return n;
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = n(197),
      i = (function () {
        function t(t) {
          (this.WorkerClass = t),
            (this._taskId = 0),
            (this._workers = []),
            (this._queue = []),
            (this._executing = {});
        }
        return (
          (t.prototype._findIdleWorker = function () {
            var t;
            return (
              0 === this._workers.length || this._workers.length < 5
                ? (((t = new this.WorkerClass()).id = this._workers.length),
                  (t.idle = !0),
                  this._workers.push(t),
                  (t.onmessage = this._onMessage.bind(this, t.id)))
                : (t = this._workers.find(function (t) {
                    return t.idle;
                  })),
              t
            );
          }),
          (t.prototype._enqueue = function (t, e) {
            var n = o.defer(),
              r = {
                id: this._taskId++,
                payload: t,
                transferList: e,
                deferred: n,
              };
            return this._queue.push(r), this._tryDequeue(), n.promise;
          }),
          (t.prototype._tryDequeue = function () {
            if (!(this._queue.length <= 0)) {
              var t = this._findIdleWorker();
              if (t) {
                var e = this._queue.shift();
                this._executing[e.id] = e;
                var n = e.transferList,
                  o =
                    (e.deferred,
                    e.transferList,
                    r(e, ["deferred", "transferList"]));
                t.postMessage(o, n), (t.idle = !1);
              }
            }
          }),
          (t.prototype._onMessage = function (t, e) {
            var n = e.data;
            if (n) {
              var r = n.id,
                o = this._executing[r];
              switch ((delete this._executing[r], n.type)) {
                case "return":
                  o.deferred.resolve(n.payload);
                  break;
                case "error":
                  o.deferred.reject(new Error(n.payload));
              }
              (this._workers[t].idle = !0), this._tryDequeue();
            }
          }),
          (t.prototype.invoke = function (t, e) {
            return this._enqueue(t, e);
          }),
          t
        );
      })();
    e.default = i;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = function () {
      var t = this;
      this.promise = new Promise(function (e, n) {
        (t.resolve = e), (t.reject = n);
      });
    };
    (e.Defer = r),
      (e.defer = function () {
        return new r();
      });
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(199),
      o = (function () {
        function t(t, e) {
          (this._rgb = t), (this._population = e);
        }
        return (
          (t.applyFilters = function (t, e) {
            return e.length > 0
              ? t.filter(function (t) {
                  for (var n = t.r, r = t.g, o = t.b, i = 0; i < e.length; i++)
                    if (!e[i](n, r, o, 255)) return !1;
                  return !0;
                })
              : t;
          }),
          (t.clone = function (e) {
            return new t(e._rgb, e._population);
          }),
          Object.defineProperty(t.prototype, "r", {
            get: function () {
              return this._rgb[0];
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "g", {
            get: function () {
              return this._rgb[1];
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "b", {
            get: function () {
              return this._rgb[2];
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "rgb", {
            get: function () {
              return this._rgb;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "hsl", {
            get: function () {
              if (!this._hsl) {
                var t = this._rgb,
                  e = t[0],
                  n = t[1],
                  o = t[2];
                this._hsl = r.rgbToHsl(e, n, o);
              }
              return this._hsl;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "hex", {
            get: function () {
              if (!this._hex) {
                var t = this._rgb,
                  e = t[0],
                  n = t[1],
                  o = t[2];
                this._hex = r.rgbToHex(e, n, o);
              }
              return this._hex;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "population", {
            get: function () {
              return this._population;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.toJSON = function () {
            return { rgb: this.rgb, population: this.population };
          }),
          (t.prototype.getRgb = function () {
            return this._rgb;
          }),
          (t.prototype.getHsl = function () {
            return this.hsl;
          }),
          (t.prototype.getPopulation = function () {
            return this._population;
          }),
          (t.prototype.getHex = function () {
            return this.hex;
          }),
          (t.prototype.getYiq = function () {
            if (!this._yiq) {
              var t = this._rgb;
              this._yiq = (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3;
            }
            return this._yiq;
          }),
          Object.defineProperty(t.prototype, "titleTextColor", {
            get: function () {
              return (
                this._titleTextColor &&
                  (this._titleTextColor =
                    this.getYiq() < 200 ? "#fff" : "#000"),
                this._titleTextColor
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "bodyTextColor", {
            get: function () {
              return (
                this._bodyTextColor &&
                  (this._bodyTextColor = this.getYiq() < 150 ? "#fff" : "#000"),
                this._bodyTextColor
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.getTitleTextColor = function () {
            return this.titleTextColor;
          }),
          (t.prototype.getBodyTextColor = function () {
            return this.bodyTextColor;
          }),
          t
        );
      })();
    e.Swatch = o;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
      if (!e) throw new RangeError("'" + t + "' is not a valid hex color");
      return [e[1], e[2], e[3]].map(function (t) {
        return parseInt(t, 16);
      });
    }
    function o(t, e, n) {
      return (
        (e /= 255),
        (n /= 255),
        (t =
          (t /= 255) > 0.04045
            ? Math.pow((t + 0.005) / 1.055, 2.4)
            : t / 12.92),
        (e = e > 0.04045 ? Math.pow((e + 0.005) / 1.055, 2.4) : e / 12.92),
        (n = n > 0.04045 ? Math.pow((n + 0.005) / 1.055, 2.4) : n / 12.92),
        [
          0.4124 * (t *= 100) + 0.3576 * (e *= 100) + 0.1805 * (n *= 100),
          0.2126 * t + 0.7152 * e + 0.0722 * n,
          0.0193 * t + 0.1192 * e + 0.9505 * n,
        ]
      );
    }
    function i(t, e, n) {
      return (
        (e /= 100),
        (n /= 108.883),
        (t =
          (t /= 95.047) > 0.008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116),
        [
          116 * (e = e > 0.008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116) -
            16,
          500 * (t - e),
          200 *
            (e -
              (n = n > 0.008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116)),
        ]
      );
    }
    function a(t, e, n) {
      var r = o(t, e, n);
      return i(r[0], r[1], r[2]);
    }
    function s(t, e) {
      var n = t[0],
        r = t[1],
        o = t[2],
        i = e[0],
        a = e[1],
        s = e[2],
        c = n - i,
        l = r - a,
        u = o - s,
        f = Math.sqrt(r * r + o * o),
        d = i - n,
        h = Math.sqrt(a * a + s * s) - f,
        p = Math.sqrt(c * c + l * l + u * u),
        m =
          Math.sqrt(p) > Math.sqrt(Math.abs(d)) + Math.sqrt(Math.abs(h))
            ? Math.sqrt(p * p - d * d - h * h)
            : 0;
      return (
        (d /= 1),
        (h /= 1 * (1 + 0.045 * f)),
        (m /= 1 * (1 + 0.015 * f)),
        Math.sqrt(d * d + h * h + m * m)
      );
    }
    function c(t, e) {
      return s(a.apply(void 0, t), a.apply(void 0, e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.DELTAE94_DIFF_STATUS = {
        NA: 0,
        PERFECT: 1,
        CLOSE: 2,
        GOOD: 10,
        SIMILAR: 50,
      }),
      (e.hexToRgb = r),
      (e.rgbToHex = function (t, e, n) {
        return (
          "#" + ((1 << 24) + (t << 16) + (e << 8) + n).toString(16).slice(1, 7)
        );
      }),
      (e.rgbToHsl = function (t, e, n) {
        (t /= 255), (e /= 255), (n /= 255);
        var r = Math.max(t, e, n),
          o = Math.min(t, e, n),
          i = 0,
          a = 0,
          s = (r + o) / 2;
        if (r !== o) {
          var c = r - o;
          switch (((a = s > 0.5 ? c / (2 - r - o) : c / (r + o)), r)) {
            case t:
              i = (e - n) / c + (e < n ? 6 : 0);
              break;
            case e:
              i = (n - t) / c + 2;
              break;
            case n:
              i = (t - e) / c + 4;
          }
          i /= 6;
        }
        return [i, a, s];
      }),
      (e.hslToRgb = function (t, e, n) {
        var r, o, i;
        function a(t, e, n) {
          return (
            n < 0 && (n += 1),
            n > 1 && (n -= 1),
            n < 1 / 6
              ? t + 6 * (e - t) * n
              : n < 0.5
              ? e
              : n < 2 / 3
              ? t + (e - t) * (2 / 3 - n) * 6
              : t
          );
        }
        if (0 === e) r = o = i = n;
        else {
          var s = n < 0.5 ? n * (1 + e) : n + e - n * e,
            c = 2 * n - s;
          (r = a(c, s, t + 1 / 3)), (o = a(c, s, t)), (i = a(c, s, t - 1 / 3));
        }
        return [255 * r, 255 * o, 255 * i];
      }),
      (e.rgbToXyz = o),
      (e.xyzToCIELab = i),
      (e.rgbToCIELab = a),
      (e.deltaE94 = s),
      (e.rgbDiff = c),
      (e.hexDiff = function (t, e) {
        return c(r(t), r(e));
      }),
      (e.getColorDiffStatus = function (t) {
        return t < e.DELTAE94_DIFF_STATUS.NA
          ? "N/A"
          : t <= e.DELTAE94_DIFF_STATUS.PERFECT
          ? "Perfect"
          : t <= e.DELTAE94_DIFF_STATUS.CLOSE
          ? "Close"
          : t <= e.DELTAE94_DIFF_STATUS.GOOD
          ? "Good"
          : t < e.DELTAE94_DIFF_STATUS.SIMILAR
          ? "Similar"
          : "Wrong";
      });
  },
  function (t, e, n) {
    t.exports = function () {
      return n(201)(
        '!function(t){var r={};function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var i in t)e.d(n,i,function(r){return t[r]}.bind(null,i));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=2)}([function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e(1),i=function(){function t(t,r){this._rgb=t,this._population=r}return t.applyFilters=function(t,r){return r.length>0?t.filter((function(t){for(var e=t.r,n=t.g,i=t.b,o=0;o<r.length;o++)if(!r[o](e,n,i,255))return!1;return!0})):t},t.clone=function(r){return new t(r._rgb,r._population)},Object.defineProperty(t.prototype,"r",{get:function(){return this._rgb[0]},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"g",{get:function(){return this._rgb[1]},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"b",{get:function(){return this._rgb[2]},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"rgb",{get:function(){return this._rgb},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hsl",{get:function(){if(!this._hsl){var t=this._rgb,r=t[0],e=t[1],i=t[2];this._hsl=n.rgbToHsl(r,e,i)}return this._hsl},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hex",{get:function(){if(!this._hex){var t=this._rgb,r=t[0],e=t[1],i=t[2];this._hex=n.rgbToHex(r,e,i)}return this._hex},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"population",{get:function(){return this._population},enumerable:!0,configurable:!0}),t.prototype.toJSON=function(){return{rgb:this.rgb,population:this.population}},t.prototype.getRgb=function(){return this._rgb},t.prototype.getHsl=function(){return this.hsl},t.prototype.getPopulation=function(){return this._population},t.prototype.getHex=function(){return this.hex},t.prototype.getYiq=function(){if(!this._yiq){var t=this._rgb;this._yiq=(299*t[0]+587*t[1]+114*t[2])/1e3}return this._yiq},Object.defineProperty(t.prototype,"titleTextColor",{get:function(){return this._titleTextColor&&(this._titleTextColor=this.getYiq()<200?"#fff":"#000"),this._titleTextColor},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"bodyTextColor",{get:function(){return this._bodyTextColor&&(this._bodyTextColor=this.getYiq()<150?"#fff":"#000"),this._bodyTextColor},enumerable:!0,configurable:!0}),t.prototype.getTitleTextColor=function(){return this.titleTextColor},t.prototype.getBodyTextColor=function(){return this.bodyTextColor},t}();r.Swatch=i},function(t,r,e){"use strict";function n(t){var r=/^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(t);if(!r)throw new RangeError("\'"+t+"\' is not a valid hex color");return[r[1],r[2],r[3]].map((function(t){return parseInt(t,16)}))}function i(t,r,e){return r/=255,e/=255,t=(t/=255)>.04045?Math.pow((t+.005)/1.055,2.4):t/12.92,r=r>.04045?Math.pow((r+.005)/1.055,2.4):r/12.92,e=e>.04045?Math.pow((e+.005)/1.055,2.4):e/12.92,[.4124*(t*=100)+.3576*(r*=100)+.1805*(e*=100),.2126*t+.7152*r+.0722*e,.0193*t+.1192*r+.9505*e]}function o(t,r,e){return r/=100,e/=108.883,t=(t/=95.047)>.008856?Math.pow(t,1/3):7.787*t+16/116,[116*(r=r>.008856?Math.pow(r,1/3):7.787*r+16/116)-16,500*(t-r),200*(r-(e=e>.008856?Math.pow(e,1/3):7.787*e+16/116))]}function a(t,r,e){var n=i(t,r,e);return o(n[0],n[1],n[2])}function u(t,r){var e=t[0],n=t[1],i=t[2],o=r[0],a=r[1],u=r[2],s=e-o,l=n-a,f=i-u,c=Math.sqrt(n*n+i*i),h=o-e,p=Math.sqrt(a*a+u*u)-c,g=Math.sqrt(s*s+l*l+f*f),b=Math.sqrt(g)>Math.sqrt(Math.abs(h))+Math.sqrt(Math.abs(p))?Math.sqrt(g*g-h*h-p*p):0;return h/=1,p/=1*(1+.045*c),b/=1*(1+.015*c),Math.sqrt(h*h+p*p+b*b)}function s(t,r){return u(a.apply(void 0,t),a.apply(void 0,r))}Object.defineProperty(r,"__esModule",{value:!0}),r.DELTAE94_DIFF_STATUS={NA:0,PERFECT:1,CLOSE:2,GOOD:10,SIMILAR:50},r.hexToRgb=n,r.rgbToHex=function(t,r,e){return"#"+((1<<24)+(t<<16)+(r<<8)+e).toString(16).slice(1,7)},r.rgbToHsl=function(t,r,e){t/=255,r/=255,e/=255;var n=Math.max(t,r,e),i=Math.min(t,r,e),o=0,a=0,u=(n+i)/2;if(n!==i){var s=n-i;switch(a=u>.5?s/(2-n-i):s/(n+i),n){case t:o=(r-e)/s+(r<e?6:0);break;case r:o=(e-t)/s+2;break;case e:o=(t-r)/s+4}o/=6}return[o,a,u]},r.hslToRgb=function(t,r,e){var n,i,o;function a(t,r,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?t+6*(r-t)*e:e<.5?r:e<2/3?t+(r-t)*(2/3-e)*6:t}if(0===r)n=i=o=e;else{var u=e<.5?e*(1+r):e+r-e*r,s=2*e-u;n=a(s,u,t+1/3),i=a(s,u,t),o=a(s,u,t-1/3)}return[255*n,255*i,255*o]},r.rgbToXyz=i,r.xyzToCIELab=o,r.rgbToCIELab=a,r.deltaE94=u,r.rgbDiff=s,r.hexDiff=function(t,r){return s(n(t),n(r))},r.getColorDiffStatus=function(t){return t<r.DELTAE94_DIFF_STATUS.NA?"N/A":t<=r.DELTAE94_DIFF_STATUS.PERFECT?"Perfect":t<=r.DELTAE94_DIFF_STATUS.CLOSE?"Close":t<=r.DELTAE94_DIFF_STATUS.GOOD?"Good":t<r.DELTAE94_DIFF_STATUS.SIMILAR?"Similar":"Wrong"}},function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e(3),i=e(5);n.default(self,i.default)},function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e(4);r.default=function(t,r){n.default(t,(function(t,e){return r.process(t,e)}))}},function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(t,r){t.onmessage=function(e){var n=e.data,i=n.id,o=n.payload;Promise.resolve(r.apply(void 0,o)).then((function(r){t.postMessage({id:i,type:"return",payload:r})})).catch((function(r){t.postMessage({id:i,type:"error",payload:r.message})}))}}},function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e(6),i=e(10),o=(new(e(11).BasicPipeline)).filter.register("default",(function(t,r,e,n){return n>=125&&!(t>250&&r>250&&e>250)})).quantizer.register("mmcq",n.default).generator.register("default",i.default);r.default=o},function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e(0),i=e(7),o=e(9);function a(t,r){for(var e=t.size();t.size()<r;){var n=t.pop();if(!(n&&n.count()>0))break;var i=n.split(),o=i[0],a=i[1];if(t.push(o),a&&a.count()>0&&t.push(a),t.size()===e)break;e=t.size()}}r.default=function(t,r){if(0===t.length||r.colorCount<2||r.colorCount>256)throw new Error("Wrong MMCQ parameters");var e=i.default.build(t),u=(e.histogram.colorCount,new o.default((function(t,r){return t.count()-r.count()})));u.push(e),a(u,.75*r.colorCount);var s=new o.default((function(t,r){return t.count()*t.volume()-r.count()*r.volume()}));return s.contents=u.contents,a(s,r.colorCount-s.size()),function(t){var r=[];for(;t.size();){var e=t.pop(),i=e.avg();i[0],i[1],i[2];r.push(new n.Swatch(i,e.count()))}return r}(s)}},function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e(8),i=function(){function t(t,r,e,n,i,o,a){this.histogram=a,this._volume=-1,this._count=-1,this.dimension={r1:t,r2:r,g1:e,g2:n,b1:i,b2:o}}return t.build=function(r){var e=new n.default(r,{sigBits:5});return new t(e.rmin,e.rmax,e.gmin,e.gmax,e.bmin,e.bmax,e)},t.prototype.invalidate=function(){this._volume=this._count=-1,this._avg=null},t.prototype.volume=function(){if(this._volume<0){var t=this.dimension,r=t.r1,e=t.r2,n=t.g1,i=t.g2,o=t.b1,a=t.b2;this._volume=(e-r+1)*(i-n+1)*(a-o+1)}return this._volume},t.prototype.count=function(){if(this._count<0){for(var t=this.histogram,r=t.hist,e=t.getColorIndex,n=this.dimension,i=n.r1,o=n.r2,a=n.g1,u=n.g2,s=n.b1,l=n.b2,f=0,c=i;c<=o;c++)for(var h=a;h<=u;h++)for(var p=s;p<=l;p++){f+=r[e(c,h,p)]}this._count=f}return this._count},t.prototype.clone=function(){var r=this.histogram,e=this.dimension;return new t(e.r1,e.r2,e.g1,e.g2,e.b1,e.b2,r)},t.prototype.avg=function(){if(!this._avg){var t=this.histogram,r=t.hist,e=t.getColorIndex,n=this.dimension,i=n.r1,o=n.r2,a=n.g1,u=n.g2,s=n.b1,l=n.b2,f=0,c=void 0,h=void 0,p=void 0;c=h=p=0;for(var g=i;g<=o;g++)for(var b=a;b<=u;b++)for(var m=s;m<=l;m++){var d=r[e(g,b,m)];f+=d,c+=d*(g+.5)*8,h+=d*(b+.5)*8,p+=d*(m+.5)*8}this._avg=f?[~~(c/f),~~(h/f),~~(p/f)]:[~~(8*(i+o+1)/2),~~(8*(a+u+1)/2),~~(8*(s+l+1)/2)]}return this._avg},t.prototype.contains=function(t){var r=t[0],e=t[1],n=t[2],i=this.dimension,o=i.r1,a=i.r2,u=i.g1,s=i.g2,l=i.b1,f=i.b2;return e>>=3,n>>=3,(r>>=3)>=o&&r<=a&&e>=u&&e<=s&&n>=l&&n<=f},t.prototype.split=function(){var t=this.histogram,r=t.hist,e=t.getColorIndex,n=this.dimension,i=n.r1,o=n.r2,a=n.g1,u=n.g2,s=n.b1,l=n.b2,f=this.count();if(!f)return[];if(1===f)return[this.clone()];var c,h,p=o-i+1,g=u-a+1,b=l-s+1,m=Math.max(p,g,b),d=null;c=h=0;var v=null;if(m===p){v="r",d=new Uint32Array(o+1);for(var y=i;y<=o;y++){c=0;for(var _=a;_<=u;_++)for(var M=s;M<=l;M++){c+=r[e(y,_,M)]}h+=c,d[y]=h}}else if(m===g){v="g",d=new Uint32Array(u+1);for(_=a;_<=u;_++){c=0;for(y=i;y<=o;y++)for(M=s;M<=l;M++){c+=r[e(y,_,M)]}h+=c,d[_]=h}}else{v="b",d=new Uint32Array(l+1);for(M=s;M<=l;M++){c=0;for(y=i;y<=o;y++)for(_=a;_<=u;_++){c+=r[e(y,_,M)]}h+=c,d[M]=h}}for(var w=-1,L=new Uint32Array(d.length),x=0;x<d.length;x++){var S=d[x];w<0&&S>h/2&&(w=x),L[x]=h-S}var T=this;return function(t){var r=t+"1",e=t+"2",n=T.dimension[r],i=T.dimension[e],o=T.clone(),a=T.clone(),u=w-n,s=i-w;for(u<=s?(i=Math.min(i-1,~~(w+s/2)),i=Math.max(0,i)):(i=Math.max(n,~~(w-1-u/2)),i=Math.min(T.dimension[e],i));!d[i];)i++;for(var l=L[i];!l&&d[i-1];)l=L[--i];return o.dimension[e]=i,a.dimension[r]=i+1,[o,a]}(v)},t}();r.default=i},function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function t(t,r){this.pixels=t,this.opts=r;var e=r.sigBits,n=function(t,r,n){return(t<<2*e)+(r<<e)+n};this.getColorIndex=n;var i,o,a,u,s,l,f,c,h,p=8-e,g=new Uint32Array(1<<3*e);i=a=s=0,o=u=l=Number.MAX_VALUE;for(var b=t.length/4,m=0;m<b;){var d=4*m;if(m++,f=t[d+0],c=t[d+1],h=t[d+2],0!==t[d+3])g[n(f>>=p,c>>=p,h>>=p)]+=1,f>i&&(i=f),f<o&&(o=f),c>a&&(a=c),c<u&&(u=c),h>s&&(s=h),h<l&&(l=h)}this._colorCount=g.reduce((function(t,r){return r>0?t+1:t}),0),this.hist=g,this.rmax=i,this.rmin=o,this.gmax=a,this.gmin=u,this.bmax=s,this.bmin=l}return Object.defineProperty(t.prototype,"colorCount",{get:function(){return this._colorCount},enumerable:!0,configurable:!0}),t}();r.default=n},function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function t(t){this._comparator=t,this.contents=[],this._sorted=!1}return t.prototype._sort=function(){this._sorted||(this.contents.sort(this._comparator),this._sorted=!0)},t.prototype.push=function(t){this.contents.push(t),this._sorted=!1},t.prototype.peek=function(t){return this._sort(),t="number"==typeof t?t:this.contents.length-1,this.contents[t]},t.prototype.pop=function(){return this._sort(),this.contents.pop()},t.prototype.size=function(){return this.contents.length},t.prototype.map=function(t){return this._sort(),this.contents.map(t)},t}();r.default=n},function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e(0),i=e(1),o={targetDarkLuma:.26,maxDarkLuma:.45,minLightLuma:.55,targetLightLuma:.74,minNormalLuma:.3,targetNormalLuma:.5,maxNormalLuma:.7,targetMutesSaturation:.3,maxMutesSaturation:.4,targetVibrantSaturation:1,minVibrantSaturation:.35,weightSaturation:3,weightLuma:6.5,weightPopulation:.5};function a(t,r,e,n,i,o,a,u,s,l){var f=null,c=0;return r.forEach((function(r){var h=r.getHsl(),p=h[1],g=h[2];if(p>=u&&p<=s&&g>=i&&g<=o&&!function(t,r){return t.Vibrant===r||t.DarkVibrant===r||t.LightVibrant===r||t.Muted===r||t.DarkMuted===r||t.LightMuted===r}(t,r)){var b=function(t,r,e,n,i,o,a){function u(t,r){return 1-Math.abs(t-r)}return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var e=0,n=0,i=0;i<t.length;i+=2){var o=t[i],a=t[i+1];e+=o*a,n+=a}return e/n}(u(t,r),a.weightSaturation,u(e,n),a.weightLuma,i/o,a.weightPopulation)}(p,a,g,n,r.getPopulation(),e,l);(null===f||b>c)&&(f=r,c=b)}})),f}r.default=function(t,r){r=Object.assign({},o,r);var e=function(t){var r=0;return t.forEach((function(t){r=Math.max(r,t.getPopulation())})),r}(t),u=function(t,r,e){var n={Vibrant:null,DarkVibrant:null,LightVibrant:null,Muted:null,DarkMuted:null,LightMuted:null};return n.Vibrant=a(n,t,r,e.targetNormalLuma,e.minNormalLuma,e.maxNormalLuma,e.targetVibrantSaturation,e.minVibrantSaturation,1,e),n.LightVibrant=a(n,t,r,e.targetLightLuma,e.minLightLuma,1,e.targetVibrantSaturation,e.minVibrantSaturation,1,e),n.DarkVibrant=a(n,t,r,e.targetDarkLuma,0,e.maxDarkLuma,e.targetVibrantSaturation,e.minVibrantSaturation,1,e),n.Muted=a(n,t,r,e.targetNormalLuma,e.minNormalLuma,e.maxNormalLuma,e.targetMutesSaturation,0,e.maxMutesSaturation,e),n.LightMuted=a(n,t,r,e.targetLightLuma,e.minLightLuma,1,e.targetMutesSaturation,0,e.maxMutesSaturation,e),n.DarkMuted=a(n,t,r,e.targetDarkLuma,0,e.maxDarkLuma,e.targetMutesSaturation,0,e.maxMutesSaturation,e),n}(t,e,r);return function(t,r,e){if(!t.Vibrant&&!t.DarkVibrant&&!t.LightVibrant){if(!t.DarkVibrant&&t.DarkMuted){var o=t.DarkMuted.getHsl(),a=o[0],u=o[1],s=o[2];s=e.targetDarkLuma,t.DarkVibrant=new n.Swatch(i.hslToRgb(a,u,s),0)}if(!t.LightVibrant&&t.LightMuted){var l=t.LightMuted.getHsl();a=l[0],u=l[1],s=l[2];s=e.targetDarkLuma,t.DarkVibrant=new n.Swatch(i.hslToRgb(a,u,s),0)}}if(!t.Vibrant&&t.DarkVibrant){var f=t.DarkVibrant.getHsl();a=f[0],u=f[1],s=f[2];s=e.targetNormalLuma,t.Vibrant=new n.Swatch(i.hslToRgb(a,u,s),0)}else if(!t.Vibrant&&t.LightVibrant){var c=t.LightVibrant.getHsl();a=c[0],u=c[1],s=c[2];s=e.targetNormalLuma,t.Vibrant=new n.Swatch(i.hslToRgb(a,u,s),0)}if(!t.DarkVibrant&&t.Vibrant){var h=t.Vibrant.getHsl();a=h[0],u=h[1],s=h[2];s=e.targetDarkLuma,t.DarkVibrant=new n.Swatch(i.hslToRgb(a,u,s),0)}if(!t.LightVibrant&&t.Vibrant){var p=t.Vibrant.getHsl();a=p[0],u=p[1],s=p[2];s=e.targetLightLuma,t.LightVibrant=new n.Swatch(i.hslToRgb(a,u,s),0)}if(!t.Muted&&t.Vibrant){var g=t.Vibrant.getHsl();a=g[0],u=g[1],s=g[2];s=e.targetMutesSaturation,t.Muted=new n.Swatch(i.hslToRgb(a,u,s),0)}if(!t.DarkMuted&&t.DarkVibrant){var b=t.DarkVibrant.getHsl();a=b[0],u=b[1],s=b[2];s=e.targetMutesSaturation,t.DarkMuted=new n.Swatch(i.hslToRgb(a,u,s),0)}if(!t.LightMuted&&t.LightVibrant){var m=t.LightVibrant.getHsl();a=m[0],u=m[1],s=m[2];s=e.targetMutesSaturation,t.LightMuted=new n.Swatch(i.hslToRgb(a,u,s),0)}}(u,0,r),u}},function(t,r,e){"use strict";var n=this&&this.__awaiter||function(t,r,e,n){return new(e||(e=Promise))((function(i,o){function a(t){try{s(n.next(t))}catch(t){o(t)}}function u(t){try{s(n.throw(t))}catch(t){o(t)}}function s(t){t.done?i(t.value):new e((function(r){r(t.value)})).then(a,u)}s((n=n.apply(t,r||[])).next())}))},i=this&&this.__generator||function(t,r){var e,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=r.call(t,a)}catch(t){o=[6,t],n=0}finally{e=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(r,"__esModule",{value:!0});var o=e(12),a=function(){function t(t){this.pipeline=t,this._map={}}return t.prototype.names=function(){return Object.keys(this._map)},t.prototype.has=function(t){return!!this._map[t]},t.prototype.get=function(t){return this._map[t]},t.prototype.register=function(t,r){return this._map[t]=r,this.pipeline},t}();r.Stage=a;var u=function(){function t(){this.filter=new a(this),this.quantizer=new a(this),this.generator=new a(this)}return t.prototype._buildProcessTasks=function(t){var r=this,e=t.filters,n=t.quantizer,i=t.generators;return 1===i.length&&"*"===i[0]&&(i=this.generator.names()),{filters:e.map((function(t){return o(r.filter,t)})),quantizer:o(this.quantizer,n),generators:i.map((function(t){return o(r.generator,t)}))};function o(t,r){var e,n;return"string"==typeof r?e=r:(e=r.name,n=r.options),{name:e,fn:t.get(e),options:n}}},t.prototype.process=function(t,r){return n(this,void 0,void 0,(function(){var e,n,o,a,u,s,l;return i(this,(function(i){switch(i.label){case 0:return e=this._buildProcessTasks(r),n=e.filters,o=e.quantizer,a=e.generators,[4,this._filterColors(n,t)];case 1:return u=i.sent(),[4,this._generateColors(o,u)];case 2:return s=i.sent(),[4,this._generatePalettes(a,s)];case 3:return l=i.sent(),[2,{colors:s,palettes:l}]}}))}))},t.prototype._filterColors=function(t,r){return Promise.resolve(o.applyFilters(r,t.map((function(t){return t.fn}))))},t.prototype._generateColors=function(t,r){return Promise.resolve(t.fn(r.data,t.options))},t.prototype._generatePalettes=function(t,r){return n(this,void 0,void 0,(function(){var e;return i(this,(function(n){switch(n.label){case 0:return[4,Promise.all(t.map((function(t){var e=t.fn,n=t.options;return Promise.resolve(e(r,n))})))];case 1:return e=n.sent(),[2,Promise.resolve(e.reduce((function(r,e,n){return r[t[n].name]=e,r}),{}))]}}))}))},t}();r.BasicPipeline=u},function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function t(){}return t.prototype.scaleDown=function(t){var r=this.getWidth(),e=this.getHeight(),n=1;if(t.maxDimension>0){var i=Math.max(r,e);i>t.maxDimension&&(n=t.maxDimension/i)}else n=1/t.quality;n<1&&this.resize(r*n,e*n,n)},t}();r.ImageBase=n,r.applyFilters=function(t,r){if(r.length>0)for(var e=t.data,n=e.length/4,i=void 0,o=void 0,a=void 0,u=void 0,s=void 0,l=0;l<n;l++){o=e[(i=4*l)+0],a=e[i+1],u=e[i+2],s=e[i+3];for(var f=0;f<r.length;f++)if(!r[f](o,a,u,s)){e[i+3]=0;break}}return t}}]);',
        null
      );
    };
  },
  function (t, e, n) {
    "use strict";
    var r = window.URL || window.webkitURL;
    t.exports = function (t, e) {
      try {
        try {
          var n;
          try {
            (n = new (window.BlobBuilder ||
              window.WebKitBlobBuilder ||
              window.MozBlobBuilder ||
              window.MSBlobBuilder)()).append(t),
              (n = n.getBlob());
          } catch (e) {
            n = new Blob([t]);
          }
          return new Worker(r.createObjectURL(n));
        } catch (e) {
          return new Worker(
            "data:application/javascript," + encodeURIComponent(t)
          );
        }
      } catch (t) {
        if (!e) throw Error("Inline worker is not supported");
        return new Worker(e);
      }
    };
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    n(146);
    var r = n(4),
      o = n.n(r);
    n(24), n(34), n(46), n(47), n(29), n(15), n(35), n(68);
    var i = function t(e, n) {
      void 0 === n && (n = [0]);
      var r = {},
        o = {},
        i = [];
      return (
        e.forEach(function (e) {
          var a = parseInt(e.id, 10);
          if (void 0 !== e.children) {
            var s = t(e.children, [].concat(n, [a]));
            r[a] = {
              id: a,
              title: e.title,
              bookmarksCount: s.bookmarks.length,
              parentId: n[n.length - 1],
              ancestors: n,
            };
            var c = { id: a, title: e.title };
            Object.keys(s.foldersTree).length > 0 &&
              (c.children = s.foldersTree),
              (r = Object.assign(r, s.folders)),
              (o[a] = c),
              (i = i.concat(s.bookmarks));
          } else {
            var l = new URL(e.url).hostname.split("."),
              u = l.pop(),
              f = l.pop(),
              d = l.pop() || null;
            void 0 === f && ((f = u), (u = null)),
              i.push({
                id: a,
                title: e.title,
                url: e.url,
                prefix: d,
                domain: f,
                suffix: u,
                timestamp: e.dateAdded,
                parentId: n[n.length - 1],
                ancestors: n,
              });
          }
        }),
        { folders: r, foldersTree: o, bookmarks: i }
      );
    };
    n(162),
      n(163),
      n(36),
      n(53),
      n(37),
      n(10),
      n(38),
      n(95),
      n(70),
      n(168),
      n(71),
      n(97),
      n(169),
      n(170),
      n(99),
      n(174),
      n(175),
      n(176),
      n(177),
      n(103),
      n(178),
      n(108),
      n(109),
      n(111),
      n(112),
      n(113),
      n(114),
      n(115),
      n(116),
      n(117),
      n(118),
      n(119),
      n(120),
      n(121),
      n(122),
      n(123),
      n(124),
      n(125),
      n(126),
      n(127),
      n(128),
      n(129),
      n(130),
      n(131),
      n(132),
      n(133),
      n(134),
      n(135),
      n(136),
      n(137),
      n(138);
    function a(t, e) {
      (t.prototype = Object.create(e.prototype)),
        (t.prototype.constructor = t),
        (t.__proto__ = e);
    }
    function s(t) {
      var e = "function" == typeof Map ? new Map() : void 0;
      return (s = function (t) {
        if (
          null === t ||
          ((n = t), -1 === Function.toString.call(n).indexOf("[native code]"))
        )
          return t;
        var n;
        if ("function" != typeof t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (void 0 !== e) {
          if (e.has(t)) return e.get(t);
          e.set(t, r);
        }
        function r() {
          return c(t, arguments, u(this).constructor);
        }
        return (
          (r.prototype = Object.create(t.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          l(r, t)
        );
      })(t);
    }
    function c(t, e, n) {
      return (c = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      })()
        ? Reflect.construct
        : function (t, e, n) {
            var r = [null];
            r.push.apply(r, e);
            var o = new (Function.bind.apply(t, r))();
            return n && l(o, n.prototype), o;
          }).apply(null, arguments);
    }
    function l(t, e) {
      return (l =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function u(t) {
      return (u = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function f() {}
    function d(t) {
      return t();
    }
    function h() {
      return Object.create(null);
    }
    function p(t) {
      t.forEach(d);
    }
    function m(t) {
      return "function" == typeof t;
    }
    function g(t, e) {
      return t != t
        ? e == e
        : t !== e || (t && "object" == typeof t) || "function" == typeof t;
    }
    function v(t, e) {
      var n = t.subscribe(e);
      return n.unsubscribe
        ? function () {
            return n.unsubscribe();
          }
        : n;
    }
    function b(t, e, n) {
      t.$$.on_destroy.push(v(e, n));
    }
    new Set();
    function y(t, e) {
      t.appendChild(e);
    }
    function x(t, e, n) {
      t.insertBefore(e, n || null);
    }
    function _(t) {
      t.parentNode.removeChild(t);
    }
    function k(t, e) {
      for (var n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
    }
    function w(t) {
      return document.createElement(t);
    }
    function A(t) {
      return document.createTextNode(t);
    }
    function S() {
      return A(" ");
    }
    function O() {
      return A("");
    }
    function $(t, e, n, r) {
      return (
        t.addEventListener(e, n, r),
        function () {
          return t.removeEventListener(e, n, r);
        }
      );
    }
    function L(t) {
      return function (e) {
        return e.preventDefault(), t.call(this, e);
      };
    }
    function T(t, e, n) {
      null == n
        ? t.removeAttribute(e)
        : t.getAttribute(e) !== n && t.setAttribute(e, n);
    }
    function C(t, e) {
      (e = "" + e), t.data !== e && (t.data = e);
    }
    function E(t, e) {
      (null != e || t.value) && (t.value = e);
    }
    function M(t, e, n, r) {
      t.style.setProperty(e, n, r ? "important" : "");
    }
    function I(t, e) {
      for (var n = 0; n < t.options.length; n += 1) {
        var r = t.options[n];
        if (r.__value === e) return void (r.selected = !0);
      }
    }
    function j(t) {
      var e = t.querySelector(":checked") || t.options[0];
      return e && e.__value;
    }
    function D(t, e, n) {
      t.classList[n ? "add" : "remove"](e);
    }
    function P(t, e) {
      var n = document.createEvent("CustomEvent");
      return n.initCustomEvent(t, !1, !1, e), n;
    }
    var F;
    function R(t) {
      F = t;
    }
    function B() {
      if (!F)
        throw new Error("Function called outside component initialization");
      return F;
    }
    function q(t) {
      B().$$.on_mount.push(t);
    }
    function N(t) {
      B().$$.on_destroy.push(t);
    }
    function H() {
      var t = B();
      return function (e, n) {
        var r = t.$$.callbacks[e];
        if (r) {
          var o = P(e, n);
          r.slice().forEach(function (e) {
            e.call(t, o);
          });
        }
      };
    }
    function U(t, e) {
      var n = t.$$.callbacks[e.type];
      n &&
        n.slice().forEach(function (t) {
          return t(e);
        });
    }
    var V = [],
      z = [],
      W = [],
      G = [],
      K = Promise.resolve(),
      Y = !1;
    function J() {
      Y || ((Y = !0), K.then(Q));
    }
    function X(t) {
      W.push(t);
    }
    function Q() {
      var t = new Set();
      do {
        for (; V.length; ) {
          var e = V.shift();
          R(e), Z(e.$$);
        }
        for (; z.length; ) z.pop()();
        for (var n = 0; n < W.length; n += 1) {
          var r = W[n];
          t.has(r) || (r(), t.add(r));
        }
        W.length = 0;
      } while (V.length);
      for (; G.length; ) G.pop()();
      Y = !1;
    }
    function Z(t) {
      null !== t.fragment &&
        (t.update(t.dirty),
        p(t.before_update),
        t.fragment && t.fragment.p(t.dirty, t.ctx),
        (t.dirty = null),
        t.after_update.forEach(X));
    }
    var tt,
      et = new Set();
    function nt() {
      tt = { r: 0, c: [], p: tt };
    }
    function rt() {
      tt.r || p(tt.c), (tt = tt.p);
    }
    function ot(t, e) {
      t && t.i && (et.delete(t), t.i(e));
    }
    function it(t, e, n, r) {
      if (t && t.o) {
        if (et.has(t)) return;
        et.add(t),
          tt.c.push(function () {
            et.delete(t), r && (n && t.d(1), r());
          }),
          t.o(e);
      }
    }
    var at = "undefined" != typeof window ? window : global;
    new Set([
      "allowfullscreen",
      "allowpaymentrequest",
      "async",
      "autofocus",
      "autoplay",
      "checked",
      "controls",
      "default",
      "defer",
      "disabled",
      "formnovalidate",
      "hidden",
      "ismap",
      "loop",
      "multiple",
      "muted",
      "nomodule",
      "novalidate",
      "open",
      "playsinline",
      "readonly",
      "required",
      "reversed",
      "selected",
    ]);
    function st(t) {
      t && t.c();
    }
    function ct(t, e, n) {
      var r = t.$$,
        o = r.fragment,
        i = r.on_mount,
        a = r.on_destroy,
        s = r.after_update;
      o && o.m(e, n),
        X(function () {
          var e = i.map(d).filter(m);
          a ? a.push.apply(a, e) : p(e), (t.$$.on_mount = []);
        }),
        s.forEach(X);
    }
    function lt(t, e) {
      var n = t.$$;
      null !== n.fragment &&
        (p(n.on_destroy),
        n.fragment && n.fragment.d(e),
        (n.on_destroy = n.fragment = null),
        (n.ctx = {}));
    }
    function ut(t, e, n, r, o, i) {
      var a = F;
      R(t);
      var s,
        c = e.props || {},
        l = (t.$$ = {
          fragment: null,
          ctx: null,
          props: i,
          update: f,
          not_equal: o,
          bound: h(),
          on_mount: [],
          on_destroy: [],
          before_update: [],
          after_update: [],
          context: new Map(a ? a.$$.context : []),
          callbacks: h(),
          dirty: null,
        }),
        u = !1;
      (l.ctx = n
        ? n(t, c, function (e, n, r) {
            return (
              void 0 === r && (r = n),
              l.ctx &&
                o(l.ctx[e], (l.ctx[e] = r)) &&
                (l.bound[e] && l.bound[e](r),
                u &&
                  (function (t, e) {
                    t.$$.dirty || (V.push(t), J(), (t.$$.dirty = h())),
                      (t.$$.dirty[e] = !0);
                  })(t, e)),
              n
            );
          })
        : c),
        l.update(),
        (u = !0),
        p(l.before_update),
        (l.fragment = !!r && r(l.ctx)),
        e.target &&
          (e.hydrate
            ? l.fragment &&
              l.fragment.l(((s = e.target), Array.from(s.childNodes)))
            : l.fragment && l.fragment.c(),
          e.intro && ot(t.$$.fragment),
          ct(t, e.target, e.anchor),
          Q()),
        R(a);
    }
    "function" == typeof HTMLElement && s(HTMLElement);
    var ft = (function () {
      function t() {}
      var e = t.prototype;
      return (
        (e.$destroy = function () {
          lt(this, 1), (this.$destroy = f);
        }),
        (e.$on = function (t, e) {
          var n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
          return (
            n.push(e),
            function () {
              var t = n.indexOf(e);
              -1 !== t && n.splice(t, 1);
            }
          );
        }),
        (e.$set = function () {}),
        t
      );
    })();
    n(184);
    var dt = [];
    function ht(t, e) {
      var n;
      void 0 === e && (e = f);
      var r = [];
      function o(e) {
        if (g(t, e) && ((t = e), n)) {
          for (var o = !dt.length, i = 0; i < r.length; i += 1) {
            var a = r[i];
            a[1](), dt.push(a, t);
          }
          if (o) {
            for (var s = 0; s < dt.length; s += 2) dt[s][0](dt[s + 1]);
            dt.length = 0;
          }
        }
      }
      return {
        set: o,
        update: function (e) {
          o(e(t));
        },
        subscribe: function (i, a) {
          void 0 === a && (a = f);
          var s = [i, a];
          return (
            r.push(s),
            1 === r.length && (n = e(o) || f),
            i(t),
            function () {
              var t = r.indexOf(s);
              -1 !== t && r.splice(t, 1), 0 === r.length && (n(), (n = null));
            }
          );
        },
      };
    }
    var pt = ht({}),
      mt = ht({}),
      gt = ht([]),
      vt = ht(0),
      bt = ht(""),
      yt = (function () {
        function t() {}
        return (
          (t.getParent = function (t, e) {
            for (e.shift(); e.length > 1; ) t = t[e.shift()].children;
            return t[e.shift()];
          }),
          (t.addItem = function (e, n, r) {
            void 0 === (e = t.getParent(e, n)).children && (e.children = {}),
              (e.children = Object.assign({}, e.children, {}, r));
          }),
          (t.updateItem = function (e, n, r) {
            void 0 !== (e = t.getParent(e, n)).children[r.id] &&
              void 0 !== e.children[r.id].children &&
              (r[r.id].children = e.children[r.id].children),
              (e.children = Object.assign({}, e.children, {}, r));
          }),
          (t.deleteItem = function (e, n, r) {
            delete (e = t.getParent(e, n)).children[r],
              0 === Object.keys(e.children).length && delete e.children;
          }),
          (t.getItem = function (e, n, r) {
            return (e = t.getParent(e, n)).children[r];
          }),
          t
        );
      })(),
      xt = n(142),
      _t = n.n(xt);
    var kt = at.Object;
    function wt(t, e, n) {
      var r = kt.create(t);
      return (r.folderId = e[n]), r;
    }
    function At(t) {
      var e,
        n,
        r,
        o,
        i,
        a,
        s,
        c,
        l,
        u,
        f,
        d,
        h,
        m,
        g,
        v = t.item
          ? "Edit bookmark"
          : "Add bookmark to " + t.$folders[t.parent].title;
      return {
        c: function () {
          (e = w("div")),
            (n = w("h3")),
            (r = A(v)),
            (o = S()),
            (i = w("div")),
            (a = w("p")),
            ((s = w("label")).textContent = "Name"),
            (c = S()),
            (l = w("input")),
            (u = S()),
            (f = w("p")),
            ((d = w("label")).textContent = "URL"),
            (h = S()),
            (m = w("input")),
            T(e, "class", "dialog-header"),
            T(s, "for", "name"),
            T(l, "type", "text"),
            T(l, "id", "name"),
            T(a, "class", "dialog-input"),
            T(d, "for", "url"),
            T(m, "type", "text"),
            T(m, "id", "url"),
            T(f, "class", "dialog-input"),
            T(i, "class", "dialog-content"),
            (g = [
              $(l, "input", t.input0_input_handler),
              $(m, "input", t.input1_input_handler),
            ]);
        },
        m: function (p, g) {
          x(p, e, g),
            y(e, n),
            y(n, r),
            x(p, o, g),
            x(p, i, g),
            y(i, a),
            y(a, s),
            y(a, c),
            y(a, l),
            E(l, t.bookmark.title),
            y(i, u),
            y(i, f),
            y(f, d),
            y(f, h),
            y(f, m),
            E(m, t.bookmark.url);
        },
        p: function (t, e) {
          (t.item || t.$folders || t.parent) &&
            v !==
              (v = e.item
                ? "Edit bookmark"
                : "Add bookmark to " + e.$folders[e.parent].title) &&
            C(r, v),
            t.bookmark &&
              l.value !== e.bookmark.title &&
              E(l, e.bookmark.title),
            t.bookmark && m.value !== e.bookmark.url && E(m, e.bookmark.url);
        },
        d: function (t) {
          t && _(e), t && _(o), t && _(i), p(g);
        },
      };
    }
    function St(t) {
      var e,
        n,
        r,
        o,
        i,
        a,
        s,
        c,
        l,
        u,
        f = t.item
          ? "Rename folder"
          : "Add folder to " + t.$folders[t.parent].title;
      return {
        c: function () {
          (e = w("div")),
            (n = w("h3")),
            (r = A(f)),
            (o = S()),
            (i = w("div")),
            (a = w("p")),
            ((s = w("label")).textContent = "Name"),
            (c = S()),
            (l = w("input")),
            T(e, "class", "dialog-header"),
            T(s, "for", "name"),
            T(l, "type", "text"),
            T(l, "id", "name"),
            T(a, "class", "dialog-input"),
            T(i, "class", "dialog-content"),
            (u = $(l, "input", t.input_input_handler));
        },
        m: function (u, f) {
          x(u, e, f),
            y(e, n),
            y(n, r),
            x(u, o, f),
            x(u, i, f),
            y(i, a),
            y(a, s),
            y(a, c),
            y(a, l),
            E(l, t.bookmark.title);
        },
        p: function (t, e) {
          (t.item || t.$folders || t.parent) &&
            f !==
              (f = e.item
                ? "Rename folder"
                : "Add folder to " + e.$folders[e.parent].title) &&
            C(r, f),
            t.bookmark &&
              l.value !== e.bookmark.title &&
              E(l, e.bookmark.title);
        },
        d: function (t) {
          t && _(e), t && _(o), t && _(i), u();
        },
      };
    }
    function Ot(t) {
      for (
        var e, n, r, o, i, a = Object.keys(t.$folders), s = [], c = 0;
        c < a.length;
        c += 1
      )
        s[c] = $t(wt(t, a, c));
      return {
        c: function () {
          (e = w("div")),
            ((n = w("label")).textContent = "Parent folder"),
            (r = S()),
            (o = w("select"));
          for (var a = 0; a < s.length; a += 1) s[a].c();
          T(n, "for", "parent-folder-select"),
            T(o, "id", "parent-folder-select"),
            void 0 === t.parent &&
              X(function () {
                return t.select_change_handler.call(o);
              }),
            T(e, "class", "dialog-select"),
            (i = $(o, "change", t.select_change_handler));
        },
        m: function (i, a) {
          x(i, e, a), y(e, n), y(e, r), y(e, o);
          for (var c = 0; c < s.length; c += 1) s[c].m(o, null);
          I(o, t.parent);
        },
        p: function (t, e) {
          if (t.$folders || t.Object) {
            var n;
            for (a = Object.keys(e.$folders), n = 0; n < a.length; n += 1) {
              var r = wt(e, a, n);
              s[n] ? s[n].p(t, r) : ((s[n] = $t(r)), s[n].c(), s[n].m(o, null));
            }
            for (; n < s.length; n += 1) s[n].d(1);
            s.length = a.length;
          }
          t.parent && I(o, e.parent);
        },
        d: function (t) {
          t && _(e), k(s, t), i();
        },
      };
    }
    function $t(t) {
      var e,
        n,
        r,
        o = t.$folders[t.folderId].title + "";
      return {
        c: function () {
          (e = w("option")),
            (n = A(o)),
            (e.__value = r = t.$folders[t.folderId].id),
            (e.value = e.__value);
        },
        m: function (t, r) {
          x(t, e, r), y(e, n);
        },
        p: function (t, i) {
          t.$folders &&
            o !== (o = i.$folders[i.folderId].title + "") &&
            C(n, o),
            t.$folders &&
              r !== (r = i.$folders[i.folderId].id) &&
              (e.__value = r),
            (e.value = e.__value);
        },
        d: function (t) {
          t && _(e);
        },
      };
    }
    function Lt(t) {
      var e, n;
      return {
        c: function () {
          (e = w("p")), (n = A(t.error)), T(e, "class", "dialog-error");
        },
        m: function (t, r) {
          x(t, e, r), y(e, n);
        },
        p: function (t, e) {
          t.error && C(n, e.error);
        },
        d: function (t) {
          t && _(e);
        },
      };
    }
    function Tt(t) {
      var e, n, r, o, i, a, s, c, l;
      function u(t, e) {
        return "folder" === e.type ? St : At;
      }
      var d = u(0, t),
        h = d(t),
        m = !t.item && Ot(t),
        g = t.error && Lt(t);
      return {
        c: function () {
          (e = w("div")),
            h.c(),
            (n = S()),
            m && m.c(),
            (r = S()),
            g && g.c(),
            (o = S()),
            (i = w("div")),
            ((a = w("button")).textContent = "Save"),
            (s = S()),
            ((c = w("button")).textContent = "Cancel"),
            T(a, "class", "button button-primary"),
            T(c, "class", "button button-default"),
            T(i, "class", "dialog-footer"),
            T(e, "class", "dialog"),
            (l = [$(a, "click", t.save), $(c, "click", t.click_handler)]);
        },
        m: function (t, l) {
          x(t, e, l),
            h.m(e, null),
            y(e, n),
            m && m.m(e, null),
            y(e, r),
            g && g.m(e, null),
            y(e, o),
            y(e, i),
            y(i, a),
            y(i, s),
            y(i, c);
        },
        p: function (t, i) {
          d === (d = u(0, i)) && h
            ? h.p(t, i)
            : (h.d(1), (h = d(i)) && (h.c(), h.m(e, n))),
            i.item
              ? m && (m.d(1), (m = null))
              : m
              ? m.p(t, i)
              : ((m = Ot(i)).c(), m.m(e, r)),
            i.error
              ? g
                ? g.p(t, i)
                : ((g = Lt(i)).c(), g.m(e, o))
              : g && (g.d(1), (g = null));
        },
        i: f,
        o: f,
        d: function (t) {
          t && _(e), h.d(), m && m.d(), g && g.d(), p(l);
        },
      };
    }
    function Ct(t, e, n) {
      var r, i;
      b(t, vt, function (t) {
        return n("$selectedFolderId", (r = t));
      }),
        b(t, pt, function (t) {
          return n("$folders", (i = t));
        });
      var a,
        s,
        c = e.type,
        l = e.item,
        u = H();
      q(function () {
        return document.body.classList.add("dialog-open");
      }),
        N(function () {
          return document.body.classList.remove("dialog-open");
        });
      var f = 0 === r ? 1 : r,
        d = null;
      null === l
        ? n(
            "bookmark",
            (s = "folder" === c ? { title: "" } : { title: "", url: "" })
          )
        : ((a = l.id), delete l.id, n("bookmark", (s = l))),
        q(function () {
          l || new _t.a({ select: "#parent-folder-select" });
        });
      return (
        (t.$set = function (t) {
          "type" in t && n("type", (c = t.type)),
            "item" in t && n("item", (l = t.item));
        }),
        {
          type: c,
          item: l,
          dispatch: u,
          bookmark: s,
          parent: f,
          error: d,
          save: function () {
            s.title
              ? "bookmark" !== c || s.url
                ? l
                  ? o.a.bookmarks
                      .update(a.toString(), s)
                      .then(function (t) {
                        u(
                          "save",
                          Object.assign({ type: c, action: "update" }, t)
                        );
                      })
                      .catch(function (t) {
                        n("error", (d = t.message));
                      })
                  : o.a.bookmarks
                      .create(Object.assign({ parentId: f.toString() }, s))
                      .then(function (t) {
                        u(
                          "save",
                          Object.assign({ type: c, action: "create" }, t)
                        );
                      })
                      .catch(function (t) {
                        n("error", (d = t.message));
                      })
                : n("error", (d = "URL is required."))
              : n("error", (d = "Title is required."));
          },
          $folders: i,
          input_input_handler: function () {
            (s.title = this.value), n("bookmark", s);
          },
          input0_input_handler: function () {
            (s.title = this.value), n("bookmark", s);
          },
          input1_input_handler: function () {
            (s.url = this.value), n("bookmark", s);
          },
          select_change_handler: function () {
            (f = j(this)), n("parent", f), n("Object", Object);
          },
          click_handler: function () {
            return u("cancel");
          },
        }
      );
    }
    var Et = (function (t) {
      var e, n;
      function r(e) {
        var n;
        return (
          ut(
            (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })((n = t.call(this) || this)),
            e,
            Ct,
            Tt,
            g,
            { type: 0, item: 0 }
          ),
          n
        );
      }
      return (
        (n = t),
        ((e = r).prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        (e.__proto__ = n),
        r
      );
    })(ft);
    n(39), n(139);
    var Mt = at.Object;
    function It(t, e, n) {
      var r = Mt.create(t);
      return (r.folder = e[n]), r;
    }
    function jt(t) {
      var e,
        n,
        r,
        o,
        i = [Pt, Dt],
        a = [];
      function s(t, e) {
        return void 0 !== e.folder.children ? 0 : 1;
      }
      return (
        (e = s(0, t)),
        (n = a[e] = i[e](t)),
        {
          c: function () {
            n.c(), (r = O());
          },
          m: function (t, n) {
            a[e].m(t, n), x(t, r, n), (o = !0);
          },
          p: function (t, o) {
            var c = e;
            (e = s(0, o)) === c
              ? a[e].p(t, o)
              : (nt(),
                it(a[c], 1, 1, function () {
                  a[c] = null;
                }),
                rt(),
                (n = a[e]) || (n = a[e] = i[e](o)).c(),
                ot(n, 1),
                n.m(r.parentNode, r));
          },
          i: function (t) {
            o || (ot(n), (o = !0));
          },
          o: function (t) {
            it(n), (o = !1);
          },
          d: function (t) {
            a[e].d(t), t && _(r);
          },
        }
      );
    }
    function Dt(t) {
      var e,
        n,
        r,
        o,
        i,
        a,
        s,
        c,
        l = t.folder.title + "";
      function u() {
        for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (e = t).click_handler_1.apply(e, [t].concat(r));
      }
      function d() {
        for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (e = t).contextmenu_handler_1.apply(e, [t].concat(r));
      }
      return {
        c: function () {
          (e = w("li")),
            (n = w("p")),
            (r = w("span")),
            (o = S()),
            (i = w("span")),
            (a = A(l)),
            (s = S()),
            T(r, "class", "arrow-icon-placeholder"),
            T(i, "class", "tree-item-title"),
            M(n, "padding-left", 2 * t.level + "rem"),
            T(e, "class", "tree-item"),
            D(e, "selected", t.$selectedFolderId === t.folder.id),
            (c = [$(n, "click", u), $(n, "contextmenu", L(d))]);
        },
        m: function (t, c) {
          x(t, e, c), y(e, n), y(n, r), y(n, o), y(n, i), y(i, a), y(e, s);
        },
        p: function (r, o) {
          (t = o),
            r.tree && l !== (l = t.folder.title + "") && C(a, l),
            r.level && M(n, "padding-left", 2 * t.level + "rem"),
            (r.$selectedFolderId || r.Object || r.tree) &&
              D(e, "selected", t.$selectedFolderId === t.folder.id);
        },
        i: f,
        o: f,
        d: function (t) {
          t && _(e), p(c);
        },
      };
    }
    function Pt(t) {
      var e,
        n,
        r,
        o,
        i,
        a,
        s,
        c,
        l,
        u,
        f = t.folder.title + "";
      function d() {
        for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (e = t).click_handler.apply(e, [t].concat(r));
      }
      function h() {
        for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (e = t).contextmenu_handler.apply(e, [t].concat(r));
      }
      var m = new Nt({
        props: {
          tree: t.folder.children,
          level: t.level + 1,
          hidden: t.hidden,
        },
      });
      return (
        m.$on("show-contextmenu", t.show_contextmenu_handler),
        {
          c: function () {
            (e = w("li")),
              (n = w("p")),
              (r = w("span")),
              (o = S()),
              (i = w("span")),
              (a = A(f)),
              (s = S()),
              st(m.$$.fragment),
              (c = S()),
              T(r, "class", "arrow-icon"),
              T(i, "class", "tree-item-title"),
              M(n, "padding-left", 2 * t.level + "rem"),
              T(e, "class", "tree-item has-children"),
              D(e, "selected", t.$selectedFolderId === t.folder.id),
              (u = [
                $(r, "click", Bt),
                $(n, "click", d),
                $(n, "contextmenu", L(h)),
              ]);
          },
          m: function (t, u) {
            x(t, e, u),
              y(e, n),
              y(n, r),
              y(n, o),
              y(n, i),
              y(i, a),
              y(e, s),
              ct(m, e, null),
              y(e, c),
              (l = !0);
          },
          p: function (r, o) {
            (t = o),
              (l && !r.tree) || f === (f = t.folder.title + "") || C(a, f),
              (l && !r.level) || M(n, "padding-left", 2 * t.level + "rem");
            var i = {};
            r.tree && (i.tree = t.folder.children),
              r.level && (i.level = t.level + 1),
              r.hidden && (i.hidden = t.hidden),
              m.$set(i),
              (r.$selectedFolderId || r.Object || r.tree) &&
                D(e, "selected", t.$selectedFolderId === t.folder.id);
          },
          i: function (t) {
            l || (ot(m.$$.fragment, t), (l = !0));
          },
          o: function (t) {
            it(m.$$.fragment, t), (l = !1);
          },
          d: function (t) {
            t && _(e), lt(m), p(u);
          },
        }
      );
    }
    function Ft(t) {
      var e,
        n,
        r = !t.hidden.includes(t.folder.id),
        o = r && jt(t);
      return {
        c: function () {
          o && o.c(), (e = O());
        },
        m: function (t, r) {
          o && o.m(t, r), x(t, e, r), (n = !0);
        },
        p: function (t, n) {
          (t.hidden || t.tree) && (r = !n.hidden.includes(n.folder.id)),
            r
              ? o
                ? (o.p(t, n), ot(o, 1))
                : ((o = jt(n)).c(), ot(o, 1), o.m(e.parentNode, e))
              : o &&
                (nt(),
                it(o, 1, 1, function () {
                  o = null;
                }),
                rt());
        },
        i: function (t) {
          n || (ot(o), (n = !0));
        },
        o: function (t) {
          it(o), (n = !1);
        },
        d: function (t) {
          o && o.d(t), t && _(e);
        },
      };
    }
    function Rt(t) {
      for (
        var e, n, r, o = Object.values(t.tree), i = [], a = 0;
        a < o.length;
        a += 1
      )
        i[a] = Ft(It(t, o, a));
      var s = function (t) {
        return it(i[t], 1, 1, function () {
          i[t] = null;
        });
      };
      return {
        c: function () {
          e = w("ul");
          for (var r = 0; r < i.length; r += 1) i[r].c();
          T(e, "class", (n = 0 !== t.level ? "subtree" : "tree"));
        },
        m: function (t, n) {
          x(t, e, n);
          for (var o = 0; o < i.length; o += 1) i[o].m(e, null);
          r = !0;
        },
        p: function (t, a) {
          if (
            t.hidden ||
            t.Object ||
            t.tree ||
            t.$selectedFolderId ||
            t.level ||
            t.selectedFolderId ||
            t.showContextMenu ||
            t.toggleTree
          ) {
            var c;
            for (o = Object.values(a.tree), c = 0; c < o.length; c += 1) {
              var l = It(a, o, c);
              i[c]
                ? (i[c].p(t, l), ot(i[c], 1))
                : ((i[c] = Ft(l)), i[c].c(), ot(i[c], 1), i[c].m(e, null));
            }
            for (nt(), c = o.length; c < i.length; c += 1) s(c);
            rt();
          }
          (!r || (t.level && n !== (n = 0 !== a.level ? "subtree" : "tree"))) &&
            T(e, "class", n);
        },
        i: function (t) {
          if (!r) {
            for (var e = 0; e < o.length; e += 1) ot(i[e]);
            r = !0;
          }
        },
        o: function (t) {
          i = i.filter(Boolean);
          for (var e = 0; e < i.length; e += 1) it(i[e]);
          r = !1;
        },
        d: function (t) {
          t && _(e), k(i, t);
        },
      };
    }
    function Bt(t) {
      t.stopPropagation(),
        t.target.parentNode.classList.toggle("open"),
        t.target.parentNode.nextElementSibling.classList.toggle("open");
    }
    function qt(t, e, n) {
      var r;
      b(t, vt, function (t) {
        return n("$selectedFolderId", (r = t));
      });
      var o = e.tree,
        i = e.level,
        a = e.hidden,
        s = H(),
        c = { left: 0, top: 0 };
      function l(t, e) {
        s("show-contextmenu", {
          folderId: e,
          posX: t.clientX - c.left,
          posY: t.clientY - 32,
        });
      }
      q(function () {
        var t = document.querySelector(".tree");
        c = t.getBoundingClientRect();
      });
      return (
        (t.$set = function (t) {
          "tree" in t && n("tree", (o = t.tree)),
            "level" in t && n("level", (i = t.level)),
            "hidden" in t && n("hidden", (a = t.hidden));
        }),
        {
          tree: o,
          level: i,
          hidden: a,
          showContextMenu: l,
          $selectedFolderId: r,
          click_handler: function (t) {
            var e = t.folder;
            return vt.update(function () {
              return e.id;
            });
          },
          contextmenu_handler: function (t, e) {
            l(e, t.folder.id);
          },
          show_contextmenu_handler: function (e) {
            U(t, e);
          },
          click_handler_1: function (t) {
            var e = t.folder;
            return vt.update(function () {
              return e.id;
            });
          },
          contextmenu_handler_1: function (t, e) {
            l(e, t.folder.id);
          },
        }
      );
    }
    var Nt = (function (t) {
        var e, n;
        function r(e) {
          var n;
          return (
            ut(
              (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })((n = t.call(this) || this)),
              e,
              qt,
              Rt,
              g,
              { tree: 0, level: 0, hidden: 0 }
            ),
            n
          );
        }
        return (
          (n = t),
          ((e = r).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = n),
          r
        );
      })(ft),
      Ht = Nt;
    function Ut(t) {
      var e,
        n,
        r,
        o,
        i,
        a,
        s,
        c,
        l,
        u,
        f,
        d,
        h,
        m,
        g,
        v = t.items.length + "",
        b = new Ht({
          props: { tree: t.$foldersTree, level: 0, hidden: t.hiddenFolders },
        });
      return {
        c: function () {
          (e = w("div")),
            (n = w("div")),
            (r = w("h3")),
            (o = A("Move ")),
            (i = A(v)),
            (a = A(" item(s)")),
            (s = S()),
            (c = w("div")),
            st(b.$$.fragment),
            (l = S()),
            (u = w("div")),
            ((f = w("button")).textContent = "Move here"),
            (d = S()),
            ((h = w("button")).textContent = "Cancel"),
            T(n, "class", "dialog-header"),
            T(c, "class", "dialog-tree"),
            T(f, "class", "button button-primary"),
            T(h, "class", "button button-default"),
            T(u, "class", "dialog-footer"),
            T(e, "class", "dialog move-dialog"),
            (g = [$(f, "click", t.move), $(h, "click", t.click_handler)]);
        },
        m: function (p, g) {
          x(p, e, g),
            y(e, n),
            y(n, r),
            y(r, o),
            y(r, i),
            y(r, a),
            y(e, s),
            y(e, c),
            ct(b, c, null),
            t.div1_binding(c),
            y(e, l),
            y(e, u),
            y(u, f),
            y(u, d),
            y(u, h),
            (m = !0);
        },
        p: function (t, e) {
          (m && !t.items) || v === (v = e.items.length + "") || C(i, v);
          var n = {};
          t.$foldersTree && (n.tree = e.$foldersTree), b.$set(n);
        },
        i: function (t) {
          m || (ot(b.$$.fragment, t), (m = !0));
        },
        o: function (t) {
          it(b.$$.fragment, t), (m = !1);
        },
        d: function (n) {
          n && _(e), lt(b), t.div1_binding(null), p(g);
        },
      };
    }
    function Vt(t, e, n) {
      var r, i;
      b(t, vt, function (t) {
        return n("$selectedFolderId", (r = t));
      }),
        b(t, mt, function (t) {
          return n("$foldersTree", (i = t));
        });
      var a,
        s = e.items,
        c = H();
      q(function () {
        document.body.classList.add("dialog-open");
        var t = a.querySelector(".selected");
        t.querySelector("p").classList.add("open"),
          t.querySelector(".subtree").classList.add("open");
      }),
        N(function () {
          return document.body.classList.remove("dialog-open");
        }),
        0 === r &&
          vt.update(function () {
            return 1;
          });
      var l = [];
      s.forEach(function (t) {
        "folder" === t.type && l.push(t.id);
      });
      return (
        (t.$set = function (t) {
          "items" in t && n("items", (s = t.items));
        }),
        {
          items: s,
          dispatch: c,
          tree: a,
          hiddenFolders: l,
          move: function () {
            var t;
            return regeneratorRuntime.async(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (t = r.toString()),
                      s.forEach(function (e) {
                        o.a.bookmarks.move(e.id.toString(), { parentId: t });
                      }),
                      c("moved", { items: s, parentId: r });
                  case 3:
                  case "end":
                    return e.stop();
                }
            });
          },
          $foldersTree: i,
          div1_binding: function (t) {
            z[t ? "unshift" : "push"](function () {
              n("tree", (a = t));
            });
          },
          click_handler: function () {
            return c("cancel");
          },
        }
      );
    }
    var zt = (function (t) {
      var e, n;
      function r(e) {
        var n;
        return (
          ut(
            (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })((n = t.call(this) || this)),
            e,
            Vt,
            Ut,
            g,
            { items: 0 }
          ),
          n
        );
      }
      return (
        (n = t),
        ((e = r).prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        (e.__proto__ = n),
        r
      );
    })(ft);
    n(186);
    function Wt(t) {
      var e, n, r, o, i, a, s;
      return {
        c: function () {
          (e = w("div")),
            (n = w("img")),
            (r = S()),
            (o = w("input")),
            (i = S()),
            (a = w("img")),
            n.src !== "/images/search.svg" && T(n, "src", "/images/search.svg"),
            T(n, "alt", "Search"),
            T(n, "class", "search-icon"),
            T(o, "type", "text"),
            T(o, "class", "search-input"),
            T(o, "placeholder", "Search bookmarks"),
            a.src !== "/images/close.svg" && T(a, "src", "/images/close.svg"),
            T(a, "alt", "Clear"),
            T(a, "class", "clear-icon"),
            D(a, "show", "" !== t.searchValue),
            T(e, "class", "search"),
            (s = [
              $(o, "input", t.input_input_handler),
              $(o, "keydown", t.keyDownHandler),
              $(a, "click", t.clearSearch),
            ]);
        },
        m: function (s, c) {
          x(s, e, c),
            y(e, n),
            y(e, r),
            y(e, o),
            E(o, t.searchValue),
            y(e, i),
            y(e, a);
        },
        p: function (t, e) {
          t.searchValue && o.value !== e.searchValue && E(o, e.searchValue),
            t.searchValue && D(a, "show", "" !== e.searchValue);
        },
        i: f,
        o: f,
        d: function (t) {
          t && _(e), p(s);
        },
      };
    }
    function Gt(t, e, n) {
      var r,
        o = "";
      return {
        searchValue: o,
        keyDownHandler: function (t) {
          clearTimeout(r),
            13 !== t.keyCode
              ? (r = setTimeout(function () {
                  bt.update(function () {
                    return o;
                  });
                }, 500))
              : bt.update(function () {
                  return o;
                });
        },
        clearSearch: function () {
          n("searchValue", (o = "")),
            bt.update(function () {
              return "";
            });
        },
        input_input_handler: function () {
          (o = this.value), n("searchValue", o);
        },
      };
    }
    var Kt,
      Yt = (function (t) {
        var e, n;
        function r(e) {
          var n;
          return (
            ut(
              (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })((n = t.call(this) || this)),
              e,
              Gt,
              Wt,
              g,
              {}
            ),
            n
          );
        }
        return (
          (n = t),
          ((e = r).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = n),
          r
        );
      })(ft);
    function Jt() {}
    function Xt(t, e) {
      for (var n in e) t[n] = e[n];
      return t;
    }
    function Qt(t) {
      return t();
    }
    function Zt() {
      return Object.create(null);
    }
    function te(t) {
      t.forEach(Qt);
    }
    function ee(t) {
      return "function" == typeof t;
    }
    function ne(t, e) {
      return t != t
        ? e == e
        : t !== e || (t && "object" == typeof t) || "function" == typeof t;
    }
    function re(t, e, n) {
      return t[1]
        ? Xt({}, Xt(e.$$scope.ctx, t[1](n ? n(e) : {})))
        : e.$$scope.ctx;
    }
    function oe(t, e, n) {
      t.insertBefore(e, n || null);
    }
    function ie(t) {
      t.parentNode.removeChild(t);
    }
    function ae() {
      return (t = " "), document.createTextNode(t);
      var t;
    }
    function se(t) {
      Kt = t;
    }
    function ce() {
      var t = Kt;
      return function (e, n) {
        var r = t.$$.callbacks[e];
        if (r) {
          var o = (function (t, e) {
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(t, !1, !1, e), n;
          })(e, n);
          r.slice().forEach(function (e) {
            e.call(t, o);
          });
        }
      };
    }
    var le = [],
      ue = [],
      fe = [],
      de = [],
      he = Promise.resolve(),
      pe = !1;
    function me(t) {
      fe.push(t);
    }
    function ge() {
      var t = new Set();
      do {
        for (; le.length; ) {
          var e = le.shift();
          se(e), ve(e.$$);
        }
        for (; ue.length; ) ue.pop()();
        for (var n = 0; n < fe.length; n += 1) {
          var r = fe[n];
          t.has(r) || (r(), t.add(r));
        }
        fe.length = 0;
      } while (le.length);
      for (; de.length; ) de.pop()();
      pe = !1;
    }
    function ve(t) {
      t.fragment &&
        (t.update(t.dirty),
        te(t.before_update),
        t.fragment.p(t.dirty, t.ctx),
        (t.dirty = null),
        t.after_update.forEach(me));
    }
    var be,
      ye = new Set();
    function xe(t, e) {
      t && t.i && (ye.delete(t), t.i(e));
    }
    function _e(t, e) {
      t.$$.dirty ||
        (le.push(t), pe || ((pe = !0), he.then(ge)), (t.$$.dirty = Zt())),
        (t.$$.dirty[e] = !0);
    }
    function ke(t, e, n, r, o, i) {
      var a = Kt;
      se(t);
      var s,
        c = e.props || {},
        l = (t.$$ = {
          fragment: null,
          ctx: null,
          props: i,
          update: Jt,
          not_equal: o,
          bound: Zt(),
          on_mount: [],
          on_destroy: [],
          before_update: [],
          after_update: [],
          context: new Map(a ? a.$$.context : []),
          callbacks: Zt(),
          dirty: null,
        }),
        u = !1;
      (l.ctx = n
        ? n(t, c, function (e, n) {
            l.ctx &&
              o(l.ctx[e], (l.ctx[e] = n)) &&
              (l.bound[e] && l.bound[e](n), u && _e(t, e));
          })
        : c),
        l.update(),
        (u = !0),
        te(l.before_update),
        (l.fragment = r(l.ctx)),
        e.target &&
          (e.hydrate
            ? l.fragment.l(((s = e.target), Array.from(s.childNodes)))
            : l.fragment.c(),
          e.intro && xe(t.$$.fragment),
          (function (t, e, n) {
            var r = t.$$,
              o = r.fragment,
              i = r.on_mount,
              a = r.on_destroy,
              s = r.after_update;
            o.m(e, n),
              me(function () {
                var e = i.map(Qt).filter(ee);
                a ? a.push.apply(a, e) : te(e), (t.$$.on_mount = []);
              }),
              s.forEach(me);
          })(t, e.target, e.anchor),
          ge()),
        se(a);
    }
    function we(t) {
      var e, n, r;
      document.body.addEventListener("click", t.onClickOutside);
      var o = t.$$slots.default,
        i = (function (t, e, n) {
          if (t) {
            var r = re(t, e, n);
            return t[0](r);
          }
        })(o, t, null);
      return {
        c: function () {
          var t;
          (e = ae()), (t = "div"), (n = document.createElement(t)), i && i.c();
        },
        l: function (t) {
          i && i.l(div_nodes);
        },
        m: function (o, a) {
          oe(o, e, a),
            oe(o, n, a),
            i && i.m(n, null),
            t.div_binding(n),
            (r = !0);
        },
        p: function (t, e) {
          i &&
            i.p &&
            t.$$scope &&
            i.p(
              (function (t, e, n, r) {
                return t[1]
                  ? Xt({}, Xt(e.$$scope.changed || {}, t[1](r ? r(n) : {})))
                  : e.$$scope.changed || {};
              })(o, e, t, null),
              re(o, e, null)
            );
        },
        i: function (t) {
          r || (xe(i, t), (r = !0));
        },
        o: function (t) {
          !(function (t, e, n, r) {
            if (t && t.o) {
              if (ye.has(t)) return;
              ye.add(t),
                be.c.push(function () {
                  ye.delete(t), r && (n && t.d(1), r());
                }),
                t.o(e);
            }
          })(i, t),
            (r = !1);
        },
        d: function (r) {
          document.body.removeEventListener("click", t.onClickOutside),
            r && (ie(e), ie(n)),
            i && i.d(r),
            t.div_binding(null);
        },
      };
    }
    function Ae(t, e, n) {
      var r,
        o = e.exclude,
        i = void 0 === o ? [] : o,
        a = ce();
      var s = e.$$slots,
        c = void 0 === s ? {} : s,
        l = e.$$scope;
      return (
        (t.$set = function (t) {
          "exclude" in t && n("exclude", (i = t.exclude)),
            "$$scope" in t && n("$$scope", (l = t.$$scope));
        }),
        {
          exclude: i,
          child: r,
          onClickOutside: function (t) {
            (function (t) {
              for (var e = t; e; ) {
                if (i.indexOf(e) >= 0 || e === r) return !0;
                e = e.parentNode;
              }
              return !1;
            })(t.target) || a("clickoutside");
          },
          div_binding: function (t) {
            ue[t ? "unshift" : "push"](function () {
              n("child", (r = t));
            });
          },
          $$slots: c,
          $$scope: l,
        }
      );
    }
    var Se = (function (t) {
      var e, n;
      function r(e) {
        var n;
        return (
          ke(
            (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })((n = t.call(this) || this)),
            e,
            Ae,
            we,
            ne,
            ["exclude"]
          ),
          n
        );
      }
      return (
        (n = t),
        ((e = r).prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        (e.__proto__ = n),
        r
      );
    })(
      (function () {
        function t() {}
        var e = t.prototype;
        return (
          (e.$destroy = function () {
            var t, e;
            (e = 1),
              (t = this).$$.fragment &&
                (te(t.$$.on_destroy),
                t.$$.fragment.d(e),
                (t.$$.on_destroy = t.$$.fragment = null),
                (t.$$.ctx = {})),
              (this.$destroy = Jt);
          }),
          (e.$on = function (t, e) {
            var n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
            return (
              n.push(e),
              function () {
                var t = n.indexOf(e);
                -1 !== t && n.splice(t, 1);
              }
            );
          }),
          (e.$set = function () {}),
          t
        );
      })()
    );
    function Oe(t) {
      var e, n, r, o, i, a, s, c, l, u;
      return {
        c: function () {
          (e = w("ul")),
            (n = w("li")),
            ((r = w("button")).textContent = "Rename"),
            (o = S()),
            (i = w("li")),
            ((a = w("button")).textContent = "Move"),
            (s = S()),
            (c = w("li")),
            ((l = w("button")).textContent = "Delete"),
            T(e, "class", "primary-menu"),
            (u = [
              $(r, "click", t.renameFolder),
              $(a, "click", t.moveFolder),
              $(l, "click", t.deleteFolder),
            ]);
        },
        m: function (t, u) {
          x(t, e, u),
            y(e, n),
            y(n, r),
            y(e, o),
            y(e, i),
            y(i, a),
            y(e, s),
            y(e, c),
            y(c, l);
        },
        p: f,
        d: function (t) {
          t && _(e), p(u);
        },
      };
    }
    function $e(t) {
      var e,
        n,
        r,
        o,
        i,
        a,
        s,
        c,
        l,
        u,
        f,
        d,
        h,
        m,
        g,
        v,
        b,
        k,
        O,
        L = t.data.bookmarksCount + "",
        E = t.data.bookmarksCount + "",
        M = t.data.bookmarksCount + "";
      return {
        c: function () {
          (e = w("ul")),
            (n = w("li")),
            (r = w("button")),
            (o = A("Open all (")),
            (i = A(L)),
            (a = A(")")),
            (s = S()),
            (c = w("li")),
            (l = w("button")),
            (u = A("Open all (")),
            (f = A(E)),
            (d = A(") in new window")),
            (h = S()),
            (m = w("li")),
            (g = w("button")),
            (v = A("Open all (")),
            (b = A(M)),
            (k = A(") in incongnito window")),
            T(e, "class", "secondary-menu"),
            (O = [
              $(r, "click", t.click_handler),
              $(l, "click", t.click_handler_1),
              $(g, "click", t.click_handler_2),
            ]);
        },
        m: function (t, p) {
          x(t, e, p),
            y(e, n),
            y(n, r),
            y(r, o),
            y(r, i),
            y(r, a),
            y(e, s),
            y(e, c),
            y(c, l),
            y(l, u),
            y(l, f),
            y(l, d),
            y(e, h),
            y(e, m),
            y(m, g),
            y(g, v),
            y(g, b),
            y(g, k);
        },
        p: function (t, e) {
          t.data && L !== (L = e.data.bookmarksCount + "") && C(i, L),
            t.data && E !== (E = e.data.bookmarksCount + "") && C(f, E),
            t.data && M !== (M = e.data.bookmarksCount + "") && C(b, M);
        },
        d: function (t) {
          t && _(e), p(O);
        },
      };
    }
    function Le(t) {
      var e,
        n,
        r = !t.data.isRootFolder && Oe(t),
        o = t.data.bookmarksCount > 0 && $e(t);
      return {
        c: function () {
          (e = w("div")),
            r && r.c(),
            (n = S()),
            o && o.c(),
            T(e, "class", "tree-item-menu"),
            M(e, "left", t.data.posX + "px"),
            M(e, "top", t.data.posY + "px"),
            D(e, "show", t.data.visible);
        },
        m: function (t, i) {
          x(t, e, i), r && r.m(e, null), y(e, n), o && o.m(e, null);
        },
        p: function (t, i) {
          i.data.isRootFolder
            ? r && (r.d(1), (r = null))
            : r
            ? r.p(t, i)
            : ((r = Oe(i)).c(), r.m(e, n)),
            i.data.bookmarksCount > 0
              ? o
                ? o.p(t, i)
                : ((o = $e(i)).c(), o.m(e, null))
              : o && (o.d(1), (o = null)),
            t.data && M(e, "left", i.data.posX + "px"),
            t.data && M(e, "top", i.data.posY + "px"),
            t.data && D(e, "show", i.data.visible);
        },
        d: function (t) {
          t && _(e), r && r.d(), o && o.d();
        },
      };
    }
    function Te(t) {
      var e,
        n = new Se({
          props: { $$slots: { default: [Le] }, $$scope: { ctx: t } },
        });
      return (
        n.$on("clickoutside", t.clickoutside_handler),
        {
          c: function () {
            st(n.$$.fragment);
          },
          m: function (t, r) {
            ct(n, t, r), (e = !0);
          },
          p: function (t, e) {
            var r = {};
            (t.$$scope || t.data) && (r.$$scope = { changed: t, ctx: e }),
              n.$set(r);
          },
          i: function (t) {
            e || (ot(n.$$.fragment, t), (e = !0));
          },
          o: function (t) {
            it(n.$$.fragment, t), (e = !1);
          },
          d: function (t) {
            lt(n, t);
          },
        }
      );
    }
    function Ce(t, e, n) {
      var r;
      b(t, gt, function (t) {
        return n("$bookmarks", (r = t));
      });
      var o = e.data,
        i = H();
      function a(t) {
        void 0 === t && (t = null), n("data", (o.visible = !1), o);
        var e = [];
        r
          .filter(function (t) {
            return t.ancestors.includes(o.folderId);
          })
          .forEach(function (t) {
            return e.push(t.url);
          }),
          i("open-tabs", { urls: e, parentWindow: t });
      }
      return (
        (t.$set = function (t) {
          "data" in t && n("data", (o = t.data));
        }),
        {
          data: o,
          renameFolder: function () {
            n("data", (o.visible = !1), o),
              i("rename-folder", { folderId: o.folderId });
          },
          moveFolder: function () {
            n("data", (o.visible = !1), o),
              i("move-items", { items: [{ id: o.folderId, type: "folder" }] });
          },
          deleteFolder: function () {
            n("data", (o.visible = !1), o),
              i("delete-items", {
                items: [{ id: o.folderId, type: "folder" }],
              });
          },
          openTabs: a,
          click_handler: function () {
            return a();
          },
          click_handler_1: function () {
            return a("blank");
          },
          click_handler_2: function () {
            return a("private");
          },
          clickoutside_handler: function () {
            n("data", (o.visible = !1), o);
          },
        }
      );
    }
    var Ee = (function (t) {
      var e, n;
      function r(e) {
        var n;
        return (
          ut(
            (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })((n = t.call(this) || this)),
            e,
            Ce,
            Te,
            g,
            { data: 0 }
          ),
          n
        );
      }
      return (
        (n = t),
        ((e = r).prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        (e.__proto__ = n),
        r
      );
    })(ft);
    function Me(t) {
      var e,
        n,
        r,
        o = new Ee({ props: { data: t.contextMenuData } });
      o.$on("rename-folder", t.rename_folder_handler),
        o.$on("move-items", t.move_items_handler),
        o.$on("delete-items", t.delete_items_handler),
        o.$on("open-tabs", t.open_tabs_handler);
      var i = new Ht({ props: { tree: t.$foldersTree, level: 0, hidden: [] } });
      return (
        i.$on("show-contextmenu", t.showContextMenu),
        {
          c: function () {
            st(o.$$.fragment),
              (e = S()),
              (n = w("section")),
              st(i.$$.fragment),
              T(n, "class", "explorer");
          },
          m: function (t, a) {
            ct(o, t, a), x(t, e, a), x(t, n, a), ct(i, n, null), (r = !0);
          },
          p: function (t, e) {
            var n = {};
            t.contextMenuData && (n.data = e.contextMenuData), o.$set(n);
            var r = {};
            t.$foldersTree && (r.tree = e.$foldersTree), i.$set(r);
          },
          i: function (t) {
            r || (ot(o.$$.fragment, t), ot(i.$$.fragment, t), (r = !0));
          },
          o: function (t) {
            it(o.$$.fragment, t), it(i.$$.fragment, t), (r = !1);
          },
          d: function (t) {
            lt(o, t), t && _(e), t && _(n), lt(i);
          },
        }
      );
    }
    function Ie(t, e, n) {
      var r, o;
      b(t, pt, function (t) {
        return n("$folders", (r = t));
      }),
        b(t, mt, function (t) {
          return n("$foldersTree", (o = t));
        });
      var i = {
        visible: !1,
        folderId: null,
        isRootFolder: !0,
        posX: 0,
        posY: 0,
        bookmarksCount: 0,
      };
      return {
        contextMenuData: i,
        showContextMenu: function (t) {
          var e = t.detail,
            o = e.folderId,
            a = e.posX,
            s = e.posY;
          n(
            "contextMenuData",
            (i = {
              visible: !0,
              folderId: o,
              isRootFolder: 0 === r[o].parentId,
              posX: a,
              posY: s,
              bookmarksCount: r[o].bookmarksCount,
            })
          );
        },
        $foldersTree: o,
        rename_folder_handler: function (e) {
          U(t, e);
        },
        move_items_handler: function (e) {
          U(t, e);
        },
        delete_items_handler: function (e) {
          U(t, e);
        },
        open_tabs_handler: function (e) {
          U(t, e);
        },
      };
    }
    var je = (function (t) {
      var e, n;
      function r(e) {
        var n;
        return (
          ut(
            (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })((n = t.call(this) || this)),
            e,
            Ie,
            Me,
            g,
            {}
          ),
          n
        );
      }
      return (
        (n = t),
        ((e = r).prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        (e.__proto__ = n),
        r
      );
    })(ft);
    n(140), n(187);
    function De(t, e) {
      var n, r, i, a, s, c, l, u, f, d;
      return regeneratorRuntime.async(function (h) {
        for (;;)
          switch ((h.prev = h.next)) {
            case 0:
              (n = t.querySelectorAll(":scope > dt")), (r = 0);
            case 2:
              if (!(r < n.length)) {
                h.next = 22;
                break;
              }
              if (((i = n[r]), !(a = i.querySelector(":scope > h3")))) {
                h.next = 14;
                break;
              }
              return (
                (s = a.innerText),
                (c = i.querySelector(":scope > dl")),
                (h.next = 10),
                regeneratorRuntime.awrap(
                  o.a.bookmarks.create({ parentId: e, title: s })
                )
              );
            case 10:
              (l = h.sent), De(c, l.id), (h.next = 19);
              break;
            case 14:
              return (
                (u = i.querySelector("a")),
                (f = u.innerText),
                (d = u.href),
                (h.next = 19),
                regeneratorRuntime.awrap(
                  o.a.bookmarks.create({ parentId: e, title: f, url: d })
                )
              );
            case 19:
              (r += 1), (h.next = 2);
              break;
            case 22:
            case "end":
              return h.stop();
          }
      });
    }
    var Pe = function (t) {
      var e, n, r, i, a, s, c;
      return regeneratorRuntime.async(function (l) {
        for (;;)
          switch ((l.prev = l.next)) {
            case 0:
              return (
                (l.next = 2),
                regeneratorRuntime.awrap(o.a.bookmarks.getChildren("1"))
              );
            case 2:
              return (
                (e = l.sent),
                (n = []),
                e
                  .filter(function (t) {
                    return void 0 === t.url;
                  })
                  .forEach(function (t) {
                    var e = t.title.match(/Imported(\s\((\d+)\))?/);
                    if (e) {
                      var r = 0;
                      void 0 !== e[2] && (r = parseInt(e[2], 10)), n.push(r);
                    }
                  }),
                (r = (n.sort().pop() || -1) + 1),
                (i = 0 === r ? "Imported" : "Imported (" + r + ")"),
                (l.next = 9),
                regeneratorRuntime.awrap(
                  o.a.bookmarks.create({ title: i, parentId: "1" })
                )
              );
            case 9:
              return (
                (a = l.sent),
                (s = new DOMParser()),
                (c = s.parseFromString(t, "text/html")),
                (l.next = 14),
                regeneratorRuntime.awrap(
                  De(c.body.querySelector(":scope > dl"), a.id)
                )
              );
            case 14:
              return l.abrupt("return", !0);
            case 15:
            case "end":
              return l.stop();
          }
      });
    };
    var Fe = function () {
      o.a.bookmarks.getTree().then(function (t) {
        var e =
            '\n<!DOCTYPE NETSCAPE-Bookmark-file-1>\n\x3c!-- This is an automatically generated file.\n    It will be read and overwritten.\n    DO NOT EDIT! --\x3e\n<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">\n<TITLE>Bookmarks</TITLE>\n<H1>Bookmarks</H1>\n<DL><p>\n    ' +
            (function t(e) {
              var n = "";
              return (
                e.forEach(function (e) {
                  void 0 !== e.children
                    ? (n +=
                        '\n<DT>\n    <H3 ADD_DATE="' +
                        e.dateAdded +
                        '" LAST_MODIFIED="' +
                        e.dateGroupModified +
                        '">' +
                        e.title +
                        "</H3>\n    <DL><p>\n        " +
                        t(e.children) +
                        "\n    </DL><p>")
                    : (n +=
                        '\n            <DT><A HREF="' +
                        e.url +
                        '" ADD_DATE="' +
                        e.dateAdded +
                        '">' +
                        e.title +
                        "</A>\n            ");
                }),
                n
              );
            })(t[0].children),
          n = new Blob([e], { type: "text/html" }),
          r = URL.createObjectURL(n),
          o = document.createElement("a");
        o.setAttribute("download", "bookmarks-" + Date.now()),
          (o.href = r),
          o.click();
      });
    };
    function Re(t) {
      var e, n, r, o, i, a, s, c, l, u, d, h, m, g, v, b;
      return {
        c: function () {
          (e = w("nav")),
            (n = w("ul")),
            (r = w("li")),
            ((o = w("button")).textContent = "Add bookmark"),
            (i = S()),
            (a = w("li")),
            ((s = w("button")).textContent = "Add folder"),
            (c = S()),
            (l = w("li")),
            (u = w("label")),
            (d = A("Import bookmarks\n                ")),
            (h = w("input")),
            (m = S()),
            (g = w("li")),
            ((v = w("button")).textContent = "Export bookmarks"),
            T(h, "type", "file"),
            T(h, "id", "file"),
            T(h, "accept", "text/html"),
            T(u, "for", "file"),
            T(u, "class", "import-button"),
            T(e, "class", "menu"),
            (b = [
              $(o, "click", t.click_handler),
              $(s, "click", t.click_handler_1),
              $(h, "change", Be),
              $(v, "click", Fe),
            ]);
        },
        m: function (t, f) {
          x(t, e, f),
            y(e, n),
            y(n, r),
            y(r, o),
            y(n, i),
            y(n, a),
            y(a, s),
            y(n, c),
            y(n, l),
            y(l, u),
            y(u, d),
            y(u, h),
            y(n, m),
            y(n, g),
            y(g, v);
        },
        p: f,
        i: f,
        o: f,
        d: function (t) {
          t && _(e), p(b);
        },
      };
    }
    function Be(t) {
      var e = t.target.files[0];
      (e && "text/html" === e.type) || alert("File is invalid.");
      var n = new FileReader();
      (n.onload = function () {
        Pe(n.result)
          .then(function () {
            window.location.reload();
          })
          .catch(function () {
            alert("An error has occured. Please refresh this page.");
          });
      }),
        n.readAsText(e);
    }
    function qe(t) {
      var e = H();
      return {
        dispatch: e,
        click_handler: function () {
          e("add-bookmark");
        },
        click_handler_1: function () {
          e("add-folder");
        },
      };
    }
    var Ne = (function (t) {
      var e, n;
      function r(e) {
        var n;
        return (
          ut(
            (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })((n = t.call(this) || this)),
            e,
            qe,
            Re,
            g,
            {}
          ),
          n
        );
      }
      return (
        (n = t),
        ((e = r).prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        (e.__proto__ = n),
        r
      );
    })(ft);
    function He(t) {
      var e,
        n,
        r,
        o,
        i,
        a,
        s,
        c,
        l,
        u,
        f = new Yt({}),
        d = new je({});
      d.$on("rename-folder", t.rename_folder_handler),
        d.$on("move-items", t.move_items_handler),
        d.$on("delete-items", t.delete_items_handler),
        d.$on("open-tabs", t.open_tabs_handler);
      var h = new Ne({});
      return (
        h.$on("add-bookmark", t.add_bookmark_handler),
        h.$on("add-folder", t.add_folder_handler),
        h.$on("import", t.import_handler),
        h.$on("export", t.export_handler),
        {
          c: function () {
            (e = w("aside")),
              (n = w("div")),
              ((r = w("button")).innerHTML =
                '<img src="images/menu.svg" alt="Close sidebar">'),
              (o = S()),
              ((i = w("h1")).textContent = "Bookmarks"),
              (a = S()),
              st(f.$$.fragment),
              (s = S()),
              st(d.$$.fragment),
              (c = S()),
              st(h.$$.fragment),
              T(r, "class", "close-sidebar-button"),
              T(n, "class", "sidebar-wrapper"),
              T(e, "id", "sidebar"),
              T(e, "class", "sidebar"),
              D(e, "show", t.open),
              (u = $(r, "click", t.click_handler));
          },
          m: function (t, u) {
            x(t, e, u),
              y(e, n),
              y(n, r),
              y(n, o),
              y(n, i),
              y(n, a),
              ct(f, n, null),
              y(n, s),
              ct(d, n, null),
              y(n, c),
              ct(h, n, null),
              (l = !0);
          },
          p: function (t, n) {
            t.open && D(e, "show", n.open);
          },
          i: function (t) {
            l ||
              (ot(f.$$.fragment, t),
              ot(d.$$.fragment, t),
              ot(h.$$.fragment, t),
              (l = !0));
          },
          o: function (t) {
            it(f.$$.fragment, t),
              it(d.$$.fragment, t),
              it(h.$$.fragment, t),
              (l = !1);
          },
          d: function (t) {
            t && _(e), lt(f), lt(d), lt(h), u();
          },
        }
      );
    }
    function Ue(t, e, n) {
      var r = e.open,
        o = H();
      q(function () {
        var t = document.querySelector(".sidebar"),
          e = t.querySelector(".explorer"),
          n = t.querySelector(".tree"),
          r = t.querySelector(".tree-item-menu");
        e.addEventListener("click", function (t) {
          n.contains(t.target) ||
            r.contains(t.target) ||
            vt.update(function () {
              return 0;
            });
        });
      });
      return (
        (t.$set = function (t) {
          "open" in t && n("open", (r = t.open));
        }),
        {
          open: r,
          dispatch: o,
          click_handler: function () {
            o("close");
          },
          rename_folder_handler: function (e) {
            U(t, e);
          },
          move_items_handler: function (e) {
            U(t, e);
          },
          delete_items_handler: function (e) {
            U(t, e);
          },
          open_tabs_handler: function (e) {
            U(t, e);
          },
          add_bookmark_handler: function (e) {
            U(t, e);
          },
          add_folder_handler: function (e) {
            U(t, e);
          },
          import_handler: function (e) {
            U(t, e);
          },
          export_handler: function (e) {
            U(t, e);
          },
        }
      );
    }
    var Ve = (function (t) {
        var e, n;
        function r(e) {
          var n;
          return (
            ut(
              (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })((n = t.call(this) || this)),
              e,
              Ue,
              He,
              g,
              { open: 0 }
            ),
            n
          );
        }
        return (
          (n = t),
          ((e = r).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = n),
          r
        );
      })(ft),
      ze = n(143),
      We = n.n(ze);
    function Ge(t) {
      var e,
        n,
        r,
        o,
        i,
        a,
        s,
        c = new Yt({});
      return {
        c: function () {
          (e = w("header")),
            ((n = w("button")).innerHTML =
              '<img src="/images/menu.svg" alt="Menu">'),
            (r = S()),
            ((o = w("h1")).textContent = "Bookmarks"),
            (i = S()),
            st(c.$$.fragment),
            T(e, "class", "header"),
            (s = $(n, "click", t.click_handler));
        },
        m: function (t, s) {
          x(t, e, s),
            y(e, n),
            y(e, r),
            y(e, o),
            y(e, i),
            ct(c, e, null),
            (a = !0);
        },
        p: f,
        i: function (t) {
          a || (ot(c.$$.fragment, t), (a = !0));
        },
        o: function (t) {
          it(c.$$.fragment, t), (a = !1);
        },
        d: function (t) {
          t && _(e), lt(c), s();
        },
      };
    }
    function Ke(t) {
      var e = H();
      return {
        dispatch: e,
        click_handler: function () {
          e("open-sidebar");
        },
      };
    }
    var Ye = (function (t) {
      var e, n;
      function r(e) {
        var n;
        return (
          ut(
            (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })((n = t.call(this) || this)),
            e,
            Ke,
            Ge,
            g,
            {}
          ),
          n
        );
      }
      return (
        (n = t),
        ((e = r).prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        (e.__proto__ = n),
        r
      );
    })(ft);
    function Je(t) {
      var e, n, r, o, i, a, s, c, l, u, f, d, h, m, g, v, b;
      function k(t, e) {
        return e.$searchKeyword
          ? tn
          : void 0 === e.$folders[e.$selectedFolderId]
          ? Ze
          : Qe;
      }
      var A = k(0, t),
        O = A(t);
      return {
        c: function () {
          O.c(),
            (e = S()),
            (n = w("div")),
            (r = w("div")),
            ((o = w("button")).innerHTML =
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M0 4h4V0H0v4zm6 12h4v-4H6v4zm-6 0h4v-4H0v4zm0-6h4V6H0v4zm6 0h4V6H6v4zm6-10v4h4V0h-4zM6 4h4V0H6v4zm6 6h4V6h-4v4zm0 6h4v-4h-4v4z" fill-rule="evenodd"></path></svg>'),
            (i = S()),
            ((a = w("button")).innerHTML =
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M0 0h7v7H0zm9 0h7v7H9zM0 9h7v7H0zm9 0h7v7H9zm0 0" fill-rule="evenodd"></path></svg>'),
            (s = S()),
            ((c = w("button")).innerHTML =
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.244 17.009H.75c-.413 0-.75.36-.75.801v3.421c0 .423.337.769.75.769h22.494c.414 0 .75-.346.75-.77v-3.42c0-.441-.336-.801-.75-.801zm0-8H.75c-.413 0-.75.36-.75.801v3.421A.76.76 0 00.75 14h22.494a.76.76 0 00.75-.769V9.81c0-.441-.336-.801-.75-.801zm0-8H.75c-.413 0-.75.36-.75.801v3.42c0 .423.337.769.75.769h22.494a.76.76 0 00.75-.769V1.81c0-.441-.336-.801-.75-.801z"></path></svg>'),
            (l = S()),
            (u = w("div")),
            ((f = w("label")).textContent = "Order by"),
            (d = S()),
            (h = w("select")),
            ((m = w("option")).textContent = "Default"),
            ((g = w("option")).textContent = "Recent"),
            ((v = w("option")).textContent = "Name"),
            D(o, "selected", "grid-small" === t.layout),
            D(a, "selected", "grid" === t.layout),
            D(c, "selected", "list" === t.layout),
            T(r, "class", "layout-selector"),
            T(f, "for", "order"),
            (m.__value = "default"),
            (m.value = m.__value),
            (g.__value = "recent"),
            (g.value = g.__value),
            (v.__value = "name"),
            (v.value = v.__value),
            T(h, "id", "order"),
            void 0 === t.order &&
              X(function () {
                return t.select_change_handler.call(h);
              }),
            T(u, "class", "order-selector"),
            T(n, "class", "toolbar-actions"),
            (b = [
              $(o, "click", t.click_handler_5),
              $(a, "click", t.click_handler_6),
              $(c, "click", t.click_handler_7),
              $(h, "change", t.select_change_handler),
              $(h, "change", t.change_handler),
            ]);
        },
        m: function (p, b) {
          O.m(p, b),
            x(p, e, b),
            x(p, n, b),
            y(n, r),
            y(r, o),
            y(r, i),
            y(r, a),
            y(r, s),
            y(r, c),
            y(n, l),
            y(n, u),
            y(u, f),
            y(u, d),
            y(u, h),
            y(h, m),
            y(h, g),
            y(h, v),
            I(h, t.order);
        },
        p: function (t, n) {
          A === (A = k(0, n)) && O
            ? O.p(t, n)
            : (O.d(1), (O = A(n)) && (O.c(), O.m(e.parentNode, e))),
            t.layout && D(o, "selected", "grid-small" === n.layout),
            t.layout && D(a, "selected", "grid" === n.layout),
            t.layout && D(c, "selected", "list" === n.layout),
            t.order && I(h, n.order);
        },
        d: function (t) {
          O.d(t), t && _(e), t && _(n), p(b);
        },
      };
    }
    function Xe(t) {
      var e,
        n,
        r,
        o,
        i,
        a,
        s,
        c,
        l,
        u,
        f,
        d,
        h,
        m,
        g,
        v,
        b = t.selectedItems.length + "";
      return {
        c: function () {
          (e = w("h1")),
            (n = A(b)),
            (r = A(" item(s) selected")),
            (o = S()),
            (i = w("div")),
            (a = w("div")),
            ((s = w("button")).textContent = "Move"),
            (c = S()),
            ((l = w("button")).textContent = "Delete"),
            (u = S()),
            ((f = w("button")).textContent = "Open all"),
            (d = S()),
            ((h = w("button")).textContent = "Open all in new window"),
            (m = S()),
            ((g = w("button")).textContent = "Open all in incognito window"),
            T(e, "class", "headline"),
            T(a, "class", "selected-items-buttons"),
            T(i, "class", "toolbar-actions"),
            (v = [
              $(s, "click", t.click_handler),
              $(l, "click", t.click_handler_1),
              $(f, "click", t.click_handler_2),
              $(h, "click", t.click_handler_3),
              $(g, "click", t.click_handler_4),
            ]);
        },
        m: function (t, p) {
          x(t, e, p),
            y(e, n),
            y(e, r),
            x(t, o, p),
            x(t, i, p),
            y(i, a),
            y(a, s),
            y(a, c),
            y(a, l),
            y(a, u),
            y(a, f),
            y(a, d),
            y(a, h),
            y(a, m),
            y(a, g);
        },
        p: function (t, e) {
          t.selectedItems && b !== (b = e.selectedItems.length + "") && C(n, b);
        },
        d: function (t) {
          t && _(e), t && _(o), t && _(i), p(v);
        },
      };
    }
    function Qe(t) {
      var e,
        n,
        r,
        o,
        i,
        a,
        s,
        c,
        l,
        u,
        f = t.$folders[t.$selectedFolderId].title + "",
        d = t.$folders[t.$selectedFolderId].bookmarksCount + "";
      return {
        c: function () {
          ((e = w("button")).innerHTML =
            '<img src="images/back.svg" alt="Back">'),
            (n = S()),
            (r = w("h1")),
            (o = A(f)),
            (i = S()),
            (a = w("span")),
            (s = A("(")),
            (c = A(d)),
            (l = A(")")),
            T(e, "class", "back-button"),
            T(a, "class", "bookmarks-count"),
            T(r, "class", "headline"),
            (u = $(e, "click", t.goBack));
        },
        m: function (t, u) {
          x(t, e, u),
            x(t, n, u),
            x(t, r, u),
            y(r, o),
            y(r, i),
            y(r, a),
            y(a, s),
            y(a, c),
            y(a, l);
        },
        p: function (t, e) {
          (t.$folders || t.$selectedFolderId) &&
            f !== (f = e.$folders[e.$selectedFolderId].title + "") &&
            C(o, f),
            (t.$folders || t.$selectedFolderId) &&
              d !== (d = e.$folders[e.$selectedFolderId].bookmarksCount + "") &&
              C(c, d);
        },
        d: function (t) {
          t && _(e), t && _(n), t && _(r), u();
        },
      };
    }
    function Ze(t) {
      var e;
      return {
        c: function () {
          ((e = w("h1")).textContent = "Bookmarks"), T(e, "class", "headline");
        },
        m: function (t, n) {
          x(t, e, n);
        },
        p: f,
        d: function (t) {
          t && _(e);
        },
      };
    }
    function tn(t) {
      var e;
      return {
        c: function () {
          ((e = w("h1")).textContent = "Search results"),
            T(e, "class", "headline");
        },
        m: function (t, n) {
          x(t, e, n);
        },
        p: f,
        d: function (t) {
          t && _(e);
        },
      };
    }
    function en(t) {
      var e;
      function n(t, e) {
        return e.selectedItems.length > 0 ? Xe : Je;
      }
      var r = n(0, t),
        o = r(t);
      return {
        c: function () {
          (e = w("section")),
            o.c(),
            T(e, "id", "toolbar"),
            T(e, "class", "toolbar"),
            D(e, "sticky", t.selectedItems.length > 0);
        },
        m: function (t, n) {
          x(t, e, n), o.m(e, null);
        },
        p: function (t, i) {
          r === (r = n(0, i)) && o
            ? o.p(t, i)
            : (o.d(1), (o = r(i)) && (o.c(), o.m(e, null))),
            t.selectedItems && D(e, "sticky", i.selectedItems.length > 0);
        },
        i: f,
        o: f,
        d: function (t) {
          t && _(e), o.d();
        },
      };
    }
    function nn(t, e, n) {
      var r, o, i, a;
      b(t, pt, function (t) {
        return n("$folders", (r = t));
      }),
        b(t, vt, function (t) {
          return n("$selectedFolderId", (o = t));
        }),
        b(t, gt, function (t) {
          return n("$bookmarks", (i = t));
        }),
        b(t, bt, function (t) {
          return n("$searchKeyword", (a = t));
        });
      var s = e.layout,
        c = e.order,
        l = e.selectedItems,
        u = H();
      function f(t) {
        void 0 === t && (t = null);
        var e = [],
          n = [],
          r = [];
        l.forEach(function (t) {
          "bookmark" === t.type
            ? e.push(t.id)
            : "folder" === t.type && n.push(t.id);
        }),
          i
            .filter(function (t) {
              if (e.includes(t.id)) return !0;
              for (var r = 0; r < n.length; r += 1)
                if (t.ancestors.includes(n[r])) return !0;
              return !1;
            })
            .forEach(function (t) {
              return r.push(t.url);
            }),
          u("open-tabs", { urls: r, parentWindow: t });
      }
      return (
        (t.$set = function (t) {
          "layout" in t && n("layout", (s = t.layout)),
            "order" in t && n("order", (c = t.order)),
            "selectedItems" in t && n("selectedItems", (l = t.selectedItems));
        }),
        {
          layout: s,
          order: c,
          selectedItems: l,
          dispatch: u,
          goBack: function () {
            vt.update(function () {
              return r[o].parentId;
            });
          },
          openTabs: f,
          $folders: r,
          $selectedFolderId: o,
          $searchKeyword: a,
          click_handler: function () {
            return u("move-items", { items: l });
          },
          click_handler_1: function () {
            return u("delete-items", { items: l });
          },
          click_handler_2: function () {
            return f();
          },
          click_handler_3: function () {
            return f("blank");
          },
          click_handler_4: function () {
            return f("private");
          },
          click_handler_5: function () {
            return u("change-layout", { layout: "grid-small" });
          },
          click_handler_6: function () {
            return u("change-layout", { layout: "grid" });
          },
          click_handler_7: function () {
            return u("change-layout", { layout: "list" });
          },
          select_change_handler: function () {
            (c = j(this)), n("order", c);
          },
          change_handler: function () {
            return u("change-order", { order: c });
          },
        }
      );
    }
    var rn = (function (t) {
      var e, n;
      function r(e) {
        var n;
        return (
          ut(
            (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })((n = t.call(this) || this)),
            e,
            nn,
            en,
            g,
            { layout: 0, order: 0, selectedItems: 0 }
          ),
          n
        );
      }
      return (
        (n = t),
        ((e = r).prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        (e.__proto__ = n),
        r
      );
    })(ft);
    var on = at.Object;
    function an(t, e, n) {
      var r = on.create(t);
      return (r.folder = e[n]), r;
    }
    function sn(t) {
      var e,
        n,
        r,
        o,
        i,
        a,
        s,
        c,
        l = t.folder.title + "";
      function u() {
        for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (e = t).click_handler.apply(e, [t].concat(r));
      }
      function f() {
        for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (e = t).contextmenu_handler.apply(e, [t].concat(r));
      }
      return {
        c: function () {
          (e = w("li")),
            (n = w("img")),
            (o = S()),
            (i = A(l)),
            (a = S()),
            n.src !== "images/folder.svg" && T(n, "src", "images/folder.svg"),
            T(n, "alt", (r = t.folder.title)),
            T(e, "class", "folder-item"),
            T(e, "data-id", (s = t.folder.id)),
            T(e, "data-type", "folder"),
            (c = [
              $(e, "click", function () {
                u.apply(this, arguments);
              }),
              $(
                e,
                "contextmenu",
                L(function () {
                  f.apply(this, arguments);
                })
              ),
            ]);
        },
        m: function (t, r) {
          x(t, e, r), y(e, n), y(e, o), y(e, i), y(e, a);
        },
        p: function (o, a) {
          (t = a),
            o.filteredFolders && r !== (r = t.folder.title) && T(n, "alt", r),
            o.filteredFolders && l !== (l = t.folder.title + "") && C(i, l),
            o.filteredFolders && s !== (s = t.folder.id) && T(e, "data-id", s);
        },
        d: function (t) {
          t && _(e), p(c);
        },
      };
    }
    function cn(t) {
      var e,
        n,
        r,
        o,
        i,
        a,
        s,
        c = new Ee({ props: { data: t.contextMenuData } });
      c.$on("rename-folder", t.rename_folder_handler),
        c.$on("move-items", t.move_items_handler),
        c.$on("delete-items", t.delete_items_handler),
        c.$on("open-tabs", t.open_tabs_handler);
      for (var l = t.filteredFolders, u = [], f = 0; f < l.length; f += 1)
        u[f] = sn(an(t, l, f));
      return {
        c: function () {
          (e = w("section")),
            ((n = w("h2")).textContent = "Folders"),
            (r = S()),
            st(c.$$.fragment),
            (o = S()),
            (i = w("ul"));
          for (var s = 0; s < u.length; s += 1) u[s].c();
          T(i, "class", "folders-list"),
            T(e, "id", "folders"),
            T(
              e,
              "class",
              (a = "folders" + (t.filteredFolders.length <= 0 ? " hidden" : ""))
            );
        },
        m: function (a, l) {
          x(a, e, l), y(e, n), y(e, r), ct(c, e, null), y(e, o), y(e, i);
          for (var f = 0; f < u.length; f += 1) u[f].m(i, null);
          t.ul_binding(i), (s = !0);
        },
        p: function (t, n) {
          var r = {};
          if (
            (t.contextMenuData && (r.data = n.contextMenuData),
            c.$set(r),
            t.filteredFolders || t.folderClickHandler || t.showContextMenu)
          ) {
            var o;
            for (l = n.filteredFolders, o = 0; o < l.length; o += 1) {
              var f = an(n, l, o);
              u[o] ? u[o].p(t, f) : ((u[o] = sn(f)), u[o].c(), u[o].m(i, null));
            }
            for (; o < u.length; o += 1) u[o].d(1);
            u.length = l.length;
          }
          (!s ||
            (t.filteredFolders &&
              a !==
                (a =
                  "folders" +
                  (n.filteredFolders.length <= 0 ? " hidden" : "")))) &&
            T(e, "class", a);
        },
        i: function (t) {
          s || (ot(c.$$.fragment, t), (s = !0));
        },
        o: function (t) {
          it(c.$$.fragment, t), (s = !1);
        },
        d: function (n) {
          n && _(e), lt(c), k(u, n), t.ul_binding(null);
        },
      };
    }
    function ln(t, e, n) {
      var r, o;
      b(t, pt, function (t) {
        return n("$folders", (r = t));
      }),
        b(t, vt, function (t) {
          return n("$selectedFolderId", (o = t));
        });
      var i,
        a = [],
        s = {
          visible: !1,
          folderId: null,
          isRootFolder: !0,
          posX: 0,
          posY: 0,
          bookmarksCount: 0,
        },
        c = { left: 0, top: 0 };
      function l(t, e) {
        n(
          "contextMenuData",
          (s = {
            visible: !0,
            folderId: e,
            isRootFolder: 0 === r[e].parentId,
            posX: t.clientX - c.left,
            posY: t.clientY - c.top + 32 + window.scrollY,
            bookmarksCount: r[e].bookmarksCount,
          })
        );
      }
      q(function () {
        c = i.getBoundingClientRect();
      });
      return (
        (t.$$.update = function (t) {
          void 0 === t && (t = { $folders: 1, $selectedFolderId: 1 }),
            (t.$folders || t.$selectedFolderId) &&
              n(
                "filteredFolders",
                (a = Object.values(r).filter(function (t) {
                  return t.parentId === o;
                }))
              );
        }),
        {
          filteredFolders: a,
          contextMenuData: s,
          foldersListElement: i,
          showContextMenu: l,
          rename_folder_handler: function (e) {
            U(t, e);
          },
          move_items_handler: function (e) {
            U(t, e);
          },
          delete_items_handler: function (e) {
            U(t, e);
          },
          open_tabs_handler: function (e) {
            U(t, e);
          },
          click_handler: function (t, e) {
            return (function (t, e) {
              t.ctrlKey ||
                t.shiftKey ||
                t.metaKey ||
                vt.update(function () {
                  return e;
                });
            })(e, t.folder.id);
          },
          contextmenu_handler: function (t, e) {
            l(e, t.folder.id);
          },
          ul_binding: function (t) {
            z[t ? "unshift" : "push"](function () {
              n("foldersListElement", (i = t));
            });
          },
        }
      );
    }
    var un = (function (t) {
        var e, n;
        function r(e) {
          var n;
          return (
            ut(
              (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })((n = t.call(this) || this)),
              e,
              ln,
              cn,
              g,
              {}
            ),
            n
          );
        }
        return (
          (n = t),
          ((e = r).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = n),
          r
        );
      })(ft),
      fn = n(144),
      dn = n.n(fn);
    function hn(t) {
      var e,
        n,
        r,
        o,
        i,
        a,
        s,
        c,
        l,
        u,
        f,
        d,
        h,
        m,
        g,
        v,
        b,
        k,
        A,
        O,
        L,
        C,
        E,
        I;
      return {
        c: function () {
          (e = w("div")),
            (n = w("ul")),
            (r = w("li")),
            ((o = w("button")).textContent = "Edit"),
            (i = S()),
            (a = w("li")),
            ((s = w("button")).textContent = "Move"),
            (c = S()),
            (l = w("li")),
            ((u = w("button")).textContent = "Delete"),
            (f = S()),
            (d = w("li")),
            ((h = w("button")).textContent = "Copy URL"),
            (m = S()),
            (g = w("ul")),
            (v = w("li")),
            ((b = w("button")).textContent = "Open in new tab"),
            (k = S()),
            (A = w("li")),
            ((O = w("button")).textContent = "Open in new window"),
            (L = S()),
            (C = w("li")),
            ((E = w("button")).textContent = "Open in incongnito window"),
            T(n, "class", "primary-menu"),
            T(g, "class", "secondary-menu"),
            T(e, "class", "tree-item-menu"),
            M(e, "left", t.data.posX + "px"),
            M(e, "top", t.data.posY + "px"),
            D(e, "show", t.data.visible),
            (I = [
              $(o, "click", t.editBookmark),
              $(s, "click", t.moveBookmark),
              $(u, "click", t.deleteBookmark),
              $(h, "click", t.copyUrl),
              $(b, "click", t.click_handler),
              $(O, "click", t.click_handler_1),
              $(E, "click", t.click_handler_2),
            ]);
        },
        m: function (t, p) {
          x(t, e, p),
            y(e, n),
            y(n, r),
            y(r, o),
            y(n, i),
            y(n, a),
            y(a, s),
            y(n, c),
            y(n, l),
            y(l, u),
            y(n, f),
            y(n, d),
            y(d, h),
            y(e, m),
            y(e, g),
            y(g, v),
            y(v, b),
            y(g, k),
            y(g, A),
            y(A, O),
            y(g, L),
            y(g, C),
            y(C, E);
        },
        p: function (t, n) {
          t.data && M(e, "left", n.data.posX + "px"),
            t.data && M(e, "top", n.data.posY + "px"),
            t.data && D(e, "show", n.data.visible);
        },
        d: function (t) {
          t && _(e), p(I);
        },
      };
    }
    function pn(t) {
      var e,
        n = new Se({
          props: { $$slots: { default: [hn] }, $$scope: { ctx: t } },
        });
      return (
        n.$on("clickoutside", t.clickoutside_handler),
        {
          c: function () {
            st(n.$$.fragment);
          },
          m: function (t, r) {
            ct(n, t, r), (e = !0);
          },
          p: function (t, e) {
            var r = {};
            (t.$$scope || t.data) && (r.$$scope = { changed: t, ctx: e }),
              n.$set(r);
          },
          i: function (t) {
            e || (ot(n.$$.fragment, t), (e = !0));
          },
          o: function (t) {
            it(n.$$.fragment, t), (e = !1);
          },
          d: function (t) {
            lt(n, t);
          },
        }
      );
    }
    function mn(t, e, n) {
      var r = e.data,
        o = H();
      function i(t) {
        void 0 === t && (t = null),
          n("data", (r.visible = !1), r),
          o("open-tabs", { urls: [r.bookmarkUrl], parentWindow: t });
      }
      return (
        (t.$set = function (t) {
          "data" in t && n("data", (r = t.data));
        }),
        {
          data: r,
          editBookmark: function () {
            n("data", (r.visible = !1), r),
              o("edit-bookmark", { bookmarkId: r.bookmarkId });
          },
          deleteBookmark: function () {
            n("data", (r.visible = !1), r),
              o("delete-items", {
                items: [{ id: r.bookmarkId, type: "bookmark" }],
              });
          },
          moveBookmark: function () {
            n("data", (r.visible = !1), r),
              o("move-items", {
                items: [{ id: r.bookmarkId, type: "bookmark" }],
              });
          },
          copyUrl: function () {
            n("data", (r.visible = !1), r);
            var t = document.createElement("input");
            (t.style.position = "fixed"),
              (t.style.opacity = 0),
              (t.value = r.bookmarkUrl),
              document.body.appendChild(t),
              t.select(),
              document.execCommand("Copy"),
              document.body.removeChild(t);
          },
          openTabs: i,
          click_handler: function () {
            return i();
          },
          click_handler_1: function () {
            return i("blank");
          },
          click_handler_2: function () {
            return i("private");
          },
          clickoutside_handler: function () {
            n("data", (r.visible = !1), r);
          },
        }
      );
    }
    var gn = (function (t) {
      var e, n;
      function r(e) {
        var n;
        return (
          ut(
            (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })((n = t.call(this) || this)),
            e,
            mn,
            pn,
            g,
            { data: 0 }
          ),
          n
        );
      }
      return (
        (n = t),
        ((e = r).prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        (e.__proto__ = n),
        r
      );
    })(ft);
    function vn(t, e, n) {
      var r = Object.create(t);
      return (r.bookmark = e[n]), r;
    }
    function bn(t) {
      var e;
      return {
        c: function () {
          (e = w("h2")).textContent = "Bookmarks";
        },
        m: function (t, n) {
          x(t, e, n);
        },
        p: f,
        d: function (t) {
          t && _(e);
        },
      };
    }
    function yn(t) {
      var e,
        n,
        r,
        o,
        i,
        a,
        s,
        c =
          (void 0 !== t.$folders[t.$selectedFolderId]
            ? t.$folders[t.$selectedFolderId].title
            : "Bookmarks") + "";
      return {
        c: function () {
          (e = w("h2")),
            (n = A("Found ")),
            (r = A(t.searchCount)),
            (o = A(' results for "')),
            (i = A(t.$searchKeyword)),
            (a = A('" in ')),
            (s = A(c));
        },
        m: function (t, c) {
          x(t, e, c), y(e, n), y(e, r), y(e, o), y(e, i), y(e, a), y(e, s);
        },
        p: function (t, e) {
          t.searchCount && C(r, e.searchCount),
            t.$searchKeyword && C(i, e.$searchKeyword),
            (t.$folders || t.$selectedFolderId) &&
              c !==
                (c =
                  (void 0 !== e.$folders[e.$selectedFolderId]
                    ? e.$folders[e.$selectedFolderId].title
                    : "Bookmarks") + "") &&
              C(s, c);
        },
        d: function (t) {
          t && _(e);
        },
      };
    }
    function xn(t) {
      var e,
        n,
        r = t.bookmark.prefix + "";
      return {
        c: function () {
          (e = w("span")), (n = A(r)), T(e, "class", "prefix");
        },
        m: function (t, r) {
          x(t, e, r), y(e, n);
        },
        p: function (t, e) {
          t.filteredBookmarks && r !== (r = e.bookmark.prefix + "") && C(n, r);
        },
        d: function (t) {
          t && _(e);
        },
      };
    }
    function _n(t) {
      var e,
        n,
        r = t.bookmark.suffix + "";
      return {
        c: function () {
          (e = w("span")), (n = A(r)), T(e, "class", "suffix");
        },
        m: function (t, r) {
          x(t, e, r), y(e, n);
        },
        p: function (t, e) {
          t.filteredBookmarks && r !== (r = e.bookmark.suffix + "") && C(n, r);
        },
        d: function (t) {
          t && _(e);
        },
      };
    }
    function kn(t) {
      var e,
        n,
        r,
        o,
        i,
        a,
        s,
        c,
        l,
        u,
        f,
        d,
        h,
        m,
        g,
        v,
        b,
        k,
        O,
        E,
        M,
        I,
        j = t.bookmark.domain + "",
        D = t.bookmark.title + "",
        P = t.bookmark.url + "",
        F = t.bookmark.prefix && xn(t),
        R = t.bookmark.suffix && _n(t);
      function B() {
        for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (e = t).click_handler.apply(e, [t].concat(r));
      }
      function q() {
        for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (e = t).contextmenu_handler.apply(e, [t].concat(r));
      }
      return {
        c: function () {
          (e = w("li")),
            (n = w("div")),
            (r = w("img")),
            (s = S()),
            (c = w("p")),
            F && F.c(),
            (l = S()),
            (u = w("span")),
            (f = A(j)),
            (d = S()),
            R && R.c(),
            (h = S()),
            (m = w("h4")),
            (g = A(D)),
            (v = S()),
            (b = w("p")),
            (k = A(P)),
            (O = S()),
            T(r, "class", "favicon"),
            T(r, "id", (o = "icon-" + t.bookmark.id)),
            r.src !== (i = "chrome://favicon/" + t.bookmark.url) &&
              T(r, "src", i),
            T(r, "alt", (a = t.bookmark.title)),
            T(u, "class", "domain"),
            T(c, "class", "flex-text"),
            T(n, "class", "bookmark-card"),
            T(m, "class", "bookmark-title"),
            T(b, "class", "bookmark-url"),
            T(e, "class", "bookmark-item"),
            T(e, "title", (E = t.bookmark.title || t.bookmark.url)),
            T(e, "data-id", (M = t.bookmark.id)),
            T(e, "data-type", "bookmark"),
            (I = [
              $(e, "click", function () {
                B.apply(this, arguments);
              }),
              $(
                e,
                "contextmenu",
                L(function () {
                  q.apply(this, arguments);
                })
              ),
            ]);
        },
        m: function (t, o) {
          x(t, e, o),
            y(e, n),
            y(n, r),
            y(n, s),
            y(n, c),
            F && F.m(c, null),
            y(c, l),
            y(c, u),
            y(u, f),
            y(c, d),
            R && R.m(c, null),
            y(e, h),
            y(e, m),
            y(m, g),
            y(e, v),
            y(e, b),
            y(b, k),
            y(e, O);
        },
        p: function (n, s) {
          (t = s),
            n.filteredBookmarks &&
              o !== (o = "icon-" + t.bookmark.id) &&
              T(r, "id", o),
            n.filteredBookmarks &&
              r.src !== (i = "chrome://favicon/" + t.bookmark.url) &&
              T(r, "src", i),
            n.filteredBookmarks &&
              a !== (a = t.bookmark.title) &&
              T(r, "alt", a),
            t.bookmark.prefix
              ? F
                ? F.p(n, t)
                : ((F = xn(t)).c(), F.m(c, l))
              : F && (F.d(1), (F = null)),
            n.filteredBookmarks &&
              j !== (j = t.bookmark.domain + "") &&
              C(f, j),
            t.bookmark.suffix
              ? R
                ? R.p(n, t)
                : ((R = _n(t)).c(), R.m(c, null))
              : R && (R.d(1), (R = null)),
            n.filteredBookmarks && D !== (D = t.bookmark.title + "") && C(g, D),
            n.filteredBookmarks && P !== (P = t.bookmark.url + "") && C(k, P),
            n.filteredBookmarks &&
              E !== (E = t.bookmark.title || t.bookmark.url) &&
              T(e, "title", E),
            n.filteredBookmarks &&
              M !== (M = t.bookmark.id) &&
              T(e, "data-id", M);
        },
        d: function (t) {
          t && _(e), F && F.d(), R && R.d(), p(I);
        },
      };
    }
    function wn(t) {
      var e, n, r, o, i, a;
      function s(t, e) {
        return e.$searchKeyword ? yn : bn;
      }
      var c = s(0, t),
        l = c(t),
        u = new gn({ props: { data: t.contextMenuData } });
      u.$on("edit-bookmark", t.edit_bookmark_handler),
        u.$on("move-items", t.move_items_handler),
        u.$on("delete-items", t.delete_items_handler),
        u.$on("open-tabs", t.open_tabs_handler);
      for (var f = t.filteredBookmarks, d = [], h = 0; h < f.length; h += 1)
        d[h] = kn(vn(t, f, h));
      return {
        c: function () {
          (e = w("section")),
            l.c(),
            (n = S()),
            st(u.$$.fragment),
            (r = S()),
            (o = w("ul"));
          for (var a = 0; a < d.length; a += 1) d[a].c();
          T(o, "class", (i = "bookmarks-list layout-" + t.layout)),
            T(e, "id", "bookmarks"),
            T(e, "class", "bookmarks"),
            D(
              e,
              "hidden",
              t.filteredBookmarks.length <= 0 && !t.$searchKeyword
            );
        },
        m: function (i, s) {
          x(i, e, s), l.m(e, null), y(e, n), ct(u, e, null), y(e, r), y(e, o);
          for (var c = 0; c < d.length; c += 1) d[c].m(o, null);
          t.ul_binding(o), (a = !0);
        },
        p: function (t, r) {
          c === (c = s(0, r)) && l
            ? l.p(t, r)
            : (l.d(1), (l = c(r)) && (l.c(), l.m(e, n)));
          var h = {};
          if (
            (t.contextMenuData && (h.data = r.contextMenuData),
            u.$set(h),
            t.filteredBookmarks || t.bookmarkClickHandler || t.showContextMenu)
          ) {
            var p;
            for (f = r.filteredBookmarks, p = 0; p < f.length; p += 1) {
              var m = vn(r, f, p);
              d[p] ? d[p].p(t, m) : ((d[p] = kn(m)), d[p].c(), d[p].m(o, null));
            }
            for (; p < d.length; p += 1) d[p].d(1);
            d.length = f.length;
          }
          (!a ||
            (t.layout && i !== (i = "bookmarks-list layout-" + r.layout))) &&
            T(o, "class", i),
            (t.filteredBookmarks || t.$searchKeyword) &&
              D(
                e,
                "hidden",
                r.filteredBookmarks.length <= 0 && !r.$searchKeyword
              );
        },
        i: function (t) {
          a || (ot(u.$$.fragment, t), (a = !0));
        },
        o: function (t) {
          it(u.$$.fragment, t), (a = !1);
        },
        d: function (n) {
          n && _(e), l.d(), lt(u), k(d, n), t.ul_binding(null);
        },
      };
    }
    var An = 50;
    function Sn(t, e) {
      return t.timestamp <= e.timestamp ? 1 : -1;
    }
    function On(t, e) {
      return t.title.localeCompare(e.title);
    }
    function $n(t, e, n) {
      var r, o, i, a;
      b(t, gt, function (t) {
        return n("$bookmarks", (r = t));
      }),
        b(t, vt, function (t) {
          return n("$selectedFolderId", (o = t));
        }),
        b(t, bt, function (t) {
          return n("$searchKeyword", (i = t));
        }),
        b(t, pt, function (t) {
          return n("$folders", (a = t));
        });
      var s,
        c = e.order,
        l = e.layout,
        u = H(),
        f = r.length,
        d = An,
        h = [],
        p = 0;
      bt.subscribe(function () {
        n("limit", (d = 50)), s && s.scroll(0, 0);
      });
      var m,
        g = {
          visible: !1,
          bookmarkId: null,
          bookmarkUrl: null,
          posX: 0,
          posY: 0,
        },
        v = { left: 0, top: 0 };
      function y(t, e, r) {
        (v = m.getBoundingClientRect()),
          n(
            "contextMenuData",
            (g = {
              visible: !0,
              bookmarkId: e,
              bookmarkUrl: r,
              posX: t.clientX - v.left,
              posY: t.clientY - v.top + 32,
            })
          );
      }
      function x(t, e) {
        t.ctrlKey ||
          t.shiftKey ||
          t.metaKey ||
          u("open-tabs", { urls: [e], parentWindow: null });
      }
      q(function () {
        s = document.querySelector(".main");
        var t = document.querySelector(".bookmarks-list");
        s.addEventListener("scroll", function () {
          if (!(d >= f)) {
            var e = t.clientHeight - s.clientHeight;
            s.scrollTop > e && n("limit", (d += 50));
          }
        });
        var e = {};
        function r(t, n) {
          if ((void 0 === n && (n = !1), "list" !== l)) {
            var r = t.querySelector(".bookmark-card");
            (function (t, n) {
              return new Promise(function (r, o) {
                return void 0 === e[t.id] || n
                  ? dn.a
                      .from(t.src)
                      .getSwatches()
                      .then(function (n) {
                        if (!n.Vibrant) return o();
                        var i = n.Vibrant.getHex();
                        return (e[t.id] = i), r(i);
                      })
                  : r(e[t.id]);
              });
            })(r.querySelector("img"), n)
              .then(function (t) {
                r.style.background = t;
              })
              .catch(function () {
                r.style.color = "#666";
              });}
        }
        t.querySelectorAll(".bookmark-item").forEach(r),
          new MutationObserver(function (t) {
            "list" !== l &&
              t.forEach(function (t) {
                if ("characterData" === t.type) {
                  var e = t.target.parentNode.closest(".bookmark-item");
                  e && r(e, !0);
                }
                t.addedNodes.forEach(function (t) {
                  1 === t.nodeType &&
                    t.classList.contains("bookmark-item") &&
                    r(t);
                });
              });
          }).observe(t, { childList: !0, subtree: !0, characterData: !0 });
      });
      return (
        (t.$set = function (t) {
          "order" in t && n("order", (c = t.order)),
            "layout" in t && n("layout", (l = t.layout));
        }),
        (t.$$.update = function (t) {
          void 0 === t &&
            (t = {
              $bookmarks: 1,
              $selectedFolderId: 1,
              $searchKeyword: 1,
              order: 1,
              limit: 1,
            }),
            (t.$bookmarks ||
              t.$selectedFolderId ||
              t.$searchKeyword ||
              t.order ||
              t.limit) &&
              n(
                "filteredBookmarks",
                (h = r
                  .filter(function (t) {
                    return (
                      t.ancestors.includes(o) &&
                      ("" === i || t.title.includes(i) || t.url.includes(i))
                    );
                  })
                  .sort(
                    "recent" === c
                      ? Sn
                      : "name" === c
                      ? On
                      : function () {
                          return 0;
                        }
                  )
                  .slice(0, d))
              ),
            (t.$searchKeyword || t.$bookmarks || t.$selectedFolderId) &&
              n(
                "searchCount",
                (p = i
                  ? r.filter(function (t) {
                      return (
                        t.ancestors.includes(o) &&
                        (t.title.includes(i) || t.url.includes(i))
                      );
                    }).length
                  : 0)
              );
        }),
        {
          order: c,
          layout: l,
          filteredBookmarks: h,
          searchCount: p,
          contextMenuData: g,
          bookmarksListElement: m,
          showContextMenu: y,
          bookmarkClickHandler: x,
          $selectedFolderId: o,
          $searchKeyword: i,
          $folders: a,
          edit_bookmark_handler: function (e) {
            U(t, e);
          },
          move_items_handler: function (e) {
            U(t, e);
          },
          delete_items_handler: function (e) {
            U(t, e);
          },
          open_tabs_handler: function (e) {
            U(t, e);
          },
          click_handler: function (t, e) {
            return x(e, t.bookmark.url);
          },
          contextmenu_handler: function (t, e) {
            var n = t.bookmark;
            y(e, n.id, n.url);
          },
          ul_binding: function (t) {
            z[t ? "unshift" : "push"](function () {
              n("bookmarksListElement", (m = t));
            });
          },
        }
      );
    }
    var Ln = (function (t) {
      var e, n;
      function r(e) {
        var n;
        return (
          ut(
            (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })((n = t.call(this) || this)),
            e,
            $n,
            wn,
            g,
            { order: 0, layout: 0 }
          ),
          n
        );
      }
      return (
        (n = t),
        ((e = r).prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        (e.__proto__ = n),
        r
      );
    })(ft);
    function Tn(t) {
      var e,
        n = new un({});
      return (
        n.$on("rename-folder", t.rename_folder_handler),
        n.$on("move-items", t.move_items_handler_1),
        n.$on("delete-items", t.delete_items_handler),
        n.$on("open-tabs", t.open_tabs_handler_1),
        {
          c: function () {
            st(n.$$.fragment);
          },
          m: function (t, r) {
            ct(n, t, r), (e = !0);
          },
          i: function (t) {
            e || (ot(n.$$.fragment, t), (e = !0));
          },
          o: function (t) {
            it(n.$$.fragment, t), (e = !1);
          },
          d: function (t) {
            lt(n, t);
          },
        }
      );
    }
    function Cn(t) {
      var e,
        n,
        r,
        o,
        i,
        a = new Ye({});
      a.$on("open-sidebar", t.open_sidebar_handler);
      var s = new rn({
        props: {
          layout: t.layout,
          order: t.order,
          selectedItems: t.selectedItems,
        },
      });
      s.$on("change-layout", t.changeLayout),
        s.$on("change-order", t.changeOrder),
        s.$on("move-items", t.move_items_handler),
        s.$on("delete-items", t.deleteSelectedItems),
        s.$on("open-tabs", t.open_tabs_handler),
        s.$on("clear-selection", t.clearSelection);
      var c = !t.$searchKeyword && Tn(t),
        l = new Ln({ props: { order: t.order, layout: t.layout } });
      return (
        l.$on("edit-bookmark", t.edit_bookmark_handler),
        l.$on("move-items", t.move_items_handler_2),
        l.$on("delete-items", t.delete_items_handler_1),
        l.$on("open-tabs", t.open_tabs_handler_2),
        {
          c: function () {
            (e = w("main")),
              st(a.$$.fragment),
              (n = S()),
              st(s.$$.fragment),
              (r = S()),
              c && c.c(),
              (o = S()),
              st(l.$$.fragment),
              T(e, "class", "main");
          },
          m: function (u, f) {
            x(u, e, f),
              ct(a, e, null),
              y(e, n),
              ct(s, e, null),
              y(e, r),
              c && c.m(e, null),
              y(e, o),
              ct(l, e, null),
              t.main_binding(e),
              (i = !0);
          },
          p: function (t, n) {
            var r = {};
            t.layout && (r.layout = n.layout),
              t.order && (r.order = n.order),
              t.selectedItems && (r.selectedItems = n.selectedItems),
              s.$set(r),
              n.$searchKeyword
                ? c &&
                  (nt(),
                  it(c, 1, 1, function () {
                    c = null;
                  }),
                  rt())
                : c
                ? ot(c, 1)
                : ((c = Tn(n)).c(), ot(c, 1), c.m(e, o));
            var i = {};
            t.order && (i.order = n.order),
              t.layout && (i.layout = n.layout),
              l.$set(i);
          },
          i: function (t) {
            i ||
              (ot(a.$$.fragment, t),
              ot(s.$$.fragment, t),
              ot(c),
              ot(l.$$.fragment, t),
              (i = !0));
          },
          o: function (t) {
            it(a.$$.fragment, t),
              it(s.$$.fragment, t),
              it(c),
              it(l.$$.fragment, t),
              (i = !1);
          },
          d: function (n) {
            n && _(e), lt(a), lt(s), c && c.d(), lt(l), t.main_binding(null);
          },
        }
      );
    }
    function En(t, e, n) {
      var r;
      b(t, bt, function (t) {
        return n("$searchKeyword", (r = t));
      });
      var o,
        i,
        a = H(),
        s = localStorage.getItem("layout") || "list",
        c = localStorage.getItem("order") || "recent",
        l = [];
      function u() {
        o.getSelection().forEach(function (t) {
          return t.classList.remove("selected");
        }),
          o.clearSelection(),
          n("selectedItems", (l = []));
      }
      return (
        q(function () {
          (o = We.a
            .create({
              class: "selection",
              selectables: [".bookmark-item", ".folder-item"],
              boundaries: [".main"],
              selectionAreaContainer: "body",
              singleClick: !0,
            })
            .on("start", function (t) {
              var e = t.oe,
                n = t.inst,
                r = t.selected;
              e.ctrlKey ||
                e.metaKey ||
                e.shiftKey ||
                (r.forEach(function (t) {
                  t.classList.remove("selected"), n.removeFromSelection(t);
                }),
                n.clearSelection());
            })
            .on("move", function (t) {
              var e = t.oe,
                n = t.changed,
                r = n.removed,
                o = n.added;
              ("mouseup" !== e.type || e.ctrlKey || e.shiftKey || e.metaKey) &&
                (o.forEach(function (t) {
                  return t.classList.add("selected");
                }),
                r.forEach(function (t) {
                  return t.classList.remove("selected");
                }));
            })
            .on("stop", function (t) {
              t.inst.keepSelection();
              var e = [];
              o.getSelection().forEach(function (t) {
                if (t.classList.contains("selected")) {
                  var n = t.dataset,
                    r = n.id,
                    i = n.type;
                  e.push({ id: parseInt(r, 10), type: i });
                } else o.removeFromSelection(t);
              }),
                n("selectedItems", (l = e));
            })),
            vt.subscribe(u),
            bt.subscribe(u);
        }),
        document.addEventListener("mousedown", function (t) {
          t.offsetX < i.scrollWidth &&
            !(function (t) {
              for (var e = t; e; ) {
                if (
                  e.classList.contains("bookmark-item") ||
                  e.classList.contains("folder-item") ||
                  e.classList.contains("tree-item-menu") ||
                  e.classList.contains("selected-items-buttons")
                )
                  return !0;
                e = e.parentNode !== document ? e.parentNode : null;
              }
              return !1;
            })(t.target) &&
            u();
        }),
        {
          layout: s,
          order: c,
          selectedItems: l,
          changeLayout: function (t) {
            n("layout", (s = t.detail.layout)),
              localStorage.setItem("layout", s);
          },
          changeOrder: function (t) {
            n("order", (c = t.detail.order)), localStorage.setItem("order", c);
          },
          clearSelection: u,
          mainElement: i,
          deleteSelectedItems: function (t) {
            u(), a("delete-items", Object.assign({}, t.detail));
          },
          $searchKeyword: r,
          open_sidebar_handler: function (e) {
            U(t, e);
          },
          move_items_handler: function (e) {
            U(t, e);
          },
          open_tabs_handler: function (e) {
            U(t, e);
          },
          rename_folder_handler: function (e) {
            U(t, e);
          },
          move_items_handler_1: function (e) {
            U(t, e);
          },
          delete_items_handler: function (e) {
            U(t, e);
          },
          open_tabs_handler_1: function (e) {
            U(t, e);
          },
          edit_bookmark_handler: function (e) {
            U(t, e);
          },
          move_items_handler_2: function (e) {
            U(t, e);
          },
          delete_items_handler_1: function (e) {
            U(t, e);
          },
          open_tabs_handler_2: function (e) {
            U(t, e);
          },
          main_binding: function (t) {
            z[t ? "unshift" : "push"](function () {
              n("mainElement", (i = t));
            });
          },
        }
      );
    }
    var Mn = (function (t) {
      var e, n;
      function r(e) {
        var n;
        return (
          ut(
            (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })((n = t.call(this) || this)),
            e,
            En,
            Cn,
            g,
            {}
          ),
          n
        );
      }
      return (
        (n = t),
        ((e = r).prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        (e.__proto__ = n),
        r
      );
    })(ft);
    function In(t) {
      var e,
        n = new Et({ props: { type: t.dialogType, item: t.dialogItem } });
      return (
        n.$on("save", t.onDialogSave),
        n.$on("cancel", t.cancel_handler),
        {
          c: function () {
            st(n.$$.fragment);
          },
          m: function (t, r) {
            ct(n, t, r), (e = !0);
          },
          p: function (t, e) {
            var r = {};
            t.dialogType && (r.type = e.dialogType),
              t.dialogItem && (r.item = e.dialogItem),
              n.$set(r);
          },
          i: function (t) {
            e || (ot(n.$$.fragment, t), (e = !0));
          },
          o: function (t) {
            it(n.$$.fragment, t), (e = !1);
          },
          d: function (t) {
            lt(n, t);
          },
        }
      );
    }
    function jn(t) {
      var e,
        n = new zt({ props: { items: t.moveDialogItems } });
      return (
        n.$on("moved", t.onItemsMoved),
        n.$on("cancel", t.cancel_handler_1),
        {
          c: function () {
            st(n.$$.fragment);
          },
          m: function (t, r) {
            ct(n, t, r), (e = !0);
          },
          p: function (t, e) {
            var r = {};
            t.moveDialogItems && (r.items = e.moveDialogItems), n.$set(r);
          },
          i: function (t) {
            e || (ot(n.$$.fragment, t), (e = !0));
          },
          o: function (t) {
            it(n.$$.fragment, t), (e = !1);
          },
          d: function (t) {
            lt(n, t);
          },
        }
      );
    }
    function Dn(t) {
      var e,
        n,
        r,
        o,
        i,
        a = t.dialogVisible && In(t),
        s = t.moveDialogVisible && jn(t),
        c = new Ve({ props: { open: t.sidebarOpen } });
      c.$on("close", t.close_handler),
        c.$on("rename-folder", t.renameFolder),
        c.$on("move-items", t.showMoveDialog),
        c.$on("delete-items", t.deleteItems),
        c.$on("open-tabs", Fn),
        c.$on("add-bookmark", t.add_bookmark_handler),
        c.$on("add-folder", t.add_folder_handler);
      var l = new Mn({});
      return (
        l.$on("open-sidebar", t.open_sidebar_handler),
        l.$on("rename-folder", t.renameFolder),
        l.$on("edit-bookmark", t.editBookmark),
        l.$on("move-items", t.showMoveDialog),
        l.$on("delete-items", t.deleteItems),
        l.$on("open-tabs", Fn),
        {
          c: function () {
            a && a.c(),
              (e = S()),
              s && s.c(),
              (n = S()),
              st(c.$$.fragment),
              (r = S()),
              (o = w("div")),
              st(l.$$.fragment),
              T(o, "class", "container");
          },
          m: function (t, u) {
            a && a.m(t, u),
              x(t, e, u),
              s && s.m(t, u),
              x(t, n, u),
              ct(c, t, u),
              x(t, r, u),
              x(t, o, u),
              ct(l, o, null),
              (i = !0);
          },
          p: function (t, r) {
            r.dialogVisible
              ? a
                ? (a.p(t, r), ot(a, 1))
                : ((a = In(r)).c(), ot(a, 1), a.m(e.parentNode, e))
              : a &&
                (nt(),
                it(a, 1, 1, function () {
                  a = null;
                }),
                rt()),
              r.moveDialogVisible
                ? s
                  ? (s.p(t, r), ot(s, 1))
                  : ((s = jn(r)).c(), ot(s, 1), s.m(n.parentNode, n))
                : s &&
                  (nt(),
                  it(s, 1, 1, function () {
                    s = null;
                  }),
                  rt());
            var o = {};
            t.sidebarOpen && (o.open = r.sidebarOpen), c.$set(o);
          },
          i: function (t) {
            i ||
              (ot(a),
              ot(s),
              ot(c.$$.fragment, t),
              ot(l.$$.fragment, t),
              (i = !0));
          },
          o: function (t) {
            it(a), it(s), it(c.$$.fragment, t), it(l.$$.fragment, t), (i = !1);
          },
          d: function (t) {
            a && a.d(t),
              t && _(e),
              s && s.d(t),
              t && _(n),
              lt(c, t),
              t && _(r),
              t && _(o),
              lt(l);
          },
        }
      );
    }
    function Pn(t, e) {
      pt.update(function (n) {
        for (; 0 !== t; ) (n[t].bookmarksCount += e), (t = n[t].parentId);
        return n;
      });
    }
    function Fn(t) {
      var e = t.detail,
        n = e.urls,
        r = e.parentWindow;
      o.a.runtime.sendMessage({
        action: "open-tabs",
        urls: n,
        parentWindow: r,
      });
    }
    function Rn(t, e, n) {
      var r, i;
      b(t, pt, function (t) {
        return n("$folders", (r = t));
      }),
        b(t, gt, function (t) {
          return n("$bookmarks", (i = t));
        });
      var a = e.data;
      pt.set(a.folders), mt.set(a.foldersTree), gt.set(a.bookmarks);
      var s = !1,
        c = "bookmark",
        l = null,
        u = !1,
        f = [],
        d = !0;
      function h(t, e) {
        void 0 === e && (e = null),
          n("dialogType", (c = t)),
          n("dialogItem", (l = e)),
          n("dialogVisible", (s = !0));
      }
      return (
        (t.$set = function (t) {
          "data" in t && n("data", (a = t.data));
        }),
        {
          data: a,
          dialogVisible: s,
          dialogType: c,
          dialogItem: l,
          moveDialogVisible: u,
          moveDialogItems: f,
          sidebarOpen: d,
          showDialog: h,
          renameFolder: function (t) {
            var e = t.detail.folderId;
            h("folder", { id: e, title: r[e].title });
          },
          editBookmark: function (t) {
            var e = t.detail.bookmarkId,
              n = i.find(function (t) {
                return t.id === e;
              });
            h("bookmark", { id: e, title: n.title, url: n.url });
          },
          onDialogSave: function (t) {
            n("dialogVisible", (s = !1));
            var e,
              o,
              i,
              a,
              c,
              l,
              u = t.detail,
              f = u.type,
              d = u.action,
              h = {
                id: parseInt(t.detail.id, 10),
                parentId: parseInt(t.detail.parentId, 10),
                title: t.detail.title,
              };
            "folder" === f && "create" === d
              ? ((o = (e = h).id),
                (i = e.parentId),
                (a = e.title),
                (c = r[i]),
                ((l = {})[o] = { id: o, title: a }),
                mt.update(function (t) {
                  return yt.addItem(t, [].concat(c.ancestors, [i]), l), t;
                }),
                pt.update(function (t) {
                  return (
                    (t[o] = {
                      id: o,
                      title: a,
                      bookmarksCount: 0,
                      parentId: i,
                      ancestors: [].concat(c.ancestors, [i]),
                    }),
                    t
                  );
                }))
              : "folder" === f && "update" === d
              ? (function (t) {
                  var e = t.id,
                    n = t.parentId,
                    o = t.title,
                    i = r[n],
                    a = {};
                  (a[e] = { id: e, title: o }),
                    mt.update(function (t) {
                      return (
                        yt.updateItem(t, [].concat(i.ancestors, [n]), a), t
                      );
                    }),
                    pt.update(function (t) {
                      return (
                        (t[e] = {
                          id: e,
                          title: o,
                          bookmarksCount: 0,
                          parentId: n,
                          ancestors: [].concat(i.ancestors, [n]),
                        }),
                        t
                      );
                    });
                })(h)
              : "bookmark" === f && "create" === d
              ? ((h.url = t.detail.url),
                (function (t) {
                  var e = t.id,
                    n = t.parentId,
                    o = r[n];
                  gt.update(function (r) {
                    var i = new URL(t.url).hostname.split("."),
                      a = i.pop(),
                      s = i.pop(),
                      c = i.pop() || null;
                    return (
                      void 0 === s && ((s = a), (a = null)),
                      r.push({
                        id: e,
                        title: t.title,
                        url: t.url,
                        prefix: c,
                        domain: s,
                        suffix: a,
                        timestamp: t.dateAdded,
                        parentId: n,
                        ancestors: [].concat(o.ancestors, [n]),
                      }),
                      r
                    );
                  }),
                    Pn(n, 1);
                })(h))
              : "bookmark" === f &&
                "update" === d &&
                ((h.url = t.detail.url),
                (function (t) {
                  var e = t.id;
                  gt.update(function (n) {
                    var r = n.findIndex(function (t) {
                        return t.id === e;
                      }),
                      o = new URL(t.url).hostname.split("."),
                      i = o.pop(),
                      a = o.pop(),
                      s = o.pop() || null;
                    return (
                      void 0 === a && ((a = i), (i = null)),
                      (n[r].title = t.title),
                      (n[r].url = t.url),
                      (n[r].prefix = s),
                      (n[r].domain = a),
                      (n[r].suffix = i),
                      n
                    );
                  });
                })(h));
          },
          deleteItems: function (t) {
            if (window.confirm("Are you sure?")) {
              var e,
                n = t.detail.items,
                i = [],
                a = [];
              n.forEach(function (t) {
                "folder" === t.type
                  ? i.push(t.id)
                  : "bookmark" === t.type && a.push(t.id);
              }),
                a.length > 0 &&
                  ((e = a),
                  gt.update(function (t) {
                    return (
                      e.forEach(function (e) {
                        o.a.bookmarks.remove(e.toString());
                        var n = t.findIndex(function (t) {
                          return t.id === e;
                        });
                        Pn(t[n].parentId, -1), t.splice(n, 1);
                      }),
                      t
                    );
                  })),
                i.length > 0 &&
                  (function (t) {
                    t.forEach(function (t) {
                      return o.a.bookmarks.removeTree(t.toString());
                    }),
                      mt.update(function (e) {
                        return (
                          t.forEach(function (t) {
                            yt.deleteItem(e, [].concat(r[t].ancestors), t);
                          }),
                          e
                        );
                      }),
                      pt.update(function (e) {
                        return (
                          t.forEach(function (t) {
                            for (
                              var n = e[t].parentId, r = e[t].bookmarksCount;
                              0 !== n;

                            )
                              (e[n].bookmarksCount -= r), (n = e[n].parentId);
                            delete e[t];
                          }),
                          e
                        );
                      }),
                      gt.update(function (e) {
                        return (
                          t.forEach(function (t) {
                            for (
                              var n = e.findIndex(function (e) {
                                return e.ancestors.includes(t);
                              });
                              -1 !== n;

                            )
                              e.splice(n, 1),
                                (n = e.findIndex(function (e) {
                                  return e.ancestors.includes(t);
                                }));
                          }),
                          e
                        );
                      });
                  })(i);
            }
          },
          showMoveDialog: function (t) {
            n("moveDialogItems", (f = t.detail.items)),
              n("moveDialogVisible", (u = !0));
          },
          onItemsMoved: function (t) {
            n("moveDialogVisible", (u = !1));
            var e = t.detail,
              o = e.items,
              i = e.parentId,
              a = [],
              s = [];
            o.forEach(function (t) {
              "folder" === t.type
                ? a.push(t.id)
                : "bookmark" === t.type && s.push(t.id);
            }),
              s.length > 0 &&
                (function (t, e) {
                  gt.update(function (n) {
                    return (
                      t.forEach(function (t) {
                        var o = n.findIndex(function (e) {
                          return e.id === t;
                        });
                        Pn(n[o].parentId, -1),
                          (n[o].parentId = e),
                          (n[o].ancestors = [].concat(r[e].ancestors, [e])),
                          Pn(e, 1);
                      }),
                      n
                    );
                  });
                })(s, i),
              a.length > 0 &&
                (function (t, e) {
                  var n = r[e];
                  mt.update(function (o) {
                    return (
                      t.forEach(function (t) {
                        var i = r[t],
                          a = yt.getItem(o, [].concat(i.ancestors), t),
                          s = {};
                        (s[t] = a),
                          yt.deleteItem(o, [].concat(i.ancestors), t),
                          yt.addItem(o, [].concat(n.ancestors, [e]), s);
                      }),
                      o
                    );
                  }),
                    pt.update(function (r) {
                      return (
                        t.forEach(function (t) {
                          for (
                            var o = r[t].bookmarksCount, i = r[t].parentId;
                            0 !== i;

                          )
                            (r[i].bookmarksCount -= o), (i = r[i].parentId);
                          for (var a = e; 0 !== a; )
                            (r[a].bookmarksCount += o), (a = r[a].parentId);
                          (r[t].parentId = e),
                            (r[t].ancestors = [].concat(n.ancestors, [e]));
                        }),
                        r
                      );
                    }),
                    gt.update(function (e) {
                      return (
                        t.forEach(function (t) {
                          e.forEach(function (e) {
                            e.ancestors.includes(t) &&
                              (e.ancestors = [].concat(
                                r[t].ancestors,
                                e.ancestors.slice(r[t].ancestors.length)
                              ));
                          });
                        }),
                        e
                      );
                    });
                })(a, i);
          },
          cancel_handler: function () {
            n("dialogVisible", (s = !1));
          },
          cancel_handler_1: function () {
            n("moveDialogVisible", (u = !1));
          },
          close_handler: function () {
            n("sidebarOpen", (d = !1));
          },
          add_bookmark_handler: function () {
            return h("bookmark");
          },
          add_folder_handler: function () {
            return h("folder");
          },
          open_sidebar_handler: function () {
            n("sidebarOpen", (d = !0));
          },
        }
      );
    }
    var Bn = (function (t) {
      var e, n;
      function r(e) {
        var n;
        return (
          ut(
            (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })((n = t.call(this) || this)),
            e,
            Rn,
            Dn,
            g,
            { data: 0 }
          ),
          n
        );
      }
      return (
        (n = t),
        ((e = r).prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        (e.__proto__ = n),
        r
      );
    })(ft);
    o.a.bookmarks.getTree().then(function (t) {
      var e = t[0];
      new Bn({
        target: document.getElementById("app"),
        props: { data: i(e.children) },
      });
    });
  },
]);

