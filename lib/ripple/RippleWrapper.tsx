import * as React from "react";

import Ripple from "./Ripple";

interface Props {

}

const RippleWrapper: React.FunctionComponent<Props> = (props) => {
    const center = false;

    const [nextKey, setNextKey] = React.useState(0);
    const [ripples, setRipples] = React.useState([]);

    const container = React.createRef<HTMLSpanElement>();


    const start = (e) => {
        const element = container.current;

        const rect = element
            ? element.getBoundingClientRect()
            : {
                width: 0,
                height: 0,
                left: 0,
                top: 0
            };

        let rippleX;
        let rippleY;
        let rippleSize;


    };

    React.useEffect(() => {
        console.log("container", container.current);

        return () => {
            console.log(111);
        };
    });



    return (
        <span ref={container}></span>
    );
};

export default RippleWrapper;