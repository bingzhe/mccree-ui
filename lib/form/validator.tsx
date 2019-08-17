// eslint-disable-next-line no-unused-vars
import { FormValue } from "./form";
// import validators from "./validators";
import validators from "../testAsyncValidator/validator";

interface Rule {
    type?: string;
    field?: string;
    required?: boolean;
    min?: number;
    max?: number;
    pattern?: RegExp;
    regular?: RegExp;
    message?: string;
    validator?: (rule: any, value: any, callback: any) => void;
}

// type Rules = Array<Rule>

interface Rules {
    [K: string]: Array<Rule>;
}

interface FormErrors {
    [K: string]: string[];
}

// const isEmpty = (val: any) => {
//     return val === undefined || val === null || val === "";
// };
interface SeriesItem {
    rule: Rule;
    value: any;
    source: FormValue;
    field: string;
}
interface Series {
    [K: string]: Array<SeriesItem>;
}


const Validator = (source: FormValue, rules: Rules): FormErrors => {
    const errors: any = {};

    // const addError = (key: string, message: string | Promise<any>) => {
    //     errors[key] = errors[key] || [];
    //     errors[key].push(message);
    // };

    const series: Series = {};
    const keys = Object.keys(rules);
    let arr: Array<Rule>;
    let value: string;


    keys.forEach(z => {
        arr = rules[z];
        value = source[z];

        arr.forEach(r => {
            console.log(r);
            let rule = r;
            rule.field = z;
            rule.type = getType(rule);
            rule.validator = getValidationMethod(rule);

            if (!rule.validator) {
                return;
            }

            series[z] = series[z] || [];
            series[z].push({
                rule,
                value,
                source,
                field: z,
            });

            // 直接返回string或者new Error('xxx')形式


        });
    });

    console.log("series", series);

    // rules.forEach(rule => {
    //     const value = formValue[rule.key];

    //     if (rule.required && isEmpty(value)) {
    //         addError(rule.key, "必填");
    //     }
    //     if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
    //         addError(rule.key, "太短");
    //     }
    //     if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
    //         addError(rule.key, "太长");
    //     }
    //     if (rule.regular && !(rule.regular.test(value))) {
    //         addError(rule.key, "格式不正确");
    //     }
    // });

    return errors;
};

const getType = (rule: Rule) => {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
        rule.type = "pattern";
    }

    if (
        typeof rule.validator !== "function" &&
        (rule.type && !validators.hasOwnProperty(rule.type))
    ) {
        throw new Error("Unknown rule type");
    }
    return rule.type || "string";

};

const getValidationMethod = (rule: Rule) => {
    if (typeof rule.validator === "function") {
        return rule.validator;
    }
    const keys = Object.keys(rule);
    const messageIndex = keys.indexOf("message");

    if (messageIndex !== -1) {
        keys.splice(messageIndex, 1);
    }

    if (keys.length === 1 && keys[0] === "required") {
        return validators.required;
    }

    return validators[(rule.type) as string] || false;
};

export default Validator;