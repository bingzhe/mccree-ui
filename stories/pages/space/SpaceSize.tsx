import * as React from "react";
import { Space, Button, Radio } from "../../../components/index";

type sizeType = "small" | "medium" | "large";

const SpaceSize = () => {
    const [size, setSize] = React.useState<sizeType>("small");

    return (
        <>
            <div>
                <Radio.Group value={size} onChange={(e) => setSize(e.target.value as sizeType)}>
                    <Radio value="small">small</Radio>
                    <Radio value="medium">medium</Radio>
                    <Radio value="large">large</Radio>
                </Radio.Group>
            </div>

            <Space size={size}>
                <Button type="primary">Space</Button>
                Space
                <Button type="secondary" variant="outline">
                    Space
                </Button>
            </Space>
        </>
    );
};
export default SpaceSize;
