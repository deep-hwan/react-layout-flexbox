/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from "@emotion/react";
import { ViewFlexType } from "../types/view";
export declare const ViewTheme: (props: ViewFlexType & {
    direction?: "row" | "column";
}) => Interpolation<Theme>;
