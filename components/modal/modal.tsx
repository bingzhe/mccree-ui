import * as React from "react";
import { createPortal } from "react-dom";
import usePortal from "../hooks/usePortal";
import useGetPrefix from "../hooks/useGetPrefix";
import Backdrop from "../Backdrop";
import useCurrentState from "../hooks/useCurrentState";
import { hasChild, pickChild } from "../utils/collection";
import ModalHeader from "./ModalHeader";
import ModalContent from "./ModalContent";

const { useEffect } = React;

export interface ModalProps {
    visible?: boolean;
    closable?: boolean;
    width?: boolean;
    onClose?: () => void;
    onOpen?: () => void;
}

export type ModalFC = React.FC<ModalProps> & {
    Header: typeof ModalHeader;
    Content: typeof ModalContent;
};

const Modal: ModalFC = (props) => {
    const { visible: visibleProp, onOpen, onClose, children } = props;

    const [visible, setVisible, visibleRef] = useCurrentState<boolean>(false);
    const [withoutHeaderChildren, headerChildren] = pickChild(children, ModalHeader);
    const hasContent = hasChild(withoutHeaderChildren, ModalContent);

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
                    {headerChildren}
                    {hasContent ? (
                        withoutHeaderChildren
                    ) : (
                        <ModalContent>{withoutHeaderChildren}</ModalContent>
                    )}
                </div>
            </Backdrop>
        </div>,
        portal
    );
};

Modal.Header = ModalHeader;
Modal.Content = ModalContent;

export default Modal;
