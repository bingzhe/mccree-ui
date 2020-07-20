import * as React from "react";
import { Checkbox } from "../../../components/index";

const CheckboxGroupButton = () => {
    return (
        <div>
            <div style={{ marginBottom: "10px" }}>
                <Checkbox.Group
                    onChange={(v: any) => console.log(`checked=>`, v)}
                    defaultValue={["西安"]}
                >
                    <Checkbox.Button value="深圳">深圳</Checkbox.Button>
                    <Checkbox.Button value="西安">西安</Checkbox.Button>
                    <Checkbox.Button value="杭州">杭州</Checkbox.Button>
                </Checkbox.Group>
            </div>

            <div>
                <Checkbox.Group
                    onChange={(v: any) => console.log(`checked=>`, v)}
                    defaultValue={["西安"]}
                >
                    <Checkbox.Button value="深圳" color="secondary">
                        深圳
                    </Checkbox.Button>
                    <Checkbox.Button value="西安" color="secondary">
                        西安
                    </Checkbox.Button>
                    <Checkbox.Button value="杭州" color="secondary">
                        杭州
                    </Checkbox.Button>
                </Checkbox.Group>
            </div>
        </div>
    );
};

export default CheckboxGroupButton;
