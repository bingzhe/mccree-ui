import * as React from "react";
import ReactDOM from "react-dom";
import "./dialog.scss";
import { scopeClassMaker } from "../_util/classes";

const scopeClass = scopeClassMaker("rui-dialog");
const sc = scopeClass;

interface Props {
    visible: boolean;
    buttons?: React.ReactElement[];
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

    const dialogEl = props.visible ?
        <React.Fragment>
            <div className={sc("mask")} onClick={onClickBackdrop}></div>
            <div className={sc()}>
                <div className={sc("clsoe")} onClick={onClickClose}>X</div>
                <header className={sc("header")}></header>
                <main className={sc("main")}>
                    {props.children}
                </main>
                <footer className={sc("footer")}>
                    {/* <button>ok</button>
                <button>cancel</button> */}
                    {
                        props.buttons && props.buttons.map((button, index) => {
                            return React.cloneElement(button, { key: index });
                        })
                    }
                </footer>
            </div>
        </React.Fragment>
        :
        null;

    return (
        ReactDOM.createPortal(
            dialogEl,
            document.body
        )
    );
};

Dialog.defaultProps = {
    onBackdropClick: true
};

const modal = (content: React.ReactNode, buttons?: React.ReactElement[], afterClose?: () => void): Function => {

    const close = () => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
    };

    const component: JSX.Element =
        <Dialog
            visible={true}
            onClose={() => {
                close();
                afterClose && afterClose();
            }}
            buttons={buttons}
        >
            {content}
        </Dialog>;

    const div: HTMLDivElement = document.createElement("div");
    document.body.append(div);
    ReactDOM.render(component, div);

    return close;
};

const alert = (content: string) => {
    const button = <button onClick={() => { close() }}>ok</button>;
    const close = modal(content, [button]);
};

const confirm = (content: string, yes?: () => void, no?: () => void) => {
    const handlerYesClick: React.MouseEventHandler = () => {
        close();
        yes && yes();
    };

    const handlerNoClick: React.MouseEventHandler = () => {
        close();
        no && no();
    };

    const buttons = [
        <button onClick={handlerYesClick}>yes</button>,
        <button onClick={handlerNoClick}>no</button>
    ];

    const close = modal(content, buttons, no);
};



export { alert, confirm, modal };
export default Dialog;