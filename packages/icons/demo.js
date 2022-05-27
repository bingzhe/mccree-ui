import React, { useState } from "react";
import * as icons from "./index.es.js";

// prettier-ignore
const svgData = JSON.parse('{"direction":{"outline":[{"name":"arrow-down","componentName":"IconArrowDown"},{"name":"arrow-fall","componentName":"IconArrowFall"},{"name":"arrow-left","componentName":"IconArrowLeft"},{"name":"arrow-right","componentName":"IconArrowRight"},{"name":"arrow-rise","componentName":"IconArrowRise"},{"name":"arrow-up","componentName":"IconArrowUp"},{"name":"caret-down","componentName":"IconCaretDown"},{"name":"caret-left","componentName":"IconCaretLeft"},{"name":"caret-right","componentName":"IconCaretRight"},{"name":"caret-up","componentName":"IconCaretUp"},{"name":"double-down","componentName":"IconDoubleDown"},{"name":"double-left","componentName":"IconDoubleLeft"},{"name":"double-right","componentName":"IconDoubleRight"},{"name":"double-up","componentName":"IconDoubleUp"},{"name":"down-circle","componentName":"IconDownCircle"},{"name":"down","componentName":"IconDown"},{"name":"drag-arrow","componentName":"IconDragArrow"},{"name":"expand","componentName":"IconExpand"},{"name":"left-circle","componentName":"IconLeftCircle"},{"name":"left","componentName":"IconLeft"},{"name":"menu-fold","componentName":"IconMenuFold"},{"name":"menu-unfold","componentName":"IconMenuUnfold"},{"name":"right-circle","componentName":"IconRightCircle"},{"name":"right","componentName":"IconRight"},{"name":"rotate-left","componentName":"IconRotateLeft"},{"name":"rotate-right","componentName":"IconRotateRight"},{"name":"shrink","componentName":"IconShrink"},{"name":"swap","componentName":"IconSwap"},{"name":"to-bottom","componentName":"IconToBottom"},{"name":"to-left","componentName":"IconToLeft"},{"name":"to-right","componentName":"IconToRight"},{"name":"to-top","componentName":"IconToTop"},{"name":"up-circle","componentName":"IconUpCircle"},{"name":"up","componentName":"IconUp"}]},"tips":{"fill":[{"name":"check-circle-fill","componentName":"IconCheckCircleFill"},{"name":"close-circle-fill","componentName":"IconCloseCircleFill"},{"name":"exclamation-circle-fill","componentName":"IconExclamationCircleFill"},{"name":"info-circle-fill","componentName":"IconInfoCircleFill"},{"name":"minus-circle-fill","componentName":"IconMinusCircleFill"},{"name":"plus-circle-fill","componentName":"IconPlusCircleFill"},{"name":"question-circle-fill","componentName":"IconQuestionCircleFill"}],"outline":[{"name":"check-circle","componentName":"IconCheckCircle"},{"name":"check-square","componentName":"IconCheckSquare"},{"name":"check","componentName":"IconCheck"},{"name":"clock-circle","componentName":"IconClockCircle"},{"name":"close-circle","componentName":"IconCloseCircle"},{"name":"close","componentName":"IconClose"},{"name":"exclamation-circle","componentName":"IconExclamationCircle"},{"name":"exclamation","componentName":"IconExclamation"},{"name":"info-circle","componentName":"IconInfoCircle"},{"name":"info","componentName":"IconInfo"},{"name":"minus-circle","componentName":"IconMinusCircle"},{"name":"minus","componentName":"IconMinus"},{"name":"plus-circle","componentName":"IconPlusCircle"},{"name":"plus","componentName":"IconPlus"},{"name":"question-circle","componentName":"IconQuestionCircle"},{"name":"question","componentName":"IconQuestion"},{"name":"stop","componentName":"IconStop"}]}}');

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
