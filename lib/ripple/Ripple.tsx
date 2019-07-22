import * as React from "react";
import { Transition } from "react-transition-group";
import styled, { css, keyframes } from "styled-components";


const rippleEnter = keyframes`
    0% { transform: scale(0);}
    100% { transform: scale(1);}
`;

const rippleExit = keyframes`
    0% { opacity: 1;}
    100% { opacity: 0; }
`;

const rippleVisibleStyle = css`
    opacity: 0.3;
    transform: scale(1);
    animation: ${rippleEnter} 550ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const rippleChildSpanStyle = css`
    opacity: 0;
    animation: ${rippleExit} 550ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const StyleRippleSpan = styled.span<RippleProps>`
    opacity: 0;
    position: absolute;
    
    ${props => props.visible && rippleVisibleStyle}
`;

const StyleRippleChildSpan = styled.span<RippleProps>`
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;

    ${props => props.leaving && rippleChildSpanStyle}
`;

interface RippleProps {
    visible?: boolean;
    leaving?: boolean;
}

interface Props {
    rippleX: number;
    rippleY: number;
    rippleSize: number;
    timeout: {
        enter: number;
        exit: number;
    };
}

const Ripple: React.FunctionComponent<Props> = (props) => {

    const {
        classes,
        className,
        rippleX,
        rippleY,
        rippleSize,
        ...other
    } = props;

    const [visible, setVisible] = React.useState(false);
    const [leaving, setLeaving] = React.useState(false);

    const handleEnter = () => {
        setVisible(true);
    };

    const handleExit = () => {
        setLeaving(true);
    };

    const rippleStyles = {
        width: rippleSize,
        height: rippleSize,
        top: -(rippleSize / 2) + rippleY,
        left: -(rippleSize / 2) + rippleX,
    };

    return (
        <Transition onEnter={handleEnter} onExit={handleExit} {...other}>
            <StyleRippleSpan visible={visible} style={rippleStyles}>
                <StyleRippleChildSpan leaving={leaving}></StyleRippleChildSpan>
            </StyleRippleSpan>
        </Transition>
    );
};

export default Ripple;