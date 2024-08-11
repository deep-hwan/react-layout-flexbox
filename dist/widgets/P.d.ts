/** @jsxImportSource @emotion/react */
import { ReactElement } from "react";
export declare function P({ children }: {
    children: ReactElement;
}): ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export declare namespace P {
    var Absolute: typeof import("./position/Absolute").default;
    var Fixed: typeof import("./position/Fixed").default;
    var Sticky: typeof import("./position/Sticky").default;
}
