import * as React from "react";
import { Grid } from "../components/index";
import { Story } from "@storybook/react/types-6-0";

import MarkdownDoc from "./components/MarkdownDoc";
import { prepareMarkdown } from "./utils/parseMarkdown";

const requireDemo = require.context("./pages/grid", false, /\.(tsx)$/);
const requireRaw = require.context("!raw-loader!./pages/grid", false, /\.(md|tsx)$/);

export default {
    title: "布局/Grid 栅格",
    argTypes: {
        // variant: {
        //     control: {
        //         type: "select",
        //         options: ["contained", "outlined"]
        //     }
        // },
        // type: {
        //     control: {
        //         type: "select",
        //         options: ["primary", "secondary", "success", "warning", "error", "info"]
        //     }
        // }
    }
};

const Template: Story = (args) => {
    return <Grid {...args} />;
};

export const example = Template.bind({});
example.args = {};

export const GridDoc = () => {
    const pageFilename = "grid";
    const { demos, docs } = prepareMarkdown({ pageFilename, requireRaw });

    return (
        <div className="page-wrapper">
            <MarkdownDoc demos={demos} docs={docs} requireDemo={requireDemo} />
        </div>
    );
};
GridDoc.storyName = "Grid";
