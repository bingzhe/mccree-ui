import * as React from "react";
import CodeBlock from "../CodeBlock/CodeBlock";

interface CodeExampleProps {
    code: string;
    codeType?: string;
    children?: React.ReactNode;
    title?: string;
    autoExpand?: boolean;
}
const CodeExample: React.FC<CodeExampleProps> = (props) => {
    const { code, codeType = "js", children } = props;
    return (
        <div>
            <CodeBlock source={code} type={codeType} />

            <div>{children}</div>
        </div>
    );
};

export default CodeExample;
