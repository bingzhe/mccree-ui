import * as React from "react";
import classNames from "classnames";
import { ConfigContext } from "../config-provider";
import { ColorType } from "../utils/propsType";

export interface DividerProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    type?: "horizontal" | "vertical";
    align?: "left" | "right" | "center";
    color?: ColorType;
    x?: number;
    y?: number;
    volume?: number;
    dashed?: boolean;
    plain?: boolean;
}

const dividerProps = {
    type: "horizontal" as "horizontal" | "vertical",
    align: "center" as "left" | "right" | "center"
};

const Divider: React.FC<DividerProps> = (props) => {
    const {
        className,
        type,
        align,
        color,
        x,
        y,
        dashed,
        plain,
        volume,
        children,
        ...restProps
    } = props;

    const { getPrefixCls } = React.useContext(ConfigContext);
    const prefixCls = getPrefixCls("divider");

    const classes = classNames(prefixCls, className, `${prefixCls}-${type}`, {
        [`${prefixCls}-${color}`]: color,
        [`${prefixCls}-text`]: !!children,
        [`${prefixCls}-text-${align}`]: !!children,
        [`${prefixCls}-plain`]: !!plain,
        [`${prefixCls}-dashed`]: !!dashed
    });

    console.log(classes);
    return (
        <div className={classes} {...restProps}>
            {children && <span className={`${prefixCls}-inner-text`}>{children}</span>}
        </div>
    );
};

Divider.displayName = "MR_Divider";
Divider.defaultProps = dividerProps;

export default Divider;
