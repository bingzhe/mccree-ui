import * as React from "react";
import classNames from "classnames";

import TouchRipple from "./RippleTouch";
import useEventCallback from "../utils/useEventCallback";
import useSetColor from "../hooks/useSetColor";
import { ConfigContext } from "../config-provider";

export interface ButtonBaseProps {
    center?: boolean;
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
    color?: string;
    solid?: boolean;
}

/**
 * todo 添加焦点逻辑
 */
const RippleWrapper = React.forwardRef((props: ButtonBaseProps, ref) => {
    const {
        center = false,
        children,
        className,
        component = "button",
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
        color,
        solid,
        ...other
    } = props;

    const { getPrefixCls } = React.useContext(ConfigContext);
    const prefixCls = getPrefixCls("ripple-wrapper-root");

    const classes = classNames(prefixCls, className);

    const rippleRef = React.useRef<any>(null);
    const rippleWrapperRef = React.useRef<HTMLSpanElement>(null);

    useSetColor(rippleWrapperRef, "color", color);

    // 焦点相关
    // React.useEffect(() => {
    //     if (!disableRipple) {
    //         rippleRef.current.pulsate();
    //     }
    // }, [disableRipple]);

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

    // let ComponentProp = component;

    const enableTouchRipple = !disableRipple;

    return (
        <span
            ref={rippleWrapperRef}
            className={classes}
            onClick={onClick}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onDragLeave={handleDragLeave}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
            onTouchStart={handleTouchStart}
            tabIndex={tabIndex}
            {...other}
        >
            {children}
            {enableTouchRipple ? (
                <TouchRipple ref={rippleRef} center={center} solid={solid} />
            ) : null}
        </span>
    );
});

export default RippleWrapper;
