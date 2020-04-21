import React from 'react';
import { storiesOf } from "@storybook/react";
// import { withThemesProvider } from "storybook-addon-styled-component-theme";

import createTheme from "../components/styles/createTheme"
import { ThemeProvider } from "../components/ThemeProvider/index";


import Input from '../components/input/index';
// import { colors } from "../components/index"

export default {
    title: '12 FButton',
    component: Input,
};
export const ButtonBook = () => <Input />;

// ButtonBook.story = {
//     name: '1Button',
// };
const theme1 = createTheme({})
console.log({ theme1 })

// const themes = [theme1]

storiesOf("demo", module)
    .add(
        "demo div",
        () => {
            return (
                <ThemeProvider theme={{}}>
                    <div>DEMO</div>
                </ThemeProvider>
            ) 
        }
    );