import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import IconExample from "../lib/icon/demo/icon.example";
import ButtonExample from "../lib/button/demo/button.example";
import DialogExample from "../lib/dialog/demo/dialog.example";
import LayoutExample from "../lib/layout/demo/layout.example";
import RippleExample from "../lib/ripple/demo/ripple.example";

// import "../lib/button/index"
import PlayExample from "./play";

import Layout from "../lib/layout/index";
const { Aside, Header, Footer, Content } = Layout;

import logo from "./logo.jpg";
import {
    GlobalStyle,
    StyleLogoWrapper,
    StyleAsideUl
} from "./StyleSite";

ReactDOM.render(
    <Router>
        <React.Fragment>
            <Layout>
                <Header>
                    <StyleLogoWrapper>
                        <img src={logo} />
                    </StyleLogoWrapper>
                </Header>
                <Layout>
                    <Aside>
                        <StyleAsideUl>
                            <li>
                                <NavLink to="/icon">Icon</NavLink>
                            </li>
                            <li>
                                <NavLink to="/button">Button</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dialog">Dialog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/layout">Layout</NavLink>
                            </li>
                            <li>
                                <NavLink to="/ripple">ripple</NavLink>
                            </li>
                            <li>
                                <NavLink to="/play">play</NavLink>
                            </li>
                        </StyleAsideUl>
                    </Aside>
                    <Content>
                        <Route path="/icon" component={IconExample} />
                        <Route path="/button" component={ButtonExample} />
                        <Route path="/dialog" component={DialogExample} />
                        <Route path="/layout" component={LayoutExample} />
                        <Route path="/ripple" component={RippleExample} />
                        <Route path="/play" component={PlayExample} />
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