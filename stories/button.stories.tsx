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
                    <div>type =================================== </div>
                    <Button onClick={action("clicked")}>Default</Button>
                    <Button type="primary" onClick={action("clicked")}>Primary</Button>
                    <Button type="secondary">Secondary</Button>
                    <Button type="success" onClick={action("clicked")}>Success</Button>
                    <Button type="error">Danger</Button>
                    <Button type="warning">Warning</Button>
                    <Button type="info">Info</Button>
                    <Button disabled type="primary" onClick={action("clicked")}>Primary</Button>

                    <div>outline ===================================</div>
                    <Button outline onClick={action("clicked")}>Default</Button>
                    <Button outline type="primary" onClick={action("clicked")}>Primary</Button>
                    <Button outline type="secondary">Secondary</Button>
                    <Button outline type="success" onClick={action("clicked")}>Success</Button>
                    <Button outline type="error">Danger</Button>
                    <Button outline type="warning">Warning</Button>
                    <Button outline type="info">Info</Button>
                    <Button disabled outline type="primary" onClick={action("clicked")}>Primary</Button>
                    <div>size ===================================</div>
                    <Button type="primary" size="large">Large</Button>
                    <Button type="primary" >default</Button>
                    <Button type="primary" size="small">Small</Button>
                    <div>block ===================================</div>
                    <Button type="primary" onClick={action("clicked")} block>Primary</Button>
                    <div style={{ height: "5px" }}></div>
                    <Button disabled type="primary" onClick={action("clicked")} block>Primary</Button>
                    <div style={{ height: "5px" }}></div>
                    <Button outline type="primary" onClick={action("clicked")} block>Primary</Button>
                    <div style={{ height: "5px" }}></div>
                    <Button disabled outline type="primary" onClick={action("clicked")} block>Primary</Button>
                    <div style={{ height: "5px" }}></div>
                    <div>disabled ===================================</div>
                    <Button disabled onClick={action("clicked")}>Default</Button>
                    <Button disabled type="primary" onClick={action("clicked")}>Primary</Button>
                    <Button disabled outline onClick={action("clicked")}>Default</Button>
                    <Button disabled outline type="primary" onClick={action("clicked")}>Primary</Button>
                    <div>text ===================================</div>
                    <Button type="text" onClick={action("clicked")}>text</Button>
                    <Button disabled type="text">text</Button>
                </>
            );
        }
    );
