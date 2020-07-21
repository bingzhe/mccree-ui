import * as React from "react";
import { Button } from "../../../components/index";

const ButtonLink = () => {
    return (
        <div className="button-wrapper">
            <Button target="block" href="http://bingzhe.github.io/" type="primary">
                LINK
            </Button>
            <Button
                target="block"
                variant="outline"
                href="http://bingzhe.github.io/"
                type="primary"
            >
                LINK
            </Button>
            <Button target="block" variant="text" href="http://bingzhe.github.io/" type="primary">
                LINK
            </Button>
        </div>
    );
};

export default ButtonLink;
