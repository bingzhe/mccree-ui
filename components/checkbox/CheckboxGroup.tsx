import * as React from "react";

export type CheckboxValueType = string | number | boolean;

export interface CheckboxOptionType {
    label: React.ReactNode;
    value: CheckboxOptionType;
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

const CheckboxGroup = () => {
    return <div>Group</div>;
};

export default CheckboxGroup;
