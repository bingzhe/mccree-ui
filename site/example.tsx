import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import IconExample from "../lib/icon/demo/icon.example";
import ButtonExample from "../lib/button/demo/button.example";
import DialogExample from "../lib/dialog/demo/dialog.example";
import LayoutExample from "../lib/layout/demo/layout.example";
// import "../lib/button/index"

import TextExample from "./test";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    ul, li{
        list-style: none;
        margin: 0;
        padding: 0;
    }
`;

ReactDOM.render(
    <Router>
        <React.Fragment>
            <div>
                <header>
                    <div className="logo">
                        React-UI-Wheel
                    </div>
                </header>
                <div>
                    <aside>
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
                    </aside>
                    <main>
                        <Route path="/icon" component={IconExample} />
                        <Route path="/button" component={ButtonExample} />
                        <Route path="/dialog" component={DialogExample} />
                        <Route path="/layout" component={LayoutExample} />
                        <Route path="/text" component={TextExample} />
                    </main>
                </div>
            </div>
            <GlobalStyle />
        </React.Fragment>
    </Router>,
    document.querySelector("#root")
);