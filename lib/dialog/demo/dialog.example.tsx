import * as React from "react";
import { useState } from "react";
import Dialog from "../dialog";

export default function () {
    const [x, setX] = useState(false);
    const [y, setY] = useState(false);

    return (
        <div>
            <h1>demo1</h1>
            <button onClick={() => setX(!x)}>click</button>
            <Dialog
                visible={x}
                buttons={
                    [
                        <button onClick={() => { setX(false) }}>1</button>,
                        <button onClick={() => { setX(false) }}>2</button>
                    ]
                }
                onClose={() => { setX(false) }}
            >
                <div>hi</div>
            </Dialog>

            <h1>demo2</h1>
            <button onClick={() => setY(!y)}>click</button>
            <Dialog
                visible={y}
                buttons={
                    [
                        <button onClick={() => { setY(false) }}>1</button>,
                        <button onClick={() => { setY(false) }}>2</button>
                    ]
                }
                onClose={() => { setY(false) }}
                onBackdropClick={false}
            >
                <div>hi</div>
            </Dialog>
        </div>
    );
};
