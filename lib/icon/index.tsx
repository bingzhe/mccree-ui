import React from "react";

interface IconProps {
    name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <span>Icon</span>
    );
}

export default Icon;