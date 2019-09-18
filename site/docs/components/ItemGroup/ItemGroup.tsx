import * as React from "react";
import { ItemGroup, Item, Box } from "../../../../lib/index";
const ItemGroupExample: React.FC = () => {

    const propsList = [
        { name: "title", type: "string", default: "", description: "标题显示文本" },
        { name: "shrink", type: "'expand' | 'float' ", default: "'expand'", description: "下拉展示类型" }
    ];

    return (
        <div>
            <div style={{ margin: "10px" }}>
                <ItemGroup title="ItemGroup">
                    <Item>123</Item>
                    <Item>123</Item>
                    <Item>123</Item>
                    <ItemGroup title="group">
                        <Item>456</Item>
                        <Item>456</Item>
                    </ItemGroup>
                </ItemGroup>
            </div>

            <h1>float</h1>
            <Box m={10} width={200}>
                <ItemGroup title="ItemGroup" shrink="float">
                    <Item>123</Item>
                    <Item>123</Item>
                    <Item>12optionoptionoptionoption3</Item>
                    <ItemGroup title="group" shrink="float">
                        <Item>456</Item>
                        <Item>456</Item>
                    </ItemGroup>
                </ItemGroup>
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

export default ItemGroupExample;