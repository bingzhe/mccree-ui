import * as React from "react";
import { Input } from "../../../components/index";

const InputAddon = () => {
    return (
        <>
            <Input addonBefore="https://" addonAfter=".com" defaultValue="site" />
            <div style={{ marginBottom: "16px" }} />
            <Input addonBefore="用户名" defaultValue="示例" />
        </>
    );
};

export default InputAddon;
