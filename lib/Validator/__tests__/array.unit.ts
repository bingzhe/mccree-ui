import Validator from "../index";

describe("array", () => {
    it("works for type", done => {
        const errors = Validator(
            { v: "" },
            {
                v: [
                    { type: "array" }
                ]
            }
        );
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe("v is not an array");
        done();
    });

    it("works for type and required", done => {
        const errors = Validator(
            { v: "" },
            {
                v: [
                    { type: "array", required: true }
                ]
            }
        );
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe("v is not an array");
        done();
    });

    it("works for none required", done => {
        const errors = Validator(
            { v: [] },
            {
                v: [
                    { type: "array" }
                ]
            }
        );
        expect(errors.length).toBe(0);
        done();
    });


    it("works for empty array", done => {
        const errors = Validator(
            { v: [] },
            {
                v: [
                    { type: "array", required: true }
                ]
            }
        );
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe("v is required");
        done();
    });

    it("works for undefined array", done => {
        const errors = Validator(
            { v: undefined },
            {
                v: [
                    { type: "array", required: true }
                ]
            }
        );
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe("v is required");
        done();
    });

    it("works for null array", done => {
        const errors = Validator(
            { v: null },
            {
                v: [
                    { type: "array", required: true }
                ]
            }
        );

        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe("v is required");
        done();
    });

    it("works for none empty", done => {
        const errors = Validator(
            { v: [1] },
            {
                v: [
                    { type: "array", required: true }
                ]
            }
        );
        expect(errors.length).toBe(0);
        done();
    });

    it("works for exactly array length err", done => {
        const errors = Validator(
            { v: [1] },
            {
                v: [
                    { type: "array", required: true, len: 5 }
                ]
            }
        );
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe("v must be exactly 5 in length");
        done();
    });

    it("works for exactly array length", done => {
        const errors = Validator(
            { v: [1, 1, 1, 1, 1] },
            {
                v: [
                    { type: "array", required: true, len: 5 }
                ]
            }
        );
        expect(errors.length).toBe(0);
        done();
    });

    it("works for array length less than", done => {
        const errors = Validator(
            { v: [1] },
            {
                v: [
                    { type: "array", required: true, min: 5 }
                ]
            }
        );
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe("v cannot be less than 5 in length");
        done();
    });

    it("works for array length greater than", done => {
        const errors = Validator(
            { v: [1, 1, 1, 1, 1] },
            {
                v: [
                    { type: "array", required: true, max: 6 }
                ]
            }
        );
        expect(errors.length).toBe(0);
        done();
    });

    it("works for array length between range", done => {
        const errors = Validator(
            { v: [1] },
            {
                v: [
                    { type: "array", required: true, min: 5, max: 8 }
                ]
            }
        );
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe("v must be between 5 and 8 in length");
        done();
    });
});