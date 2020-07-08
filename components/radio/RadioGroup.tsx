import * as React from "react";

import { useControlled } from "../utils/useControlled";
import { ConfigContext } from "../config-provider";

export type RadioValueType = string | number | boolean;

export interface RadioOptionType {
    label: React.ReactNode;
    value: RadioValueType;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface RadioGroupProps {
    className?: string;
    options?: Array<RadioValueType | string>;
    disabled?: boolean;
    style?: React.CSSProperties;
    name?: string;
    value?: RadioValueType;
    defaultValue?: RadioValueType;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    children?: React.ReactNode;
}

export interface RadioGroupContext {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: any;
    name?: string;
    disabled?: boolean;
}

const RadioGroup: React.FC<RadioGroupProps> = (props) => {
    const { className, value: valueProp, defaultValue } = props;

    const [value, setValue] = useControlled({
        controlled: valueProp,
        default: defaultValue,
        name: "RadioGroup"
    });

    const { getPrefixCls } = React.useContext(ConfigContext);
    const prefixCls = getPrefixCls("radio");
    const groupPrefixCls = `${prefixCls}-group`;

    console.log(value);
    console.log(setValue);
    console.log(className);
    console.log({ groupPrefixCls });

    return <div>group</div>;
};

export default RadioGroup;
