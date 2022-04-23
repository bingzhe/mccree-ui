import * as React from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import Backdrop from "../backdrop";
import Transition from "../transition";
import Icon from "../icon";
import Button from "../button";
import usePortal from "../hooks/usePortal";
import useGetPrefix from "../hooks/useGetPrefix";
import useCurrentState from "../hooks/useCurrentState";
import { hasChild, pickChild } from "../utils/collection";
import ModalTitle from "./ModatTitle";
import ModalContent from "./ModalContent";
import ModalActions from "./ModalActions";

const { useEffect } = React;

export interface ModalProps {
    visible?: boolean;
    closable?: boolean;
    width?: boolean;
    onClose?: () => void;
    onOpen?: () => void;
}

export type ModalFC = React.FC<ModalProps> & {
    Header: typeof ModalTitle;
    Content: typeof ModalContent;
    Actions: typeof ModalActions;
};

const Modal: ModalFC = (props) => {
    const { visible: visibleProp, onOpen, onClose, children, ...restProps } = props;

    const [visible, setVisible, visibleRef] = useCurrentState<boolean>(false);
    const [withoutHeaderChildren, headerChildren] = pickChild(children, ModalTitle);
    const [withoutActionsChildren, actionsChildren] = pickChild(
        withoutHeaderChildren,
        ModalActions
    );
    const hasContent = hasChild(withoutActionsChildren, ModalContent);

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
    const portal = usePortal("modal");
    const prefixCls = useGetPrefix("modal");

    const modalClasses = classNames(classNames, prefixCls);

    if (!portal) return null;

    return createPortal(
        <Backdrop visible={visible} onClick={closeModal}>
            <Transition visible={visible} type="fade">
                <div className={modalClasses} {...restProps}>
                    <Button.IconButton className={`${prefixCls}-close`} variant="text">
                        <Icon name="close" />
                    </Button.IconButton>
                    {headerChildren}
                    {hasContent ? (
                        withoutActionsChildren
                    ) : (
                        <ModalContent>{withoutActionsChildren}</ModalContent>
                    )}
                    {actionsChildren}
                </div>
            </Transition>
        </Backdrop>,
        portal
    );
};

Modal.Header = ModalTitle;
Modal.Content = ModalContent;
Modal.Actions = ModalActions;

export default Modal;
