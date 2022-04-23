import * as React from "react";
import Transition from "../transition";
import useGetPrefix from "../hooks/useGetPrefix";
import useCurrentState from "../hooks/useCurrentState";

interface BackdropProps {
    visible?: boolean;
    onClick?: React.MouseEventHandler<HTMLElement>;
    width?: string;
}

const Backdrop: React.FC<BackdropProps> = (props) => {
    const { visible, onClick, width, children, ...restProps } = props;

    const prefixCls = useGetPrefix("backdrop");
    const [, setIsContentMouseDown, IsContentMouseDownRef] = useCurrentState(false);

    const handleClick: React.MouseEventHandler<HTMLElement> = (event) => {
        if (IsContentMouseDownRef.current) return;
        onClick?.(event);
    };
    const handleChildrenClick: React.MouseEventHandler<HTMLElement> = (event) => {
        event.stopPropagation();
    };
    const handleMouseUp: React.MouseEventHandler<HTMLElement> = () => {
        if (!IsContentMouseDownRef.current) return;
        const timer = setTimeout(() => {
            setIsContentMouseDown(false);
            clearTimeout(timer);
        }, 0);
    };
    const handleMouseDowm = () => {
        setIsContentMouseDown(true);
    };

    return (
        <Transition visible={visible}>
            <div
                className={prefixCls}
                onClick={handleClick}
                onMouseUp={handleMouseUp}
                {...restProps}
            >
                <div className={`${prefixCls}-layer`} />
                <div
                    onClick={handleChildrenClick}
                    onMouseDown={handleMouseDowm}
                    className={`${prefixCls}-content`}
                    style={{ width: width }}
                >
                    {children}
                </div>
                <div onClick={handleChildrenClick} className={`${prefixCls}-offset`} />
            </div>
        </Transition>
    );
};

Backdrop.defaultProps = {
    width: "520px"
};

export default Backdrop;
