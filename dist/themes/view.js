"use strict";
/** @jsxImportSource @emotion/react */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewTheme = void 0;
var ViewTheme = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
    var direction = props.direction, reverse = props.reverse, gap = props.gap, crossGap = props.crossGap, border = props.border, borderRadius = props.borderRadius, axis = props.axis;
    var _4 = border !== null && border !== void 0 ? border : {}, solid = _4.solid, _5 = _4.position, position = _5 === void 0 ? "all" : _5, color = _4.color, _6 = _4.shape, shape = _6 === void 0 ? "solid" : _6;
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
        top: (_a = props === null || props === void 0 ? void 0 : props.position) === null || _a === void 0 ? void 0 : _a.top,
        bottom: (_b = props.position) === null || _b === void 0 ? void 0 : _b.bottom,
        left: (_c = props.position) === null || _c === void 0 ? void 0 : _c.left,
        right: (_d = props.position) === null || _d === void 0 ? void 0 : _d.right,
        transform: !!axis &&
            "translate(".concat(typeof (axis === null || axis === void 0 ? void 0 : axis.x) === "number" ? (axis === null || axis === void 0 ? void 0 : axis.x) + "px" : (_e = axis === null || axis === void 0 ? void 0 : axis.x) !== null && _e !== void 0 ? _e : 0, ", ").concat(typeof (axis === null || axis === void 0 ? void 0 : axis.y) === "number" ? (axis === null || axis === void 0 ? void 0 : axis.y) + "px" : (_f = axis === null || axis === void 0 ? void 0 : axis.y) !== null && _f !== void 0 ? _f : 0, ")"),
        //
        display: props === null || props === void 0 ? void 0 : props.display,
        flexDirection: reverse && props.direction
            ? props.direction + "-reverse"
            : props.direction,
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
        backgroundRepeat: (_g = props === null || props === void 0 ? void 0 : props.backgroundRepeat) !== null && _g !== void 0 ? _g : "no-repeat",
        backgroundSize: (_h = props === null || props === void 0 ? void 0 : props.backgroundSize) !== null && _h !== void 0 ? _h : "cover",
        backgroundPosition: (_j = props === null || props === void 0 ? void 0 : props.backgroundPosition) !== null && _j !== void 0 ? _j : "center",
        backgroundClip: props === null || props === void 0 ? void 0 : props.backgroundClip,
        backgroundImage: (props === null || props === void 0 ? void 0 : props.backgroundImageUrl) && "url(".concat(props === null || props === void 0 ? void 0 : props.backgroundImageUrl, ")"),
        boxShadow: (props === null || props === void 0 ? void 0 : props.shadow)
            ? "".concat((_k = props === null || props === void 0 ? void 0 : props.shadow) === null || _k === void 0 ? void 0 : _k.x, "px ").concat((_l = props === null || props === void 0 ? void 0 : props.shadow) === null || _l === void 0 ? void 0 : _l.y, "px ").concat((_m = props === null || props === void 0 ? void 0 : props.shadow) === null || _m === void 0 ? void 0 : _m.blur, "px ").concat((_o = props === null || props === void 0 ? void 0 : props.shadow) === null || _o === void 0 ? void 0 : _o.color)
            : undefined,
        filter: !!props.filter && "blur(".concat(props.filter, ")"),
        zIndex: props === null || props === void 0 ? void 0 : props.zIndex,
        transition: (props === null || props === void 0 ? void 0 : props.transitionTime) && "".concat(props === null || props === void 0 ? void 0 : props.transitionTime, "s ease-in-out"),
        cursor: props === null || props === void 0 ? void 0 : props.cursor,
        opacity: props.opacity,
        userSelect: props.userSelect,
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
        paddingTop: ((_p = props === null || props === void 0 ? void 0 : props.padding) === null || _p === void 0 ? void 0 : _p.all) || ((_q = props === null || props === void 0 ? void 0 : props.padding) === null || _q === void 0 ? void 0 : _q.vertical) || ((_r = props === null || props === void 0 ? void 0 : props.padding) === null || _r === void 0 ? void 0 : _r.top),
        paddingBottom: ((_s = props === null || props === void 0 ? void 0 : props.padding) === null || _s === void 0 ? void 0 : _s.all) || ((_t = props === null || props === void 0 ? void 0 : props.padding) === null || _t === void 0 ? void 0 : _t.vertical) || ((_u = props === null || props === void 0 ? void 0 : props.padding) === null || _u === void 0 ? void 0 : _u.bottom),
        paddingRight: ((_v = props === null || props === void 0 ? void 0 : props.padding) === null || _v === void 0 ? void 0 : _v.all) ||
            ((_w = props === null || props === void 0 ? void 0 : props.padding) === null || _w === void 0 ? void 0 : _w.horizontal) ||
            ((_x = props === null || props === void 0 ? void 0 : props.padding) === null || _x === void 0 ? void 0 : _x.right),
        paddingLeft: ((_y = props === null || props === void 0 ? void 0 : props.padding) === null || _y === void 0 ? void 0 : _y.all) || ((_z = props === null || props === void 0 ? void 0 : props.padding) === null || _z === void 0 ? void 0 : _z.horizontal) || ((_0 = props === null || props === void 0 ? void 0 : props.padding) === null || _0 === void 0 ? void 0 : _0.left),
        //
        overflowX: (_1 = props === null || props === void 0 ? void 0 : props.scroll) === null || _1 === void 0 ? void 0 : _1.x,
        overflowY: (_2 = props === null || props === void 0 ? void 0 : props.scroll) === null || _2 === void 0 ? void 0 : _2.y,
        listStyle: "none",
        "::-webkit-scrollbar": {
            display: ((_3 = props === null || props === void 0 ? void 0 : props.scroll) === null || _3 === void 0 ? void 0 : _3.bar) ? "flex" : "none",
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
