import * as React from "react";
import { storiesOf } from "@storybook/react";

import MarkdownDoc from "./components/MarkdownDoc";
import { prepareMarkdown } from "./utils/parseMarkdown";

const requireDemo = require.context("./pages/transition", false, /\.(tsx)$/);
const requireRaw = require.context("!raw-loader!./pages/transition", false, /\.(md|tsx)$/);

storiesOf("Transition", module).add("Transition", () => {
    const pageFilename = "transition";
    const { demos, docs } = prepareMarkdown({ pageFilename, requireRaw });

    return (
        <div className="page-wrapper">
            <MarkdownDoc demos={demos} docs={docs} requireDemo={requireDemo} />
        </div>
    );
});
