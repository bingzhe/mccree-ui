import * as React from "react";
import { storiesOf } from "@storybook/react";

import Checkbox from "../components/checkbox/index";
// import Icon from "../components/icon/index";
import "../components/checkbox/style/index";
import "../components/ripple-wrapper/style/index";

import "./styles/common.less";

storiesOf("实验室", module).add("Checkbox", () => {
    // const [checkedA, setCheckedA] = React.useState(false);

    // type ET = React.ChangeEvent<HTMLInputElement>;

    // const handleChange = (e: ET, type: string) => {
    //     switch (type) {
    //         case "A":
    //             setCheckedA(e.target.checked);
    //             break;
    //     }
    // };

    const a = ["a", "b", "c"];

    return (
        <div className="page-wrapper">
            {/* <Checkbox.Button checked={checkedA} onChange={(e) => handleChange(e, "A")}>
                button
            </Checkbox.Button> */}
            <br />
            <Checkbox.Group options={a} />
        </div>
    );
});
