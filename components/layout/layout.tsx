import * as React from "react";
import styled from "styled-components";
import Aside from "./aside";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";


interface Props extends React.HtmlHTMLAttributes<HTMLElement> {
    children: React.ReactElement | Array<React.ReactElement>;
    hasAside?: boolean;
}


interface LayoutInterface<Props> extends React.FunctionComponent<Props> {
    Aside: React.FunctionComponent<React.HtmlHTMLAttributes<HTMLElement>>;
    Header: React.FunctionComponent<React.HtmlHTMLAttributes<HTMLElement>>;
    Content: React.FunctionComponent<React.HtmlHTMLAttributes<HTMLElement>>;
    Footer: React.FunctionComponent<React.HtmlHTMLAttributes<HTMLElement>>;
}

const StyleLayout = styled.section<Props>`
    display:flex;
    flex: auto;
    flex-direction: ${props => (props.hasAside ? "row" : "column")};
`;

const Layout: LayoutInterface<Props> = (props) => {
    const { className, ...restProps } = props;
    const children = props.children as Array<React.ReactElement>;
    const hasAside = "length" in children &&
        children.reduce((result, node) => result || node.type === Aside, false);

    return (
        <StyleLayout className={className} {...restProps} hasAside={hasAside}>
            {children}
        </StyleLayout>
    );
};

Layout.Aside = Aside;
Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;

export default Layout;