import * as React from "react";
import { Story } from "@storybook/react/types-6-0";
import { Loading, Checkbox } from "../components/index";

export default {
    title: "反馈/Loading 加载中",
    argTypes: {
        type: {
            control: {
                type: "select",
                options: [
                    "default",
                    "waves",
                    "corners",
                    "border",
                    "points",
                    "square",
                    "gradient",
                    "rectangle",
                    "circles",
                    "scale",
                    "dots"
                ]
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
    return <Loading {...args} />;
};
Base.args = {
    tip: "Loading..."
};
Base.parameters = { docs: { storyDescription: "用于页面和区块的加载中状态。" } };

export const Type = () => {
    const typeList = [
        "default",
        "waves",
        "corners",
        "border",
        "points",
        "square",
        "gradient",
        "rectangle",
        "circles",
        "scale",
        "dots"
    ] as any;
    return (
        <div className="loading-demo">
            {typeList.map((type) => (
                <div className="loading-demo-item" key={type}>
                    <Loading type={type} tip={type} />
                </div>
            ))}
        </div>
    );
};
Type.parameters = { docs: { storyDescription: "使用type更改加载动画类型" } };

export const Color = () => {
    const typeList = [
        "default",
        "waves",
        "corners",
        "border",
        "points",
        "square",
        "gradient",
        "rectangle",
        "circles",
        "scale",
        "dots"
    ] as any;
    return (
        <div className="loading-demo">
            {typeList.map((type) => (
                <div className="loading-demo-item" key={type}>
                    <Loading type={type} tip={type} color="#d5397b" />
                </div>
            ))}
        </div>
    );
};
Color.parameters = { docs: { storyDescription: "可以用 Color 设置组件颜色" } };

export const Container = () => {
    return (
        <div className="loading-container-demo">
            <Loading tip="loading..." />
        </div>
    );
};
Container.parameters = { docs: { storyDescription: "放入一个容器中" } };

export const Tip = () => {
    return (
        <div className="loading-container-demo">
            <Loading tip="custome......" />
        </div>
    );
};
Tip.parameters = { docs: { storyDescription: "自定义描述文案" } };

export const Nested = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = React.useState<boolean>(false);

    return (
        <>
            <Loading spinning={loading} tip="loading...">
                <div style={{ border: "1px solid #ccc", padding: "10px 20px" }}>
                    <p>
                        在 React 内部，它会决定在何时调用 render 函数，并对返回的 React Elements
                        进行遍历，如果遇到函数组件，React
                        便会继续调用这个函数组件。在这个过程中，可以由父组件通过 props
                        将数据传递到该子组件中。最终 React
                        会调用完所有的组件，从而知晓如何进行渲染。
                    </p>
                    <p>这种把 render 函数交给 React 内部处理的机制，为引入状态带来了可能。</p>
                </div>
            </Loading>

            <Checkbox
                value={loading}
                onChange={(e) => {
                    setLoading(e.target.checked);
                }}
            >
                Loading state
            </Checkbox>
        </>
    );
};

Nested.parameters = {
    docs: { storyDescription: "可以直接把内容内嵌到 Loading 中，将现有容器变为加载状态" }
};
