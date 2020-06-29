import * as React from "react";

import Checkbox, { CheckboxProps } from "./Checkbox";

export type CheckboxButtonProps = Omit<CheckboxProps, "isButton">;

const CheckboxButton: React.FC<CheckboxButtonProps> = (props) => {
    return <Checkbox isButton={true} {...props} />;
};

export default CheckboxButton;
