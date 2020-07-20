import * as React from "react";
import { Checkbox, Button } from "../../../components/index";

const CheckboxControlled = () => {
    const [checked, setChecked] = React.useState(false);
    const [disabeld, setDisabled] = React.useState(false);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        console.log(e.target.checked);
        setChecked(e.target.checked);
    };

    const toggleChecked = () => {
        setChecked(!checked);
    };

    const toggleDisabled = () => {
        setDisabled(!disabeld);
    };

    return (
        <div>
            <div>
                <Checkbox checked={checked} disabled={disabeld} onChange={handleChange} />
            </div>
            <div>
                <Button type="primary" style={{ marginRight: "10px" }} onClick={toggleChecked}>
                    {checked ? "Uncheck" : "Check"}
                </Button>
                <Button type="primary" onClick={toggleDisabled}>
                    {disabeld ? "Enable" : "Disable"}
                </Button>
            </div>
        </div>
    );
};

export default CheckboxControlled;
