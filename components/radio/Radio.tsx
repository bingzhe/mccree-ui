import * as React from "react";
import classNames from "classnames";

import RadioGroup, { GroupContext } from "./RadioGroup";
import RadioButton from "./RadioButton";
import RadioIcon from "./RadioIcon";
import Ripple from "../ripple-wrapper";
import { tuple } from "../_util/type";
import { ConfigContext } from "../config-provider";
import { useControlled } from "../utils/useControlled";

const CheckboxColorTypes = tuple("primary", "secondary", "success", "warning", "error", "info");
export type CheckboxColorType = typeof CheckboxColorTypes[number];

export interface RadioProps {
    className?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    style?: React.CSSProperties;
    disabled?: boolean;
    isButton?: boolean;
    color?: CheckboxColorType;
    icon?: React.ReactNode;
    checkIcon?: React.ReactNode;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onClick?: React.MouseEventHandler<HTMLElement>;
    children?: React.ReactNode;
    value?: any;
    name?: string;
}

interface RadioFC extends React.FC<RadioProps> {
    Group: typeof RadioGroup;
    Button: typeof RadioButton;
}

const defaultIcon = <RadioIcon />;
const defaultCheckIcon = <RadioIcon checked />;

const Radio: RadioFC = (props) => {
    const {
        name: nameProp,
        checked: checkedProp,
        defaultChecked,
        children,
        isButton,
        disabled: disabledProp,
        color = "primary",
        icon: iconProp,
        checkIcon: checkIconProp,
        onChange: onChangeProp,
        value
    } = props;

    const [checkedState, setChecked] = useControlled({
        controlled: checkedProp,
        default: !!defaultChecked,
        name: "Radio",
        state: "checked"
    });

    const groupContext = React.useContext(GroupContext);

    const groupContextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeProp?.(e);
        groupContext?.onChange(e);
    };

    const disabled = disabledProp || groupContext?.disabled;
    const name = groupContext?.name || nameProp;
    const onChange = groupContext ? groupContextChange : onChangeProp;
    const checked = groupContext ? groupContext.value === value : checkedState;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (disabled) return;
        setChecked(e.target.checked);
        onChange?.(e);
    };

    const icon = iconProp || defaultIcon;
    const checkIcon = checkIconProp || defaultCheckIcon;

    const { getPrefixCls } = React.useContext(ConfigContext);
    const prefixCls = getPrefixCls("radio");

    const radioRootClasses = classNames(`${prefixCls}-root`, {
        [`${prefixCls}-button-root`]: isButton,
        [`${prefixCls}-checked`]: checked,
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-${color}`]: color
    });
    const radioClasses = classNames(prefixCls, classNames, {
        [`${prefixCls}-button`]: isButton
    });
    const radioInputClasses = classNames(`${prefixCls}-input`);
    const radioLabel = classNames(`${prefixCls}-label`);

    return (
        <label className={radioRootClasses}>
            <Ripple centerRipple={true}>
                <span className={radioClasses}>
                    <input
                        className={radioInputClasses}
                        type="radio"
                        onChange={handleChange}
                        disabled={disabled}
                        value={value}
                        checked={checked}
                        name={name}
                    />
                    {checked ? checkIcon : icon}
                </span>
            </Ripple>
            {children && <span className={radioLabel}>{children}</span>}
        </label>
    );
};

Radio.Group = RadioGroup;
Radio.Button = RadioButton;

export default Radio;
