import * as React from "react";
import { SelectContext, SelectContextProps } from "./SelectContext";
import usePopper from "../hooks/usePopper";
import useClickOutside from "../hooks/useClickOutside";
import SelectDropdown from "./SelectDropdown";
import SelectOption from "./SelectOption";
import SelectMultipleValue from "./SelectMultipleValue";

const { useState, useMemo, useCallback } = React;

type RawValue = string;
type SelectValue = RawValue | RawValue[];

export interface SelectProps {
    className?: string;
    value?: SelectValue;
    defaultValue?: string;
    disabled?: boolean;
    onchange?: (value: string) => void;
    multiple?: boolean;
}

interface SelectFC extends React.FC<SelectProps> {
    Option: typeof SelectOption;
}

const Select: SelectFC = (props) => {
    const { defaultValue, onchange, disabled, children, multiple, ...restProps } = props;

    const [visible, setVisible] = React.useState<boolean>(false);
    const [value, setValue] = useState<SelectValue | undefined>(() => {
        if (!multiple) return defaultValue;
        if (Array.isArray(defaultValue)) return defaultValue;
        return typeof defaultValue === "undefined" ? [] : [defaultValue];
    });

    const [referenceRef, popperRef] = usePopper<HTMLDivElement, HTMLDivElement>({
        placement: "bottom"
    });

    const handleOpenDropdowm = () => {
        if (disabled) return;
        setVisible(true);
    };

    useClickOutside(referenceRef, () => setVisible(false));

    const updateVisible = useCallback((next: boolean) => {
        setVisible(next);
    }, []);

    const updateValue = useCallback(
        (next: string) => {
            setValue((last) => {
                if (!Array.isArray(last)) return next;
                if (!last.includes(next)) return [...last, next];
                return last.filter((item) => item !== next);
            });
            onchange?.(next);
            if (!multiple) {
                setVisible(false);
            }
        },
        [onchange, multiple]
    );

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

    return (
        <SelectContext.Provider value={initialValue}>
            <div
                ref={referenceRef}
                onClick={handleOpenDropdowm}
                style={{ background: "yellow", width: "200px" }}
                {...restProps}
            >
                Select
                {value && multiple && selectChild}
                {value && !multiple && <span>{selectChild}</span>}
            </div>
            <SelectDropdown popperRef={popperRef} visible={visible}>
                {children}
            </SelectDropdown>
        </SelectContext.Provider>
    );
};

Select.displayName = "MR_Select";
Select.Option = SelectOption;

export default Select;
