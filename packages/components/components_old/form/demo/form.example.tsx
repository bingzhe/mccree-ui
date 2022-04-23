import React, { useState, Fragment } from "react";
import Form, { FormValue } from "../form";
import Validator from "../../validator/index";


// FIXME:  异步测试代码
// const usernames = ["aa", "bb", "cc", "ee"];

// const checkUserName = (username: string, success: () => void, fail: () => void) => {
//     setTimeout(() => {
//         console.log("异步检查用户名是否存在");
//         if (usernames.includes(username)) {
//             success();
//         } else {
//             fail();
//         }
//     }, 3000);
// };

const FormExample: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<FormValue>({
        username: "",
        password: ""
    });

    const [fields] = useState([
        { name: "username", label: "用户名", input: { type: "text" }},
        { name: "password", label: "密码", input: { type: "password" }}
    ]);

    const [errors, setErrors] = useState({});

    const rules = {
        username: [
            { required: true, min: 6, type: "string" }
        ],
        // password: [
        //     { required: true },
        //     { min: 6 }
        // ],
        v: [
            { required: true, message: "no", }
        ]
    };



    const onSubmit = () => {
        const errors = Validator(
            { v: [], username: "" },
            rules,
            {
                messages: {
                    required(f: string) {
                        return `${f} required!`;
                    },
                }
            }
        );
        setErrors(errors);
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

