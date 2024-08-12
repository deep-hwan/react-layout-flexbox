/** @jsxImportSource @emotion/react */
import { Children, ReactElement, cloneElement } from "react";
import Column from "./view/Column";
import Row from "./view/Row";
import ScrollDragHorizontal from "./view/ScrollDragHorizontal";

export function V({ children }: { children: ReactElement }) {
  const child = Children.only(children);

  return cloneElement(child);
}

V.Column = Column;
V.Row = Row;
V.ScrollDragHorizontal = ScrollDragHorizontal;
