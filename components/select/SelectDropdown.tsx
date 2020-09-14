import * as React from "react";
import { createPortal } from "react-dom";
import usePortal from "../hooks/usePortal";
import Transition from "../transition/index";

interface DropdownProps {
    parent?: React.MutableRefObject<HTMLElement | null>;
    visible?: boolean;
    disableMatchWidth?: boolean;
    popperRef?: React.RefObject<HTMLDivElement>;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

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
