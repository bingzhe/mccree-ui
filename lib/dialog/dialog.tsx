import * as React from "react";
import ReactDOM from 'react-dom';
import "./dialog.scss";
import { scopeClassMaker } from "../_util/classes";

const scopeClass = scopeClassMaker('rui-dialog');
const sc = scopeClass;

interface Props {
    visible: boolean;
    buttons?: Array<React.ReactElement>;
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
                        props.buttons && props.buttons.map((button, index) => {
                            return React.cloneElement(button, { key: index })
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

const alert: (content: string) => void = (content) => {
    const component =
        <Dialog
            visible={true}
            onClose={() => {
                ReactDOM.render(React.cloneElement(component, { visible: false }), div);
                ReactDOM.unmountComponentAtNode(div);
                div.remove();
            }}
        >
            {content}
        </Dialog>;

    const div: HTMLDivElement = document.createElement("div");
    document.body.append(div);
    ReactDOM.render(component, div);
};

const confirm = (content: string, yes?: () => void, no?: () => void) => {
    const handlerYesClick: React.MouseEventHandler = () => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
        yes && yes();
    };

    const handlerNoClick: React.MouseEventHandler = () => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
        no && no();
    }

    const component: JSX.Element =
        <Dialog
            visible={true}
            onClose={() => {
                ReactDOM.render(React.cloneElement(component, { visible: false }), div);
                ReactDOM.unmountComponentAtNode(div);
                div.remove();
            }}
            buttons={[
                <button onClick={handlerYesClick}>yes</button>,
                <button onClick={handlerNoClick}>no</button>
            ]}
        >
            {content}
        </Dialog >;

    const div: HTMLDivElement = document.createElement("div");
    document.body.append(div);
    ReactDOM.render(component, div);
};

const modal = (content: React.ReactNode) => {

    const close = () => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
    };

    const component: JSX.Element =
        <Dialog
            visible={true}
            onClose={close}
        >
            {content}
        </Dialog>;

    const div: HTMLDivElement = document.createElement("div");
    document.body.append(div);
    ReactDOM.render(component, div);

    return close;
};

export { alert, confirm, modal };
export default Dialog;