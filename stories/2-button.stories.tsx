import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "../components/button/index";

export const ButtonBook = () => (<Button>test</Button>);

ButtonBook.story = {
    name: "Button",
};

// export default {
//     title: "Button",
//     component: ButtonBook,
// };

storiesOf("demo", module)
    .add(
        "demo div",
        () => {
            return (
                <div>DEMO</div>
            );
        }
    )
    .add(
        "Button",
        () => {
            return (
                <>
                    <ButtonBook></ButtonBook>
                </>
            );
        }
    );
