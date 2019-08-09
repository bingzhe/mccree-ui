import * as React from "react";
import { LiveError, LiveProvider, LivePreview } from "react-live";
import styled, { css } from "styled-components";
// eslint-disable-next-line no-unused-vars
import MonacoEditor, { EditorDidMount, ChangeHandler } from "react-monaco-editor";
import LZString from "lz-string";
import Button from "../../lib/button/index";

const scope = {
    styled,
    css,
    Button
};
const options = {
    fontSize: 16,
    minimap: {
        enabled: false,
    },
};

const StyleCodeWrapper = styled.div`
    display: flex;
    border: 1px solid #4285f4;
    border-radius: 24px;
`;
const StyleLiveWrapper = styled.div`
    flex: 0 0 50%;
    width: 50%; 
    border-right: 1px solid #4285f4; 
    padding: 24px;
    display: flex; 
    justify-content: center;
`;

const StyleEditWrapper = styled.div`
    flex: 0 0 50%;
    width: 50%;
    padding: 12px 12px 12px 0;
`;

const StyleMonacoWrapper = styled.div<MonacoEditProps>`
    height: ${props => props.height}px;   
`;

const StyleErrWrapper = styled.div`
    font-size: 18px; 
    color: #ff4040; 
    line-height: 20px;
`;

interface MonacoEditProps {
    height: number;
}

const editorDidMount: EditorDidMount = editor => {
    window.addEventListener("resize", () => editor.layout());
};

interface CodeProps {
    code: string | null;
    name: string;
}

type StateCode = string | null;

const Code: React.FunctionComponent<CodeProps> = (props) => {

    const { name } = props;

    const [code, setCode] = React.useState<StateCode>(null);
    const [propsCode, setPropsCode] = React.useState<StateCode>(null);
    const [editing] = React.useState(true);


    // getDerivedStateFromProps 生命周期hook写法
    if (props.code !== propsCode) {
        setCode(props.code);
        setPropsCode(props.code);
    }

    React.useEffect(() => {
        const encodedCode = window.localStorage.getItem(`code-${name}`);

        console.log(11111);
        if (encodedCode) {
            const code = LZString.decompressFromEncodedURIComponent(encodedCode);
            setCode(code);
        }
    }, []);

    const handleMonacoEditorChange: ChangeHandler = (code) => {
        setCode(code);

        if (propsCode !== code) {
            const encodedCode = LZString.compressToEncodedURIComponent(code);
            window.localStorage.setItem(`code-${name}`, encodedCode);
        } else {
            window.localStorage.removeItem(`code-${name}`);
        }
    };

    const lines = (code || "").split("\n").length;

    let editorHeight;
    if (lines <= 4) editorHeight = 96;
    else if (lines <= 8) editorHeight = 192;
    else if (lines <= 16) editorHeight = 384;
    else editorHeight = 768;


    return (
        <div>
            <LiveProvider code={code || ""} scope={scope}>
                <StyleCodeWrapper>
                    <StyleLiveWrapper>
                        <LivePreview />
                    </StyleLiveWrapper>
                    {editing && (
                        <StyleEditWrapper>
                            <StyleMonacoWrapper height={editorHeight}>
                                <MonacoEditor
                                    theme="vs-light"
                                    language="javascript"
                                    value={code}
                                    options={options}
                                    onChange={handleMonacoEditorChange}
                                    editorDidMount={editorDidMount}
                                />
                            </StyleMonacoWrapper>
                            <StyleErrWrapper>
                                <LiveError />
                            </StyleErrWrapper>
                        </StyleEditWrapper>
                    )}
                </StyleCodeWrapper>
            </LiveProvider>
        </div>
    );
};

export default Code;