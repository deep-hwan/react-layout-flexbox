"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
var react_1 = require("react");
var extandedProps_1 = require("../../utils/extandedProps");
var view_1 = require("../../themes/view");
var mediaQuery_1 = require("../../themes/mediaQuery");
//
var Fixed = (0, react_1.forwardRef)(function (_a, ref) {
    var _b, _c, _d, _e, _f;
    var _g = _a.as, as = _g === void 0 ? "div" : _g, children = _a.children, direction = _a.direction, onClick = _a.onClick, props = __rest(_a, ["as", "children", "direction", "onClick"]);
    var elementProps = (0, extandedProps_1.extandedProps)(props).elementProps;
    var mq_styles = (0, mediaQuery_1.extandedMediaQuery)({ _mediaQuery: props._mediaQuery });
    var view_theme = (0, view_1.ViewTheme)(__assign(__assign({}, props), { positionType: "fixed", width: props.width, display: (_b = props.display) !== null && _b !== void 0 ? _b : "flex", direction: direction !== null && direction !== void 0 ? direction : "row", align: (_c = props === null || props === void 0 ? void 0 : props.align) !== null && _c !== void 0 ? _c : "stretch", userSelect: props.userSelect ? props.userSelect : onClick && "none", cursor: props.cursor ? props.cursor : onClick && "pointer", backgroundRepeat: (_d = props === null || props === void 0 ? void 0 : props.backgroundRepeat) !== null && _d !== void 0 ? _d : "no-repeat", backgroundSize: (_e = props === null || props === void 0 ? void 0 : props.backgroundSize) !== null && _e !== void 0 ? _e : "cover", backgroundPosition: (_f = props === null || props === void 0 ? void 0 : props.backgroundPosition) !== null && _f !== void 0 ? _f : "center" }));
    var global_theme = __assign(__assign(__assign({}, view_theme), mq_styles), { "&:hover": (0, view_1.ViewTheme)(__assign({}, props._hover)), "&:active": (0, view_1.ViewTheme)(__assign({}, props._active)), "&:disabled": (0, view_1.ViewTheme)(__assign(__assign({}, props._disabled), { direction: direction !== null && direction !== void 0 ? direction : "row" })) });
    var Element = as || "div";
    return ((0, jsx_runtime_1.jsx)(Element, __assign({ css: global_theme, className: "flex-row flex-row-".concat(as), onClick: onClick }, elementProps, { ref: ref }, { children: children })));
});
exports.default = Fixed;
