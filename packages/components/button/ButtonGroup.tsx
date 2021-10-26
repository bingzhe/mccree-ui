import * as React from "react";
import classNames from "classnames";
import { SizeType } from "../config-provider/SizeContext";
import { ConfigContext } from "../config-provider";

export interface ButtonGroupProps {
    size?: SizeType;
    style?: React.CSSProperties;
    className?: string;
    prefixCls?: string;
}


const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
    const {
        prefixCls: customizePrefixCls,
        size,
        className,
        ...rest
    } = props;

    const { getPrefixCls } = React.useContext(ConfigContext);
    const prefixCls = getPrefixCls("btn-group", customizePrefixCls);

    let sizeCls = "";
    switch (size) {
        case "large":
            sizeCls = "lg";
            break;
        case "small":
            sizeCls = "sm";
            break;
        default:
            break;
    }

    const classes = classNames(prefixCls, {
        [`${prefixCls}-${sizeCls}`]: sizeCls
    });

    return (
        <div className={classes} {...rest} />
    );
};


export default ButtonGroup;
