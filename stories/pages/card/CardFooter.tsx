import * as React from "react";
import { Card } from "../../../components/index";

const CardFooter = () => {
    return (
        <Card width="400px">
            <p>Card Content</p>
            <Card.Footer>Card Footer</Card.Footer>
        </Card>
    );
};

export default CardFooter;
