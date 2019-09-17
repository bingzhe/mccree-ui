import * as React from "react";

import { ItemGroupProps } from "./ItemGroup.type";
import { Box, Item, Icon, Transition } from "../index";
import {
    StyledItemGroupTitleSuffixWrapper,
    StyledItemGroupTitleWrapper,
    StyledItemGroupItemWrapper
} from "./ItemGroup.styled";

import { useHover } from "../hooks/useHover";

const ItemGroup: React.FC<ItemGroupProps> = (
    {
        level = 1,
        children,
        title,
        shrink = "expand",
        ...rest
    }
) => {

    const [open, setOpen] = React.useState(false);
    // const handleOpen = React.useCallback(() => {
    //     if (expanded) setOpen(v => !v);
    // }, [expanded]);

    const [hoverStatus, bindHover] = useHover();

    console.log(hoverStatus, bindHover);

    const isFloat = shrink === "float";
    const handleOpen = () => {
        setOpen(v => !v);
    };


    const childElements = React.Children.map(
        children,
        (child: React.ReactElement, i): React.ReactElement => {
            if (child.type && (child as any).type.displayName === "FItemGroup") {
                return React.cloneElement(child, { level: level + 1 });
            }
            return child;
        }
    );

    return (
        <Box>
            {shrink === "expand" && (
                <>
                    <StyledItemGroupTitleWrapper onClick={handleOpen}>
                        <Item>{title}</Item>
                        <StyledItemGroupTitleSuffixWrapper open={open}>
                            <Icon name="down" />
                        </StyledItemGroupTitleSuffixWrapper>
                    </StyledItemGroupTitleWrapper>
                    <Transition visible={open} type="collapse">
                        <StyledItemGroupItemWrapper level={level}>
                            {childElements}
                        </StyledItemGroupItemWrapper>
                    </Transition>
                </>
            )}
            {isFloat && (
                <>
                    <StyledItemGroupTitleWrapper {...bindHover}>
                        <Item>{title}</Item>
                        <StyledItemGroupTitleSuffixWrapper open={hoverStatus}>
                            <Icon name="right" />
                        </StyledItemGroupTitleSuffixWrapper>
                    </StyledItemGroupTitleWrapper>
                    {JSON.stringify(hoverStatus)}
                    <Transition visible={hoverStatus} type="grow">
                        <StyledItemGroupItemWrapper level={level} float={isFloat}>
                            {childElements}
                        </StyledItemGroupItemWrapper>
                    </Transition>
                </>
            )}
        </Box>
    );
};


ItemGroup.displayName = "FItemGroup";

export default ItemGroup;
