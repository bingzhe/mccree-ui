import React, { createContext } from "react";
import { ConfigProviderProps } from "./Context.type";
import { useMergeProps } from "@mccree-ui/hooks";
import { omit } from "@mccree-ui/util";

const defaultProps: ConfigProviderProps = {
    prefixCls: "mc",
    size: "default"
};

const componentConfig = {};

export const ConfigContext = createContext<ConfigProviderProps>({
    getPrefixCls: (componentName: string, customPrefix?: string) =>
        `${customPrefix || "mc"}-${componentName}`,
    ...defaultProps
});

function ConfigProvider(baseProps: ConfigProviderProps) {
    const props = useMergeProps<ConfigProviderProps>(baseProps, defaultProps, componentConfig);

    const { prefixCls, children } = props;

    function getPrefixCls(componentName: string, customPrefix?: string) {
        return `${customPrefix || prefixCls}-${componentName}`;
    }

    const config = {
        ...omit(props, ["children"]),
        getPrefixCls
    };

    return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>;
}

ConfigProvider.ConfigContext = ConfigContext;

ConfigProvider.displayName = "ConfigProvider";

export default ConfigProvider;

export const ConfigConsumer = ConfigContext.Consumer;
