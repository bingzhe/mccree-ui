import * as React from "react";
import { storiesOf } from "@storybook/react";
import CodeExample from "./CodeExample/CodeExample";
// import Button from "../components/index";

const exampleCode = `
    <Button type="primary">Primary</Button>
`;

const example = (config: any) => CodeExample({ ...config });

storiesOf("实验室", module).add("Radio", () => {
    return <div className="page-wrapper">{example({ code: exampleCode })}</div>;
});
