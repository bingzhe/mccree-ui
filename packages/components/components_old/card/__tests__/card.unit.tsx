import * as React from "react";
import { render, mount } from "enzyme";
import toJson from "enzyme-to-json";

import Card from "../index";

describe("Card", () => {
    it("should render correctly", () => {
        const wrapper = render(
            <>
                <Card>xx</Card>
                <Card variant="outlined">xx</Card>
                <Card shadow>xx</Card>
                <Card hoverable>xx</Card>
                <Card type="primary">xx</Card>
                <Card type="secondary">xx</Card>
                <Card type="success">xx</Card>
                <Card type="info">xx</Card>
                <Card type="warning">xx</Card>
                <Card type="error">xx</Card>
            </>
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    it("should render Card.Footer/Card.Actions/Card.Content correctly", () => {
        const wrapper = render(
            <>
                <Card>
                    <Card.Content>XX</Card.Content>
                    <Card.Footer>YY</Card.Footer>
                </Card>
                <Card>
                    <Card.Content>XX</Card.Content>
                    <Card.Actions>YY</Card.Actions>
                </Card>
            </>
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    it("shoulid find mccree-card classnames", () => {
        const wrapper = mount(<Card>xx</Card>);
        expect(wrapper.find(".mccree-card").length).toBe(1);
    });
    it("shoulid find mccree-card-hoverable classnames", () => {
        const wrapper = mount(<Card hoverable>xx</Card>);
        expect(wrapper.find(".mccree-card-hoverable").length).toBe(1);
    });
    it("shoulid find mccree-card-shadow classnames", () => {
        const wrapper = mount(<Card shadow>xx</Card>);
        expect(wrapper.find(".mccree-card-shadow").length).toBe(1);
    });
    it("shoulid find mccree-card-outlined classnames", () => {
        const wrapper = mount(<Card variant="outlined">xx</Card>);
        expect(wrapper.find(".mccree-card-outlined").length).toBe(1);
    });
});
