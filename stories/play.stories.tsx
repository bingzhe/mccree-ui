import * as React from "react";
import { storiesOf } from "@storybook/react";

import { Select } from "../components/index";

storiesOf("实验室", module).add("Play", () => {
    return (
        <div className="page-wrapper">
            <Select>123</Select>
        </div>
    );
});
