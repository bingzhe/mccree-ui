import * as React from "react";
import classNames from "classnames";
import "./importIcons";
import { IconContext } from "./Context";

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
    spin?: boolean;
    rotate?: number;
}

const Icon: React.FC<IconProps> = (props) => {
    const { className, name, spin, rotate, ...restProps } = props;

    const { getPrefixCls } = React.useContext(IconContext);
    console.log(getPrefixCls);

    const prefixCls = getPrefixCls("icon");
    const classes = classNames(prefixCls, className, {
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
