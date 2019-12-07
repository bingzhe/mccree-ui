import createColor, { Colors } from "./createColor";
import createTransition, { Transitions } from "./createTransition";
import createSize, { Sizes } from "./createSize";
import createBreakpoint, { Breakpoints, defaultBreakpoints } from "./createBreakpoint";
import shadows, { Shadows } from "./createShadow";

export interface Theme {
    colors?: Colors;
    transitions?: Transitions;
    sizes?: Sizes;
    breakpoints?: Breakpoints;
    shadows?: Shadows;
}

function createTheme(theme: Theme): Theme {
    const {
        colors: colorsInput = {},
        transitions: transitionsInput = {},
        sizes: sizesInput = {},
        breakpoints: breakpointsInput = defaultBreakpoints,
        shadows: shadowsInput,
    } = theme;

    const colors = createColor(colorsInput);
    const transitions = createTransition(transitionsInput);
    const sizes = createSize(sizesInput);
    const breakpoints = createBreakpoint(breakpointsInput);

    return {
        shadows: shadowsInput || shadows,
        colors,
        transitions,
        sizes,
        breakpoints
    };
}

export default createTheme;