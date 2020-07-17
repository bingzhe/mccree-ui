import * as React from "react";
import classNames from "classnames";

import HighLightedCode from "../HighlightedCode";
import { Button } from "../../../components/index";

interface demoOptionProps {
    tsx: React.FC;
    rawTs: string;
}

interface DemoProps {
    className?: string;
    demo: demoOptionProps;
    githubLocation?: string;
}

const Demo: React.FC<DemoProps> = (props) => {
    const { className, demo, ...restProps } = props;

    const { tsx: Component, rawTs: code } = demo;

    const classes = classNames(className, "demo-root");
    return (
        <div className={classes} {...restProps}>
            <div className="demo-sandboxed">
                <Component />
            </div>
            <div className="demo-toolbar">
                <Button variant="text" type="primary">
                    显示代码
                </Button>
            </div>

            <HighLightedCode code={code} language="tsx" />
        </div>
    );
};

export default Demo;
