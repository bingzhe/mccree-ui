import * as React from "react";
import { storiesOf } from "@storybook/react";
// import CodeExample from "./CodeExample/CodeExample";
// import MarkdownElement from "./components/MarkdownElement";
import HighLightedCode from "./components/HighlightedCode";
// import Button from "../components/index";

// const exampleCode = `
//     <Button type="primary">Primary</Button>
// `;

// const example = (config: any) => CodeExample({ ...config });

storiesOf("实验室", module).add("codedemo", () => {
    // const childrenNode = (
    //     <React.Fragment>
    //         <pre>
    //             <code className="language-js"> console.log(1) </code>
    //         </pre>
    //     </React.Fragment>
    // );
    return <HighLightedCode code="condole.log(123)" language="ts" />;
});
