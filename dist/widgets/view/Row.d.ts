/** @jsxImportSource @emotion/react */
import React, { ReactNode } from "react";
import { ViewType } from "../../types/view";
declare const Row: React.ForwardRefExoticComponent<{
    as?: "section" | "nav" | "div" | "aside" | "form" | "ul" | "li" | "ol" | undefined;
    children: ReactNode;
} & Omit<ViewType, "direction"> & React.HTMLAttributes<HTMLDivElement | HTMLElement | HTMLFormElement | HTMLLIElement | HTMLOListElement | HTMLUListElement> & React.RefAttributes<HTMLDivElement | HTMLElement | HTMLFormElement | HTMLLIElement | HTMLOListElement | HTMLUListElement>>;
export default Row;
