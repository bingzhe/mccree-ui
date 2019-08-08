import * as React from "react";
import { LiveError, LiveProvider, LivePreview } from "react-live";
import styled, { css } from "styled-components";
import MonacoEditor from "react-monaco-editor";
import LZString from "lz-string";

const scope = {
    styled,
    css
};
const options = {
    fontSize: 16,
    minimap: {
        enabled: false,
    },
};


const editorDidMount = editor => {
    window.addEventListener("resize", () => editor.layout());
};

interface CodeProps {
    code: string;
    name?: string;
}

const Code: React.FunctionComponent<CodeProps> = (props) => {

    console.log(props);
    const { name } = props;

    const [code, setCode] = React.useState(null);
    const [propsCode, setPropsCode] = React.useState(null);
    const [editing, setEditing] = React.useState(true);

    console.log(props.code);
    if (props.code !== propsCode) {
        setCode(props.code);
        setPropsCode(props.code);
    }

    const handleMonacoEditorChange = (code) => {
        console.log("code", code);
        setCode(code);

        if (propsCode !== code) {
            const encodedCode = LZString.compressToEncodedURIComponent(code);
            window.localStorage.setItem(`code-${name}`, encodedCode);
            window.history.replaceState(null, "", `?c=${encodedCode}`);
        } else {
            window.localStorage.removeItem(`code-${name}`);
            window.history.replaceState(null, "", `?`);
        }
    };



    console.log(code);
    const lines = props.code.split("\n").length;

    let editorHeight;

    if (lines <= 4) editorHeight = "xsmall";
    else if (lines <= 8) editorHeight = "small";
    else if (lines <= 16) editorHeight = "medium";
    else editorHeight = "large";


    return (
        <div>
            <LiveProvider code={code} scope={scope}>
                <div>
                    <div style={{ height: 500 }}>
                        <LivePreview />
                    </div>
                    {editing && (
                        <div>
                            <div style={{ height: 500 }}>
                                <MonacoEditor
                                    theme="vs-light"
                                    language="javascript"
                                    value={code}
                                    options={options}
                                    onChange={handleMonacoEditorChange}
                                    editorDidMount={editorDidMount}
                                />
                            </div>
                            <div>
                                <LiveError />
                            </div>
                        </div>
                    )}
                </div>
            </LiveProvider>
        </div>
    );
};

export default Code;