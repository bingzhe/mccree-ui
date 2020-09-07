import * as React from "react";
import { Checkbox } from "../components/index";
import { Story } from "@storybook/react/types-6-0";

import MarkdownDoc from "./components/MarkdownDoc";
import { prepareMarkdown } from "./utils/parseMarkdown";

const requireDemo = require.context("./pages/checkbox", false, /\.(tsx)$/);
const requireRaw = require.context("!raw-loader!./pages/checkbox", false, /\.(md|tsx)$/);

export default {
    title: "数据录入/Checkbox 多选框",
    argTypes: {
        color: {
            control: {
                type: "select",
                options: ["primary", "secondary", "success", "warning", "error", "info"]
            }
        }
    }
};

const Template: Story = (args) => <Checkbox {...args} />;

export const example = Template.bind({});
example.args = {
    children: "Checkbox",
    defaultChecked: false,
    indeterminate: false,
    color: "primary",
    disabled: false
};

export const CheckboxDoc = () => {
    const pageFilename = "checkbox";
    const { demos, docs } = prepareMarkdown({ pageFilename, requireRaw });

    return (
        <div className="page-wrapper">
            <MarkdownDoc demos={demos} docs={docs} requireDemo={requireDemo} />
        </div>
    );
};
CheckboxDoc.storyName = "Checkbox";
