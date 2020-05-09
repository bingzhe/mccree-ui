import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";

import Icon from "../components/icon/index";

storiesOf("Icon", module)
    .add(
        "Icon",
        () => {
            return (
                <div>
                    <h4>Icon</h4>
                    {/* <Icon name="step-backward" /> */}
                    <Icon name="qq" />

                </div>
            );
        }
    );