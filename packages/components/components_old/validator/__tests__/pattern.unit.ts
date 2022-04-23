import Validator from "../index";

describe("pattern", () => {
    it("works for non-required empty string", done => {
        const errors = Validator(
            { v: "" },
            {
                v: {
                    pattern: /^\d+$/
                }
            }
        );

        expect(errors.length).toBe(0);
        done();
    });

    it("work for non-required empty string with string regexp", done => {
        const errors = Validator(
            { v: "s" },
            {
                v: {
                    pattern: "^\\d+$"
                }
            }
        );

        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe("v value s does not match pattern ^\\d+$");
        done();
    });

    it("works for required empty string", done => {
        const errors = Validator(
            { v: "" },
            {
                v: {
                    pattern: /^\d+$/,
                    required: true
                }
            }
        );

        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe("v is required");
        done();
    });

    it("works for non-required null", done => {
        const errors = Validator(
            { v: null },
            {
                v: {
                    pattern: /^\d+$/,
                }
            }
        );

        expect(errors.length).toBe(0);
        done();
    });

    it("works for non-required null", done => {
        const errors = Validator(
            { v: undefined },
            {
                v: {
                    pattern: /^\d+$/,
                }
            }
        );

        expect(errors.length).toBe(0);
        done();
    });

    it("works", done => {
        const errors = Validator(
            { v: " " },
            {
                v: {
                    pattern: /^\d+$/,
                }
            }
        );

        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe("v value   does not match pattern /^\\d+$/");

        done();
    });

    it("works for RegExp with global flag", done => {
        const errors = Validator(
            { v: "globalflag" },
            {
                v: {
                    pattern: /global/g,
                }
            }
        );

        expect(errors.length).toBe(0);

        done();
    });
});