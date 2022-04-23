import * as React from "react";
import classNames from "classnames";
import { ConfigContext } from "../config-provider";
import useSetColor from "../hooks/useSetColor";

export interface DividerProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    type?: "horizontal" | "vertical";
    align?: "left" | "right" | "center";
    color?: string;
    dashed?: boolean;
    plain?: boolean;
}

const dividerProps = {
    type: "horizontal" as "horizontal" | "vertical",
    align: "center" as "left" | "right" | "center"
};

const Divider: React.FC<DividerProps> = (props) => {
    const { className, type, align, color, dashed, plain, children, ...restProps } = props;

    const dividerRef = React.useRef<HTMLDivElement>(null);
    const { getPrefixCls } = React.useContext(ConfigContext);
    const prefixCls = getPrefixCls("divider");

    const classes = classNames(prefixCls, className, `${prefixCls}-${type}`, {
        [`${prefixCls}-text`]: !!children,
        [`${prefixCls}-text-${align}`]: !!children,
        [`${prefixCls}-plain`]: !!plain,
        [`${prefixCls}-dashed`]: !!dashed
    });

    useSetColor(dividerRef, "border-color", color, true);
    useSetColor(dividerRef, "text-color", color);

    return (
        <div className={classes} {...restProps} ref={dividerRef}>
            {children && <span className={`${prefixCls}-inner-text`}>{children}</span>}
        </div>
    );
};

Divider.displayName = "MR_Divider";
Divider.defaultProps = dividerProps;

export default Divider;
