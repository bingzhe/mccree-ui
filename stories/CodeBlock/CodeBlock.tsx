import * as React from "react";

import Markdown from "../Markdown/Markdown";

const toCodeBlock = (code: any, type = "js") => ["```" + type, code.trim(), "```"].join("\n");

interface CodeBlockProp {
    source: string;
    type?: string;
    dataHook?: string;
}

const CodeBlock: React.FC<CodeBlockProp> = (props) => {
    const { source, type, dataHook } = props;

    return (
        <div data-hook={dataHook}>
            <Markdown source={toCodeBlock(source, type)} />
        </div>
    );
};

export default CodeBlock;
