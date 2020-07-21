import * as React from "react";
import { storiesOf } from "@storybook/react";

import MarkdownDoc from "./components/MarkdownDoc";
import { prepareMarkdown } from "./utils/parseMarkdown";

const requireDemo = require.context("./pages/radio", false, /\.(tsx)$/);
const requireRaw = require.context("!raw-loader!./pages/radio", false, /\.(md|tsx)$/);

storiesOf("Radio", module).add("Radio", () => {
    const pageFilename = "radio";
    const { demos, docs } = prepareMarkdown({ pageFilename, requireRaw });

    return (
        <div className="page-wrapper">
            <MarkdownDoc demos={demos} docs={docs} requireDemo={requireDemo} />
        </div>
    );
});
