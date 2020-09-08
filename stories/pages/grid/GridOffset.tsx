import * as React from "react";
import { Grid, Card } from "../../../components/index";

const GridOffset = () => {
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

export default GridOffset;
