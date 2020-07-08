import * as React from "react";

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

const RadioGroup = () => {
    return <div>group</div>;
};

export default RadioGroup;
