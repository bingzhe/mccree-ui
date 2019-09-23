import * as React from "react";
import { Item, Icon } from "../../../../lib/index";


const ItemExample: React.FunctionComponent = () => {
    const propsList = [
        { name: "title", type: "string", default: "", description: "标题显示文本" },
        { name: "active", type: "boolean", default: "false", description: "active status, 需要value" }
    ];

    return (
        <div>
            <h1>基础</h1>
            <Item active>1</Item>
            <Item>1</Item>
            <Item>1</Item>
            <Item prefix={<Icon name="question-circle" />}>123</Item>
            <Item value={1} active={true}>555</Item>


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

export default ItemExample;