import * as React from "react";
import classNames from "classnames";
import TouchRipple from "./TouchRipple";

import useEventCallback from "../utils/useEventCallback";

export interface ButtonBaseProps {
    centerRipple?: boolean;
    children?: React.ReactNode;
    className?: string;
    component?: string;
    disableRipple?: boolean;
    disableTouchRipple?: boolean;
    onClick?: React.MouseEventHandler;
    onMouseDown?: React.MouseEventHandler;
    onMouseLeave?: React.MouseEventHandler;
    onMouseUp?: React.MouseEventHandler;
    onTouchEnd?: React.TouchEventHandler;
    onTouchMove?: React.TouchEventHandler;
    onTouchStart?: React.TouchEventHandler;
    onDragLeave?: React.DragEventHandler;
    tabIndex?: number;
}

const ButtonBase = React.forwardRef((props: ButtonBaseProps, ref) => {
    const {
        centerRipple = false,
        children,
        className,
        component = "span",
        disableRipple = false,
        disableTouchRipple = false,
        onClick,
        onMouseDown,
        onMouseLeave,
        onMouseUp,
        onTouchEnd,
        onTouchMove,
        onTouchStart,
        onDragLeave,
        tabIndex = 0,
        ...other
    } = props;

    const rippleRef = React.useRef<any>(null);

    React.useEffect(() => {
        if (!disableRipple) {
            rippleRef.current.pulsate();
        }
    }, [disableRipple]);

    function useRippleHandler(
        rippleAction: any,
        eventCallback: any,
        skipRippleAction = disableTouchRipple
    ) {
        return useEventCallback((event: any) => {
            if (eventCallback) {
                eventCallback(event);
            }

            const ignore = skipRippleAction;
            if (!ignore && rippleRef.current) {
                rippleRef.current[rippleAction](event);
            }

            return true;
        });
    }

    const handleMouseDown = useRippleHandler("start", onMouseDown);
    const handleDragLeave = useRippleHandler("stop", onDragLeave);
    const handleMouseUp = useRippleHandler("stop", onMouseUp);
    const handleMouseLeave = useRippleHandler("stop", (event: any) => {
        if (onMouseLeave) {
            onMouseLeave(event);
        }
    });
    const handleTouchStart = useRippleHandler("start", onTouchStart);
    const handleTouchEnd = useRippleHandler("stop", onTouchEnd);
    const handleTouchMove = useRippleHandler("stop", onTouchMove);

    let ComponentProp = component;

    const enableTouchRipple = !disableRipple;

    const ComponentPropClassName = classNames("base-button");

    return (
        <ComponentProp
            className={ComponentPropClassName}
            onClick={onClick}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onDragLeave={handleDragLeave}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
            onTouchStart={handleTouchStart}
            // ref={handleRef}
            tabIndex={tabIndex}
            {...other}
        >
            {children}
            {enableTouchRipple ? (
                /* TouchRipple is only needed client-side, x2 boost on the server. */
                <TouchRipple ref={rippleRef} center={centerRipple} />
            ) : null}
        </ComponentProp>
    );
});

export default ButtonBase;
