import * as React from "react";
import { storiesOf } from "@storybook/react";

import { Input } from "../components/index";

storiesOf("实验室", module).add("Play", () => {
    return (
        <div className="page-wrapper">
            <Input />
        </div>
    );
});
