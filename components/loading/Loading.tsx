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
    loading?: boolean;
    type?: LoadingType;
    color?: string;
    background?: string;
    text?: string;
}

const Loading: React.FC<LoadingProps> = (props) => {
    const { loading, text, children } = props;

    const isNestedPattern = !!children;
    const prefixCls = useGetPrefix("loading");

    console.log({ prefixCls });
    console.log({ isNestedPattern });

    const renderDots = () => {
        return (
            <span className={classNames(`${prefixCls}-dot`, `${prefixCls}-dot-spin`)}>
                <i className={`${prefixCls}-dot-item`} />
                <i className={`${prefixCls}-dot-item`} />
                <i className={`${prefixCls}-dot-item`} />
                <i className={`${prefixCls}-dot-item`} />
            </span>
        );
    };

    if (isNestedPattern) {
        return (
            <div className={`${prefixCls}-nested-loading`}>
                {loading ? <div>{renderDots()}</div> : null}
            </div>
        );
    }

    return (
        <div className={prefixCls}>
            {renderDots()}
            {text ? <div className={`${prefixCls}-text`}>{text}</div> : null}
        </div>
    );
};

export default Loading;
