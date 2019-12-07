import * as React from "react";
import { BoxProps } from "../Box";
import { NavigationID } from "../Navigation";

export interface ItemProps extends Omit<BoxProps, "prefix"> {
    value?: NavigationID;
    prefix?: React.ReactElement;
    active?: boolean;
    children?: React.ReactChild;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}