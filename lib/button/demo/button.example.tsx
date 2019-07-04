import * as React from "react";
import Button from "../button";
import styled from "styled-components"

const ButtonsWrapper = styled.div`
    button {
        margin-right: 10px;
    }
`

const ButtonExample: React.FunctionComponent = () => {
    return (
        <div>
            <h1>基础</h1>
            <ButtonsWrapper>
                <Button>default</Button>
                <Button type="primary">primary</Button>
                <Button type="success">success</Button>
                <Button type="warning">warning</Button>
                <Button type="danger">danger</Button>
            </ButtonsWrapper>
            <h1>plain</h1>
            <div>
                <Button plain>plain</Button>
                <Button type="primary" plain>primary</Button>
                <Button type="success" plain>success</Button>
                <Button type="warning" plain>warning</Button>
                <Button type="danger" plain>danger</Button>
            </div>
            <h1>禁用</h1>
            <div>
                <Button disabled>plain</Button>
                <Button type="primary" disabled>primary</Button>
                <Button type="success" disabled>success</Button>
                <Button type="warning" disabled>warning</Button>
                <Button type="danger" disabled>danger</Button>
            </div>
            <h1>size</h1>
            <div>
                <Button type="primary" size="large">primary</Button>
                <Button type="primary" >primary</Button>
                <Button type="primary" size="small">primary</Button>
            </div>

            <button loading={true}></button>
        </div>
    );
};

export default ButtonExample;