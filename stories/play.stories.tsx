import * as React from "react";
import { storiesOf } from "@storybook/react";

import { Select } from "../components/index";

storiesOf("实验室", module).add("Play", () => {
    return (
        <div className="page-wrapper">
            <div style={{ border: "1px solid #ccc", height: "500px" }} />
            <Select>
                <div>111</div>
                <div>222</div>
                <div>333</div>
                <div>444</div>
                <div>555</div>
            </Select>
            <div style={{ border: "1px solid #ccc", height: "500px" }} />
        </div>
    );
});
