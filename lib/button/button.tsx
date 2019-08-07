import * as React from "react";
import * as PropTypes from "prop-types";
// import "./style/index";

import { tuple } from "../_util/type";

import styled, { css, ThemeProvider } from "styled-components";

import { theme } from "../themes/base";

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
`;

const sizeStyle = (size: ButtonSize) => {
    if (size === "large") {
        return "padding: 8px 24px;";
    }
    if (size === "small") {
        return "padding: 4px 8px;";
    }
    return "padding: 6px 16px;";
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


const ButtonTypes = tuple("primary", "success", "warning", "danger");
export type ButtonType = (typeof ButtonTypes)[number];
const ButtonSizes = tuple("large", "medium", "small");
export type ButtonSize = (typeof ButtonSizes)[number];


interface Props extends React.HtmlHTMLAttributes<HTMLElement> {
    type?: ButtonType;
    size?: ButtonSize;
    plain?: boolean;
    disabled?: boolean;
    className?: string;
    icon?: string;
    loading?: boolean;
}

const Button: React.FunctionComponent<Props> = (props) => {
    const { className, loading, children, ...restProps } = props;

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <StyleButton
                    className={className}
                    {...restProps}
                >
                    <span>{children}</span>
                </StyleButton>
            </ThemeProvider >
        </React.Fragment>

    );
};

Button.defaultProps = {
    type: "primary",
    size: "medium",
    disabled: false,
    loading: false,
};

Button.propTypes = {
    type: PropTypes.oneOf(ButtonTypes),
    size: PropTypes.oneOf(ButtonSizes),
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    icon: PropTypes.string,
    plain: PropTypes.bool,
    className: PropTypes.string
};

export default Button;