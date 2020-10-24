import * as React from "react";

import MarkdownDoc from "./components/MarkdownDoc";
import { prepareMarkdown } from "./utils/parseMarkdown";

const requireDemoGroup = require.context("./pages/button-group", false, /\.(tsx)$/);
const requireRawGroup = require.context("!raw-loader!./pages/button-group", false, /\.(md|tsx)$/);

export const ButtonGroup = () => {
    const pageFilename = "button-group";
    const { demos, docs } = prepareMarkdown({ pageFilename, requireRaw: requireRawGroup });

    return (
        <div className="page-wrapper">
            <MarkdownDoc demos={demos} docs={docs} requireDemo={requireDemoGroup} />
        </div>
    );
};

export default {
    title: "通用/ButtonGroup 按钮组",
    argTypes: {}
};
