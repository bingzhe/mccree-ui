import * as React from "react";
import { BoxProps, BoxPropTypes } from "./Box.type";
import { BaseBox, AcrylicBox } from "./Box.styled";
import { getSystemPropTypes, system } from "../styles/styled";

const Box: React.FC<BoxProps> = React.forwardRef<HTMLDivElement, BoxProps>(({ acrylic = false, ...rest }, ref) => {
    if (acrylic) {
        return <AcrylicBox ref={ref} {...rest} />;
    }
    return <BaseBox ref={ref} {...rest} />;
});

Box.displayName = "FBox";

Box.propTypes = {
    ...getSystemPropTypes(system),
    ...BoxPropTypes
};

export default Box;