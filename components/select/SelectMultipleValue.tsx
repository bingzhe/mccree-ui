import * as React from "react";

interface SelectMultipleValueProps {
    disabled?: boolean;
    size?: string;
}

const SelectMultipleValue: React.FC<SelectMultipleValueProps> = (props) => {
    const { disabled, size, children } = props;

    console.log(disabled, size);
    return <span>{children}</span>;
};

export default SelectMultipleValue;
