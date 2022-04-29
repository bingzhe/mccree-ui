import React, { useState } from "react";
import * as icons from "./index.es.js";

// prettier-ignore
const svgData = JSON.parse('{{ svgData | safe }}');

export default function () {
    const [type, setType] = useState("outline");

    // prettier-ignore
    const maps = JSON.parse('{{maps|safe}}')['zh-CN'];

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
