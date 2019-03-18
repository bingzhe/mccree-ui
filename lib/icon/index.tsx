import React from "react";
import './importIcons';
import './icon.scss';
import classes from "../_util/classes";

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    const { className, name, ...restProps } = props;
    return (
        <svg
            className={classes('r-icon', className)}
            {...restProps}
        >
            <use xlinkHref={`#${name}`} />
        </svg>
    );
}

export default Icon;