import * as React from "react";
import { Grid, Card } from "../../../components/index";

const GridResponsive = () => {
    const DemoCard: React.FC<{ style?: React.CSSProperties }> = (props) => {
        return (
            <Card hoverable style={{ margin: "8px 0", ...(props.style || {}) }}>
                {props.children}
            </Card>
        );
    };
    return (
        <Grid.Container gutter={16}>
            <Grid xs={2} sm={4} md={6} lg={8} xl={10}>
                <DemoCard />
            </Grid>
            <Grid xs={20} sm={16} md={12} lg={8} xl={4}>
                <DemoCard />
            </Grid>
            <Grid xs={2} sm={4} md={6} lg={8} xl={10}>
                <DemoCard />
            </Grid>
        </Grid.Container>
    );
};

export default GridResponsive;
