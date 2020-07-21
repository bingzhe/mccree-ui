import * as React from "react";
import { Button } from "../../../components/index";

const ButtonGroupBasic = () => {
    return (
        <div>
            <Button.Group>
                <Button type="primary">One</Button>
                <Button type="primary">Two</Button>
                <Button type="primary">Three</Button>
            </Button.Group>
        </div>
    );
};

export default ButtonGroupBasic;
