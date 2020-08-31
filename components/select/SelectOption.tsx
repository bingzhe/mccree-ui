import * as React from "react";
import classNames from "classnames";
import { SelectContext } from "./SelectContext";
import { ConfigContext } from "../config-provider";
import { warning } from "../utils/warning";

const { useContext, useMemo } = React;

interface SelectOptionPros {
    value?: string;
    disabled?: boolean;
    className?: string;
    divider?: boolean;
    label?: boolean;
    preventAllEvents?: boolean;
}

const SelectOption: React.FC<SelectOptionPros> = (props) => {
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
            {children} {selected ? "selected" : ""} {isDisabled ? "disabled" : ""}
        </div>
    );
};

export default SelectOption;
