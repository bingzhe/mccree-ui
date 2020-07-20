import * as React from "react";
import { Checkbox } from "../../../components/index";

const CheckboxCheckedAll = () => {
    const options = ["深圳", "西安", "杭州"];
    const defaultChecked = ["西安"];

    const [checkList, setCheckList] = React.useState(defaultChecked);
    const [indeterminate, setIndeterminate] = React.useState(true);
    const [checkAll, setCheckAll] = React.useState(true);

    const handleCheckAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckAll(e.target.checked);
        setCheckList(e.target.checked ? options : []);
        setIndeterminate(false);
    };

    const handleGroupChange = (v: string[]) => {
        setCheckList(v);
        setIndeterminate(!!v.length && v.length < options.length);
        setCheckAll(v.length !== 0);
    };

    React.useEffect(() => {
        console.log("checked=>", checkList);
    });

    return (
        <div>
            <div>
                <Checkbox
                    color="primary"
                    checked={checkAll}
                    onChange={handleCheckAllChange}
                    indeterminate={indeterminate}
                >
                    Check All
                </Checkbox>
            </div>
            <div>
                <Checkbox.Group
                    onChange={handleGroupChange}
                    options={options}
                    value={checkList}
                    defaultValue={defaultChecked}
                />
            </div>
        </div>
    );
};

export default CheckboxCheckedAll;
