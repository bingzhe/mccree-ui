import * as React from "react";
import { Button } from "../../../components/index";

const ButtonGroupOutline = () => {
    return (
        <div>
            <Button.Group>
                <Button type="primary" variant="outline">
                    One
                </Button>
                <Button type="primary" variant="outline">
                    Two
                </Button>
                <Button type="primary" variant="outline">
                    Three
                </Button>
            </Button.Group>
        </div>
    );
};

export default ButtonGroupOutline;
