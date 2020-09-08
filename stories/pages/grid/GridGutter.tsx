import * as React from "react";
import { Grid, Card } from "../../../components/index";

const GridGutter = () => {
    const DemoCard: React.FC = (props) => {
        return (
            <Card hoverable style={{ margin: "8px 0" }}>
                {props.children}
            </Card>
        );
    };
    return (
        <>
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
            <Grid.Container gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
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
        </>
    );
};

export default GridGutter;
