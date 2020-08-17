import * as React from "react";
import { storiesOf } from "@storybook/react";

import MarkdownDoc from "./components/MarkdownDoc";
import { prepareMarkdown } from "./utils/parseMarkdown";

const requireDemo = require.context("./pages/input", false, /\.(tsx)$/);
const requireRaw = require.context("!raw-loader!./pages/input", false, /\.(md|tsx)$/);

storiesOf("Input", module).add("Input", () => {
    const pageFilename = "input";
    const { demos, docs } = prepareMarkdown({ pageFilename, requireRaw });

    return (
        <div className="page-wrapper">
            <MarkdownDoc demos={demos} docs={docs} requireDemo={requireDemo} />
        </div>
    );
});
