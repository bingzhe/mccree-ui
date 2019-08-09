import * as React from "react";

import Code from "./Doc/Code";

const textExample: React.FunctionComponent = () => {
    const code = "<Button>Button  7777777</Button>";

    return (
        <div>
            <Code code={code} name="play"></Code>
        </div>
    );
};

export default textExample;