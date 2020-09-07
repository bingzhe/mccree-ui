import * as React from "react";
import { useClickOutside } from "../../../../components/index";

const { useRef, useState } = React;

const UseClickOutside = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [count, setCount] = useState(0);

    useClickOutside(ref, () => {
        setCount(count + 1);
    });

    return (
        <div
            ref={ref}
            style={{
                height: "120px",
                width: "120px",
                background: "#eee",
                textAlign: "center",
                lineHeight: "100px"
            }}
        >
            <p>{count}</p>
        </div>
    );
};

export default UseClickOutside;
