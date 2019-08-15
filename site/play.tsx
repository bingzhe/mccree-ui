import * as React from "react";

import Code from "./Doc/Code";

import schema from "../lib/testAsyncValidator/index.js";

const textExample: React.FunctionComponent = () => {
    const code = "<Button>Button  7777777</Button>";

    let descriptor = {
        name: {
            type: "string",
            required: true,
            validator: (rule, value) => value === "muji",
        },
        password: {
            type: "number",
            required: true,
        }
    };
    let validator = new schema(descriptor);

    const testFunction = () => {
        validator.validate({ name: "muji" }, (errors, fields) => {
            if (errors) {
                // validation failed, errors is an array of all errors
                // fields is an object keyed by field name with an array of
                // errors per field
                // return handleErrors(errors, fields);
                console.log(errors);
            }
            // validation passed
        });
    };

    return (
        <div>
            <Code code={code} name="play"></Code>

            <button onClick={testFunction}>sasdas</button>
        </div>
    );
};

export default textExample;