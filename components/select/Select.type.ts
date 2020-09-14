import SelectOption from "./SelectOption";

type RawValue = string;
export type SelectValue = RawValue | RawValue[];

interface BaseSelectProps {
    value?: SelectValue;
    defaultValue?: string;
    disabled?: boolean;
    onchange?: (value: string) => void;
    multiple?: boolean;
    placeholder?: string;
    width?: string;
}

type NativeAttrs = Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseSelectProps>;

export type SelectProps = BaseSelectProps & NativeAttrs;
export interface SelectFC extends React.FC<SelectProps> {
    Option: typeof SelectOption;
}

// export type defaultSelectProps = {};

export interface SelectOptionProps {
    value?: string;
    disabled?: boolean;
    className?: string;
    divider?: boolean;
    label?: boolean;
    preventAllEvents?: boolean;
}
