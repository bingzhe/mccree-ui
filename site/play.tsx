import * as React from "react";

import Code from "./Doc/Code";

const textExample: React.FunctionComponent = () => {
    const code = "<div>123</div>";

    return (
        <div>
            <Code code={code} name="play"></Code>
        </div>
    );
};

export default textExample;