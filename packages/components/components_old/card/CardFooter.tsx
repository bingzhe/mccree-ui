import * as React from "react";
import classNames from "classnames";
import { ConfigContext } from "../config-provider";

const { useContext } = React;

const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const { className, children, ...restProps } = props;

    const { getPrefixCls } = useContext(ConfigContext);
    const prefixCls = getPrefixCls("card-footer");

    const classes = classNames(prefixCls, className);

    return (
        <footer className={classes} {...restProps}>
            {children}
        </footer>
    );
};

export default CardFooter;
