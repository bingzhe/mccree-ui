import React, { useState, Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import Form, { FormValue } from "../form";
import Validator from "../validator";

const FormExample: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<FormValue>({
        username: "",
        password: ""
    });
    const [fields] = useState([
        { name: "username", label: "用户名", input: { type: "text" }},
        { name: "password", label: "密码", input: { type: "password" }}
    ]);

    const rules = [
        { key: "username", required: true },
        { key: "username", minLength: 6, maxLength: 8 },
        { key: "username", regular: /^[a-zA-Z0-9]+$/ },
        { key: "password", required: true }
    ];

    const [errors, setErrors] = useState({});

    const onSubmit = () => {
        const errors = Validator(formData, rules);
        setErrors(errors);
        console.log("errops", errors);
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
                    errors={errors}
                ></Form>
            </div>
        </div >
    );
};

export default FormExample;

