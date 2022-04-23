import * as React from "react";
import { render, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Divider from "../index";

describe("Divider", () => {
    it("should render correctly", () => {
        const wrapper = render(<Divider />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("should work with align", () => {
        const wrapper = render(
            <>
                <Divider align="left">divider</Divider>
                <Divider align="right">divider</Divider>
                <Divider align="center">divider</Divider>
            </>
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("should work with type", () => {
        const wrapper = render(
            <>
                <Divider type="horizontal">divider</Divider>
                <Divider type="vertical" />
            </>
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("should work with color", () => {
        const wrapper = render(
            <>
                <Divider color="primary">divider</Divider>
                <Divider color="secondary">divider</Divider>
                <Divider color="success">divider</Divider>
                <Divider color="warning">divider</Divider>
                <Divider color="error">divider</Divider>
                <Divider color="info">divider</Divider>
            </>
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("should work with RGB HEX", () => {
        const wrapper = render(
            <>
                <Divider color="rgba(172,17,236,1)">divider</Divider>
                <Divider color="#1ED39A">divider</Divider>
            </>
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("should find mccree-divider classnames", () => {
        const wrapper = mount(<Divider color="rgba(172,17,236,1)">divider</Divider>);
        expect(wrapper.find(".mccree-divider").length).toBe(1);
    });
});
