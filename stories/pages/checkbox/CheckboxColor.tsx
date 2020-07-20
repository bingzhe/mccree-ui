import * as React from "react";
import { Checkbox } from "../../../components/index";

const CheckboxColor = () => {
    return (
        <>
            <Checkbox defaultChecked>Primary</Checkbox>
            <Checkbox defaultChecked color="secondary">
                Secondary
            </Checkbox>
            <Checkbox defaultChecked color="success">
                Success
            </Checkbox>
            <Checkbox defaultChecked color="warning">
                Warning
            </Checkbox>
            <Checkbox defaultChecked color="error">
                Error
            </Checkbox>
            <Checkbox defaultChecked color="info">
                Info
            </Checkbox>
        </>
    );
};

export default CheckboxColor;
