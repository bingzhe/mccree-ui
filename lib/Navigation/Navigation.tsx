import * as React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import {
    NavigationType,
    NavigationProps,
    NavigationContainer,
    NavigationChild
} from "./Navigation.type";
import {
    StyledNavigationWrapper,
    StyledContent
} from "./Navigation.styled";

export const NavigationContext = React.createContext<NavigationProps>({
    value: "",
    onChange: (): void => { },
    expanded: true,
    reveal: false,
    acrylic: false,
    horizontal: false,
});

const Navigation: React.FC<NavigationProps> = React.forwardRef<HTMLDivElement, NavigationProps>(
    (
        {
            horizontal = false,
            expanded = true,
            acrylic = false,
            reveal,
            value,
            onChange,
            children,
            ...rest
        },
        ref
    ) => {

        const container: NavigationContainer = {
            header: [],
            footer: [],
            content: []
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
        reveal = acrylic ? false : reveal;

        return (
            <StyledNavigationWrapper horizontal={horizontal} expanded={expanded} {...rest}>
                <div>{container.header}</div>
                <StyledContent horizontal={horizontal}>{container.content}</StyledContent>
                <div>{container.footer}</div>
            </StyledNavigationWrapper>
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