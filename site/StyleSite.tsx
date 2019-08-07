import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *::before {
        box-sizing: border-box;
    }    
    *::after {
        box-sizing: border-box;
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight: normal;
    }
    ul, li{
        list-style: none;
        margin: 0;
        padding: 0;
    }
`;

export const StyleLogoWrapper = styled.div`
    padding: 0 20px;
    
    img {
        height: 64px;
    }
`;

export const StyleAsideUl = styled.ul`
    padding: 0 16px;

    li {
        font-family: system-ui,sans-serif;
        font-weight: 400;
        line-height: 1.5;

        a {
            color: #000;
            display: block;
            padding-left: 8px;
            padding-right: 8px;
            padding-top: 8px;
            padding-bottom: 8px;
            font-size: 14px;
            font-weight: 700;
            text-decoration: none;
            transition: color 0.2s ease-out 0s;
        }

        a:hover {
            color: #1F74FF;
        }

        a.active {
            color: #1F74FF;
        }
    }
`;
