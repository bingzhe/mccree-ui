import * as React from "react";
import { Item, Icon } from "../../../../lib/index";


const ItemExample: React.FunctionComponent = () => {
    return (
        <div>
            <h1>基础</h1>
            <Item active>1</Item>
            <Item>1</Item>
            <Item>1</Item>
            <Item prefix={<Icon name="question-circle" />}>123</Item>
        </div>
    );
};

export default ItemExample;