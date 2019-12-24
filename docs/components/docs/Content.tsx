import React from "react";
import Markdown from "markdown-to-jsx";

import { TemplateProps } from "./template";

import Sidebar from "./Sidebar";
import Code from "../Code/Code";

const Content: React.FC<TemplateProps> = ({ data }) => {

    // console.log(data.doc.rawMarkdownBody);

    return (
        <>
            <Sidebar data={data} />
            <Markdown
                options={{
                    overrides: {
                        pre: Code
                    }
                }}
            >
                {data.doc.rawMarkdownBody}
            </Markdown>
        </>
    );
};

export default Content;