import * as React from "react";
import { Card } from "../../../components/index";
import { CardType } from "../../../components/card/index";

const CardTypes = () => {
    const type = ["primary", "secondary", "success", "warning", "error", "info"];
    const locales = {
        primary: "主要的",
        secondary: "次要的",
        success: "成功",
        warning: "警告",
        error: "错误",
        info: "信息"
    };
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {type.map((item, index) => {
                return (
                    <Card
                        width="40%"
                        key={index}
                        style={{ margin: "0 20px 20px 0" }}
                        type={item as CardType}
                    >
                        <h3>{locales[item as CardType]}</h3>
                        <span>{item}</span>
                    </Card>
                );
            })}
        </div>
    );
};

export default CardTypes;
