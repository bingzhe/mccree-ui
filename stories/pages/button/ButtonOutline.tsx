import * as React from "react";
import { Button } from "../../../components/index";

const ButtonOutline = () => {
    const handleClick = () => {
        console.log("click");
    };
    return (
        <div className="button-wrapper">
            <Button variant="outline" onClick={handleClick}>
                DEFAULT
            </Button>
            <Button variant="outline" type="primary" onClick={handleClick}>
                PRIMARY
            </Button>
            <Button variant="outline" type="secondary" onClick={handleClick}>
                SECONDARY
            </Button>
            <Button variant="outline" type="success" onClick={handleClick}>
                SUCCESS
            </Button>
            <Button variant="outline" type="error" onClick={handleClick}>
                ERROR
            </Button>
            <Button variant="outline" type="warning" onClick={handleClick}>
                WARNING
            </Button>
            <Button variant="outline" type="info" onClick={handleClick}>
                INFO
            </Button>
        </div>
    );
};

export default ButtonOutline;
