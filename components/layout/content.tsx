import * as React from "react";
import styled from "styled-components";

const StyleContent = styled.main`
    flex: auto;
`;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props extends React.HtmlHTMLAttributes<HTMLElement> { }

const Content: React.FunctionComponent<Props> = (props) => {
    const { className, children, ...restProps } = props;

    return (
        <StyleContent className={className} {...restProps}>
            {children}
        </StyleContent>
    );
};

export default Content;