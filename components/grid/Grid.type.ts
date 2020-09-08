import { tuple } from "../utils/type";
import { Breakpoint } from "./responsiveObserve";
import GridContainer from "./GridContainer";

type GridSpanType = number | string;
export type FlexType = number | "none" | "auto" | string;

export interface GridSize {
    span?: GridSpanType;
    order?: GridSpanType;
    offset?: GridSpanType;
    push?: GridSpanType;
    pull?: GridSpanType;
}

export interface GridProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    span?: GridSpanType;
    order?: GridSpanType;
    offset?: GridSpanType;
    push?: GridSpanType;
    pull?: GridSpanType;
    xs?: GridSpanType | GridSize;
    sm?: GridSpanType | GridSize;
    md?: GridSpanType | GridSize;
    lg?: GridSpanType | GridSize;
    xl?: GridSpanType | GridSize;
    xxl?: GridSpanType | GridSize;
    prefixCls?: string;
    flex?: FlexType;
}

export type GridFC = React.FC<GridProps> & {
    Container: typeof GridContainer;
};

const ContainerAligns = tuple("top", "middle", "bottom", "stretch");
const ContainerJustify = tuple("start", "end", "center", "space-around", "space-between");

export type Gutter = number | Partial<Record<Breakpoint, number>>;
export interface GridContainerProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    gutter?: Gutter | [Gutter, Gutter];
    align?: typeof ContainerAligns[number];
    justify?: typeof ContainerJustify[number];
}
