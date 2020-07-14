/* eslint-disable @typescript-eslint/no-require-imports */
import * as React from "react";
// import Remarkable from "react-remarkable";
import hljs from "highlight.js";

// declare module "Remarkable";

import "./Markdown.less";

const options = {
    html: true,
    linkTarget: "_parent",
    highlight: (code: any, lang: any) => hljs.highlight(lang, code).value
};

interface MarkdownProp {
    source: string;
    className?: string;
    dataHook?: string;
}

const Markdown: React.FC<MarkdownProp> = (props) => {
    const { source, className, dataHook } = props;
    console.log(options);
    console.log(source);
    return (
        <div data-hook={dataHook} className={className || "markdown-body"}>
            {/* <Remarkable source={source.trim()} options={options} /> */}
        </div>
    );
};

export default Markdown;
