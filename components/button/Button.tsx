import * as React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import Ripple from "../ripple";
import ButtonGroup from "./ButtonGroup";
import IconButton from "./IconButton";
import { ConfigContext } from "../config-provider";
import SizeContext, { SizeType } from "../config-provider/SizeContext";

import { omit } from "../utils/omit";
import { tuple } from "../utils/type";
import Icon from "../icon/index";

const ButtonVariants = tuple("contain", "outline", "text");
export type ButtonVariant = typeof ButtonVariants[number];
const ButtonTypes = tuple("primary", "secondary", "success", "warning", "error", "info");
export type ButtonType = typeof ButtonTypes[number];
const ButtonColors = tuple("primary", "secondary", "success", "warning", "error", "info");
export type ButtonColor = typeof ButtonColors[number];
const ButtonHTMLTypes = tuple("submit", "button", "reset");
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];
const ButtonShapes = tuple("circle", "round");
export type ButtonShape = typeof ButtonShapes[number];

export interface BaseButtonProps {
    type?: ButtonType;
    color?: ButtonColor;
    variant?: ButtonVariant;
    shape?: ButtonShape;
    size: SizeType;
    disabled?: boolean;
    className?: string;
    prefixCls?: string;
    loading?: boolean | { delay?: number };
    block?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    children?: React.ReactNode;
    centerRipple?: boolean;
}

export type AnchorButtonProps = {
    href: string;
    target?: string;
    onClick: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
    Omit<React.AnchorHTMLAttributes<any>, "type" | "onClick">;

export type NativeButtonProps = {
    htmlType?: ButtonHTMLType;
    onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
    Omit<React.ButtonHTMLAttributes<any>, "type" | "onClick">;

export type ButtonProps = Partial<AnchorButtonProps | NativeButtonProps>;

interface ButtonFC extends React.FC<ButtonProps> {
    Group: typeof ButtonGroup;
    IconButton: typeof IconButton;
}

const Button: ButtonFC = (props) => {
    const {
        type,
        color,
        shape,
        size: sizeProp,
        className,
        children,
        block,
        variant,
        startIcon: startIconProp,
        endIcon: endIconProp,
        loading: loadingProp,
        onClick,
        centerRipple,
        ...restProps
    } = props;

    const { disabled } = restProps;

    const [loading, setLoading] = React.useState(loadingProp);
    const { getPrefixCls } = React.useContext(ConfigContext);
    const sizeContext = React.useContext(SizeContext);
    const delayTimeout = React.useRef<number>();

    React.useEffect(() => {
        if (loadingProp && typeof loadingProp !== "boolean") {
            clearTimeout(delayTimeout.current);
        }
        if (loadingProp && typeof loadingProp !== "boolean" && loadingProp.delay) {
            delayTimeout.current = window.setTimeout(() => {
                setLoading(loadingProp);
            }, loadingProp.delay);
        } else if (loadingProp !== loading) {
            setLoading(loadingProp);
        }
    }, [loading, loadingProp]);

    const handleClick: React.MouseEventHandler<HTMLElement> = (e) => {
        if (loading) return;
        onClick?.(e);
    };

    const prefixCls = getPrefixCls("btn");
    const rootPrefixCls = getPrefixCls("btn-root");

    const rootClasses = classNames(rootPrefixCls, className);

    let rippleColor: string | undefined;
    let rippleBorderRadius = "4px";
    let sizeCls = "";

    switch (sizeProp || sizeContext) {
        case "large":
            sizeCls = "lg";
            rippleBorderRadius = shape === "round" ? "40px" : "4px";
            break;
        case "small":
            sizeCls = "sm";
            rippleBorderRadius = shape === "round" ? "24px" : "2px";
            break;
        default:
            rippleBorderRadius = shape === "round" ? "32px" : "4px";
            break;
    }

    if (variant === "outline" || variant === "text") {
        rippleColor = color;
    } else if (variant === "contain") {
        if (!color) {
            rippleColor = "#000";
        } else {
            rippleColor = "#FFF";
        }
    }
    let rippleStyle: React.CSSProperties = { borderRadius: rippleBorderRadius };

    const classes = classNames(prefixCls, {
        [`${prefixCls}-${color}`]: color,
        [`${prefixCls}-${variant}`]: variant,
        [`${prefixCls}-${shape}`]: shape,
        [`${prefixCls}-${sizeCls}`]: sizeCls,
        [`${prefixCls}-loading`]: loading,
        [`${prefixCls}-icon`]: startIconProp || endIconProp,
        [`${prefixCls}-block`]: block
    });

    const loadingIcon = loading && (
        <span className={`${prefixCls}-icon-loading`}>
            <Icon name="loading" spin />
        </span>
    );
    const startIcon = !loading && startIconProp && (
        <span
            className={classNames(`${prefixCls}-prefix-icon`, {
                [`${prefixCls}-icon-${sizeCls}`]: sizeCls
            })}
        >
            {startIconProp}
        </span>
    );
    const endIcon = !loading && endIconProp && (
        <span
            className={classNames(`${prefixCls}-suffix-icon`, {
                [`${prefixCls}-icon-${sizeCls}`]: sizeCls
            })}
        >
            {endIconProp}
        </span>
    );

    const linkButtonRestProps = omit(restProps as AnchorButtonProps, ["loading"]);

    if (linkButtonRestProps.href !== undefined) {
        return (
            <a {...linkButtonRestProps} className={classes} onClick={handleClick}>
                {children}
            </a>
        );
    }

    const { htmlType, ...otherProps } = restProps as NativeButtonProps;

    const buttonNode = (
        <Ripple
            block={block}
            style={rippleStyle}
            center={centerRipple}
            className={rootClasses}
            color={rippleColor}
            disableRipple={disabled}
        >
            <button
                {...(omit(otherProps, ["loading"]) as NativeButtonProps)}
                type={htmlType}
                className={classes}
                onClick={handleClick}
            >
                {/* disabled={disabled} */}
                {loadingIcon}
                {startIcon}
                {children}
                {endIcon}
            </button>
        </Ripple>
    );

    return buttonNode;
};

Button.defaultProps = {
    variant: "contain",
    size: "medium",
    disabled: false,
    loading: false,
    block: false,
    centerRipple: false
};

Button.Group = ButtonGroup;
Button.IconButton = IconButton;

Button.propTypes = {
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(["small", "medium", "large"])
};

export default Button;
