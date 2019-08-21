import rules from "../rule/";
import { isEmptyValue } from "../util";
// eslint-disable-next-line no-unused-vars
import { Rule } from "../index";

/**
 *  Validates a function.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function method(rule: Rule, value: any, source: any, options: any) {
    const errors: string[] = [];
    const validate = rule.required || (!rule.required && source.hasOwnProperty(rule.field));
    if (validate) {
        if (isEmptyValue(value) && !rule.required) {
            return errors;
        }
        rules.required(rule, value, source, errors, options);
        if (value !== undefined) {
            rules.type(rule, value, source, errors, options);
        }
    }
    return errors;
}

export default method;
