import * as React from "react";
import MarkdownElement from "../MarkdownElement";
import Demo from "../Demo";

interface DemosOptionType {
    moduleTS: string;
    rawTS: string;
}

interface DemosType {
    [T: string]: DemosOptionType;
}

interface DocsOptionType {
    description: string;
    title: string;
    rendered: RenderMarkdownDemoType[];
}
interface DocsType {
    [T: string]: DocsOptionType;
}

interface MarkdownDocProps {
    className?: string;
    demos: DemosType;
    docs: DocsType;
    requireDemo: __WebpackModuleApi.RequireContext;
}
interface RenderDemoType {
    demo: string;
}

type RenderMarkdownDemoType = string | RenderDemoType;

const MarkdownDoc: React.FC<MarkdownDocProps> = (props) => {
    const { demos, docs, requireDemo } = props;
    const { description, rendered, title } = docs.zh;

    console.log("docs demos", demos);
    console.log("docs doc", docs);
    console.log("docs rendered", rendered);
    console.log(description, title);

    return (
        <div>
            {rendered.map((renderedMarkdownOrDemo: RenderMarkdownDemoType, index: number) => {
                if (typeof renderedMarkdownOrDemo === "string") {
                    return (
                        <MarkdownElement key={index} renderedMarkdown={renderedMarkdownOrDemo} />
                    );
                }

                const name = renderedMarkdownOrDemo.demo;
                const demo = demos?.[name];

                if (demo === undefined) {
                    const errorMessage = [
                        `Missing demo: ${name}. You can use one of the following:`,
                        Object.keys(demos)
                    ].join("\n");

                    if (process.env.NODE_ENV !== "production") {
                        console.error(errorMessage);
                    }
                }

                return (
                    <Demo
                        key={index}
                        demo={{
                            tsx: requireDemo(demo.moduleTS).default,
                            rawTs: demo.rawTS
                        }}
                    />
                );
            })}
        </div>
    );
};

export default MarkdownDoc;
