import React from "react";
import { StyleWrapper, StyledInput } from "./input.styled";

export interface InputProps
    extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "size" | "value" | "onChange" | "type"
    > {
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    cleared?: boolean;
    password?: boolean;
    error?: boolean;
}


const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {
        value,
        onChange,
        placeholder,
        disabled,
        cleared,
        password,
        error,
        ...rest
    } = props;


    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        onChange && onChange(e ? e.target.value : "");
    };

    return (
        <StyleWrapper>
            <StyledInput
                ref={ref}
                value={value}
                onChange={handleChange}
                {...rest}
            />
        </StyleWrapper>
    );
});

export default Input;