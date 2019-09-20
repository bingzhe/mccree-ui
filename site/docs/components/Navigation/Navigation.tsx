import * as React from "react";
import { Navigation, Item } from "../../../../lib/index";

const NavigationExample: React.FC = () => {

    const [expanded, setExpanded] = React.useState(true);
    const [horizontal, setHorizontal] = React.useState(false);

    const handleExpandedClick: React.ReactEventHandler<HTMLButtonElement> = () => {
        setExpanded(v => !v);
    };

    const handleHorizontalClick: React.ReactEventHandler<HTMLButtonElement> = () => {
        setHorizontal(v => !v);
    };

    const propsList = [
        { name: "horizontal", type: "boolean", default: "false", description: "布局方式" },
        { name: "expanded", type: "boolean", default: "true", description: "展开收起" }
    ];

    return (
        <div>
            <button onClick={handleExpandedClick}>toggle expanded</button>
            <button onClick={handleHorizontalClick}>toggle horizontal</button>

            <Navigation height={600} expanded={expanded} horizontal={horizontal}>
                <Navigation.Header>Header</Navigation.Header>
                <Item>menu1</Item>
                <Item>menu2</Item>
                <Navigation.Footer>Footer</Navigation.Footer>
            </Navigation>


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