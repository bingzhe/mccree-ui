// import { deepFreeze } from "../_util/object"
// import { DefaultTheme } from 'styled-components'
import shadows from "./shadows";

export const primaryColor = "#4285f4";
export const successColor = "#34a853";
// export const infoColor = "#3498db";
export const warningColor = "#fbbc05";
export const dangerColor = "#ea4335";

// const fontSizeBase = "14px"

// export const colors = {
//     primary,
//     success,
//     warning,
//     danger
// };

export const theme = {
    global: {
        shadows
    },
    button: {
        colors: {
            primary: primaryColor,
            success: successColor,
            warning: warningColor,
            danger: dangerColor
        }
    },
};