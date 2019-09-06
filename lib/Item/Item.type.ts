import * as React from "react";
import { BoxProps } from "../Box";

export interface ItemProps extends Omit<BoxProps, "prefix"> {
    value?: string;
    prefix?: React.ReactElement;
    active?: boolean;
    children?: React.ReactChild;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}