import * as React from "react";
import { NavigationContext } from "../Navigation/Navigation";
import { ItemProps } from "./Item.type";
import {
    StyledItemWrapper,
    StyledItemPrefixWrapper,
    StyledItemTextWrapper,
    StyledItemActiveBar
} from "./Item.styled";

const Item: React.FC<ItemProps> = React.forwardRef<HTMLDivElement, ItemProps>(
    ({ value, prefix, active, children, onClick, ...rest }, ref) => {

        const {
            value: activeID,
            horizontal,
            onChange,
            reveal: navigationReveal,
            expanded,
        } = React.useContext(NavigationContext);

        const handleItemClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
            onClick && onClick(e);
            onChange && value && onChange(value);
        };

        const [_active, setActive] = React.useState(false);

        React.useEffect(() => {
            if (value && activeID) {
                value === activeID ? setActive(true) : setActive(false);
            }
        }, [activeID, value]);

        return (
            <StyledItemWrapper reveal={true} ref={ref} onClick={handleItemClick} {...rest}>
                {!!value && <StyledItemActiveBar active={active || _active} horizontal={horizontal} />}
                <StyledItemPrefixWrapper>{prefix}</StyledItemPrefixWrapper>
                <StyledItemTextWrapper expanded={expanded} hasPrefix={!!prefix}>
                    {children}
                </StyledItemTextWrapper>
            </StyledItemWrapper>
        );
    });

Item.displayName = "FItem";

export default Item;