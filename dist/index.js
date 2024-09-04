import * as ee from "react";
import { forwardRef as $e, useContext as kr, Children as qt, cloneElement as Kt, useState as ct, useRef as Pr, useCallback as ot } from "react";
const L = ({
  direction: e,
  reverse: r,
  gap: c,
  crossGap: i,
  border: a,
  borderRadius: o,
  axis: u,
  ...t
}) => {
  var R, k, C, S, _, E, b, w, A, l, D, P, Ee, fe, we, Se, le, q, H, Z, se, de, ae, ve, ie, he, me, ge, _e, xe, ce, oe, re, ue, ne;
  const { solid: d, position: h = "all", color: v, shape: g = "solid" } = a ?? {};
  return t ? {
    width: t == null ? void 0 : t.width,
    minWidth: t == null ? void 0 : t.minWidth,
    maxWidth: t == null ? void 0 : t.maxWidth,
    height: t == null ? void 0 : t.height,
    minHeight: t == null ? void 0 : t.minHeight,
    maxHeight: t == null ? void 0 : t.maxHeight,
    //
    position: t.positionType,
    top: (R = t == null ? void 0 : t.position) == null ? void 0 : R.top,
    bottom: (k = t.position) == null ? void 0 : k.bottom,
    left: (C = t.position) == null ? void 0 : C.left,
    right: (S = t.position) == null ? void 0 : S.right,
    transform: !!u && `translate(${typeof (u == null ? void 0 : u.x) == "number" ? (u == null ? void 0 : u.x) + "px" : (u == null ? void 0 : u.x) ?? 0}, ${typeof (u == null ? void 0 : u.y) == "number" ? (u == null ? void 0 : u.y) + "px" : (u == null ? void 0 : u.y) ?? 0})`,
    //
    display: t == null ? void 0 : t.display,
    flexDirection: r && e ? e + "-reverse" : e,
    alignItems: t.align,
    justifyContent: t == null ? void 0 : t.crossAlign,
    alignContent: t == null ? void 0 : t.alignContent,
    alignSelf: t == null ? void 0 : t.alignSelf,
    flex: t.flex,
    flexWrap: t == null ? void 0 : t.wrap,
    flexBasis: t == null ? void 0 : t.basis,
    flexFlow: t == null ? void 0 : t.flow,
    flexGrow: t == null ? void 0 : t.grow,
    flexShrink: t == null ? void 0 : t.shrink,
    rowGap: e === "column" && c || e === "row" && i || c,
    columnGap: e === "column" && i || e === "row" && c || i,
    order: t.order,
    //
    background: t == null ? void 0 : t.background,
    backgroundColor: t == null ? void 0 : t.backgroundColor,
    backgroundRepeat: (t == null ? void 0 : t.backgroundRepeat) ?? "no-repeat",
    backgroundSize: (t == null ? void 0 : t.backgroundSize) ?? "cover",
    backgroundPosition: (t == null ? void 0 : t.backgroundPosition) ?? "center",
    backgroundClip: t == null ? void 0 : t.backgroundClip,
    backgroundImage: (t == null ? void 0 : t.backgroundImageUrl) && `url(${t == null ? void 0 : t.backgroundImageUrl})`,
    boxShadow: t != null && t.shadow ? `${(_ = t == null ? void 0 : t.shadow) == null ? void 0 : _.x}px ${(E = t == null ? void 0 : t.shadow) == null ? void 0 : E.y}px ${(b = t == null ? void 0 : t.shadow) == null ? void 0 : b.blur}px ${(w = t == null ? void 0 : t.shadow) == null ? void 0 : w.color}` : void 0,
    filter: !!t.filter && `blur(${t.filter})`,
    zIndex: t == null ? void 0 : t.zIndex,
    transition: (t == null ? void 0 : t.transitionTime) && `${t == null ? void 0 : t.transitionTime}s ease-in-out`,
    cursor: t == null ? void 0 : t.cursor,
    opacity: t.opacity,
    scale: t == null ? void 0 : t.scale,
    userSelect: t.userSelect,
    //
    border: d && h === "all" ? `${d}px ${g} ${v}` : void 0,
    borderBottom: h === "bottom" ? `${d}px ${g} ${v}` : void 0,
    borderTop: h === "top" ? `${d}px ${g} ${v}` : void 0,
    borderRight: h === "right" ? `${d}px ${g} ${v}` : void 0,
    borderLeft: h === "left" ? `${d}px ${g} ${v}` : void 0,
    borderRadius: o,
    //
    paddingTop: ((A = t == null ? void 0 : t.padding) == null ? void 0 : A.all) || ((l = t == null ? void 0 : t.padding) == null ? void 0 : l.vertical) || ((D = t == null ? void 0 : t.padding) == null ? void 0 : D.top),
    paddingBottom: ((P = t == null ? void 0 : t.padding) == null ? void 0 : P.all) || ((Ee = t == null ? void 0 : t.padding) == null ? void 0 : Ee.vertical) || ((fe = t == null ? void 0 : t.padding) == null ? void 0 : fe.bottom),
    paddingRight: ((we = t == null ? void 0 : t.padding) == null ? void 0 : we.all) || ((Se = t == null ? void 0 : t.padding) == null ? void 0 : Se.horizontal) || ((le = t == null ? void 0 : t.padding) == null ? void 0 : le.right),
    paddingLeft: ((q = t == null ? void 0 : t.padding) == null ? void 0 : q.all) || ((H = t == null ? void 0 : t.padding) == null ? void 0 : H.horizontal) || ((Z = t == null ? void 0 : t.padding) == null ? void 0 : Z.left),
    //
    marginTop: ((se = t == null ? void 0 : t.margin) == null ? void 0 : se.all) || ((de = t == null ? void 0 : t.margin) == null ? void 0 : de.vertical) || ((ae = t == null ? void 0 : t.margin) == null ? void 0 : ae.top),
    marginBottom: ((ve = t == null ? void 0 : t.margin) == null ? void 0 : ve.all) || ((ie = t == null ? void 0 : t.margin) == null ? void 0 : ie.vertical) || ((he = t == null ? void 0 : t.margin) == null ? void 0 : he.bottom),
    marginRight: ((me = t == null ? void 0 : t.margin) == null ? void 0 : me.all) || ((ge = t == null ? void 0 : t.margin) == null ? void 0 : ge.horizontal) || ((_e = t == null ? void 0 : t.margin) == null ? void 0 : _e.right),
    marginLeft: ((xe = t == null ? void 0 : t.margin) == null ? void 0 : xe.all) || ((ce = t == null ? void 0 : t.margin) == null ? void 0 : ce.horizontal) || ((oe = t == null ? void 0 : t.margin) == null ? void 0 : oe.left),
    //
    overflowX: (re = t == null ? void 0 : t.scroll) == null ? void 0 : re.x,
    overflowY: (ue = t == null ? void 0 : t.scroll) == null ? void 0 : ue.y,
    listStyle: "none",
    "::-webkit-scrollbar": {
      display: (ne = t == null ? void 0 : t.scroll) != null && ne.bar ? "flex" : "none",
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
function $r(e) {
  if (e.__esModule) return e;
  var r = e.default;
  if (typeof r == "function") {
    var c = function i() {
      return this instanceof i ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    c.prototype = r.prototype;
  } else c = {};
  return Object.defineProperty(c, "__esModule", { value: !0 }), Object.keys(e).forEach(function(i) {
    var a = Object.getOwnPropertyDescriptor(e, i);
    Object.defineProperty(c, i, a.get ? a : {
      enumerable: !0,
      get: function() {
        return e[i];
      }
    });
  }), c;
}
var ft = { exports: {} }, je = {};
const Bt = /* @__PURE__ */ $r(ee);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mt;
function Or() {
  if (Mt) return je;
  Mt = 1;
  var e = Bt, r = Symbol.for("react.element"), c = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(t, d, h) {
    var v, g = {}, R = null, k = null;
    h !== void 0 && (R = "" + h), d.key !== void 0 && (R = "" + d.key), d.ref !== void 0 && (k = d.ref);
    for (v in d) i.call(d, v) && !o.hasOwnProperty(v) && (g[v] = d[v]);
    if (t && t.defaultProps) for (v in d = t.defaultProps, d) g[v] === void 0 && (g[v] = d[v]);
    return { $$typeof: r, type: t, key: R, ref: k, props: g, _owner: a.current };
  }
  return je.Fragment = c, je.jsx = u, je.jsxs = u, je;
}
var De = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ft;
function Ar() {
  return Ft || (Ft = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Bt, r = Symbol.for("react.element"), c = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), t = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), C = Symbol.iterator, S = "@@iterator";
    function _(n) {
      if (n === null || typeof n != "object")
        return null;
      var f = C && n[C] || n[S];
      return typeof f == "function" ? f : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(n) {
      {
        for (var f = arguments.length, s = new Array(f > 1 ? f - 1 : 0), y = 1; y < f; y++)
          s[y - 1] = arguments[y];
        w("error", n, s);
      }
    }
    function w(n, f, s) {
      {
        var y = E.ReactDebugCurrentFrame, I = y.getStackAddendum();
        I !== "" && (f += "%s", s = s.concat([I]));
        var j = s.map(function(T) {
          return String(T);
        });
        j.unshift("Warning: " + f), Function.prototype.apply.call(console[n], console, j);
      }
    }
    var A = !1, l = !1, D = !1, P = !1, Ee = !1, fe;
    fe = Symbol.for("react.module.reference");
    function we(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === i || n === o || Ee || n === a || n === h || n === v || P || n === k || A || l || D || typeof n == "object" && n !== null && (n.$$typeof === R || n.$$typeof === g || n.$$typeof === u || n.$$typeof === t || n.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === fe || n.getModuleId !== void 0));
    }
    function Se(n, f, s) {
      var y = n.displayName;
      if (y)
        return y;
      var I = f.displayName || f.name || "";
      return I !== "" ? s + "(" + I + ")" : s;
    }
    function le(n) {
      return n.displayName || "Context";
    }
    function q(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case i:
          return "Fragment";
        case c:
          return "Portal";
        case o:
          return "Profiler";
        case a:
          return "StrictMode";
        case h:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case t:
            var f = n;
            return le(f) + ".Consumer";
          case u:
            var s = n;
            return le(s._context) + ".Provider";
          case d:
            return Se(n, n.render, "ForwardRef");
          case g:
            var y = n.displayName || null;
            return y !== null ? y : q(n.type) || "Memo";
          case R: {
            var I = n, j = I._payload, T = I._init;
            try {
              return q(T(j));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, Z = 0, se, de, ae, ve, ie, he, me;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function _e() {
      {
        if (Z === 0) {
          se = console.log, de = console.info, ae = console.warn, ve = console.error, ie = console.group, he = console.groupCollapsed, me = console.groupEnd;
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
    function xe() {
      {
        if (Z--, Z === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, n, {
              value: se
            }),
            info: H({}, n, {
              value: de
            }),
            warn: H({}, n, {
              value: ae
            }),
            error: H({}, n, {
              value: ve
            }),
            group: H({}, n, {
              value: ie
            }),
            groupCollapsed: H({}, n, {
              value: he
            }),
            groupEnd: H({}, n, {
              value: me
            })
          });
        }
        Z < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ce = E.ReactCurrentDispatcher, oe;
    function re(n, f, s) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (I) {
            var y = I.stack.trim().match(/\n( *(at )?)/);
            oe = y && y[1] || "";
          }
        return `
` + oe + n;
      }
    }
    var ue = !1, ne;
    {
      var pe = typeof WeakMap == "function" ? WeakMap : Map;
      ne = new pe();
    }
    function m(n, f) {
      if (!n || ue)
        return "";
      {
        var s = ne.get(n);
        if (s !== void 0)
          return s;
      }
      var y;
      ue = !0;
      var I = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var j;
      j = ce.current, ce.current = null, _e();
      try {
        if (f) {
          var T = function() {
            throw Error();
          };
          if (Object.defineProperty(T.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(T, []);
            } catch (B) {
              y = B;
            }
            Reflect.construct(n, [], T);
          } else {
            try {
              T.call();
            } catch (B) {
              y = B;
            }
            n.call(T.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (B) {
            y = B;
          }
          n();
        }
      } catch (B) {
        if (B && y && typeof B.stack == "string") {
          for (var x = B.stack.split(`
`), K = y.stack.split(`
`), N = x.length - 1, Y = K.length - 1; N >= 1 && Y >= 0 && x[N] !== K[Y]; )
            Y--;
          for (; N >= 1 && Y >= 0; N--, Y--)
            if (x[N] !== K[Y]) {
              if (N !== 1 || Y !== 1)
                do
                  if (N--, Y--, Y < 0 || x[N] !== K[Y]) {
                    var J = `
` + x[N].replace(" at new ", " at ");
                    return n.displayName && J.includes("<anonymous>") && (J = J.replace("<anonymous>", n.displayName)), typeof n == "function" && ne.set(n, J), J;
                  }
                while (N >= 1 && Y >= 0);
              break;
            }
        }
      } finally {
        ue = !1, ce.current = j, xe(), Error.prepareStackTrace = I;
      }
      var Te = n ? n.displayName || n.name : "", ye = Te ? re(Te) : "";
      return typeof n == "function" && ne.set(n, ye), ye;
    }
    function Ie(n, f, s) {
      return m(n, !1);
    }
    function Re(n) {
      var f = n.prototype;
      return !!(f && f.isReactComponent);
    }
    function be(n, f, s) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return m(n, Re(n));
      if (typeof n == "string")
        return re(n);
      switch (n) {
        case h:
          return re("Suspense");
        case v:
          return re("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case d:
            return Ie(n.render);
          case g:
            return be(n.type, f, s);
          case R: {
            var y = n, I = y._payload, j = y._init;
            try {
              return be(j(I), f, s);
            } catch {
            }
          }
        }
      return "";
    }
    var Me = Object.prototype.hasOwnProperty, wt = {}, St = E.ReactDebugCurrentFrame;
    function qe(n) {
      if (n) {
        var f = n._owner, s = be(n.type, n._source, f ? f.type : null);
        St.setExtraStackFrame(s);
      } else
        St.setExtraStackFrame(null);
    }
    function ir(n, f, s, y, I) {
      {
        var j = Function.call.bind(Me);
        for (var T in n)
          if (j(n, T)) {
            var x = void 0;
            try {
              if (typeof n[T] != "function") {
                var K = Error((y || "React class") + ": " + s + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw K.name = "Invariant Violation", K;
              }
              x = n[T](f, T, y, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (N) {
              x = N;
            }
            x && !(x instanceof Error) && (qe(I), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", y || "React class", s, T, typeof x), qe(null)), x instanceof Error && !(x.message in wt) && (wt[x.message] = !0, qe(I), b("Failed %s type: %s", s, x.message), qe(null));
          }
      }
    }
    var cr = Array.isArray;
    function et(n) {
      return cr(n);
    }
    function or(n) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, s = f && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return s;
      }
    }
    function ur(n) {
      try {
        return _t(n), !1;
      } catch {
        return !0;
      }
    }
    function _t(n) {
      return "" + n;
    }
    function xt(n) {
      if (ur(n))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", or(n)), _t(n);
    }
    var Fe = E.ReactCurrentOwner, fr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Rt, Ct, tt;
    tt = {};
    function lr(n) {
      if (Me.call(n, "ref")) {
        var f = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function sr(n) {
      if (Me.call(n, "key")) {
        var f = Object.getOwnPropertyDescriptor(n, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function dr(n, f) {
      if (typeof n.ref == "string" && Fe.current && f && Fe.current.stateNode !== f) {
        var s = q(Fe.current.type);
        tt[s] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', q(Fe.current.type), n.ref), tt[s] = !0);
      }
    }
    function vr(n, f) {
      {
        var s = function() {
          Rt || (Rt = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        s.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function hr(n, f) {
      {
        var s = function() {
          Ct || (Ct = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        s.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var mr = function(n, f, s, y, I, j, T) {
      var x = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: n,
        key: f,
        ref: s,
        props: T,
        // Record the component responsible for creating this element.
        _owner: j
      };
      return x._store = {}, Object.defineProperty(x._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(x, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.defineProperty(x, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    };
    function gr(n, f, s, y, I) {
      {
        var j, T = {}, x = null, K = null;
        s !== void 0 && (xt(s), x = "" + s), sr(f) && (xt(f.key), x = "" + f.key), lr(f) && (K = f.ref, dr(f, I));
        for (j in f)
          Me.call(f, j) && !fr.hasOwnProperty(j) && (T[j] = f[j]);
        if (n && n.defaultProps) {
          var N = n.defaultProps;
          for (j in N)
            T[j] === void 0 && (T[j] = N[j]);
        }
        if (x || K) {
          var Y = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          x && vr(T, Y), K && hr(T, Y);
        }
        return mr(n, x, K, I, y, Fe.current, T);
      }
    }
    var rt = E.ReactCurrentOwner, Tt = E.ReactDebugCurrentFrame;
    function Ce(n) {
      if (n) {
        var f = n._owner, s = be(n.type, n._source, f ? f.type : null);
        Tt.setExtraStackFrame(s);
      } else
        Tt.setExtraStackFrame(null);
    }
    var nt;
    nt = !1;
    function at(n) {
      return typeof n == "object" && n !== null && n.$$typeof === r;
    }
    function kt() {
      {
        if (rt.current) {
          var n = q(rt.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function br(n) {
      return "";
    }
    var Pt = {};
    function yr(n) {
      {
        var f = kt();
        if (!f) {
          var s = typeof n == "string" ? n : n.displayName || n.name;
          s && (f = `

Check the top-level render call using <` + s + ">.");
        }
        return f;
      }
    }
    function $t(n, f) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var s = yr(f);
        if (Pt[s])
          return;
        Pt[s] = !0;
        var y = "";
        n && n._owner && n._owner !== rt.current && (y = " It was passed a child from " + q(n._owner.type) + "."), Ce(n), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, y), Ce(null);
      }
    }
    function Ot(n, f) {
      {
        if (typeof n != "object")
          return;
        if (et(n))
          for (var s = 0; s < n.length; s++) {
            var y = n[s];
            at(y) && $t(y, f);
          }
        else if (at(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var I = _(n);
          if (typeof I == "function" && I !== n.entries)
            for (var j = I.call(n), T; !(T = j.next()).done; )
              at(T.value) && $t(T.value, f);
        }
      }
    }
    function Er(n) {
      {
        var f = n.type;
        if (f == null || typeof f == "string")
          return;
        var s;
        if (typeof f == "function")
          s = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === g))
          s = f.propTypes;
        else
          return;
        if (s) {
          var y = q(f);
          ir(s, n.props, "prop", y, n);
        } else if (f.PropTypes !== void 0 && !nt) {
          nt = !0;
          var I = q(f);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", I || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function wr(n) {
      {
        for (var f = Object.keys(n.props), s = 0; s < f.length; s++) {
          var y = f[s];
          if (y !== "children" && y !== "key") {
            Ce(n), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", y), Ce(null);
            break;
          }
        }
        n.ref !== null && (Ce(n), b("Invalid attribute `ref` supplied to `React.Fragment`."), Ce(null));
      }
    }
    var At = {};
    function It(n, f, s, y, I, j) {
      {
        var T = we(n);
        if (!T) {
          var x = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (x += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var K = br();
          K ? x += K : x += kt();
          var N;
          n === null ? N = "null" : et(n) ? N = "array" : n !== void 0 && n.$$typeof === r ? (N = "<" + (q(n.type) || "Unknown") + " />", x = " Did you accidentally export a JSX literal instead of a component?") : N = typeof n, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", N, x);
        }
        var Y = gr(n, f, s, I, j);
        if (Y == null)
          return Y;
        if (T) {
          var J = f.children;
          if (J !== void 0)
            if (y)
              if (et(J)) {
                for (var Te = 0; Te < J.length; Te++)
                  Ot(J[Te], n);
                Object.freeze && Object.freeze(J);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ot(J, n);
        }
        if (Me.call(f, "key")) {
          var ye = q(n), B = Object.keys(f).filter(function(Tr) {
            return Tr !== "key";
          }), it = B.length > 0 ? "{key: someKey, " + B.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!At[ye + it]) {
            var Cr = B.length > 0 ? "{" + B.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, it, ye, Cr, ye), At[ye + it] = !0;
          }
        }
        return n === i ? wr(Y) : Er(Y), Y;
      }
    }
    function Sr(n, f, s) {
      return It(n, f, s, !0);
    }
    function _r(n, f, s) {
      return It(n, f, s, !1);
    }
    var xr = _r, Rr = Sr;
    De.Fragment = i, De.jsx = xr, De.jsxs = Rr;
  }()), De;
}
process.env.NODE_ENV === "production" ? ft.exports = Or() : ft.exports = Ar();
var jt = ft.exports, Ir = !1;
function Mr(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function Fr(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var jr = /* @__PURE__ */ function() {
  function e(c) {
    var i = this;
    this._insertTag = function(a) {
      var o;
      i.tags.length === 0 ? i.insertionPoint ? o = i.insertionPoint.nextSibling : i.prepend ? o = i.container.firstChild : o = i.before : o = i.tags[i.tags.length - 1].nextSibling, i.container.insertBefore(a, o), i.tags.push(a);
    }, this.isSpeedy = c.speedy === void 0 ? !Ir : c.speedy, this.tags = [], this.ctr = 0, this.nonce = c.nonce, this.key = c.key, this.container = c.container, this.prepend = c.prepend, this.insertionPoint = c.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(i) {
    i.forEach(this._insertTag);
  }, r.insert = function(i) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Fr(this));
    var a = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var o = Mr(a);
      try {
        o.insertRule(i, o.cssRules.length);
      } catch {
      }
    } else
      a.appendChild(document.createTextNode(i));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(i) {
      var a;
      return (a = i.parentNode) == null ? void 0 : a.removeChild(i);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), U = "-ms-", He = "-moz-", $ = "-webkit-", Gt = "comm", ht = "rule", mt = "decl", Dr = "@import", Xt = "@keyframes", Nr = "@layer", Lr = Math.abs, Je = String.fromCharCode, Yr = Object.assign;
function Wr(e, r) {
  return V(e, 0) ^ 45 ? (((r << 2 ^ V(e, 0)) << 2 ^ V(e, 1)) << 2 ^ V(e, 2)) << 2 ^ V(e, 3) : 0;
}
function Ht(e) {
  return e.trim();
}
function zr(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function O(e, r, c) {
  return e.replace(r, c);
}
function lt(e, r) {
  return e.indexOf(r);
}
function V(e, r) {
  return e.charCodeAt(r) | 0;
}
function Le(e, r, c) {
  return e.slice(r, c);
}
function Q(e) {
  return e.length;
}
function gt(e) {
  return e.length;
}
function Ke(e, r) {
  return r.push(e), e;
}
function Vr(e, r) {
  return e.map(r).join("");
}
var Ze = 1, Pe = 1, Jt = 0, G = 0, W = 0, Oe = "";
function Qe(e, r, c, i, a, o, u) {
  return { value: e, root: r, parent: c, type: i, props: a, children: o, line: Ze, column: Pe, length: u, return: "" };
}
function Ne(e, r) {
  return Yr(Qe("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function Ur() {
  return W;
}
function qr() {
  return W = G > 0 ? V(Oe, --G) : 0, Pe--, W === 10 && (Pe = 1, Ze--), W;
}
function X() {
  return W = G < Jt ? V(Oe, G++) : 0, Pe++, W === 10 && (Pe = 1, Ze++), W;
}
function te() {
  return V(Oe, G);
}
function Be() {
  return G;
}
function ze(e, r) {
  return Le(Oe, e, r);
}
function Ye(e) {
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
function Zt(e) {
  return Ze = Pe = 1, Jt = Q(Oe = e), G = 0, [];
}
function Qt(e) {
  return Oe = "", e;
}
function Ge(e) {
  return Ht(ze(G - 1, st(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Kr(e) {
  for (; (W = te()) && W < 33; )
    X();
  return Ye(e) > 2 || Ye(W) > 3 ? "" : " ";
}
function Br(e, r) {
  for (; --r && X() && !(W < 48 || W > 102 || W > 57 && W < 65 || W > 70 && W < 97); )
    ;
  return ze(e, Be() + (r < 6 && te() == 32 && X() == 32));
}
function st(e) {
  for (; X(); )
    switch (W) {
      case e:
        return G;
      case 34:
      case 39:
        e !== 34 && e !== 39 && st(W);
        break;
      case 40:
        e === 41 && st(e);
        break;
      case 92:
        X();
        break;
    }
  return G;
}
function Gr(e, r) {
  for (; X() && e + W !== 57; )
    if (e + W === 84 && te() === 47)
      break;
  return "/*" + ze(r, G - 1) + "*" + Je(e === 47 ? e : X());
}
function Xr(e) {
  for (; !Ye(te()); )
    X();
  return ze(e, G);
}
function Hr(e) {
  return Qt(Xe("", null, null, null, [""], e = Zt(e), 0, [0], e));
}
function Xe(e, r, c, i, a, o, u, t, d) {
  for (var h = 0, v = 0, g = u, R = 0, k = 0, C = 0, S = 1, _ = 1, E = 1, b = 0, w = "", A = a, l = o, D = i, P = w; _; )
    switch (C = b, b = X()) {
      case 40:
        if (C != 108 && V(P, g - 1) == 58) {
          lt(P += O(Ge(b), "&", "&\f"), "&\f") != -1 && (E = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        P += Ge(b);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        P += Kr(C);
        break;
      case 92:
        P += Br(Be() - 1, 7);
        continue;
      case 47:
        switch (te()) {
          case 42:
          case 47:
            Ke(Jr(Gr(X(), Be()), r, c), d);
            break;
          default:
            P += "/";
        }
        break;
      case 123 * S:
        t[h++] = Q(P) * E;
      case 125 * S:
      case 59:
      case 0:
        switch (b) {
          case 0:
          case 125:
            _ = 0;
          case 59 + v:
            E == -1 && (P = O(P, /\f/g, "")), k > 0 && Q(P) - g && Ke(k > 32 ? Nt(P + ";", i, c, g - 1) : Nt(O(P, " ", "") + ";", i, c, g - 2), d);
            break;
          case 59:
            P += ";";
          default:
            if (Ke(D = Dt(P, r, c, h, v, a, t, w, A = [], l = [], g), o), b === 123)
              if (v === 0)
                Xe(P, r, D, D, A, o, g, t, l);
              else
                switch (R === 99 && V(P, 3) === 110 ? 100 : R) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Xe(e, D, D, i && Ke(Dt(e, D, D, 0, 0, a, t, w, a, A = [], g), l), a, l, g, t, i ? A : l);
                    break;
                  default:
                    Xe(P, D, D, D, [""], l, 0, t, l);
                }
        }
        h = v = k = 0, S = E = 1, w = P = "", g = u;
        break;
      case 58:
        g = 1 + Q(P), k = C;
      default:
        if (S < 1) {
          if (b == 123)
            --S;
          else if (b == 125 && S++ == 0 && qr() == 125)
            continue;
        }
        switch (P += Je(b), b * S) {
          case 38:
            E = v > 0 ? 1 : (P += "\f", -1);
            break;
          case 44:
            t[h++] = (Q(P) - 1) * E, E = 1;
            break;
          case 64:
            te() === 45 && (P += Ge(X())), R = te(), v = g = Q(w = P += Xr(Be())), b++;
            break;
          case 45:
            C === 45 && Q(P) == 2 && (S = 0);
        }
    }
  return o;
}
function Dt(e, r, c, i, a, o, u, t, d, h, v) {
  for (var g = a - 1, R = a === 0 ? o : [""], k = gt(R), C = 0, S = 0, _ = 0; C < i; ++C)
    for (var E = 0, b = Le(e, g + 1, g = Lr(S = u[C])), w = e; E < k; ++E)
      (w = Ht(S > 0 ? R[E] + " " + b : O(b, /&\f/g, R[E]))) && (d[_++] = w);
  return Qe(e, r, c, a === 0 ? ht : t, d, h, v);
}
function Jr(e, r, c) {
  return Qe(e, r, c, Gt, Je(Ur()), Le(e, 2, -2), 0);
}
function Nt(e, r, c, i) {
  return Qe(e, r, c, mt, Le(e, 0, i), Le(e, i + 1, -1), i);
}
function ke(e, r) {
  for (var c = "", i = gt(e), a = 0; a < i; a++)
    c += r(e[a], a, e, r) || "";
  return c;
}
function Zr(e, r, c, i) {
  switch (e.type) {
    case Nr:
      if (e.children.length) break;
    case Dr:
    case mt:
      return e.return = e.return || e.value;
    case Gt:
      return "";
    case Xt:
      return e.return = e.value + "{" + ke(e.children, i) + "}";
    case ht:
      e.value = e.props.join(",");
  }
  return Q(c = ke(e.children, i)) ? e.return = e.value + "{" + c + "}" : "";
}
function Qr(e) {
  var r = gt(e);
  return function(c, i, a, o) {
    for (var u = "", t = 0; t < r; t++)
      u += e[t](c, i, a, o) || "";
    return u;
  };
}
function pr(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function en(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(c) {
    return r[c] === void 0 && (r[c] = e(c)), r[c];
  };
}
var tn = function(r, c, i) {
  for (var a = 0, o = 0; a = o, o = te(), a === 38 && o === 12 && (c[i] = 1), !Ye(o); )
    X();
  return ze(r, G);
}, rn = function(r, c) {
  var i = -1, a = 44;
  do
    switch (Ye(a)) {
      case 0:
        a === 38 && te() === 12 && (c[i] = 1), r[i] += tn(G - 1, c, i);
        break;
      case 2:
        r[i] += Ge(a);
        break;
      case 4:
        if (a === 44) {
          r[++i] = te() === 58 ? "&\f" : "", c[i] = r[i].length;
          break;
        }
      default:
        r[i] += Je(a);
    }
  while (a = X());
  return r;
}, nn = function(r, c) {
  return Qt(rn(Zt(r), c));
}, Lt = /* @__PURE__ */ new WeakMap(), an = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var c = r.value, i = r.parent, a = r.column === i.column && r.line === i.line; i.type !== "rule"; )
      if (i = i.parent, !i) return;
    if (!(r.props.length === 1 && c.charCodeAt(0) !== 58 && !Lt.get(i)) && !a) {
      Lt.set(r, !0);
      for (var o = [], u = nn(c, o), t = i.props, d = 0, h = 0; d < u.length; d++)
        for (var v = 0; v < t.length; v++, h++)
          r.props[h] = o[d] ? u[d].replace(/&\f/g, t[v]) : t[v] + " " + u[d];
    }
  }
}, cn = function(r) {
  if (r.type === "decl") {
    var c = r.value;
    // charcode for l
    c.charCodeAt(0) === 108 && // charcode for b
    c.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function pt(e, r) {
  switch (Wr(e, r)) {
    case 5103:
      return $ + "print-" + e + e;
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
      return $ + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return $ + e + He + e + U + e + e;
    case 6828:
    case 4268:
      return $ + e + U + e + e;
    case 6165:
      return $ + e + U + "flex-" + e + e;
    case 5187:
      return $ + e + O(e, /(\w+).+(:[^]+)/, $ + "box-$1$2" + U + "flex-$1$2") + e;
    case 5443:
      return $ + e + U + "flex-item-" + O(e, /flex-|-self/, "") + e;
    case 4675:
      return $ + e + U + "flex-line-pack" + O(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return $ + e + U + O(e, "shrink", "negative") + e;
    case 5292:
      return $ + e + U + O(e, "basis", "preferred-size") + e;
    case 6060:
      return $ + "box-" + O(e, "-grow", "") + $ + e + U + O(e, "grow", "positive") + e;
    case 4554:
      return $ + O(e, /([^-])(transform)/g, "$1" + $ + "$2") + e;
    case 6187:
      return O(O(O(e, /(zoom-|grab)/, $ + "$1"), /(image-set)/, $ + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return O(e, /(image-set\([^]*)/, $ + "$1$`$1");
    case 4968:
      return O(O(e, /(.+:)(flex-)?(.*)/, $ + "box-pack:$3" + U + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + $ + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return O(e, /(.+)-inline(.+)/, $ + "$1$2") + e;
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
      if (Q(e) - 1 - r > 6) switch (V(e, r + 1)) {
        case 109:
          if (V(e, r + 4) !== 45) break;
        case 102:
          return O(e, /(.+:)(.+)-([^]+)/, "$1" + $ + "$2-$3$1" + He + (V(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~lt(e, "stretch") ? pt(O(e, "stretch", "fill-available"), r) + e : e;
      }
      break;
    case 4949:
      if (V(e, r + 1) !== 115) break;
    case 6444:
      switch (V(e, Q(e) - 3 - (~lt(e, "!important") && 10))) {
        case 107:
          return O(e, ":", ":" + $) + e;
        case 101:
          return O(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + $ + (V(e, 14) === 45 ? "inline-" : "") + "box$3$1" + $ + "$2$3$1" + U + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (V(e, r + 11)) {
        case 114:
          return $ + e + U + O(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return $ + e + U + O(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return $ + e + U + O(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return $ + e + U + e + e;
  }
  return e;
}
var on = function(r, c, i, a) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case mt:
      r.return = pt(r.value, r.length);
      break;
    case Xt:
      return ke([Ne(r, {
        value: O(r.value, "@", "@" + $)
      })], a);
    case ht:
      if (r.length) return Vr(r.props, function(o) {
        switch (zr(o, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return ke([Ne(r, {
              props: [O(o, /:(read-\w+)/, ":" + He + "$1")]
            })], a);
          case "::placeholder":
            return ke([Ne(r, {
              props: [O(o, /:(plac\w+)/, ":" + $ + "input-$1")]
            }), Ne(r, {
              props: [O(o, /:(plac\w+)/, ":" + He + "$1")]
            }), Ne(r, {
              props: [O(o, /:(plac\w+)/, U + "input-$1")]
            })], a);
        }
        return "";
      });
  }
}, un = [on], fn = function(r) {
  var c = r.key;
  if (c === "css") {
    var i = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(i, function(S) {
      var _ = S.getAttribute("data-emotion");
      _.indexOf(" ") !== -1 && (document.head.appendChild(S), S.setAttribute("data-s", ""));
    });
  }
  var a = r.stylisPlugins || un, o = {}, u, t = [];
  u = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + c + ' "]'),
    function(S) {
      for (var _ = S.getAttribute("data-emotion").split(" "), E = 1; E < _.length; E++)
        o[_[E]] = !0;
      t.push(S);
    }
  );
  var d, h = [an, cn];
  {
    var v, g = [Zr, pr(function(S) {
      v.insert(S);
    })], R = Qr(h.concat(a, g)), k = function(_) {
      return ke(Hr(_), R);
    };
    d = function(_, E, b, w) {
      v = b, k(_ ? _ + "{" + E.styles + "}" : E.styles), w && (C.inserted[E.name] = !0);
    };
  }
  var C = {
    key: c,
    sheet: new jr({
      key: c,
      container: u,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: o,
    registered: {},
    insert: d
  };
  return C.sheet.hydrate(t), C;
}, dt = { exports: {} }, M = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yt;
function ln() {
  if (Yt) return M;
  Yt = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, c = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, t = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, v = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, R = e ? Symbol.for("react.suspense_list") : 60120, k = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
  function w(l) {
    if (typeof l == "object" && l !== null) {
      var D = l.$$typeof;
      switch (D) {
        case r:
          switch (l = l.type, l) {
            case d:
            case h:
            case i:
            case o:
            case a:
            case g:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case t:
                case v:
                case C:
                case k:
                case u:
                  return l;
                default:
                  return D;
              }
          }
        case c:
          return D;
      }
    }
  }
  function A(l) {
    return w(l) === h;
  }
  return M.AsyncMode = d, M.ConcurrentMode = h, M.ContextConsumer = t, M.ContextProvider = u, M.Element = r, M.ForwardRef = v, M.Fragment = i, M.Lazy = C, M.Memo = k, M.Portal = c, M.Profiler = o, M.StrictMode = a, M.Suspense = g, M.isAsyncMode = function(l) {
    return A(l) || w(l) === d;
  }, M.isConcurrentMode = A, M.isContextConsumer = function(l) {
    return w(l) === t;
  }, M.isContextProvider = function(l) {
    return w(l) === u;
  }, M.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === r;
  }, M.isForwardRef = function(l) {
    return w(l) === v;
  }, M.isFragment = function(l) {
    return w(l) === i;
  }, M.isLazy = function(l) {
    return w(l) === C;
  }, M.isMemo = function(l) {
    return w(l) === k;
  }, M.isPortal = function(l) {
    return w(l) === c;
  }, M.isProfiler = function(l) {
    return w(l) === o;
  }, M.isStrictMode = function(l) {
    return w(l) === a;
  }, M.isSuspense = function(l) {
    return w(l) === g;
  }, M.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === i || l === h || l === o || l === a || l === g || l === R || typeof l == "object" && l !== null && (l.$$typeof === C || l.$$typeof === k || l.$$typeof === u || l.$$typeof === t || l.$$typeof === v || l.$$typeof === _ || l.$$typeof === E || l.$$typeof === b || l.$$typeof === S);
  }, M.typeOf = w, M;
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
var Wt;
function sn() {
  return Wt || (Wt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, c = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, t = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, v = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, R = e ? Symbol.for("react.suspense_list") : 60120, k = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
    function w(m) {
      return typeof m == "string" || typeof m == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      m === i || m === h || m === o || m === a || m === g || m === R || typeof m == "object" && m !== null && (m.$$typeof === C || m.$$typeof === k || m.$$typeof === u || m.$$typeof === t || m.$$typeof === v || m.$$typeof === _ || m.$$typeof === E || m.$$typeof === b || m.$$typeof === S);
    }
    function A(m) {
      if (typeof m == "object" && m !== null) {
        var Ie = m.$$typeof;
        switch (Ie) {
          case r:
            var Re = m.type;
            switch (Re) {
              case d:
              case h:
              case i:
              case o:
              case a:
              case g:
                return Re;
              default:
                var be = Re && Re.$$typeof;
                switch (be) {
                  case t:
                  case v:
                  case C:
                  case k:
                  case u:
                    return be;
                  default:
                    return Ie;
                }
            }
          case c:
            return Ie;
        }
      }
    }
    var l = d, D = h, P = t, Ee = u, fe = r, we = v, Se = i, le = C, q = k, H = c, Z = o, se = a, de = g, ae = !1;
    function ve(m) {
      return ae || (ae = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ie(m) || A(m) === d;
    }
    function ie(m) {
      return A(m) === h;
    }
    function he(m) {
      return A(m) === t;
    }
    function me(m) {
      return A(m) === u;
    }
    function ge(m) {
      return typeof m == "object" && m !== null && m.$$typeof === r;
    }
    function _e(m) {
      return A(m) === v;
    }
    function xe(m) {
      return A(m) === i;
    }
    function ce(m) {
      return A(m) === C;
    }
    function oe(m) {
      return A(m) === k;
    }
    function re(m) {
      return A(m) === c;
    }
    function ue(m) {
      return A(m) === o;
    }
    function ne(m) {
      return A(m) === a;
    }
    function pe(m) {
      return A(m) === g;
    }
    F.AsyncMode = l, F.ConcurrentMode = D, F.ContextConsumer = P, F.ContextProvider = Ee, F.Element = fe, F.ForwardRef = we, F.Fragment = Se, F.Lazy = le, F.Memo = q, F.Portal = H, F.Profiler = Z, F.StrictMode = se, F.Suspense = de, F.isAsyncMode = ve, F.isConcurrentMode = ie, F.isContextConsumer = he, F.isContextProvider = me, F.isElement = ge, F.isForwardRef = _e, F.isFragment = xe, F.isLazy = ce, F.isMemo = oe, F.isPortal = re, F.isProfiler = ue, F.isStrictMode = ne, F.isSuspense = pe, F.isValidElementType = w, F.typeOf = A;
  }()), F;
}
process.env.NODE_ENV === "production" ? dt.exports = ln() : dt.exports = sn();
var dn = dt.exports, er = dn, vn = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, hn = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, tr = {};
tr[er.ForwardRef] = vn;
tr[er.Memo] = hn;
var mn = !0;
function gn(e, r, c) {
  var i = "";
  return c.split(" ").forEach(function(a) {
    e[a] !== void 0 ? r.push(e[a] + ";") : i += a + " ";
  }), i;
}
var rr = function(r, c, i) {
  var a = r.key + "-" + c.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (i === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  mn === !1) && r.registered[a] === void 0 && (r.registered[a] = c.styles);
}, bn = function(r, c, i) {
  rr(r, c, i);
  var a = r.key + "-" + c.name;
  if (r.inserted[c.name] === void 0) {
    var o = c;
    do
      r.insert(c === o ? "." + a : "", o, r.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function yn(e) {
  for (var r = 0, c, i = 0, a = e.length; a >= 4; ++i, a -= 4)
    c = e.charCodeAt(i) & 255 | (e.charCodeAt(++i) & 255) << 8 | (e.charCodeAt(++i) & 255) << 16 | (e.charCodeAt(++i) & 255) << 24, c = /* Math.imul(k, m): */
    (c & 65535) * 1540483477 + ((c >>> 16) * 59797 << 16), c ^= /* k >>> r: */
    c >>> 24, r = /* Math.imul(k, m): */
    (c & 65535) * 1540483477 + ((c >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      r ^= (e.charCodeAt(i + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(i + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(i) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var En = {
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
  scale: 1,
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
}, wn = !1, Sn = /[A-Z]|^ms/g, _n = /_EMO_([^_]+?)_([^]*?)_EMO_/g, nr = function(r) {
  return r.charCodeAt(1) === 45;
}, zt = function(r) {
  return r != null && typeof r != "boolean";
}, ut = /* @__PURE__ */ en(function(e) {
  return nr(e) ? e : e.replace(Sn, "-$&").toLowerCase();
}), Vt = function(r, c) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof c == "string")
        return c.replace(_n, function(i, a, o) {
          return p = {
            name: a,
            styles: o,
            next: p
          }, a;
        });
  }
  return En[r] !== 1 && !nr(r) && typeof c == "number" && c !== 0 ? c + "px" : c;
}, xn = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function We(e, r, c) {
  if (c == null)
    return "";
  var i = c;
  if (i.__emotion_styles !== void 0)
    return i;
  switch (typeof c) {
    case "boolean":
      return "";
    case "object": {
      var a = c;
      if (a.anim === 1)
        return p = {
          name: a.name,
          styles: a.styles,
          next: p
        }, a.name;
      var o = c;
      if (o.styles !== void 0) {
        var u = o.next;
        if (u !== void 0)
          for (; u !== void 0; )
            p = {
              name: u.name,
              styles: u.styles,
              next: p
            }, u = u.next;
        var t = o.styles + ";";
        return t;
      }
      return Rn(e, r, c);
    }
    case "function": {
      if (e !== void 0) {
        var d = p, h = c(e);
        return p = d, We(e, r, h);
      }
      break;
    }
  }
  var v = c;
  return v;
}
function Rn(e, r, c) {
  var i = "";
  if (Array.isArray(c))
    for (var a = 0; a < c.length; a++)
      i += We(e, r, c[a]) + ";";
  else
    for (var o in c) {
      var u = c[o];
      if (typeof u != "object") {
        var t = u;
        zt(t) && (i += ut(o) + ":" + Vt(o, t) + ";");
      } else {
        if (o === "NO_COMPONENT_SELECTOR" && wn)
          throw new Error(xn);
        if (Array.isArray(u) && typeof u[0] == "string" && r == null)
          for (var d = 0; d < u.length; d++)
            zt(u[d]) && (i += ut(o) + ":" + Vt(o, u[d]) + ";");
        else {
          var h = We(e, r, u);
          switch (o) {
            case "animation":
            case "animationName": {
              i += ut(o) + ":" + h + ";";
              break;
            }
            default:
              i += o + "{" + h + "}";
          }
        }
      }
    }
  return i;
}
var Ut = /label:\s*([^\s;\n{]+)\s*(;|$)/g, p;
function Cn(e, r, c) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var i = !0, a = "";
  p = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0)
    i = !1, a += We(c, r, o);
  else {
    var u = o;
    a += u[0];
  }
  for (var t = 1; t < e.length; t++)
    if (a += We(c, r, e[t]), i) {
      var d = o;
      a += d[t];
    }
  Ut.lastIndex = 0;
  for (var h = "", v; (v = Ut.exec(a)) !== null; )
    h += "-" + v[1];
  var g = yn(a) + h;
  return {
    name: g,
    styles: a,
    next: p
  };
}
var Tn = function(r) {
  return r();
}, kn = ee.useInsertionEffect ? ee.useInsertionEffect : !1, Pn = kn || Tn, $n = !1, ar = /* @__PURE__ */ ee.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ fn({
    key: "css"
  }) : null
);
ar.Provider;
var On = function(r) {
  return /* @__PURE__ */ $e(function(c, i) {
    var a = kr(ar);
    return r(c, a, i);
  });
}, An = /* @__PURE__ */ ee.createContext({}), bt = {}.hasOwnProperty, vt = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", In = function(r, c) {
  var i = {};
  for (var a in c)
    bt.call(c, a) && (i[a] = c[a]);
  return i[vt] = r, i;
}, Mn = function(r) {
  var c = r.cache, i = r.serialized, a = r.isStringTag;
  return rr(c, i, a), Pn(function() {
    return bn(c, i, a);
  }), null;
}, Fn = /* @__PURE__ */ On(
  /* <any, any> */
  function(e, r, c) {
    var i = e.css;
    typeof i == "string" && r.registered[i] !== void 0 && (i = r.registered[i]);
    var a = e[vt], o = [i], u = "";
    typeof e.className == "string" ? u = gn(r.registered, o, e.className) : e.className != null && (u = e.className + " ");
    var t = Cn(o, void 0, ee.useContext(An));
    u += r.key + "-" + t.name;
    var d = {};
    for (var h in e)
      bt.call(e, h) && h !== "css" && h !== vt && !$n && (d[h] = e[h]);
    return d.className = u, c && (d.ref = c), /* @__PURE__ */ ee.createElement(ee.Fragment, null, /* @__PURE__ */ ee.createElement(Mn, {
      cache: r,
      serialized: t,
      isStringTag: typeof a == "string"
    }), /* @__PURE__ */ ee.createElement(a, d));
  }
), jn = Fn;
function Ae(e, r, c) {
  return bt.call(r, "css") ? jt.jsx(jn, In(e, r), c) : jt.jsx(e, r, c);
}
const Ve = (e) => {
  const r = { ...e }, c = [
    ...Dn,
    ...Yn,
    ...Nn,
    ...Ln,
    ...zn,
    ...Wn,
    ...Vn,
    ...qn,
    ...Un
  ];
  return Object.keys(e).forEach((i) => {
    c.includes(i) && (e[i], delete r[i]);
  }), { elementProps: r };
}, Dn = [
  "width",
  "minWidth",
  "maxWidth",
  "height",
  "minHeight",
  "maxHeight"
], Nn = [
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
], Ln = ["position", "axis", "transform"], Yn = [
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
  "opacity",
  "scale"
], Wn = ["border", "borderRadius"], zn = ["padding", "margin"], Vn = ["scroll"], Un = ["active", "focus", "hover", "disabled"], qn = ["mediaQuery"], z = (e) => L(e), Ue = ({ mediaQuery: e }) => {
  var a, o, u, t, d, h;
  const r = () => {
    var v, g, R, k, C, S, _, E, b, w, A, l;
    if (e)
      return {
        s1440: {
          ...z(e.s1440 || {}),
          "&:hover": z(((v = e.s1440) == null ? void 0 : v.hover) || {}),
          "&:active": z(((g = e.s1440) == null ? void 0 : g.active) || {})
        },
        s1280: {
          ...z(e.s1280 || {}),
          "&:hover": z(((R = e.s1280) == null ? void 0 : R.hover) || {}),
          "&:active": z(((k = e.s1280) == null ? void 0 : k.active) || {})
        },
        s1080: {
          ...z(e.s1080 || {}),
          "&:hover": z(((C = e.s1080) == null ? void 0 : C.hover) || {}),
          "&:active": z(((S = e.s1080) == null ? void 0 : S.active) || {})
        },
        s768: {
          ...z(e.s768 || {}),
          "&:hover": z(((_ = e.s768) == null ? void 0 : _.hover) || {}),
          "&:active": z(((E = e.s768) == null ? void 0 : E.active) || {})
        },
        s600: {
          ...z(e.s600 || {}),
          "&:hover": z(((b = e.s600) == null ? void 0 : b.hover) || {}),
          "&:active": z(((w = e.s600) == null ? void 0 : w.active) || {})
        },
        s428: {
          ...z(e.s428 || {}),
          "&:hover": z(((A = e.s428) == null ? void 0 : A.hover) || {}),
          "&:active": z(((l = e.s428) == null ? void 0 : l.active) || {})
        }
      };
  }, i = [1440, 1280, 1080, 768, 600, 428].map((v) => `@media (max-width: ${v}px)`);
  return {
    [i[0]]: { ...(a = r()) == null ? void 0 : a.s1440 },
    [i[1]]: { ...(o = r()) == null ? void 0 : o.s1280 },
    [i[2]]: { ...(u = r()) == null ? void 0 : u.s1080 },
    [i[3]]: { ...(t = r()) == null ? void 0 : t.s768 },
    [i[4]]: { ...(d = r()) == null ? void 0 : d.s600 },
    [i[5]]: { ...(h = r()) == null ? void 0 : h.s428 }
  };
}, Kn = $e(({ as: e = "div", children: r, direction: c, onClick: i, ...a }, o) => {
  const { elementProps: u } = Ve(a), t = Ue({ mediaQuery: a.mediaQuery }), h = {
    ...L({
      ...a,
      positionType: "absolute",
      width: a.width,
      display: a.display ?? "flex",
      direction: c ?? "row",
      align: (a == null ? void 0 : a.align) ?? "stretch",
      userSelect: a.userSelect ? a.userSelect : i && "none",
      cursor: a.cursor ? a.cursor : i && "pointer",
      backgroundRepeat: (a == null ? void 0 : a.backgroundRepeat) ?? "no-repeat",
      backgroundSize: (a == null ? void 0 : a.backgroundSize) ?? "cover",
      backgroundPosition: (a == null ? void 0 : a.backgroundPosition) ?? "center"
    }),
    ...t,
    "&:hover": L({ ...a.hover }),
    "&:active": L({ ...a.active }),
    "&:disabled": L({
      ...a.disabled,
      direction: c ?? "row"
    })
  };
  return /* @__PURE__ */ Ae(
    e || "div",
    {
      css: h,
      className: `flex-row flex-row-${e}`,
      onClick: i,
      ...u,
      ref: o,
      children: r
    }
  );
}), Bn = $e(({ as: e = "div", children: r, direction: c, onClick: i, ...a }, o) => {
  const { elementProps: u } = Ve(a), t = Ue({ mediaQuery: a.mediaQuery }), h = {
    ...L({
      ...a,
      positionType: "fixed",
      width: a.width,
      display: a.display ?? "flex",
      direction: c ?? "row",
      align: (a == null ? void 0 : a.align) ?? "stretch",
      userSelect: a.userSelect ? a.userSelect : i && "none",
      cursor: a.cursor ? a.cursor : i && "pointer",
      backgroundRepeat: (a == null ? void 0 : a.backgroundRepeat) ?? "no-repeat",
      backgroundSize: (a == null ? void 0 : a.backgroundSize) ?? "cover",
      backgroundPosition: (a == null ? void 0 : a.backgroundPosition) ?? "center"
    }),
    ...t,
    "&:hover": L({ ...a.hover }),
    "&:active": L({ ...a.active }),
    "&:disabled": L({
      ...a.disabled,
      direction: c ?? "row"
    })
  };
  return /* @__PURE__ */ Ae(
    e || "div",
    {
      css: h,
      className: `flex-row flex-row-${e}`,
      onClick: i,
      ...u,
      ref: o,
      children: r
    }
  );
}), Gn = $e(({ as: e = "div", children: r, direction: c, onClick: i, ...a }, o) => {
  const { elementProps: u } = Ve(a), t = Ue({ mediaQuery: a.mediaQuery }), h = {
    ...L({
      ...a,
      positionType: "sticky",
      width: a.width,
      display: a.display ?? "flex",
      direction: c ?? "row",
      align: (a == null ? void 0 : a.align) ?? "stretch",
      userSelect: a.userSelect ? a.userSelect : i && "none",
      cursor: a.cursor ? a.cursor : i && "pointer",
      backgroundRepeat: (a == null ? void 0 : a.backgroundRepeat) ?? "no-repeat",
      backgroundSize: (a == null ? void 0 : a.backgroundSize) ?? "cover",
      backgroundPosition: (a == null ? void 0 : a.backgroundPosition) ?? "center"
    }),
    ...t,
    "&:hover": L({ ...a.hover }),
    "&:active": L({ ...a.active }),
    "&:disabled": L({
      ...a.disabled,
      direction: c ?? "row"
    })
  };
  return /* @__PURE__ */ Ae(
    e || "div",
    {
      css: h,
      className: `flex-row flex-row-${e}`,
      onClick: i,
      ...u,
      ref: o,
      children: r
    }
  );
});
function yt({ children: e }) {
  const r = qt.only(e);
  return Kt(r);
}
yt.Absolute = Kn;
yt.Fixed = Bn;
yt.Sticky = Gn;
const Xn = $e((e, r) => {
  const { as: c = "div", children: i, onClick: a, ...o } = e, { elementProps: u } = Ve(o), t = Ue({ mediaQuery: o.mediaQuery }), h = {
    ...L({
      ...o,
      width: o.width ?? "100%",
      positionType: o.positionType ?? "relative",
      display: e.display ?? "flex",
      direction: "column",
      align: (e == null ? void 0 : e.align) ?? "start",
      userSelect: o.userSelect ? o.userSelect : a && "none",
      cursor: o.cursor ? o.cursor : a && "pointer",
      backgroundRepeat: (o == null ? void 0 : o.backgroundRepeat) ?? "no-repeat",
      backgroundSize: (o == null ? void 0 : o.backgroundSize) ?? "cover",
      backgroundPosition: (o == null ? void 0 : o.backgroundPosition) ?? "center"
    }),
    ...t,
    "&:hover": L({ ...o.hover }),
    "&:active": L({ ...o.active }),
    "&:disabled": L({ ...o.disabled })
  };
  return /* @__PURE__ */ Ae(
    c || "div",
    {
      css: h,
      className: `flex-row flex-row-${c}`,
      onClick: a,
      ...u,
      ref: r,
      children: i
    }
  );
}), Hn = $e((e, r) => {
  const { as: c = "div", children: i, onClick: a, ...o } = e, { elementProps: u } = Ve(o), t = Ue({ mediaQuery: o.mediaQuery }), h = {
    ...L({
      ...o,
      width: o.width ?? "100%",
      positionType: o.positionType ?? "relative",
      display: e.display ?? "flex",
      direction: "row",
      align: (e == null ? void 0 : e.align) ?? "stretch",
      userSelect: o.userSelect ? o.userSelect : a && "none",
      cursor: o.cursor ? o.cursor : a && "pointer",
      backgroundRepeat: (o == null ? void 0 : o.backgroundRepeat) ?? "no-repeat",
      backgroundSize: (o == null ? void 0 : o.backgroundSize) ?? "cover",
      backgroundPosition: (o == null ? void 0 : o.backgroundPosition) ?? "center"
    }),
    ...t,
    "&:hover": L({ ...o.hover }),
    "&:active": L({ ...o.active }),
    "&:disabled": L({ ...o.disabled })
  };
  return /* @__PURE__ */ Ae(
    c || "div",
    {
      css: h,
      className: `flex-row flex-row-${c}`,
      onClick: a,
      ...u,
      ref: r,
      children: i
    }
  );
}), Jn = ({
  children: e,
  maxWidth: r,
  gap: c,
  scrollBarActive: i = !1,
  snap: a = !1,
  ...o
}) => {
  const [u, t] = ct(!1), [d, h] = ct(0), [v, g] = ct(0), R = Pr(null), k = ot(
    (_) => {
      var w;
      const E = _.target.tagName.toLowerCase();
      if (["input", "select", "textarea", "button"].includes(E))
        return;
      const b = _.type.includes("touch") ? _.touches[0].clientX : _.clientX;
      t(!0), h(b), g(((w = R.current) == null ? void 0 : w.scrollLeft) || 0), _.preventDefault();
    },
    []
  ), C = ot(
    (_) => {
      if (!u) return;
      const b = ((_.type.includes("touch") ? _.touches[0].clientX : _.clientX) - d) * 1.5;
      R.current && requestAnimationFrame(() => {
        R.current.scrollLeft = v - b;
      });
    },
    [u, d, v]
  ), S = ot(() => {
    if (t(!1), a && R.current) {
      const E = Array.from(R.current.children).reduce(
        (b, w) => {
          const l = w.getBoundingClientRect().left - R.current.getBoundingClientRect().left;
          return Math.abs(l) < 50 ? { offset: l, element: w } : b;
        },
        {
          offset: Number.POSITIVE_INFINITY,
          element: null
        }
      );
      E.element && E.element.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest"
      });
    }
  }, [a]);
  return /* @__PURE__ */ Ae(
    "div",
    {
      ref: R,
      onMouseDown: k,
      onTouchStart: k,
      onMouseMove: u ? C : void 0,
      onTouchMove: u ? C : void 0,
      onMouseLeave: S,
      onMouseUp: S,
      onTouchEnd: S,
      css: {
        width: "100%",
        maxWidth: `${r}px`,
        columnGap: `${c}px`,
        display: "flex",
        overflowX: "auto",
        cursor: u ? "grabbing" : "grab",
        padding: "1px 0",
        userSelect: "none",
        scrollSnapType: u || !a ? "none" : "x mandatory",
        transition: "scroll 0.3s ease-in-out",
        "& > *": {
          scrollSnapAlign: "start"
        },
        "&::-webkit-scrollbar": {
          display: i ? "flex" : "none"
        }
      },
      ...o,
      children: e
    }
  );
};
function Et({ children: e }) {
  const r = qt.only(e);
  return Kt(r);
}
Et.Column = Xn;
Et.Row = Hn;
Et.ScrollDragHorizontal = Jn;
export {
  yt as P,
  Et as V,
  L as ViewTheme
};
