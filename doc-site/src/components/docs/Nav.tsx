import React from "react";

import { Icon, Navigation, Item } from "../../../../components/index";
import { TemplateProps } from "./template";

const iconMap = [
    {
        title: "Layout",
        prefix: <Icon name="qq" />
    },
    {
        title: "Inputs",
        prefix: <Icon name="wechat" />
    },
];


const Nav: React.FC<TemplateProps> = ({ data }) => {
    const activeId = data.doc.frontmatter.title;

    console.log("React", React);

    const [expanded, setExpanded] = React.useState(true);
    const [drawerVisible, setDrawerVisible] = React.useState(false);

    const handleExpanded = React.useCallback((): void => {
        setExpanded((e): boolean => !e);
    }, []);
    const handleDrawerVisible = React.useCallback((): void => {
        setDrawerVisible((e): boolean => !e);
    }, []);

    const PcChild = (
        <Navigation
            value={activeId}
            expanded={expanded}
            acrylic
            height="100%"
        >
            <Navigation.Header>
                <Item onClick={handleExpanded} prefix={<Icon name="qq" />}></Item>
            </Navigation.Header>
        </Navigation>
    );

    return (
        <>
            {PcChild}
        </>
    );
};

export default Nav;