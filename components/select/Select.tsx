import * as React from "react";

type RawValue = string | number;
type SelectValue = RawValue | RawValue[];

export interface SelectProps {
    className?: string;
    value?: SelectValue;
}

const Select: React.FC<SelectProps> = (props) => {
    const { children } = props;

    const [visible, setVisible] = React.useState<boolean>(false);

    const handleSelectClick = () => {
        setVisible((v) => !v);
    };

    return (
        <div>
            <div onClick={handleSelectClick}>Select</div>
            {visible ? <div>{children}</div> : null}
        </div>
    );
};

export default Select;
