import * as React from "react";
import classNames from "classnames";

import { ConfigContext } from "../config-provider";
import Icon from "../icon";

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
    clearable?: boolean;
    readOnly?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (props, ref: React.Ref<HTMLInputElement | null>) => {
        const {
            className,
            defaultValue,
            value: valueProp,
            clearable = false,
            disabled,
            readOnly,
            prefix,
            suffix,
            addonBefore,
            addonAfter,
            onChange,
            onFocus,
            onBlur
        } = props;

        const { current: isControlled } = React.useRef(valueProp !== undefined);

        const inputRef = React.useRef<HTMLInputElement>(null);
        React.useImperativeHandle(ref, () => inputRef.current);

        const [selftValue, setSelfValue] = React.useState<string>(defaultValue);
        const [focused, setFocused] = React.useState<Boolean>(false);
        // const [hover, setHover] = React.useState<boolean>(false);

        const showClearIcon = React.useMemo(() => clearable && !readOnly && selftValue !== "", [
            clearable,
            selftValue,
            readOnly
        ]);

        const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
            if (disabled || readOnly) return;
            if (!isControlled) {
                setSelfValue(e.target.value);
            }
            onChange?.(e);
        };

        const handleFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
            setFocused(true);
            onFocus?.(e);
        };
        const handleBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
            setFocused(false);
            onBlur?.(e);
        };

        const { getPrefixCls } = React.useContext(ConfigContext);
        const prefixCls = getPrefixCls("input");
        const rootPrefixCls = `${prefixCls}-root`;

        const inputRootClasses = classNames(`${rootPrefixCls}`, {
            [`${rootPrefixCls}-disabled`]: disabled,
            [`${rootPrefixCls}-readonly`]: readOnly,
            [`${rootPrefixCls}-affix`]: prefix || suffix,
            [`${rootPrefixCls}-addon`]: addonBefore || addonAfter,
            [`${rootPrefixCls}-focused`]: focused
        });

        const inputClasses = classNames(prefixCls, className, {
            [`${prefixCls}-disabled`]: disabled
        });
        const addonClassName = `${prefixCls}-addon`;

        const addonBeforeNode = addonBefore ? (
            <span className={addonClassName}>{addonBefore}</span>
        ) : null;
        const addonAfterNode = addonAfter ? (
            <span className={addonClassName}>{addonAfter}</span>
        ) : null;

        const prefixNode = prefix ? <span className={`${prefixCls}-prefix`}>{prefix}</span> : null;
        const suffixNode = suffix ? <span className={`${prefixCls}-suffix`}>{suffix}</span> : null;

        return (
            <div className={inputRootClasses}>
                {addonBeforeNode}
                {prefixNode}
                <input
                    defaultValue={defaultValue}
                    value={selftValue}
                    className={inputClasses}
                    disabled={disabled}
                    readOnly={readOnly}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    ref={inputRef}
                />
                {showClearIcon && <Icon name="close" />}
                {suffixNode}
                {addonAfterNode}
            </div>
        );
    }
);
export default Input;
