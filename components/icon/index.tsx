import * as React from "react";
import classNames from "classnames";

// import { loadingCircle } from "../themes/animations";
import "./importIcons";
import { ConfigContext } from "../config-provider";

// const SpinStyle = css<IconProps>`
//     animation: ${loadingCircle} 1s infinite linear;
// `;

// const rotateStyle = css<IconProps>`
//     transform: rotate(${props => props.rotate}deg);
// `;

// const StyleSvg = styled.svg<IconProps>`
//     width: 1em;
//     height: 1em;
//     vertical-align: -0.15em;
//     fill: currentColor;
//     overflow: hidden;

//     ${props => props.spin && SpinStyle}
//     ${props => props.rotate && rotateStyle}
// `;

const StyleSvg = {
    width: "1em",
    height: "1em",
    verticalAlign: "-0.15em",
    fill: "currentColor",
    overflow: "hidden"
};

export interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
    spin?: boolean;
    rotate?: number;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    const { className, name, ...restProps } = props;
    const { getPrefixCls } = React.useContext(ConfigContext);

    const prefixCls = getPrefixCls("icon");

    const classes = classNames(prefixCls, className);

    console.log({ classes });
    // const prefixCls = get;
    return (
        <svg
            className={classes}
            name={name}
            {...restProps}
            style={StyleSvg}
        >
            <use xlinkHref={`#${name}`} />
        </svg>
    );
};

export default Icon;