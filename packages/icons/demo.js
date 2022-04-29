import React, { useState } from "react";
import * as icons from "./index.es.js";

// prettier-ignore
const svgData = JSON.parse('{"direction":{"outline":[{"name":"backward","componentName":"IconBackward"},{"name":"caret-down","componentName":"IconCaretDown"}]},"tips":{"outline":[{"name":"alipay","componentName":"IconAlipay"}]}}');

export default function () {
    const [type, setType] = useState("outline");

    // prettier-ignore
    const maps = JSON.parse('{"zh-CN":{"direction":"方向指示类图标","tips":"提示建议类图标"},"en-US":{"direction":"Direction indicator","tips":"Prompt suggestion"}}')['zh-CN'];

    return Object.keys(svgData).map((key) => {
        const data = svgData[key][type];

        return (
            data &&
            data.length && (
                <div key={key}>
                    <div className="iconlist-title">{maps[key]}</div>
                    <div className="iconlist">
                        {data.map((item) => {
                            const Tag = icons[item.componentName];
                            return (
                                <li className="icon-cell" key={item.componentName}>
                                    <Tag></Tag>
                                </li>
                            );
                        })}
                    </div>
                </div>
            )
        );
    });
}
