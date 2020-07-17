import * as React from "react";
import { storiesOf } from "@storybook/react";
// import CodeExample from "./CodeExample/CodeExample";
// import MarkdownElement from "./components/MarkdownElement";
// import HighLightedCode from "./components/HighlightedCode";
import Demo from "./components/Demo";
// import Button from "../components/index";

// const exampleCode = `
//     <Button type="primary">Primary</Button>
// `;

// const example = (config: any) => CodeExample({ ...config });

const requireDemo = require.context("./pages/checkbox", false, /\.(tsx)$/);
const requireRaw = require.context("!raw-loader!./pages/checkbox", false, /\.(tsx)$/);

storiesOf("实验室", module).add("codedemo", () => {
    // const childrenNode = (
    //     <React.Fragment>
    //         <pre>
    //             <code className="language-js"> console.log(1) </code>
    //         </pre>
    //     </React.Fragment>
    // );

    requireDemo.keys().forEach((name) => {
        console.log("foreach", name);
    });

    // return <HighLightedCode code="condole.log(123)" language="ts" />;

    const demo = {
        tsx: requireDemo("./CheckboxGroup.tsx").default,
        rawTs: requireRaw("./CheckboxGroup.tsx").default
    };

    return (
        <div className="page-wrapper">
            <Demo demo={demo} />
        </div>
    );
});
