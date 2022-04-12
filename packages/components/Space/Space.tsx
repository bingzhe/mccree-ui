import React, { useContext } from "react";
import cs from "@mccree-ui/util/classnames";
import { ConfigContext } from "../ConfigProvider";
import { SpaceProps } from "./Space.type";
import { useMergeProps } from "@mccree-ui/hooks";

const spaceSize = {
    small: 8,
    medium: 16,
    large: 24
};

const defaultProps: SpaceProps = {
    size: "small",
    direction: "horizontal"
};

const Space: React.ForwardRefRenderFunction<unknown, SpaceProps> = (baseProps, ref) => {
    const { getPrefixCls, componentConfig } = useContext(ConfigContext);
    const props = useMergeProps(baseProps, defaultProps, componentConfig?.Space);
    const { className, size, direction, children, ...rest } = props;

    const prefixCls = getPrefixCls("space");

    const ChildrenList = React.Children.toArray(children);
    const len = ChildrenList.length;

    // const { getPrefixCls } = React.useContext(ConfigContext);

    const classes = cs(prefixCls, className, `${prefixCls}-${direction}`);
    const itemClassName = `${prefixCls}-item`;

    return (
        <div className={classes} {...rest}>
            {ChildrenList.map((child, i) => (
                <div
                    className={itemClassName}
                    key={`${itemClassName}-${i}`}
                    style={
                        i === len - 1
                            ? {}
                            : {
                                  [direction === "vertical" ? "marginBottom" : "marginRight"]:
                                      typeof size === "string" ? spaceSize[size] : size
                              }
                    }
                >
                    {child}
                </div>
            ))}
        </div>
    );
};

Space.displayName = "MR_Space";
Space.defaultProps = defaultProps;

export default Space;
