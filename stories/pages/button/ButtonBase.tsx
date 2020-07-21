import * as React from "react";
import { Button } from "../../../components/index";

const ButtonBase = () => {
    const handleClick = () => {
        console.log("click");
    };
    return (
        <div className="button-wrapper">
            <Button onClick={handleClick}>DEFAULT</Button>
            <Button type="primary" onClick={handleClick}>
                PRIMARY
            </Button>
            <Button type="secondary" onClick={handleClick}>
                SECONDARY
            </Button>
            <Button type="success" onClick={handleClick}>
                SUCCESS
            </Button>
            <Button type="error" onClick={handleClick}>
                ERROR
            </Button>
            <Button type="warning" onClick={handleClick}>
                WARNING
            </Button>
            <Button type="info" onClick={handleClick}>
                INFO
            </Button>
        </div>
    );
};

export default ButtonBase;
