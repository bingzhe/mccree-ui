import * as React from "react";
import { Button } from "../components/index";
import { Story } from "@storybook/react/types-6-0";

import MarkdownDoc from "./components/MarkdownDoc";
import { prepareMarkdown } from "./utils/parseMarkdown";

const requireDemo = require.context("./pages/button", false, /\.(tsx)$/);
const requireRaw = require.context("!raw-loader!./pages/button", false, /\.(md|tsx)$/);

const requireDemoGroup = require.context("./pages/button-group", false, /\.(tsx)$/);
const requireRawGroup = require.context("!raw-loader!./pages/button-group", false, /\.(md|tsx)$/);

export default {
    title: "通用/Button 按钮",
    argTypes: {
        type: {
            control: {
                type: "select",
                options: ["default", "primary", "secondary", "success", "warning", "error", "info"]
            }
        },
        variant: {
            control: {
                type: "select",
                options: ["contain", "outline", "text"]
            }
        },
        size: {
            control: {
                type: "select",
                options: ["small", "medium", "large"]
            }
        },
        shape: {
            control: {
                type: "select",
                options: ["circle", "round"]
            }
        }
    }
};

const Template: Story = (args) => <Button {...args} />;

export const example = Template.bind({});

example.args = {
    children: "Primary",
    type: "primary",
    disabled: false,
    variant: "contain",
    loading: false,
    block: false,
    size: "medium"
};

export const ButtonDoc = () => {
    const pageFilename = "button";
    const { demos, docs } = prepareMarkdown({ pageFilename, requireRaw });

    return (
        <div className="page-wrapper">
            <MarkdownDoc demos={demos} docs={docs} requireDemo={requireDemo} />
        </div>
    );
};
ButtonDoc.storyName = "Button";

export const ButtonGroup = () => {
    const pageFilename = "button-group";
    const { demos, docs } = prepareMarkdown({ pageFilename, requireRaw: requireRawGroup });

    return (
        <div className="page-wrapper">
            <MarkdownDoc demos={demos} docs={docs} requireDemo={requireDemoGroup} />
        </div>
    );
};
