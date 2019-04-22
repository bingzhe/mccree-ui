import * as React from "react";
import "./dialog.scss";

interface Props {
    visible: boolean
}

const Dialog: React.FunctionComponent<Props> = (props) => {
    return (
        props.visible ?
            <React.Fragment>
                <div className="r-dialog-mask"></div>
                <div className="r-dialog">
                    <div>{props.children}</div>
                </div>
            </React.Fragment>
            :
            null
    );
};

export default Dialog;