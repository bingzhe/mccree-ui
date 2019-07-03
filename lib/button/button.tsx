import * as React from "react";
import "./style/index";

import styled, { css } from 'styled-components';

import { primary, colors } from "../themes/base"

const basicStyle = (props: Props) => css`
    background: ${props.type ? colors[props.type] : primary};
    color: #fff;
    will-change: box-shadow;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
`

const plainStyle = (props: Props) => css`
    border: 1px solid ${props.type ? colors[props.type] : primary};
    color: ${props.type ? colors[props.type] : primary};
`

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
`

interface Props {
    size?: "large" | "medium" | "small";
    type?: "primary" | "success" | "warning" | "danger";
    plain?: boolean;
    disabled?: boolean;
    className?: string;
}

const Button: React.FunctionComponent<Props> = (props) => {
    const { className, children, ...restProps } = props;

    return (
        <StyleButton
            className={className}
            // className="rui-button"
            {...restProps}
        >
            {children}
        </StyleButton>
    );
};

export default Button;