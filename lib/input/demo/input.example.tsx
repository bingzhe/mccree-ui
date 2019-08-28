import React from "react";
// import Input from "../index";
import Code from "../../../site/Doc/Code";

const InputExample: React.FunctionComponent = () => {
    const defaultCode =
        `()=>{
    const [value, setValue] = React.useState("");
    const handleChange = (v) => {
        setValue(v);
    };
    return (
        <Input value={value} onChange={handleChange}></Input>
    )
}`;

    const errorCode =
        `()=>{
    const [value, setValue] = React.useState("");
    const handleChange = (v) => {
        setValue(v);
    };
    return (
        <Input value={value} onChange={handleChange} error></Input>
    )
}`;

    const clearedCode = `()=>{
    const [value, setValue] = React.useState("");
    const handleChange = (v) => {
        setValue(v);
    };
    return (
        <Input value={value} onChange={handleChange} cleared></Input>
    )
}`;

    const placeholdCode = `()=>{
    const [value, setValue] = React.useState("");
    const handleChange = (v) => {
        setValue(v);
    };
    return (
        <Input value={value} onChange={handleChange} placeholder="text input"></Input>
    )
}`;

    const disabledCode = `()=>{
    const [value, setValue] = React.useState("");
    const handleChange = (v) => {
        setValue(v);
    };
    return (
        <Input value={value} onChange={handleChange} disabled placeholder="text input"></Input>
    )
}`;

    return (
        <div>
            <h1>default</h1>
            <div>
                <Code code={defaultCode} name="Input"></Code>
            </div>

            <h1>error</h1>
            <div>
                <Code code={errorCode} name="Input" />
            </div>

            <h1>cleared</h1>
            <div>
                <Code code={clearedCode} name="Input" />
            </div>

            <h1>placeholder</h1>
            <div>
                <Code code={placeholdCode} name="Input" />
            </div>

            <h1>disabled</h1>
            <div>
                <Code code={disabledCode} name="Input" />
            </div>
        </div>
    );
};

export default InputExample;