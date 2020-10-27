import * as React from "react";
import { Button, Space, Icon } from "../components/index";
import { Story } from "@storybook/react/types-6-0";

import MarkdownDoc from "./components/MarkdownDoc";
import { prepareMarkdown } from "./utils/parseMarkdown";

const requireDemo = require.context("./pages/button", false, /\.(tsx)$/);
const requireRaw = require.context("!raw-loader!./pages/button", false, /\.(md|tsx)$/);

export default {
    title: "通用/Button 按钮",
    argTypes: {
        color: {
            control: {
                type: "select",
                options: ["default", "primary", "secondary", "success", "warning", "error", "info"]
            }
        },
        variant: {
            control: {
                type: "select",
                options: ["contain", "outline", "text"]
            }
        },
        size: {
            control: {
                type: "select",
                options: ["small", "medium", "large"]
            }
        },
        shape: {
            control: {
                type: "select",
                options: ["circle", "round"]
            }
        }
    }
};

export const Base: Story = (args) => {
    return <Button {...args} />;
};

Base.parameters = {
    docs: {
        storyDescription:
            "按钮用于开始一个即时操作，标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。"
    }
};
Base.args = {
    children: "Primary",
    color: "primary",
    disabled: false,
    variant: "contain",
    loading: false,
    block: false,
    size: "medium"
};

export const Color = () => {
    return (
        <Space>
            <Button>DEFAULT</Button>
            <Button color="primary">PRIMARY</Button>
            <Button color="secondary">SECONDARY</Button>
            <Button color="success">SUCCESS</Button>
            <Button color="error">ERROR</Button>
            <Button color="warning">WARNING</Button>
            <Button color="info">INFO</Button>
        </Space>
    );
};
Color.parameters = {
    docs: {
        storyDescription:
            "通过`color`来设置不同状态下的按钮颜色，可以设置为`primary`,`secondary`,`success`,`warning`,`error`,`info`,"
    }
};

export const Outline = () => {
    return (
        <Space>
            <Button variant="outline">DEFAULT</Button>
            <Button variant="outline" color="primary">
                PRIMARY
            </Button>
            <Button variant="outline" color="secondary">
                SECONDARY
            </Button>
            <Button variant="outline" color="success">
                SUCCESS
            </Button>
            <Button variant="outline" color="error">
                ERROR
            </Button>
            <Button variant="outline" color="warning">
                WARNING
            </Button>
            <Button variant="outline" color="info">
                INFO
            </Button>
        </Space>
    );
};

Outline.parameters = {
    docs: {
        storyDescription: "描边按钮, 用`variant='outline'`控制"
    }
};

export const Text = () => {
    return (
        <Space>
            <Button variant="text">DEFAULT</Button>
            <Button variant="text" color="primary">
                PRIMARY
            </Button>
            <Button variant="text" color="secondary">
                SECONDARY
            </Button>
            <Button variant="text" color="success">
                SUCCESS
            </Button>
            <Button variant="text" color="error">
                ERROR
            </Button>
            <Button variant="text" color="warning">
                WARNING
            </Button>
            <Button variant="text" color="info">
                INFO
            </Button>
        </Space>
    );
};

Text.parameters = {
    docs: {
        storyDescription: "文本按钮, 用`variant='text'`控制"
    }
};

export const Disabled = () => {
    return (
        <Space>
            <Button disabled>DEFAULT</Button>
            <Button disabled variant="outline">
                DEFAULT
            </Button>
            <Button disabled variant="text">
                DEFAULT
            </Button>
            <Button disabled variant="text" href="http://bingzhe.github.io/" target="block">
                Link
            </Button>
        </Space>
    );
};
Disabled.parameters = {
    docs: {
        storyDescription: "不可用状态"
    }
};

export const Size = () => {
    return (
        <Space>
            <Button color="primary" size="large">
                Large
            </Button>
            <Button color="primary">Medium</Button>
            <Button color="primary" size="small">
                Small
            </Button>
            <Button variant="outline" color="primary" size="large">
                Large
            </Button>
            <Button variant="outline" color="primary" size="medium">
                Medium
            </Button>
            <Button variant="outline" color="primary" size="small">
                Small
            </Button>
            <Button variant="text" color="primary" size="large">
                Large
            </Button>
            <Button variant="text" color="primary" size="medium">
                Medium
            </Button>
            <Button variant="text" color="primary" size="small">
                Small
            </Button>
        </Space>
    );
};
Size.parameters = {
    docs: {
        storyDescription:
            "通过设置 `size` 为 `large` `medium` `small` 分别把按钮设为大、中、小尺寸。若不设置 `size`，则尺寸为中"
    }
};

export const Block = () => {
    return (
        <Space direction="vertical" style={{ width: "100%" }}>
            <Button color="primary" block>
                PRIMARY
            </Button>
            <Button variant="outline" color="primary" block>
                PRIMARY
            </Button>
            <Button variant="text" color="primary" block>
                PRIMARY
            </Button>
        </Space>
    );
};
Block.parameters = { 
    docs: {
        storyDescription: "`block`属性将使按钮宽度调整为其父宽度"
    }
};

export const Link = () => {
    return (
        <Space>
            <Button target="block" href="http://bingzhe.github.io/" color="primary">
                LINK
            </Button>
            <Button
                target="block"
                variant="outline"
                href="http://bingzhe.github.io/"
                color="primary"
            >
                LINK
            </Button>
            <Button target="block" variant="text" href="http://bingzhe.github.io/" color="primary">
                LINK
            </Button>
        </Space>
    );
};
Link.parameters = {
    docs: {
        storyDescription: "`href`设置点击跳转的地址，设置了此属性 `button` 的行为和 `a` 链接一致"
    }
};

export const Loading = () => {
    return (
        <Button loading color="primary">
            Loading
        </Button>
    );
};
Loading.parameters = {
    docs: {
        storyDescription: "加载中状态， 添加 `loading` 属性即可让按钮处于加载状态"
    }
};

export const IconDoc = () => {
    return (
        <Space>
            <Button startIcon={<Icon name="caret-left" />} color="primary">
                Primary
            </Button>
            <Button endIcon={<Icon name="caret-right" />} color="primary">
                Primary
            </Button>
            <Button color="primary" shape="circle">
                <Icon name="caret-right" />
            </Button>
            <Button color="error" shape="circle">
                <Icon name="caret-right" />
            </Button>
            <Button variant="text" color="primary" shape="circle">
                <Icon name="caret-right" />
            </Button>
        </Space>
    );
};
IconDoc.parameters = {
    docs: {
        storyDescription:
            "图标按钮，按钮中嵌入图标时候，可以通过设置 `startIcon` `endIcon` 属性，或者直接在 `Button` 内使用 `Icon` 组件。"
    }
};
IconDoc.storyName = "Icon";

export const IconButton = () => {
    return (
        <Space>
            <Button.IconButton
                color="primary"
                onClick={(e) => {
                    console.log(e);
                }}
            >
                <Icon name="caret-right" />
            </Button.IconButton>
        </Space>
    );
};
IconButton.parameters = {
    docs: {
        storyDescription: "设置`shape`为 `round` `circle` 控制样式"
    }
};

export const Shape = () => {
    return (
        <Space>
            <Button shape="round" color="primary">
                PRIMARY
            </Button>
            <Button shape="round" color="primary">
                P
            </Button>
            <Button shape="round" variant="outline" color="primary">
                PRIMARY
            </Button>
            <Button shape="round" variant="text" color="primary">
                PRIMARY
            </Button>
            <Button shape="circle" color="primary">
                P
            </Button>
        </Space>
    );
};
Shape.parameters = {
    docs: {
        storyDescription: "设置`shape`为 `round` `circle` 控制样式"
    }
};

export const API = () => {
    const pageFilename = "button";
    const { demos, docs } = prepareMarkdown({ pageFilename, requireRaw });

    return (
        <div className="page-wrapper">
            <MarkdownDoc demos={demos} docs={docs} requireDemo={requireDemo} />
        </div>
    );
};
