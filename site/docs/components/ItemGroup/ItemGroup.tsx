import  * as React from "react";
import { ItemGroup, Item } from "../../../../lib/index";

const ItemGroupExample: React.FC = () => {
    return (
        <ItemGroup>
            <Item>123</Item>
            <Item>123</Item>
            <Item>123</Item>
            <ItemGroup title="group">
                <Item>456</Item>
                <Item>456</Item>
            </ItemGroup>
        </ItemGroup>
    );
};

export default ItemGroupExample;