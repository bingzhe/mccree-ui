import * as React from "react";
import { Grid, Card } from "../../../components/index";

const GridAlign = () => {
    const DemoCard: React.FC<{ style?: React.CSSProperties }> = (props) => {
        return (
            <Card hoverable style={{ margin: "8px 0", ...(props.style || {}) }}>
                {props.children}
            </Card>
        );
    };
    return (
        <>
            <Grid.Container gutter={16} align="top">
                <Grid span={6}>
                    <DemoCard style={{ height: "100px" }}>6</DemoCard>
                </Grid>
                <Grid span={6}>
                    <DemoCard style={{ height: "50px" }}>6</DemoCard>
                </Grid>
                <Grid span={6}>
                    <DemoCard style={{ height: "150px" }}>6</DemoCard>
                </Grid>
                <Grid span={6}>
                    <DemoCard style={{ height: "80px" }}>6</DemoCard>
                </Grid>
            </Grid.Container>
            <Grid.Container gutter={16} align="bottom">
                <Grid span={6}>
                    <DemoCard style={{ height: "100px" }}>6</DemoCard>
                </Grid>
                <Grid span={6}>
                    <DemoCard style={{ height: "50px" }}>6</DemoCard>
                </Grid>
                <Grid span={6}>
                    <DemoCard style={{ height: "150px" }}>6</DemoCard>
                </Grid>
                <Grid span={6}>
                    <DemoCard style={{ height: "80px" }}>6</DemoCard>
                </Grid>
            </Grid.Container>
            <Grid.Container gutter={16} align="middle">
                <Grid span={6}>
                    <DemoCard style={{ height: "100px" }}>6</DemoCard>
                </Grid>
                <Grid span={6}>
                    <DemoCard style={{ height: "50px" }}>6</DemoCard>
                </Grid>
                <Grid span={6}>
                    <DemoCard style={{ height: "150px" }}>6</DemoCard>
                </Grid>
                <Grid span={6}>
                    <DemoCard style={{ height: "80px" }}>6</DemoCard>
                </Grid>
            </Grid.Container>
        </>
    );
};

export default GridAlign;
