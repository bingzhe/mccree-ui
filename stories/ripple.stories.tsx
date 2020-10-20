import React from "react";

import { Button } from "../components/index";
import Ripple from "../components/ripple/index";
import RippleNew from "../components/ripple-wrapper/index";

export default {
    title: "工具/Ripple 涟漪",
    parameters: { docs: { page: null } }
};

export const RippleDoc = () => {
    return (
        <div className="page-wrapper ripple-wrapper">
            <div>
                <h4>默认Button启用 </h4>
                <Button>DEFAULT</Button>
                <Button type="primary">PRIMARY</Button>
                <Button type="secondary">SECONDARY</Button>
                <Button type="success">SUCCESS</Button>
                <Button type="error">ERROR</Button>
                <Button type="warning">WARNING</Button>
                <Button type="info">INFO</Button>
                <Button disabled type="primary">
                    PRIMARY
                </Button>
                <Button target="block" href="http://bingzhe.github.io/" type="primary">
                    LINK
                </Button>
            </div>

            <div>
                <h4>其他地方使用 </h4>
            </div>

            <div className="ripple-box-wrapper">
                <div className="ripple-box" />
                <Ripple />
            </div>

            <div>
                <h4>other color</h4>
            </div>

            <div className="ripple-box-wrapper">
                <div className="ripple-box" />
                <Ripple color="red" />
            </div>
            <div className="ripple-box-wrapper">
                <div className="ripple-box" />
                <Ripple color="rgb(255, 152, 0)" />
            </div>
            <div className="ripple-box-wrapper">
                <div className="ripple-box" />
                <Ripple color="#f5222d" center />
            </div>
            <RippleNew>
                <Button type="secondary">test</Button>
            </RippleNew>

            <RippleNew centerRipple>
                <div
                    style={{
                        color: "#fff",
                        border: "1px solid #ccc",
                        width: "100px",
                        height: "100px"
                    }}
                />
            </RippleNew>
        </div>
    );
};

RippleDoc.storyName = "Ripple";
