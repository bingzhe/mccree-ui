import * as React from "react";

import Radio, { RadioProps } from "./Radio";

export type RadioButtonProps = Omit<RadioProps, "isButton">;

const RadioButton: React.FC<RadioButtonProps> = (props) => {
    return <Radio isButton={true} {...props} />;
};

export default RadioButton;
