import * as React from "react";
import { render, mount } from "enzyme";
import toJson from "enzyme-to-json";

import Button from "../Button";

describe("button", () => {
    it("render <Button/> component", () => {
        const wrapper = render(
            <>
                <Button>DEFAULT</Button>
                <Button type="primary">PRIMARY</Button>
                <Button type="secondary">SECONDARY</Button>
                <Button type="success" >SUCCESS</Button>
                <Button type="error" >ERROE</Button>
                <Button type="warning" >WARNING</Button>
                <Button type="info" >INFO</Button>
                <Button disabled>DISABLED</Button>
                <Button target="block" href="http://bingzhe.github.io/" type="primary">LINK</Button>

                <Button type="primary" loading>loading</Button>
                <Button type="primary" size="large">大</Button>
                <Button type="primary" size="medium">中</Button>
                <Button type="primary" size="small">小</Button>

                <Button type="primary" block>loading</Button>
                <Button type="primary" shape="circle">circle</Button>
                <Button type="primary" shape="round">loading</Button>
            </>
        );


        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("should find mccree-btn classnames", () => {
        const wrapper = mount(
            <>
                <Button>DEFAULT</Button>
                <Button type="primary">PRIMARY</Button>
                <Button type="secondary">SECONDARY</Button>
                <Button type="success" >SUCCESS</Button>
                <Button type="error" >ERROE</Button>
                <Button type="warning" >WARNING</Button>
                <Button type="info" >INFO</Button>
            </>
        );

        expect(wrapper.find(".mccree-btn").length).toBe(7);
    });

    it("should find type classnames", () => {
        const wrapper = mount(
            <>
                <Button>DEFAULT</Button>
                <Button type="primary">PRIMARY</Button>
                <Button type="secondary">SECONDARY</Button>
                <Button type="success" >SUCCESS</Button>
                <Button type="error" >ERROE</Button>
                <Button type="warning" >WARNING</Button>
                <Button type="info" >INFO</Button>
            </>
        );

        expect(wrapper.find(".mccree-btn-primary").length).toBe(1);
        expect(wrapper.find(".mccree-btn-secondary").length).toBe(1);
        expect(wrapper.find(".mccree-btn-success").length).toBe(1);
        expect(wrapper.find(".mccree-btn-error").length).toBe(1);
        expect(wrapper.find(".mccree-btn-warning").length).toBe(1);
        expect(wrapper.find(".mccree-btn-info").length).toBe(1);
    });

    it("should find variant classnames", () => {
        const wrapper = mount(
            <>
                <Button type="primary">PRIMARY</Button>
                <Button type="primary" variant="outline">PRIMARY</Button>
                <Button type="primary" variant="text">PRIMARY</Button>
            </>
        );

        expect(wrapper.find(".mccree-btn-contain").length).toBe(1);
        expect(wrapper.find(".mccree-btn-outline").length).toBe(1);
        expect(wrapper.find(".mccree-btn-text").length).toBe(1);
    });


    it("should can trigger click event", () => {
        const onClick = jest.fn();
        const wrapper = mount(
            <Button type="primary" onClick={onClick}>PRIMARY</Button>
        );
        wrapper.simulate("click");
        expect(onClick).toHaveBeenCalled();
    });

    it("should can not trigger click event when button is disabled", () => {
        const onClick = jest.fn();
        const wrapper = mount(
            <Button disabled type="primary" onClick={onClick}>PRIMARY</Button>
        );
        wrapper.simulate("click");
        expect(onClick).not.toHaveBeenCalled();
    });

    it("should can not trigger click event when button is loading", () => {
        const onClick = jest.fn();
        const wrapper = mount(
            <Button loading type="primary" onClick={onClick}>PRIMARY</Button>
        );
        wrapper.simulate("click");
        expect(onClick).not.toHaveBeenCalled();
    });
});