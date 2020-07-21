import * as React from "react";
import { Button } from "../../../components/index";

const ButtonLoading = () => {
    return (
        <div className="button-wrapper">
            <Button loading type="primary">
                Loading
            </Button>
        </div>
    );
};

export default ButtonLoading;
