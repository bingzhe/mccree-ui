import * as React from "react";
import { Button } from "../components/index";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ButtonProps } from "../components/button/index";

import MarkdownDoc from "./components/MarkdownDoc";
import { prepareMarkdown } from "./utils/parseMarkdown";
const requireDemo = require.context("./pages/button", false, /\.(tsx)$/);
const requireRaw = require.context("!raw-loader!./pages/button", false, /\.(md|tsx)$/);

import { Primary, ArgsTable, PRIMARY_STORY } from "@storybook/addon-docs/blocks";

console.log(PRIMARY_STORY);
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: "Example/Button",
    component: Button,
    argTypes: {
        type: {
            control: {
                type: "select",
                options: ["primary", "default", "success"]
            }
        },
        children: {}
    },
    parameters: {
        docs: {
            page: () => (
                <>
                    <Primary />
                    <ArgsTable story={PRIMARY_STORY} />
                </>
            )
        }
    }
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const demoPreview = Template.bind({});
demoPreview.args = {
    size: "large",
    children: "222",
    disabled: false,
    type: "primary"
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
