import * as React from "react";
import { Transition, Checkbox } from "../../../components/index";

const TransitionZoom = () => {
    const [visible, setVisible] = React.useState(false);
    const handleCheckboxchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVisible(e.target.checked);
    };

    return (
        <>
            <Checkbox value={visible} onChange={handleCheckboxchange} />
            <div style={{ display: "flex" }}>
                <Transition visible={visible} type="zoom">
                    <div
                        style={{
                            display: "inline-block",
                            height: "50px",
                            width: "50px",
                            background: "#eee",
                            marginRight: "10px"
                        }}
                    />
                </Transition>
                <Transition visible={visible} type="zoom" timeout={500}>
                    <div
                        style={{
                            display: "inline-block",
                            height: "50px",
                            width: "50px",
                            background: "#eee",
                            marginRight: "10px"
                        }}
                    />
                </Transition>
            </div>
        </>
    );
};

export default TransitionZoom;
