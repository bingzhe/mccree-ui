import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import IconExample from "../lib/icon/demo/icon.example";
import ButtonExample from "../lib/button/demo/button.example";
import DialogExample from "../lib/dialog/demo/dialog.example";
// import "../lib/button/index"

ReactDOM.render(<Router>
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
                </ul>
            </aside>
            <main>
                <Route path="/icon" component={IconExample} />
                <Route path="/button" component={ButtonExample} />
                <Route path="/dialog" component={DialogExample} />
            </main>
        </div>
    </div>
</Router>, document.querySelector("#root"));