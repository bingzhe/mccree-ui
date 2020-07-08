import * as React from "react";
import classNames from "classnames";

import RadioGroup from "./RadioGroup";
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
}

const defaultIcon = <RadioIcon />;
const defaultCheckIcon = <RadioIcon checked />;

const Radio: RadioFC = (props) => {
    const {
        name,
        checked: checkedProp,
        defaultChecked,
        children,
        isButton,
        disabled,
        color,
        icon: iconProp,
        checkIcon: checkIconProp,
        onChange: onChangeProp
    } = props;

    const [checkedState, setChecked] = useControlled({
        controlled: checkedProp,
        default: !!defaultChecked,
        name: "Radio",
        state: "checked"
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (disabled) return;
        setChecked(e.target.checked);
        onChangeProp?.(e);
    };

    const checked = checkedState;

    const icon = iconProp || defaultIcon;
    const checkIcon = checkIconProp || defaultCheckIcon;

    const { getPrefixCls } = React.useContext(ConfigContext);
    const prefixCls = getPrefixCls("radio");

    const radioRootClasses = classNames(`${prefixCls}-root`, {
        [`${prefixCls}-button`]: isButton,
        [`${prefixCls}-checked`]: checked,
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-${color}`]: color
    });
    const radioClasses = classNames(prefixCls, classNames, {
        [`${prefixCls}-button`]: isButton
    });
    const radioInputClasses = classNames(`${prefixCls}-input`);
    const radioLabel = classNames(`${prefixCls}-label`);

    console.log({ radioRootClasses });
    console.log({ radioClasses });

    return (
        <label className={radioRootClasses}>
            <Ripple centerRipple={true}>
                <span className={radioClasses}>
                    <input
                        className={radioInputClasses}
                        type="radio"
                        onChange={handleChange}
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

export default Radio;
