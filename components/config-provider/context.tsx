import * as React from "react";

export interface ConfigConsumerProps {
    getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => string;
}

export const ConfigContext = React.createContext<ConfigConsumerProps>({
    getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => {
        if (customizePrefixCls) return customizePrefixCls;

        return suffixCls ? `mccree-${suffixCls}` : "mccree";
    }
});

export const ConfigConsumer = ConfigContext.Consumer;