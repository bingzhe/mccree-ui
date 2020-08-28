import * as React from "react";
import { createPortal } from "react-dom";
import { usePopper } from "../hooks/usePopper";
import usePortal from "../hooks/usePortal";
import Transition from "../transition/index";

const { useState } = React;

interface DropdownProps {
    parent?: React.MutableRefObject<HTMLElement | null>;
    visible?: boolean;
    disableMatchWidth?: boolean;
}

// interface ReactiveDomReact {
//     top: number;
//     left: number;
//     right: number;
//     bottom: number;
// }

// const defaultRect: ReactiveDomReact = {
//     top: -1000,
//     left: -1000,
//     right: -1000,
//     bottom: 0
// };

const Dropdown: React.FC<DropdownProps> = () => {
    const el = usePortal("dropdown");

    const [visible, setVisible] = useState<boolean>(false);

    const [referenceRef, popperRef] = usePopper<HTMLSpanElement, HTMLDivElement>({
        placement: "bottom"
    });

    const handleOpenClick = () => {
        setVisible(true);
    };

    if (!el) return null;

    const popperNode = createPortal(
        <Transition visible={visible}>
            <div ref={popperRef} style={{ border: "1px solid #ccc", background: "#fff" }}>
                <div>I am popper</div>
                <div>I am popper</div>
                <div>I am popper</div>
                <div>I am popper</div>
                <div>I am popper</div>
                <div>I am popper</div>
            </div>
        </Transition>,
        el
    );
    return (
        <>
            <div>Dropdown Top</div>
            <span ref={referenceRef} onClick={handleOpenClick}>
                11234
            </span>
            {popperNode}
            {/* <div ref={popperRef}>I am popper</div> */}
            <div style={{ height: "200px" }}>Dropdown bottom</div>
        </>
    );
};

export default Dropdown;
