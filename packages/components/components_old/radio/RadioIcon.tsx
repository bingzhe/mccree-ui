import * as React from "react";
import classNames from "classnames";

import Icon from "../icon";
import { ConfigContext } from "../config-provider";

export interface RadioIconProps {
    checked?: boolean;
    className?: string;
}

const RadioIcon: React.FC<RadioIconProps> = (props) => {
    const { checked, className, ...restProps } = props;

    const { getPrefixCls } = React.useContext(ConfigContext);
    const prefixCls = getPrefixCls("radio");
    const iconPrefixCls = `${prefixCls}-icon-root`;

    const classes = classNames(iconPrefixCls, classNames, {
        checked: checked
    });

    return (
        <div className={classes} {...restProps}>
            <Icon className="checked-icon" name="radio-checked" />
            <Icon name="radio-unchecked" />
        </div>
    );
};

export default RadioIcon;
