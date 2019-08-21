import * as util from "../util";
// eslint-disable-next-line no-unused-vars
import { Rule, Source, Options } from "../index";

/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function whitespace(rule: Rule, value: any, source: Source, errors: any, options: Options) {
    if (/^\s+$/.test(value) || value === "") {
        errors.push(util.format(options.messages.whitespace, rule.field));
    }
}

export default whitespace;
