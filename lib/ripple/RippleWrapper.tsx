import * as React from "react";
import { TransitionGroup } from "react-transition-group";
import styled from "styled-components";

import Ripple from "./Ripple";


const DURATION = 550;
// width: 100%;
// height: 100%;
// left: 0;
// top: 0;
// pointer-events: none;
// display: block;
// overflow: hidden;
// position: absolute;
// z-index: 0;
const StyleRippleWrapper = styled.span`
    position: relative;
    display: inline-block;
    overflow: hidden;

    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 0;
`;

interface Props {
    center: boolean;
    timeout?: {
        enter: number;
        exit: number;
    };
}

const RippleWrapper: React.FunctionComponent<Props> = (props) => {

    const { children } = props;

    const [nextKey, setNextKey] = React.useState(0);
    const [ripples, setRipples] = React.useState<React.ReactNode[]>([]);

    const container = React.createRef<HTMLSpanElement>();

    const handleMouseDown = (e: React.MouseEvent) => { start(e) };
    const handleMouseUp = (e: React.MouseEvent) => { stop(e) };
    const handleMouseLeave = (e: React.MouseEvent) => { stop(e) };
    const handleTouchStart = (e: React.TouchEvent) => { start(e) };
    const handleTouchEnd = (e: React.TouchEvent) => { stop(e) };
    const handleTouchMove = (e: React.TouchEvent) => { stop(e) };

    const start = (e: React.MouseEvent | React.TouchEvent) => {

        const { center, timeout } = props;

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
        let startTimeout;
        let startWrapper;

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
            console.log("touches");
            startWrapper = () => {
                createRipple({ rippleX, rippleY, rippleSize, timeout });
            };
        } else {
            createRipple({ rippleX, rippleY, rippleSize, timeout });
        }
    };

    interface RippleParams {
        rippleX: number;
        rippleY: number;
        rippleSize: number;
        timeout?: {
            enter: number;
            exit: number;
        };
    }

    const createRipple = (params: RippleParams) => {
        const { rippleX, rippleY, rippleSize } = params;
        let { timeout } = params;

        if (!timeout) {
            timeout = {
                enter: DURATION,
                exit: DURATION,
            };
        }
        console.log(timeout);


        console.log(ripples);

        setNextKey(nextKey + 1);
        setRipples([
            ...ripples,
            <Ripple
                key={nextKey}
                timeout={timeout}
                rippleX={rippleX}
                rippleY={rippleY}
                rippleSize={rippleSize}
            >
            </Ripple>
        ]);
    };

    const stop = (e: React.MouseEvent | React.TouchEvent) => {
        console.log("stop");
        if (ripples && ripples.length) {
            setRipples(ripples.splice(1));
        }
    };

    React.useEffect(() => {
        console.log("container", container.current);

        return () => {
            console.log(111);
        };
    });



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
    // timeout: {
    //     enter: 500,
    //     exit: 500,
    // },
};

export default RippleWrapper;