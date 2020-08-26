import * as React from "react";
import { Radio } from "../../../components/index";

const RadioGroup = () => {
    const handleChange = (e: any) => {
        console.log("checked=> ", e.target.value);
    };
    return (
        <Radio.Group onChange={handleChange}>
            <Radio value="深圳">深圳</Radio>
            <Radio value="西安">西安</Radio>
            <Radio value="杭州">杭州</Radio>
        </Radio.Group>
    );
};

export default RadioGroup;
