import * as React from "react";
import { storiesOf } from "@storybook/react";

import { Input } from "../components/index";

storiesOf("实验室", module).add("Play", () => {
    const [value, setValue] = React.useState("");

    // console.log(setValue)
    return (
        <div className="page-wrapper">
            <Input.Password
                value={value}
                clearable
                onChange={(e) => {
                    setValue(e.target.value);
                    console.log("++++++++++++", e.target.value);
                }}
            />
        </div>
        // addonBefore="http"
        // addonAfter=".com"
        // prefix={<Icon name="smile" />}
        // suffix={<Icon name="smile" />}
    );
});
