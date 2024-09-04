"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.V = void 0;
/** @jsxImportSource @emotion/react */
var react_1 = require("react");
var Column_1 = __importDefault(require("./view/Column"));
var Row_1 = __importDefault(require("./view/Row"));
var ScrollDragHorizontal_1 = __importDefault(require("./view/ScrollDragHorizontal"));
function V(_a) {
    var children = _a.children;
    var child = react_1.Children.only(children);
    return (0, react_1.cloneElement)(child);
}
exports.V = V;
V.Column = Column_1.default;
V.Row = Row_1.default;
V.ScrollDragHorizontal = ScrollDragHorizontal_1.default;
