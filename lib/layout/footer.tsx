import * as React from "react";

interface Props extends React.HtmlHTMLAttributes<HTMLElement> {

}

const footer: React.FunctionComponent<Props> = (props) => {
    const { className, children, ...restProps } = props;

    return (
        <div className={className} {...restProps}>
            {children}
        </div>
    );
};

export default footer;