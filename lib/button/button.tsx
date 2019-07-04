import * as React from "react";
import * as PropTypes from "prop-types";
import "./style/index";

import { tuple } from "../_util/type";

import styled, { css, ThemeProvider } from "styled-components";

import { primary, colors, theme } from "../themes/base";

const basicStyle = (props: Props) => css`
    background: ${props.type ? colors[props.type] : primary};
    color: #fff;
    will-change: box-shadow;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
`;

const plainStyle = (props: Props) => css`
    border: 1px solid ${props.type ? colors[props.type] : primary};
    color: ${props.type ? colors[props.type] : primary};
`;

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

    ${props => !props.plain && basicStyle(props)}
    ${props => props.plain && plainStyle(props)}
`;

const ButtonTypes = tuple('primary', 'success', 'warning', 'danger');
export type ButtonType = (typeof ButtonTypes)[number];
const ButtonSizes = tuple('large', 'medium', 'small');
export type ButtonSize = (typeof ButtonSizes)[number];


interface Props {
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
                    {/* <span>{children}</span> */}
                    {children}
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
}
export default Button;