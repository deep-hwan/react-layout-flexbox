/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from "@emotion/react";
import { ViewType } from "../types/view";
export declare const ViewTheme: (props: ViewType & {
    direction?: "row" | "column";
}) => Interpolation<Theme>;
