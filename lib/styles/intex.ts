import createColor, { Colors } from "./createColor";

export interface Theme {
    colors?: Colors;
}

function createTheme(theme: Theme): Theme {
    const {
        colors: colorsInput = {}
    } = theme;

    const colors = createColor(colorsInput);

    return {
        colors
    };
}

export default createTheme;