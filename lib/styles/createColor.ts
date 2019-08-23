import { grey, primary, error, black, white, Color } from "../colors/index";

export interface Colors {
    grey?: Color;
    primary?: Color;
    error?: Color;
    white?: Color;
    black?: Color;
}

function createColor(color: Colors): Colors {
    const defaultColors = {
        grey,
        primary,
        error,
        white,
        black,
    };
    return defaultColors;
}

export default createColor;