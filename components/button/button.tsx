import * as React from "react";
import classNames from "classnames";
// import * as PropTypes from "prop-types";
// import "./style/index";
import SizeContext from "../config-provider/SizeContext";
// import ConfigContext from "../config-provider";

import { omit } from "../utils/omit";
import { Omit, tuple } from "../_util/type";

const getPrefixCls = (suffixCls: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) return customizePrefixCls;

    return suffixCls ? `mccree-${suffixCls}` : "mccree";
};

const ButtonTypes = tuple("primary", "secondary", "success", "warning", "error", "info");
export type ButtonType = typeof ButtonTypes[number];
const ButtonSizes = tuple("large", "medium", "small");
export type ButtonSize = typeof ButtonSizes[number];
const ButtonHTMLTypes = tuple("submit", "button", "reset");
export type ButtonHTMLType = typeof ButtonHTMLTypes[number]
const ButtonShapes = tuple("circle", "circle-outline", "round");
export type ButtonShape = typeof ButtonShapes[number];

export interface BaseButtonProps {
    type?: ButtonType;
    shape?: ButtonShape;
    size: ButtonSize;
    plain?: boolean;
    disabled?: boolean;
    className?: string;
    prefixCls?: string;
    ghost?: boolean;
    icon?: React.ReactNode;
    loading?: boolean | { delay?: number };
    block?: boolean;
    children?: React.ReactNode;
}

export type AnchorButtonProps = {
    href: string;
    target?: string;
    onClick: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps & Omit<React.AnchorHTMLAttributes<any>, "type" | "onClick">;

export type NativeButtonProps = {
    htmlType?: ButtonHTMLType;
    onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps & Omit<React.ButtonHTMLAttributes<any>, "type" | "onClick">;

export type ButtonProps = Partial<AnchorButtonProps | NativeButtonProps>;

const Button: React.FC<ButtonProps> = ({ ...props }) => {
    const [loading, setLoading] = React.useState(props.loading);
    // const { getPrefixCls } = React.useContext(ConfigContext);
    const buttonRef = React.createRef<HTMLButtonElement>();
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
        onClick && onClick(e);
    };

    return (
        <SizeContext.Consumer>
            {size => {
                const {
                    prefixCls: customizePrefixCls,
                    type,
                    shape,
                    size: customizeSize,
                    className,
                    icon,
                    children,
                    ghost,
                    block,
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

                const iconType = loading ? "loading" : icon;

                const classes = classNames(prefixCls, className, {
                    [`${prefixCls}-${type}`]: type,
                    [`${prefixCls}-${shape}`]: shape,
                    [`${prefixCls}-${sizeCls}`]: sizeCls,
                    [`${prefixCls}-icon-only`]: !children && children !== 0 && iconType,
                    [`${prefixCls}-background-ghost`]: ghost,
                    [`${prefixCls}-loading`]: loading,
                    [`${prefixCls}-block`]: block
                });

                const { htmlType, ...otherProps } = rest as NativeButtonProps;

                console.log({ classes });
                const buttonNode = (
                    <button
                        {...(omit(otherProps, ["loading"]) as NativeButtonProps)}
                        type={htmlType}
                        className={classes}
                        onClick={handleClick}
                        ref={buttonRef}
                    >
                        {children}
                    </button>
                );

                return buttonNode;
            }}
        </SizeContext.Consumer>


    );
};

Button.defaultProps = {
    // type: "primary",
    size: "medium",
    disabled: false,
    loading: false,
};

// Button.propTypes = {
// type: PropTypes.oneOf(ButtonTypes),
// size: PropTypes.oneOf(ButtonSizes),
// disabled: PropTypes.bool,
// loading: PropTypes.bool,
// icon: PropTypes.string,
// plain: PropTypes.bool,
// className: PropTypes.string
// };

export default Button;