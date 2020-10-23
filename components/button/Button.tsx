import * as React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import Ripple from "../ripple";
import ButtonGroup from "./ButtonGroup";
import { ConfigContext } from "../config-provider";
import SizeContext, { SizeType } from "../config-provider/SizeContext";

import { omit } from "../utils/omit";
import { Omit, tuple } from "../utils/type";
import Icon from "../icon/index";

const ButtonVariants = tuple("contain", "outline", "text");
export type ButtonVariant = typeof ButtonVariants[number];
const ButtonTypes = tuple("primary", "secondary", "success", "warning", "error", "info");
export type ButtonType = typeof ButtonTypes[number];
const ButtonHTMLTypes = tuple("submit", "button", "reset");
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];
const ButtonShapes = tuple("circle", "round");
export type ButtonShape = typeof ButtonShapes[number];

export interface BaseButtonProps {
    type?: ButtonType;
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

interface ButtonTypeProps extends React.FC<ButtonProps> {
    Group: typeof ButtonGroup;
}
const Button: ButtonTypeProps = ({ ...props }) => {
    const [loading, setLoading] = React.useState(props.loading);
    const { getPrefixCls } = React.useContext(ConfigContext);
    // const buttonRef = React.createRef<HTMLButtonElement>();
    let delayTimeout: number;

    React.useEffect(() => {
        if (props.loading && typeof props.loading !== "boolean") {
            clearTimeout(delayTimeout);
        }
        if (props.loading && typeof props.loading !== "boolean" && props.loading.delay) {
            delayTimeout = window.setTimeout(() => {
                setLoading(props.loading);
            }, props.loading.delay);
        } else if (props.loading !== loading) {
            setLoading(props.loading);
        }
    }, [props.loading]);

    const handleClick: React.MouseEventHandler<HTMLElement> = (e) => {
        const { onClick } = props;
        if (loading) return;
        onClick?.(e);
    };

    return (
        <SizeContext.Consumer>
            {(size) => {
                const {
                    prefixCls: customizePrefixCls,
                    type,
                    shape,
                    size: customizeSize,
                    className,
                    children,
                    block,
                    variant,
                    startIcon: startIconProp,
                    endIcon: endIconProp,
                    ...rest
                } = props;

                const prefixCls = getPrefixCls("btn", customizePrefixCls);

                let sizeCls = "";
                switch (customizeSize || size) {
                    case "large":
                        sizeCls = "lg";
                        break;
                    case "small":
                        sizeCls = "sm";
                        break;
                    default:
                        break;
                }

                const classes = classNames(prefixCls, className, {
                    [`${prefixCls}-${type}`]: type,
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

                const linkButtonRestProps = omit(rest as AnchorButtonProps, ["loading"]);

                if (linkButtonRestProps.href !== undefined) {
                    return (
                        <a {...linkButtonRestProps} className={classes} onClick={handleClick}>
                            {children}
                        </a>
                    );
                }

                const { htmlType, ...otherProps } = rest as NativeButtonProps;

                const buttonNode = (
                    <button
                        {...(omit(otherProps, ["loading"]) as NativeButtonProps)}
                        type={htmlType}
                        className={classes}
                        onClick={handleClick}
                    >
                        {loadingIcon}
                        {startIcon}
                        {children}
                        {endIcon}
                        <Ripple />
                    </button>
                );

                return buttonNode;
            }}
        </SizeContext.Consumer>
    );
};

Button.defaultProps = {
    variant: "contain",
    size: "medium",
    disabled: false,
    loading: false,
    block: false
};

Button.Group = ButtonGroup;

Button.propTypes = {
    /**
     * disabled
     */
    disabled: PropTypes.bool,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(["small", "medium", "large"])
};

export default Button;
