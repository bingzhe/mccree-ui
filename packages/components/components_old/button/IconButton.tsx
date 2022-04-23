import * as React from "react";
import Button, { ButtonProps } from "./Button";

type IconButtonProps = Omit<ButtonProps, "centerRipple" | "shape">;

const IconButton: React.FC<IconButtonProps> = (props) => {
    const { children, ...restProps } = props;
    return (
        <Button centerRipple shape="circle" {...restProps}>
            {children}
        </Button>
    );
};

export default IconButton;
