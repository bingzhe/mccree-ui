import * as React from "react";
import { Button } from "../../../components/index";

const ButtonGroupText = () => {
    return (
        <div>
            <Button.Group>
                <Button type="primary" variant="text">
                    One
                </Button>
                <Button type="primary" variant="text">
                    Two
                </Button>
                <Button type="primary" variant="text">
                    Three
                </Button>
            </Button.Group>
        </div>
    );
};

export default ButtonGroupText;
