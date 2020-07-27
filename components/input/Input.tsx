import * as React from "react";
import classNames from "classnames";

import { ConfigContext } from "../config-provider";

export interface InputProps {
    className?: string;
    disabled?: boolean;
    defaultValue?: any;
    value?: any;
    addonBefore?: React.ReactNode;
    addonAfter?: React.ReactNode;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    variant?: "standard" | "outlined" | "filled";
}

const Input: React.FC<InputProps> = (props) => {
    const { className, variant = "standard" } = props;

    const { getPrefixCls } = React.useContext(ConfigContext);
    const prefixCls = getPrefixCls("input");

    const inputRootClasses = classNames(`${prefixCls}-root`, {
        [`${prefixCls}-outlined`]: variant === "outlined"
    });
    const inputClasses = classNames(prefixCls, className);

    console.log({ inputRootClasses });
    console.log({ inputClasses });

    return (
        <div className={inputRootClasses}>
            <input className={inputClasses} placeholder="123" />
        </div>
    );
};

export default Input;
