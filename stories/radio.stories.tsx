import * as React from "react";
import { storiesOf } from "@storybook/react";

import Radio from "../components/radio/index";

storiesOf("Radio", module).add("Radio", () => {
    const renderDefault = () => {
        return (
            <>
                <h4>———— default ————</h4>
                <Radio>Radio</Radio>
                <Radio color="secondary">Radio</Radio>
                <Radio disabled>Radio</Radio>
                <Radio disabled defaultChecked>
                    Radio
                </Radio>
            </>
        );
    };

    const renderColor = () => {
        return (
            <>
                <h4>———— color ————</h4>

                <Radio />
                <Radio color="secondary" />
                <Radio color="info" />
                <Radio color="warning" />
                <Radio color="error" />
                <Radio color="success" />
            </>
        );
    };

    const renderGroup = () => {
        const handleChange = (e: any) => {
            console.log("checked=> ", e.target.value);
        };

        return (
            <>
                <h4>——— 单选组合 ————</h4>

                <Radio.Group onChange={handleChange}>
                    <Radio value="深圳">深圳</Radio>
                    <Radio value="西安">西安</Radio>
                    <Radio value="杭州">杭州</Radio>
                </Radio.Group>
            </>
        );
    };

    const renderRadioButton = () => {
        return (
            <>
                <h4>——按钮样式 ————</h4>

                <Radio.Button
                    onChange={(e) => {
                        console.log(e.target.checked);
                    }}
                >
                    Radio
                </Radio.Button>
            </>
        );
    };

    const renderGroupButton = () => {
        return (
            <>
                <h4>———— Group Button ————</h4>

                <Radio.Group
                    onChange={(e: any) => console.log(`checked=>`, e.target.value)}
                    defaultValue="西安"
                >
                    <Radio.Button value="深圳">深圳</Radio.Button>
                    <Radio.Button value="西安">西安</Radio.Button>
                    <Radio.Button value="杭州">杭州</Radio.Button>
                </Radio.Group>

                <div style={{ marginBottom: "10px" }} />

                <Radio.Group
                    onChange={(e: any) => console.log(`checked=>`, e.target.value)}
                    defaultValue="西安"
                >
                    <Radio.Button value="深圳" color="secondary">
                        深圳
                    </Radio.Button>
                    <Radio.Button value="西安" color="secondary">
                        西安
                    </Radio.Button>
                    <Radio.Button value="杭州" color="secondary">
                        杭州
                    </Radio.Button>
                </Radio.Group>
            </>
        );
    };

    return (
        <div className="page-wrapper">
            {renderDefault()}
            {renderColor()}
            {renderGroup()}
            {renderRadioButton()}
            {renderGroupButton()}
        </div>
    );
});
