import React from "react";
import { Space } from "@mccree-ui/components";
import "@mccree-ui/components/Space/style/index";
import { IconAlipay, IconCaretDown, IconBackward } from "@mccree-ui/icons";

export default () => {
    return (
        <Space>
            <div style={{ width: "50px", height: "50px", border: "1px solid #ccc" }}>1</div>
            <div style={{ width: "50px", height: "50px", border: "1px solid #ccc" }}>2</div>
            <div style={{ width: "50px", height: "50px", border: "1px solid #ccc" }}>3</div>
            <div style={{ width: "50px", height: "50px", border: "1px solid #ccc" }}>4</div>

            <IconAlipay style={{ height: "30px", width: "30px" }} />
            <IconCaretDown style={{ height: "30px", width: "30px" }} />
            <IconBackward style={{ height: "30px", width: "30px" }} />
        </Space>
    );
};
