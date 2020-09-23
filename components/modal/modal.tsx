import * as React from "react";
import { createPortal } from "react-dom";
import usePortal from "../hooks/usePortal";
import useGetPrefix from "../hooks/useGetPrefix";
import Backdrop from "../Backdrop";
import useCurrentState from "../hooks/useCurrentState";

const { useEffect } = React;

export interface ModalProps {
    visible?: boolean;
    closable?: boolean;
    width?: boolean;
    onClose?: () => void;
    onOpen?: () => void;
}

const Modal: React.FC<ModalProps> = (props) => {
    const { visible: visibleProp, onOpen, onClose } = props;

    const [visible, setVisible, visibleRef] = useCurrentState<boolean>(false);

    const portal = usePortal("modal");
    const prefixCls = useGetPrefix("modal");

    const closeModal = () => {
        onClose?.();
        setVisible(false);
    };

    useEffect(() => {
        if (visibleProp === undefined) return;
        if (visibleProp) {
            onOpen?.();
        }
        if (!visibleProp && visibleRef.current) {
            onClose?.();
        }

        setVisible(visibleProp);
    }, [onClose, onOpen, setVisible, visibleProp, visibleRef]);

    console.log({ prefixCls });
    if (!portal) return null;

    return createPortal(
        <div className="">
            <Backdrop visible={visible} onClick={closeModal}>
                <div style={{ background: "#fff" }}>
                    <div>title</div>
                    <div>subTitle</div>
                    <div>content</div>
                    <div>action</div>
                </div>
            </Backdrop>
        </div>,
        portal
    );
};

export default Modal;
