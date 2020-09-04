import * as React from "react";
// import { Button } from "../components/index";
import { Story } from "@storybook/react/types-6-0";
import { Card } from "../components/index";

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
            <Card width="300px">
                <Card.Actions>Footer</Card.Actions>
                Card
            </Card>
        </div>
    );
};
