import { styled, css, th } from "../styles/styled";

export const StyleWrapper = styled.span`
    display: inline-block;
    position: relative;
    min-width: 200px;
    font: inherit;
`;

const base = css`
    outline: none;
    font: inherit;
    width: 100%;
    border-radius: 2px;
    border: 1px solid;
    border-color: #eee;
`;

export const StyledInput = styled.input`
    ${base}
`;