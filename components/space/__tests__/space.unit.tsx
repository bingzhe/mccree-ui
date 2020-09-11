import * as React from "react";
import { render, mount } from "enzyme";
import toJson from "enzyme-to-json";

import Space from "../index";

describe("Space", () => {
    it("should render width empty children", () => {
        const wrapper = mount(<Space />);

        expect(wrapper.instance()).toBe(null);
    });

    it("should render width customize size", () => {
        const wrapper = mount(
            <Space size={10}>
                <span>1</span>
                <span>2</span>
            </Space>
        );

        expect((wrapper.find("div.mccree-space-item").at(0) as any).prop("style").marginRight).toBe(
            10
        );
        expect(
            (wrapper.find("div.mccree-space-item").at(1) as any).prop("style").marginRight
        ).toBeUndefined();
    });

    it("should render correct with children", () => {
        const wrapper = render(
            <Space>
                text1<span>text1</span>
                text3
            </Space>
        );

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
