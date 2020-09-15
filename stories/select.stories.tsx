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

export const Play = () => {
    const [value, setValue] = React.useState([]);

    const handleChange = (value: any) => {
        console.log("store value", value);
        setValue(value);
    };

    return (
        <div>
            <Select
                placeholder="请选择"
                width="300px"
                clearable
                value={value}
                onChange={handleChange}
            >
                <Select.Option value="1">11222</Select.Option>
                <Select.Option value="2">223333</Select.Option>
                <Select.Option value="3">33444</Select.Option>
                <Select.Option value="4">4455</Select.Option>
            </Select>

            {/* <Select placeholder="请选择" width="300px">
                <Select.Option value="1">11</Select.Option>
                <Select.Option divider />
                <Select.Option label>
                    manage
                </Select.Option>
                <Select.Option value="3">33</Select.Option>
                <Select.Option value="12" disabled>
                    44
                </Select.Option>
            </Select> */}
            <br />
            {/* <Select placeholder="请选择" width="300px" disabled>
                <Select.Option value="1">11</Select.Option>
                <Select.Option value="2">22</Select.Option>
                <Select.Option value="3">33</Select.Option>
                <Select.Option value="12" disabled>
                    44
                </Select.Option>
            </Select> */}
        </div>
    );
};
