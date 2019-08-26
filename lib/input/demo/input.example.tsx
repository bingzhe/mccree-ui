import React from "react";
import Input from "../index";

const InputExample: React.FunctionComponent = () => {

    const [value, setValue] = React.useState("");

    const handleChange = (v: string) => {
        setValue(v);
    };

    return (
        <div>
            <h1>input demo1</h1>
            <div>
                <Input value={value} onChange={handleChange}></Input>
            </div>

            <h1>input demo2</h1>
            <div>
                <Input value={value} onChange={handleChange} error={true}></Input>
            </div>

            <h1>input demo3</h1>
            <div>
                <Input value={value} onChange={handleChange} cleared={true}></Input>
            </div>

            <h1>input demo4</h1>
            <div>
                <Input value={value} onChange={handleChange} placeholder="text input"></Input>
            </div>

            <h1>input demo5</h1>
            <div>
                <Input value={value} onChange={handleChange} disabled placeholder="text input"></Input>
            </div>
        </div>
    );
};

export default InputExample;