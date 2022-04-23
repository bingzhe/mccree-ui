/* eslint-disable max-params */
import * as React from "react";
import { warning } from "./../utils/warning";

const isColor = (color: string) => {
    const mccreeColor = ["primary", "secondary", "success", "warning", "error", "info"];
    return mccreeColor.includes(color);
};

const setVar = (propertyName: string, value: string, el: any) => {
    if (!el) {
        document.documentElement.style.setProperty(`--mccree-${propertyName}`, value);
    } else {
        if (el.nodeName !== "#comment") {
            el.style.setProperty(`--mccree-${propertyName}`, value);
        }
    }
};

const useSetColor = <T>(
    ref: React.RefObject<T>,
    colorName: string,
    color?: string,
    addClass?: boolean
) => {
    React.useEffect(() => {
        if (!color) return;
        if (ref.current === null) return;
        const isRGB = /^(rgb|rgba)/.test(color);
        const isRGBNumbers = /^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(
            color
        );
        const isHEX = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(color);
        let newColor;

        const el = (ref.current as unknown) as HTMLElement;

        if (isRGB || isHEX) {
            setVar(colorName, color, el);
            if (addClass) {
                el.classList.add("mccree-change-color");
            }
        } else if (isColor(color)) {
            const style = getComputedStyle(document.body);
            newColor = style.getPropertyValue(`--${color}-color`);
            setVar(colorName, newColor, el);
            if (addClass) {
                el.classList.add("mccree-change-color");
            }
        } else if (isRGBNumbers) {
            setVar(colorName, color, el);
            if (addClass) {
                el.classList.add("mccree-change-color");
            }
        } else {
            warning(false, "color", `'${color}' is invalid color value`);
        }
    }, [addClass, color, colorName, ref]);
};

export default useSetColor;
