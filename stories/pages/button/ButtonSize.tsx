import * as React from "react";
import { Button } from "../../../components/index";

const ButtonSize = () => {
    return (
        <div className="button-wrapper">
            <Button type="primary" size="large">
                Large
            </Button>
            <Button type="primary">Medium</Button>
            <Button type="primary" size="small">
                Small
            </Button>
            <Button variant="outline" type="primary" size="large">
                Large
            </Button>
            <Button variant="outline" type="primary" size="medium">
                Medium
            </Button>
            <Button variant="outline" type="primary" size="small">
                Small
            </Button>
            <Button variant="text" type="primary" size="large">
                Large
            </Button>
            <Button variant="text" type="primary" size="medium">
                Medium
            </Button>
            <Button variant="text" type="primary" size="small">
                Small
            </Button>
        </div>
    );
};

export default ButtonSize;
