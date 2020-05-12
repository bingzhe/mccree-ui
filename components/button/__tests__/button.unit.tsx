// import * as renderer from "react-test-renderer";
import * as React from "react";
import Button from "../button";
import { render } from "enzyme";
import toJson from "enzyme-to-json";

describe("button", () => {
    it("render <Button/> component", () => {
        // const json = renderer.create(<Button />).toJSON();
        const wrapper = render(<Button>Default</Button>);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});