import { MediaQueryType } from "../types/view";
export declare const extandedMediaQuery: ({ mediaQuery, direction, }: MediaQueryType & {
    direction?: "row" | "column" | undefined;
}) => {
    [x: string]: any;
};
