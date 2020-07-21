import * as React from "react";
import { storiesOf } from "@storybook/react";

import MarkdownDoc from "./components/MarkdownDoc";
import { prepareMarkdown } from "./utils/parseMarkdown";

const requireDemo = require.context("./pages/button", false, /\.(tsx)$/);
const requireRaw = require.context("!raw-loader!./pages/button", false, /\.(md|tsx)$/);

storiesOf("实验室", module).add("codedemo", () => {
    const pageFilename = "button";
    const { demos, docs } = prepareMarkdown({ pageFilename, requireRaw });

    return (
        <div className="page-wrapper">
            <MarkdownDoc demos={demos} docs={docs} requireDemo={requireDemo} />
        </div>
    );
});
