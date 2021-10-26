import * as React from "react";

export interface IconContextProps {
    getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => string;
}

export const IconContext = React.createContext<IconContextProps>({
    getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => {
        if (customizePrefixCls) return customizePrefixCls;

        return suffixCls ? `mccree-${suffixCls}` : "mccree";
    }
});

export const ConfigConsumer = IconContext.Consumer;
