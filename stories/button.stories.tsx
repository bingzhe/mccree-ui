import * as React from "react";
import { storiesOf } from "@storybook/react";

import MarkdownDoc from "./components/MarkdownDoc";
import { prepareMarkdown } from "./utils/parseMarkdown";

const requireDemo = require.context("./pages/button", false, /\.(tsx)$/);
const requireRaw = require.context("!raw-loader!./pages/button", false, /\.(md|tsx)$/);

const requireDemoGroup = require.context("./pages/button-group", false, /\.(tsx)$/);
const requireRawGroup = require.context("!raw-loader!./pages/button-group", false, /\.(md|tsx)$/);

storiesOf("Button", module)
    .add("Button", () => {
        const pageFilename = "button";
        const { demos, docs } = prepareMarkdown({ pageFilename, requireRaw });

        return (
            <div className="page-wrapper">
                <MarkdownDoc demos={demos} docs={docs} requireDemo={requireDemo} />
            </div>
        );
    })
    .add("ButtonGroup", () => {
        const pageFilename = "button-group";
        const { demos, docs } = prepareMarkdown({ pageFilename, requireRaw: requireRawGroup });

        return (
            <div className="page-wrapper">
                <MarkdownDoc demos={demos} docs={docs} requireDemo={requireDemoGroup} />
            </div>
        );
    });
