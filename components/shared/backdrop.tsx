import * as React from "react";
import Transition from "../transition";

interface BackdropProps {
    visible?: boolean;
    onClick?: React.MouseEventHandler<HTMLElement>;
}

const Backdrop: React.FC<BackdropProps> = (props) => {
    const { visible } = props;

    return (
        <Transition visible={visible}>
            <div>Backdrop</div>
        </Transition>
    );
};

export default Backdrop;
