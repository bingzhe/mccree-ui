import * as React from "react";
import Button from "../button";

const ButtonExample: React.FunctionComponent = () => {
    return (
        <div>
            <h1>基础</h1>
            <Button>default</Button>
            <Button type="primary">primary</Button>
            <Button type="success">success</Button>
            <Button type="warning">warning</Button>
            <Button type="danger">danger</Button>
            <h1>plain</h1>
            <Button plain>plain</Button>
            <Button type="primary" plain>primary</Button>
            <Button type="success" plain>success</Button>
            <Button type="warning" plain>warning</Button>
            <Button type="danger" plain>danger</Button>
            <h1>禁用</h1>
            <Button disabled>plain</Button>
            <Button type="primary" disabled>primary</Button>
            <Button type="success" disabled>success</Button>
            <Button type="warning" disabled>warning</Button>
            <Button type="danger" disabled>danger</Button>
            <h1>size</h1>
            <Button type="primary" size="large">primary</Button>
            <Button type="primary" >primary</Button>
            <Button type="primary" size="small">primary</Button>
        </div>
    );
};

export default ButtonExample;