import * as React from "react";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";

import { ConfigContext } from "../config-provider";
import { TransitionProps } from "./Transition.type";

const { useEffect, useRef, useContext } = React;

const Transition: React.FC<TransitionProps> = (props) => {
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

    const wrapperInnerRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    /**
     * collapse 需要设置高度
     */
    useEffect(() => {
        if (wrapperInnerRef?.current?.clientHeight && wrapperRef.current && type === "collapse") {
            wrapperRef.current.style.setProperty(
                "--wrapper-height",
                `${wrapperInnerRef.current.clientHeight}px`
            );
        }
    }, [type]);

    const { getPrefixCls } = useContext(ConfigContext);
    const prefixCls = getPrefixCls("transition");

    const classes = classNames(prefixCls, {
        [`${prefixCls}-fade`]: type === "fade",
        [`${prefixCls}-zoom`]: type === "zoom",
        [`${prefixCls}-slide`]: type === "slide",
        [`${prefixCls}-collapse`]: type === "collapse",
        [`${prefixCls}-grow`]: type === "grow",
        [`${prefixCls}-${type}-visible`]: visible,
        [`${prefixCls}-${type}-hide`]: !visible
    });

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
            {...restProps}
        >
            {wrapper ? (
                <div className={classes} ref={wrapperRef} {...restProps}>
                    <div ref={wrapperInnerRef}>{children}</div>
                </div>
            ) : (
                React.cloneElement(children, {
                    ...restProps,
                    className: classNames(children.props.className, classes)
                })
            )}
        </CSSTransition>
    );
};
export default Transition;
