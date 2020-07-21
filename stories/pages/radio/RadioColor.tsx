import * as React from "react";
import { Radio } from "../../../components/index";

const RadioColor = () => (
    <>
        <Radio color="primary" defaultChecked>
            secondary
        </Radio>
        <Radio color="secondary" defaultChecked>
            secondary
        </Radio>
        <Radio color="info" defaultChecked>
            info
        </Radio>
        <Radio color="warning" defaultChecked>
            warning
        </Radio>
        <Radio color="error" defaultChecked>
            error
        </Radio>
        <Radio color="success" defaultChecked>
            success
        </Radio>
    </>
);

export default RadioColor;
