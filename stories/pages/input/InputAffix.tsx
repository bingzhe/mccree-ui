import * as React from "react";
import { Input, Icon } from "../../../components/index";

const InputAffix = () => {
    return (
        <>
            <Input prefix={<Icon name="smile" />} placeholder="前缀图标" />
            <div style={{ marginBottom: "16px" }} />
            <Input suffix={<Icon name="smile" />} placeholder="后缀图标" />
        </>
    );
};

export default InputAffix;
