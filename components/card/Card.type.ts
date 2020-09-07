import * as React from "react";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import { tuple } from "../utils/type";

const CardTypes = tuple("primary", "secondary", "success", "warning", "error", "info");
export type CardType = typeof CardTypes[number];
const VariantTypes = tuple("contained", "outlined");
export type VariantType = typeof VariantTypes[number];

export interface CardProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    variant?: VariantType;
    type?: CardType;
    shadow?: boolean;
    width?: string;
    hoverable?: boolean;
}

export type CardFC = React.FC<CardProps> & {
    Content: typeof CardContent;
    Footer: typeof CardFooter;
    Actions: typeof CardFooter;
};

export const defaultProps = {
    variant: "contained" as VariantType,
    shadow: false,
    hoverable: false
};
