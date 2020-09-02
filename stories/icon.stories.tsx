import * as React from "react";
import { Icon } from "../components/index";
import { IconProps } from "../components/icon/index";
import { Story } from "@storybook/react/types-6-0";

import MarkdownDoc from "./components/MarkdownDoc";
import { prepareMarkdown } from "./utils/parseMarkdown";

const requireDemo = require.context("./pages/icon", false, /\.(tsx)$/);
const requireRaw = require.context("!raw-loader!./pages/icon", false, /\.(md|tsx)$/);

export default {
    title: "通用/Icon 图标"
};

const Template: Story<IconProps> = (args) => (
    <div style={{ fontSize: "36px" }}>
        <Icon {...args} />
    </div>
);

export const example = Template.bind({});
example.args = {
    name: "smile",
    spin: false,
    rotate: 0
};

export const IconDoc = () => {
    const pageFilename = "icon";
    const { demos, docs } = prepareMarkdown({ pageFilename, requireRaw });

    return (
        <div className="page-wrapper">
            <MarkdownDoc demos={demos} docs={docs} requireDemo={requireDemo} />
        </div>
    );
};
IconDoc.storyName = "Icon";
