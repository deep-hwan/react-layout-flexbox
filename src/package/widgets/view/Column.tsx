/** @jsxImportSource @emotion/react */
import React, { HTMLAttributes, ReactNode } from "react";
import { ViewType } from "../../types/view";
import { extandedProps } from "../../utils/extandedProps";
import { ViewTheme } from "../../themes/view";
import { extandedMediaQuery } from "../../themes/mediaQuery";

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
export default function Column(props: Types & { [key: string]: any }) {
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
  });

  const globel_theme = {
    ...(view_theme as any),
    ...mq_styles,
    "&:hover": ViewTheme({ ...restProps.hover }),
    "&:active": ViewTheme({ ...restProps.active }),
    "&:disabled": ViewTheme({ ...restProps.disabled }),
  };

  //
  //
  if (as === "section")
    return (
      <section
        css={globel_theme}
        className="flex-column flex-section"
        onClick={onClick}
        {...elementProps}
      >
        {children}
      </section>
    );

  if (as === "div")
    return (
      <div
        css={globel_theme}
        className={"flex-column"}
        onClick={onClick}
        {...elementProps}
      >
        {children}
      </div>
    );

  if (as === "nav")
    return (
      <nav
        css={globel_theme}
        className="flex-column flex-column-nav"
        onClick={onClick}
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
        onClick={onClick}
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
        onClick={onClick}
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
        onClick={onClick}
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
        onClick={onClick}
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
        onClick={onClick}
        {...elementProps}
      >
        {children}
      </ol>
    );
}
