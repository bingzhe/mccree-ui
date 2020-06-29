import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "../components/button/index";
import Icon from "../components/icon/index";
import "../components/styles/index.less";
import "../components/button/style/index";

import "./styles/common.less";
import "./styles/button.less";

storiesOf("Button", module)
    .add("Button", () => {
        return (
            <div className="page-wrapper button-wrapper">
                <div>
                    <h4>———— type ————</h4>
                    <Button onClick={action("clicked")}>DEFAULT</Button>
                    <Button type="primary" onClick={action("clicked")}>
                        PRIMARY
                    </Button>
                    <Button type="secondary" onClick={action("clicked")}>
                        SECONDARY
                    </Button>
                    <Button type="success" onClick={action("clicked")}>
                        SUCCESS
                    </Button>
                    <Button type="error" onClick={action("clicked")}>
                        ERROR
                    </Button>
                    <Button type="warning" onClick={action("clicked")}>
                        WARNING
                    </Button>
                    <Button type="info" onClick={action("clicked")}>
                        INFO
                    </Button>
                    <Button disabled type="primary" onClick={action("clicked")}>
                        PRIMARY
                    </Button>
                    <Button
                        target="block"
                        href="http://bingzhe.github.io/"
                        type="primary"
                        onClick={action("clicked")}
                    >
                        LINK
                    </Button>
                </div>

                <div>
                    <h4>———— outline ————</h4>
                    <Button variant="outline" onClick={action("clicked")}>
                        DEFAULT
                    </Button>
                    <Button variant="outline" type="primary" onClick={action("clicked")}>
                        PRIMARY
                    </Button>
                    <Button variant="outline" type="secondary" onClick={action("clicked")}>
                        SECONDARY
                    </Button>
                    <Button variant="outline" type="success" onClick={action("clicked")}>
                        SUCCESS
                    </Button>
                    <Button variant="outline" type="error" onClick={action("clicked")}>
                        ERROR
                    </Button>
                    <Button variant="outline" type="warning" onClick={action("clicked")}>
                        WARNING
                    </Button>
                    <Button variant="outline" type="info" onClick={action("clicked")}>
                        INFO
                    </Button>
                    <Button disabled variant="outline" type="primary" onClick={action("clicked")}>
                        PRIMARY
                    </Button>
                    <Button
                        target="block"
                        variant="outline"
                        href="http://bingzhe.github.io/"
                        type="primary"
                        onClick={action("clicked")}
                    >
                        LINK
                    </Button>
                </div>

                <div>
                    <h4>———— text ———— </h4>
                    <Button variant="text" onClick={action("clicked")}>
                        DEFAULT
                    </Button>
                    <Button variant="text" type="primary" onClick={action("clicked")}>
                        PRIMARY
                    </Button>
                    <Button variant="text" type="secondary" onClick={action("clicked")}>
                        SECONDARY
                    </Button>
                    <Button variant="text" type="success" onClick={action("clicked")}>
                        SUCCESS
                    </Button>
                    <Button variant="text" type="error" onClick={action("clicked")}>
                        ERROR
                    </Button>
                    <Button variant="text" type="warning" onClick={action("clicked")}>
                        WARNING
                    </Button>
                    <Button variant="text" type="info" onClick={action("clicked")}>
                        INFO
                    </Button>
                    <Button disabled variant="text" type="primary" onClick={action("clicked")}>
                        PRIMARY
                    </Button>
                    <Button
                        target="block"
                        variant="text"
                        href="http://bingzhe.github.io/"
                        type="secondary"
                        onClick={action("clicked")}
                    >
                        LINK
                    </Button>
                </div>
                <div>
                    <h4>———— size ———— </h4>
                    <Button type="primary" size="large" onClick={action("clicked")}>
                        Large
                    </Button>
                    <Button type="primary" onClick={action("clicked")}>
                        DEFAULT
                    </Button>
                    <Button type="primary" size="small" onClick={action("clicked")}>
                        Small
                    </Button>
                    <Button
                        variant="outline"
                        type="primary"
                        size="large"
                        onClick={action("clicked")}
                    >
                        Large
                    </Button>
                    <Button variant="outline" type="primary" onClick={action("clicked")}>
                        DEFAULT
                    </Button>
                    <Button
                        variant="outline"
                        type="primary"
                        size="small"
                        onClick={action("clicked")}
                    >
                        Small
                    </Button>
                    <Button variant="text" type="primary" size="large" onClick={action("clicked")}>
                        Large
                    </Button>
                    <Button variant="text" type="primary" onClick={action("clicked")}>
                        DEFAULT
                    </Button>
                    <Button variant="text" type="primary" size="small" onClick={action("clicked")}>
                        Small
                    </Button>
                </div>

                <div>
                    <h4>———— block ———— </h4>
                    <Button type="primary" onClick={action("clicked")} block>
                        PRIMARY
                    </Button>
                    <Button disabled type="primary" onClick={action("clicked")} block>
                        PRIMARY
                    </Button>
                    <Button variant="outline" type="primary" onClick={action("clicked")} block>
                        PRIMARY
                    </Button>
                    <Button
                        disabled
                        variant="outline"
                        type="primary"
                        onClick={action("clicked")}
                        block
                    >
                        PRIMARY
                    </Button>
                    <Button variant="text" type="primary" onClick={action("clicked")} block>
                        PRIMARY
                    </Button>
                    <Button
                        disabled
                        variant="text"
                        type="primary"
                        onClick={action("clicked")}
                        block
                    >
                        PRIMARY
                    </Button>
                </div>
                <div>
                    <h4>———— link ———— </h4>
                    <Button
                        target="block"
                        href="http://bingzhe.github.io/"
                        type="primary"
                        onClick={action("clicked")}
                    >
                        LINK
                    </Button>
                    <Button
                        target="block"
                        variant="outline"
                        href="http://bingzhe.github.io/"
                        type="primary"
                        onClick={action("clicked")}
                    >
                        LINK
                    </Button>
                    <Button
                        target="block"
                        variant="text"
                        href="http://bingzhe.github.io/"
                        type="primary"
                        onClick={action("clicked")}
                    >
                        LINK
                    </Button>
                </div>
                <div>
                    <h4>———— disabled ———— </h4>
                    <Button disabled onClick={action("clicked")}>
                        DEFAULT
                    </Button>
                    <Button disabled type="primary" onClick={action("clicked")}>
                        PRIMARY
                    </Button>
                    <Button disabled variant="outline" onClick={action("clicked")}>
                        DEFAULT
                    </Button>
                    <Button disabled variant="outline" type="primary" onClick={action("clicked")}>
                        PRIMARY
                    </Button>
                    <Button disabled variant="text" onClick={action("clicked")}>
                        DEFAULT
                    </Button>
                    <Button disabled variant="text" type="primary" onClick={action("clicked")}>
                        PRIMARY
                    </Button>
                    <Button
                        disabled
                        target="block"
                        href="http://bingzhe.github.io/"
                        type="primary"
                        onClick={action("clicked")}
                    >
                        LINK
                    </Button>
                    <Button
                        disabled
                        target="block"
                        variant="outline"
                        href="http://bingzhe.github.io/"
                        type="primary"
                        onClick={action("clicked")}
                    >
                        LINK
                    </Button>
                    <Button
                        disabled
                        target="block"
                        variant="text"
                        href="http://bingzhe.github.io/"
                        type="primary"
                        onClick={action("clicked")}
                    >
                        LINK
                    </Button>
                </div>

                <div>
                    <h4>———— shape ———— </h4>
                    <Button shape="round" onClick={action("clicked")}>
                        DEFAULT
                    </Button>
                    <Button shape="round" type="primary" onClick={action("clicked")}>
                        PRIMARY
                    </Button>
                    <Button shape="round" type="primary" onClick={action("clicked")}>
                        P
                    </Button>

                    <Button shape="round" onClick={action("clicked")} size="large">
                        DEFAULT
                    </Button>
                    <Button shape="round" type="primary" onClick={action("clicked")} size="small">
                        PRIMARY
                    </Button>
                    <Button shape="round" variant="outline" onClick={action("clicked")}>
                        DEFAULT
                    </Button>
                    <Button
                        shape="round"
                        variant="outline"
                        type="primary"
                        onClick={action("clicked")}
                    >
                        PRIMARY
                    </Button>
                    <Button shape="round" variant="text" onClick={action("clicked")}>
                        DEFAULT
                    </Button>
                    <Button shape="round" variant="text" type="primary" onClick={action("clicked")}>
                        PRIMARY
                    </Button>
                    <Button
                        shape="round"
                        target="block"
                        href="http://bingzhe.github.io/"
                        type="primary"
                        onClick={action("clicked")}
                    >
                        LINK
                    </Button>
                    <Button
                        shape="round"
                        target="block"
                        variant="outline"
                        href="http://bingzhe.github.io/"
                        type="primary"
                        onClick={action("clicked")}
                    >
                        LINK
                    </Button>
                    <Button
                        shape="round"
                        target="block"
                        variant="text"
                        href="http://bingzhe.github.io/"
                        type="primary"
                        onClick={action("clicked")}
                    >
                        LINK
                    </Button>

                    <Button shape="circle" type="primary" onClick={action("clicked")}>
                        P
                    </Button>
                </div>

                <div>
                    <h4>———— Loading ———— </h4>
                    <Button loading type="primary" onClick={action("clicked")}>
                        DEFAULT
                    </Button>
                </div>

                <div>
                    <h4>———— Icon ———— </h4>
                    <Button loading type="primary" onClick={action("clicked")}>
                        DEFAULT
                    </Button>
                    <Button type="primary" onClick={action("clicked")}>
                        DEFAULT
                    </Button>
                    <Button
                        size="large"
                        startIcon={<Icon name="caret-left" />}
                        type="primary"
                        onClick={action("clicked")}
                    >
                        DEFAULT
                    </Button>
                    <Button
                        startIcon={<Icon name="caret-left" />}
                        type="primary"
                        onClick={action("clicked")}
                    >
                        DEFAULT
                    </Button>
                    <Button
                        size="small"
                        startIcon={<Icon name="caret-left" />}
                        type="primary"
                        onClick={action("clicked")}
                    >
                        DEFAULT
                    </Button>

                    <Button
                        endIcon={<Icon name="caret-right" />}
                        type="primary"
                        onClick={action("clicked")}
                    >
                        DEFAULT
                    </Button>
                    <Button
                        size="large"
                        endIcon={<Icon name="caret-right" />}
                        type="primary"
                        onClick={action("clicked")}
                    >
                        DEFAULT
                    </Button>
                    <Button
                        size="small"
                        endIcon={<Icon name="caret-right" />}
                        type="primary"
                        onClick={action("clicked")}
                    >
                        DEFAULT
                    </Button>

                    <Button type="primary" shape="round">
                        {" "}
                        <Icon name="caret-right" />
                    </Button>
                    <Button type="primary" shape="circle">
                        {" "}
                        <Icon name="caret-right" />
                    </Button>
                    <Button type="error" shape="circle">
                        {" "}
                        <Icon name="caret-right" />
                    </Button>
                    <Button variant="text" type="primary" shape="circle">
                        {" "}
                        <Icon name="caret-right" />
                    </Button>
                </div>
            </div>
        );
    })
    .add("ButtonGroup", () => {
        return (
            <div className="page-wrapper">
                <h4>1</h4>
                <Button.Group>
                    <Button type="primary">One</Button>
                    <Button type="primary">Two</Button>
                    <Button type="primary">Three</Button>
                </Button.Group>

                <h4>2</h4>
                <Button.Group>
                    <Button type="primary" variant="outline">
                        One
                    </Button>
                    <Button type="primary" variant="outline">
                        Two
                    </Button>
                    <Button type="primary" variant="text">
                        Three
                    </Button>
                </Button.Group>

                <h4>3</h4>
                <Button.Group>
                    <Button type="primary" variant="text">
                        One
                    </Button>
                    <Button type="primary" variant="text">
                        Two
                    </Button>
                    <Button type="primary" variant="text">
                        Three
                    </Button>
                </Button.Group>

                <h4>size</h4>
                <Button.Group size="large">
                    <Button size="small" type="primary">
                        One
                    </Button>
                    <Button type="primary">Two</Button>
                    <Button type="primary">Three</Button>
                </Button.Group>
            </div>
        );
    });
