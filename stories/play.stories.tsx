import * as React from "react";
// import { Button } from "../components/index";
import { Story } from "@storybook/react/types-6-0";
import { Grid } from "../components/index";

export default {
    title: "实验室/Play",
    argTypes: {}
};

// const Template: Story = (args) => <Button {...args} />;

// export const play = Template.bind({});
// play.args = {
//     size: "large",
//     children: "222",
//     disabled: false,
//     type: "primary"
// };

export const play = () => {
    return (
        <div>
            <Grid.Container>
                <Grid span={24}>
                    <div style={{ background: "#eee" }}>24</div>
                </Grid>
            </Grid.Container>

            <Grid.Container>
                <Grid span={12}>
                    <div style={{ background: "#eee" }}>12</div>
                </Grid>
                <Grid span={12}>
                    <div style={{ background: "#eee" }}>12</div>
                </Grid>
            </Grid.Container>

            <Grid.Container>
                <Grid span={8}>
                    <div style={{ background: "#eee" }}>8</div>
                </Grid>
                <Grid span={8}>
                    <div style={{ background: "#eee" }}>8</div>
                </Grid>
                <Grid span={8}>
                    <div style={{ background: "#eee" }}>8</div>
                </Grid>
            </Grid.Container>

            <Grid.Container>
                <Grid span={6}>
                    <div style={{ background: "#eee" }}>6</div>
                </Grid>
                <Grid span={6}>
                    <div style={{ background: "#eee" }}>6</div>
                </Grid>
                <Grid span={6}>
                    <div style={{ background: "#eee" }}>6</div>
                </Grid>
                <Grid span={6}>
                    <div style={{ background: "#eee" }}>6</div>
                </Grid>
            </Grid.Container>
        </div>
    );
};
