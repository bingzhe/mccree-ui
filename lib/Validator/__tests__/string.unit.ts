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
});