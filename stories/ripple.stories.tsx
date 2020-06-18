import React from "react";
import { storiesOf } from "@storybook/react";

import Ripple from "../components/ripple/index";
import Button from "../components/button/index";
import "../components/styles/index.less";
import "../components/ripple/style/index.less";
import "../components/button/style/index.less";

import "./styles/common.less";

storiesOf("Ripple", module).add("Ripple", () => {
    return (
        <div className="page-wrapper">
            <div>
                <h4>———— Icon ———— </h4>
            </div>

            <span
                style={{
                    position: "relative",
                    display: "inline-block"
                    // background: "blue",
                    // border: "1px solid #ccc"
                }}
            >
                <Button type="primary">primary</Button>
                <Ripple />
            </span>
        </div>
    );
});
