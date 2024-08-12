/** @jsxImportSource @emotion/react */
import { ReactElement } from "react";
export declare function V({ children }: {
    children: ReactElement;
}): ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export declare namespace V {
    var Column: typeof import("./view/Column").default;
    var Row: typeof import("./view/Row").default;
    var ScrollDragHorizontal: ({ children, maxWidth, gap, scrollBarActive, ...props }: {
        children: import("react").ReactNode;
        maxWidth?: number | undefined;
        gap?: number | undefined;
        scrollBarActive?: boolean | undefined;
    } & import("react").HTMLAttributes<HTMLDivElement>) => import("@emotion/react/jsx-runtime").JSX.Element;
}
