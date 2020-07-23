import * as React from "react";
import { storiesOf } from "@storybook/react";

import MarkdownDoc from "./components/MarkdownDoc";
import { prepareMarkdown } from "./utils/parseMarkdown";

const requireDemo = require.context("./pages/icon", false, /\.(tsx)$/);
const requireRaw = require.context("!raw-loader!./pages/icon", false, /\.(md|tsx)$/);

storiesOf("Icon", module).add("Icon", () => {
    const pageFilename = "icon";
    const { demos, docs } = prepareMarkdown({ pageFilename, requireRaw });

    return (
        <div className="page-wrapper">
            <MarkdownDoc demos={demos} docs={docs} requireDemo={requireDemo} />
        </div>
    );
});
