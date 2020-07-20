import * as React from "react";
import { Checkbox } from "../../../components/index";

const CheckboxGroup = () => {
    const optionsExample1 = ["A", "B", "C"];
    const optionsExample2 = [
        { label: "深圳", value: "深圳" },
        { label: "西安", value: "西安" },
        { label: "杭州", value: "杭州", disabled: true }
    ];

    return (
        <div>
            <div>
                <Checkbox.Group
                    onChange={(v: string[]) => console.log(`checked=>`, v)}
                    options={optionsExample1}
                />
            </div>

            <div>
                <Checkbox.Group
                    onChange={(v: string[]) => console.log(`checked=>`, v)}
                    options={optionsExample2}
                />
            </div>
        </div>
    );
};

export default CheckboxGroup;
