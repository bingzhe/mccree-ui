import * as React from "react";
import { storiesOf } from "@storybook/react";

import { Transition, Checkbox } from "../components/index";

storiesOf("实验室", module).add("Play", () => {
    const TransitionCollapse = () => {
        const [visible, setVisible] = React.useState(false);
        const handleCheckboxchange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setVisible(e.target.checked);
        };

        return (
            <>
                <Checkbox value={visible} onChange={handleCheckboxchange} />
                <Transition visible={visible} type="collapse">
                    <div style={{ height: "100px", background: "#eee" }} />
                </Transition>
            </>
        );
    };

    return <div className="page-wrapper">{TransitionCollapse()}</div>;
});
