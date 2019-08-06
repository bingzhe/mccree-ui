import * as React from "react";
import Layout from "../layout";
import Header from "../header";
import Content from "../content";
import Footer from "../footer";

const LayoutExample: React.FunctionComponent = () => {
    return (
        <div>
            <div>
                <h1>demo1</h1>
                <Layout style={{ height: "500px", border: "1px solid #ccc" }}>
                    <Header>header</Header>
                    <Content>content</Content>
                    <Footer>footer</Footer>
                </Layout>
            </div>
        </div>
    );
};

export default LayoutExample;