import * as React from "react";
import { Input } from "../components/index";
import { Story } from "@storybook/react/types-6-0";

import MarkdownDoc from "./components/MarkdownDoc";
import { prepareMarkdown } from "./utils/parseMarkdown";

const requireDemo = require.context("./pages/input", false, /\.(tsx)$/);
const requireRaw = require.context("!raw-loader!./pages/input", false, /\.(md|tsx)$/);

export default {
    title: "数据录入/Input 输入框",
    argTypes: {
        defaultValue: {
            control: "text"
        },
        width: {
            control: "text"
        },
        addonBefore: {
            control: "text"
        },
        addonAfter: {
            control: "text"
        }
    }
};

const Template: Story = (args) => <Input {...args} />;

export const example = Template.bind({});
example.args = {
    disabled: false,
    readOnly: false,
    clearable: false,
    placeholder: "请输入"
};

export const InputDoc = () => {
    const pageFilename = "input";
    const { demos, docs } = prepareMarkdown({ pageFilename, requireRaw });

    return (
        <div className="page-wrapper">
            <MarkdownDoc demos={demos} docs={docs} requireDemo={requireDemo} />
        </div>
    );
};
InputDoc.storyName = "Input";
