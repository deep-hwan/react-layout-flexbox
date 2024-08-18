/** @jsxImportSource @emotion/react */
import React, { HTMLAttributes, ReactNode } from "react";
import { Interpolation, Theme } from "@emotion/react";
import { extandedProps } from "../../utils/extandedProps";
import { ViewTheme } from "../../themes/view";
import { extandedMediaQuery } from "../../themes/mediaQuery";
import { ViewType } from "../../types/view";

//
type Types = {
  as?: "section" | "nav" | "div" | "aside" | "form" | "ul" | "li" | "ol";
  children: ReactNode;
} & Omit<ViewType, "positionType"> &
  HTMLAttributes<
    | HTMLDivElement
    | HTMLFormElement
    | HTMLLIElement
    | HTMLOListElement
    | HTMLUListElement
    | HTMLElement
  >;

//
export default function Sticky({
  as = "div",
  children,
  direction,
  onClick,
  ...props
}: Types & { [key: string]: any }) {
  const { elementProps } = extandedProps(props);
  const mq_styles = extandedMediaQuery({ mediaQuery: props.mediaQuery });

  const view_theme = ViewTheme({
    ...props,
    positionType: "sticky",
    width: props.width,
    direction: direction ?? "row",
    display: props.display ?? "flex",
    userSelect: props.userSelect ? props.userSelect : onClick && "none",
    cursor: props.cursor ? props.cursor : onClick && "pointer",
    backgroundRepeat: props?.backgroundRepeat ?? "no-repeat",
    backgroundSize: props?.backgroundSize ?? "cover",
    backgroundPosition: props?.backgroundPosition ?? "center",
  });

  const globel_theme = {
    ...(view_theme as any),
    ...mq_styles,
    "&:hover": ViewTheme({ ...props.hover }),
    "&:active": ViewTheme({ ...props.active }),
    "&:disabled": ViewTheme({
      ...props.disabled,
      direction: direction ?? "row",
    }),
  } as Interpolation<Theme>;

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
        className="flex-column"
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
