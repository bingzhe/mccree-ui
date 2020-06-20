import * as React from "react";

export interface CheckboxProps {
    prefixCls?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onClick?: React.MouseEventHandler<HTMLElement>;
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
    const { onChange, checked, ...restProps } = props;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e);
    };

    // const ant =

    const meterial = (
        <span className="root">
            <span className="label">
                <input />
                <svg />
        </span>
            <span className="ripple" />
        </span>
    )

    console.log(meterial)
    const ant = (
        <label className="ant-checkbox-wrapper">
            <span className="ant-checkbox">
                <input type="checkbox" className="ant-checkbox-input" value=""/>
                <span className="ant-checkbox-inner" />
            </span>
            <span>Checkbox</span>
        </label>
    );
    console.log(ant)


    return <input type="checkbox" checked={checked} onChange={handleChange} {...restProps} />;
};

export default Checkbox;