import * as React from "react";
import { SelectContext, SelectContextProps } from "./SelectContext";
import usePopper from "../hooks/usePopper";
import useClickOutside from "../hooks/useClickOutside";
import Dropdowm from "./SelectDropdown";

const { useState, useMemo, useCallback } = React;

type RawValue = string | number;
type SelectValue = RawValue | RawValue[];

export interface SelectProps {
    className?: string;
    value?: SelectValue;
    defaultValue?: string;
    disabled?: boolean;
    onchange?: (value: string) => void;
}

const Select: React.FC<SelectProps> = (props) => {
    const { defaultValue, onchange, disabled, children } = props;

    const [visible, setVisible] = React.useState<boolean>(false);
    const [value, setValue] = useState(defaultValue);

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
            // setValue((last) => {
            //     if (!Array.isArray(last)) return next;
            // });
            setValue(next);
            onchange?.(next);
        },
        [onchange]
    );

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
            >
                Select
            </div>
            <Dropdowm popperRef={popperRef} visible={visible}>
                {children}
            </Dropdowm>
        </SelectContext.Provider>
    );
};

export default Select;
