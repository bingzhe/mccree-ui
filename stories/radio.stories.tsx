import * as React from "react";
import { storiesOf } from "@storybook/react";

import Radio from "../components/radio/index";
import "../components/radio/style/index";

import "./styles/common.less";

storiesOf("Radio", module).add("Radio", () => {
    const renderDefault = () => {
        return (
            <>
                <h4>———— default ————</h4>
                <Radio>Radio</Radio>
            </>
        );
    };

    return <div className="page-wrapper">{renderDefault()}</div>;
});
