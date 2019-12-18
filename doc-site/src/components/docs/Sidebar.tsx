import React from "react";

import { TemplateProps } from "./template";
import { element } from "prop-types";

const Sidebar: React.FC<TemplateProps> = ({ data }) => {
    const [title] = data.doc.htmlAst.children.filter((element): boolean => element.tagName === "h1");

    console.log(title);
    return (
        <div>Sidebar</div>
    );
};

export default Sidebar;