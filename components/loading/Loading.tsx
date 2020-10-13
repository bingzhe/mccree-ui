import * as React from "react";
import classNames from "classnames";
import useGetPrefix from "../hooks/useGetPrefix";

type LoadingType =
    | "default"
    | "waves"
    | "corners"
    | "border"
    | "points"
    | "square"
    | "gradient"
    | "rectangle"
    | "circles"
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
    const { spinning, tip, type, children } = props;

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

    const animationElement = (
        <div className={`${prefixCls}-animation`}>
            <div className={`${prefixCls}-animation-1`} />
            <div className={`${prefixCls}-animation-2`} />
            <div className={`${prefixCls}-animation-3`} />
            <div className={`${prefixCls}-animation-4`} />
        </div>
    );

    console.log(dotsElement);

    const spinElement = (
        <div className={classNames(`${prefixCls}`, { [`${prefixCls}-${type}`]: type })}>
            {animationElement}
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

Loading.defaultProps = {
    type: "default"
};
export default Loading;
