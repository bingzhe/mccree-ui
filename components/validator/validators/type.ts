import rules from "../rule/";
import { isEmptyValue } from "../util";
import { Rule } from "../index";

function type(rule: Rule, value: any, source: any, options: any) {
    const ruleType = rule.type;
    const errors: string[] = [];
    const validate = rule.required || (!rule.required && source.hasOwnProperty(rule.field));
    if (validate) {
        if (isEmptyValue(value, ruleType) && !rule.required) {
            return errors;
        }
        rules.required(rule, value, source, errors, options, ruleType);
        if (!isEmptyValue(value, ruleType)) {
            rules.type(rule, value, source, errors, options);
        }
    }
    return errors;
}

export default type;
