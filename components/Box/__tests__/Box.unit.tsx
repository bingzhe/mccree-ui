import * as React from "react";
import * as renderer from "react-test-renderer";

import { ThemeProvider, Box } from "../../index";
import "jest-styled-components";

describe("Box", () => {
    const theme = {};
    it("basic", () => {
        const component = renderer.create(
            <ThemeProvider theme={theme}>
                <Box>basic</Box>
            </ThemeProvider>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("as span", () => {
        const component = renderer.create(
            <ThemeProvider theme={theme}>
                <Box as="span">as span</Box>
            </ThemeProvider>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});