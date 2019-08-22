import Validator from "../index";

describe("enum", () => {
    it("value must be one of 1,2,3", done => {
        const errors = Validator(
            { v: 1 },
            {
                v: [
                    { type: "enum", enum: [1, 2, 3] }
                ]
            }
        );
        expect(errors.length).toBe(0);
        done();
    });

    it("value must be one of 1,2,3 err", done => {
        const errors = Validator(
            { v: 4 },
            {
                v: [
                    { type: "enum", enum: [1, 2, 3] }
                ]
            }
        );
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe("v must be one of 1, 2, 3");
        done();
    });
});