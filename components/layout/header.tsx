import * as React from "react";
import styled from "styled-components";

const StyleHeader = styled.header`
    flex: 0 0 auto;
    min-height: 64px;
`;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props extends React.HtmlHTMLAttributes<HTMLElement> { }

const Header: React.FunctionComponent<Props> = (props) => {
    const { className, children, ...restProps } = props;

    return (
        <StyleHeader className={className} {...restProps}>
            {children}
        </StyleHeader>
    );
};

export default Header;