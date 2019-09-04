import createColor, { Colors } from "./createColor";
import createTransition, { Transitions } from "./createTransition";
import createSize, { Sizes } from "./createSize";
import createBreakpoint, { Breakpoints, defaultBreakpoints } from "./createBreakpoint";

export interface Theme {
    colors?: Colors;
    transitions?: Transitions;
    sizes?: Sizes;
    breakpoints?: Breakpoints;
}

function createTheme(theme: Theme): Theme {
    const {
        colors: colorsInput = {},
        transitions: transitionsInput = {},
        sizes: sizesInput = {},
        breakpoints: breakpointsInput = defaultBreakpoints,
    } = theme;

    const colors = createColor(colorsInput);
    const transitions = createTransition(transitionsInput);
    const sizes = createSize(sizesInput);
    const breakpoints = createBreakpoint(breakpointsInput);

    return {
        colors,
        transitions,
        sizes,
        breakpoints
    };
}

export default createTheme;