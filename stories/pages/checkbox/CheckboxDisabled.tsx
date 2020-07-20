import * as React from "react";
import { Checkbox } from "../../../components/index";

const CheckboxDisabled = () => {
    return (
        <>
            <Checkbox disabled defaultChecked={true} />
            <Checkbox disabled />
            <Checkbox disabled indeterminate />
        </>
    );
};

export default CheckboxDisabled;
