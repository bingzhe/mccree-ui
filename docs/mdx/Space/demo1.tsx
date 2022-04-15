import React from "react";
import { Space } from "mccree-ui/components";
import "@mccree-ui/components/Space/style/index";

export default () => {
    return (
        <Space>
            <div style={{ width: "50px", height: "50px", border: "1px solid #ccc" }}>1</div>
            <div style={{ width: "50px", height: "50px", border: "1px solid #ccc" }}>2</div>
            <div style={{ width: "50px", height: "50px", border: "1px solid #ccc" }}>3</div>
            <div style={{ width: "50px", height: "50px", border: "1px solid #ccc" }}>4</div>
        </Space>
    );
};
