import * as React from "react";

export type SizeType = "small" | "medium" | "large" | undefined;

const SizeContext = React.createContext<SizeType>(undefined);

export default SizeContext;
