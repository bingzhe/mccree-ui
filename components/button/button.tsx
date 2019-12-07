import * as React from "react";
import * as PropTypes from "prop-types";
// import "./style/index";

import { tuple } from "../_util/type";

import styled, { css } from "styled-components";

// import { theme } from "../themes/base";

// background: ${props => props.theme.button.colors[props.styleType]};
const basicStyle = css<StyleProps>`
    background: ${props => props.theme.colors.primary.default}
    color: #fff;
    will-change: box-shadow;
    `;
// box-shadow: ${props => props.theme.global.shadows[1]};

// border: 1px solid ${props => props.theme.button.colors[props.styleType]};
// color: ${props => props.theme.button.colors[props.styleType]};
const plainStyle = css<StyleProps>`
`;

const disabledStyle = css<StyleProps>`
    opacity: .5;
    cursor: default;
    `;
// box-shadow: ${props => props.theme.global.shadows[0]};

const sizeStyle = (size: ButtonSize) => {
    if (size === "large") {
        return "padding: 8px 24px;";
    }
    if (size === "small") {
        return "padding: 4px 8px;";
    }
    return "padding: 6px 16px;";
};

const StyleButton = styled.button<StyleProps>`
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

interface StyleProps {
    styleType: ButtonType;
    size: ButtonSize;
    plain?: boolean;
    disabled?: boolean;
    // className?: string;
    // icon?: string;
    // loading?: boolean;
}

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
    const {
        className,
        loading,
        type = "primary",
        size = "medium",
        children,
        ...restProps
    } = props;

    return (
        <React.Fragment>
            {/* <ThemeProvider theme={theme}> */}
            <StyleButton
                className={className}
                size={size}
                styleType={type}
                {...restProps}
            >
                <span>{children}</span>
            </StyleButton>
            {/* </ThemeProvider > */}
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