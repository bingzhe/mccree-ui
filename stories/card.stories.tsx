import * as React from "react";
import { Card } from "../components/index";
import { Story } from "@storybook/react/types-6-0";

import MarkdownDoc from "./components/MarkdownDoc";
import { prepareMarkdown } from "./utils/parseMarkdown";

const requireDemo = require.context("./pages/card", false, /\.(tsx)$/);
const requireRaw = require.context("!raw-loader!./pages/card", false, /\.(md|tsx)$/);

export default {
    title: "数据展示/Card 卡片",
    argTypes: {
        variant: {
            control: {
                type: "select",
                options: ["contained", "outlined"]
            }
        },
        type: {
            control: {
                type: "select",
                options: ["primary", "secondary", "success", "warning", "error", "info"]
            }
        }
    }
};

const Template: Story = (args) => {
    return (
        <Card {...args}>
            <p>Card Content</p>
            <p>Card Content</p>
        </Card>
    );
};

export const example = Template.bind({});
example.args = {
    variant: "contained",
    shadow: false,
    hoverable: false,
    width: "400px"
};

export const CardDoc = () => {
    const pageFilename = "card";
    const { demos, docs } = prepareMarkdown({ pageFilename, requireRaw });

    return (
        <div className="page-wrapper">
            <MarkdownDoc demos={demos} docs={docs} requireDemo={requireDemo} />
        </div>
    );
};
CardDoc.storyName = "Card";
