import * as React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import TouchRipple from "./RippleTouch";
import { useEventCallback, useSetColor } from "@mccree-ui/hooks";
import { ConfigContext } from "../config-provider";
import { RippleRootHTMLTag } from "./Ripple.type";

export interface RippleProps {
    center?: boolean;
    children?: React.ReactNode;
    className?: string;
    component?: RippleRootHTMLTag;
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
    style?: React.CSSProperties;
    block?: boolean;
}

/**
 * TODO 添加焦点逻辑
 */
const RippleWrapper: React.FC<RippleProps> = (props) => {
    const {
        center = false,
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
        color,
        solid,
        style,
        block,
        ...other
    } = props;

    const { getPrefixCls } = React.useContext(ConfigContext);
    const prefixCls = getPrefixCls("ripple-wrapper-root");

    const classes = classNames(prefixCls, className, {
        [`${prefixCls}-block`]: block
    });

    const rippleRef = React.useRef<any>(null);
    const rippleWrapperRef = React.useRef<any>(null);

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

    const enableTouchRipple = !disableRipple;

    const ComponentProp = component;

    return (
        <ComponentProp
            className={classes}
            ref={rippleWrapperRef}
            onClick={onClick}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onDragLeave={handleDragLeave}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
            onTouchStart={handleTouchStart}
            tabIndex={tabIndex}
            style={style}
            {...other}
        >
            {children}
            {enableTouchRipple ? (
                <TouchRipple ref={rippleRef} center={center} solid={solid} />
            ) : null}
        </ComponentProp>
    );
};

RippleWrapper.propTypes = {
    center: PropTypes.bool,
    disableRipple: PropTypes.bool,
    disableTouchRipple: PropTypes.bool
};

export default RippleWrapper;
