import * as React from "react";

// TODO: BoxPropTypes
import { BoxProps } from "../Box";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

export type NavigationID = string | number;

export interface NavigationProps extends Omit<BoxProps, "onChange"> {
    horizontal?: boolean;
    expanded?: boolean;
    acrylic?: boolean;
    reveal?: boolean;
    value?: NavigationID;
    onChange?: (id: NavigationID) => void;
}

export interface NavigationContextType {
    value: NavigationID;
    onChange: (id: NavigationID) => void;
    expanded: boolean;
    reveal: boolean;
    acrylic: boolean;
    horizontal: boolean;
}

export interface NavigationType
    extends React.ForwardRefExoticComponent<NavigationProps & React.RefAttributes<HTMLDivElement>> {
    Header: typeof Header;
    Content: typeof Content;
    Footer: typeof Footer;
}

export type NavigationChild =
    | React.ReactComponentElement<typeof Header>
    | React.ReactComponentElement<typeof Footer>
    | React.ReactComponentElement<typeof Content>
    | any

export interface NavigationContainer {
    header: React.ReactComponentElement<typeof Header>[];
    content: React.ReactComponentElement<typeof Content>[];
    footer: React.ReactComponentElement<typeof Footer>[];
}

export interface NavigationHeaderProps {
    children: React.ReactNode;
}
export interface NavigationContentProps {
    children: React.ReactNode;
}
export interface NavigationFooterProps {
    children: React.ReactNode;
}