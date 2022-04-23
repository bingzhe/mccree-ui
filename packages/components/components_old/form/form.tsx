import React from "react";

export interface FormValue {
    [k: string]: any;
}

interface FormProps {
    value: FormValue;
    fields: Array<{
        name: string; label: string; input: { type: string };
    }>;
    buttons: React.ReactFragment;
    onSubmit: React.FormEventHandler;
    onChange: (value: FormValue) => void;
    errors: { [k: string]: string[] };
}

const Form: React.FunctionComponent<FormProps> = (props) => {
    const formData = props.value;

    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        props.onSubmit(e);
    };

    const onChange = (name: string, e: React.ChangeEvent<HTMLInputElement>) => {
        const newFormValue = {
            ...formData,
            [name]: e.target.value
        };
        props.onChange(newFormValue);
    };
    return (
        <form onSubmit={onSubmit}>
            {props.fields.map(f => (
                <div key={f.name}>
                    {f.label}
                    <input
                        type={f.input.type}
                        value={formData[f.name]}
                        onChange={onChange.bind(null, f.name)}
                    />
                    <div>{props.errors[f.name]}</div>
                </div>
            ))}
            <div>
                {props.buttons}
            </div>
        </form>
    );
};

export default Form;