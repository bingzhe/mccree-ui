import * as React from "react";
import { storiesOf } from "@storybook/react";

import MarkdownDoc from "./components/MarkdownDoc";
import { prepareMarkdown } from "./utils/parseMarkdown";

const requireDemo = require.context("./pages/checkbox", false, /\.(tsx)$/);
const requireRaw = require.context("!raw-loader!./pages/checkbox", false, /\.(md|tsx)$/);

storiesOf("Checkbox", module).add("Checkbox", () => {
    const pageFilename = "checkbox";
    const { demos, docs } = prepareMarkdown({ pageFilename, requireRaw });

    return (
        <div className="page-wrapper">
            <MarkdownDoc demos={demos} docs={docs} requireDemo={requireDemo} />
        </div>
    );
});
