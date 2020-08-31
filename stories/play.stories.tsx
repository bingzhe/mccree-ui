import * as React from "react";
import { storiesOf } from "@storybook/react";

import { Select } from "../components/index";

storiesOf("实验室", module).add("Play", () => {
    return (
        <div className="page-wrapper">
            <div style={{ border: "1px solid #ccc", height: "500px" }} />
            <Select defaultValue="1" multiple>
                <Select.Option value="1">111</Select.Option>
                <Select.Option value="2">222</Select.Option>
                <Select.Option value="3" disabled>
                    333
                </Select.Option>
            </Select>
            <div style={{ border: "1px solid #ccc", height: "500px" }} />
        </div>
    );
});
