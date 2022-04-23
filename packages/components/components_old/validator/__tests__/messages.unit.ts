import Validator from "../index";

describe("messages", () => {
    it("can use options.messages", done => {
        const messages = {
            required(f: string) {
                return `${f} required!`;
            },
        };

        const errors = Validator(
            {
                v: "",
                v2: "1"
            },
            {
                v: [{ required: true }],
                v2: [{ type: "array" }]
            },
            {
                messages: messages
            }
        );

        expect(errors.length).toBe(2);
        expect(errors[0].message).toBe("v required!");
        expect(errors[1].message).toBe("v2 is not an array");
        expect(Object.keys(messages).length).toBe(1);
        done();
    });

    it("message can be object", done => {
        const atom = {};
        const messages = {
            required: atom
        };

        const errors = Validator(
            { v: "" },
            {
                v: [
                    { required: true }
                ]
            },
            {
                messages,
            }
        );

        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe(atom);
        done();
    });
});