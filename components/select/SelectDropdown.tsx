import * as React from "react";
import { createPortal } from "react-dom";
import Transition from "../transition/index";
import usePortal from "../hooks/usePortal";
import { DropdownProps } from "./Select.type";

const Dropdown: React.FC<DropdownProps> = (props) => {
    const { visible, popperRef, className, children, style, ...restProps } = props;

    const el = usePortal("dropdown");
    if (!el) return null;

    return createPortal(
        <Transition visible={visible}>
            <div className={className} ref={popperRef} style={style} {...restProps}>
                {children}
            </div>
        </Transition>,
        el
    );
};

export default Dropdown;
