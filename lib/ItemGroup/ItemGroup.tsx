import * as React from "react";

import { ItemGroupProps } from "./ItemGroup.type";
import { Box, Item, Icon } from "../index";
import {
    StyledItemGroupTitleSuffixWrapper,
    StyledItemGroupTitleWrapper,
    StyledItemGroupItemWrapper
} from "./ItemGroup.styled";

const ItemGroup: React.FC<ItemGroupProps> = ({ level = 1, children, title, ...rest }) => {

    const expanded = false;

    const [open, setOpen] = React.useState(true);
    // const handleOpen = React.useCallback(() => {
    //     if (expanded) setOpen(v => !v);
    // }, [expanded]);

    const handleOpen = () => {
        console.log(11);
        setOpen(v => !v);
    };


    const childElements = React.Children.map(
        children,
        (child: React.ReactElement, i): React.ReactElement => {
            if (child.type && child.type.displayName === "FItemGroup") {
                return React.cloneElement(child, { level: level + 1 });
            }
            return child;
        }
    );

    return (
        <Box>
            <StyledItemGroupTitleWrapper onClick={handleOpen}>
                <Item>{title}</Item>
                <StyledItemGroupTitleSuffixWrapper open={open}>
                    <Icon name="down" />
                </StyledItemGroupTitleSuffixWrapper>
            </StyledItemGroupTitleWrapper>
            {open && (
                <StyledItemGroupItemWrapper level={level}>
                    {childElements}
                </StyledItemGroupItemWrapper>
            )}
        </Box>
    );
};


ItemGroup.displayName = "FItemGroup";

export default ItemGroup;
