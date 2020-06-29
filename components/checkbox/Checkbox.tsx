import * as React from "react";
import classNames from "classnames";

import CheckboxButton from "./CheckboxButton";
import Icon from "../icon";
import Ripple from "../ripple-wrapper";
import { ConfigContext } from "../config-provider";
import { tuple } from "../_util/type";

const CheckboxColorTypes = tuple("primary", "secondary", "success", "warning", "error", "info");
export type CheckboxColorType = typeof CheckboxColorTypes[number];

export interface CheckboxProps {
    prefixCls?: string;
    className?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
    isButton?: boolean;
    color?: CheckboxColorType;
    icon?: React.ReactNode;
    checkIcon?: React.ReactNode;
    indeterminateIcon?: React.ReactNode;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onClick?: React.MouseEventHandler<HTMLElement>;
    children?: React.ReactNode;
}

interface CheckboxTypeProps extends React.FC<CheckboxProps> {
    Button: typeof CheckboxButton;
}

const defaultIcon = <Icon name="checkbox-outline" />;
const defaultCheckedIcon = <Icon name="checkbox" />;
const defaultIndeterminateIcon = <Icon name="checkbox-indeterminate" />;

const Checkbox: CheckboxTypeProps = (props) => {
    const {
        prefixCls: customizePrefixCls,
        className,
        icon: iconProp,
        checkIcon: checkIconProp,
        indeterminateIcon = defaultIndeterminateIcon,
        indeterminate = false,
        isButton = false,
        disabled = false,
        color = "primary",
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
        [`${prefixCls}-indeterminate`]: indeterminate,
        [`${prefixCls}-${color}`]: color
    });
    const checkboxClasses = classNames(prefixCls, className, {
        [`${prefixCls}-button`]: isButton
    });
    const checkboxInputClasses = classNames(`${prefixCls}-input`);
    const checkboxLabel = classNames(`${prefixCls}-label`);

    return (
        <label className={checkboxRootClasses}>
            <Ripple centerRipple={true}>
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
            </Ripple>
            {children && <span className={checkboxLabel}>{children}</span>}
        </label>
    );
};

Checkbox.Button = CheckboxButton;
export default Checkbox;
