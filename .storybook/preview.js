import * as React from "react";
import { Primary, ArgsTable, PRIMARY_STORY } from "@storybook/addon-docs/blocks";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: { expanded: true },
    docs: {
        page: () => (
            <>
                <Primary />
                <ArgsTable story={PRIMARY_STORY} />
            </>
        )
    },
    options: {
        storySort: {
            order: ["通用", "数据录入", "工具", "hooks", "实验室"]
        }
    }
};
