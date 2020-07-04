import * as React from "react";

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
    prefixCls?: string;
    className?: string;
    options?: Array<CheckboxOptionType | string>;
    disabled?: boolean;
    name?: string;
    defaultValue?: Array<CheckboxValueType>;
    value?: Array<CheckboxValueType>;
    onChange?: (checkedValue: Array<CheckboxValueType>) => void;
}

export interface CheckboxGroupContent {
    toggleOption: (option: CheckboxOptionType) => void;
    value?: any;
    name?: string;
    disabled?: boolean;
}

export const GroupContext = React.createContext<CheckboxGroupContent | null>(null);

const CheckboxGroup: React.FC<CheckboxGroupProps> = (props) => {
    const {
        className,
        disabled,
        options: optionsProp,
        children: childrenProp,
        value: valueProp,
        defaultValue = [],
        onChange,
        ...restProps
    } = props;

    // const [value, setValue] = React.useState<Array<CheckboxValueType>>(defaultValue);
    // const [preValue, setPreValue] = React.useState<Array<CheckboxValueType>>([]);

    // console.log({ value });
    // console.log({ setValue });
    // if (valueProp) {
    //     setValue(valueProp);
    // }
    const [value, setValue] = useControlled({
        controlled: valueProp,
        default: defaultValue,
        name: "CheckboxGroup"
    });

    console.log(setValue);

    const { getPrefixCls } = React.useContext(ConfigContext);
    const prefixCls = getPrefixCls("checkbox");
    const groupPrefixCls = `${prefixCls}-group`;

    console.log({ ...restProps });

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

    console.log({ options });

    // let children = childrenProp;
    // if (options && options.length > 0) {

    // }

    const toggleOption = (option: CheckboxOptionType) => {
        const optionIndex = value.indexOf(option.value);

        const curValue = [...value];

        console.log(optionIndex);
        if (optionIndex === -1) {
            curValue.push(option.value);
        } else {
            curValue.splice(optionIndex, 1);
        }
        setValue(curValue);
        if (onChange) {
            onChange(
                curValue.sort((a, b) => {
                    const indexA = options.findIndex((opt) => opt.value === a);
                    const indexB = options.findIndex((opt) => opt.value === b);
                    return indexA - indexB;
                })
            );
        }
    };

    const contenxt = {
        toggleOption,
        value: value,
        disabled: disabled,
        name: name
    };
    // return <div>Group</div>;
    return <GroupContext.Provider value={contenxt}>{children}</GroupContext.Provider>;
};

export default CheckboxGroup;
