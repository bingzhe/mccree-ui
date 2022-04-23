import Validator from "../index";

describe("number", () => {
    it("works", done => {
        const errors = Validator(
            { v: "1" },
            { v: { type: "number" }}
        );

        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe("v is not a number");
        done();
    });

    it("works for no-requred", done => {
        const errors = Validator(
            { v: undefined },
            { v: { type: "number" }}
        );

        expect(errors.length).toBe(0);
        done();
    });

    it("works for no-required in case of empty string", done => {
        const errors = Validator(
            { v: "" },
            { v: { type: "number" }}
        );

        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe("v is not a number");
        done();
    });

    it("works for required", done => {
        const errors = Validator(
            { v: undefined },
            { v: { type: "number", required: true }}
        );

        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe("v is required");
        done();
    });
});