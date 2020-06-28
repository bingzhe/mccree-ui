import * as React from "react";
import * as ReactDOM from "react-dom";
import classNames from "classnames";
import TouchRipple from "./TouchRipple";
import useEventCallback from "../utils/useEventCallback";
import useIsFocusVisible from "../utils/useIsFocusVisible";
import useForkRef from "../utils/useForkRef";

export interface ButtonBaseActions {
    focusVisible: () => void;
}

export interface ButtonBaseProps {
    action?: React.Ref<ButtonBaseActions>;
    centerRipple?: boolean;
    children?: React.ReactNode;
    className?: string;
    component?: string;
    disabled?: boolean;
    disableRipple?: boolean;
    disableTouchRipple?: boolean;
    focusRipple?: boolean;
    focusVisibleClassName?: string;
    onBlur?: React.FocusEventHandler;
    onClick?: React.MouseEventHandler;
    onFocus?: React.FocusEventHandler;
    onKeyDown?: React.KeyboardEventHandler;
    onKeyUp?: React.KeyboardEventHandler;
    onMouseDown?: React.MouseEventHandler;
    onMouseLeave?: React.MouseEventHandler;
    onMouseUp?: React.MouseEventHandler;
    onTouchEnd?: React.TouchEventHandler;
    onTouchMove?: React.TouchEventHandler;
    onTouchStart?: React.TouchEventHandler;
    onDragLeave?: React.DragEventHandler;
    tabIndex?: number;
    onFocusVisible?: any;
    type?: string;
    TouchRippleProps?: any;
    buttonRef?: any;
}

const ButtonBase: React.FC<ButtonBaseProps> = React.forwardRef((props, ref) => {
    const {
        action,
        buttonRef: buttonRefProp,
        centerRipple = false,
        children,
        // classes,
        className,
        component = "button",
        disabled = false,
        disableRipple = false,
        disableTouchRipple = false,
        focusRipple = false,
        focusVisibleClassName,
        onBlur,
        onClick,
        onFocus,
        onFocusVisible,
        onKeyDown,
        onKeyUp,
        onMouseDown,
        onMouseLeave,
        onMouseUp,
        onTouchEnd,
        onTouchMove,
        onTouchStart,
        onDragLeave,
        tabIndex = 0,
        TouchRippleProps,
        type = "button",
        ...other
    } = props;

    const buttonRef = React.useRef<any>(null);
    function getButtonNode() {
        // #StrictMode ready
        // eslint-disable-next-line react/no-find-dom-node
        return ReactDOM.findDOMNode(buttonRef.current);
    }

    const rippleRef = React.useRef<any>(null);

    const [focusVisible, setFocusVisible] = React.useState(false);
    if (disabled && focusVisible) {
        setFocusVisible(false);
    }
    const { isFocusVisible, onBlurVisible, ref: focusVisibleRef } = useIsFocusVisible();

    React.useImperativeHandle(
        action,
        () => ({
            focusVisible: () => {
                setFocusVisible(true);
                buttonRef.current.focus();
            }
        }),
        []
    );

    React.useEffect(() => {
        if (focusVisible && focusRipple && !disableRipple) {
            rippleRef.current.pulsate();
        }
    }, [disableRipple, focusRipple, focusVisible]);

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
        if (focusVisible) {
            event.preventDefault();
        }
        if (onMouseLeave) {
            onMouseLeave(event);
        }
    });
    const handleTouchStart = useRippleHandler("start", onTouchStart);
    const handleTouchEnd = useRippleHandler("stop", onTouchEnd);
    const handleTouchMove = useRippleHandler("stop", onTouchMove);
    const handleBlur = useRippleHandler(
        "stop",
        (event: any) => {
            if (focusVisible) {
                onBlurVisible(event);
                setFocusVisible(false);
            }
            if (onBlur) {
                onBlur(event);
            }
        },
        false
    );

    const handleFocus = useEventCallback((event: any) => {
        // Fix for https://github.com/facebook/react/issues/7769
        if (!buttonRef.current) {
            buttonRef.current = event.currentTarget;
        }

        if (isFocusVisible(event)) {
            setFocusVisible(true);

            if (onFocusVisible) {
                onFocusVisible(event);
            }
        }

        if (onFocus) {
            onFocus(event);
        }
    });

    const isNonNativeButton = () => {
        const button: any = getButtonNode();
        return component && component !== "button" && !(button.tagName === "A" && button.href);
    };

    /**
     * IE 11 shim for https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat
     */
    const keydownRef = React.useRef(false);
    const handleKeyDown = useEventCallback((event: any) => {
        // Check if key is already down to avoid repeats being counted as multiple activations
        console.log("click");
        if (
            focusRipple &&
            !keydownRef.current &&
            focusVisible &&
            rippleRef.current &&
            event.key === " "
        ) {
            keydownRef.current = true;
            event.persist();
            rippleRef.current.stop(event, () => {
                rippleRef.current.start(event);
            });
        }

        if (event.target === event.currentTarget && isNonNativeButton() && event.key === " ") {
            event.preventDefault();
        }

        if (onKeyDown) {
            onKeyDown(event);
        }

        // Keyboard accessibility for non interactive elements
        if (
            event.target === event.currentTarget &&
            isNonNativeButton() &&
            event.key === "Enter" &&
            !disabled
        ) {
            event.preventDefault();
            if (onClick) {
                onClick(event);
            }
        }
    });

    const handleKeyUp = useEventCallback((event: any) => {
        // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
        // https://codesandbox.io/s/button-keyup-preventdefault-dn7f0
        if (
            focusRipple &&
            event.key === " " &&
            rippleRef.current &&
            focusVisible &&
            !event.defaultPrevented
        ) {
            keydownRef.current = false;
            event.persist();
            rippleRef.current.stop(event, () => {
                rippleRef.current.pulsate(event);
            });
        }
        if (onKeyUp) {
            onKeyUp(event);
        }

        // Keyboard accessibility for non interactive elements
        if (
            onClick &&
            event.target === event.currentTarget &&
            isNonNativeButton() &&
            event.key === " " &&
            !event.defaultPrevented
        ) {
            onClick(event);
        }
    });

    let ComponentProp = component;

    if (ComponentProp === "button" && (other as any).href) {
        ComponentProp = "a";
    }

    const buttonProps: any = {};
    if (ComponentProp === "button") {
        buttonProps.type = type;
        buttonProps.disabled = disabled;
    } else {
        if (ComponentProp !== "a" || !(other as any).href) {
            buttonProps.role = "button";
        }
        buttonProps["aria-disabled"] = disabled;
    }

    const handleUserRef = useForkRef(buttonRefProp, ref);
    const handleOwnRef = useForkRef(focusVisibleRef, buttonRef);
    const handleRef = useForkRef(handleUserRef, handleOwnRef);

    const [mountedState, setMountedState] = React.useState(false);

    React.useEffect(() => {
        setMountedState(true);
    }, []);

    const enableTouchRipple = mountedState && !disableRipple && !disabled;

    if (process.env.NODE_ENV !== "production") {
        React.useEffect(() => {
            if (enableTouchRipple && !rippleRef.current) {
                console.error(
                    [
                        "Material-UI: the `component` prop provided to ButtonBase is invalid.",
                        "Please make sure the children prop is rendered in this custom component."
                    ].join("\n")
                );
            }
        }, [enableTouchRipple]);
    }

    const ComponentPropClassName = classNames("base-button");
    // classNames(
    //     classes.root,
    //     {
    //         [classes.disabled]: disabled,
    //         [classes.focusVisible]: focusVisible,
    //         [focusVisibleClassName]: focusVisible
    //     },
    //     className
    // )
    return (
        <ComponentProp
            className={ComponentPropClassName}
            onBlur={handleBlur}
            onClick={onClick}
            onFocus={handleFocus}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onDragLeave={handleDragLeave}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
            onTouchStart={handleTouchStart}
            ref={handleRef}
            tabIndex={disabled ? -1 : tabIndex}
            {...buttonProps}
            {...other}
        >
            {children}
            {enableTouchRipple ? (
                /* TouchRipple is only needed client-side, x2 boost on the server. */
                <TouchRipple ref={rippleRef} center={centerRipple} {...TouchRippleProps} />
            ) : null}
        </ComponentProp>
    );
});

export default ButtonBase;
