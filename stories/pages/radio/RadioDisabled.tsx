import * as React from "react";
import { Radio } from "../../../components/index";

const RadioDisabled = () => (
    <>
        <Radio disabled>Radio</Radio>
        <Radio disabled defaultChecked>
            Radio
        </Radio>
    </>
);

export default RadioDisabled;
