import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";


import Button from "../components/button/index";
import "../components/styles/index.less";
import "../components/button/style/index.less";

import "./styles/button.less";

storiesOf("Button", module)
    .add(
        "Button",
        () => {
            return (
                <div className="button-page-wrapper">
                    <div>
                        <h4>———— type ————</h4>
                        <Button onClick={action("clicked")}>DEFAULT</Button>
                        <Button type="primary" onClick={action("clicked")}>PRIMARY</Button>
                        <Button type="secondary" onClick={action("clicked")}>SECONDARY</Button>
                        <Button type="success" onClick={action("clicked")}>SUCCESS</Button>
                        <Button type="error" onClick={action("clicked")}>ERROR</Button>
                        <Button type="warning" onClick={action("clicked")}>WARNING</Button>
                        <Button type="info" onClick={action("clicked")}>INFO</Button>
                        <Button disabled type="primary" onClick={action("clicked")}>PRIMARY</Button>
                        <Button target="block" href="http://bingzhe.github.io/" type="primary" onClick={action("clicked")}>LINK</Button>
                    </div>

                    <div>
                        <h4>———— outline ————</h4>
                        <Button variant="outline" onClick={action("clicked")}>DEFAULT</Button>
                        <Button variant="outline" type="primary" onClick={action("clicked")}>PRIMARY</Button>
                        <Button variant="outline" type="secondary" onClick={action("clicked")}>SECONDARY</Button>
                        <Button variant="outline" type="success" onClick={action("clicked")}>SUCCESS</Button>
                        <Button variant="outline" type="error" onClick={action("clicked")}>ERROR</Button>
                        <Button variant="outline" type="warning" onClick={action("clicked")}>WARNING</Button>
                        <Button variant="outline" type="info" onClick={action("clicked")}>INFO</Button>
                        <Button disabled variant="outline" type="primary" onClick={action("clicked")}>PRIMARY</Button>
                        <Button target="block" variant="outline" href="http://bingzhe.github.io/" type="primary" onClick={action("clicked")}>LINK</Button>
                    </div>

                    <div>
                        <h4>———— text ———— </h4>
                        <Button variant="text" onClick={action("clicked")}>DEFAULT</Button>
                        <Button variant="text" type="primary" onClick={action("clicked")}>PRIMARY</Button>
                        <Button variant="text" type="secondary" onClick={action("clicked")}>SECONDARY</Button>
                        <Button variant="text" type="success" onClick={action("clicked")}>SUCCESS</Button>
                        <Button variant="text" type="error" onClick={action("clicked")}>ERROR</Button>
                        <Button variant="text" type="warning" onClick={action("clicked")}>WARNING</Button>
                        <Button variant="text" type="info" onClick={action("clicked")}>INFO</Button>
                        <Button disabled variant="text" type="primary" onClick={action("clicked")}>PRIMARY</Button>
                        <Button target="block" variant="text" href="http://bingzhe.github.io/" type="secondary" onClick={action("clicked")}>LINK</Button>
                    </div>
                    <div>
                        <h4>———— size ———— </h4>
                        <Button type="primary" size="large" onClick={action("clicked")}>Large</Button>
                        <Button type="primary" onClick={action("clicked")}>DEFAULT</Button>
                        <Button type="primary" size="small" onClick={action("clicked")}>Small</Button>
                        <Button variant="outline" type="primary" size="large" onClick={action("clicked")}>Large</Button>
                        <Button variant="outline" type="primary" onClick={action("clicked")}>DEFAULT</Button>
                        <Button variant="outline" type="primary" size="small" onClick={action("clicked")}>Small</Button>
                        <Button variant="text" type="primary" size="large" onClick={action("clicked")}>Large</Button>
                        <Button variant="text" type="primary" onClick={action("clicked")}>DEFAULT</Button>
                        <Button variant="text" type="primary" size="small" onClick={action("clicked")}>Small</Button>
                    </div>

                    <div>
                        <h4>———— block ———— </h4>
                        <Button type="primary" onClick={action("clicked")} block>PRIMARY</Button>
                        <Button disabled type="primary" onClick={action("clicked")} block>PRIMARY</Button>
                        <Button variant="outline" type="primary" onClick={action("clicked")} block>PRIMARY</Button>
                        <Button disabled variant="outline" type="primary" onClick={action("clicked")} block>PRIMARY</Button>
                        <Button variant="text" type="primary" onClick={action("clicked")} block>PRIMARY</Button>
                        <Button disabled variant="text" type="primary" onClick={action("clicked")} block>PRIMARY</Button>
                    </div>
                    <div>
                        <h4>———— link ———— </h4>
                        <Button target="block" href="http://bingzhe.github.io/" type="primary" onClick={action("clicked")}>LINK</Button>
                        <Button target="block" variant="outline" href="http://bingzhe.github.io/" type="primary" onClick={action("clicked")}>LINK</Button>
                        <Button target="block" variant="text" href="http://bingzhe.github.io/" type="primary" onClick={action("clicked")}>LINK</Button>
                    </div>
                    <div>
                        <h4>———— disabled ———— </h4>
                        <Button disabled onClick={action("clicked")}>DEFAULT</Button>
                        <Button disabled type="primary" onClick={action("clicked")}>PRIMARY</Button>
                        <Button disabled variant="outline" onClick={action("clicked")}>DEFAULT</Button>
                        <Button disabled variant="outline" type="primary" onClick={action("clicked")}>PRIMARY</Button>
                        <Button disabled variant="text" onClick={action("clicked")}>DEFAULT</Button>
                        <Button disabled variant="text" type="primary" onClick={action("clicked")}>PRIMARY</Button>
                        <Button disabled target="block" href="http://bingzhe.github.io/" type="primary" onClick={action("clicked")}>LINK</Button>
                        <Button disabled target="block" variant="outline" href="http://bingzhe.github.io/" type="primary" onClick={action("clicked")}>LINK</Button>
                        <Button disabled target="block" variant="text" href="http://bingzhe.github.io/" type="primary" onClick={action("clicked")}>LINK</Button>
                    </div>

                </div>
            );
        }
    );
