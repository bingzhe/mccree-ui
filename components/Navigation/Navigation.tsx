import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useReveal } from "../hooks/useReveal";
import {
    NavigationType,
    NavigationProps,
    NavigationContainer,
    NavigationChild,
    NavigationID,
    NavigationContextType,
} from "./Navigation.type";
import {
    StyledNavigationWrapper,
    StyledHeader,
    StyledContent,
    StyledFooter
} from "./Navigation.styled";


export const NavigationContext = React.createContext<NavigationContextType>({
    value: "",
    onChange: (): void => { },
    expanded: true,
    reveal: false,
    acrylic: false,
    horizontal: false,
});

const Navigation: React.FC<NavigationProps> = React.forwardRef<HTMLDivElement, NavigationProps>(
    (props, ref) => {

        const {
            horizontal = false,
            expanded = true,
            acrylic = false,
            reveal,
            value,
            onChange,
            children,
            ...rest
        } = props;

        const container: NavigationContainer = {
            header: [],
            footer: [],
            content: []
        };

        const contextValue = {
            value: value as NavigationID,
            onChange: onChange as (id: NavigationID) => void,
            expanded: expanded as boolean,
            reveal: reveal as boolean,
            acrylic: acrylic as boolean,
            horizontal: horizontal as boolean,
        };

        React.Children.forEach(
            children,
            (child: NavigationChild) => {
                if (child.type && child.type.displayName === "FNavigationHeader") {
                    container.header.push(child);
                } else if (child.type && child.type.displayName === "FNavigationFooter") {
                    container.footer.push(child);
                } else {
                    container.content.push(child);
                }
            }
        );

        // eslint-disable-next-line no-param-reassign
        const curReveal = acrylic ? false : reveal;

        const [RevealWrapper] = useReveal(66);

        const RevealHeader = React.useMemo(
            (): React.ReactElement[] => {
                return container.header.map(
                    (child, i) => <RevealWrapper key={i}>{child}</RevealWrapper>
                );
            },
            []
        );
        const RevealContent = React.useMemo(
            (): React.ReactElement[] => {
                return container.content.map(
                    (child, i) => {
                        if (child.type && child.type.displayName === "FItem") {
                            return <RevealWrapper key={i}>{child}</RevealWrapper>;
                        }
                        return child;
                    }
                );
            },
            []
        );
        const RevealFooter = React.useMemo(
            (): React.ReactElement[] => {
                return container.footer.map(
                    (child, i) => <RevealWrapper key={i}>{child}</RevealWrapper>
                );
            },
            []
        );

        return (
            <NavigationContext.Provider value={contextValue}>
                <StyledNavigationWrapper ref={ref} horizontal={horizontal} expanded={expanded} {...rest} acrylic={acrylic}>
                    <StyledHeader horizontal={horizontal}>
                        {curReveal ? RevealHeader : container.header}
                    </StyledHeader>
                    <StyledContent horizontal={horizontal}>
                        {curReveal ? RevealContent : container.content}
                    </StyledContent>
                    <StyledFooter horizontal={horizontal}>
                        {curReveal ? RevealFooter : container.footer}
                    </StyledFooter>
                </StyledNavigationWrapper>
            </NavigationContext.Provider>
        );
    }
);



Object.defineProperty(Navigation, "Header", {
    get(): typeof Header {
        return Header;
    }
});

Object.defineProperty(Navigation, "Footer", {
    get(): typeof Footer {
        return Footer;
    }
});

Object.defineProperty(Navigation, "Content", {
    get(): typeof Content {
        return Content;
    }
});

export default Navigation as NavigationType;