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

export const nestPattern = () => {
    return (
        <Loading tip="tip....">
            <div style={{ height: "200px", border: "1px solid #ccc" }}>123</div>
        </Loading>
    );
};

export const nestPatternWidth = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = React.useState<boolean>(false);

    return (
        <>
            <Loading spinning={loading}>
                <div style={{ height: "200px", border: "1px solid #ccc" }}>123</div>
                <Checkbox />
            </Loading>
            <Checkbox
                value={loading}
                onChange={(e) => {
                    setLoading(e.target.checked);
                }}
            />
        </>
    );
};
