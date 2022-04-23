import * as React from "react";
import { render, mount } from "enzyme";
import toJson from "enzyme-to-json";

import Grid from "../index";

describe("Grid", () => {
    it("should render Grid", () => {
        const wrapper = render(<Grid span={12} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    it("should render Grid.Container", () => {
        const wrapper = render(<Grid.Container />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    it("should work correct when gutter is object", () => {
        const wrapper = mount(<Grid.Container gutter={{ xs: 20 }} />);
        expect(wrapper.find("div").prop("style")).toEqual({
            marginLeft: -10,
            marginRight: -10
        });
    });
    it("should work currect when gutter is array", () => {
        const wrapper = mount(<Grid.Container gutter={[16, 20]} />);
        expect(wrapper.find("div").prop("style")).toEqual({
            marginLeft: -8,
            marginRight: -8,
            marginTop: -10,
            marginBottom: 10
        });
    });
});
