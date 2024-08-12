import * as ee from "react";
import { forwardRef as _n, useContext as Rn, Children as zt, cloneElement as Vt, useState as Ue, useRef as Cn, useCallback as at } from "react";
const Y = (e) => {
  var C, s, T, _, M, y, E, w, P, f, j, $, xe, se, Ee, Se, fe, K, H, Z, de, me, ie, ve, ce, he, be, ge, we, _e, oe, ue, ne, le, re;
  const { direction: t, reverse: r, gap: a, crossGap: i, border: c, borderRadius: d, axis: l } = e, { solid: m, position: b = "all", color: o, shape: h = "solid" } = c ?? {};
  return e ? {
    width: e == null ? void 0 : e.width,
    minWidth: e == null ? void 0 : e.minWidth,
    maxWidth: e == null ? void 0 : e.maxWidth,
    height: e == null ? void 0 : e.height,
    minHeight: e == null ? void 0 : e.minHeight,
    maxHeight: e == null ? void 0 : e.maxHeight,
    //
    position: e.positionType,
    top: (C = e == null ? void 0 : e.position) == null ? void 0 : C.top,
    bottom: (s = e.position) == null ? void 0 : s.bottom,
    left: (T = e.position) == null ? void 0 : T.left,
    right: (_ = e.position) == null ? void 0 : _.right,
    transform: !!l && `translate(${typeof (l == null ? void 0 : l.x) == "number" ? (l == null ? void 0 : l.x) + "px" : (l == null ? void 0 : l.x) ?? 0}, ${typeof (l == null ? void 0 : l.y) == "number" ? (l == null ? void 0 : l.y) + "px" : (l == null ? void 0 : l.y) ?? 0})`,
    //
    display: e == null ? void 0 : e.display,
    flexDirection: r && e.direction ? e.direction + "-reverse" : e.direction,
    alignItems: e.align,
    justifyContent: e == null ? void 0 : e.crossAlign,
    alignContent: e == null ? void 0 : e.alignContent,
    alignSelf: e == null ? void 0 : e.alignSelf,
    flex: e.flex,
    flexWrap: e == null ? void 0 : e.wrap,
    flexBasis: e == null ? void 0 : e.basis,
    flexFlow: e == null ? void 0 : e.flow,
    flexGrow: e == null ? void 0 : e.grow,
    flexShrink: e == null ? void 0 : e.shrink,
    rowGap: t === "column" && a || t === "row" && i || a,
    columnGap: t === "column" && i || t === "row" && a || i,
    order: e.order,
    //
    background: e == null ? void 0 : e.background,
    backgroundColor: e == null ? void 0 : e.backgroundColor,
    backgroundRepeat: (e == null ? void 0 : e.backgroundRepeat) ?? "no-repeat",
    backgroundSize: (e == null ? void 0 : e.backgroundSize) ?? "cover",
    backgroundPosition: (e == null ? void 0 : e.backgroundPosition) ?? "center",
    backgroundClip: e == null ? void 0 : e.backgroundClip,
    backgroundImage: (e == null ? void 0 : e.backgroundImageUrl) && `url(${e == null ? void 0 : e.backgroundImageUrl})`,
    boxShadow: e != null && e.shadow ? `${(M = e == null ? void 0 : e.shadow) == null ? void 0 : M.x}px ${(y = e == null ? void 0 : e.shadow) == null ? void 0 : y.y}px ${(E = e == null ? void 0 : e.shadow) == null ? void 0 : E.blur}px ${(w = e == null ? void 0 : e.shadow) == null ? void 0 : w.color}` : void 0,
    filter: !!e.filter && `blur(${e.filter})`,
    zIndex: e == null ? void 0 : e.zIndex,
    transition: (e == null ? void 0 : e.transitionTime) && `${e == null ? void 0 : e.transitionTime}s ease-in-out`,
    cursor: e == null ? void 0 : e.cursor,
    opacity: e.opacity,
    userSelect: e.userSelect,
    //
    border: m && b === "all" ? `${m}px ${h} ${o}` : void 0,
    borderBottom: b === "bottom" ? `${m}px ${h} ${o}` : void 0,
    borderTop: b === "top" ? `${m}px ${h} ${o}` : void 0,
    borderRight: b === "right" ? `${m}px ${h} ${o}` : void 0,
    borderLeft: b === "left" ? `${m}px ${h} ${o}` : void 0,
    borderRadius: d,
    //
    paddingTop: ((P = e == null ? void 0 : e.padding) == null ? void 0 : P.all) || ((f = e == null ? void 0 : e.padding) == null ? void 0 : f.vertical) || ((j = e == null ? void 0 : e.padding) == null ? void 0 : j.top),
    paddingBottom: (($ = e == null ? void 0 : e.padding) == null ? void 0 : $.all) || ((xe = e == null ? void 0 : e.padding) == null ? void 0 : xe.vertical) || ((se = e == null ? void 0 : e.padding) == null ? void 0 : se.bottom),
    paddingRight: ((Ee = e == null ? void 0 : e.padding) == null ? void 0 : Ee.all) || ((Se = e == null ? void 0 : e.padding) == null ? void 0 : Se.horizontal) || ((fe = e == null ? void 0 : e.padding) == null ? void 0 : fe.right),
    paddingLeft: ((K = e == null ? void 0 : e.padding) == null ? void 0 : K.all) || ((H = e == null ? void 0 : e.padding) == null ? void 0 : H.horizontal) || ((Z = e == null ? void 0 : e.padding) == null ? void 0 : Z.left),
    //
    marginTop: ((de = e == null ? void 0 : e.margin) == null ? void 0 : de.all) || ((me = e == null ? void 0 : e.margin) == null ? void 0 : me.vertical) || ((ie = e == null ? void 0 : e.margin) == null ? void 0 : ie.top),
    marginBottom: ((ve = e == null ? void 0 : e.margin) == null ? void 0 : ve.all) || ((ce = e == null ? void 0 : e.margin) == null ? void 0 : ce.vertical) || ((he = e == null ? void 0 : e.margin) == null ? void 0 : he.bottom),
    marginRight: ((be = e == null ? void 0 : e.margin) == null ? void 0 : be.all) || ((ge = e == null ? void 0 : e.margin) == null ? void 0 : ge.horizontal) || ((we = e == null ? void 0 : e.margin) == null ? void 0 : we.right),
    marginLeft: ((_e = e == null ? void 0 : e.margin) == null ? void 0 : _e.all) || ((oe = e == null ? void 0 : e.margin) == null ? void 0 : oe.horizontal) || ((ue = e == null ? void 0 : e.margin) == null ? void 0 : ue.left),
    //
    overflowX: (ne = e == null ? void 0 : e.scroll) == null ? void 0 : ne.x,
    overflowY: (le = e == null ? void 0 : e.scroll) == null ? void 0 : le.y,
    listStyle: "none",
    "::-webkit-scrollbar": {
      display: (re = e == null ? void 0 : e.scroll) != null && re.bar ? "flex" : "none",
      width: "4px",
      height: "4px"
    },
    "::-webkit-scrollbar-track": {
      backgroundColor: "transparent"
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: "#cccccc",
      borderRadius: "100px"
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#e2e2e2"
    },
    "::-webkit-scrollbar-button:start:decrement, ::-webkit-scrollbar-button:end:increment": {
      width: 0,
      height: 0,
      backgroundColor: "transparent"
    }
  } : {};
};
function Tn(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function a() {
      return this instanceof a ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(a) {
    var i = Object.getOwnPropertyDescriptor(e, a);
    Object.defineProperty(r, a, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[a];
      }
    });
  }), r;
}
var ct = { exports: {} }, Ne = {};
const Ut = /* @__PURE__ */ Tn(ee);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ot;
function Pn() {
  if (Ot)
    return Ne;
  Ot = 1;
  var e = Ut, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(l, m, b) {
    var o, h = {}, C = null, s = null;
    b !== void 0 && (C = "" + b), m.key !== void 0 && (C = "" + m.key), m.ref !== void 0 && (s = m.ref);
    for (o in m)
      a.call(m, o) && !c.hasOwnProperty(o) && (h[o] = m[o]);
    if (l && l.defaultProps)
      for (o in m = l.defaultProps, m)
        h[o] === void 0 && (h[o] = m[o]);
    return { $$typeof: t, type: l, key: C, ref: s, props: h, _owner: i.current };
  }
  return Ne.Fragment = r, Ne.jsx = d, Ne.jsxs = d, Ne;
}
var Me = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var At;
function kn() {
  return At || (At = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ut, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), l = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), o = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), s = Symbol.for("react.offscreen"), T = Symbol.iterator, _ = "@@iterator";
    function M(n) {
      if (n === null || typeof n != "object")
        return null;
      var u = T && n[T] || n[_];
      return typeof u == "function" ? u : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(n) {
      {
        for (var u = arguments.length, v = new Array(u > 1 ? u - 1 : 0), x = 1; x < u; x++)
          v[x - 1] = arguments[x];
        w("error", n, v);
      }
    }
    function w(n, u, v) {
      {
        var x = y.ReactDebugCurrentFrame, O = x.getStackAddendum();
        O !== "" && (u += "%s", v = v.concat([O]));
        var D = v.map(function(k) {
          return String(k);
        });
        D.unshift("Warning: " + u), Function.prototype.apply.call(console[n], console, D);
      }
    }
    var P = !1, f = !1, j = !1, $ = !1, xe = !1, se;
    se = Symbol.for("react.module.reference");
    function Ee(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === a || n === c || xe || n === i || n === b || n === o || $ || n === s || P || f || j || typeof n == "object" && n !== null && (n.$$typeof === C || n.$$typeof === h || n.$$typeof === d || n.$$typeof === l || n.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === se || n.getModuleId !== void 0));
    }
    function Se(n, u, v) {
      var x = n.displayName;
      if (x)
        return x;
      var O = u.displayName || u.name || "";
      return O !== "" ? v + "(" + O + ")" : v;
    }
    function fe(n) {
      return n.displayName || "Context";
    }
    function K(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case a:
          return "Fragment";
        case r:
          return "Portal";
        case c:
          return "Profiler";
        case i:
          return "StrictMode";
        case b:
          return "Suspense";
        case o:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case l:
            var u = n;
            return fe(u) + ".Consumer";
          case d:
            var v = n;
            return fe(v._context) + ".Provider";
          case m:
            return Se(n, n.render, "ForwardRef");
          case h:
            var x = n.displayName || null;
            return x !== null ? x : K(n.type) || "Memo";
          case C: {
            var O = n, D = O._payload, k = O._init;
            try {
              return K(k(D));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, Z = 0, de, me, ie, ve, ce, he, be;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function we() {
      {
        if (Z === 0) {
          de = console.log, me = console.info, ie = console.warn, ve = console.error, ce = console.group, he = console.groupCollapsed, be = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: ge,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        Z++;
      }
    }
    function _e() {
      {
        if (Z--, Z === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, n, {
              value: de
            }),
            info: H({}, n, {
              value: me
            }),
            warn: H({}, n, {
              value: ie
            }),
            error: H({}, n, {
              value: ve
            }),
            group: H({}, n, {
              value: ce
            }),
            groupCollapsed: H({}, n, {
              value: he
            }),
            groupEnd: H({}, n, {
              value: be
            })
          });
        }
        Z < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var oe = y.ReactCurrentDispatcher, ue;
    function ne(n, u, v) {
      {
        if (ue === void 0)
          try {
            throw Error();
          } catch (O) {
            var x = O.stack.trim().match(/\n( *(at )?)/);
            ue = x && x[1] || "";
          }
        return `
` + ue + n;
      }
    }
    var le = !1, re;
    {
      var Qe = typeof WeakMap == "function" ? WeakMap : Map;
      re = new Qe();
    }
    function g(n, u) {
      if (!n || le)
        return "";
      {
        var v = re.get(n);
        if (v !== void 0)
          return v;
      }
      var x;
      le = !0;
      var O = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var D;
      D = oe.current, oe.current = null, we();
      try {
        if (u) {
          var k = function() {
            throw Error();
          };
          if (Object.defineProperty(k.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(k, []);
            } catch (ae) {
              x = ae;
            }
            Reflect.construct(n, [], k);
          } else {
            try {
              k.call();
            } catch (ae) {
              x = ae;
            }
            n.call(k.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ae) {
            x = ae;
          }
          n();
        }
      } catch (ae) {
        if (ae && x && typeof ae.stack == "string") {
          for (var R = ae.stack.split(`
`), G = x.stack.split(`
`), L = R.length - 1, W = G.length - 1; L >= 1 && W >= 0 && R[L] !== G[W]; )
            W--;
          for (; L >= 1 && W >= 0; L--, W--)
            if (R[L] !== G[W]) {
              if (L !== 1 || W !== 1)
                do
                  if (L--, W--, W < 0 || R[L] !== G[W]) {
                    var J = `
` + R[L].replace(" at new ", " at ");
                    return n.displayName && J.includes("<anonymous>") && (J = J.replace("<anonymous>", n.displayName)), typeof n == "function" && re.set(n, J), J;
                  }
                while (L >= 1 && W >= 0);
              break;
            }
        }
      } finally {
        le = !1, oe.current = D, _e(), Error.prepareStackTrace = O;
      }
      var Te = n ? n.displayName || n.name : "", $t = Te ? ne(Te) : "";
      return typeof n == "function" && re.set(n, $t), $t;
    }
    function Oe(n, u, v) {
      return g(n, !1);
    }
    function Re(n) {
      var u = n.prototype;
      return !!(u && u.isReactComponent);
    }
    function ye(n, u, v) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return g(n, Re(n));
      if (typeof n == "string")
        return ne(n);
      switch (n) {
        case b:
          return ne("Suspense");
        case o:
          return ne("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case m:
            return Oe(n.render);
          case h:
            return ye(n.type, u, v);
          case C: {
            var x = n, O = x._payload, D = x._init;
            try {
              return ye(D(O), u, v);
            } catch {
            }
          }
        }
      return "";
    }
    var ze = Object.prototype.hasOwnProperty, gt = {}, yt = y.ReactDebugCurrentFrame;
    function Ve(n) {
      if (n) {
        var u = n._owner, v = ye(n.type, n._source, u ? u.type : null);
        yt.setExtraStackFrame(v);
      } else
        yt.setExtraStackFrame(null);
    }
    function nn(n, u, v, x, O) {
      {
        var D = Function.call.bind(ze);
        for (var k in n)
          if (D(n, k)) {
            var R = void 0;
            try {
              if (typeof n[k] != "function") {
                var G = Error((x || "React class") + ": " + v + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw G.name = "Invariant Violation", G;
              }
              R = n[k](u, k, x, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (L) {
              R = L;
            }
            R && !(R instanceof Error) && (Ve(O), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", x || "React class", v, k, typeof R), Ve(null)), R instanceof Error && !(R.message in gt) && (gt[R.message] = !0, Ve(O), E("Failed %s type: %s", v, R.message), Ve(null));
          }
      }
    }
    var rn = Array.isArray;
    function pe(n) {
      return rn(n);
    }
    function an(n) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, v = u && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return v;
      }
    }
    function cn(n) {
      try {
        return xt(n), !1;
      } catch {
        return !0;
      }
    }
    function xt(n) {
      return "" + n;
    }
    function Et(n) {
      if (cn(n))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", an(n)), xt(n);
    }
    var Ae = y.ReactCurrentOwner, on = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, St, wt, et;
    et = {};
    function un(n) {
      if (ze.call(n, "ref")) {
        var u = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function ln(n) {
      if (ze.call(n, "key")) {
        var u = Object.getOwnPropertyDescriptor(n, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function sn(n, u) {
      if (typeof n.ref == "string" && Ae.current && u && Ae.current.stateNode !== u) {
        var v = K(Ae.current.type);
        et[v] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(Ae.current.type), n.ref), et[v] = !0);
      }
    }
    function fn(n, u) {
      {
        var v = function() {
          St || (St = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        v.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: v,
          configurable: !0
        });
      }
    }
    function dn(n, u) {
      {
        var v = function() {
          wt || (wt = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        v.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: v,
          configurable: !0
        });
      }
    }
    var mn = function(n, u, v, x, O, D, k) {
      var R = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: n,
        key: u,
        ref: v,
        props: k,
        // Record the component responsible for creating this element.
        _owner: D
      };
      return R._store = {}, Object.defineProperty(R._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(R, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.defineProperty(R, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: O
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    };
    function vn(n, u, v, x, O) {
      {
        var D, k = {}, R = null, G = null;
        v !== void 0 && (Et(v), R = "" + v), ln(u) && (Et(u.key), R = "" + u.key), un(u) && (G = u.ref, sn(u, O));
        for (D in u)
          ze.call(u, D) && !on.hasOwnProperty(D) && (k[D] = u[D]);
        if (n && n.defaultProps) {
          var L = n.defaultProps;
          for (D in L)
            k[D] === void 0 && (k[D] = L[D]);
        }
        if (R || G) {
          var W = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          R && fn(k, W), G && dn(k, W);
        }
        return mn(n, R, G, O, x, Ae.current, k);
      }
    }
    var tt = y.ReactCurrentOwner, _t = y.ReactDebugCurrentFrame;
    function Ce(n) {
      if (n) {
        var u = n._owner, v = ye(n.type, n._source, u ? u.type : null);
        _t.setExtraStackFrame(v);
      } else
        _t.setExtraStackFrame(null);
    }
    var nt;
    nt = !1;
    function rt(n) {
      return typeof n == "object" && n !== null && n.$$typeof === t;
    }
    function Rt() {
      {
        if (tt.current) {
          var n = K(tt.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function hn(n) {
      {
        if (n !== void 0) {
          var u = n.fileName.replace(/^.*[\\\/]/, ""), v = n.lineNumber;
          return `

Check your code at ` + u + ":" + v + ".";
        }
        return "";
      }
    }
    var Ct = {};
    function bn(n) {
      {
        var u = Rt();
        if (!u) {
          var v = typeof n == "string" ? n : n.displayName || n.name;
          v && (u = `

Check the top-level render call using <` + v + ">.");
        }
        return u;
      }
    }
    function Tt(n, u) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var v = bn(u);
        if (Ct[v])
          return;
        Ct[v] = !0;
        var x = "";
        n && n._owner && n._owner !== tt.current && (x = " It was passed a child from " + K(n._owner.type) + "."), Ce(n), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, x), Ce(null);
      }
    }
    function Pt(n, u) {
      {
        if (typeof n != "object")
          return;
        if (pe(n))
          for (var v = 0; v < n.length; v++) {
            var x = n[v];
            rt(x) && Tt(x, u);
          }
        else if (rt(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var O = M(n);
          if (typeof O == "function" && O !== n.entries)
            for (var D = O.call(n), k; !(k = D.next()).done; )
              rt(k.value) && Tt(k.value, u);
        }
      }
    }
    function gn(n) {
      {
        var u = n.type;
        if (u == null || typeof u == "string")
          return;
        var v;
        if (typeof u == "function")
          v = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        u.$$typeof === h))
          v = u.propTypes;
        else
          return;
        if (v) {
          var x = K(u);
          nn(v, n.props, "prop", x, n);
        } else if (u.PropTypes !== void 0 && !nt) {
          nt = !0;
          var O = K(u);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", O || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function yn(n) {
      {
        for (var u = Object.keys(n.props), v = 0; v < u.length; v++) {
          var x = u[v];
          if (x !== "children" && x !== "key") {
            Ce(n), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", x), Ce(null);
            break;
          }
        }
        n.ref !== null && (Ce(n), E("Invalid attribute `ref` supplied to `React.Fragment`."), Ce(null));
      }
    }
    function kt(n, u, v, x, O, D) {
      {
        var k = Ee(n);
        if (!k) {
          var R = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (R += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var G = hn(O);
          G ? R += G : R += Rt();
          var L;
          n === null ? L = "null" : pe(n) ? L = "array" : n !== void 0 && n.$$typeof === t ? (L = "<" + (K(n.type) || "Unknown") + " />", R = " Did you accidentally export a JSX literal instead of a component?") : L = typeof n, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", L, R);
        }
        var W = vn(n, u, v, O, D);
        if (W == null)
          return W;
        if (k) {
          var J = u.children;
          if (J !== void 0)
            if (x)
              if (pe(J)) {
                for (var Te = 0; Te < J.length; Te++)
                  Pt(J[Te], n);
                Object.freeze && Object.freeze(J);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pt(J, n);
        }
        return n === a ? yn(W) : gn(W), W;
      }
    }
    function xn(n, u, v) {
      return kt(n, u, v, !0);
    }
    function En(n, u, v) {
      return kt(n, u, v, !1);
    }
    var Sn = En, wn = xn;
    Me.Fragment = a, Me.jsx = Sn, Me.jsxs = wn;
  }()), Me;
}
process.env.NODE_ENV === "production" ? ct.exports = Pn() : ct.exports = kn();
var Nt = ct.exports, $n = !1;
function On(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function An(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Nn = /* @__PURE__ */ function() {
  function e(r) {
    var a = this;
    this._insertTag = function(i) {
      var c;
      a.tags.length === 0 ? a.insertionPoint ? c = a.insertionPoint.nextSibling : a.prepend ? c = a.container.firstChild : c = a.before : c = a.tags[a.tags.length - 1].nextSibling, a.container.insertBefore(i, c), a.tags.push(i);
    }, this.isSpeedy = r.speedy === void 0 ? !$n : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(a) {
    a.forEach(this._insertTag);
  }, t.insert = function(a) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(An(this));
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var c = On(i);
      try {
        c.insertRule(a, c.cssRules.length);
      } catch {
      }
    } else
      i.appendChild(document.createTextNode(a));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(a) {
      var i;
      return (i = a.parentNode) == null ? void 0 : i.removeChild(a);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), q = "-ms-", Xe = "-moz-", A = "-webkit-", qt = "comm", ft = "rule", dt = "decl", Mn = "@import", Gt = "@keyframes", In = "@layer", Fn = Math.abs, He = String.fromCharCode, Dn = Object.assign;
function jn(e, t) {
  return U(e, 0) ^ 45 ? (((t << 2 ^ U(e, 0)) << 2 ^ U(e, 1)) << 2 ^ U(e, 2)) << 2 ^ U(e, 3) : 0;
}
function Kt(e) {
  return e.trim();
}
function Ln(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function N(e, t, r) {
  return e.replace(t, r);
}
function ot(e, t) {
  return e.indexOf(t);
}
function U(e, t) {
  return e.charCodeAt(t) | 0;
}
function Fe(e, t, r) {
  return e.slice(t, r);
}
function Q(e) {
  return e.length;
}
function mt(e) {
  return e.length;
}
function qe(e, t) {
  return t.push(e), e;
}
function Yn(e, t) {
  return e.map(t).join("");
}
var Je = 1, ke = 1, Bt = 0, B = 0, z = 0, $e = "";
function Ze(e, t, r, a, i, c, d) {
  return { value: e, root: t, parent: r, type: a, props: i, children: c, line: Je, column: ke, length: d, return: "" };
}
function Ie(e, t) {
  return Dn(Ze("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Wn() {
  return z;
}
function zn() {
  return z = B > 0 ? U($e, --B) : 0, ke--, z === 10 && (ke = 1, Je--), z;
}
function X() {
  return z = B < Bt ? U($e, B++) : 0, ke++, z === 10 && (ke = 1, Je++), z;
}
function te() {
  return U($e, B);
}
function Ge() {
  return B;
}
function Le(e, t) {
  return Fe($e, e, t);
}
function De(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Xt(e) {
  return Je = ke = 1, Bt = Q($e = e), B = 0, [];
}
function Ht(e) {
  return $e = "", e;
}
function Ke(e) {
  return Kt(Le(B - 1, ut(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Vn(e) {
  for (; (z = te()) && z < 33; )
    X();
  return De(e) > 2 || De(z) > 3 ? "" : " ";
}
function Un(e, t) {
  for (; --t && X() && !(z < 48 || z > 102 || z > 57 && z < 65 || z > 70 && z < 97); )
    ;
  return Le(e, Ge() + (t < 6 && te() == 32 && X() == 32));
}
function ut(e) {
  for (; X(); )
    switch (z) {
      case e:
        return B;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ut(z);
        break;
      case 40:
        e === 41 && ut(e);
        break;
      case 92:
        X();
        break;
    }
  return B;
}
function qn(e, t) {
  for (; X() && e + z !== 57; )
    if (e + z === 84 && te() === 47)
      break;
  return "/*" + Le(t, B - 1) + "*" + He(e === 47 ? e : X());
}
function Gn(e) {
  for (; !De(te()); )
    X();
  return Le(e, B);
}
function Kn(e) {
  return Ht(Be("", null, null, null, [""], e = Xt(e), 0, [0], e));
}
function Be(e, t, r, a, i, c, d, l, m) {
  for (var b = 0, o = 0, h = d, C = 0, s = 0, T = 0, _ = 1, M = 1, y = 1, E = 0, w = "", P = i, f = c, j = a, $ = w; M; )
    switch (T = E, E = X()) {
      case 40:
        if (T != 108 && U($, h - 1) == 58) {
          ot($ += N(Ke(E), "&", "&\f"), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        $ += Ke(E);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        $ += Vn(T);
        break;
      case 92:
        $ += Un(Ge() - 1, 7);
        continue;
      case 47:
        switch (te()) {
          case 42:
          case 47:
            qe(Bn(qn(X(), Ge()), t, r), m);
            break;
          default:
            $ += "/";
        }
        break;
      case 123 * _:
        l[b++] = Q($) * y;
      case 125 * _:
      case 59:
      case 0:
        switch (E) {
          case 0:
          case 125:
            M = 0;
          case 59 + o:
            y == -1 && ($ = N($, /\f/g, "")), s > 0 && Q($) - h && qe(s > 32 ? It($ + ";", a, r, h - 1) : It(N($, " ", "") + ";", a, r, h - 2), m);
            break;
          case 59:
            $ += ";";
          default:
            if (qe(j = Mt($, t, r, b, o, i, l, w, P = [], f = [], h), c), E === 123)
              if (o === 0)
                Be($, t, j, j, P, c, h, l, f);
              else
                switch (C === 99 && U($, 3) === 110 ? 100 : C) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Be(e, j, j, a && qe(Mt(e, j, j, 0, 0, i, l, w, i, P = [], h), f), i, f, h, l, a ? P : f);
                    break;
                  default:
                    Be($, j, j, j, [""], f, 0, l, f);
                }
        }
        b = o = s = 0, _ = y = 1, w = $ = "", h = d;
        break;
      case 58:
        h = 1 + Q($), s = T;
      default:
        if (_ < 1) {
          if (E == 123)
            --_;
          else if (E == 125 && _++ == 0 && zn() == 125)
            continue;
        }
        switch ($ += He(E), E * _) {
          case 38:
            y = o > 0 ? 1 : ($ += "\f", -1);
            break;
          case 44:
            l[b++] = (Q($) - 1) * y, y = 1;
            break;
          case 64:
            te() === 45 && ($ += Ke(X())), C = te(), o = h = Q(w = $ += Gn(Ge())), E++;
            break;
          case 45:
            T === 45 && Q($) == 2 && (_ = 0);
        }
    }
  return c;
}
function Mt(e, t, r, a, i, c, d, l, m, b, o) {
  for (var h = i - 1, C = i === 0 ? c : [""], s = mt(C), T = 0, _ = 0, M = 0; T < a; ++T)
    for (var y = 0, E = Fe(e, h + 1, h = Fn(_ = d[T])), w = e; y < s; ++y)
      (w = Kt(_ > 0 ? C[y] + " " + E : N(E, /&\f/g, C[y]))) && (m[M++] = w);
  return Ze(e, t, r, i === 0 ? ft : l, m, b, o);
}
function Bn(e, t, r) {
  return Ze(e, t, r, qt, He(Wn()), Fe(e, 2, -2), 0);
}
function It(e, t, r, a) {
  return Ze(e, t, r, dt, Fe(e, 0, a), Fe(e, a + 1, -1), a);
}
function Pe(e, t) {
  for (var r = "", a = mt(e), i = 0; i < a; i++)
    r += t(e[i], i, e, t) || "";
  return r;
}
function Xn(e, t, r, a) {
  switch (e.type) {
    case In:
      if (e.children.length)
        break;
    case Mn:
    case dt:
      return e.return = e.return || e.value;
    case qt:
      return "";
    case Gt:
      return e.return = e.value + "{" + Pe(e.children, a) + "}";
    case ft:
      e.value = e.props.join(",");
  }
  return Q(r = Pe(e.children, a)) ? e.return = e.value + "{" + r + "}" : "";
}
function Hn(e) {
  var t = mt(e);
  return function(r, a, i, c) {
    for (var d = "", l = 0; l < t; l++)
      d += e[l](r, a, i, c) || "";
    return d;
  };
}
function Jn(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Zn(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Qn = function(t, r, a) {
  for (var i = 0, c = 0; i = c, c = te(), i === 38 && c === 12 && (r[a] = 1), !De(c); )
    X();
  return Le(t, B);
}, pn = function(t, r) {
  var a = -1, i = 44;
  do
    switch (De(i)) {
      case 0:
        i === 38 && te() === 12 && (r[a] = 1), t[a] += Qn(B - 1, r, a);
        break;
      case 2:
        t[a] += Ke(i);
        break;
      case 4:
        if (i === 44) {
          t[++a] = te() === 58 ? "&\f" : "", r[a] = t[a].length;
          break;
        }
      default:
        t[a] += He(i);
    }
  while (i = X());
  return t;
}, er = function(t, r) {
  return Ht(pn(Xt(t), r));
}, Ft = /* @__PURE__ */ new WeakMap(), tr = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, a = t.parent, i = t.column === a.column && t.line === a.line; a.type !== "rule"; )
      if (a = a.parent, !a)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Ft.get(a)) && !i) {
      Ft.set(t, !0);
      for (var c = [], d = er(r, c), l = a.props, m = 0, b = 0; m < d.length; m++)
        for (var o = 0; o < l.length; o++, b++)
          t.props[b] = c[m] ? d[m].replace(/&\f/g, l[o]) : l[o] + " " + d[m];
    }
  }
}, nr = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Jt(e, t) {
  switch (jn(e, t)) {
    case 5103:
      return A + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return A + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return A + e + Xe + e + q + e + e;
    case 6828:
    case 4268:
      return A + e + q + e + e;
    case 6165:
      return A + e + q + "flex-" + e + e;
    case 5187:
      return A + e + N(e, /(\w+).+(:[^]+)/, A + "box-$1$2" + q + "flex-$1$2") + e;
    case 5443:
      return A + e + q + "flex-item-" + N(e, /flex-|-self/, "") + e;
    case 4675:
      return A + e + q + "flex-line-pack" + N(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return A + e + q + N(e, "shrink", "negative") + e;
    case 5292:
      return A + e + q + N(e, "basis", "preferred-size") + e;
    case 6060:
      return A + "box-" + N(e, "-grow", "") + A + e + q + N(e, "grow", "positive") + e;
    case 4554:
      return A + N(e, /([^-])(transform)/g, "$1" + A + "$2") + e;
    case 6187:
      return N(N(N(e, /(zoom-|grab)/, A + "$1"), /(image-set)/, A + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return N(e, /(image-set\([^]*)/, A + "$1$`$1");
    case 4968:
      return N(N(e, /(.+:)(flex-)?(.*)/, A + "box-pack:$3" + q + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + A + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return N(e, /(.+)-inline(.+)/, A + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Q(e) - 1 - t > 6)
        switch (U(e, t + 1)) {
          case 109:
            if (U(e, t + 4) !== 45)
              break;
          case 102:
            return N(e, /(.+:)(.+)-([^]+)/, "$1" + A + "$2-$3$1" + Xe + (U(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~ot(e, "stretch") ? Jt(N(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (U(e, t + 1) !== 115)
        break;
    case 6444:
      switch (U(e, Q(e) - 3 - (~ot(e, "!important") && 10))) {
        case 107:
          return N(e, ":", ":" + A) + e;
        case 101:
          return N(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + A + (U(e, 14) === 45 ? "inline-" : "") + "box$3$1" + A + "$2$3$1" + q + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (U(e, t + 11)) {
        case 114:
          return A + e + q + N(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return A + e + q + N(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return A + e + q + N(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return A + e + q + e + e;
  }
  return e;
}
var rr = function(t, r, a, i) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case dt:
        t.return = Jt(t.value, t.length);
        break;
      case Gt:
        return Pe([Ie(t, {
          value: N(t.value, "@", "@" + A)
        })], i);
      case ft:
        if (t.length)
          return Yn(t.props, function(c) {
            switch (Ln(c, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Pe([Ie(t, {
                  props: [N(c, /:(read-\w+)/, ":" + Xe + "$1")]
                })], i);
              case "::placeholder":
                return Pe([Ie(t, {
                  props: [N(c, /:(plac\w+)/, ":" + A + "input-$1")]
                }), Ie(t, {
                  props: [N(c, /:(plac\w+)/, ":" + Xe + "$1")]
                }), Ie(t, {
                  props: [N(c, /:(plac\w+)/, q + "input-$1")]
                })], i);
            }
            return "";
          });
    }
}, ar = [rr], ir = function(t) {
  var r = t.key;
  if (r === "css") {
    var a = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(a, function(_) {
      var M = _.getAttribute("data-emotion");
      M.indexOf(" ") !== -1 && (document.head.appendChild(_), _.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || ar, c = {}, d, l = [];
  d = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(_) {
      for (var M = _.getAttribute("data-emotion").split(" "), y = 1; y < M.length; y++)
        c[M[y]] = !0;
      l.push(_);
    }
  );
  var m, b = [tr, nr];
  {
    var o, h = [Xn, Jn(function(_) {
      o.insert(_);
    })], C = Hn(b.concat(i, h)), s = function(M) {
      return Pe(Kn(M), C);
    };
    m = function(M, y, E, w) {
      o = E, s(M ? M + "{" + y.styles + "}" : y.styles), w && (T.inserted[y.name] = !0);
    };
  }
  var T = {
    key: r,
    sheet: new Nn({
      key: r,
      container: d,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: c,
    registered: {},
    insert: m
  };
  return T.sheet.hydrate(l), T;
}, lt = { exports: {} }, I = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dt;
function cr() {
  if (Dt)
    return I;
  Dt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, a = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, c = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, b = e ? Symbol.for("react.concurrent_mode") : 60111, o = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, C = e ? Symbol.for("react.suspense_list") : 60120, s = e ? Symbol.for("react.memo") : 60115, T = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, M = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
  function w(f) {
    if (typeof f == "object" && f !== null) {
      var j = f.$$typeof;
      switch (j) {
        case t:
          switch (f = f.type, f) {
            case m:
            case b:
            case a:
            case c:
            case i:
            case h:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case l:
                case o:
                case T:
                case s:
                case d:
                  return f;
                default:
                  return j;
              }
          }
        case r:
          return j;
      }
    }
  }
  function P(f) {
    return w(f) === b;
  }
  return I.AsyncMode = m, I.ConcurrentMode = b, I.ContextConsumer = l, I.ContextProvider = d, I.Element = t, I.ForwardRef = o, I.Fragment = a, I.Lazy = T, I.Memo = s, I.Portal = r, I.Profiler = c, I.StrictMode = i, I.Suspense = h, I.isAsyncMode = function(f) {
    return P(f) || w(f) === m;
  }, I.isConcurrentMode = P, I.isContextConsumer = function(f) {
    return w(f) === l;
  }, I.isContextProvider = function(f) {
    return w(f) === d;
  }, I.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === t;
  }, I.isForwardRef = function(f) {
    return w(f) === o;
  }, I.isFragment = function(f) {
    return w(f) === a;
  }, I.isLazy = function(f) {
    return w(f) === T;
  }, I.isMemo = function(f) {
    return w(f) === s;
  }, I.isPortal = function(f) {
    return w(f) === r;
  }, I.isProfiler = function(f) {
    return w(f) === c;
  }, I.isStrictMode = function(f) {
    return w(f) === i;
  }, I.isSuspense = function(f) {
    return w(f) === h;
  }, I.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === a || f === b || f === c || f === i || f === h || f === C || typeof f == "object" && f !== null && (f.$$typeof === T || f.$$typeof === s || f.$$typeof === d || f.$$typeof === l || f.$$typeof === o || f.$$typeof === M || f.$$typeof === y || f.$$typeof === E || f.$$typeof === _);
  }, I.typeOf = w, I;
}
var F = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jt;
function or() {
  return jt || (jt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, a = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, c = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, b = e ? Symbol.for("react.concurrent_mode") : 60111, o = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, C = e ? Symbol.for("react.suspense_list") : 60120, s = e ? Symbol.for("react.memo") : 60115, T = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, M = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
    function w(g) {
      return typeof g == "string" || typeof g == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      g === a || g === b || g === c || g === i || g === h || g === C || typeof g == "object" && g !== null && (g.$$typeof === T || g.$$typeof === s || g.$$typeof === d || g.$$typeof === l || g.$$typeof === o || g.$$typeof === M || g.$$typeof === y || g.$$typeof === E || g.$$typeof === _);
    }
    function P(g) {
      if (typeof g == "object" && g !== null) {
        var Oe = g.$$typeof;
        switch (Oe) {
          case t:
            var Re = g.type;
            switch (Re) {
              case m:
              case b:
              case a:
              case c:
              case i:
              case h:
                return Re;
              default:
                var ye = Re && Re.$$typeof;
                switch (ye) {
                  case l:
                  case o:
                  case T:
                  case s:
                  case d:
                    return ye;
                  default:
                    return Oe;
                }
            }
          case r:
            return Oe;
        }
      }
    }
    var f = m, j = b, $ = l, xe = d, se = t, Ee = o, Se = a, fe = T, K = s, H = r, Z = c, de = i, me = h, ie = !1;
    function ve(g) {
      return ie || (ie = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ce(g) || P(g) === m;
    }
    function ce(g) {
      return P(g) === b;
    }
    function he(g) {
      return P(g) === l;
    }
    function be(g) {
      return P(g) === d;
    }
    function ge(g) {
      return typeof g == "object" && g !== null && g.$$typeof === t;
    }
    function we(g) {
      return P(g) === o;
    }
    function _e(g) {
      return P(g) === a;
    }
    function oe(g) {
      return P(g) === T;
    }
    function ue(g) {
      return P(g) === s;
    }
    function ne(g) {
      return P(g) === r;
    }
    function le(g) {
      return P(g) === c;
    }
    function re(g) {
      return P(g) === i;
    }
    function Qe(g) {
      return P(g) === h;
    }
    F.AsyncMode = f, F.ConcurrentMode = j, F.ContextConsumer = $, F.ContextProvider = xe, F.Element = se, F.ForwardRef = Ee, F.Fragment = Se, F.Lazy = fe, F.Memo = K, F.Portal = H, F.Profiler = Z, F.StrictMode = de, F.Suspense = me, F.isAsyncMode = ve, F.isConcurrentMode = ce, F.isContextConsumer = he, F.isContextProvider = be, F.isElement = ge, F.isForwardRef = we, F.isFragment = _e, F.isLazy = oe, F.isMemo = ue, F.isPortal = ne, F.isProfiler = le, F.isStrictMode = re, F.isSuspense = Qe, F.isValidElementType = w, F.typeOf = P;
  }()), F;
}
process.env.NODE_ENV === "production" ? lt.exports = cr() : lt.exports = or();
var ur = lt.exports, Zt = ur, lr = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, sr = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Qt = {};
Qt[Zt.ForwardRef] = lr;
Qt[Zt.Memo] = sr;
var fr = !0;
function dr(e, t, r) {
  var a = "";
  return r.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : a += i + " ";
  }), a;
}
var pt = function(t, r, a) {
  var i = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (a === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  fr === !1) && t.registered[i] === void 0 && (t.registered[i] = r.styles);
}, mr = function(t, r, a) {
  pt(t, r, a);
  var i = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var c = r;
    do
      t.insert(r === c ? "." + i : "", c, t.sheet, !0), c = c.next;
    while (c !== void 0);
  }
};
function vr(e) {
  for (var t = 0, r, a = 0, i = e.length; i >= 4; ++a, i -= 4)
    r = e.charCodeAt(a) & 255 | (e.charCodeAt(++a) & 255) << 8 | (e.charCodeAt(++a) & 255) << 16 | (e.charCodeAt(++a) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(a + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(a + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(a) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var hr = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, br = !1, gr = /[A-Z]|^ms/g, yr = /_EMO_([^_]+?)_([^]*?)_EMO_/g, en = function(t) {
  return t.charCodeAt(1) === 45;
}, Lt = function(t) {
  return t != null && typeof t != "boolean";
}, it = /* @__PURE__ */ Zn(function(e) {
  return en(e) ? e : e.replace(gr, "-$&").toLowerCase();
}), Yt = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(yr, function(a, i, c) {
          return p = {
            name: i,
            styles: c,
            next: p
          }, i;
        });
  }
  return hr[t] !== 1 && !en(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
}, xr = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function je(e, t, r) {
  if (r == null)
    return "";
  var a = r;
  if (a.__emotion_styles !== void 0)
    return a;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var i = r;
      if (i.anim === 1)
        return p = {
          name: i.name,
          styles: i.styles,
          next: p
        }, i.name;
      var c = r;
      if (c.styles !== void 0) {
        var d = c.next;
        if (d !== void 0)
          for (; d !== void 0; )
            p = {
              name: d.name,
              styles: d.styles,
              next: p
            }, d = d.next;
        var l = c.styles + ";";
        return l;
      }
      return Er(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var m = p, b = r(e);
        return p = m, je(e, t, b);
      }
      break;
    }
  }
  var o = r;
  if (t == null)
    return o;
  var h = t[o];
  return h !== void 0 ? h : o;
}
function Er(e, t, r) {
  var a = "";
  if (Array.isArray(r))
    for (var i = 0; i < r.length; i++)
      a += je(e, t, r[i]) + ";";
  else
    for (var c in r) {
      var d = r[c];
      if (typeof d != "object") {
        var l = d;
        t != null && t[l] !== void 0 ? a += c + "{" + t[l] + "}" : Lt(l) && (a += it(c) + ":" + Yt(c, l) + ";");
      } else {
        if (c === "NO_COMPONENT_SELECTOR" && br)
          throw new Error(xr);
        if (Array.isArray(d) && typeof d[0] == "string" && (t == null || t[d[0]] === void 0))
          for (var m = 0; m < d.length; m++)
            Lt(d[m]) && (a += it(c) + ":" + Yt(c, d[m]) + ";");
        else {
          var b = je(e, t, d);
          switch (c) {
            case "animation":
            case "animationName": {
              a += it(c) + ":" + b + ";";
              break;
            }
            default:
              a += c + "{" + b + "}";
          }
        }
      }
    }
  return a;
}
var Wt = /label:\s*([^\s;\n{]+)\s*(;|$)/g, p;
function Sr(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var a = !0, i = "";
  p = void 0;
  var c = e[0];
  if (c == null || c.raw === void 0)
    a = !1, i += je(r, t, c);
  else {
    var d = c;
    i += d[0];
  }
  for (var l = 1; l < e.length; l++)
    if (i += je(r, t, e[l]), a) {
      var m = c;
      i += m[l];
    }
  Wt.lastIndex = 0;
  for (var b = "", o; (o = Wt.exec(i)) !== null; )
    b += "-" + o[1];
  var h = vr(i) + b;
  return {
    name: h,
    styles: i,
    next: p
  };
}
var wr = function(t) {
  return t();
}, _r = ee.useInsertionEffect ? ee.useInsertionEffect : !1, Rr = _r || wr, Cr = !1, tn = /* @__PURE__ */ ee.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ ir({
    key: "css"
  }) : null
);
tn.Provider;
var Tr = function(t) {
  return /* @__PURE__ */ _n(function(r, a) {
    var i = Rn(tn);
    return t(r, i, a);
  });
}, Pr = /* @__PURE__ */ ee.createContext({}), vt = {}.hasOwnProperty, st = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", kr = function(t, r) {
  var a = {};
  for (var i in r)
    vt.call(r, i) && (a[i] = r[i]);
  return a[st] = t, a;
}, $r = function(t) {
  var r = t.cache, a = t.serialized, i = t.isStringTag;
  return pt(r, a, i), Rr(function() {
    return mr(r, a, i);
  }), null;
}, Or = /* @__PURE__ */ Tr(
  /* <any, any> */
  function(e, t, r) {
    var a = e.css;
    typeof a == "string" && t.registered[a] !== void 0 && (a = t.registered[a]);
    var i = e[st], c = [a], d = "";
    typeof e.className == "string" ? d = dr(t.registered, c, e.className) : e.className != null && (d = e.className + " ");
    var l = Sr(c, void 0, ee.useContext(Pr));
    d += t.key + "-" + l.name;
    var m = {};
    for (var b in e)
      vt.call(e, b) && b !== "css" && b !== st && !Cr && (m[b] = e[b]);
    return m.className = d, r && (m.ref = r), /* @__PURE__ */ ee.createElement(ee.Fragment, null, /* @__PURE__ */ ee.createElement($r, {
      cache: t,
      serialized: l,
      isStringTag: typeof i == "string"
    }), /* @__PURE__ */ ee.createElement(i, m));
  }
), Ar = Or;
function S(e, t, r) {
  return vt.call(t, "css") ? Nt.jsx(Ar, kr(e, t), r) : Nt.jsx(e, t, r);
}
const Ye = (e) => {
  const t = { ...e }, r = [
    ...Nr,
    ...Fr,
    ...Mr,
    ...Ir,
    ...jr,
    ...Dr,
    ...Lr,
    ...Wr,
    ...Yr
  ];
  return Object.keys(e).forEach((a) => {
    r.includes(a) && (e[a], delete t[a]);
  }), { elementProps: t };
}, Nr = [
  "width",
  "minWidth",
  "maxWidth",
  "height",
  "minHeight",
  "maxHeight"
], Mr = [
  "display",
  "flex",
  "direction",
  "reverse",
  "align",
  "crossAlign",
  "alignContent",
  "alignSelf",
  "wrap",
  "flow",
  "basis",
  "grow",
  "shrink",
  "gap",
  "crossGap",
  "order"
], Ir = ["position", "axis", "transform"], Fr = [
  "backgroundColor",
  "background",
  "backgroundRepeat",
  "backgroundSize",
  "backgroundPosition",
  "backgroundClip",
  "backgroundImageUrl",
  "filter",
  "shadow",
  "zIndex",
  "cursor",
  "userSelect",
  "transitionTime",
  "opacity"
], Dr = ["border", "borderRadius"], jr = ["padding", "margin"], Lr = ["scroll"], Yr = ["active", "hover", "disabled"], Wr = ["mediaQuery"], V = (e) => Y(e), We = ({
  mediaQuery: e,
  direction: t
}) => {
  var c, d, l, m, b, o;
  const r = () => {
    var h, C, s, T, _, M, y, E, w, P, f, j;
    if (e)
      return {
        s1440: {
          ...V({ ...e.s1440, direction: t }),
          "&:hover": V(((h = e.s1440) == null ? void 0 : h.hover) || {}),
          "&:active": V(((C = e.s1440) == null ? void 0 : C.active) || {})
        },
        s1280: {
          ...V(e.s1280 || {}),
          "&:hover": V(((s = e.s1280) == null ? void 0 : s.hover) || {}),
          "&:active": V(((T = e.s1280) == null ? void 0 : T.active) || {})
        },
        s1080: {
          ...V(e.s1080 || {}),
          "&:hover": V(((_ = e.s1080) == null ? void 0 : _.hover) || {}),
          "&:active": V(((M = e.s1080) == null ? void 0 : M.active) || {})
        },
        s768: {
          ...V(e.s768 || {}),
          "&:hover": V(((y = e.s768) == null ? void 0 : y.hover) || {}),
          "&:active": V(((E = e.s768) == null ? void 0 : E.active) || {})
        },
        s600: {
          ...V(e.s600 || {}),
          "&:hover": V(((w = e.s600) == null ? void 0 : w.hover) || {}),
          "&:active": V(((P = e.s600) == null ? void 0 : P.active) || {})
        },
        s428: {
          ...V(e.s428 || {}),
          "&:hover": V(((f = e.s428) == null ? void 0 : f.hover) || {}),
          "&:active": V(((j = e.s428) == null ? void 0 : j.active) || {})
        }
      };
  }, i = [1440, 1280, 1080, 768, 600, 428].map((h) => `@media (max-width: ${h}px)`);
  return {
    [i[0]]: { ...(c = r()) == null ? void 0 : c.s1440 },
    [i[1]]: { ...(d = r()) == null ? void 0 : d.s1280 },
    [i[2]]: { ...(l = r()) == null ? void 0 : l.s1080 },
    [i[3]]: { ...(m = r()) == null ? void 0 : m.s768 },
    [i[4]]: { ...(b = r()) == null ? void 0 : b.s600 },
    [i[5]]: { ...(o = r()) == null ? void 0 : o.s428 }
  };
};
function zr(e) {
  const { as: t = "div", children: r, onClick: a, ...i } = e, { direction: c, active: d, hover: l, disabled: m, mediaQuery: b } = e, { elementProps: o } = Ye(i), h = We({ mediaQuery: b, direction: c }), s = {
    ...Y({
      ...e,
      positionType: "absolute",
      width: e.width,
      direction: c ?? "row",
      display: e.display ?? "flex",
      userSelect: e.userSelect ? e.userSelect : a && "none",
      cursor: e.cursor ? e.cursor : a && "pointer",
      backgroundRepeat: (e == null ? void 0 : e.backgroundRepeat) ?? "no-repeat",
      backgroundSize: (e == null ? void 0 : e.backgroundSize) ?? "cover",
      backgroundPosition: (e == null ? void 0 : e.backgroundPosition) ?? "center"
    }),
    ...h,
    "&:hover": Y({ hover: l }),
    "&:active": Y({ active: d }),
    "&:disabled": Y({ disabled: m })
  };
  if (t === "section")
    return /* @__PURE__ */ S(
      "section",
      {
        css: s,
        className: "flex-column flex-section",
        ...o,
        children: r
      }
    );
  if (t === "div")
    return /* @__PURE__ */ S("div", { css: s, className: "flex-column", ...o, children: r });
  if (t === "nav")
    return /* @__PURE__ */ S(
      "nav",
      {
        css: s,
        className: "flex-column flex-column-nav",
        ...o,
        children: r
      }
    );
  if (t === "aside")
    return /* @__PURE__ */ S(
      "aside",
      {
        css: s,
        className: "flex-column flex-column-aside",
        ...o,
        children: r
      }
    );
  if (t === "form")
    return /* @__PURE__ */ S(
      "form",
      {
        css: s,
        className: "flex-column flex-column-form",
        ...o,
        children: r
      }
    );
  if (t === "ul")
    return /* @__PURE__ */ S(
      "ul",
      {
        css: s,
        className: "flex-column flex-column-ul",
        ...o,
        children: r
      }
    );
  if (t === "li")
    return /* @__PURE__ */ S(
      "li",
      {
        css: s,
        className: "flex-column flex-column-li",
        ...o,
        children: r
      }
    );
  if (t === "ol")
    return /* @__PURE__ */ S(
      "ol",
      {
        css: s,
        className: "flex-column flex-column-ol",
        ...o,
        children: r
      }
    );
}
function Vr(e) {
  const { as: t = "div", children: r, onClick: a, ...i } = e, { direction: c, active: d, hover: l, disabled: m, mediaQuery: b } = e, { elementProps: o } = Ye(i), h = We({ mediaQuery: b, direction: c }), s = {
    ...Y({
      ...e,
      positionType: "fixed",
      width: e.width,
      direction: c ?? "row",
      display: e.display ?? "flex",
      userSelect: e.userSelect ? e.userSelect : a && "none",
      cursor: e.cursor ? e.cursor : a && "pointer",
      backgroundRepeat: (e == null ? void 0 : e.backgroundRepeat) ?? "no-repeat",
      backgroundSize: (e == null ? void 0 : e.backgroundSize) ?? "cover",
      backgroundPosition: (e == null ? void 0 : e.backgroundPosition) ?? "center"
    }),
    ...h,
    "&:hover": Y({ hover: l }),
    "&:active": Y({ active: d }),
    "&:disabled": Y({ disabled: m })
  };
  if (t === "section")
    return /* @__PURE__ */ S(
      "section",
      {
        css: s,
        className: "flex-column flex-section",
        ...o,
        children: r
      }
    );
  if (t === "div")
    return /* @__PURE__ */ S("div", { css: s, className: "flex-column", ...o, children: r });
  if (t === "nav")
    return /* @__PURE__ */ S(
      "nav",
      {
        css: s,
        className: "flex-column flex-column-nav",
        ...o,
        children: r
      }
    );
  if (t === "aside")
    return /* @__PURE__ */ S(
      "aside",
      {
        css: s,
        className: "flex-column flex-column-aside",
        ...o,
        children: r
      }
    );
  if (t === "form")
    return /* @__PURE__ */ S(
      "form",
      {
        css: s,
        className: "flex-column flex-column-form",
        ...o,
        children: r
      }
    );
  if (t === "ul")
    return /* @__PURE__ */ S(
      "ul",
      {
        css: s,
        className: "flex-column flex-column-ul",
        ...o,
        children: r
      }
    );
  if (t === "li")
    return /* @__PURE__ */ S(
      "li",
      {
        css: s,
        className: "flex-column flex-column-li",
        ...o,
        children: r
      }
    );
  if (t === "ol")
    return /* @__PURE__ */ S(
      "ol",
      {
        css: s,
        className: "flex-column flex-column-ol",
        ...o,
        children: r
      }
    );
}
function Ur(e) {
  const { as: t = "div", children: r, onClick: a, ...i } = e, { direction: c, active: d, hover: l, disabled: m, mediaQuery: b } = e, { elementProps: o } = Ye(i), h = We({ mediaQuery: b, direction: c }), s = {
    ...Y({
      ...e,
      positionType: "sticky",
      width: e.width,
      direction: c ?? "row",
      display: e.display ?? "flex",
      userSelect: e.userSelect ? e.userSelect : a && "none",
      cursor: e.cursor ? e.cursor : a && "pointer",
      backgroundRepeat: (e == null ? void 0 : e.backgroundRepeat) ?? "no-repeat",
      backgroundSize: (e == null ? void 0 : e.backgroundSize) ?? "cover",
      backgroundPosition: (e == null ? void 0 : e.backgroundPosition) ?? "center"
    }),
    ...h,
    "&:hover": Y({ hover: l }),
    "&:active": Y({ active: d }),
    "&:disabled": Y({ disabled: m })
  };
  if (t === "section")
    return /* @__PURE__ */ S(
      "section",
      {
        css: s,
        className: "flex-column flex-section",
        ...o,
        children: r
      }
    );
  if (t === "div")
    return /* @__PURE__ */ S("div", { css: s, className: "flex-column", ...o, children: r });
  if (t === "nav")
    return /* @__PURE__ */ S(
      "nav",
      {
        css: s,
        className: "flex-column flex-column-nav",
        ...o,
        children: r
      }
    );
  if (t === "aside")
    return /* @__PURE__ */ S(
      "aside",
      {
        css: s,
        className: "flex-column flex-column-aside",
        ...o,
        children: r
      }
    );
  if (t === "form")
    return /* @__PURE__ */ S(
      "form",
      {
        css: s,
        className: "flex-column flex-column-form",
        ...o,
        children: r
      }
    );
  if (t === "ul")
    return /* @__PURE__ */ S(
      "ul",
      {
        css: s,
        className: "flex-column flex-column-ul",
        ...o,
        children: r
      }
    );
  if (t === "li")
    return /* @__PURE__ */ S(
      "li",
      {
        css: s,
        className: "flex-column flex-column-li",
        ...o,
        children: r
      }
    );
  if (t === "ol")
    return /* @__PURE__ */ S(
      "ol",
      {
        css: s,
        className: "flex-column flex-column-ol",
        ...o,
        children: r
      }
    );
}
function ht({ children: e }) {
  const t = zt.only(e);
  return Vt(t);
}
ht.Absolute = zr;
ht.Fixed = Vr;
ht.Sticky = Ur;
function qr(e) {
  const { as: t = "div", children: r, onClick: a, ...i } = e, { direction: c, active: d, hover: l, disabled: m, mediaQuery: b } = e, { elementProps: o } = Ye(i), h = We({ mediaQuery: b, direction: c }), s = {
    ...Y({
      ...e,
      width: e.width ?? "100%",
      positionType: e.positionType ?? "relative",
      display: e.display ?? "flex",
      direction: c ?? "column",
      userSelect: e.userSelect ? e.userSelect : a && "none",
      cursor: e.cursor ? e.cursor : a && "pointer",
      backgroundRepeat: (e == null ? void 0 : e.backgroundRepeat) ?? "no-repeat",
      backgroundSize: (e == null ? void 0 : e.backgroundSize) ?? "cover",
      backgroundPosition: (e == null ? void 0 : e.backgroundPosition) ?? "center"
    }),
    ...h,
    "&:hover": Y({ hover: l }),
    "&:active": Y({ active: d }),
    "&:disabled": Y({ disabled: m })
  };
  if (t === "section")
    return /* @__PURE__ */ S(
      "section",
      {
        css: s,
        className: "flex-column flex-section",
        ...o,
        children: r
      }
    );
  if (t === "div")
    return /* @__PURE__ */ S("div", { css: s, className: "flex-column", ...o, children: r });
  if (t === "nav")
    return /* @__PURE__ */ S(
      "nav",
      {
        css: s,
        className: "flex-column flex-column-nav",
        ...o,
        children: r
      }
    );
  if (t === "aside")
    return /* @__PURE__ */ S(
      "aside",
      {
        css: s,
        className: "flex-column flex-column-aside",
        ...o,
        children: r
      }
    );
  if (t === "form")
    return /* @__PURE__ */ S(
      "form",
      {
        css: s,
        className: "flex-column flex-column-form",
        ...o,
        children: r
      }
    );
  if (t === "ul")
    return /* @__PURE__ */ S(
      "ul",
      {
        css: s,
        className: "flex-column flex-column-ul",
        ...o,
        children: r
      }
    );
  if (t === "li")
    return /* @__PURE__ */ S(
      "li",
      {
        css: s,
        className: "flex-column flex-column-li",
        ...o,
        children: r
      }
    );
  if (t === "ol")
    return /* @__PURE__ */ S(
      "ol",
      {
        css: s,
        className: "flex-column flex-column-ol",
        ...o,
        children: r
      }
    );
}
function Gr(e) {
  const { as: t = "div", children: r, onClick: a, ...i } = e, { direction: c = "row", active: d, hover: l, disabled: m, mediaQuery: b } = e, { elementProps: o } = Ye(i), h = We({ mediaQuery: b }), s = {
    ...Y({
      ...e,
      width: e.width ?? "100%",
      positionType: e.positionType ?? "relative",
      display: e.display ?? "flex",
      direction: c,
      userSelect: e.userSelect ? e.userSelect : a && "none",
      cursor: e.cursor ? e.cursor : a && "pointer",
      backgroundRepeat: (e == null ? void 0 : e.backgroundRepeat) ?? "no-repeat",
      backgroundSize: (e == null ? void 0 : e.backgroundSize) ?? "cover",
      backgroundPosition: (e == null ? void 0 : e.backgroundPosition) ?? "center"
    }),
    ...h,
    "&:hover": Y({ hover: l }),
    "&:active": Y({ active: d }),
    "&:disabled": Y({ disabled: m })
  };
  if (t === "section")
    return /* @__PURE__ */ S(
      "section",
      {
        css: s,
        className: "flex-column flex-section",
        ...o,
        children: r
      }
    );
  if (t === "div")
    return /* @__PURE__ */ S("div", { css: s, className: "flex-column", ...o, children: r });
  if (t === "nav")
    return /* @__PURE__ */ S(
      "nav",
      {
        css: s,
        className: "flex-column flex-column-nav",
        ...o,
        children: r
      }
    );
  if (t === "aside")
    return /* @__PURE__ */ S(
      "aside",
      {
        css: s,
        className: "flex-column flex-column-aside",
        ...o,
        children: r
      }
    );
  if (t === "form")
    return /* @__PURE__ */ S(
      "form",
      {
        css: s,
        className: "flex-column flex-column-form",
        ...o,
        children: r
      }
    );
  if (t === "ul")
    return /* @__PURE__ */ S(
      "ul",
      {
        css: s,
        className: "flex-column flex-column-ul",
        ...o,
        children: r
      }
    );
  if (t === "li")
    return /* @__PURE__ */ S(
      "li",
      {
        css: s,
        className: "flex-column flex-column-li",
        ...o,
        children: r
      }
    );
  if (t === "ol")
    return /* @__PURE__ */ S(
      "ol",
      {
        css: s,
        className: "flex-column flex-column-ol",
        ...o,
        children: r
      }
    );
}
const Kr = ({
  children: e,
  maxWidth: t,
  gap: r,
  scrollBarActive: a = !1,
  ...i
}) => {
  const [c, d] = Ue(!1), [l, m] = Ue(0), [b, o] = Ue(0), [h, C] = Ue(!1), s = Cn(null), T = at(
    (y) => {
      var w, P;
      const E = y.type.includes("mouse") ? y.pageX : y.touches[0].clientX;
      d(!0), m(E - (((w = s.current) == null ? void 0 : w.offsetLeft) || 0)), o(((P = s.current) == null ? void 0 : P.scrollLeft) || 0), C(!1);
    },
    []
  ), _ = at(
    (y) => {
      var f;
      if (!c)
        return;
      const P = (y.type.includes("mouse") ? y.pageX : y.touches[0].clientX) - (((f = s.current) == null ? void 0 : f.offsetLeft) || 0) - l;
      Math.abs(P) > 10 && !h && C(!0), h && (y.preventDefault(), s.current && (s.current.scrollLeft = b - P));
    },
    [c, l, b, h]
  ), M = at(() => {
    var y;
    d(!1), h || (y = s.current) == null || y.click();
  }, [h]);
  return /* @__PURE__ */ S(
    "div",
    {
      ref: s,
      onMouseDown: T,
      onTouchStart: T,
      onMouseLeave: M,
      onMouseUp: M,
      onTouchEnd: M,
      onMouseMove: _,
      onTouchMove: _,
      css: {
        width: "100%",
        maxWidth: `${t}px`,
        columnGap: `${r}px`,
        display: "flex",
        overflowX: "auto",
        cursor: c ? "grabbing" : "grab",
        padding: "1px 0",
        userSelect: "none",
        "& > *": {
          pointerEvents: c && h ? "none" : "auto"
        },
        "&::-webkit-scrollbar": {
          display: a ? "flex" : "none"
        }
      },
      ...i,
      children: e
    }
  );
};
function bt({ children: e }) {
  const t = zt.only(e);
  return Vt(t);
}
bt.Column = qr;
bt.Row = Gr;
bt.ScrollDragHorizontal = Kr;
export {
  ht as P,
  bt as V,
  Y as ViewTheme
};
