import * as React from "react";
import { ItemProps } from "./Item.type";

const Item: React.FC<ItemProps> = React.forwardRef<HTMLDivElement, ItemProps>((props, ref) => {
    const {
        value,
        prefix,
        active,
        children,
        onClick,
        ...rest
    } = props;

    const handleItemClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
        onClick && onClick(e);
    };

    // const [_active, setActive] = React.useState(false);

    return (
        <div ref={ref} onClick={handleItemClick} {...rest}>
            {children}
        </div>
    );
});

export default Item;