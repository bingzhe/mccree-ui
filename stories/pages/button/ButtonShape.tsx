import * as React from "react";
import { Button } from "../../../components/index";

const ButtonShape = () => {
    return (
        <div className="button-wrapper">
            <Button shape="round" type="primary">
                PRIMARY
            </Button>
            <Button shape="round" type="primary">
                P
            </Button>
            <Button shape="round" variant="outline" type="primary">
                PRIMARY
            </Button>
            <Button shape="round" variant="text" type="primary">
                PRIMARY
            </Button>
            <Button shape="circle" type="primary">
                P
            </Button>
        </div>
    );
};

export default ButtonShape;
