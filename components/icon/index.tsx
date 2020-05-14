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


export interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
    spin?: boolean;
    rotate?: number;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    const {
        className,
        name,
        spin,
        rotate,
        ...restProps
    } = props;

    const { getPrefixCls } = React.useContext(ConfigContext);

    const prefixCls = getPrefixCls("icon");
    const classes = classNames(prefixCls, className, {
        [`${prefixCls}-spin`]: spin
    });

    const styles = rotate ? {
        transform: `rotate(${rotate}deg)`
    } : {};

    // const prefixCls = get;
    return (
        <svg
            className={classes}
            name={name}
            {...restProps}
            style={styles}
        >
            <use xlinkHref={`#${name}`} />
        </svg>
    );
};

export default Icon;