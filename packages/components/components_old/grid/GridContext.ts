import * as React from "react";

export interface GridContextState {
    gutter?: [number, number];
}

export const GridContext = React.createContext<GridContextState>({});
