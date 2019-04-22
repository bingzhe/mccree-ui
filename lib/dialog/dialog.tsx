import * as React from "react";
import "./dialog.scss";
import { scopeClassMaker } from "../_util/classes";

const scopeClass = scopeClassMaker('r-dialog');
const sc = scopeClass;

interface Props {
    visible: boolean
}

const Dialog: React.FunctionComponent<Props> = (props) => {
    return (
        props.visible ?
            <React.Fragment>
                <div className={sc('mask')}></div>
                <div className={sc()}>
                    <div className={sc('clsoe')}>X</div>
                    <header className={sc('header')}></header>
                    <main className={sc('main')}>
                        {props.children}
                    </main>
                    <footer className={sc('footer')}>
                        <button>ok</button>
                        <button>cancel</button>
                    </footer>
                </div>
            </React.Fragment>
            :
            null
    );
};

export default Dialog;