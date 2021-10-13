import * as React from "react";
import { Divider } from "../../../components/index";
// import { Button } from "./Button";
// import { Story } from "@storybook/react/types-6-0";

// import MarkdownDoc from "./components/MarkdownDoc";
// import { prepareMarkdown } from "./utils/parseMarkdown";

// const requireDemo = require.context("./pages/button", false, /\.(tsx)$/);
// const requireRaw = require.context("!raw-loader!./pages/button", false, /\.(md|tsx)$/);

export default {
    title: "通用/Button 按钮",
    argTypes: {
        color: {
            control: {
                type: "select",
                options: ["default", "primary", "secondary", "success", "warning", "error", "info"]
            }
        }
    }
};

// export const Base: Story = (args) => {
//     return <Button {...args} />;
// };

// Base.parameters = {
//     docs: {
//         storyDescription:
//             "按钮用于开始一个即时操作，标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。"
//     }
// };
// Base.args = {
//     children: "Primary",
//     color: "primary",
//     disabled: false,
//     variant: "contain",
//     loading: false,
//     block: false,
//     size: "medium"
// };

export const Color = () => {
    return (
        <div>
            <Divider />
        </div>
    );
};
Color.parameters = {
    docs: {
        storyDescription:
            "通过`color`来设置不同状态下的按钮颜色，可以设置为`primary`,`secondary`,`success`,`warning`,`error`,`info`,"
    }
};

// export const API = () => {
//     const pageFilename = "button";
//     const { demos, docs } = prepareMarkdown({ pageFilename, requireRaw });

//     return (
//         <div className="page-wrapper">
//             <MarkdownDoc demos={demos} docs={docs} requireDemo={requireDemo} />
//         </div>
//     );
// };
