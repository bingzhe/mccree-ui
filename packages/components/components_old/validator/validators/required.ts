import rules from "../rule/index";
import { Rule } from "../index";

const required = (rule: Rule, value: any, source: any, options: any) => {
    const errors: string[] = [];
    const type = Array.isArray(value) ? "array" : typeof value;
    rules.required(rule, value, source, errors, options, type);
    return errors;
};

export default required;