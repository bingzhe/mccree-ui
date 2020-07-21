import * as React from "react";
import { Button } from "../../../components/index";

const ButtonDisabled = () => {
    return (
        <div className="button-wrapper">
            <Button disabled>DEFAULT</Button>
            <Button disabled variant="outline">
                DEFAULT
            </Button>
            <Button disabled variant="text">
                DEFAULT
            </Button>
            <Button disabled variant="text" href="http://bingzhe.github.io/" target="block">
                Link
            </Button>
        </div>
    );
};

export default ButtonDisabled;
