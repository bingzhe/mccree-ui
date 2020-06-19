import * as React from "react";
import { Transition } from "react-transition-group";
import classNames from "classnames";

import { ConfigContext } from "../config-provider";

interface Props {
    rippleX: number;
    rippleY: number;
    rippleSize: number;
    color: string;
    timeout: {
        enter: number;
        exit: number;
    };
}

const Ripple: React.FC<Props> = (props) => {
    const { rippleX, rippleY, rippleSize, color, timeout, ...restProps } = props;

    const { getPrefixCls } = React.useContext(ConfigContext);
    const prefixCls = getPrefixCls("ripple");

    const [visible, setVisible] = React.useState<boolean>(false);
    const [leaving, setLeaving] = React.useState<boolean>(false);

    const handleEnter = () => {
        setVisible(true);
    };

    const handleExit = () => {
        setLeaving(true);
    };

    const rippleStyles = {
        width: rippleSize,
        height: rippleSize,
        top: -(rippleSize / 2) + rippleY,
        left: -(rippleSize / 2) + rippleX
    };

    const rippleClasses = classNames(prefixCls, {
        [`${prefixCls}-visible`]: visible
    });

    const childPrefixCls = `${prefixCls}-child`;
    const childClasses = classNames(childPrefixCls, {
        [`${childPrefixCls}-leaving`]: leaving
    });

    return (
        <Transition onEnter={handleEnter} onExit={handleExit} timeout={timeout} {...restProps}>
            <span className={rippleClasses} style={rippleStyles}>
                <span className={childClasses} style={{ background: color }} />
            </span>
        </Transition>
    );
};

export default Ripple;
