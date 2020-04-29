import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "../components/button/index";
import "../components/button/style/index.less";


storiesOf("demo", module)
    .add(
        "demo div",
        () => {
            return (
                <div>DEMO</div>
            );
        }
    )
    .add(
        "Button",
        () => {
            return (
                <>
                    <Button type="primary">test</Button>
                </>
            );
        }
    );
