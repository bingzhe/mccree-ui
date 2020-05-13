import * as React from "react";
import { render } from "enzyme";
import toJson from "enzyme-to-json";

import Button from "../button";

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
            </>
        );


        expect(toJson(wrapper)).toMatchSnapshot();
    });
});