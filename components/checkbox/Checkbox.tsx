import * as React from "react";
import classNames from "classnames";

import Icon from "../icon";
import { ConfigContext } from "../config-provider";

export interface CheckboxProps {
    prefixCls?: string;
    className?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
    isButton?: boolean;
    icon?: React.ReactNode;
    checkIcon?: React.ReactNode;
    indeterminateIcon?: React.ReactNode;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onClick?: React.MouseEventHandler<HTMLElement>;
    children?: React.ReactNode;
}

const defaultIcon = <Icon name="checkbox-outline" />;
const defaultCheckedIcon = <Icon name="checkbox" />;
const defaultIndeterminateIcon = <Icon name="checkbox-indeterminate" />;

const Checkbox: React.FC<CheckboxProps> = (props) => {
    const {
        prefixCls: customizePrefixCls,
        className,
        icon: iconProp,
        checkIcon: checkIconProp,
        indeterminateIcon = defaultIndeterminateIcon,
        indeterminate = false,
        isButton = false,
        disabled = false,
        onChange,
        checked,
        children,
        ...restProps
    } = props;

    const { getPrefixCls } = React.useContext(ConfigContext);
    const prefixCls = getPrefixCls("checkbox", customizePrefixCls);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e);
    };

    const icon = indeterminate ? defaultIndeterminateIcon : iconProp ? iconProp : defaultIcon;
    const checkIcon = indeterminate
        ? defaultIndeterminateIcon
        : checkIconProp
        ? checkIconProp
        : defaultCheckedIcon;

    const checkboxRootClasses = classNames(`${prefixCls}-root`, {
        [`${prefixCls}-button-root`]: isButton,
        [`${prefixCls}-checked`]: checked,
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-indeterminate`]: indeterminate
    });
    const checkboxClasses = classNames(prefixCls, className, {
        [`${prefixCls}-button`]: isButton
    });
    const checkboxInputClasses = classNames(`${prefixCls}-input`);
    const checkboxLabel = classNames(`${prefixCls}-label`);

    console.log({ checkboxRootClasses });
    console.log({ checkboxClasses });
    console.log({ checkboxInputClasses });

    return (
        <label className={checkboxRootClasses}>
            <span className={checkboxClasses}>
                <input
                    className={checkboxInputClasses}
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                    disabled={disabled}
                    {...restProps}
                />
                {checked ? checkIcon : icon}
            </span>
            {children && <span className={checkboxLabel}>{children}</span>}
        </label>
    );
};

export default Checkbox;
