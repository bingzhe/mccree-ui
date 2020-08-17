import * as React from "react";
import { Input } from "../../../components/index";

const InputDisabled = () => {
    return (
        <>
            <Input placeholder="禁用" disabled />
            <div style={{ marginBottom: "16px" }} />
            <Input placeholder="只读" readOnly />
        </>
    );
};

export default InputDisabled;
