import * as React from "react";
import classNames from "classnames";

// import { loadingCircle } from "../themes/animations";
import "./importIcons";
import { ConfigContext } from "../config-provider";

export interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
    spin?: boolean;
    rotate?: number;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    const { className, name, spin, rotate, ...restProps } = props;

    const { getPrefixCls } = React.useContext(ConfigContext);

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
