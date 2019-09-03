import { standard, primary, error, black, white, Color } from "../colors/index";
import { deepMerge } from "../utils";

export interface Colors {
    standard?: Color;
    primary?: Color;
    error?: Color;
    white?: Color;
    black?: Color;
}

function createColor(colors: Colors): Colors {
    const defaultColors = {
        standard,
        primary,
        error,
        white,
        black,
    };
    return deepMerge(defaultColors, colors);
}

export default createColor;