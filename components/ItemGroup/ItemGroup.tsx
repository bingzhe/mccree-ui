import * as React from "react";

import { ItemGroupProps } from "./ItemGroup.type";
import { Box, Item, Icon, Transition } from "../index";
import {
    StyledItemGroupTitleSuffixWrapper,
    StyledItemGroupTitleWrapper,
    StyledItemGroupItemWrapper
} from "./ItemGroup.styled";

import { useHover } from "../hooks/useHover";
import { usePopper } from "../hooks/usePopper";

const ItemGroup: React.FC<ItemGroupProps> = (
    {
        level = 1,
        children,
        title,
        shrink = "expand",
        prefix,
        ...rest
    }
) => {

    const [open, setOpen] = React.useState(false);
    // const handleOpen = React.useCallback(() => {
    //     if (expanded) setOpen(v => !v);
    // }, [expanded]);

    const [hoverStatus, bindHover] = useHover();
    const [referenceRef, popperRef] = usePopper<HTMLDivElement, HTMLDivElement>({
        placement: "right-start",
        eventsEnabled: true,
        positionFixed: true,
        modifiers: {
            preventOverflow: {
                enabled: true,
                priority: ["right", "bottom"],
                boundariesElement: "viewport"
            },
            flip: {
                enabled: true
            }
        }
    });

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
                        <Item prefix={prefix}>{title}</Item>
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
                <StyledItemGroupTitleWrapper ref={referenceRef} {...bindHover}>
                    <Item prefix={prefix}>{title}</Item>
                    <StyledItemGroupTitleSuffixWrapper open={hoverStatus}>
                        <Icon name="right" />
                    </StyledItemGroupTitleSuffixWrapper>
                    <Transition visible={hoverStatus} type="grow" wrapper={false}>
                        <StyledItemGroupItemWrapper ref={popperRef} level={level} float={isFloat}>
                            {childElements}
                        </StyledItemGroupItemWrapper>
                    </Transition>
                </StyledItemGroupTitleWrapper>
            )}
        </Box>
    );
};


ItemGroup.displayName = "FItemGroup";

export default ItemGroup;
