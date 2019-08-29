import { styled, th } from "../styles/styled";

export const StyledItemWrapper = styled.div`
    position: relative;
    cursor: pointer;
    text-decoration: none;
    min-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 20px;
    transition: ${th("transitions.navigation")};
    color: inherit;
`;