import * as React from "react";

interface Props {
    visible: boolean
}

const Dialog: React.FunctionComponent<Props> = (props) => {
    return (
        props.visible ?
            <div>Dialog</div> :
            null
    );
};

export default Dialog;