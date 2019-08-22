import rules from "../rule/";
import { isEmptyValue } from "../util";
// eslint-disable-next-line no-unused-vars
import { Rule } from "../index";

/**
 *  Validates an array.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function array(rule: Rule, value: any, source: any, options: any) {
    const errors: string[] = [];
    const validate = rule.required || (!rule.required && source.hasOwnProperty(rule.field));
    if (validate) {
        if (isEmptyValue(value, "array") && !rule.required) {
            return errors;
        }
        rules.required(rule, value, source, errors, options, "array");
        if (!isEmptyValue(value, "array")) {
            rules.type(rule, value, source, errors, options);
            rules.range(rule, value, source, errors, options);
        }
    }
    console.log(errors);
    return errors;
}

export default array;
