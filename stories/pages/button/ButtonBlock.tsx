import * as React from "react";
import { Button } from "../../../components/index";

const ButtonBlock = () => {
    return (
        <div className="button-wrapper" style={{ width: "100%" }}>
            <Button type="primary" block>
                PRIMARY
            </Button>
            <Button variant="outline" type="primary" block>
                PRIMARY
            </Button>
            <Button variant="text" type="primary" block>
                PRIMARY
            </Button>
        </div>
    );
};

export default ButtonBlock;
