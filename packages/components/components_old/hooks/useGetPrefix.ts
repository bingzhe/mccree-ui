import { useContext } from "react";
import { ConfigContext } from "../config-provider";

const useGetPrefix = (componentName: string) => {
    const { getPrefixCls } = useContext(ConfigContext);
    const prefixCls = getPrefixCls(componentName);
    return prefixCls;
};

export default useGetPrefix;
