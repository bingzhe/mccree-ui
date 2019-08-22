import Validator from "../index";
const required = true;

describe("required", () => {
    it("works for array required=true", done => {
        const errors = Validator(
            { v: [] },
            {
                v: [
                    { required, message: "no", }
                ]
            }
        );

        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe("no");
        done();
    });

    it("works for array required=true & custom message", done => {
        const errors = Validator(
            { v: [1] },
            {
                v: [
                    { required, message: "no", }
                ]
            }
        );

        expect(errors.length).toBe(0);
        done();
    });

    it("works for array required=false", done => {
        const errors = Validator(
            { v: [] },
            {
                v: [
                    { required: false }
                ]
            }
        );
        expect(errors.length).toBe(0);
        done();
    });

    it("works for string required=true", done => {
        const errors = Validator(
            { v: "" },
            {
                v: [
                    { required }
                ]
            }
        );
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe("v is required");
        done();
    });

    it("works for string required=true & custom message", done => {
        const errors = Validator(
            { v: "" },
            {
                v: [
                    { required, message: "no" }
                ]
            }
        );
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe("no");
        done();
    });

    it("works for string required=false", done => {
        const errors = Validator(
            { v: "" },
            {
                v: [
                    { required: false }
                ]
            }
        );
        expect(errors.length).toBe(0);
        done();
    });

    it("works for number required=true", done => {
        const errors = Validator(
            { v: 1 },
            {
                v: [
                    { required }
                ]
            }
        );
        expect(errors.length).toBe(0);
        done();
    });

    it("works for number required=false", done => {
        const errors = Validator(
            { v: 1 },
            {
                v: [
                    { required: false }
                ]
            }
        );
        expect(errors.length).toBe(0);
        done();
    });

    it("works for null required=true", done => {
        const errors = Validator(
            { v: null },
            {
                v: [
                    { required }
                ]
            }
        );
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe("v is required");
        done();
    });

    it("works for null required=false", done => {
        const errors = Validator(
            { v: null },
            {
                v: [
                    { required: false }
                ]
            }
        );
        expect(errors.length).toBe(0);
        done();
    });

    it("works for undefined required=true", done => {
        const errors = Validator(
            { v: undefined },
            {
                v: [
                    { required }
                ]
            }
        );
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe("v is required");
        done();
    });

    it("works for undefined required=false", done => {
        const errors = Validator(
            { v: undefined },
            {
                v: [
                    { required: false }
                ]
            }
        );
        expect(errors.length).toBe(0);
        done();
    });
});