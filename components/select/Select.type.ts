type RawValue = string;
type SelectValue = RawValue | RawValue[];

export interface SelectProps {
    className?: string;
    value?: SelectValue;
    defaultValue?: string;
    disabled?: boolean;
    onchange?: (value: string) => void;
    multiple?: boolean;
    placeholder?: string;
}

export interface SelectOptionProps {
    value?: string;
    disabled?: boolean;
    className?: string;
    divider?: boolean;
    label?: boolean;
    preventAllEvents?: boolean;
}
