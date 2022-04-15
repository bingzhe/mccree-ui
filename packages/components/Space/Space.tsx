import React, { Fragment, useContext, forwardRef } from "react";
import cs from "@mccree-ui/util/classnames";
import { useMergeProps } from "@mccree-ui/hooks";
import { isNumber } from "@mccree-ui/util/is";
import { ConfigContext } from "../ConfigProvider";
import { SpaceProps, SpaceSize } from "./Space.type";

const spaceSize = {
    small: 8,
    default: 16,
    large: 24
};

function getMerge(size: SpaceSize) {
    if (isNumber(size)) return size;
    return spaceSize[size] || spaceSize.default;
}

const defaultProps: SpaceProps = {
    size: "small",
    direction: "horizontal"
};

const InternalSpace: React.ForwardRefRenderFunction<HTMLDivElement, SpaceProps> = (
    baseProps,
    ref
) => {
    const { getPrefixCls, componentConfig } = useContext(ConfigContext);
    const props = useMergeProps(baseProps, defaultProps, componentConfig?.Space);
    const { className, style, size, align, split, direction, wrap, children, ...rest } = props;

    const prefixCls = getPrefixCls("space");

    const classNames = cs(prefixCls, className, {
        [`${prefixCls}-${direction}`]: direction,
        [`${prefixCls}-aling-${align}`]: align,
        [`${prefixCls}-wrap`]: wrap
    });

    const ChildrenList = React.Children.toArray(children);
    const len = ChildrenList.length;

    function getMergeStyle(index: number) {
        const isLast = index === len - 1;

        // if (isString(size) || isNumber(size)) {} else if (isArray(size)) {}
        const margin = getMerge(size);
        if (wrap) {
            return isLast
                ? { marginBottom: margin }
                : { marginRight: margin, marginBottom: margin };
        }

        return !isLast
            ? {
                  [direction === "vertical" ? "marginBottom" : "marginRight"]: margin
              }
            : {};
    }

    return (
        <div ref={ref} className={classNames} style={style} {...rest}>
            {ChildrenList.map((child, index) => {
                const showSplit = split && index > 0;

                return (
                    <Fragment key={index}>
                        {showSplit && <div className={`${prefixCls}-item-split`}>{split}</div>}
                        <div className={`${prefixCls}-item`} style={getMergeStyle(index)}>
                            {child}
                        </div>
                    </Fragment>
                );
            })}
        </div>
    );
};

const ForwardRefSpace = forwardRef(InternalSpace);
const Space = ForwardRefSpace as typeof ForwardRefSpace & {
    __MR_SPACE: boolean;
};

Space.displayName = "Space";
Space.__MR_SPACE = true;

export default Space;
