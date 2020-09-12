import * as React from "react";
// import { Button } from "../components/index";
// import { Story } from "@storybook/react/types-6-0";
import { Select } from "../components/index";

export default {
    title: "实验室/Select",
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
            <Select placeholder="请选择">
                <Select.Option value="1">11</Select.Option>
                <Select.Option value="2">22</Select.Option>
                <Select.Option value="3">33</Select.Option>
                <Select.Option value="4">44</Select.Option>
                <Select.Option value="5">11</Select.Option>
                <Select.Option value="6">22</Select.Option>
                <Select.Option value="7">33</Select.Option>
                <Select.Option value="8">44</Select.Option>
                <Select.Option value="9">11</Select.Option>
                <Select.Option value="10">22</Select.Option>
                <Select.Option value="11">33</Select.Option>
                <Select.Option value="12">44</Select.Option>
            </Select>
        </div>
    );
};
