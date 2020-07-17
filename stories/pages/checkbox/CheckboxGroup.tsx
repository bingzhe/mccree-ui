import * as React from "react";
import Checkbox from "../../../components/checkbox";

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

export default renderCheckGroup;
