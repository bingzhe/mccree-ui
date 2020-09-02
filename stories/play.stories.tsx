import * as React from "react";
import { Button } from "../components/index";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "实验室/Play",
    argTypes: {
        type: {
            control: {
                type: "select",
                options: ["primary", "default", "success"]
            }
        },
        children: {}
    }
};

const Template: Story = (args) => <Button {...args} />;

export const play = Template.bind({});
play.args = {
    size: "large",
    children: "222",
    disabled: false,
    type: "primary"
};
