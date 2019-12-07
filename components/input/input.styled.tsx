import { styled, css, th, variant } from "../styles/styled";
import { InputProps } from "./input.type";

interface StyleInputProps extends Omit<InputProps, "onChange"> {
    clearedHeight: number;
}

export const StyleWrapper = styled.span`
    display: inline-block;
    position: relative;
    min-width: 200px;
    font: inherit;
`;

const base = css`
    outline: none;
    font: inherit;
    width: 100%;
    border-radius: 2px;
    border: 1px solid;
    border-color: ${th("colors.standard.default")}
    transition: ${th("transitions.input")};
    ${th("sizes.medium.input")};
    &:hover{
        border-color:${th("colors.standard.dark1")};
    }
    &:active, &:focus {
        border-color:${th("colors.primary.default")};
    }
    &:disabled{
        color: ${th("colors.standard.dark2")};
        background-color: ${th("colors.standard.light1")}
        pointer-events:none;
        cursor: not-allowed;
    }
`;

const error = variant({
    prop: "error",
    default: false,
    variants: {
        true: css`
            border-color: ${th("colors.error.default")}
            &:hover {
                border-color: ${th("colors.error.default")};
            }
            &:active,
            &:focus {
            border-color: ${th("colors.error.default")};
            }
        `,
        false: css``
    }
});

const cleared = variant({
    prop: "cleared",
    default: false,
    variants: {
        true: css`
          padding-right: ${({ clearedHeight }: StyleInputProps): string => `${clearedHeight}px`};
        `,
        false: css``
    }
});

export const StyleInput = styled.input<StyleInputProps>`
    ${base}
    ${error}
    ${cleared}
`;

export const StyleIcon = styled.span<{ clearedHeight: number }>`
    width: ${({ clearedHeight }): string => `${clearedHeight}px`};
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    font-size: 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition: ${th.transition("input")};
    &:hover {
        background-color: ${th.color("primary.default")};
        color: ${th.color("white.default")};
    }
`;
