import validators from "./validators/index";
import { deepMerge, complementError } from "./util";
import { newMessages } from "./message";

export interface Source {
    [k: string]: any;
}

export interface Rule {
    type?: string;
    field?: string;
    required?: boolean;
    min?: number;
    max?: number;
    len?: number;
    enum?: Array<any>;
    pattern?: RegExp;
    regular?: RegExp;
    message?: string;
    validator?: (rule: any, value: any, source: any, options: Options) => void;
}

interface Rules {
    [K: string]: Array<Rule>;
}

export interface Errors {
    [K: string]: string[];
}

interface SeriesItem {
    rule: Rule;
    value: any;
    source: Source;
    field: string;
}

export interface Options {
    messages?: any;
}


const Validator = (source: Source, rules: Rules, o: Options = {}): Errors => {

    const errors: any = [];
    const options = o;

    if (options.messages) {
        const messages = newMessages();
        deepMerge(messages, options.messages);
        options.messages = messages;
    } else {
        options.messages = newMessages();
    }

    const keys = Object.keys(rules);
    let arr: Array<Rule>;
    let value: string;


    keys.forEach(z => {
        arr = rules[z];
        value = source[z];

        arr.forEach(r => {
            let rule = r;
            rule.validator = getValidationMethod(rule);
            rule.field = z;
            rule.type = getType(rule);

            if (!rule.validator) {
                return;
            }

            let tempError = rule.validator(rule, value, source, options);

            // 直接返回string或者new Error('xxx')形式
            if (typeof tempError === "string" || tempError.message) {
                tempError = [tempError];
            }
            if (Array.isArray(tempError) && tempError.length) {
                if (rule.message) {
                    tempError = [].concat(rule.message);
                }
                // 将字符串转化一下成对象形式
                tempError = tempError.map(complementError(rule));
                errors.push(...tempError);
                // break;
                return;
            }

            console.log(tempError);
        });
    });

    console.log("errors", errors);
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

    console.log("keys", keys);
    const messageIndex = keys.indexOf("message");

    if (messageIndex !== -1) {
        keys.splice(messageIndex, 1);
    }


    if (keys.length === 1 && keys[0] === "required") {

        console.log(11111111111);
        console.log(validators);
        return validators.required;
    }

    return validators[(rule.type) as string] || false;
};

export default Validator;