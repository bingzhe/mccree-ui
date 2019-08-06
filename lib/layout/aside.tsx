import * as React from "react";
import styled from "styled-components";

const StyleAside = styled.aside`
    width: 200px;
`;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props extends React.HtmlHTMLAttributes<HTMLElement> { }

const Aside: React.FunctionComponent<Props> = (props) => {
    const { className, children, ...restProps } = props;

    return (
        <StyleAside className={className} {...restProps}>
            {children}
        </StyleAside>
    );
};

export default Aside;