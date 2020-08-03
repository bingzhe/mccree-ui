import * as React from "react";
import { storiesOf } from "@storybook/react";

import { Input } from "../components/index";

storiesOf("实验室", module).add("Play", () => {
    const [value, setValue] = React.useState("asdfasd");

    return (
        <div className="page-wrapper">
            <Input
                value={value}
                clearable
                onChange={(e) => {
                    console.log("++++++++++++", e.target.value);
                    setValue(e.target.value);
                }}
            />
        </div>
        // addonBefore="http"
        // addonAfter=".com"
        // prefix={<Icon name="smile" />}
        // suffix={<Icon name="smile" />}
    );
});
