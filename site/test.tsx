import * as React from "react";

import RippleWrapper from "../lib/ripple/RippleWrapper";
// import Button from "../lib/button/button";

const textExample: React.FunctionComponent = () => {
    return (
        <div>
            {/* <Button>default</Button> */}
            <div style={{ height: 300, width: 400, border: "1px solid #ccc", position: "relative" }}>
                <RippleWrapper>
                </RippleWrapper>
            </div>
            <div style={{ height: 300, width: 400, border: "1px solid #ccc", position: "relative" }}>
                <RippleWrapper color="red">
                </RippleWrapper>
            </div>
        </div>
    );
};

export default textExample;