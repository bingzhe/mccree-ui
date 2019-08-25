import { grey, primary, error, black, white, Color } from "../colors/index";
import { deepMerge } from "../utils";

export interface Colors {
    grey?: Color;
    primary?: Color;
    error?: Color;
    white?: Color;
    black?: Color;
}

function createColor(colors: Colors): Colors {
    const defaultColors = {
        grey,
        primary,
        error,
        white,
        black,
    };
    return deepMerge(defaultColors, colors);
}

export default createColor;