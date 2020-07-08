import * as React from "react";
import { storiesOf } from "@storybook/react";

import Radio from "../components/radio/index";
// import "../components/radio/style/index";

import "./styles/common.less";

storiesOf("实验室", module).add("Radio", () => {
    const [checked, setChecked] = React.useState(false);

    return (
        <div className="page-wrapper">
            <Radio
                checked={checked}
                name="test"
                onChange={(e) => {
                    console.log(e.target.checked);
                    setChecked(e.target.checked);
                }}
            />
            <Radio name="test" />
        </div>
    );
});
