"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.P = void 0;
/** @jsxImportSource @emotion/react */
var react_1 = require("react");
var Absolute_1 = __importDefault(require("./position/Absolute"));
var Fixed_1 = __importDefault(require("./position/Fixed"));
var Sticky_1 = __importDefault(require("./position/Sticky"));
function P(_a) {
    var children = _a.children;
    var child = react_1.Children.only(children);
    return (0, react_1.cloneElement)(child);
}
exports.P = P;
P.Absolute = Absolute_1.default;
P.Fixed = Fixed_1.default;
P.Sticky = Sticky_1.default;
