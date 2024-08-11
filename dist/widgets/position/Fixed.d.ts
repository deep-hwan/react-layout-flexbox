/** @jsxImportSource @emotion/react */
import { HTMLAttributes, ReactNode } from "react";
import { ViewFlexType } from "../../types/view";
type Types = {
    as?: "section" | "nav" | "div" | "aside" | "form" | "ul" | "li" | "ol";
    children: ReactNode;
} & Omit<ViewFlexType, "positionType"> & HTMLAttributes<HTMLDivElement | HTMLFormElement | HTMLLIElement | HTMLOListElement | HTMLUListElement | HTMLElement>;
export default function Fixed(props: Types & {
    [key: string]: any;
}): import("@emotion/react/jsx-runtime").JSX.Element | undefined;
export {};
