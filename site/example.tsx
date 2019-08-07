import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import IconExample from "../lib/icon/demo/icon.example";
import ButtonExample from "../lib/button/demo/button.example";
import DialogExample from "../lib/dialog/demo/dialog.example";
import LayoutExample from "../lib/layout/demo/layout.example";
// import "../lib/button/index"

import TextExample from "./test";
import Layout from "../lib/layout/index";

import { createGlobalStyle } from "styled-components";
const { Aside, Header, Footer, Content } = Layout;

import logo from "./logo.jpg";

const GlobalStyle = createGlobalStyle`
    * { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *::before {
        box-sizing: border-box;
    }    
    *::after {
        box-sizing: border-box;
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight: normal;
    }
    ul, li{
        list-style: none;
        margin: 0;
        padding: 0;
    }
`;

ReactDOM.render(
    <Router>
        <React.Fragment>
            <Layout>
                <Header>
                    <div className="logo">
                        React-UI-Wheel
                        <img src={logo} alt="" />
                    </div>
                </Header>
                <Layout>
                    <Aside>
                        <h2>组件</h2>
                        <ul>
                            <li>
                                <Link to="/icon">Icon</Link>
                            </li>
                            <li>
                                <Link to="/button">Button</Link>
                            </li>
                            <li>
                                <Link to="/dialog">Dialog</Link>
                            </li>
                            <li>
                                <Link to="/layout">Layout</Link>
                            </li>
                            <li>
                                <Link to="/text">Text</Link>
                            </li>
                        </ul>
                    </Aside>
                    <Content>
                        <Route path="/icon" component={IconExample} />
                        <Route path="/button" component={ButtonExample} />
                        <Route path="/dialog" component={DialogExample} />
                        <Route path="/layout" component={LayoutExample} />
                        <Route path="/text" component={TextExample} />
                    </Content>
                </Layout>
                <Footer>
                    footer
                </Footer>
            </Layout>
            <GlobalStyle />
        </React.Fragment>
    </Router>,
    document.querySelector("#root")
);