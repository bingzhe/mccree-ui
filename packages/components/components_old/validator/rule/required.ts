import * as util from "../util";
import { Rule } from "../index";

/**
 *  Rule for validating required fields.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function required(rule: Rule, value: any, source: any, errors: any, options: any, type?: any) {
    if (
        rule.required &&
    (!source.hasOwnProperty(rule.field) ||
      util.isEmptyValue(value, type || rule.type))
    ) {
        errors.push(util.format(options.messages.required, rule.field));
    }
}

export default required;
