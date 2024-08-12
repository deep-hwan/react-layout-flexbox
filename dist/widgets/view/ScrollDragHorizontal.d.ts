/** @jsxImportSource @emotion/react */
import { HTMLAttributes, ReactNode } from "react";
type Types = {
    children: ReactNode;
    maxWidth?: number;
    gap?: number;
    scrollBarActive?: boolean;
} & HTMLAttributes<HTMLDivElement>;
declare const ScrollDragHorizontal: ({ children, maxWidth, gap, scrollBarActive, ...props }: Types) => import("@emotion/react/jsx-runtime").JSX.Element;
export default ScrollDragHorizontal;
