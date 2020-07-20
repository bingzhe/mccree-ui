import * as React from "react";
import classNames from "classnames";
import { Collapse } from "react-collapse";

import HighLightedCode from "../HighlightedCode";
import { Button } from "../../../components/index";

import "./index.less";

export interface DemoOptionProps {
    tsx: React.FC;
    rawTs: string;
}

export interface DemoProps {
    className?: string;
    demo: DemoOptionProps;
    githubLocation?: string;
}

const Demo: React.FC<DemoProps> = (props) => {
    const { className, demo, ...restProps } = props;
    const defaultComponent = () => <div />;
    const { tsx: Component = defaultComponent, rawTs: code } = demo;

    const [openDemoSource, setOpenDemoSoure] = React.useState(true);

    const handleClick = () => {
        setOpenDemoSoure(!openDemoSource);
    };
    const classes = classNames(className, "demo-root");

    return (
        <div className={classes} {...restProps}>
            <div className="demo-sandboxed">
                <Component />
            </div>
            <div className="demo-toolbar">
                <Button variant="text" type="primary" onClick={handleClick}>
                    {openDemoSource ? "隐藏代码" : "显示代码"}
                </Button>
            </div>

            <Collapse isOpened={openDemoSource}>
                <HighLightedCode code={code} language="ts" />
            </Collapse>
        </div>
    );
};

export default Demo;
