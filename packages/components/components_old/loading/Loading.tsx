import * as React from "react";
import classNames from "classnames";
import useGetPrefix from "../hooks/useGetPrefix";
import useSetColor from "../hooks/useSetColor";

export type LoadingType =
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

export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
    spinning?: boolean;
    type?: LoadingType;
    color?: string;
    tip?: string;
}

const Loading: React.FC<LoadingProps> = (props) => {
    const { spinning, tip, type, children, color, ...restProps } = props;

    const isNestedPattern = !!children;
    const prefixCls = useGetPrefix("loading");
    const loadingRef = React.useRef<HTMLDivElement>(null);

    useSetColor(loadingRef, "color", color, true);

    const animationElement = (
        <div className={`${prefixCls}-animation`}>
            <div className={`${prefixCls}-animation-1`} />
            <div className={`${prefixCls}-animation-2`} />
            <div className={`${prefixCls}-animation-3`} />
            <div className={`${prefixCls}-animation-4`} />
        </div>
    );

    const spinElement = (
        <div
            className={classNames(`${prefixCls}`, { [`${prefixCls}-${type}`]: type })}
            ref={loadingRef}
            {...restProps}
        >
            {animationElement}
            {tip ? <div className={`${prefixCls}-text`}>{tip}</div> : null}
        </div>
    );

    if (isNestedPattern) {
        const containerClassName = classNames(`${prefixCls}-container`, {
            [`${prefixCls}-blur`]: spinning
        });

        return (
            <div className={`${prefixCls}-nested`} {...restProps}>
                {spinning ? <div>{spinElement}</div> : null}
                <div className={containerClassName}>{children}</div>
            </div>
        );
    }

    return spinElement;
};

Loading.displayName = "MR_Loading";
Loading.defaultProps = {
    type: "default",
    spinning: true
};
export default Loading;
