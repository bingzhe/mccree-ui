import * as React from "react";
import { SelectMultipleValueProps } from "./Select.type";

const SelectMultipleValue: React.FC<SelectMultipleValueProps> = (props) => {
    return <span className="multiple-select-item">{props.children}</span>;
};

export default SelectMultipleValue;
