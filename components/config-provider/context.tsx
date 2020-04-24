import * as React from "react";
// export interface ConfigConsumerProps {


// }

export const ConfigContext = React.createContext({
    getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => {
        if (customizePrefixCls) return customizePrefixCls;

        return suffixCls ? `mccree-${suffixCls}` : "mccree";
    }
});
