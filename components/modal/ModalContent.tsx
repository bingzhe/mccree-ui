import * as React from "react";
import classNames from "classnames";
import useGetPrefix from "../hooks/useGetPrefix";

const ModalTitle: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const { className, children, ...restProps } = props;

    const prefixCls = useGetPrefix("modal");
    const classes = classNames(className, `${prefixCls}-body`);

    return (
        <div className={classes} {...restProps}>
            {children}
        </div>
    );
};

export default ModalTitle;
