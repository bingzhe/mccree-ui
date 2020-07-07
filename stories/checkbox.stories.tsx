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
    // const [checkedJ, setCheckedJ] = React.useState(false);

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
                // setCheckedJ(e.target.checked);
                break;
        }
    };

    const renderCheckGroup = () => {
        const optionsExample1 = ["A", "B", "C"];
        const optionsExample2 = [
            { label: "深圳", value: "深圳" },
            { label: "西安", value: "西安" },
            { label: "杭州", value: "杭州" }
        ];

        return (
            <>
                <h4>———— Group ————</h4>
                <Checkbox.Group
                    onChange={(v: any) => console.log(`checked=>`, v)}
                    options={optionsExample1}
                />
                <br />
                <Checkbox.Group
                    onChange={(v: any) => console.log(`checked=>`, v)}
                    options={optionsExample2}
                />
            </>
        );
    };

    const renderAllCheckGroup = () => {
        const options = ["深圳", "西安", "杭州"];
        const defaultChecked = ["西安"];

        const [checkList, setCheckList] = React.useState(defaultChecked);
        const [indeterminate, setIndeterminate] = React.useState(true);
        const [checkAll, setCheckAll] = React.useState(true);

        const handleCheckAllChange = (e: ET) => {
            setCheckAll(e.target.checked);
            setCheckList(e.target.checked ? options : []);
            setIndeterminate(false);
        };

        const handleGroupChange = (v: any) => {
            setCheckList(v);
            setIndeterminate(!!v.length && v.length < options.length);
            setCheckAll(v.length !== 0);
        };

        React.useEffect(() => {
            console.log("checked=>", checkList);
        });

        return (
            <>
                <h4>———— 全选 ————</h4>

                <Checkbox
                    color="primary"
                    checked={checkAll}
                    onChange={handleCheckAllChange}
                    indeterminate={indeterminate}
                >
                    Check All
                </Checkbox>
                <br />
                <Checkbox.Group
                    onChange={handleGroupChange}
                    options={options}
                    value={checkList}
                    defaultValue={defaultChecked}
                />
            </>
        );
    };

    const renderCheckGroupButton = () => {
        return (
            <>
                <h4>———— Group Button ————</h4>
                <Checkbox.Group
                    onChange={(v: any) => console.log(`checked=>`, v)}
                    defaultValue={["西安"]}
                >
                    <Checkbox.Button value="深圳">深圳</Checkbox.Button>
                    <Checkbox.Button value="西安">西安</Checkbox.Button>
                    <Checkbox.Button value="杭州">杭州</Checkbox.Button>
                </Checkbox.Group>

                <div style={{ marginBottom: "10px" }} />

                <Checkbox.Group
                    onChange={(v: any) => console.log(`checked=>`, v)}
                    defaultValue={["西安"]}
                >
                    <Checkbox.Button value="深圳" color="secondary">
                        深圳
                    </Checkbox.Button>
                    <Checkbox.Button value="西安" color="secondary">
                        西安
                    </Checkbox.Button>
                    <Checkbox.Button value="杭州" color="secondary">
                        杭州
                    </Checkbox.Button>
                </Checkbox.Group>
            </>
        );
    };

    return (
        <div className="page-wrapper">
            <h4>———— Default ————</h4>

            <Checkbox defaultChecked={true} onChange={(e) => console.log(e.target.checked)} />

            <Checkbox checked={checkedA} onChange={(e) => handleChange(e, "A")} />
            <Checkbox indeterminate checked={checkedB} onChange={(e) => handleChange(e, "B")} />
            <Checkbox disabled checked={checkedC} onChange={(e) => handleChange(e, "C")} />
            <Checkbox
                indeterminate
                disabled
                checked={checkedC}
                onChange={(e) => handleChange(e, "C")}
            />

            <h4>———— 受控组件 ————</h4>
            <Checkbox checked={checkedA} onChange={(e) => handleChange(e, "A")} />

            <h4>———— 非受控组件 ————</h4>
            <Checkbox />

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
            <Checkbox color="info" onChange={(e) => console.log(e.target.checked)}>
                Checkbox
            </Checkbox>

            <h4>———— Button ————</h4>
            <Checkbox.Button
                checked={checkedD}
                onChange={(e) => handleChange(e, "D")}
                style={{ marginRight: "10px" }}
            >
                Button
            </Checkbox.Button>
            <Checkbox.Button
                color="secondary"
                checked={checkedF}
                onChange={(e) => handleChange(e, "F")}
            >
                Button
            </Checkbox.Button>

            {renderCheckGroup()}
            {renderAllCheckGroup()}
            {renderCheckGroupButton()}
        </div>
    );
});
