import * as React from "react";
import Checkbox from "../../../components/checkbox";

const CheckboxBase = () => (
    // prettierignore
    <Checkbox defaultChecked={true} onChange={(e) => console.log(e.target.checked)} />
);

export default CheckboxBase;
