import * as React from "react";

import MarkdownDoc from "./components/MarkdownDoc";
import { prepareMarkdown } from "./utils/parseMarkdown";

const requireDemo = require.context("./pages/hooks/use-click-outside", false, /\.(tsx)$/);
const requireRaw = require.context(
    "!raw-loader!./pages/hooks/use-click-outside",
    false,
    /\.(md|tsx)$/
);

export default {
    title: "hooks/useClickOutside 点击他处",
    parameters: { docs: { page: null } }
};

export const useClickOutside = () => {
    const pageFilename = "hooks/use-click-outside";
    const { demos, docs } = prepareMarkdown({ pageFilename, requireRaw });

    return (
        <div className="page-wrapper">
            <MarkdownDoc demos={demos} docs={docs} requireDemo={requireDemo} />
        </div>
    );
};
