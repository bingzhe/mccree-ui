import classes from "../classes";

describe("classes", () => {
    it("接受 0 个 className", () => {
        const result = classes();
        expect(result).toEqual("");
    });
    it("接受 1 个 className", () => {
        const result = classes("a");
        expect(result).toEqual("a");
    });
    it("接受 2 个 className", () => {
        const result = classes("a", "b");
        expect(result).toEqual("a b");
    });
    it("接受 undefined 结果不会出现 undefined", () => {
        const result = classes("a", undefined);
        expect(result).toEqual("a");
    });
    it("接受各种奇怪的值", () => {
        const result = classes("a", undefined, null, "");
        expect(result).toEqual("a");
    });
    it("接受中文", () => {
        const result = classes("a", "中文");
        expect(result).toEqual("a 中文");
    });
});