import * as React from "react";
import { Ripple } from "@mccree-ui/components";
import "@mccree-ui/components/ripple/style";
// import MarkdownDoc from "./components/MarkdownDoc";
// import { prepareMarkdown } from "./utils/parseMarkdown";

// const requireDemo = require.context("./pages/ripple", false, /\.(tsx)$/);
// const requireRaw = require.context("!raw-loader!./pages/ripple", false, /\.(md|tsx)$/);

export default {
    title: "工具/Ripple 涟漪",
    argTypes: {
        color: {
            control: {
                type: "color"
            }
        }
    }
};

export const Base = (args: any) => {
    return (
        <Ripple color="primary" {...args}>
            <div style={{ border: "1px solid #ccc", width: "100px", height: "100px" }} />
        </Ripple>
    );
};
Base.args = {
    center: false
};

export const Center = (args: any) => {
    return (
        <Ripple center {...args}>
            <div style={{ border: "1px solid #ccc", width: "100px", height: "100px" }} />
        </Ripple>
    );
};
// Center.args = {
//     color: "primary"
// };
// Center.parameters = { docs: { storyDescription: "涟漪居中，从中间向四周扩散，默认在鼠标点击处" } };

// export const Color = () => {
//     return (
//         <>
//             <Ripple color="primary">
//                 <div style={{ border: "1px solid #ccc", width: "100px", height: "100px" }} />
//             </Ripple>
//             <span style={{ marginRight: "10px" }} />
//             <Ripple color="#c473e5">
//                 <div style={{ border: "1px solid #ccc", width: "100px", height: "100px" }} />
//             </Ripple>
//         </>
//     );
// };
// Color.parameters = {
//     docs: {
//         storyDescription:
//             "涟漪颜色，可以设置为`primary`,`secondary`,`success`,`warning`,`error`,`info`,`RGB`,`HEX`"
//     }
// };

// export const ButtonDoc = () => {
//     return (
//         <div className="ripple-button-demo-wrapper">
//             <h4>默认Button启用 </h4>
//             <Button>DEFAULT</Button>
//             <Button type="primary">PRIMARY</Button>
//             <Button type="secondary">SECONDARY</Button>
//             <Button type="success">SUCCESS</Button>
//             <Button type="error">ERROR</Button>
//             <Button type="warning">WARNING</Button>
//             <Button type="info">INFO</Button>
//             <Button disabled type="primary">
//                 PRIMARY
//             </Button>
//         </div>
//     );
// };

// ButtonDoc.parameters = {
//     docs: {
//         storyDescription: "`Button`中默认启用"
//     }
// };

// ButtonDoc.storyName = "Button";

// export const API = () => {
//     const pageFilename = "ripple";
//     const { demos, docs } = prepareMarkdown({ pageFilename, requireRaw });

//     return (
//         <div>
//             <MarkdownDoc demos={demos} docs={docs} requireDemo={requireDemo} />
//         </div>
//     );
// };
