import Validator from "../index";

describe("string", () => {
    it("works for none require", done => {
        const errors = Validator(
            { v: "" },
            {
                v: [
                    { type: "string" }
                ]
            }
        );

        expect(errors.length).toBe(0);
        done();
    });

    it("works for empty string", done => {
        const errors = Validator(
            { v: "" },
            {
                v: [
                    { type: "string", required: true }
                ]
            }
        );

        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe("v is required");
        done();
    });

    it("works for undefined string", done => {
        const errors = Validator(
            { v: undefined },
            {
                v: [
                    { type: "string", required: true }
                ]
            }
        );

        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe("v is required");
        done();
    });

    it("works for null string", done => {
        const errors = Validator(
            { v: null },
            {
                v: [
                    { type: "string", required: true }
                ]
            }
        );

        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe("v is required");
        done();
    });

    it("works for message", done => {
        const errors = Validator(
            { v: " " },
            {
                v: [
                    { type: "string", required: true, message: "haha" }
                ]
            }
        );
        expect(errors.length).toBe(0);
        done();
    });

    it("works for whitespace empty", done => {
        const errors = Validator(
            { v: " " },
            {
                v: [
                    { type: "string", required: true, whitespace: true }
                ]
            }
        );
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe("v cannot be empty");
        done();
    });
});