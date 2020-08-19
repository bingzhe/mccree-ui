import * as React from "react";
import classNames from "classnames";

import { ConfigContext } from "../config-provider";
import Icon from "../icon";
import InputPassword from "./Password";

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
    width?: string;
    onIconClick?: React.MouseEventHandler<HTMLDivElement>;
    iconClickable?: boolean;
}

const simulateChangeEvent = (
    el: HTMLInputElement,
    event: React.MouseEvent<HTMLElement>
): React.ChangeEvent<HTMLInputElement> => {
    return {
        ...event,
        target: el,
        currentTarget: el
    };
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (props, ref: React.Ref<HTMLInputElement | null>) => {
        const {
            className,
            defaultValue = "",
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
            onBlur,
            onIconClick,
            iconClickable = false,
            width = "initial",
            placeholder,
            children,
            ...restProps
        } = props;

        // const { current: isControlled } = React.useRef(valueProp !== undefined);

        const inputRef = React.useRef<HTMLInputElement>(null);
        React.useImperativeHandle(ref, () => inputRef.current);

        const [value, setValue] = React.useState<string>(defaultValue);

        const [focused, setFocused] = React.useState<Boolean>(false);
        // const [hover, setHover] = React.useState<boolean>(false);

        React.useEffect(() => {
            if (valueProp === undefined) return;
            setValue(valueProp);
        }, [valueProp]);

        const showClearIcon = React.useMemo(() => clearable && !readOnly && value !== "", [
            clearable,
            value,
            readOnly
        ]);

        const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
            if (disabled || readOnly) return;
            setValue(e.target.value);
            onChange?.(e);
        };
        const handleClearClick: React.MouseEventHandler<HTMLElement> = (event) => {
            setValue("");

            if (!inputRef.current) return;

            const changeEvent = simulateChangeEvent(inputRef.current, event);
            changeEvent.target.value = "";
            onChange?.(changeEvent);
            inputRef.current.focus();
        };

        const handleIconClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
            if (disabled) return;
            onIconClick?.(e);
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
            // [`${prefixCls}-affix`]: prefix,
            // [`${prefixCls}-prefix`]: prefix,
        });
        // const addonClassName = `${prefixCls}-addon`;

        const clearClasses = classNames(`${prefixCls}-clear`, {
            show: showClearIcon
        });

        const addonBeforeNode = addonBefore ? (
            <span className={`${prefixCls}-addon-before`}>{addonBefore}</span>
        ) : null;
        const addonAfterNode = addonAfter ? (
            <span className={`${prefixCls}-addon-after`}>{addonAfter}</span>
        ) : null;

        const prefixNode = prefix ? <span className={`${prefixCls}-prefix`}>{prefix}</span> : null;
        const suffixNode = suffix ? (
            <span className={`${prefixCls}-suffix`} onClick={handleIconClick}>
                {suffix}
            </span>
        ) : null;

        return (
            <div className={inputRootClasses} style={{ width: width }}>
                {addonBeforeNode}
                {prefixNode}
                <input
                    value={value}
                    className={inputClasses}
                    disabled={disabled}
                    readOnly={readOnly}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    ref={inputRef}
                    placeholder={placeholder}
                    {...restProps}
                />
                {clearable && (
                    <span className={clearClasses} onClick={handleClearClick}>
                        <Icon name="close" />
                    </span>
                )}
                {suffixNode}
                {addonAfterNode}
            </div>
        );
    }
);

type InputComponent<T, P = {}> = React.ForwardRefExoticComponent<
    React.PropsWithoutRef<P> & React.RefAttributes<T>
> & {
    Password: typeof InputPassword;
};

export default Input as InputComponent<HTMLInputElement, InputProps>;
