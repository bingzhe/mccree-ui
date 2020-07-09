import * as React from "react";
import classNames from "classnames";

// import Checkbox from "./Checkbox";
import { ConfigContext } from "../config-provider";
import Checkbox from "./Checkbox";
import { useControlled } from "../utils/useControlled";

export type CheckboxValueType = string | number | boolean;

export interface CheckboxOptionType {
    label: React.ReactNode;
    value: CheckboxValueType;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CheckboxGroupProps {
    className?: string;
    options?: Array<CheckboxOptionType | string>;
    disabled?: boolean;
    style?: React.CSSProperties;
    name?: string;
    defaultValue?: Array<CheckboxValueType>;
    value?: Array<CheckboxValueType>;
    onChange?: (checkedValue: Array<CheckboxValueType>) => void;
    children?: React.ReactNode;
}

export interface CheckboxGroupContext {
    toggleOption: (option: CheckboxOptionType) => void;
    value?: any;
    name?: string;
    disabled?: boolean;
}

export const GroupContext = React.createContext<CheckboxGroupContext | null>(null);

const CheckboxGroup: React.FC<CheckboxGroupProps> = (props) => {
    const {
        className,
        disabled,
        style,
        options: optionsProp,
        children: childrenProp,
        value: valueProp,
        defaultValue = [],
        onChange,
        ...restProps
    } = props;

    const [value, setValue] = useControlled({
        controlled: valueProp,
        default: defaultValue,
        name: "CheckboxGroup"
    });

    const { getPrefixCls } = React.useContext(ConfigContext);
    const prefixCls = getPrefixCls("checkbox");
    const groupPrefixCls = `${prefixCls}-group`;

    const toggleOption = (option: CheckboxOptionType) => {
        const optionIndex = value.indexOf(option.value);
        const curOptions = options || [];

        const curValue = [...value];

        if (optionIndex === -1) {
            curValue.push(option.value);
        } else {
            curValue.splice(optionIndex, 1);
        }
        setValue(curValue);

        if (onChange) {
            onChange(
                curValue.sort((a, b) => {
                    const indexA = curOptions.findIndex((opt) => opt.value === a);
                    const indexB = curOptions.findIndex((opt) => opt.value === b);
                    return indexA - indexB;
                })
            );
        }
    };

    const options = (optionsProp as Array<CheckboxOptionType>)?.map((option) => {
        if (typeof option === "string") {
            const handleOption: CheckboxOptionType = {
                label: option,
                value: option
            };
            return handleOption;
        }
        return option;
    });

    const children = !options
        ? childrenProp
        : options.map((option) => (
              <Checkbox
                  key={option.value.toString()}
                  value={option.value}
                  className={`${groupPrefixCls}-item`}
                  disabled={"disabled" in option ? option.disabled : disabled}
                  checked={value.indexOf(option.value) !== -1}
                  onChange={option.onChange}
              >
                  {option.label}
              </Checkbox>
          ));

    const classes = classNames(groupPrefixCls, className);

    const context = {
        toggleOption,
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

export default CheckboxGroup;
