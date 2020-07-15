import * as React from "react";
import classNames from "classnames";

import "./index.less";

interface Props {
    className?: string;
    renderedMarkdown?: string;
}
interface DangerouslySetInnerHTMLType {
    __html: string;
}
interface MoreType {
    dangerouslySetInnerHTML?: DangerouslySetInnerHTMLType;
}

const MarkdownElement: React.FC<Props> = (props) => {
    const { className, renderedMarkdown, ...restProps } = props;

    const more: MoreType = {};

    if (typeof renderedMarkdown === "string") {
        // workaround for https://github.com/facebook/react/issues/17170
        // otherwise we could just set `dangerouslySetInnerHTML={undefined}`
        more.dangerouslySetInnerHTML = { __html: renderedMarkdown };
    }

    const classes = classNames(className, "markdown-element-root", "markdown-body");
    return <div className={classes} {...more} {...restProps} />;
};

export default MarkdownElement;
