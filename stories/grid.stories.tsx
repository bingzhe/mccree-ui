import * as React from "react";
import { Grid, Card } from "../components/index";
import { Story } from "@storybook/react/types-6-0";

import MarkdownDoc from "./components/MarkdownDoc";
import { prepareMarkdown } from "./utils/parseMarkdown";

const requireDemo = require.context("./pages/grid", false, /\.(tsx)$/);
const requireRaw = require.context("!raw-loader!./pages/grid", false, /\.(md|tsx)$/);

export default {
    title: "布局/Grid 栅格",
    argTypes: {}
};

const Template: Story = () => {
    const DemoCard: React.FC = (props) => {
        return (
            <Card hoverable style={{ margin: "8px 0" }}>
                {props.children}
            </Card>
        );
    };

    return (
        <>
            <Grid.Container>
                <Grid span={24}>
                    <DemoCard>24</DemoCard>
                </Grid>
            </Grid.Container>
            <Grid.Container gutter={16}>
                <Grid span={12}>
                    <DemoCard>12</DemoCard>
                </Grid>
                <Grid span={12}>
                    <DemoCard>12</DemoCard>
                </Grid>
            </Grid.Container>
            <Grid.Container gutter={16}>
                <Grid span={8}>
                    <DemoCard>8</DemoCard>
                </Grid>
                <Grid span={8}>
                    <DemoCard>8</DemoCard>
                </Grid>
                <Grid span={8}>
                    <DemoCard>8</DemoCard>
                </Grid>
            </Grid.Container>
            <Grid.Container gutter={16}>
                <Grid span={6}>
                    <DemoCard>6</DemoCard>
                </Grid>
                <Grid span={6}>
                    <DemoCard>6</DemoCard>
                </Grid>
                <Grid span={6}>
                    <DemoCard>6</DemoCard>
                </Grid>
                <Grid span={6}>
                    <DemoCard>6</DemoCard>
                </Grid>
            </Grid.Container>
        </>
    );
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
