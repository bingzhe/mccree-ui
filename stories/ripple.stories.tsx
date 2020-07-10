import React from "react";
import { storiesOf } from "@storybook/react";

import Ripple from "../components/ripple/index";
import Button from "../components/button/index";
import { action } from "@storybook/addon-actions";

import RippleNew from "../components/ripple-wrapper/index";

import "./styles/ripple.less";

storiesOf("Ripple", module).add("Ripple", () => {
    return (
        <div className="page-wrapper ripple-wrapper">
            <div>
                <h4>默认Button启用 </h4>
                <Button onClick={action("clicked")}>DEFAULT</Button>
                <Button type="primary" onClick={action("clicked")}>
                    PRIMARY
                </Button>
                <Button type="secondary" onClick={action("clicked")}>
                    SECONDARY
                </Button>
                <Button type="success" onClick={action("clicked")}>
                    SUCCESS
                </Button>
                <Button type="error" onClick={action("clicked")}>
                    ERROR
                </Button>
                <Button type="warning" onClick={action("clicked")}>
                    WARNING
                </Button>
                <Button type="info" onClick={action("clicked")}>
                    INFO
                </Button>
                <Button disabled type="primary" onClick={action("clicked")}>
                    PRIMARY
                </Button>
                <Button
                    target="block"
                    href="http://bingzhe.github.io/"
                    type="primary"
                    onClick={action("clicked")}
                >
                    LINK
                </Button>
            </div>

            <div>
                <h4>其他地方使用 </h4>
            </div>

            <div className="ripple-box-wrapper">
                <div className="ripple-box" />
                <Ripple />
            </div>

            <div>
                <h4>other color</h4>
            </div>

            <div className="ripple-box-wrapper">
                <div className="ripple-box" />
                <Ripple color="red" />
            </div>
            <div className="ripple-box-wrapper">
                <div className="ripple-box" />
                <Ripple color="rgb(255, 152, 0)" />
            </div>
            <div className="ripple-box-wrapper">
                <div className="ripple-box" />
                <Ripple color="#f5222d" center />
            </div>
            <RippleNew>
                <Button type="secondary">test</Button>
            </RippleNew>
        </div>
    );
});
