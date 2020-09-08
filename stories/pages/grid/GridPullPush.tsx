import * as React from "react";
import { Grid, Card } from "../../../components/index";

const GridPullPush = () => {
    const DemoCard: React.FC = (props) => {
        return (
            <Card hoverable style={{ margin: "8px 0" }}>
                {props.children}
            </Card>
        );
    };
    return (
        <Grid.Container gutter={16}>
            <Grid span={8} push={16}>
                <DemoCard>8</DemoCard>
            </Grid>
            <Grid span={16} pull={8}>
                <DemoCard>16</DemoCard>
            </Grid>
        </Grid.Container>
    );
};

export default GridPullPush;
