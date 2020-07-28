import * as React from "react";
import { storiesOf } from "@storybook/react";

import { Input, Icon } from "../components/index";

storiesOf("实验室", module).add("Play", () => {
    const [value, setValue] = React.useState("234");
    return (
        <div className="page-wrapper">
            <Input
                clearable
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                    console.log(e.target.value);
                }}
                addonBefore="http"
                addonAfter=".com"
                prefix={<Icon name="smile" />}
                suffix={<Icon name="smile" />}
            />
        </div>
    );
});
