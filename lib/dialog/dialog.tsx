import * as React from "react";
import "./dialog.scss";
import { scopeClassMaker } from "../_util/classes";

const scopeClass = scopeClassMaker('rui-dialog');
const sc = scopeClass;

interface Props {
    visible: boolean;
    buttons: Array<React.ReactElement>;
    onClose: React.MouseEventHandler;
    onBackdropClick?: boolean;
}

const Dialog: React.FunctionComponent<Props> = (props) => {

    const onClickClose: React.MouseEventHandler = (e) => {
        props.onClose(e);
    };
    const onClickBackdrop: React.MouseEventHandler = (e) => {
        if (props.onBackdropClick) {
            props.onClose(e);
        }
    };

    return (
        props.visible ?
            <React.Fragment>
                <div className={sc('mask')} onClick={onClickBackdrop}></div>
                <div className={sc()}>
                    <div className={sc('clsoe')} onClick={onClickClose}>X</div>
                    <header className={sc('header')}></header>
                    <main className={sc('main')}>
                        {props.children}
                    </main>
                    <footer className={sc('footer')}>
                        {/* <button>ok</button>
                        <button>cancel</button> */}
                        {
                            props.buttons.map((button, index) => {
                                React.cloneElement(button, { key: index })
                            })
                        }
                    </footer>
                </div>
            </React.Fragment>
            :
            null
    );
};

Dialog.defaultProps = {
    onBackdropClick: true
};

export default Dialog;