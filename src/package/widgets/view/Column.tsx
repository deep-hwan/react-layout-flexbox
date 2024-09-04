/** @jsxImportSource @emotion/react */
import React, { forwardRef, HTMLAttributes, ReactNode } from "react";
import { ViewType } from "../../types/view";
import { extandedProps } from "../../utils/extandedProps";
import { ViewTheme } from "../../themes/view";
import { extandedMediaQuery } from "../../themes/mediaQuery";

interface ViewThemeStyles {
  [key: string]: string | number | undefined;
}

//
type Types = {
  as?: "section" | "nav" | "div" | "aside" | "form" | "ul" | "li" | "ol";
  children: ReactNode;
} & Omit<ViewType, "direction"> &
  HTMLAttributes<
    | HTMLDivElement
    | HTMLFormElement
    | HTMLLIElement
    | HTMLOListElement
    | HTMLUListElement
    | HTMLElement
  >;

//
const Column = forwardRef<
  | HTMLDivElement
  | HTMLFormElement
  | HTMLLIElement
  | HTMLOListElement
  | HTMLUListElement
  | HTMLElement,
  Types
>((props, ref) => {
  const { as = "div", children, onClick, ...restProps } = props;

  const { elementProps } = extandedProps(restProps);
  const mq_styles = extandedMediaQuery({ mediaQuery: restProps.mediaQuery });

  const view_theme = ViewTheme({
    ...restProps,
    width: restProps.width ?? "100%",
    positionType: restProps.positionType ?? "relative",
    display: props.display ?? "flex",
    direction: "column",
    align: props?.align ?? "start",
    userSelect: restProps.userSelect ? restProps.userSelect : onClick && "none",
    cursor: restProps.cursor ? restProps.cursor : onClick && "pointer",
    backgroundRepeat: restProps?.backgroundRepeat ?? "no-repeat",
    backgroundSize: restProps?.backgroundSize ?? "cover",
    backgroundPosition: restProps?.backgroundPosition ?? "center",
  }) as ViewThemeStyles;

  const global_theme = {
    ...view_theme,
    ...mq_styles,
    "&:hover": ViewTheme({ ...restProps.hover }),
    "&:active": ViewTheme({ ...restProps.active }),
    "&:disabled": ViewTheme({ ...restProps.disabled }),
  };

  const Element = as || "div";

  return (
    <Element
      css={global_theme}
      className={`flex-row flex-row-${as}`} // Update class names to reflect 'row' rather than 'column'
      onClick={onClick}
      {...elementProps}
      ref={ref} // Forward the ref to the appropriate element
    >
      {children}
    </Element>
  );
});

export default Column;
