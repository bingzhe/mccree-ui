import createColor, { Colors } from "./createColor";
import createTransition, { Transitions } from "./createTransition";

export interface Theme {
    colors?: Colors;
    transitions?: Transitions;
}

function createTheme(theme: Theme): Theme {
    const {
        colors: colorsInput = {},
        transitions: transitionsInput = {},
    } = theme;

    const colors = createColor(colorsInput);
    const transitions = createTransition(transitionsInput);

    return {
        colors,
        transitions
    };
}

export default createTheme;