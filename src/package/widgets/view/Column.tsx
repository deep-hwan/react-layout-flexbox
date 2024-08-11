/** @jsxImportSource @emotion/react */
import React, { HTMLAttributes, ReactNode } from "react";
import { ViewFlexType } from "../../types/view";
import { extandedProps } from "../../utils/extandedProps";
import { ViewTheme } from "../../themes/view";
import { extandedMediaQuery } from "../../themes/mediaQuery";

//
type Types = {
  as?: "section" | "nav" | "div" | "aside" | "form" | "ul" | "li" | "ol";
  children: ReactNode;
} & ViewFlexType &
  HTMLAttributes<
    | HTMLDivElement
    | HTMLFormElement
    | HTMLLIElement
    | HTMLOListElement
    | HTMLUListElement
    | HTMLElement
  >;

//
export default function Column(props: Types & { [key: string]: any }) {
  const { as = "div", children, onClick, ...restProps } = props;
  const { direction, active, hover, disabled, mediaQuery } = props;

  const { elementProps } = extandedProps(restProps);
  const mq_styles = extandedMediaQuery({ mediaQuery, direction });

  const view_theme = ViewTheme({
    ...props,
    width: props.width ?? "100%",
    positionType: props.positionType ?? "relative",
    display: props.display ?? "flex",
    direction: direction ?? "column",
    userSelect: props.userSelect ? props.userSelect : onClick && "none",
    cursor: props.cursor ? props.cursor : onClick && "pointer",
    backgroundRepeat: props?.backgroundRepeat ?? "no-repeat",
    backgroundSize: props?.backgroundSize ?? "cover",
    backgroundPosition: props?.backgroundPosition ?? "center",
  });

  const globel_theme = {
    ...(view_theme as any),
    ...mq_styles,
    "&:hover": ViewTheme({ hover: hover }),
    "&:active": ViewTheme({ active: active }),
    "&:disabled": ViewTheme({ disabled: disabled }),
  };

  //
  //
  if (as === "section")
    return (
      <section
        css={globel_theme}
        className="flex-column flex-section"
        {...elementProps}
      >
        {children}
      </section>
    );

  if (as === "div")
    return (
      <div css={globel_theme} className={"flex-column"} {...elementProps}>
        {children}
      </div>
    );

  if (as === "nav")
    return (
      <nav
        css={globel_theme}
        className="flex-column flex-column-nav"
        {...elementProps}
      >
        {children}
      </nav>
    );

  if (as === "aside")
    return (
      <aside
        css={globel_theme}
        className="flex-column flex-column-aside"
        {...elementProps}
      >
        {children}
      </aside>
    );

  if (as === "form")
    return (
      <form
        css={globel_theme}
        className="flex-column flex-column-form"
        {...elementProps}
      >
        {children}
      </form>
    );

  if (as === "ul")
    return (
      <ul
        css={globel_theme}
        className="flex-column flex-column-ul"
        {...elementProps}
      >
        {children}
      </ul>
    );

  if (as === "li")
    return (
      <li
        css={globel_theme}
        className="flex-column flex-column-li"
        {...elementProps}
      >
        {children}
      </li>
    );

  if (as === "ol")
    return (
      <ol
        css={globel_theme}
        className="flex-column flex-column-ol"
        {...elementProps}
      >
        {children}
      </ol>
    );
}
