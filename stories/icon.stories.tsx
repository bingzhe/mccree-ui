import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";

import Icon from "../components/icon/index";
import "../components/icon/style/index.less";

import "./styles/common.less";
import "./styles/icon.less";

storiesOf("Icon", module).add("Icon", () => {
    const IconList = [
        "step-backward",
        "step-forward",
        "backward",
        "forward",
        "fast-backward",
        "fast-forward",
        "down",
        "up",
        "left",
        "right",
        "caret-down",
        "caret-up",
        "caret-left",
        "caret-right",
        "question",
        "question-circle",
        "close",
        "close-circle",
        "loading",
        "loading-3-quarters",
        "reload",
        "smile",
        "alipay",
        "wechat",
        "qq"
    ];

    return (
        <div className="page-wrapper">
            <h4>Icon</h4>
            <ul className="icon-list-wrapper">
                {IconList.map((icon) => (
                    <li className="icon-item" key={icon}>
                        <Icon name={icon} />
                        <span className="icon-name">{icon}</span>
                    </li>
                ))}
            </ul>

            <h4>spin</h4>
            <ul className="icon-list-wrapper">
                <li className="icon-item">
                    <Icon name="loading" spin />
                </li>
            </ul>

            <h4>rotate</h4>
            <ul className="icon-list-wrapper">
                <li className="icon-item">
                    <Icon name="qq" />
                </li>
                <li className="icon-item">
                    <Icon name="qq" rotate={90} />
                </li>
                <li className="icon-item">
                    <Icon name="qq" rotate={180} />
                </li>
                <li className="icon-item">
                    <Icon name="qq" rotate={270} />
                </li>

                <li className="icon-item">
                    <Icon name="checkbox-outline" />
                </li>
                <li className="icon-item">
                    <Icon name="checkbox" />
                </li>
                <li className="icon-item">
                    <Icon name="checkbox-indeterminate" />
                </li>
            </ul>
        </div>
    );
});
