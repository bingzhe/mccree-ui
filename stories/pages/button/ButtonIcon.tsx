import * as React from "react";
import { Button, Icon } from "../../../components/index";

const ButtonIcon = () => {
    return (
        <div className="button-wrapper">
            <Button startIcon={<Icon name="caret-left" />} type="primary">
                Primary
            </Button>
            <Button endIcon={<Icon name="caret-right" />} type="primary">
                Primary
            </Button>
            <Button type="primary" shape="circle">
                <Icon name="caret-right" />
            </Button>
            <Button type="error" shape="circle">
                <Icon name="caret-right" />
            </Button>
            <Button variant="text" type="primary" shape="circle">
                <Icon name="caret-right" />
            </Button>
        </div>
    );
};

export default ButtonIcon;
