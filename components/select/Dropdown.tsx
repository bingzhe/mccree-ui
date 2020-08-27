import * as React from "react";
import { createPortal } from "react-dom";
import { usePopper } from "../hooks/usePopper";
import usePortal from "../hooks/usePortal";

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

    const [referenceRef, popperRef] = usePopper<HTMLSpanElement, HTMLDivElement>({
        placement: "bottom"
    });

    if (!el) return null;
    const popperNode = createPortal(
        <div ref={popperRef} style={{ border: "1px solid #ccc" }}>
            <div>I am popper</div>
            <div>I am popper</div>
            <div>I am popper</div>
            <div>I am popper</div>
            <div>I am popper</div>
            <div>I am popper</div>
        </div>,
        el
    );
    return (
        <>
            <div>Dropdown Top</div>
            <span ref={referenceRef}>11234</span>
            {popperNode}
            {/* <div ref={popperRef}>I am popper</div> */}
            <div style={{ height: "200px" }}>Dropdown bottom</div>
        </>
    );
};

export default Dropdown;
