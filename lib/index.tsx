import * as React from "react";
import * as ReactDOM from "react-dom";
// import Button from "./button/button";
import Icon from "./icon/index";

const fn: React.MouseEventHandler = (e) => {
    console.log('icon click');
}
ReactDOM.render(
    <div>
        <Icon name="wechat" className="qq" onClick={fn} />
    </div>
    , document.getElementById('root')
);