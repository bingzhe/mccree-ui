import * as React from "react";
import { Grid, Card } from "../../../components/index";

const GridOrder = () => {
    const DemoCard: React.FC<{ style?: React.CSSProperties }> = (props) => {
        return (
            <Card hoverable style={{ margin: "8px 0", ...(props.style || {}) }}>
                {props.children}
            </Card>
        );
    };
    return (
        <Grid.Container gutter={16}>
            <Grid span={6} order={4}>
                <DemoCard>1</DemoCard>
            </Grid>
            <Grid span={6} order={3}>
                <DemoCard>2</DemoCard>
            </Grid>
            <Grid span={6} order={2}>
                <DemoCard>3</DemoCard>
            </Grid>
            <Grid span={6} order={1}>
                <DemoCard>4</DemoCard>
            </Grid>
        </Grid.Container>
    );
};

export default GridOrder;
