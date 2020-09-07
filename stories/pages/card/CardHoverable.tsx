import * as React from "react";
import { Card } from "../../../components/index";

const CardHoverable = () => {
    return (
        <Card width="400px" hoverable>
            <p>一个可悬停的卡片。</p>
        </Card>
    );
};

export default CardHoverable;
