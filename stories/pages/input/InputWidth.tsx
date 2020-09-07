import * as React from "react";
import { Input } from "../../../components/index";

const InputWidth = () => {
    return (
        <>
            <Input placeholder="width 示例" width="100%" />
            <div style={{ marginBottom: "16px" }} />
            <Input placeholder="width 示例" width="300px" />
        </>
    );
};

export default InputWidth;
