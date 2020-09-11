import * as React from "react";
import { Space, Button } from "../../../components/index";

const SpaceVertical = () => (
    <Space size="medium" direction="vertical">
        <Button type="primary">Space</Button>
        Space
        <Button type="secondary" variant="outline">
            Space
        </Button>
    </Space>
);

export default SpaceVertical;
