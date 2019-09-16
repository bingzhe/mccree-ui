import { styled, th, css, variant } from "../styles/styled";

const disabled = variant({
    prop: "disabled",
    default: false,
    variants: {
        true: css`
        color: ${th.color("standard.dark2")};
        background-color: ${th.color("standard.light1")};
        border-color: ${th.color("standard.default")};
        pointer-events: none;
      `,
        false: css``
    }
});

const checked = variant({
    prop: "checked",
    default: false,
    variants: {
        true: css`
            color: ${th.color("white.default")};
            background-color: ${th.color("primary.default")};
            border-color: ${th.color("primary.default")};
            &:hover,
            &:focus {
                border-color: ${th.color("primary.default")};
            }
            &:active {
                background-color: ${th.color("primary.dark3")};
                border-color: ${th.color("primary.dark3")};
            }
            &::after {
                position: absolute;
                top: 7px;
                left: 3px;
                width: 6px;
                height: 12px;
                border: 2px solid #fff;
                border-top: 0;
                border-left: 0;
                transform: rotate(45deg) scale(1) translate(-50%, -50%);
                opacity: 1;
                content: '';
                transition: ${th.transition("checkbox")};
            }
        `,
        false: css`
            color: ${th.color("black.default")};
            background-color: ${th.color("white.default")};
            border-color: ${th.color("standard.default")};
            &:hover,
            &:focus {
                border-color: ${th.color("standard.dark1")};
            }
            &:active {
                color: ${th.color("white.default")};
                background-color: ${th.color("primary.default")};
                border-color: ${th.color("primary.default")};
            }        
            &::after{
                position: absolute;
                top: 7px;
                left: 3px;
                width: 6px;
                height: 12px;
                border: 2px solid #fff;
                border-top: 0;
                border-left: 0;
                transform: rotate(45deg) scale(0) translate(-50%, -50%);
                opacity: 0;
                content: ' ';
                transition: ${th.transition("checkbox")};
            }
        `
    }
});

export const StyledLable = styled.label<{ disabled?: boolean }>`
    display: inline-flex;
    justify-content: space-between;
    align-items:center;
    vertical-align: middle;
    // cursor: ${({ disabled }): string => (disabled ? "not-allowed" : "pointer")}
`;

export const StyledLabelText = styled.span`
    font-size: 0.8em;
    margin-left: ${({ children }): string => (children ? "4px" : "0px")}
`;

export const StyledCheckbox = styled.input`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
`;

export const StyledCheckboxInner = styled.span<{ disabled?: boolean; checked?: boolean }>`
    width: 20px;
    height: 20px;
    position: relative;
    top: 0;
    left: 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 2px solid;
    border-radius: 2px;
    transition: ${th.transition("checkbox")};

    ${checked}
    ${disabled}
`;

export const StyledCheckboxWrapper = styled.span<{ disabled?: boolean }>`
    display: inline-block;
    display: inline-block;
    position: relative;
    line-height: 1;
    vertical-align: middle;
    outline: none;
    cursor: ${({ disabled }): string => (disabled ? "not-allowed" : "pointer")}
`;