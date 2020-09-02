import * as React from "react";
import { Radio } from "../components/index";
import { Story } from "@storybook/react/types-6-0";

import MarkdownDoc from "./components/MarkdownDoc";
import { prepareMarkdown } from "./utils/parseMarkdown";

const requireDemo = require.context("./pages/radio", false, /\.(tsx)$/);
const requireRaw = require.context("!raw-loader!./pages/radio", false, /\.(md|tsx)$/);

export default {
    title: "数据录入/Radio 单选框",
    argTypes: {
        color: {
            control: {
                type: "select",
                options: ["primary", "secondary", "success", "warning", "error", "info"]
            }
        }
    }
};

const Template: Story = (args) => <Radio {...args} />;

export const example = Template.bind({});
example.args = {
    children: "Radio",
    defaultChecked: false,
    color: "primary",
    disabled: false
};

export const RadioDoc = () => {
    const pageFilename = "radio";
    const { demos, docs } = prepareMarkdown({ pageFilename, requireRaw });

    return (
        <div className="page-wrapper">
            <MarkdownDoc demos={demos} docs={docs} requireDemo={requireDemo} />
        </div>
    );
};
RadioDoc.storyName = "Radio";
