import rules from "../rule/";
import { isEmptyValue } from "../util";
import { Rule } from "../index";

const ENUM = "enum";

/**
 *  Validates an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function enumerable(rule: Rule, value: any, source: any, options: any) {
    const errors: string[] = [];
    const validate = rule.required || (!rule.required && source.hasOwnProperty(rule.field));
    if (validate) {
        if (isEmptyValue(value) && !rule.required) {
            return errors;
        }
        rules.required(rule, value, source, errors, options);
        if (value) {
            rules[ENUM](rule, value, source, errors, options);
        }
    }
    return errors;
}

export default enumerable;
