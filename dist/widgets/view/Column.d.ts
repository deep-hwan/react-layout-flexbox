/** @jsxImportSource @emotion/react */
import { HTMLAttributes, ReactNode } from "react";
import { ViewFlexType } from "../../types/view";
type Types = {
    as?: "section" | "nav" | "div" | "aside" | "form" | "ul" | "li" | "ol";
    children: ReactNode;
} & ViewFlexType & HTMLAttributes<HTMLDivElement | HTMLFormElement | HTMLLIElement | HTMLOListElement | HTMLUListElement | HTMLElement>;
export default function Column(props: Types & {
    [key: string]: any;
}): import("@emotion/react/jsx-runtime").JSX.Element | undefined;
export {};
