// import { deepFreeze } from "../_util/object"
// import { DefaultTheme } from 'styled-components'
import shadows from "./shadows";

export const primaryColor = "#1F74FF";
export const successColor = "#46C93A";
export const warningColor = "#FFBA00";
export const dangerColor = "#FF4757";

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