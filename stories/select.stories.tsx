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
                <Select.Option value="12" disabled>
                    44
                </Select.Option>
            </Select>

            <Select placeholder="请选择" width="300px">
                <Select.Option value="1">11</Select.Option>
                <Select.Option value="2">22</Select.Option>
                <Select.Option value="3">33</Select.Option>
                <Select.Option value="12" disabled>
                    44
                </Select.Option>
            </Select>
        </div>
    );
};
