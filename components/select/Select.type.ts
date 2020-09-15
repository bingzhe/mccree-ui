import SelectOption from "./SelectOption";

type RawValue = string;
export type SelectValue = RawValue | RawValue[];

interface BaseSelectProps {
    value?: SelectValue;
    defaultValue?: string;
    disabled?: boolean;
    onChange?: (value?: SelectValue) => void;
    multiple?: boolean;
    placeholder?: string;
    width?: string;
    pure?: boolean;
    clearable?: boolean;
}

type NativeAttrs = Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseSelectProps>;

export type SelectProps = BaseSelectProps & NativeAttrs;
export interface SelectFC extends React.FC<SelectProps> {
    Option: typeof SelectOption;
}

export const defaultSelectProps = {
    pure: false
};

export interface DropdownProps {
    parent?: React.MutableRefObject<HTMLElement | null>;
    visible?: boolean;
    disableMatchWidth?: boolean;
    popperRef?: React.RefObject<HTMLDivElement>;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export interface SelectMultipleValueProps {
    disabled?: boolean;
}
export interface SelectOptionProps {
    value?: string;
    disabled?: boolean;
    className?: string;
    divider?: boolean;
    label?: boolean;
    preventAllEvents?: boolean;
}
