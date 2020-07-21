import * as React from "react";
import { Button } from "../../../components/index";

const ButtonText = () => {
    const handleClick = () => {
        console.log("click");
    };
    return (
        <div className="button-wrapper">
            <Button variant="text" onClick={handleClick}>
                DEFAULT
            </Button>
            <Button variant="text" type="primary" onClick={handleClick}>
                PRIMARY
            </Button>
            <Button variant="text" type="secondary" onClick={handleClick}>
                SECONDARY
            </Button>
            <Button variant="text" type="success" onClick={handleClick}>
                SUCCESS
            </Button>
            <Button variant="text" type="error" onClick={handleClick}>
                ERROR
            </Button>
            <Button variant="text" type="warning" onClick={handleClick}>
                WARNING
            </Button>
            <Button variant="text" type="info" onClick={handleClick}>
                INFO
            </Button>
        </div>
    );
};

export default ButtonText;
