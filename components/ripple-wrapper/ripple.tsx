import * as React from "react";
import classNames from "classnames";

import useEventCallback from "../utils/useEventCallback";
import { ConfigContext } from "../config-provider";

const useEnhancedEffect = typeof window === "undefined" ? React.useEffect : React.useLayoutEffect;

interface RippleProps {
    pulsate?: boolean;
    rippleX: number;
    rippleY: number;
    rippleSize: number;
    color: string;
    timeout: number;
    in?: boolean;
    solid: boolean;
    onExited?: () => void;
}

const Ripple: React.FC<RippleProps> = (props) => {
    const {
        pulsate = false,
        rippleX,
        rippleY,
        rippleSize,
        in: inProp,
        onExited = () => {},
        timeout,
        solid,
        color
    } = props;

    const { getPrefixCls } = React.useContext(ConfigContext);
    const prefixCls = getPrefixCls("ripple");

    const [leaving, setLeaving] = React.useState(false);

    const rippleClassName = classNames(prefixCls, `${prefixCls}-visible`, {
        [`${prefixCls}-pulsate`]: pulsate,
        [`${prefixCls}-solid`]: solid
    });

    const rippleStyles = {
        width: rippleSize,
        height: rippleSize,
        top: -(rippleSize / 2) + rippleY,
        left: -(rippleSize / 2) + rippleX
    };

    const childPrefixCls = `${prefixCls}-child`;
    const childClassName = classNames(childPrefixCls, {
        [`${childPrefixCls}-leaving`]: leaving,
        [`${childPrefixCls}-pulsate`]: pulsate
    });

    const handleExited = useEventCallback(onExited);

    useEnhancedEffect(() => {
        if (!inProp) {
            // react-transition-group#onExit
            setLeaving(true);

            // react-transition-group#onExited
            const timeoutId = setTimeout(handleExited, timeout);
            return () => {
                clearTimeout(timeoutId);
            };
        }
        return undefined;
    }, [handleExited, inProp, timeout]);

    return (
        <span className={rippleClassName} style={rippleStyles}>
            <span className={childClassName} style={{ background: color }} />
        </span>
    );
};

export default Ripple;
