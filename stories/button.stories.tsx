import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "../components/button/index";

storiesOf("Button", module).add("ButtonGroup", () => {
    return (
        <div className="page-wrapper">
            <h4>1</h4>
            <Button.Group>
                <Button type="primary">One</Button>
                <Button type="primary">Two</Button>
                <Button type="primary">Three</Button>
            </Button.Group>

            <h4>2</h4>
            <Button.Group>
                <Button type="primary" variant="outline">
                    One
                </Button>
                <Button type="primary" variant="outline">
                    Two
                </Button>
                <Button type="primary" variant="text">
                    Three
                </Button>
            </Button.Group>

            <h4>3</h4>
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

            <h4>size</h4>
            <Button.Group size="large">
                <Button size="small" type="primary">
                    One
                </Button>
                <Button type="primary">Two</Button>
                <Button type="primary">Three</Button>
            </Button.Group>
        </div>
    );
});
