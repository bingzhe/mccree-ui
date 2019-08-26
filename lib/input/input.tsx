import React from "react";
import { StyleWrapper, StyleInput, StyleIcon } from "./input.styled";
import { InputProps } from "./input.type";
import Icon from "../icon/index";

const Input = React.forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
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

    const clearedRef = React.useRef<HTMLSpanElement>(null);
    const [clearedHeight, setClearedHeight] = React.useState(0);

    React.useEffect(() => {
        clearedRef && clearedRef.current && setClearedHeight(clearedRef.current.clientHeight);
    }, []);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | null) => {
        onChange && onChange(e ? e.target.value : "");
    };

    const handleClear: React.MouseEventHandler<HTMLSpanElement> = (e) => {
        e.preventDefault();
        e.stopPropagation();
        handleChange(null);
    };


    return (
        <StyleWrapper>
            <StyleInput
                ref={ref}
                value={value}
                error={error}
                cleared={cleared}
                clearedHeight={clearedHeight}
                onChange={handleChange}
                {...rest}
            />
            {!!value && cleared && (
                <StyleIcon onClick={handleClear} clearedHeight={clearedHeight} ref={clearedRef}>
                    <Icon name="close" />
                </StyleIcon>
            )}
        </StyleWrapper>
    );
});

export default Input;