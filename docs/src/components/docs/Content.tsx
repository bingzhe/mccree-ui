import React from "react";

import { TemplateProps } from "./template";
import Sidebar from "./Sidebar";

const Content: React.FC<TemplateProps> = ({ data }) => {
    return (
        <>
            <Sidebar data={data} />
            <div>content</div>
        </>
    );
};

export default Content;