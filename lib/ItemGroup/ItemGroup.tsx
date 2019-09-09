import * as React from "react";

import { ItemGroupProps } from "./ItemGroup.type";
import { Box, Item, Icon } from "../index";
import {
    StyledItemGroupTitleSuffixWrapper,
    StyledItemGroupTitleWrapper
} from "./ItemGroup.styled";

const ItemGroup: React.FC<ItemGroupProps> = ({ children, title, ...rest }) => {

    const expanded = false;

    const [open, setOpen] = React.useState(true);
    // const handleOpen = React.useCallback(() => {
    //     if (expanded) setOpen(v => !v);
    // }, [expanded]);

    const handleOpen = () => {
        console.log(11);
        setOpen(v => !v);
    };

    return (
        <Box>
            <StyledItemGroupTitleWrapper onClick={handleOpen}>
                <Item>{title}</Item>
                <StyledItemGroupTitleSuffixWrapper open={open}>
                    <Icon name="down" />
                </StyledItemGroupTitleSuffixWrapper>
            </StyledItemGroupTitleWrapper>
            <div>
                {children}
            </div>
        </Box>
    );
};

export default ItemGroup;