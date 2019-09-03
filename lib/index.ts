export { default as Icon } from "./icon/index";
export { default as Button } from "./button/index";
export { default as Layout } from "./layout/index";
export { default as Input } from "./input/index";
export { default as Item } from "./Item/index";

export { ThemeProvider, Normalize } from "./ThemeProvider";

import * as colors from "./colors";
export { colors };

import "./index.scss";

export type StandardProps<
    T = React.HTMLAttributes<HTMLDivElement>,
    Ref = HTMLDivElement,
    O extends string = ""
> = { className?: string; style?: React.CSSProperties } & Omit<T, O> & { ref?: React.Ref<Ref> }