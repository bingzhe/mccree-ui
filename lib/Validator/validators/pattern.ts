import rules from "../rule/";
import { isEmptyValue } from "../util";
// eslint-disable-next-line no-unused-vars
import { Rule } from "../index";

/**
 *  Validates a regular expression pattern.
 *
 *  Performs validation when a rule only contains
 *  a pattern property but is not declared as a string type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function pattern(rule: Rule, value: any, source: any, options: any) {
    console.log(123123123131);
    const errors: string[] = [];
    const validate = rule.required || (!rule.required && source.hasOwnProperty(rule.field));
    if (validate) {
        if (isEmptyValue(value, "string") && !rule.required) {
            return errors;
        }
        rules.required(rule, value, source, errors, options);
        if (!isEmptyValue(value, "string")) {
            rules.pattern(rule, value, source, errors, options);
        }
    }

    return errors;
}

export default pattern;
