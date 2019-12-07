import * as React from "react";

type Shrink = "expand" | "float";

export interface ItemGroupProps {
    level?: number;
    title?: string;
    prefix?: React.ReactElement;
    children?: React.ReactElement | React.ReactElement[];
    shrink?: Shrink;
}