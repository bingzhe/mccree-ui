import * as React from "react";
import { Input } from "../../../components/index";

const InputEvent = () => {
    const [value, setValue] = React.useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        console.log("输入的值:", e.target.value);
    };
    return <Input placeholder="示例" value={value} onChange={handleChange} />;
};

export default InputEvent;
