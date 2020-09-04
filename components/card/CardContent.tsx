import * as React from "react";
import classNames from "classnames";
import { ConfigContext } from "../config-provider";

const { useContext } = React;

const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const { className, children, ...restProps } = props;

    const { getPrefixCls } = useContext(ConfigContext);
    const prefixCls = getPrefixCls("card-content");

    const classes = classNames(prefixCls, className);

    return (
        <div className={classes} {...restProps}>
            {children}
        </div>
    );
};

export default CardContent;
