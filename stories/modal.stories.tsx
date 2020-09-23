import * as React from "react";
// import { Button } from "../components/index";
// import { Story } from "@storybook/react/types-6-0";
import { Modal } from "../components/index";

export default {
    title: "实验室/modal",
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
    const [visible, setVisible] = React.useState(false);
    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };
    return (
        <div>
            <button onClick={() => setVisible((v) => !v)}>test</button>
            <Modal visible={visible} onClose={closeHandler} />
        </div>
    );
};
