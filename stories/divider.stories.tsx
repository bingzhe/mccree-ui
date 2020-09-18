import * as React from "react";
import { Story } from "@storybook/react/types-6-0";
import { Divider } from "../components/index";

import MarkdownDoc from "./components/MarkdownDoc";
import { prepareMarkdown } from "./utils/parseMarkdown";

const requireDemo = require.context("./pages/divider", false, /\.(tsx)$/);
const requireRaw = require.context("!raw-loader!./pages/divider", false, /\.(md|tsx)$/);

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
                type: "color"
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
    children: "divider",
    align: "center",
    dashed: false,
    plain: false,
};
Base.parameters = { docs: { storyDescription: "默认为水平分割线，可在中间加入文字。" } };

export const Align = () => {
    return (
        <div>
            <Divider align="left">divider</Divider>
            <Divider align="center">divider</Divider>
            <Divider align="right">divider</Divider>
        </div>
    );
};
Align.parameters = { docs: { storyDescription: "可以用 align 指定文字位置。" } };


export const Color = () => {
    return (
        <div>
            <Divider color="primary">divider</Divider>
            <Divider color="secondary">divider</Divider>
            <Divider color="success">divider</Divider>
            <Divider color="warning">divider</Divider>
            <Divider color="error">divider</Divider>
            <Divider color="info">divider</Divider>
            <Divider color="rgba(172,17,236,1)">divider</Divider>
            <Divider color="#1ED39A">divider</Divider>
        </div>
    );
};
Color.parameters = { docs: { storyDescription: "可以用 Color 设置组件颜色" } };

export const Type = () => {
    return (
        <div>
            <Divider type="horizontal">divider</Divider>
            <div>
                <span>Text</span>
                <Divider type="vertical" />
                <span>Text</span>
            </div>
        </div>
    );
};
Type.parameters = { docs: { storyDescription: "使用 type='vertical' 设置为行内的垂直分割线。" } };

export const Dashed = () => {
    return (
        <div>
            <Divider dashed>divider</Divider>
        </div>
    );
};
Dashed.parameters = { docs: { storyDescription: "是否虚线。" } };

export const Plain = () => {
    return (
        <div>
            <Divider plain>divider</Divider>
        </div>
    );
};
Plain.parameters = { docs: { storyDescription: "文字是否显示为普通正文样式" } };

export const API = () => {
    const pageFilename = "divider";
    const { demos, docs } = prepareMarkdown({ pageFilename, requireRaw });

    return (
        <div>
            <MarkdownDoc demos={demos} docs={docs} requireDemo={requireDemo} />
        </div>
    );
};
