import * as React from "react";
import classNames from "classnames";

import { ConfigContext } from "../config-provider";

export interface InputProps {
    className?: string;
    disabled?: boolean;
    defaultValue?: any;
}

const Input: React.FC<InputProps> = (props) => {
    const { getPrefixCls } = React.useContext(ConfigContext);
    const prefixCls = getPrefixCls("input");

    const classes = classNames(prefixCls);

    console.log({ classes });

    return (
        <div>
            <input></input>
        </div>
    );
};

export default Input;
