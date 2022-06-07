import React, { useContext, forwardRef, useRef } from "react";
import { cs } from "@mccree-ui/util";
// import ButtonGroup from "./ButtonGroup";
import { ConfigContext } from "../ConfigProvider";
import type { ButtonProps } from "./Button.type";
import { useMergeProps } from "@mccree-ui/hooks";
import { IconLoading } from "@mccree-ui/icons";

// interface ButtonFC extends React.FC<ButtonProps> {
//     Group: typeof ButtonGroup;
//     IconButton: typeof IconButton;
// }

const defaultProps: ButtonProps = {
    variant: "default",
    theme: "default",
    shape: "square"
};

const InternalButton: React.ForwardRefRenderFunction<any, ButtonProps> = (baseProps, ref) => {
    const { getPrefixCls, size: ctxSize, componentConfig } = useContext(ConfigContext);
    const props = useMergeProps(baseProps, defaultProps, componentConfig?.Button);

    const {
        className,
        children,
        variant,
        theme,
        size,
        shape,
        disabled,
        loading,
        block,
        ghost,
        icon,
        iconOnly,
        href,
        anchorProps,
        onClick,
        ...restProps
    } = props;

    const iconNode = loading ? <IconLoading /> : icon;

    const innerButtonRef = useRef();
    const buttonRef = ref || innerButtonRef;

    const handleClick: React.MouseEventHandler<HTMLElement> = (e) => {
        if (loading) return;
        onClick?.(e);
    };

    //TODO IconOnly
    const prefixCls = getPrefixCls("btn");
    const classes = cs(
        className,
        prefixCls,
        `${prefixCls}-variant-${variant}`,
        `${prefixCls}-theme-${theme}`,
        `${prefixCls}-size-${size || ctxSize}`,
        {
            [`${prefixCls}-shape-${shape}`]: shape !== "square",
            // [`${prefixCls}-size-${size || ctxSize}`]: (size || ctxSize) !== "default",
            [`${prefixCls}-loading`]: loading,
            [`${prefixCls}-ghost`]: ghost,
            [`${prefixCls}-disabled`]: disabled,
            [`${prefixCls}-icon`]: iconNode,
            [`${prefixCls}-icon-only`]: iconOnly || (!children && children !== 0 && iconNode),
            [`${prefixCls}-block`]: block
        }
    );

    const InnerContent = (
        <>
            {iconNode}
            {children ? <span>children</span> : ""}
        </>
    );

    if (href) {
        const __anchorProps = { ...anchorProps };

        if (disabled) {
            delete __anchorProps.href;
        } else {
            __anchorProps.href = href;
        }

        return (
            <a
                ref={buttonRef}
                {...restProps}
                {...__anchorProps}
                className={classes}
                onClick={handleClick}
            >
                {InnerContent}
            </a>
        );
    }

    return (
        <button
            ref={buttonRef}
            {...restProps}
            className={classes}
            disabled={disabled}
            onClick={handleClick}
        >
            {InnerContent}
        </button>
    );
};

const ForwardRefButton = forwardRef(InternalButton);
const Button = ForwardRefButton as typeof ForwardRefButton & {
    // Group: typeof ButtonGroup;
    __MR_BUTTON: boolean;
};

// Button.Group = ButtonGroup;
Button.__MR_BUTTON = true;
Button.displayName = "Button";

export default Button;
