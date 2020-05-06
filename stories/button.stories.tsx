import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";


import Button from "../components/button/index";
import "../components/button/style/index.less";

import "./style.less";

storiesOf("demo", module)
    // .add(
    //     "demo div",
    //     () => {
    //         return (
    //             <div>DEMO</div>
    //         );
    //     }
    // )
    .add(
        "Button",
        () => {
            return (
                <>
                    <Button type="primary" onClick={action("clicked")}>Primary</Button>
                    <Button type="success" onClick={action("clicked")}>Success</Button>
                    <Button type="error">Danger</Button>
                    <Button type="warning">Warning</Button>
                    <Button type="info">Info</Button>
                    <Button type="secondary">Secondary</Button>
                    <div>===================================</div>
                    <Button size="large">Large</Button>
                    <Button >default</Button>
                    <Button size="small">Small</Button>

                </>
            );
        }
    );
