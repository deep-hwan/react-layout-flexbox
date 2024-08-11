/** @jsxImportSource @emotion/react */
import { Children, ReactElement, cloneElement } from "react";
import Absolute from "./position/Absolute";
import Fixed from "./position/Fixed";
import Sticky from "./position/Sticky";

export function P({ children }: { children: ReactElement }) {
  const child = Children.only(children);

  return cloneElement(child);
}

P.Absolute = Absolute;
P.Fixed = Fixed;
P.Sticky = Sticky;
