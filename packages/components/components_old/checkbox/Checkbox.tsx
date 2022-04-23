import * as React from "react";
import classNames from "classnames";

import CheckboxButton from "./CheckboxButton";
import CheckboxGroup, { GroupContext } from "./CheckboxGroup";
import Icon from "../icon";
import Ripple from "../ripple";
import { ConfigContext } from "../config-provider";
import { tuple } from "../utils/type";
import { useControlled } from "../utils/useControlled";

const CheckboxColorTypes = tuple("primary", "secondary", "success", "warning", "error", "info");
export type CheckboxColorType = typeof CheckboxColorTypes[number];

export interface CheckboxProps {
    className?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    indeterminate?: boolean;
    style?: React.CSSProperties;
    disabled?: boolean;
    isButton?: boolean;
    color?: CheckboxColorType;
    icon?: React.ReactNode;
    checkIcon?: React.ReactNode;
    indeterminateIcon?: React.ReactNode;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onClick?: React.MouseEventHandler<HTMLElement>;
    children?: React.ReactNode;
    name?: string;
    value?: any;
}

interface CheckboxTypeProps extends React.FC<CheckboxProps> {
    Button: typeof CheckboxButton;
    Group: typeof CheckboxGroup;
}

const defaultIcon = <Icon name="checkbox-outline" />;
const defaultCheckedIcon = <Icon name="checkbox" />;
const defaultIndeterminateIcon = <Icon name="checkbox-indeterminate" />;

const Checkbox: CheckboxTypeProps = (props) => {
    const {
        className,
        icon: iconProp,
        checkIcon: checkIconProp,
        indeterminateIcon = defaultIndeterminateIcon,
        indeterminate = false,
        isButton = false,
        disabled: disabledProp = false,
        color = "primary",
        onChange: onChangeProp,
        checked: checkedProp,
        defaultChecked,
        children,
        name: nameProp,
        value,
        style,
        ...restProps
    } = props;

    const [checkedState, setChecked] = useControlled({
        controlled: checkedProp,
        default: !!defaultChecked,
        name: "Checkbox",
        state: "checked"
    });

    const groupContext = React.useContext(GroupContext);

    const groupContextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChangeProp) {
            onChangeProp(e);
        }
        groupContext?.toggleOption({ label: children, value: value });
    };

    // const disabled = !groupContext ? disabledProp : groupContext.disabled;
    const disabled = disabledProp || groupContext?.disabled;
    const name = groupContext?.name || nameProp;
    const onChange = groupContext ? groupContextChange : onChangeProp;
    const checked = groupContext ? groupContext.value.indexOf(value) !== -1 : checkedState;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (disabled) return;
        setChecked(e.target.checked);
        onChange?.(e);
    };

    const icon = indeterminate ? defaultIndeterminateIcon : iconProp ? iconProp : defaultIcon;
    const checkIcon = indeterminate
        ? defaultIndeterminateIcon
        : checkIconProp
        ? checkIconProp
        : defaultCheckedIcon;

    const { getPrefixCls } = React.useContext(ConfigContext);
    const prefixCls = getPrefixCls("checkbox");

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
        <label className={checkboxRootClasses} style={style}>
            <Ripple center>
                <span className={checkboxClasses}>
                    <input
                        name={name}
                        className={checkboxInputClasses}
                        type="checkbox"
                        checked={checked}
                        onChange={handleChange}
                        disabled={disabled}
                        value={value}
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
Checkbox.Group = CheckboxGroup;

export default Checkbox;
