import * as React from "react";
import Box from "../../Box";
import { NavigationFooterProps } from "../Navigation.type";

const Footer: React.FC<NavigationFooterProps> = ({ children }) => <Box>{children}</Box>;

Footer.displayName = "FNavigationFooter";

export default Footer;
