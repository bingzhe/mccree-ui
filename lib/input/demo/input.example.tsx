import React from "react";
import Input from "../index";

const InputExample: React.FunctionComponent = () => {

    const [value, setValue] = React.useState("1adfa");

    const handleChange = (v: string) => {
        setValue(v);
    };

    return (
        <div>
            <h1>input demo</h1>
            <div>
                <Input value={value} onChange={handleChange}></Input>
            </div>
        </div>
    );
};

export default InputExample;