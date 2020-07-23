import * as React from "react";
import { Icon } from "../../../components/index";

const IconRotate = () => {
    return (
        <div style={{ fontSize: "36px" }}>
            <Icon name="smile" rotate={90} ></Icon>
            <Icon name="smile" rotate={180} ></Icon>
            <Icon name="smile" rotate={270} ></Icon>
        </div>
    );
};

export default IconRotate;
