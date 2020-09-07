import * as React from "react";
import { Icon } from "../../../components/index";

const IconBasic = () => {
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
        "qq",
        "checkbox-outline",
        "checkbox",
        "checkbox-indeterminate",
        "radio-checked",
        "radio-unchecked",
        "eye",
        "eye-invisible"
    ];

    return (
        <ul className="icon-list-wrapper">
            {IconList.map((icon) => (
                <li className="icon-item" key={icon}>
                    <Icon name={icon} />
                    <span className="icon-name">{icon}</span>
                </li>
            ))}
        </ul>
    );
};

export default IconBasic;
