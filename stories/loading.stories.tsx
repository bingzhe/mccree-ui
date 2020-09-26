import * as React from "react";
// import { Story } from "@storybook/react/types-6-0";
import { Loading } from "../components/index";

export default {
    title: "实验室/Loading",
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
    return (
        <div>
            <Loading />
        </div>
    );
};
