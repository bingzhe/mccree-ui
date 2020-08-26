import * as React from "react";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";

import { ConfigContext } from "../config-provider";
import { omit } from "../utils/omit";

const { useState, useEffect, useRef, useContext } = React;

export type TransitionClassProps = "root" | "fade" | "zoom" | "slide" | "collapse" | "grow";
export type TransitionType = "fade" | "zoom" | "slide" | "collapse" | "grow" | "custom";

export interface TransitionProps extends Omit<CSSTransitionProps, "in"> {
    children: React.ReactElement;
    type?: TransitionType;
    visible?: boolean;
    wrapper?: boolean;
    // custom?: Style;
}

const Transition = React.forwardRef<HTMLDivElement, TransitionProps>((props, ref) => {
    const {
        type = "fade",
        wrapper = true,
        appear = true,
        timeout = 250,
        visible,
        mountOnEnter,
        unmountOnExit,
        addEndListener,
        onEnter,
        onEntering,
        onEntered,
        onExit,
        onExiting,
        onExited,
        children,
        ...restProps
    } = props;

    const otherProps = omit(restProps, ["custom"]);

    const [wrapperHeight, setWrapperHeight] = useState(0);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (wrapperRef?.current?.clientHeight) {
            setWrapperHeight(wrapperRef.current.clientHeight);
        }
    }, []);

    const { getPrefixCls } = useContext(ConfigContext);
    const prefixCls = getPrefixCls("transition");

    const classes = classNames(prefixCls, {
        [`${prefixCls}-fade`]: type === "fade",
        [`${prefixCls}-${type}-visible`]: visible,
        [`${prefixCls}-${type}-hide`]: !visible
    });

    console.log({ wrapperHeight });
    console.log({ prefixCls });
    console.log({ classes });

    return (
        <CSSTransition
            classNames={type}
            in={visible}
            appear={appear}
            timeout={timeout}
            mountOnEnter={mountOnEnter}
            unmountOnExit={unmountOnExit}
            addEndListener={addEndListener}
            onEnter={onEnter}
            onEntering={onEntering}
            onEntered={onEntered}
            onExit={onExit}
            onExiting={onExiting}
            onExited={onExited}
            {...otherProps}
        >
            {wrapper ? (
                <div className={classes} ref={ref} {...otherProps}>
                    <div ref={wrapperRef}>{children}</div>
                </div>
            ) : (
                React.cloneElement(children, {
                    ...otherProps,
                    className: classNames(children.props.className, classes)
                })
            )}
        </CSSTransition>
    );
});

export default Transition;
