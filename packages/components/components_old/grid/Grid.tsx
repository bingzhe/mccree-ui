import * as React from "react";
import classNames from "classnames";
import { ConfigContext } from "../config-provider";
import { GridContext } from "./GridContext";
import { Breakpoint } from "./responsiveObserve";
import GridContainer from "./GridContainer";
import { GridFC, GridSize, FlexType } from "./Grid.type";

const { useContext } = React;

const parseFlex = (flex: FlexType): string => {
    if (typeof flex === "number") {
        return `${flex} ${flex} auto`;
    }

    if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
        return `0 0 ${flex}`;
    }

    return flex;
};

const Grid: GridFC = (props) => {
    const {
        span,
        order,
        offset,
        push,
        pull,
        className,
        children,
        flex,
        style: styleProp,
        ...restProps
    } = props;

    const { getPrefixCls } = useContext(ConfigContext);
    const { gutter } = useContext(GridContext);
    const prefixCls = getPrefixCls("grid");

    let sizeClassObj = {};
    let style: React.CSSProperties = { ...styleProp };

    ["xs", "sm", "md", "lg", "xl", "xxl"].forEach((size: Breakpoint) => {
        let sizeProps: GridSize = {};
        const propSize = props[size];

        if (typeof propSize === "number") {
            sizeProps.span = propSize;
        } else if (typeof propSize === "object") {
            sizeProps = propSize || {};
        }

        delete restProps[size];

        sizeClassObj = {
            ...sizeClassObj,
            [`${prefixCls}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
            [`${prefixCls}-${size}-order-${sizeProps.order}`]:
                sizeProps.order || sizeProps.order === 0,
            [`${prefixCls}-${size}-offset-${sizeProps.offset}`]:
                sizeProps.offset || sizeProps.offset === 0,
            [`${prefixCls}-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
            [`${prefixCls}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0
        };
    });

    const classes = classNames(prefixCls, className, sizeClassObj, {
        [`${prefixCls}-${span}`]: span !== undefined,
        [`${prefixCls}-order-${order}`]: order,
        [`${prefixCls}-offset-${offset}`]: offset,
        [`${prefixCls}-push-${push}`]: push,
        [`${prefixCls}-pull-${pull}`]: pull
    });

    if (gutter) {
        style = {
            ...style,
            ...(gutter[0]! > 0
                ? { paddingLeft: gutter[0]! / 2, paddingRight: gutter[0]! / 2 }
                : {}),
            ...(gutter[1]! > 0 ? { paddingTop: gutter[1]! / 2, paddingBottom: gutter[1]! / 2 } : {})
        };
    }
    if (flex) {
        style.flex = parseFlex(flex);
    }

    return (
        <div className={classes} style={style} {...restProps}>
            {children}
        </div>
    );
};

Grid.Container = GridContainer;
Grid.displayName = "MR_Grid";

export default Grid;
