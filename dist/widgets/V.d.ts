/** @jsxImportSource @emotion/react */
import { ReactElement } from "react";
export declare function V({ children }: {
    children: ReactElement;
}): ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export declare namespace V {
    var Column: import("react").ForwardRefExoticComponent<{
        as?: "section" | "nav" | "div" | "aside" | "form" | "ul" | "li" | "ol" | undefined;
        children: import("react").ReactNode;
    } & Omit<import("..").ViewType, "direction"> & import("react").HTMLAttributes<HTMLDivElement | HTMLElement | HTMLFormElement | HTMLLIElement | HTMLOListElement | HTMLUListElement> & import("react").RefAttributes<HTMLDivElement | HTMLElement | HTMLFormElement | HTMLLIElement | HTMLOListElement | HTMLUListElement>>;
    var Row: import("react").ForwardRefExoticComponent<{
        as?: "section" | "nav" | "div" | "aside" | "form" | "ul" | "li" | "ol" | undefined;
        children: import("react").ReactNode;
    } & Omit<import("..").ViewType, "direction"> & import("react").HTMLAttributes<HTMLDivElement | HTMLElement | HTMLFormElement | HTMLLIElement | HTMLOListElement | HTMLUListElement> & import("react").RefAttributes<HTMLDivElement | HTMLElement | HTMLFormElement | HTMLLIElement | HTMLOListElement | HTMLUListElement>>;
    var ScrollDragHorizontal: ({ children, maxWidth, gap, scrollBarActive, snap, ...props }: {
        children: import("react").ReactNode;
        maxWidth?: number | undefined;
        gap?: number | undefined;
        scrollBarActive?: boolean | undefined;
        snap?: boolean | undefined;
    } & import("react").HTMLAttributes<HTMLDivElement>) => import("@emotion/react/jsx-runtime").JSX.Element;
}
