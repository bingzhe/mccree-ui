import * as React from "react";
import { Story } from "@storybook/react/types-6-0";
import { Select } from "../components/index";

import MarkdownDoc from "./components/MarkdownDoc";
import { prepareMarkdown } from "./utils/parseMarkdown";

const requireDemo = require.context("./pages/select", false, /\.(tsx)$/);
const requireRaw = require.context("!raw-loader!./pages/select", false, /\.(md|tsx)$/);

export default {
    title: "数据录入/Select 选择器",
    argTypes: {}
};

export const Base: Story = (args) => {
    return (
        <Select {...args}>
            <Select.Option value="React">React</Select.Option>
            <Select.Option value="Vue">Vue</Select.Option>
            <Select.Option value="Angular">Angular</Select.Option>
        </Select>
    );
};

Base.args = {
    placeholder: "请选择",
    width: "300px",
    disabled: false,
    clearable: false,
    multiple: false,
    pure: false
};

export const Disabled = () => {
    return (
        <Select placeholder="请选择" width="300px" disabled>
            <Select.Option value="React">React</Select.Option>
            <Select.Option value="Vue">Vue</Select.Option>
            <Select.Option value="Angular">Angular</Select.Option>
        </Select>
    );
};
Disabled.parameters = { docs: { storyDescription: "禁用" } };

export const DisabledOption = () => {
    return (
        <Select placeholder="请选择" width="300px">
            <Select.Option value="React">React</Select.Option>
            <Select.Option value="Vue" disabled>
                Vue
            </Select.Option>
            <Select.Option value="Angular">Angular</Select.Option>
        </Select>
    );
};
DisabledOption.parameters = { docs: { storyDescription: "禁用选项" } };

export const Clearable = () => {
    return (
        <Select placeholder="请选择" width="300px" clearable>
            <Select.Option value="React">React</Select.Option>
            <Select.Option value="Vue">Vue</Select.Option>
            <Select.Option value="Angular">Angular</Select.Option>
        </Select>
    );
};
Clearable.parameters = { docs: { storyDescription: "可清除" } };

export const Pure = () => {
    return (
        <Select placeholder="请选择" width="300px" pure>
            <Select.Option value="React">React</Select.Option>
            <Select.Option value="Vue">Vue</Select.Option>
            <Select.Option value="Angular">Angular</Select.Option>
        </Select>
    );
};
Pure.parameters = { docs: { storyDescription: "隐藏选择器右侧的图标" } };

export const width = () => {
    return (
        <>
            <Select placeholder="请选择">
                <Select.Option value="React">React</Select.Option>
                <Select.Option value="Vue">Vue</Select.Option>
                <Select.Option value="Angular">Angular</Select.Option>
            </Select>
            <Select placeholder="请选择" width="300px">
                <Select.Option value="React">React</Select.Option>
                <Select.Option value="Vue">Vue</Select.Option>
                <Select.Option value="Angular">Angular</Select.Option>
            </Select>
        </>
    );
};
width.parameters = { docs: { storyDescription: "设置选择器宽度,默认100%" } };

export const Label = () => {
    return (
        <Select placeholder="请选择" width="300px" pure>
            <Select.Option label>JavaScript Framework</Select.Option>
            <Select.Option value="React">React</Select.Option>
            <Select.Option value="Vue">Vue</Select.Option>
            <Select.Option value="Angular">Angular</Select.Option>
            <Select.Option label>Vue Tooling</Select.Option>
            <Select.Option value="Vue Router">Vue Router</Select.Option>
            <Select.Option value="Vuex">Vuex</Select.Option>
        </Select>
    );
};
Label.parameters = { docs: { storyDescription: "用标签将选项分组" } };

export const Divider = () => {
    return (
        <Select placeholder="请选择" width="300px" pure>
            <Select.Option label>JavaScript Framework</Select.Option>
            <Select.Option divider />
            <Select.Option value="React">React</Select.Option>
            <Select.Option value="Vue">Vue</Select.Option>
            <Select.Option value="Angular">Angular</Select.Option>
        </Select>
    );
};
Divider.parameters = { docs: { storyDescription: "在选项中加入修饰用的线条" } };

export const Multiple = () => {
    return (
        <Select placeholder="请选择" width="300px" multiple>
            <Select.Option value="React">React</Select.Option>
            <Select.Option value="Vue">Vue</Select.Option>
            <Select.Option value="Angular">Angular</Select.Option>
        </Select>
    );
};
Multiple.parameters = { docs: { storyDescription: "同时选中多个值" } };

export const Event = () => {
    const handleChange = (val: any) => {
        console.log(`选中的值，${val}`);
    };
    return (
        <Select placeholder="请选择" width="300px" onChange={handleChange}>
            <Select.Option value="React">React</Select.Option>
            <Select.Option value="Vue">Vue</Select.Option>
            <Select.Option value="Angular">Angular</Select.Option>
        </Select>
    );
};

Event.parameters = { docs: { storyDescription: "通过onChange事件获取选择的值" } };

export const API = () => {
    const pageFilename = "select";
    const { demos, docs } = prepareMarkdown({ pageFilename, requireRaw });

    return (
        <div>
            <MarkdownDoc demos={demos} docs={docs} requireDemo={requireDemo} />
        </div>
    );
};
