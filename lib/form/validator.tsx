// eslint-disable-next-line no-unused-vars
import { FormValue } from "./form";

interface FormRule {
    key: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    regular?: RegExp;
    validator?: (rule: any, value: any, callback: any) => void;
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

    const addError = (key: string, message: string | Promise<any>) => {
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
        // if (rule.validator && typeof rule.validator === "function") {
        //     const promise = new Promise((resolve, rejects) => {
        //         console.log(rule.validator);
        //         (rule.validator as () => void)(rule, value, ()=>{}));
        //     });
        //     addError(rule.key, promise);
        // }
    });

    return errors;
};

export default Validator;


// function validate(source, options = {}, callback) {
//     const keys = options.keys || Object.keys(this.rules);
//     const errors = [];
//     for (let key of keys) {
//         const rules = this.rules[key];
//         let value = source[key];
//         for (let rule of rules) {
//             let tempError = rule.validator(rule, value, source, options);
//             // 直接返回string或者new Error('xxx')形式
//             if (typeof tempError === "string" || tempError.message) {
//                 tempError = [tempError];
//             }
//             if (Array.isArray(tempError) && tempError.length) {
//                 if (rule.message) {
//                     tempError = [].concat(rule.message);
//                 }
//                 errors.push(...tempError);
//                 break;
//             }
//         }
//     }
//     callback(errors.length ? errors : null);
// }