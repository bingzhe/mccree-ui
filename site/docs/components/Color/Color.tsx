import * as React from "react";

import { colors } from "../../../../lib/index";
import styled from "styled-components";

/**
 * colors: {
 *      primary: {
 *          default: #434343
 *      }
 * }
 */

interface Item {
    key: string;
    value: string;
}

interface List {
    type: string;
    items: Item[];
}

const Block = styled(({ type, value, ...rest }): React.ReactElement => (
    <div {...rest}>
        <div>{type}</div>
        <div>{value}</div>
    </div>
))`
    box-sizing: border-box;
    height: 40px;
    padding: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${({ value }): string => value};
    color: ${({ type }): string => (type.includes("light") ? "black" : "white")};
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    &:hover {
        margin-right: -8px;
    }
`;

const ColorExample: React.FunctionComponent = () => {
    const colorsList = Object.entries(colors).map(([type, items]): List => ({
        type,
        items: Object.entries(items).map(([key, value]): Item => ({ key, value }))
    }));
    console.log(colorsList);


    return (
        <div>
            <h1>color</h1>
            <div>
                {colorsList.map(({ type, items }): React.ReactElement => (
                    <div key={type}>
                        <div>{type}</div>
                        <div>
                            {items.map(({ key, value }): React.ReactElement => (
                                <Block key={key} type={key} value={value} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ColorExample;