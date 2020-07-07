import * as React from "react";
import { tuple } from "../_util/type";

import RadioIcon from "./RadioIcon";

const CheckboxColorTypes = tuple("primary", "secondary", "success", "warning", "error", "info");
export type CheckboxColorType = typeof CheckboxColorTypes[number];

export interface RadioProps {
    className?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    style?: React.CSSProperties;
    disabled?: boolean;
    isButton?: boolean;
    color?: CheckboxColorType;
    icon?: React.ReactNode;
    checkIcon?: React.ReactNode;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onClick?: React.MouseEventHandler<HTMLElement>;
    children?: React.ReactNode;
    value?: any;
    name?: string;
}

const defaultIcon = <RadioIcon />;
const defaultCheckIcon = <RadioIcon checked />;

const Radio: React.FC<RadioProps> = () => {
    return (
        <div>
            {defaultIcon}
            {defaultCheckIcon}
        </div>
    );
};

export default Radio;
