type LayoutSizeType = {
  width?: "auto" | "100%" | string;
  minWidth?: "auto" | "100vw" | number | string;
  maxWidth?: "auto" | "100vw" | number | string;
  height?: "auto" | "100%" | string;
  minHeight?: "auto" | "100vh" | number | string;
  maxHeight?: "auto" | "100vh" | number | string;
};

//
//
type PositionType = {
  positionType?: "static" | "relative" | "fixed" | "absolute" | "sticky";
  position?: {
    top?: string | number;
    bottom?: string | number;
    left?: string | number;
    right?: string | number;
  };
  axis?: { x?: string | number; y?: string | number };
};

//
//
type FlexType = {
  display?: "none" | "flex";
  flex?: number | string;
  reverse?: boolean;
  align?: "start" | "end" | "center" | "stretch" | "baseline";
  crossAlign?:
    | "start"
    | "end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignContent?:
    | "start"
    | "end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch";
  alignSelf?: "auto" | "stretch" | "start" | "end" | "center" | "baseline";
  flow?: string;
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  basis?: number | string | "auto";
  grow?: number;
  shrink?: number;
  gap?: number;
  crossGap?: number;
  order?: number;
};

//
//
type LayerType = {
  backgroundColor?: string;
  background?: string;
  backgroundRepeat?:
    | "repeat-x"
    | "repeat-y"
    | "repeat"
    | "space"
    | "round"
    | "no-repeat";
  backgroundSize?: "contain" | "cover" | string;
  backgroundPosition?:
    | "top"
    | "bottom"
    | "center"
    | "left"
    | "right"
    | "string";
  backgroundClip?:
    | "border-box"
    | "padding-box"
    | "content-box"
    | "initial"
    | "inherit";
  backgroundImageUrl?: string;
  filter?: number | string;
  shadow?: {
    x?: number;
    y?: number;
    blur?: number;
    color?: string;
  };
  zIndex?: number;
  transitionTime?: number;
  cursor?: "default" | "grab" | "pointer" | "zoom";
  opacity?: number;
  userSelect?: "none" | "auto" | "text" | "contain" | "all";
};

//
//
type BorderTypes = {
  border?: {
    solid: number;
    position?: "all" | "left" | "right" | "top" | "bottom";
    color: string;
    shape?:
      | "solid"
      | "dotted"
      | "dashed"
      | "double"
      | "outset"
      | "inset"
      | "groove"
      | "ridge";
  };
  borderRadius?: number | string;
};

//
//
type SpaceType = {
  padding?: {
    all?: number | string;
    horizontal?: number | string;
    vertical?: number | string;
    top?: number | string;
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
  };

  margin?: {
    all?: number | string;
    horizontal?: number | string;
    vertical?: number | string;
    top?: number | string;
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
  };
};

//
//
type ScrollType = {
  scroll?: {
    x?: "visible" | "auto" | "scroll" | "hidden";
    y?: "visible" | "auto" | "scroll" | "hidden";
    type?: "visible" | "auto" | "scroll" | "hidden";
    bar?: boolean;
  };
};

//
//
type ViewTypes = FlexType &
  PositionType &
  LayoutSizeType &
  LayerType &
  BorderTypes &
  SpaceType &
  ScrollType;

//
//
type EffectType = {
  hover?: ViewTypes & { direction?: "row" | "column" };
  active?: ViewTypes & { direction?: "row" | "column" };
  disabled?: ViewTypes & { direction?: "row" | "column" };
  focus?: ViewTypes & { direction?: "row" | "column" };
};

//
//
export type MediaQueryType = {
  mediaQuery?: {
    s1440?: { direction?: "row" | "column" } & ViewTypes & EffectType;
    s1280?: { direction?: "row" | "column" } & ViewTypes & EffectType;
    s1080?: { direction?: "row" | "column" } & ViewTypes & EffectType;
    s768?: { direction?: "row" | "column" } & ViewTypes & EffectType;
    s600?: { direction?: "row" | "column" } & ViewTypes & EffectType;
    s428?: { direction?: "row" | "column" } & ViewTypes & EffectType;
  };
};

//
//
export type ViewType = ViewTypes & EffectType & MediaQueryType;
