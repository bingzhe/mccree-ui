import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import IconExample from "../lib/icon/demo/icon.example";
import ButtonExample from "../lib/button/demo/button.example";
import DialogExample from "../lib/dialog/demo/dialog.example";
import LayoutExample from "../lib/layout/demo/layout.example";
import RippleExample from "../lib/ripple/demo/ripple.example";
import FormExample from "../lib/form/demo/form.example";
import InputExample from "../lib/input/demo/input.example";
import { ThemeProvider, Normalize } from "../lib/index";

import BoxExample from "./docs/components/Box/Box";
import ItemExample from "./docs/components/Item/Item";
import ItemGroupExample from "./docs/components/ItemGroup/ItemGroup";
import ColorExample from "./docs/components/Color/Color";
import TransitionExample from "./docs/components/Transition/Transition";
import CheckboxExample from "./docs/components/Checkbox/Checkbox";
import NavigationExample from "./docs/components/Navigation/Navigation";

// import "../lib/button/index"
import PlayExample from "./play";

import Layout from "../lib/layout/index";
const { Aside, Header, Footer, Content } = Layout;

// import logo from "./logo.jpg";

import {
    GlobalStyle,
    StyleLogoWrapper,
    StyleAsideUl
} from "./StyleSite";

const theme = {};

ReactDOM.render(
    <Router>
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <Layout style={{ padding: "3.6rem 3rem", height: "100vh" }}>
                    <Header>
                        <StyleLogoWrapper>
                            {/* <img src={logo} /> */}
                            <div style={{ fontSize: "34px" }}>React UI</div>
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
                                <li>
                                    <NavLink to="/form">form</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/input">Input</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/color">Color</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/box">Box</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/item">Item</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/itemgroup">ItemGroup</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/transition">Transition</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/checkbox">Checkbox</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/navigation">Navigation</NavLink>
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
                            <Route path="/form" component={FormExample} />
                            <Route path="/input" component={InputExample} />
                            <Route path="/color" component={ColorExample} />
                            <Route path="/box" component={BoxExample} />
                            <Route path="/item" component={ItemExample} />
                            <Route path="/itemgroup" component={ItemGroupExample} />
                            <Route path="/transition" component={TransitionExample} />
                            <Route path="/checkbox" component={CheckboxExample} />
                            <Route path="/navigation" component={NavigationExample} />
                        </Content>
                    </Layout>
                    <Footer>
                        footer
                    </Footer>
                </Layout>
            </ThemeProvider>
            <Normalize />
            <GlobalStyle />
        </React.Fragment>
    </Router>,
    document.querySelector("#root")
);