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
            <Loading type="waves" />
            <Loading type="corners" />
            <Loading type="border" />
            <Loading type="points" />
            <Loading type="square" />
            <Loading type="gradient" />
            <Loading type="rectangle" />
            <Loading type="circles" />
            <Loading type="scale" />
        </div>
    );
};

export const containter = () => {
    return (
        <div style={{ width: "200px", height: "200px", border: "1px solid #ccc" }}>
            <Loading />
        </div>
    );
};

export const nestPattern = () => {
    return (
        <Loading spinning>
            <div style={{ height: "200px", border: "1px solid #ccc", background: "blue" }}>123</div>
        </Loading>
    );
};

export const nestPatternWidth = () => {
    return (
        <Loading spinning>
            <div style={{ height: "200px", width: "200px", border: "1px solid #ccc" }}>123</div>
        </Loading>
    );
};

export const tip = () => {
    return (
        <Loading spinning tip="loading...">
            <div style={{ height: "200px", width: "200px", border: "1px solid #ccc" }}>123</div>
        </Loading>
    );
};
