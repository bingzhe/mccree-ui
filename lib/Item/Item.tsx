import * as React from "react";
import { ItemProps } from "./Item.type";
import { StyledItemWrapper, StyledItemPrefixWrapper, StyledItemTextWrapper } from "./Item.styled";

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
    const expanded = true;

    return (
        <StyledItemWrapper reveal={true} ref={ref} onClick={handleItemClick} {...rest}>
            <StyledItemPrefixWrapper>{prefix}</StyledItemPrefixWrapper>
            <StyledItemTextWrapper expanded={expanded} hasPrefix={!!prefix}>
                {children}
            </StyledItemTextWrapper>
        </StyledItemWrapper>
    );
});

export default Item;