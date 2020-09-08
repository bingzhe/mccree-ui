import * as React from "react";
import { Grid, Card } from "../../../components/index";

const GridFlex = () => {
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
                <Grid flex={2}>
                    <DemoCard>2/5</DemoCard>
                </Grid>
                <Grid flex={3}>
                    <DemoCard>3/5</DemoCard>
                </Grid>
            </Grid.Container>
            <Grid.Container gutter={16}>
                <Grid flex="100px">
                    <DemoCard>100px</DemoCard>
                </Grid>
                <Grid flex="auto">
                    <DemoCard>auto</DemoCard>
                </Grid>
            </Grid.Container>
            <Grid.Container gutter={16}>
                <Grid flex="1 1 200px">
                    <DemoCard>1 1 200px</DemoCard>
                </Grid>
                <Grid flex="0 1 300px">
                    <DemoCard>0 1 300px</DemoCard>
                </Grid>
            </Grid.Container>
        </>
    );
};

export default GridFlex;
