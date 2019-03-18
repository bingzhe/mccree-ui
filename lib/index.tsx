import React from "react";
import ReactDOM from "react-dom";
// import Button from "./button/button";
import Icon from "./icon/index";

const fn: React.MouseEventHandler = (e) => {
    console.log('icon click');
    console.log(e);
    console.log(e.currentTarget);
    console.log(e.target);
}
ReactDOM.render(
    <div>
        <Icon name="wechat" className="qq" onClick={fn} />
    </div>
    , document.getElementById('root')
);