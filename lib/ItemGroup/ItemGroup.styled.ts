import { styled, th, variant, css } from "../styles/styled";
import Box from "../Box";
import { StyledItemWrapper } from "../Item/Item.styled";

export const StyledItemGroupTitleWrapper = styled.div`
    position: relative;
`;

export const StyledItemGroupTitleSuffixWrapper = styled.div<{ open: boolean }>`
    width: 24px;
    height: 24px;
    position: absolute;
    right: 12px;
    top: 50%;
    margin-top: -12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    transition: ${th.transition("navigation")};
    ${({ open }): string => `transform: rotate(${open ? 180 : 0}deg)`}
`;

export const StyledItemGroupItemWrapper = styled(Box)<{ level: number; float?: boolean }>`
    overflow: visible;
    box-shadow: ${th.shadow("3")};
    ${StyledItemWrapper} {
        ${variant({
        prop: "float",
        default: "false",
        variants: {
            true: css`
                padding-right: 40px;
            `,
            false: css`
                padding-left: ${({ level }: any): number => (level ? 40 + level * 12 : 0)}px;
            `
        }
    })}
    }
`;