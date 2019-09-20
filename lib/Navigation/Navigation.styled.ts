import { styled, th, variant, css } from "../styles/styled";
import { NavigationProps } from "./Navigation.type";
import Box from "../Box";

export const StyledNavigationWrapper = styled(Box).attrs((props) => ({
    // eslint-disable-next-line no-useless-call
    backgroundColor: th.color("standard.light2").call(undefined, props)
})) <NavigationProps>`
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    transition: ${th.transition("navigation")}

    ${variant({
        prop: "horizontal",
        variants: {
            true: css`
                max-height: 40px;
                flex-direction: row;
            `,
            false: css`
                flex-direction: column;
            `
        }
    })}

    ${variant({
        prop: "expanded",
        variants: {
            true: css`
                max-width: ${({ horizontal }: NavigationProps) => (horizontal ? "" : "260px")}
            `,
            false: css`
                max-width: ${({ horizontal }: NavigationProps) => (horizontal ? "" : "44px")}
            `
        }
    })}
`;

export const StyledHeader = styled(Box) <NavigationProps>`
    display: flex;
    ${variant({
        prop: "horizontal",
        variants: {
            true: css`
                flex-direction: row;
            `,
            false: css`
                flex-direction: column;
            `
        }
    })}
`;

export const StyledContent = styled(Box) <NavigationProps>`
    display: flex;
    flex: 1;

    ${variant({
        prop: "horizontal",
        variants: {
            true: css`
                flex-direction: row;
                overflow: hidden;
            `,
            false: css`
                flex-direction: column;
                overflow-x: hidden;
                overflow-y: auto;
            `
        }
    })}
`;

export const StyledFooter = styled(Box) <NavigationProps>`
    display: flex;
    ${variant({
        prop: "horizontal",
        variants: {
            true: css`
                flex-direction: row;
            `,
            false: css`
                flex-direction: column;
            `
        }
    })}
`;