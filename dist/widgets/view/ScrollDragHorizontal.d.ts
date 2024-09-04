import { HTMLAttributes, ReactNode } from 'react';
type Types = {
    children: ReactNode;
    maxWidth?: number;
    gap?: number;
    scrollBarActive?: boolean;
    snap?: boolean;
} & HTMLAttributes<HTMLDivElement>;
declare const ScrollDragHorizontal: ({ children, maxWidth, gap, scrollBarActive, snap, ...props }: Types) => import("@emotion/react/jsx-runtime").JSX.Element;
export default ScrollDragHorizontal;
