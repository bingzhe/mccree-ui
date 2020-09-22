import * as React from "react";

export interface ModalProps {
    visible?: boolean;
    closable?: boolean;
    width?: boolean;
}

const Modal: React.FC<ModalProps> = () => {
    return (
        <div>
            <div className="wrapper">
                <div>title</div>
                <div>subTitle</div>
                <div>content</div>
                <div>action</div>
            </div>
        </div>
    );
};

export default Modal;
