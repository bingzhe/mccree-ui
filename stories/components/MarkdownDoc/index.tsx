import * as React from "react";
import MarkdownElement from "../MarkdownElement";

interface MarkdownDocProps {
    className?: string;
    demos?: any;
    docs?: any;
    requireDemo?: __WebpackModuleApi.RequireContext;
}

const MarkdownDoc: React.FC<MarkdownDocProps> = (props) => {
    const { demos, docs } = props;
    const { description, rendered, title } = docs.zh;

    console.log("docs demos", demos);
    console.log("docs doc", docs);
    console.log("docs rendered", rendered);
    console.log(description, title);

    return (
        <div>
            {rendered.map((renderedMarkdownOrDemo: string, index: number) => {
                if (typeof renderedMarkdownOrDemo === "string") {
                    return (
                        <MarkdownElement key={index} renderedMarkdown={renderedMarkdownOrDemo} />
                    );
                }
                return <div>demo</div>;
            })}
        </div>
    );
};

export default MarkdownDoc;
