import * as React from "react";
import styled from "styled-components";

const StyleLayout = styled.div`
    display:flex;
`;

interface Props extends React.HtmlHTMLAttributes<HTMLElement> {

}

const layout: React.FunctionComponent<Props> = (props) => {
    const { className, children, ...restProps } = props;

    return (
        <StyleLayout className={className} {...restProps}>
            {children}
        </StyleLayout>
    );
};

export default layout;