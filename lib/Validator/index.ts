import validators from "./validators/index";
import { deepMerge } from "./util";
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
    whitespace?: boolean;
    validator?: (rule: any, value: any, source: any, options: Options) => string[];
}

interface Rules {
    [K: string]: Array<Rule>;
}

export interface Error {
    message: string;
    filed: string;
}
export type Errors = Array<Error>;

// export interface Errors {
//     [K: string]: string[];
// }

export interface Options {
    messages?: any;
}


const Validator = (source: Source, rules: Rules, o: Options = {}): Errors => {

    const errors: any = [];
    const options = o;

    // console.log(source);

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
            // if (typeof tempError === "string" || tempError.message) {
            //     tempError = [tempError];
            // }
            // console.log("tempError", tempError);
            if (Array.isArray(tempError) && tempError.length) {
                if (rule.message) {
                    tempError = [rule.message];
                }
                // 将字符串转化一下成对象形式
                tempError = tempError.map(complementError(rule));
                errors.push(...tempError);
                // break;
                return;
            }

        });
    });

    // console.log("errors", errors);
    return errors;
};


export const complementError = (rule: Rule) => {
    return (oe: any) => {
        if (oe && oe.message) {
            oe.field = oe.field || rule.field;
            return oe;
        }
        return {
            message: typeof oe === "function" ? oe() : oe,
            field: oe.field || rule.field
        };
    };
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

    // console.log("keys", keys);
    const messageIndex = keys.indexOf("message");

    if (messageIndex !== -1) {
        keys.splice(messageIndex, 1);
    }


    if (keys.length === 1 && keys[0] === "required") {
        return validators.required;
    }

    type ValidatorsType = "string" | "method" | "number" | "boolean" | "regexp" | "integer" | "float" | "array" | "object" | "enum" | "pattern" | "date" | "url" | "hex" | "email" | "required"
    return validators[getType(rule) as ValidatorsType] || false;
};

export default Validator;