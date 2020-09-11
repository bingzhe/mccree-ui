import * as React from "react";
import { Space, Button } from "../components/index";

import MarkdownDoc from "./components/MarkdownDoc";
import { prepareMarkdown } from "./utils/parseMarkdown";
import { Story } from "@storybook/react/types-6-0";

const requireDemo = require.context("./pages/space", false, /\.(tsx)$/);
const requireRaw = require.context("!raw-loader!./pages/space", false, /\.(md|tsx)$/);

export default {
    title: "布局/Space 间距",
    argTypes: {
        size: {
            control: {
                type: "select",
                options: ["small", "medium", "large", 30, 40, 50]
            }
        },
        direction: {
            control: {
                type: "select",
                options: ["horizontal", "vertical"]
            }
        }
    }
};

const Template: Story = (args) => {
    return (
        <Space {...args}>
            <Button type="primary">Space</Button>
            Space
            <Button type="secondary" variant="outline">
                Space
            </Button>
        </Space>
    );
};

export const example = Template.bind({});
example.args = {
    size: "small",
    direction: "horizontal"
};

export const SpaceDoc = () => {
    const pageFilename = "space";
    const { demos, docs } = prepareMarkdown({ pageFilename, requireRaw });

    return (
        <div className="page-wrapper">
            <MarkdownDoc demos={demos} docs={docs} requireDemo={requireDemo} />
        </div>
    );
};

SpaceDoc.storyName = "Space";
