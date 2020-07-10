import * as React from "react";
import { storiesOf } from "@storybook/react";

import Radio from "../components/radio/index";

storiesOf("实验室", module).add("Radio", () => {
    // const [checked, setChecked] = React.useState(false);
    // const [value, setValue] = React.useState("西安");

    // const options = ["深圳", "西安", "杭州"];

    return (
        <div className="page-wrapper">
            <Radio.Button
                onChange={(e) => {
                    console.log(e.target.checked);
                }}
            >
                Radio
            </Radio.Button>

            {/* <Radio.Group
                onChange={(e) => {
                    console.log("play:", e.target.value);
                    setValue(e.target.value);
                }}
                options={options}
                defaultValue="深圳"
                value={value}
            /> */}
        </div>
    );
});
