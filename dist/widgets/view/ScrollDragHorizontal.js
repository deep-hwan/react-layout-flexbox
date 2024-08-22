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
    var children = _a.children, maxWidth = _a.maxWidth, gap = _a.gap, _b = _a.scrollBarActive, scrollBarActive = _b === void 0 ? false : _b, _c = _a.snap, snap = _c === void 0 ? false : _c, props = __rest(_a, ["children", "maxWidth", "gap", "scrollBarActive", "snap"]);
    var _d = (0, react_1.useState)(false), isDragging = _d[0], setIsDragging = _d[1];
    var _e = (0, react_1.useState)(0), startX = _e[0], setStartX = _e[1];
    var _f = (0, react_1.useState)(0), scrollLeft = _f[0], setScrollLeft = _f[1];
    var ref = (0, react_1.useRef)(null);
    var startDrag = (0, react_1.useCallback)(function (e) {
        var _a;
        var targetTag = e.target.tagName.toLowerCase();
        if (["input", "select", "textarea", "button"].includes(targetTag)) {
            return;
        }
        var clientX = e.type.includes("touch")
            ? e.touches[0].clientX
            : e.clientX;
        setIsDragging(true);
        setStartX(clientX);
        setScrollLeft(((_a = ref.current) === null || _a === void 0 ? void 0 : _a.scrollLeft) || 0);
        e.preventDefault();
    }, []);
    var doDrag = (0, react_1.useCallback)(function (e) {
        if (!isDragging)
            return;
        var clientX = e.type.includes("touch")
            ? e.touches[0].clientX
            : e.clientX;
        var walk = (clientX - startX) * 1.5; // Increase sensitivity
        if (ref.current) {
            requestAnimationFrame(function () {
                ref.current.scrollLeft = scrollLeft - walk;
            });
        }
    }, [isDragging, startX, scrollLeft]);
    var endDrag = (0, react_1.useCallback)(function () {
        setIsDragging(false);
        if (snap && ref.current) {
            var elements = Array.from(ref.current.children);
            var closestElement = elements.reduce(function (closest, child) {
                var box = child.getBoundingClientRect();
                var offset = box.left - ref.current.getBoundingClientRect().left;
                if (Math.abs(offset) < 50) {
                    return { offset: offset, element: child };
                }
                return closest;
            }, {
                offset: Number.POSITIVE_INFINITY,
                element: null,
            });
            if (closestElement.element) {
                closestElement.element.scrollIntoView({
                    behavior: "smooth",
                    inline: "start",
                    block: "nearest",
                });
            }
        }
    }, [snap]);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ ref: ref, onMouseDown: startDrag, onTouchStart: startDrag, onMouseMove: isDragging ? doDrag : undefined, onTouchMove: isDragging ? doDrag : undefined, onMouseLeave: endDrag, onMouseUp: endDrag, onTouchEnd: endDrag, css: {
            width: "100%",
            maxWidth: "".concat(maxWidth, "px"),
            columnGap: "".concat(gap, "px"),
            display: "flex",
            overflowX: "auto",
            cursor: isDragging ? "grabbing" : "grab",
            padding: "1px 0",
            userSelect: "none",
            scrollSnapType: isDragging || !snap ? "none" : "x mandatory",
            transition: "scroll 0.3s ease-in-out",
            "& > *": {
                scrollSnapAlign: "start",
            },
            "&::-webkit-scrollbar": {
                display: scrollBarActive ? "flex" : "none",
            },
        } }, props, { children: children })));
};
exports.default = ScrollDragHorizontal;
