import * as React from "react";
import { Radio } from "../../../components/index";

const RadioButtonGroup = () => {
    const handleChange = (e: any) => {
        console.log("checked=> ", e.target.value);
    };
    return (
        <div>
            <Radio.Group onChange={handleChange} defaultValue="西安">
                <Radio.Button value="深圳">深圳</Radio.Button>
                <Radio.Button value="西安">西安</Radio.Button>
                <Radio.Button value="杭州">杭州</Radio.Button>
            </Radio.Group>

            <div style={{ marginBottom: "10px" }} />

            <Radio.Group onChange={handleChange} defaultValue="西安">
                <Radio.Button value="深圳" color="secondary">
                    深圳
                </Radio.Button>
                <Radio.Button value="西安" color="secondary">
                    西安
                </Radio.Button>
                <Radio.Button value="杭州" color="secondary">
                    杭州
                </Radio.Button>
            </Radio.Group>
        </div>
    );
};

export default RadioButtonGroup;
