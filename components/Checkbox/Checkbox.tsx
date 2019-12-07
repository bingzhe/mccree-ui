import * as React from "react";
import { CheckboxProps } from "./Checkbox.type";
import {
    StyledLable,
    StyledLabelText,
    StyledCheckbox,
    StyledCheckboxInner,
    StyledCheckboxWrapper
} from "./Checkbox.styled";

const Checkbox: React.FC<CheckboxProps> = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ checked, value, onChange, disabled, children, ...rest }, ref) => {

        const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
            e.persist();
            // e.preventDefault();
            // e.stopPropagation();
            // console.log(e);
            onChange && onChange(e.target.checked);
        };


        return (
            <StyledLable disabled={disabled}>
                <StyledCheckboxWrapper disabled={disabled}>
                    <StyledCheckbox
                        ref={ref}
                        type="checkbox"
                        value={value}
                        onChange={handleChange}
                        disabled={disabled}
                        checked={checked}
                    />
                    <StyledCheckboxInner disabled={disabled} checked={checked}></StyledCheckboxInner>
                </StyledCheckboxWrapper>
                <StyledLabelText>{children}</StyledLabelText>
            </StyledLable>
        );
    }
);

export default Checkbox;