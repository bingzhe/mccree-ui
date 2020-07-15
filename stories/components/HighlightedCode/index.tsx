import * as React from "react";

import MarkdownElement from "../MarkdownElement";
// import prism from "../../utils/prism";

import prism from "../../utils/prism";

interface Props {
    code: string;
    language: string;
}

const HighlightedCode: React.FC<Props> = (props) => {
    const { code, language } = props;

    const renderedCode = React.useMemo(() => {
        return prism(code.trim(), language);
    }, [code, language]);

    return (
        <MarkdownElement>
            <pre>
                <code
                    className={`language-${language}`}
                    dangerouslySetInnerHTML={{ __html: renderedCode }}
                />
            </pre>
        </MarkdownElement>
    );
};

export default HighlightedCode;
