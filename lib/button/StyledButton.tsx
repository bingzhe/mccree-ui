import styled, { css, ThemeProvider } from "styled-components";
import { ButtonProps } from "./button";

const basicStyle = css<Props>`
    background: ${props => props.theme.button.colors[props.type || "primary"]};
    color: #fff;
    will-change: box-shadow;
    box-shadow: ${props => props.theme.global.shadows[1]};
`;

const plainStyle = css<Props>`
    border: 1px solid ${props => props.theme.button.colors[props.type || "primary"]};
    color: ${props => props.theme.button.colors[props.type || "primary"]};
`;

const disabledStyle = css<Props>`
    opacity: .5;
    cursor: default;
    box-shadow: ${props => props.theme.global.shadows[0]};
`

const sizeStyle = (size: ButtonSize) => {
    if (size === "large") {
        return "padding: 8px 24px;";
    }
    if (size === "small") {
        return "padding: 4px 8px;";
    }
    return "padding: 6px 16px;"
};

const StyleButton = styled.button<Props>`
    display: inline-block;
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
    font: inherit;
    text-decoration: none;
    border: 0;
    margin: 0;
    background: transparent;
    overflow: visible;
    text-transform: none;
    padding: 6px 16px;
    min-width: 64px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 2px;

    ${props => !props.plain && basicStyle}
    ${props => props.plain && plainStyle}

    ${props => props.size && sizeStyle(props.size)}
    ${props => props.disabled && disabledStyle}
`;

