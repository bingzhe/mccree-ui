import * as React from "react";
import { Space, Button } from "../../../components/index";

const SpaceHorizontal = () => (
    <Space size="medium">
        <Button type="primary">Space</Button>
        Space
        <Button type="secondary" variant="outline">
            Space
        </Button>
    </Space>
);

export default SpaceHorizontal;
