import * as React from "react";
import { Navigation, Item, Icon, Box, ItemGroup } from "../../../../components/index";

const NavigationExample: React.FC = () => {

    const [expanded, setExpanded] = React.useState(true);
    const [horizontal, setHorizontal] = React.useState(false);
    const [activeId, setActiveId] = React.useState<string | number>(1);

    const handleAcitveId = (value: string | number) => {
        setActiveId(value);
    };

    const handleExpandedClick: React.ReactEventHandler<HTMLButtonElement> = () => {
        setExpanded(v => !v);
    };

    const handleHorizontalClick: React.ReactEventHandler<HTMLButtonElement> = () => {
        setHorizontal(v => !v);
    };

    const propsList = [
        { name: "children", type: "any[]", default: "", description: "Navigation 内容" },
        { name: "horizontal", type: "boolean", default: "false", description: "布局方式" },
        { name: "expanded", type: "boolean", default: "true", description: "展开收起" },
        { name: "value", type: "string | number", default: "", description: "选中 Item value" },
        { name: "onChange", type: "(id: string|number) => void", default: "", description: "Item 被选中时候的回调" },
        { name: "reveal", type: "boolean", default: "", description: "一种高亮效果" }
    ];

    return (
        <div>
            <button onClick={handleExpandedClick}>toggle expanded</button>
            <button onClick={handleHorizontalClick}>toggle horizontal</button>


            <Navigation
                height={600}
                expanded={expanded}
                horizontal={horizontal}
                value={activeId}
                onChange={handleAcitveId}
            >
                <Navigation.Header>
                    <Item>Header</Item>
                </Navigation.Header>
                <Item value={1} prefix={<Icon name="smile" />}>menu1</Item>
                <Item value={2} prefix={<Icon name="smile" />}>menu2</Item>
                <Item value={3} prefix={<Icon name="smile" />}>menu3</Item>
                <ItemGroup title="group" shrink="float">
                    <Item>456</Item>
                    <Item>456</Item>
                </ItemGroup>
                <Navigation.Footer>
                    <Item>Footer</Item>
                </Navigation.Footer>
            </Navigation>


            <h1>reveal</h1>
            <Navigation
                height={600}
                expanded={expanded}
                value={activeId}
                reveal={true}
                onChange={handleAcitveId}
            >
                <Navigation.Header>
                    <Item>Header</Item>
                </Navigation.Header>
                <Item value={1} prefix={<Icon name="smile" />}>menu1</Item>
                <Item value={2} prefix={<Icon name="smile" />}>menu2</Item>
                <Item value={3} prefix={<Icon name="smile" />}>menu3</Item>
                <Navigation.Footer>
                    <Item>Footer</Item>
                </Navigation.Footer>
            </Navigation>

            <h1>acrylic</h1>

            <Box
                background="url(https://i.loli.net/2019/06/08/5cfb6d5a7456419123.jpg) center/cover fixed"
                padding={10}
            >
                <Navigation
                    height={600}
                    expanded={expanded}
                    value={activeId}
                    acrylic={true}
                    onChange={handleAcitveId}
                >
                    <Navigation.Header>
                        <Item>Header</Item>
                    </Navigation.Header>
                    <Item value={1} prefix={<Icon name="smile" />}>menu1</Item>
                    <Item value={2} prefix={<Icon name="smile" />}>menu2</Item>
                    <Item value={3} prefix={<Icon name="smile" />}>menu3</Item>
                    <Navigation.Footer>
                        <Item>Footer</Item>
                    </Navigation.Footer>
                </Navigation>
            </Box>
            <h1>Props</h1>

            <table style={{ width: "80%" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {propsList.map(props => {
                        return (
                            <tr key={props.name} style={{ textAlign: "center" }}>
                                <td>{props.name}</td>
                                <td>{props.type}</td>
                                <td>{props.default}</td>
                                <td>{props.description}</td>
                            </tr>
                        );
                    })}

                </tbody>
            </table>
        </div>
    );
};

export default NavigationExample;