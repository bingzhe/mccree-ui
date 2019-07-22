import * as React from "react";

import RippleWrapper from "../lib/ripple/RippleWrapper";
import { relative } from "path";
import Button from "../lib/button/button";

const textExample: React.FunctionComponent = () => {
    return (
        <div>
            {/* <Button>default</Button> */}
            <div style={{ height: 300, width: 400, border: "1px solid #ccc", position: "relative" }}>
                <RippleWrapper center={false}>
                </RippleWrapper>
            </div>

            {/* <Button style={{ position: "relative" }}>
                default
                <RippleWrapper center={false}>
                </RippleWrapper>
            </Button> */}
        </div>
    );
};

export default textExample;