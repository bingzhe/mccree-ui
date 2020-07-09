import * as React from "react";
import classNames from "classnames";

import Radio from "./Radio";
import { useControlled } from "../utils/useControlled";
import { ConfigContext } from "../config-provider";

export type RadioValueType = string | number | boolean;
export type RadioChangeEvent = React.ChangeEvent<HTMLInputElement>;

export interface RadioOptionType {
    label: React.ReactNode;
    value: RadioValueType;
    disabled?: boolean;
    onChange?: (e: RadioChangeEvent) => void;
}

export interface RadioGroupProps {
    className?: string;
    options?: Array<RadioOptionType | string>;
    disabled?: boolean;
    style?: React.CSSProperties;
    name?: string;
    value?: RadioValueType;
    defaultValue?: RadioValueType;
    onChange?: (e: RadioChangeEvent) => void;
    children?: React.ReactNode;
}

export interface RadioGroupContext {
    onChange: (e: RadioChangeEvent) => void;
    value?: any;
    name?: string;
    disabled?: boolean;
}

export const GroupContext = React.createContext<RadioGroupContext | null>(null);

const RadioGroup: React.FC<RadioGroupProps> = (props) => {
    const {
        className,
        value: valueProp,
        defaultValue,
        options: optionsProp,
        children: childrenProp,
        disabled,
        onChange,
        style,
        ...restProps
    } = props;

    const [value, setValue] = useControlled({
        controlled: valueProp,
        default: defaultValue,
        name: "RadioGroup"
    });

    const { getPrefixCls } = React.useContext(ConfigContext);
    const prefixCls = getPrefixCls("radio");
    const groupPrefixCls = `${prefixCls}-group`;

    const onRadioChange = (e: RadioChangeEvent) => {
        const preValue = value;
        setValue(e.target.value);
        if (onChange && preValue === value) {
            onChange(e);
        }
    };

    const options = (optionsProp as Array<RadioOptionType>)?.map((option) => {
        if (typeof option === "string") {
            return {
                label: option,
                value: option
            };
        }
        return option;
    });

    const children = !options
        ? childrenProp
        : options.map((option) => (
              <Radio
                  key={option.value.toString()}
                  value={option.value}
                  className={`${groupPrefixCls}-item`}
                  disabled={"disabled" in option ? option.disabled : disabled}
                  checked={value === option.value}
                  onChange={option.onChange}
                  name={name}
              >
                  {option.label}
              </Radio>
          ));

    const classes = classNames(groupPrefixCls, className);

    const context = {
        onChange: onRadioChange,
        value: value,
        disabled: disabled,
        name: name
    };

    return (
        <div className={classes} style={style} {...restProps}>
            <GroupContext.Provider value={context}>{children}</GroupContext.Provider>
        </div>
    );
};

export default RadioGroup;
