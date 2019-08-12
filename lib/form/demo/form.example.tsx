import React, { useState, Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import Form, { FormValue } from "../form";

const FormExample: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<FormValue>({
        username: "RR",
        password: ""
    });
    const [fields] = useState([
        { name: "username", label: "用户名", input: { type: "text" }},
        { name: "password", label: "密码", input: { type: "password" }}
    ]);
    const onSubmit = () => {
        console.log("formData", formData);
    };

    return (
        <div>
            <h1>form demo</h1>
            <div>
                <Form
                    value={formData}
                    fields={fields}
                    buttons={
                        <Fragment>
                            <button type="submit">提交</button>
                            <button>取消</button>
                        </Fragment>
                    }
                    onSubmit={onSubmit}
                    onChange={value => setFormData(value)}
                ></Form>
            </div>
        </div >
    );
};

export default FormExample;

