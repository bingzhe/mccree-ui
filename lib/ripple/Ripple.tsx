import * as React from "react";
import { Transition } from "react-transition-group";
import { keyframes } from "styled-components";


const rippleEnter = keyframes`
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`;

const rippleExit = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

interface Props {
    rippleX: number;
    rippleY: number;
    rippleSize: number;
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

    return (
        <Transition onEnter={handleEnter} onExit={handleExit} >
            <span>
                <span></span>
            </span>
        </Transition>
    );
};

export default Ripple;