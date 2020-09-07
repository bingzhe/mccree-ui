import * as React from "react";
import { Card } from "../../../components/index";

const CardVariant = () => {
    return (
        <>
            <Card width="400px" style={{ marginBottom: "20px" }}>
                <p>一个基础的卡片。</p>
            </Card>
            <Card width="400px" variant="outlined">
                <p>一个基础的卡片。</p>
            </Card>
        </>
    );
};

export default CardVariant;
