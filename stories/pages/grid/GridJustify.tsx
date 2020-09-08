import * as React from "react";
import { Grid, Card } from "../../../components/index";

const GridJustify = () => {
    const DemoCard: React.FC = (props) => {
        return (
            <Card hoverable style={{ margin: "8px 0" }}>
                {props.children}
            </Card>
        );
    };
    return (
        <>
            <Grid.Container gutter={16} justify="start">
                <Grid span={4}>
                    <DemoCard>4</DemoCard>
                </Grid>
                <Grid span={4}>
                    <DemoCard>4</DemoCard>
                </Grid>
                <Grid span={4}>
                    <DemoCard>4</DemoCard>
                </Grid>
            </Grid.Container>
            <Grid.Container gutter={16} justify="end">
                <Grid span={4}>
                    <DemoCard>4</DemoCard>
                </Grid>
                <Grid span={4}>
                    <DemoCard>4</DemoCard>
                </Grid>
                <Grid span={4}>
                    <DemoCard>4</DemoCard>
                </Grid>
            </Grid.Container>
            <Grid.Container gutter={16} justify="center">
                <Grid span={4}>
                    <DemoCard>4</DemoCard>
                </Grid>
                <Grid span={4}>
                    <DemoCard>4</DemoCard>
                </Grid>
                <Grid span={4}>
                    <DemoCard>4</DemoCard>
                </Grid>
            </Grid.Container>
            <Grid.Container gutter={16} justify="space-around">
                <Grid span={4}>
                    <DemoCard>4</DemoCard>
                </Grid>
                <Grid span={4}>
                    <DemoCard>4</DemoCard>
                </Grid>
                <Grid span={4}>
                    <DemoCard>4</DemoCard>
                </Grid>
            </Grid.Container>
            <Grid.Container gutter={16} justify="space-between">
                <Grid span={4}>
                    <DemoCard>4</DemoCard>
                </Grid>
                <Grid span={4}>
                    <DemoCard>4</DemoCard>
                </Grid>
                <Grid span={4}>
                    <DemoCard>4</DemoCard>
                </Grid>
            </Grid.Container>
        </>
    );
};

export default GridJustify;
