import * as React from "react";
import { Checkbox } from "../../../components/index";

const CheckboxButton = () => {
    return (
        <>
            <Checkbox.Button style={{ marginRight: "10px" }}>Checkbox</Checkbox.Button>
            <Checkbox.Button color="secondary">Checkbox</Checkbox.Button>
        </>
    );
};

export default CheckboxButton;
