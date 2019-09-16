import * as React from "react";
import { Checkbox } from "../../../../lib/index";


const CheckboxExample: React.FunctionComponent = () => {
    const [checked, setChecked] = React.useState(false);

    const handleCheckboxChange = (e: boolean) => {
        console.log("checked", e);
        setChecked(e);
    };
    return (
        <div>
            <h1>基础</h1>
            <Checkbox checked={checked} onChange={handleCheckboxChange}>label</Checkbox>

            <h1>disabled</h1>
            <Checkbox checked={checked} onChange={handleCheckboxChange} disabled>label</Checkbox>
        </div>
    );
};

export default CheckboxExample;