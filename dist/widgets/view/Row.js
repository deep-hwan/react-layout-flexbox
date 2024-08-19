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
var extandedProps_1 = require("../../utils/extandedProps");
var view_1 = require("../../themes/view");
var mediaQuery_1 = require("../../themes/mediaQuery");
//
function Row(props) {
    var _a, _b, _c, _d, _e, _f, _g;
    var _h = props.as, as = _h === void 0 ? "div" : _h, children = props.children, onClick = props.onClick, restProps = __rest(props, ["as", "children", "onClick"]);
    var elementProps = (0, extandedProps_1.extandedProps)(restProps).elementProps;
    var mq_styles = (0, mediaQuery_1.extandedMediaQuery)({ mediaQuery: restProps.mediaQuery });
    var view_theme = (0, view_1.ViewTheme)(__assign(__assign({}, restProps), { width: (_a = restProps.width) !== null && _a !== void 0 ? _a : "100%", positionType: (_b = restProps.positionType) !== null && _b !== void 0 ? _b : "relative", display: (_c = props.display) !== null && _c !== void 0 ? _c : "flex", direction: "row", align: (_d = props === null || props === void 0 ? void 0 : props.align) !== null && _d !== void 0 ? _d : "stretch", userSelect: restProps.userSelect ? restProps.userSelect : onClick && "none", cursor: restProps.cursor ? restProps.cursor : onClick && "pointer", backgroundRepeat: (_e = restProps === null || restProps === void 0 ? void 0 : restProps.backgroundRepeat) !== null && _e !== void 0 ? _e : "no-repeat", backgroundSize: (_f = restProps === null || restProps === void 0 ? void 0 : restProps.backgroundSize) !== null && _f !== void 0 ? _f : "cover", backgroundPosition: (_g = restProps === null || restProps === void 0 ? void 0 : restProps.backgroundPosition) !== null && _g !== void 0 ? _g : "center" }));
    var globel_theme = __assign(__assign(__assign({}, view_theme), mq_styles), { "&:hover": (0, view_1.ViewTheme)(__assign({}, restProps.hover)), "&:active": (0, view_1.ViewTheme)(__assign({}, restProps.active)), "&:disabled": (0, view_1.ViewTheme)(__assign({}, restProps.disabled)) });
    //
    //
    if (as === "section")
        return ((0, jsx_runtime_1.jsx)("section", __assign({ css: globel_theme, className: "flex-column flex-section", onClick: onClick }, elementProps, { children: children })));
    if (as === "div")
        return ((0, jsx_runtime_1.jsx)("div", __assign({ css: globel_theme, className: "flex-column", onClick: onClick }, elementProps, { children: children })));
    if (as === "nav")
        return ((0, jsx_runtime_1.jsx)("nav", __assign({ css: globel_theme, className: "flex-column flex-column-nav", onClick: onClick }, elementProps, { children: children })));
    if (as === "aside")
        return ((0, jsx_runtime_1.jsx)("aside", __assign({ css: globel_theme, className: "flex-column flex-column-aside", onClick: onClick }, elementProps, { children: children })));
    if (as === "form")
        return ((0, jsx_runtime_1.jsx)("form", __assign({ css: globel_theme, className: "flex-column flex-column-form", onClick: onClick }, elementProps, { children: children })));
    if (as === "ul")
        return ((0, jsx_runtime_1.jsx)("ul", __assign({ css: globel_theme, className: "flex-column flex-column-ul", onClick: onClick }, elementProps, { children: children })));
    if (as === "li")
        return ((0, jsx_runtime_1.jsx)("li", __assign({ css: globel_theme, className: "flex-column flex-column-li", onClick: onClick }, elementProps, { children: children })));
    if (as === "ol")
        return ((0, jsx_runtime_1.jsx)("ol", __assign({ css: globel_theme, className: "flex-column flex-column-ol", onClick: onClick }, elementProps, { children: children })));
}
exports.default = Row;
