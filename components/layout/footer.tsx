import * as React from "react";
import styled from "styled-components";

const StyleFooter = styled.footer`
    flex: 0 0 auto;
    height: 64px;
    line-height: 64px;
    padding: 0 50px;
`;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props extends React.HtmlHTMLAttributes<HTMLElement> { }

const Footer: React.FunctionComponent<Props> = (props) => {
    const { className, children, ...restProps } = props;

    return (
        <StyleFooter className={className} {...restProps}>
            {children}
        </StyleFooter>
    );
};

export default Footer;