import React, { useContext } from "react";
import { IconContext } from "./Context";
import { useInsertStyles } from "./iconStyle";

import { cs } from "@mccree-ui/util";

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
    spin?: boolean;
    rotate?: number;
}

const Icon: React.FC<IconProps> = (props) => {
    const { className, name, spin, rotate, ...restProps } = props;

    useInsertStyles();

    const { getPrefixCls } = useContext(IconContext);

    const prefixCls = getPrefixCls("icon");
    const classes = cs(prefixCls, className, {
        [`${prefixCls}-spin`]: spin
    });

    const styles = rotate
        ? {
              transform: `rotate(${rotate}deg)`
          }
        : {};

    return (
        <svg className={classes} name={name} {...restProps} style={styles}>
            <use xlinkHref={`#${name}`} />
        </svg>
    );
};

export default Icon;
