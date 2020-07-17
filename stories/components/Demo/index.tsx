import * as React from "react";
import classNames from "classnames";

import HighLightedCode from "../HighlightedCode";

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

    const classes = classNames(className);
    return (
        <div className={classes} {...restProps}>
            <Component />

            <HighLightedCode code={code} language="tsx" />
        </div>
    );
};

export default Demo;
