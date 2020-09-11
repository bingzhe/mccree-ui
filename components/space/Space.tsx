import * as React from "react";
import classNames from "classnames";
import { ConfigContext } from "../config-provider";
import { childToArray } from "../utils/collection";
import { SpaceProps, defaultProps } from "./Space.type";

const spaceSize = {
    small: 8,
    medium: 16,
    large: 24
};

const Space: React.FC<SpaceProps> = (props) => {
    const { className, size, direction, children, ...restProps } = props;

    const items = childToArray(children);
    const len = items.length;

    const { getPrefixCls } = React.useContext(ConfigContext);
    const prefixCls = getPrefixCls("space");

    const classes = classNames(prefixCls, className, `${prefixCls}-${direction}`);
    const itemClassName = `${prefixCls}-item`;

    return (
        <div className={classes} {...restProps}>
            {items.map((child, i) => (
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
