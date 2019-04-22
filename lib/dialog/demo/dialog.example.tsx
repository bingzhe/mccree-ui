import * as React from "react";
import { useState } from "react";
import Dialog from "../dialog";

export default function () {
    const [x, setX] = useState(false);

    return (
        <div>
            <button onClick={() => setX(!x)}>toggle</button>
            <Dialog visible={x}>
                <div>hi</div>
            </Dialog>
        </div>
    );
};
