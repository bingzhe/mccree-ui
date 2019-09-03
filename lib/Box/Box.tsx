import * as React from "react";

const Box: React.FC = React.forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div></div>
    );
});

export default Box;