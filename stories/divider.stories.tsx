import * as React from "react";
import { Story } from "@storybook/react/types-6-0";
import { Divider } from "../components/index";

export default {
    title: "布局/Divider 分割线",
    argTypes: {
        align: {
            control: {
                type: "select",
                options: ["left", "center", "right"]
            }
        },
        type: {
            control: {
                type: "select",
                options: ["horizontal", "vertical"]
            }
        },
        color: {
            control: {
                type: "select",
                options: ["primary", "secondary", "success", "warning", "error", "info"]
            }
        }
    }
};

export const Base: Story = (args) => {
    return (
        <div>
            <div>
                在 React 内部，它会决定在何时调用 render 函数，并对返回的 React Elements
                进行遍历，如果遇到函数组件，React 便会继续调用这个函数组件。
            </div>
            <Divider {...args} />
            <div>
                在这个过程中，可以由父组件通过 props 将数据传递到该子组件中。最终 React
                会调用完所有的组件，从而知晓如何进行渲染。
            </div>
        </div>
    );
};
Base.args = {
    children: "",
    align: "center",
    dashed: false,
    plain: false
};

export const align = () => {
    return (
        <div>
            <Divider align="left">Divider</Divider>
            <Divider align="center">Divider</Divider>
            <Divider align="right">Divider</Divider>
        </div>
    );
};

export const Color = () => {
    return (
        <div>
            <Divider color="primary">Divider</Divider>
            <Divider color="secondary">Divider</Divider>
            <Divider color="success">Divider</Divider>
            <Divider color="warning">Divider</Divider>
            <Divider color="error">Divider</Divider>
            <Divider color="info">Divider</Divider>
        </div>
    );
};

export const Type = () => {
    return (
        <div>
            <Divider type="horizontal">Divider</Divider>
            <div>
                <span>Text</span>
                <Divider type="vertical" />
                <span>Text</span>
            </div>
        </div>
    );
};

export const Dashed = () => {
    return (
        <div>
            <Divider dashed>Divider</Divider>
        </div>
    );
};

export const Plain = () => {
    return (
        <div>
            <Divider plain>Divider</Divider>
        </div>
    );
};
