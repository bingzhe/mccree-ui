import { createContext } from "react";
import { ConfigProviderProps } from "./Context.type";

// export interface ConfigConsumerProps {
//     getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => string;
// }

const defaultProps: ConfigProviderProps = {
    prefixCls: "mccree",
    size: "default"
};

export const ConfigContext = createContext<ConfigProviderProps>({
    getPrefixCls: (componentName: string, customPrefix?: string) =>
        `${customPrefix || "mccree"}-${componentName}`,
    ...defaultProps
});

export const ConfigConsumer = ConfigContext.Consumer;
