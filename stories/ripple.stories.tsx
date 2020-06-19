import React from "react";
import { storiesOf } from "@storybook/react";

import Ripple from "../components/ripple/index";
import Button from "../components/button/index";
import "../components/styles/index.less";
import "../components/ripple/style/index.less";
import "../components/button/style/index.less";

import "./styles/common.less";
import "./styles/ripple.less";

storiesOf("Ripple", module).add("Ripple", () => {
    return (
        <div className="page-wrapper ripple-wrapper">
            <div>
                <h4>默认Button启用 </h4>
            </div>

            <span className="ripple-box-wrapper">
                <Button type="primary">primary</Button>
                <Ripple />
            </span>

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
        </div>
    );
});
