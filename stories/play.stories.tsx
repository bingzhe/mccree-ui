import * as React from "react";
import { storiesOf } from "@storybook/react";

import Radio from "../components/radio/index";

storiesOf("实验室", module).add("Radio", () => {
    // const [checked, setChecked] = React.useState(false);
    const [value, setValue] = React.useState("西安");

    console.log(setValue);
    const options = ["深圳", "西安", "杭州"];

    return (
        <div className="page-wrapper">
            {/* <Radio
                checked={checked}
                name="test"
                onChange={(e) => {
                    console.log(e.target.checked);
                    setChecked(e.target.checked);
                }}
            />
            <Radio name="test" /> */}

            <Radio.Group
                onChange={(e) => {
                    console.log("play:", e.target.value);
                    setValue(e.target.value);
                }}
                options={options}
                defaultValue="深圳"
                value={value}
            />
        </div>
    );
});
