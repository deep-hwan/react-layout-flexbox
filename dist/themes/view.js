"use strict";
/** @jsxImportSource @emotion/react */
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewTheme = void 0;
var ViewTheme = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16;
    var direction = _a.direction, reverse = _a.reverse, gap = _a.gap, crossGap = _a.crossGap, border = _a.border, borderRadius = _a.borderRadius, axis = _a.axis, props = __rest(_a, ["direction", "reverse", "gap", "crossGap", "border", "borderRadius", "axis"]);
    var _17 = border !== null && border !== void 0 ? border : {}, solid = _17.solid, _18 = _17.position, position = _18 === void 0 ? "all" : _18, color = _17.color, _19 = _17.shape, shape = _19 === void 0 ? "solid" : _19;
    if (!props)
        return {};
    return {
        width: props === null || props === void 0 ? void 0 : props.width,
        minWidth: props === null || props === void 0 ? void 0 : props.minWidth,
        maxWidth: props === null || props === void 0 ? void 0 : props.maxWidth,
        height: props === null || props === void 0 ? void 0 : props.height,
        minHeight: props === null || props === void 0 ? void 0 : props.minHeight,
        maxHeight: props === null || props === void 0 ? void 0 : props.maxHeight,
        //
        position: props.positionType,
        top: (_b = props === null || props === void 0 ? void 0 : props.position) === null || _b === void 0 ? void 0 : _b.top,
        bottom: (_c = props.position) === null || _c === void 0 ? void 0 : _c.bottom,
        left: (_d = props.position) === null || _d === void 0 ? void 0 : _d.left,
        right: (_e = props.position) === null || _e === void 0 ? void 0 : _e.right,
        transform: !!axis &&
            "translate(".concat(typeof (axis === null || axis === void 0 ? void 0 : axis.x) === "number" ? (axis === null || axis === void 0 ? void 0 : axis.x) + "px" : (_f = axis === null || axis === void 0 ? void 0 : axis.x) !== null && _f !== void 0 ? _f : 0, ", ").concat(typeof (axis === null || axis === void 0 ? void 0 : axis.y) === "number" ? (axis === null || axis === void 0 ? void 0 : axis.y) + "px" : (_g = axis === null || axis === void 0 ? void 0 : axis.y) !== null && _g !== void 0 ? _g : 0, ")"),
        //
        display: props === null || props === void 0 ? void 0 : props.display,
        flexDirection: reverse && direction ? direction + "-reverse" : direction,
        alignItems: props.align,
        justifyContent: props === null || props === void 0 ? void 0 : props.crossAlign,
        alignContent: props === null || props === void 0 ? void 0 : props.alignContent,
        alignSelf: props === null || props === void 0 ? void 0 : props.alignSelf,
        flex: props.flex,
        flexWrap: props === null || props === void 0 ? void 0 : props.wrap,
        flexBasis: props === null || props === void 0 ? void 0 : props.basis,
        flexFlow: props === null || props === void 0 ? void 0 : props.flow,
        flexGrow: props === null || props === void 0 ? void 0 : props.grow,
        flexShrink: props === null || props === void 0 ? void 0 : props.shrink,
        rowGap: (direction === "column" && gap) ||
            (direction === "row" && crossGap) ||
            gap,
        columnGap: (direction === "column" && crossGap) ||
            (direction === "row" && gap) ||
            crossGap,
        order: props.order,
        //
        background: props === null || props === void 0 ? void 0 : props.background,
        backgroundColor: props === null || props === void 0 ? void 0 : props.backgroundColor,
        backgroundRepeat: (_h = props === null || props === void 0 ? void 0 : props.backgroundRepeat) !== null && _h !== void 0 ? _h : "no-repeat",
        backgroundSize: (_j = props === null || props === void 0 ? void 0 : props.backgroundSize) !== null && _j !== void 0 ? _j : "cover",
        backgroundPosition: (_k = props === null || props === void 0 ? void 0 : props.backgroundPosition) !== null && _k !== void 0 ? _k : "center",
        backgroundClip: props === null || props === void 0 ? void 0 : props.backgroundClip,
        backgroundImage: (props === null || props === void 0 ? void 0 : props.backgroundImageUrl) && "url(".concat(props === null || props === void 0 ? void 0 : props.backgroundImageUrl, ")"),
        boxShadow: (props === null || props === void 0 ? void 0 : props.shadow)
            ? "".concat((_l = props === null || props === void 0 ? void 0 : props.shadow) === null || _l === void 0 ? void 0 : _l.x, "px ").concat((_m = props === null || props === void 0 ? void 0 : props.shadow) === null || _m === void 0 ? void 0 : _m.y, "px ").concat((_o = props === null || props === void 0 ? void 0 : props.shadow) === null || _o === void 0 ? void 0 : _o.blur, "px ").concat((_p = props === null || props === void 0 ? void 0 : props.shadow) === null || _p === void 0 ? void 0 : _p.color)
            : undefined,
        filter: !!props.filter && "blur(".concat(props.filter, ")"),
        zIndex: props === null || props === void 0 ? void 0 : props.zIndex,
        transition: (props === null || props === void 0 ? void 0 : props.transitionTime) && "".concat(props === null || props === void 0 ? void 0 : props.transitionTime, "s ease-in-out"),
        cursor: props === null || props === void 0 ? void 0 : props.cursor,
        opacity: props.opacity,
        rotate: typeof props.rotate === "number" ? props.rotate + "deg" : props.rotate,
        userSelect: props.userSelect,
        scale: props.scale,
        //
        border: !!solid && position === "all"
            ? "".concat(solid, "px ").concat(shape, " ").concat(color)
            : undefined,
        borderBottom: position === "bottom" ? "".concat(solid, "px ").concat(shape, " ").concat(color) : undefined,
        borderTop: position === "top" ? "".concat(solid, "px ").concat(shape, " ").concat(color) : undefined,
        borderRight: position === "right" ? "".concat(solid, "px ").concat(shape, " ").concat(color) : undefined,
        borderLeft: position === "left" ? "".concat(solid, "px ").concat(shape, " ").concat(color) : undefined,
        borderRadius: borderRadius,
        //
        paddingTop: ((_q = props === null || props === void 0 ? void 0 : props.padding) === null || _q === void 0 ? void 0 : _q.all) || ((_r = props === null || props === void 0 ? void 0 : props.padding) === null || _r === void 0 ? void 0 : _r.vertical) || ((_s = props === null || props === void 0 ? void 0 : props.padding) === null || _s === void 0 ? void 0 : _s.top),
        paddingBottom: ((_t = props === null || props === void 0 ? void 0 : props.padding) === null || _t === void 0 ? void 0 : _t.all) || ((_u = props === null || props === void 0 ? void 0 : props.padding) === null || _u === void 0 ? void 0 : _u.vertical) || ((_v = props === null || props === void 0 ? void 0 : props.padding) === null || _v === void 0 ? void 0 : _v.bottom),
        paddingRight: ((_w = props === null || props === void 0 ? void 0 : props.padding) === null || _w === void 0 ? void 0 : _w.all) ||
            ((_x = props === null || props === void 0 ? void 0 : props.padding) === null || _x === void 0 ? void 0 : _x.horizontal) ||
            ((_y = props === null || props === void 0 ? void 0 : props.padding) === null || _y === void 0 ? void 0 : _y.right),
        paddingLeft: ((_z = props === null || props === void 0 ? void 0 : props.padding) === null || _z === void 0 ? void 0 : _z.all) || ((_0 = props === null || props === void 0 ? void 0 : props.padding) === null || _0 === void 0 ? void 0 : _0.horizontal) || ((_1 = props === null || props === void 0 ? void 0 : props.padding) === null || _1 === void 0 ? void 0 : _1.left),
        //
        marginTop: ((_2 = props === null || props === void 0 ? void 0 : props.margin) === null || _2 === void 0 ? void 0 : _2.all) || ((_3 = props === null || props === void 0 ? void 0 : props.margin) === null || _3 === void 0 ? void 0 : _3.vertical) || ((_4 = props === null || props === void 0 ? void 0 : props.margin) === null || _4 === void 0 ? void 0 : _4.top),
        marginBottom: ((_5 = props === null || props === void 0 ? void 0 : props.margin) === null || _5 === void 0 ? void 0 : _5.all) || ((_6 = props === null || props === void 0 ? void 0 : props.margin) === null || _6 === void 0 ? void 0 : _6.vertical) || ((_7 = props === null || props === void 0 ? void 0 : props.margin) === null || _7 === void 0 ? void 0 : _7.bottom),
        marginRight: ((_8 = props === null || props === void 0 ? void 0 : props.margin) === null || _8 === void 0 ? void 0 : _8.all) || ((_9 = props === null || props === void 0 ? void 0 : props.margin) === null || _9 === void 0 ? void 0 : _9.horizontal) || ((_10 = props === null || props === void 0 ? void 0 : props.margin) === null || _10 === void 0 ? void 0 : _10.right),
        marginLeft: ((_11 = props === null || props === void 0 ? void 0 : props.margin) === null || _11 === void 0 ? void 0 : _11.all) || ((_12 = props === null || props === void 0 ? void 0 : props.margin) === null || _12 === void 0 ? void 0 : _12.horizontal) || ((_13 = props === null || props === void 0 ? void 0 : props.margin) === null || _13 === void 0 ? void 0 : _13.left),
        //
        overflowX: (_14 = props === null || props === void 0 ? void 0 : props.scroll) === null || _14 === void 0 ? void 0 : _14.x,
        overflowY: (_15 = props === null || props === void 0 ? void 0 : props.scroll) === null || _15 === void 0 ? void 0 : _15.y,
        listStyle: "none",
        "::-webkit-scrollbar": {
            display: ((_16 = props === null || props === void 0 ? void 0 : props.scroll) === null || _16 === void 0 ? void 0 : _16.bar) ? "flex" : "none",
            width: "4px",
            height: "4px",
        },
        "::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
        },
        "::-webkit-scrollbar-thumb": {
            backgroundColor: "#cccccc",
            borderRadius: "100px",
        },
        "::-webkit-scrollbar-thumb:hover": {
            background: "#e2e2e2",
        },
        "::-webkit-scrollbar-button:start:decrement, ::-webkit-scrollbar-button:end:increment": {
            width: 0,
            height: 0,
            backgroundColor: "transparent",
        },
    };
};
exports.ViewTheme = ViewTheme;
