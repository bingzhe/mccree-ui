import * as React from "react";
import { storiesOf } from "@storybook/react";

import Checkbox from "../components/checkbox/index";
// import Icon from "../components/icon/index";
import "../components/checkbox/style/index";
import "../components/ripple-wrapper/style/index";

import "./styles/common.less";

storiesOf("Checkbox", module).add("Checkbox", () => {
    const [checkedA, setCheckedA] = React.useState(false);
    const [checkedB, setCheckedB] = React.useState(false);
    const [checkedC, setCheckedC] = React.useState(false);
    const [checkedD, setCheckedD] = React.useState(false);
    const [checkedE, setCheckedE] = React.useState(false);
    const [checkedF, setCheckedF] = React.useState(false);
    const [checkedG, setCheckedG] = React.useState(false);
    const [checkedH, setCheckedH] = React.useState(false);
    const [checkedJ, setCheckedJ] = React.useState(false);

    type ET = React.ChangeEvent<HTMLInputElement>;

    const handleChange = (e: ET, type: string) => {
        switch (type) {
            case "A":
                setCheckedA(e.target.checked);
                break;
            case "B":
                setCheckedB(e.target.checked);
                break;
            case "C":
                setCheckedC(e.target.checked);
                break;
            case "D":
                setCheckedD(e.target.checked);
                break;
            case "E":
                setCheckedE(e.target.checked);
                break;
            case "F":
                setCheckedF(e.target.checked);
                break;
            case "G":
                setCheckedG(e.target.checked);
                break;
            case "H":
                setCheckedH(e.target.checked);
                break;
            case "J":
                setCheckedJ(e.target.checked);
                break;
        }
    };

    return (
        <div className="page-wrapper">
            <h4>———— Default ————</h4>

            <Checkbox checked={checkedA} onChange={(e) => handleChange(e, "A")} />
            <Checkbox indeterminate checked={checkedB} onChange={(e) => handleChange(e, "B")} />
            <Checkbox disabled checked={checkedC} onChange={(e) => handleChange(e, "C")} />
            <Checkbox
                indeterminate
                disabled
                checked={checkedC}
                onChange={(e) => handleChange(e, "C")}
            />

            <h4>———— Color ————</h4>

            <Checkbox checked={checkedD} onChange={(e) => handleChange(e, "D")}>
                Checkbox
            </Checkbox>
            <Checkbox color="secondary" checked={checkedE} onChange={(e) => handleChange(e, "E")}>
                Checkbox
            </Checkbox>
            <Checkbox color="success" checked={checkedF} onChange={(e) => handleChange(e, "F")}>
                Checkbox
            </Checkbox>
            <Checkbox color="warning" checked={checkedG} onChange={(e) => handleChange(e, "G")}>
                Checkbox
            </Checkbox>
            <Checkbox color="error" checked={checkedH} onChange={(e) => handleChange(e, "H")}>
                Checkbox
            </Checkbox>
            <Checkbox color="info" checked={checkedJ} onChange={(e) => handleChange(e, "J")}>
                Checkbox
            </Checkbox>

            <h4>———— Button ————</h4>
            <Checkbox.Button checked={checkedD} onChange={(e) => handleChange(e, "D")}>
                Button
            </Checkbox.Button>
            <Checkbox.Button
                color="secondary"
                checked={checkedF}
                onChange={(e) => handleChange(e, "F")}
            >
                Button
            </Checkbox.Button>
        </div>
    );
});
