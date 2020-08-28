import * as React from "react";

type SizeType = "small" | "medium" | "large";

export interface SelectContextProps {
    value?: string | string[];
    updateValue?: Function;
    visible?: boolean;
    updateVisible?: Function;
    size?: SizeType;
    disabledAll?: boolean;
    ref?: React.MutableRefObject<HTMLElement | null>;
}

const defaultContext = {
    visible: false,
    size: "medium" as SizeType,
    diabledAdd: false
};

export const SelectContext = React.createContext<SelectContextProps>(defaultContext);
