import * as React from "react";
import classNames from "classnames";

import { ConfigContext } from "../config-provider";

export interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size1" | "prefix" | "type"> {
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

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { className, variant = "standard" } = props;

    const { getPrefixCls } = React.useContext(ConfigContext);
    const prefixCls = getPrefixCls("input");

    const inputRootClasses = classNames(`${prefixCls}-root`, {
        [`${prefixCls}-outlined`]: variant === "outlined"
    });
    const inputClasses = classNames(prefixCls, className);

    console.log({ inputRootClasses });
    console.log({ inputClasses });

    // const inputRef = React.useRef<HTMLInputElement>(null);
    // React.useImperativeHandle(ref, () => inputRef.current);
    return (
        <div className={inputRootClasses}>
            <input className={inputClasses} placeholder="123" ref={ref} />
        </div>
    );
});
export default Input;
