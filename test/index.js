/*!
 * 
 * ap/v1.14.2-beta.4.2
 * Wed Aug 11 2021 11:52:31 GMT+0800 (China Standard Time)
 * 
 */
var my = function(e) {
    var t = {};
    function n(a) {
        if (t[a])
            return t[a].exports;
        var r = t[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(r.exports, r, r.exports, n),
        r.l = !0,
        r.exports
    }
    return n.m = e,
    n.c = t,
    n.d = function(e, t, a) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var a = Object.create(null);
        if (n.r(a),
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var r in e)
                n.d(a, r, function(t) {
                    return e[t]
                }
                .bind(null, r));
        return a
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 1)
}([function(e, t) {
    function n() {
        return e.exports = n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0,
        n.apply(this, arguments)
    }
    e.exports = n,
    e.exports.default = e.exports,
    e.exports.__esModule = !0
}
, function(e, t, n) {
    "use strict";
    n.r(t);
    var a = n(0)
      , r = n.n(a);
    var o = function(e) {
        return e && "object" == typeof e ? Object.keys(e) : []
    };
    function i(e, t) {
        var n, a, r, o;
        return "%s" === e ? t = "object" == typeof (o = t) ? JSON.stringify(o) : o + "" : "%c" === e ? (0 === (r = "" + (a = t)).indexOf("#") && (r = r.substr(1)),
        3 === r.length && (r = r.replace(/(.)/g, "$1$1")),
        r = parseInt(r, 16),
        isNaN(r) && console.error(a + " is invalid hex color."),
        t = r) : "%b" === e ? ("string" == typeof (n = t) && (n = n.replace(/^data:(\/|\w|\-|\.)+;base64,/i, "")),
        t = n) : "%d" === e ? t = parseInt(t, 10) : "%f" === e && (t = parseFloat(t)),
        t
    }
    function c(e, t, n) {
        var a;
        return n = n || {},
        o(t).forEach((function(r) {
            var o, c, l, s = t[r];
            c = ((o = s) || "").match(/(\w+)(%\w)$/i),
            l = {
                k: o
            },
            c && (l.k = c[1],
            l.t = c[2]),
            void 0 !== (s = (a = l).k) && (r in e || r in n) && void 0 === e[s] && (e[s] = i(a.t, void 0 === n[r] ? e[r] : n[r]),
            s !== r && delete e[r])
        }
        )),
        e
    }
    function l(e, t) {
        void 0 === e && (e = {});
        var n = e
          , a = n.complete
          , r = n.success
          , o = n.fail;
        t && t.error ? o && o(t) : r && r(t),
        a && a(t)
    }
    var s = {
        b: function(e) {
            c(e, {
                content: "message%s",
                buttonText: "button%s"
            })
        }
    }
      , u = {
        b: function(e) {
            c(e, {
                content: "text%s"
            })
        }
    }
      , d = {
        b: function(e) {
            e.count = e.count || 1,
            "string" == typeof e.sourceType && (e.sourceType = [e.sourceType])
        },
        a: function(e) {
            c(e, {
                errorCode: "error",
                errorDesc: "errorMessage",
                localIds: "apFilePaths",
                tempFilePaths: "apFilePaths"
            }),
            "string" == typeof e.apFilePaths && (e.apFilePaths = JSON.parse(e.apFilePaths)),
            e.tempFilePaths = e.apFilePaths
        }
    }
      , p = {
        m: "imageViewer",
        b: function(e) {
            c(e, {
                current: "init%d",
                enableSavePhoto: "enablesavephoto"
            }),
            e.init || (e.init = 0),
            e.images = [],
            (e.urls || []).forEach((function(t) {
                e.images.push({
                    u: t
                })
            }
            )),
            delete e.urls
        }
    }
      , f = navigator.userAgent || navigator.swuserAgent
      , g = f.match(/AlipayClient\/(\d+\.\d+\.\d+)/)
      , y = (g && g[1],
    f.indexOf("Android") > -1);
    f.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    f.indexOf("AlipayIDE");
    var m = function() {
        return {
            setStorage: {
                m: "setTinyLocalStorage",
                b: function(e) {
                    e.value = JSON.stringify({
                        APDataStorage: e.data
                    }),
                    e.data = e.value,
                    e.key = String(e.key),
                    e.type = "user"
                }
            },
            getStorage: {
                m: "getTinyLocalStorage",
                b: function(e) {
                    e.key = String(e.key),
                    e.type = "user"
                },
                a: function(e) {
                    if (11 === e.error && (e.data = null,
                    delete e.error,
                    delete e.errorMessage,
                    delete e.success),
                    e.data) {
                        var t = JSON.parse(e.data);
                        e.data = t.APDataStorage
                    }
                }
            },
            removeStorage: {
                m: "removeTinyLocalStorage",
                b: function(e) {
                    e.key = String(e.key),
                    e.type = "user"
                }
            },
            clearStorage: {
                m: "clearTinyLocalStorage",
                b: function(e) {
                    e.type = "user"
                }
            },
            getStorageInfo: {
                m: "getTinyLocalStorageInfo"
            }
        }
    }
      , v = new Promise((function(e) {
        window.AlipayJSBridge ? e() : document.addEventListener("AlipayJSBridgeReady", e)
    }
    ))
      , b = self
      , h = r()({
        alert: s,
        showLoading: u,
        hideLoading: {},
        previewImage: p,
        chooseImage: d,
        getNetworkType: {
            a: function(e) {
                e.networkInfo && (e.networkType = e.networkInfo.toUpperCase())
            }
        },
        openLocation: {
            b: function(e) {
                e.scale = e.scale || 15,
                e.hidden = "1"
            }
        },
        openTaobao: v.then((function() {
            return e = function() {
                return b.AlipayJSBridge.call
            }
            ,
            {
                d: function(t) {
                    var n = e();
                    n("isInstalledApp", {
                        packagename: "com.taobao.taobao",
                        scheme: "taobao://"
                    }, (function(e) {
                        !function(e, t, n, a) {
                            "installed"in a && (a.installed ? n ? e("getLoginToken", {}, (function(n) {
                                var a = null
                                  , r = !1;
                                "token"in n && "" !== n.token && (a = n.token,
                                r = n.encrypted),
                                a && (t += "&loginToken=" + a + "&tokenEncrypted=" + r),
                                e("openInBrowser", {
                                    url: t
                                })
                            }
                            )) : e("openInBrowser", {
                                url: t
                            }) : e("openInBrowser", {
                                url: "https://h5.m.taobao.com/bcec/downloadTaobao.html"
                            }))
                        }(n, t.url, t.login, e)
                    }
                    ))
                }
            };
            var e
        }
        )),
        tradePay: {},
        getLocation: v.then((function() {
            return e = b.AlipayJSBridge.startupParams.parentAppId,
            {
                m: "getCurrentLocation",
                b: function(t) {
                    c(t, {
                        accuracy: "horizontalAccuracy",
                        type: "requestType"
                    }),
                    t.requestType || (t.requestType = 0,
                    t.useDefault = !0),
                    t.bizType = e,
                    y && (void 0 === t.isHighAccuracy && (t.isHighAccuracy = !0),
                    void 0 === t.isNeedSpeed && (t.isNeedSpeed = !0))
                },
                a: function(e) {
                    c(e, {
                        citycode: "cityCode",
                        adcode: "adCode"
                    }),
                    !e.city && e.province && (e.city = e.province),
                    e.latitude && (e.latitude += ""),
                    e.longitude && (e.longitude += ""),
                    e.accuracy && (e.accuracy += "",
                    e.horizontalAccuracy = e.accuracy),
                    delete e.speed
                }
            };
            var e
        }
        ))
    }, m())
      , S = new Promise((function(e) {
        window.AlipayJSBridge ? e() : document.addEventListener("AlipayJSBridgeReady", e)
    }
    ))
      , w = 0
      , A = {}
      , P = self
      , k = function() {}
      , T = function(e, t, n) {
        var a = !1 !== n.callback
          , o = function(e, t, n) {
            var a = r()({}, e)
              , o = {
                success: a.success || k,
                fail: a.fail || k,
                complete: a.complete || k
            };
            return delete a.success,
            delete a.fail,
            delete a.complete,
            n && n.b && n.b(a),
            {
                newParam: a,
                callbackParam: o,
                apiName: n.m ? n.m : t
            }
        }(e, t, n);
        if (n.d)
            n.d(o.newParam);
        else if (void 0 === e)
            P.AlipayJSBridge.call(o.apiName);
        else {
            var i = P.AlipayJSBridge.call.bind(P.AlipayJSBridge, o.apiName, o.newParam);
            a ? i((function(e) {
                var t = e;
                n.a && n.a(t),
                l(o.callbackParam, t)
            }
            )) : i()
        }
    }
      , O = {
        call: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            S.then((function() {
                var e;
                (e = P.AlipayJSBridge).call.apply(e, t)
            }
            ))
        },
        postMessage: function(e) {
            S.then((function() {
                var t = {
                    type: "message",
                    detail: e
                };
                P.AlipayJSBridge.call("postWebViewMessage", t)
            }
            ))
        },
        getEnv: function(e) {
            -1 === navigator.userAgent.indexOf("Nebula") ? e && e({
                miniprogram: !1
            }) : S.then((function() {
                P.AlipayJSBridge.call("getEmbedWebViewEnv", (function(t) {
                    e && e(t)
                }
                ))
            }
            ))
        },
        startShare: function() {
            P.AlipayJSBridge.call("postWebViewMessage", {
                type: "webViewShare"
            })
        }
    };
    ["navigateTo", "navigateBack", "switchTab", "reLaunch", "redirectTo"].forEach((function(e) {
        O[e] = function(t) {
            S.then((function() {
                var n = r()({}, t);
                (n.success || n.complete || n.fail) && (A[++w] = r()({}, n),
                delete n.success,
                delete n.complete,
                delete n.fail),
                P.AlipayJSBridge.call("postWebViewMessage", {
                    type: e,
                    callback: w,
                    param: n
                })
            }
            ))
        }
    }
    )),
    o(h).forEach((function(e) {
        O[e] = function(t) {
            S.then((function() {
                var n = h[e] || {};
                n instanceof Promise ? n.then((function(n) {
                    T(t, e, n)
                }
                )) : T(t, e, n)
            }
            ))
        }
    }
    )),
    document.addEventListener("onToWebViewMessage", (function(e) {
        var t = e.data
          , n = t.callback
          , a = t.res;
        "response" === a.type ? A[n] && (l(A[n], a.res),
        delete A[n]) : "message" === a.type && O.onMessage && O.onMessage(JSON.parse(a.data))
    }
    ));
    t.default = O
}
]).default;
