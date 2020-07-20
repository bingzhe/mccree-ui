import * as React from "react";
import { Checkbox } from "../../../components/index";

const CheckboxBase = () => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        console.log(e.target.checked);
    };

    return <Checkbox defaultChecked={true} onChange={handleChange} />;
};

export default CheckboxBase;
