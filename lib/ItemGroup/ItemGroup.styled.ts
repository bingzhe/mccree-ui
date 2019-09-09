import { styled, th } from "../styles/styled";

export const StyledItemGroupTitleWrapper = styled.div`
    position: relative;
`;

export const StyledItemGroupTitleSuffixWrapper = styled.div<{
    open: boolean;
}>`
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