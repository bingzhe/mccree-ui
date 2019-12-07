import * as React from "react";
import { Checkbox } from "../../../../components/index";


const CheckboxExample: React.FunctionComponent = () => {
    const [checked, setChecked] = React.useState(false);
    const [checked1, setChecked1] = React.useState(true);

    const handleCheckboxChange = (e: boolean) => {
        console.log("checked", e);
        setChecked(e);
    };
    const handleCheckboxChange1 = (e: boolean) => {
        console.log("checked", e);
        setChecked1(e);
    };
    return (
        <div>
            <h1>基础</h1>
            <Checkbox checked={checked} onChange={handleCheckboxChange}>label</Checkbox>

            <h1>disabled</h1>
            <Checkbox checked={checked} onChange={handleCheckboxChange} disabled>label</Checkbox>
            <Checkbox checked={checked1} onChange={handleCheckboxChange1} disabled>label</Checkbox>

        </div>
    );
};

export default CheckboxExample;