import * as React from "react";
import Layout from "../index";
import styled from "styled-components";

const { Header, Content, Footer, Aside } = Layout;

const StyleLayoutWrapper = styled.div`

    section{
        header {
            background: #7dbcea;
            color: #fff;
        }
        main {
            background: rgba(16, 142, 233, 1); 
            color: #fff; 
            min-height: 120px;
        }
        footer {
            background: #7dbcea;
            color: #fff;
        }
        aside {
            background: #3ba0e9; 
            color: #fff;
        }
    }

`;

const LayoutExample: React.FunctionComponent = () => {
    return (
        <div>
            <StyleLayoutWrapper>
                <h1>demo1</h1>
                <Layout>
                    <Header>header</Header>
                    <Content>content</Content>
                    <Footer>footer</Footer>
                </Layout>
            </StyleLayoutWrapper>
            <StyleLayoutWrapper>
                <h1>demo2</h1>
                <Layout>
                    <Header>header</Header>
                    <Layout>
                        <Aside>aside</Aside>
                        <Content>content</Content>
                    </Layout>
                    <Footer>footer</Footer>
                </Layout>
            </StyleLayoutWrapper>
            <StyleLayoutWrapper>
                <h1>demo3</h1>
                <Layout>
                    <Header>header</Header>
                    <Layout>
                        <Content>content</Content>
                        <Aside>aside</Aside>
                    </Layout>
                    <Footer>footer</Footer>
                </Layout>
            </StyleLayoutWrapper>
            <StyleLayoutWrapper>
                <h1>demo4</h1>
                <Layout>
                    <Aside>aside</Aside>
                    <Layout>
                        <Header>header</Header>
                        <Content>content</Content>
                        <Footer>footer</Footer>
                    </Layout>
                </Layout>
            </StyleLayoutWrapper>
        </div >
    );
};

export default LayoutExample;