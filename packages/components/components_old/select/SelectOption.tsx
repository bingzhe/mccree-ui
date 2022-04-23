import * as React from "react";
import classNames from "classnames";
import { ConfigContext } from "../config-provider";
import { warning } from "../utils/warning";
import { SelectContext } from "./SelectContext";
import { SelectOptionProps } from "./Select.type";

const { useContext, useMemo } = React;

const SelectOption: React.FC<SelectOptionProps> = (props) => {
    const {
        value: optionValue,
        disabled,
        children,
        label,
        divider,
        preventAllEvents,
        ...restProps
    } = props;

    const { value, updateValue, disabledAll } = useContext(SelectContext);

    const isDisabled = disabled || disabledAll;
    const isLabel = label || divider;

    warning(
        !(!isLabel && optionValue === undefined),
        "Select.Option",
        "The props 'value' is required."
    );

    const selected = useMemo(() => {
        if (!value) return false;
        if (typeof value === "string") {
            return optionValue === value;
        }
        return value.includes(`${optionValue}`);
    }, [optionValue, value]);

    const handleOptionClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
        if (preventAllEvents) return;
        event.preventDefault();
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
        if (isDisabled || isLabel) return;
        updateValue?.(optionValue);
    };

    const { getPrefixCls } = useContext(ConfigContext);
    const prefixCls = getPrefixCls("select-option");

    const classes = classNames(prefixCls, {
        [`${prefixCls}-selected`]: selected,
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-divider`]: divider,
        [`${prefixCls}-label`]: label
    });

    return (
        <div onClick={handleOptionClick} {...restProps} className={classes}>
            {children}
        </div>
    );
};

export default SelectOption;
