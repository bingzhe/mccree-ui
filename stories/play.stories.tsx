import * as React from "react";
import { storiesOf } from "@storybook/react";

import Radio from "../components/radio/index";
import "../components/radio/style/index";

import "./styles/common.less";

storiesOf("实验室", module).add("Radio", () => {
    return (
        <div className="page-wrapper">
            <Radio />
        </div>
    );
});
