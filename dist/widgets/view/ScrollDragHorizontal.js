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
var ScrollDragHorizontal = function (_a) {
    var children = _a.children, maxWidth = _a.maxWidth, gap = _a.gap, _b = _a.scrollBarActive, scrollBarActive = _b === void 0 ? false : _b, props = __rest(_a, ["children", "maxWidth", "gap", "scrollBarActive"]);
    var _c = (0, react_1.useState)(false), isDragging = _c[0], setIsDragging = _c[1];
    var _d = (0, react_1.useState)(0), startX = _d[0], setStartX = _d[1];
    var _e = (0, react_1.useState)(0), scrollLeft = _e[0], setScrollLeft = _e[1];
    var _f = (0, react_1.useState)(false), dragThreshold = _f[0], setDragThreshold = _f[1];
    var ref = (0, react_1.useRef)(null);
    var startDrag = (0, react_1.useCallback)(function (e) {
        var _a, _b;
        var clientX = e.type.includes("mouse")
            ? e.pageX
            : e.touches[0].clientX;
        setIsDragging(true);
        setStartX(clientX - (((_a = ref.current) === null || _a === void 0 ? void 0 : _a.offsetLeft) || 0));
        setScrollLeft(((_b = ref.current) === null || _b === void 0 ? void 0 : _b.scrollLeft) || 0);
        setDragThreshold(false); // Initialize the threshold check
    }, []);
    var doDrag = (0, react_1.useCallback)(function (e) {
        var _a;
        if (!isDragging)
            return;
        var clientX = e.type.includes("mouse")
            ? e.pageX
            : e.touches[0].clientX;
        var x = clientX - (((_a = ref.current) === null || _a === void 0 ? void 0 : _a.offsetLeft) || 0);
        var walk = x - startX;
        if (Math.abs(walk) > 10 && !dragThreshold) {
            setDragThreshold(true); // Confirm it's a drag after moving 10px
        }
        if (dragThreshold) {
            e.preventDefault();
            if (ref.current) {
                ref.current.scrollLeft = scrollLeft - walk;
            }
        }
    }, [isDragging, startX, scrollLeft, dragThreshold]);
    var endDrag = (0, react_1.useCallback)(function () {
        var _a;
        setIsDragging(false);
        if (!dragThreshold) {
            // If it was not a drag, let the click event through
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.click();
        }
    }, [dragThreshold]);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ ref: ref, onMouseDown: startDrag, onTouchStart: startDrag, onMouseLeave: endDrag, onMouseUp: endDrag, onTouchEnd: endDrag, onMouseMove: doDrag, onTouchMove: doDrag, css: {
            width: "100%",
            maxWidth: "".concat(maxWidth, "px"),
            columnGap: "".concat(gap, "px"),
            display: "flex",
            overflowX: "auto",
            cursor: isDragging ? "grabbing" : "grab",
            padding: "1px 0",
            userSelect: "none",
            "& > *": {
                pointerEvents: isDragging && dragThreshold ? "none" : "auto",
            },
            "&::-webkit-scrollbar": {
                display: scrollBarActive ? "flex" : "none",
            },
        } }, props, { children: children })));
};
exports.default = ScrollDragHorizontal;
