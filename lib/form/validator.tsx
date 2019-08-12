// eslint-disable-next-line no-unused-vars
import { FormValue } from "./form";

interface FormRule {
    key: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    regular?: RegExp;
}

type FormRules = Array<FormRule>

interface FormErrors {
    [K: string]: string[];
}

const isEmpty = (val: any) => {
    return val === undefined || val === null || val === "";
};

const Validator = (formValue: FormValue, rules: FormRules): FormErrors => {
    const errors: any = {};

    const addError = (key: string, message: string) => {
        errors[key] = errors[key] || [];
        errors[key].push(message);
    };

    rules.forEach(rule => {
        const value = formValue[rule.key];

        if (rule.required && isEmpty(value)) {
            addError(rule.key, "必填");
        }
        if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
            addError(rule.key, "太短");
        }
        if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
            addError(rule.key, "太长");
        }
        if (rule.regular && !(rule.regular.test(value))) {
            addError(rule.key, "格式不正确");
        }
    });

    return errors;
};

export default Validator;