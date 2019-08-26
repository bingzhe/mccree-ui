import { css } from "../styles/styled";
import { deepMerge } from "../utils";

export interface Sizes {
    small?: any;
    medium?: any;
    large?: any;
}

const createSize = (sizes: Sizes) => {
    const defaultSizes = {
        small: {
            button: css`
                padding: 0 8px;
            `
        },
        medium: {
            button: css`
                padding: 3 12px;
            `,
            input: css`
                padding: 6px 12px;
            `
        },
        large: {
            button: css`
                padding: 8px 42px;
            `
        }
    };
    return deepMerge(defaultSizes, sizes);
};

export default createSize;