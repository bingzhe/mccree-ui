import * as React from "react";

import RippleWrapper from "../lib/ripple/RippleWrapper";
// import Button from "../lib/button/button";

const textExample: React.FunctionComponent = () => {
    return (
        <div>
            {/* <Button>default</Button> */}
            <div className="demo" style={{ height: 300, width: 400, border: "1px solid #ccc", position: "relative" }}>
                <RippleWrapper className="demo-ripple">
                </RippleWrapper>
            </div>
            <div style={{ height: 300, width: 400, border: "1px solid #ccc", position: "relative" }}>
                <RippleWrapper color="red">
                </RippleWrapper>
            </div>
            {/* <Button style={{ position: "relative" }}>
                default
                <RippleWrapper color="red"></RippleWrapper>
            </Button> */}
        </div>
    );
};

export default textExample;