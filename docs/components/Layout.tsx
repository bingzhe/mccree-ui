import React from "react";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider, Normalize, Theme } from "../../components/index";

interface LayoutProps {
    children: React.ReactNode;
}

const theme: Theme = {};

// body {
//     overflow: hidden;
// }
const GlobalStyle = createGlobalStyle`
    code {
        background-color: rgba(27, 31, 35, 0.05);
        border-radius: 3px;
        font-size: 85%;
        margin: 0;
        padding: 0.2em 0.4em;
    }
`;

const Layout: React.FC<LayoutProps> = ({ children }) => (
    <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalStyle />
        {children}
    </ThemeProvider>
);

export default Layout;