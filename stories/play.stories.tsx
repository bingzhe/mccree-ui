import * as React from "react";
import { storiesOf } from "@storybook/react";

import Checkbox from "../components/checkbox/index";
// import Icon from "../components/icon/index";
// import "../components/checkbox/style/index";
// import "../components/ripple-wrapper/style/index";

import "./styles/common.less";

storiesOf("实验室", module).add("Checkbox", () => {
    // const [checkedA, setCheckedA] = React.useState<boolean>(true);

    // const handleChange = (e: any) => {
    //     setCheckedA(e.target.checked);
    // };

    // const handleChange1 = (e: any) => {
    //     console.log(e.target.checked);
    // };
    // const [v, setV] = React.useState(["a"]);
    const a = ["a", "b", "c"];
    // console.log(setCheckedA);

    return (
        <div className="page-wrapper">
            {/* <Checkbox.Button checked={checkedA} onChange={handleChange}>
                button
            </Checkbox.Button> */}
            <br />
            <Checkbox.Group
                onChange={(v: any) => {
                    console.log(v);
                    // setV(v);
                }}
                options={a}
                // value={v}
            />

            {/* <Checkbox checked={checkedA} onChange={handleChange}>
                aaa
            </Checkbox> */}

            {/* <Checkbox onChange={handleChange1}>bbb</Checkbox> */}

            {/* <Checkbox.Group
                onChange={(v) => {
                    console.log(v);
                }}
            >
                <Checkbox.Button value="1">aaa</Checkbox.Button>
                <Checkbox.Button value="2">bbb</Checkbox.Button>
            </Checkbox.Group> */}

            <Checkbox.Group
                defaultValue={["1"]}
                onChange={(v) => {
                    console.log(v);
                }}
            >
                <Checkbox.Button value="1">aaa</Checkbox.Button>
                <Checkbox.Button value="2">bbb</Checkbox.Button>
            </Checkbox.Group>
        </div>
    );
});
