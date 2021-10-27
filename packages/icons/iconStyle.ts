import { updateCss } from "@mccree-ui/util/dom/dynamicCss";
import { useEffect } from "react";

export const iconStyles = `
.mccree-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    transition: transform 200ms ease;
}
.mccree-icon-spin {
    animation: mccree-spin 1.5s linear infinite;
}
@keyframes mccree-spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
`;

export const useInsertStyles = (styleStr: string = iconStyles) => {
    useEffect(() => {
        updateCss(styleStr);
    }, []);
};
