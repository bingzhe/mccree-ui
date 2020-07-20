import * as React from "react";

import MarkdownElement from "../MarkdownElement";
import prism from "../../utils/prism";

export interface HighLightedCodeProps {
    code: string;
    language: string;
}

const HighlightedCode: React.FC<HighLightedCodeProps> = (props) => {
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
