import * as React from "react";
import classNames from "classnames";
import Icon from "../icon/index";
import Space from "@mccree-ui/components/Space";
import { ConfigContext } from "../config-provider";
import usePopper from "../hooks/usePopper";
import useClickOutside from "../hooks/useClickOutside";
import useCurrentState from "../hooks/useCurrentState";
import { SelectContext, SelectContextProps } from "./SelectContext";
import SelectDropdown from "./SelectDropdown";
import SelectOption from "./SelectOption";
import SelectMultipleValue from "./SelectMultipleValue";
import { SelectValue, SelectFC, defaultSelectProps } from "./Select.type";

const { useState, useContext, useMemo, useCallback, useEffect } = React;

const Select: SelectFC = (props) => {
    const {
        defaultValue,
        onChange,
        disabled,
        children,
        multiple,
        placeholder,
        width,
        style: styleProp,
        pure,
        clearable,
        ...restProps
    } = props;

    const [visible, setVisible] = React.useState<boolean>(false);

    const [value, setValue, valueRef] = useCurrentState<SelectValue | undefined>(() => {
        if (!multiple) return defaultValue;
        if (Array.isArray(defaultValue)) return defaultValue;
        return typeof defaultValue === "undefined" ? [] : [defaultValue];
    });

    const [dropdownWidth, setDropDownWidth] = useState<number>(0);

    const [referenceRef, popperRef] = usePopper<HTMLDivElement, HTMLDivElement>({
        placement: "bottom"
    });

    useEffect(() => {
        if (referenceRef.current === null) return;
        setDropDownWidth(referenceRef.current.clientWidth);
    }, [referenceRef, width]);

    const isEmpty = useMemo(() => {
        if (!Array.isArray(value)) return !value;
        return value.length === 0;
    }, [value]);

    const handleOpenDropdowm = () => {
        if (disabled) return;
        setVisible(true);
    };

    useClickOutside(referenceRef, () => setVisible(false));

    const updateVisible = useCallback((next: boolean) => {
        setVisible(next);
    }, []);

    const updateValue = useCallback(
        (next: string, clear?: boolean) => {
            if (clear) {
                setValue((last) => {
                    if (!Array.isArray(last)) return "";
                    return [];
                });
            } else {
                setValue((last) => {
                    if (!Array.isArray(last)) return next;
                    if (!last.includes(next)) return [...last, next];
                    return last.filter((item) => item !== next);
                });
            }
            onChange?.(valueRef.current);
            if (!multiple) {
                setVisible(false);
            }
        },
        [onChange, valueRef, multiple, setValue]
    );

    const handleClearClick = () => {
        updateValue("", true);
    };

    const pickChildByProps = useCallback(
        (children: React.ReactNode | undefined, key: string, value: any) => {
            const target: React.ReactNode[] = [];

            const isArray = Array.isArray(value);
            const withoutPropChildren = React.Children.map(children, (item) => {
                if (!React.isValidElement(item)) return null;
                if (!item.props) return item;
                if (isArray) {
                    if (value.includes(item.props[key])) {
                        target.push(item);
                        return null;
                    }
                    return item;
                }
                if (value === item.props[key]) {
                    target.push(item);
                    return null;
                }
                return item;
            });
            const targetChildren = target.length >= 0 ? target : undefined;
            return [withoutPropChildren, targetChildren];
        },
        []
    );

    const selectChild = useMemo(() => {
        const [, optionChildren] = pickChildByProps(children, "value", value);

        return React.Children.map(optionChildren, (child) => {
            if (!React.isValidElement(child)) return null;
            const el = React.cloneElement(child, { preventAllEvents: true });
            if (!multiple) return el;
            return <SelectMultipleValue disabled={disabled}>{el}</SelectMultipleValue>;
        });
    }, [children, multiple, value, disabled, pickChildByProps]);

    const initialValue: SelectContextProps = useMemo(
        () => ({
            value,
            updateValue,
            visible,
            updateVisible
        }),
        [value, updateValue, visible, updateVisible]
    );

    const { getPrefixCls } = useContext(ConfigContext);
    const prefixCls = getPrefixCls("select");

    const selectClasses = classNames(prefixCls, {
        [`${prefixCls}-open`]: visible,
        [`${prefixCls}-disabled`]: disabled
    });

    const style = {
        ...styleProp,
        width: width
    };

    return (
        <SelectContext.Provider value={initialValue}>
            <div className={selectClasses} style={style} ref={referenceRef} {...restProps}>
                <div className={`${prefixCls}-selector`} onClick={handleOpenDropdowm}>
                    {isEmpty && <span>{placeholder}</span>}
                    {value && multiple && <Space style={{ flexWrap: "wrap" }}>{selectChild}</Space>}
                    {value && !multiple && <span>{selectChild}</span>}
                </div>

                {clearable && value && (
                    <span className={`${prefixCls}-clear`} onClick={handleClearClick}>
                        <Icon name="close" />
                    </span>
                )}

                {!pure && (
                    <span className={`${prefixCls}-arrow`}>
                        <Icon name="down" rotate={visible ? 180 : 0} />
                    </span>
                )}

                <SelectDropdown
                    popperRef={popperRef}
                    visible={visible}
                    className={`${prefixCls}-dropdown`}
                    style={{ width: dropdownWidth }}
                >
                    {children}
                </SelectDropdown>
            </div>
        </SelectContext.Provider>
    );
};

Select.displayName = "MR_Select";
Select.defaultProps = defaultSelectProps;
Select.Option = SelectOption;

export default Select;
