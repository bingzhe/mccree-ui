import * as React from "react";

export interface ItemProps {
    value?: string;
    prefix?: React.ReactElement;
    active?: boolean;
    children?: React.ReactChild;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}