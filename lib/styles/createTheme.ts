import createColor, { Colors } from "./createColor";
import createTransition, { Transitions } from "./createTransition";
import createSize, { Sizes } from "./createSize";

export interface Theme {
    colors?: Colors;
    transitions?: Transitions;
    sizes?: Sizes;
}

function createTheme(theme: Theme): Theme {
    const {
        colors: colorsInput = {},
        transitions: transitionsInput = {},
        sizes: sizesInput = {},
    } = theme;

    const colors = createColor(colorsInput);
    const transitions = createTransition(transitionsInput);
    const sizes = createSize(sizesInput);

    return {
        colors,
        transitions,
        sizes
    };
}

export default createTheme;