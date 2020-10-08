import * as React from "react";
import classNames from "classnames";
import useGetPrefix from "../hooks/useGetPrefix";

type LoadingType =
    | "waves"
    | "corners"
    | "border"
    | "points"
    | "square"
    | "gradient"
    | "rectangle"
    | "circles"
    | "square-rotate"
    | "scale"
    | "dots";

interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
    spinning?: boolean;
    type?: LoadingType;
    color?: string;
    background?: string;
    tip?: string;
}

const Loading: React.FC<LoadingProps> = (props) => {
    const { spinning, tip, children } = props;

    const isNestedPattern = !!children;
    const prefixCls = useGetPrefix("loading");

    console.log({ prefixCls });
    console.log({ isNestedPattern });

    const dotsElement = (
        <span className={classNames(`${prefixCls}-dot`, `${prefixCls}-dot-spin`)}>
            <i className={`${prefixCls}-dot-item`} />
            <i className={`${prefixCls}-dot-item`} />
            <i className={`${prefixCls}-dot-item`} />
            <i className={`${prefixCls}-dot-item`} />
        </span>
    );

    const spinElement = (
        <div className={`${prefixCls}`}>
            {dotsElement}
            {tip ? <div className={`${prefixCls}-text`}>{tip}</div> : null}
        </div>
    );

    if (isNestedPattern) {
        const containerClassName = classNames(`${prefixCls}-container`, {
            [`${prefixCls}-blur`]: spinning
        });

        return (
            <div className={`${prefixCls}-nested`}>
                {spinning ? <div>{spinElement}</div> : null}
                <div className={containerClassName}>{children}</div>
            </div>
        );
    }

    return spinElement;
};

export default Loading;