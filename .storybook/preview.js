import * as React from "react";
import { Primary, ArgsTable, PRIMARY_STORY, Title } from "@storybook/addon-docs/blocks";

// Title,
// Subtitle,
// Description,
// Primary,
// Props,
// Stories,

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: { expanded: true },
    docs: {
        page: () => (
            <>
                <Title />
                <Primary />
                <ArgsTable story={PRIMARY_STORY} />
            </>
        )
    },
    options: {
        storySort: {
            order: ["通用", "布局", "数据录入", "数据展示", "工具", "hooks", "实验室"]
        }
    }
};
