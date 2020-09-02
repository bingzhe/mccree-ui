import * as React from "react";
import { Transition, Checkbox } from "../components/index";
import { Story } from "@storybook/react/types-6-0";

import MarkdownDoc from "./components/MarkdownDoc";
import { prepareMarkdown } from "./utils/parseMarkdown";

const requireDemo = require.context("./pages/transition", false, /\.(tsx)$/);
const requireRaw = require.context("!raw-loader!./pages/transition", false, /\.(md|tsx)$/);

export default {
    title: "工具/Transition 过渡动画",
    argTypes: {
        type: {
            control: {
                type: "select",
                options: ["fade", "zoom", "slide", "collapse", "grow"]
            }
        }
    }
};

const Template: Story = (args) => {
    const [visible, setVisible] = React.useState(false);
    const handleCheckboxchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVisible(e.target.checked);
    };

    return (
        <>
            <Checkbox value={visible} onChange={handleCheckboxchange} />
            <Transition visible={visible} {...args}>
                <div style={{ height: "50px", width: "50px", background: "#eee" }} />
            </Transition>
        </>
    );
};
export const example = Template.bind({});
example.args = {
    type: "fade"
};

export const TransitionDoc = () => {
    const pageFilename = "transition";
    const { demos, docs } = prepareMarkdown({ pageFilename, requireRaw });

    return (
        <div className="page-wrapper">
            <MarkdownDoc demos={demos} docs={docs} requireDemo={requireDemo} />
        </div>
    );
};
TransitionDoc.storyName = "Transition";
