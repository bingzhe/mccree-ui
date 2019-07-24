import * as React from "react";
import { TransitionGroup } from "react-transition-group";
import styled from "styled-components";

import Ripple from "./Ripple";


const DURATION = 550;

// pointer-events: none;
const StyleRippleWrapper = styled.span`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: inline-block;
    overflow: hidden;
    z-index: 0;
`;

interface Props {
    className?: string;
    center?: boolean;
    color?: string;
    children?: React.ReactNode;
    timeout?: {
        enter: number;
        exit: number;
    };
}

const RippleWrapper: React.FunctionComponent<Props> = (props) => {

    const {
        children,
        center = false,
        color = "currentColor",
        timeout = {
            enter: DURATION,
            exit: DURATION,
        }
    } = props;

    const [nextKey, setNextKey] = React.useState(0);
    const [ripples, setRipples] = React.useState<React.ReactNode[]>([]);

    const container = React.createRef<HTMLSpanElement>();

    let startTimeout: NodeJS.Timeout;
    let startWrapper: (() => void) | null;
    let ignoringMousedown = false;

    const handleMouseDown = (e: React.MouseEvent) => { start(e) };
    const handleMouseUp = (e: React.MouseEvent) => { stop(e) };
    const handleMouseLeave = (e: React.MouseEvent) => { stop(e) };
    const handleTouchStart = (e: React.TouchEvent) => { start(e) };
    const handleTouchEnd = (e: React.TouchEvent) => { stop(e) };
    const handleTouchMove = (e: React.TouchEvent) => { stop(e) };

    React.useEffect(() => {
        return () => {
            clearTimeout(startTimeout);
        };
    });

    const start = (e: React.MouseEvent | React.TouchEvent) => {
        if (e.type === "mousedown" && ignoringMousedown) {
            ignoringMousedown = false;
            return;
        }
        if (e.type === "touchstart") {
            ignoringMousedown = true;
        }

        const element = container.current;
        const rect = element
            ? element.getBoundingClientRect()
            : {
                width: 0,
                height: 0,
                left: 0,
                top: 0
            };

        // calculate this size of the  ripple
        let rippleX: number;
        let rippleY: number;
        let rippleSize: number;

        if (
            center ||
            ((e as React.MouseEvent).clientX === 0 && (e as React.MouseEvent).clientY === 0) ||
            (!(e as React.MouseEvent).clientX && !(e as React.TouchEvent).touches)
        ) {
            rippleX = Math.round(rect.width / 2);
            rippleY = Math.round(rect.height / 2);
        } else {

            const clientX = "clientX" in e ? e.clientX : e.touches[0].clientX;
            const clientY = "clientY" in e ? e.clientY : e.touches[0].clientY;

            rippleX = Math.round(clientX - rect.left);
            rippleY = Math.round(clientY - rect.top);
        }

        if (center) {
            rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);
        } else {
            const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
            const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
            rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
        }

        if ("touches" in e) {
            startWrapper = () => {
                createRipple({ rippleX, rippleY, rippleSize, color, timeout });
            };

            startTimeout = setTimeout(() => {
                (startWrapper as () => void)();
                startWrapper = null;
            }, 80);

        } else {
            createRipple({ rippleX, rippleY, rippleSize, color, timeout });
        }
    };

    interface RippleParams {
        rippleX: number;
        rippleY: number;
        rippleSize: number;
        color: string;
        timeout: {
            enter: number;
            exit: number;
        };
    }

    const createRipple = (params: RippleParams) => {
        const { rippleX, rippleY, rippleSize, color, timeout } = params;

        setNextKey(nextKey + 1);
        setRipples([
            ...ripples,
            <Ripple
                key={nextKey}
                timeout={timeout}
                rippleX={rippleX}
                rippleY={rippleY}
                rippleSize={rippleSize}
                color={color}
            >
            </Ripple>
        ]);
    };

    const stop = (e: React.MouseEvent | React.TouchEvent) => {
        if (e.type === "touchend" && startWrapper) {
            e.persist();
            startWrapper();
            startWrapper = null;
            startTimeout = setTimeout(() => {
                stop(e);
            }, 0);
            return;
        }

        startWrapper = null;
        if (ripples && ripples.length) {
            setRipples(ripples.splice(1));
        }
    };

    return (
        <React.Fragment>
            {children}
            <StyleRippleWrapper
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onTouchMove={handleTouchMove}
                ref={container}
            >
                <TransitionGroup
                    component={null}
                    enter
                    exit
                >
                    {ripples}
                </TransitionGroup>
            </StyleRippleWrapper>
        </React.Fragment>
    );
};

RippleWrapper.defaultProps = {
    timeout: {
        enter: DURATION,
        exit: DURATION,
    },
};

export default RippleWrapper;