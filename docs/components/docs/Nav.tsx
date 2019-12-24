import React from "react";

import { navigate } from "gatsby";

import { Icon, Navigation, Item, ItemGroup } from "../../../components/index";
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

interface Acc {
    [key: string]: string[];
}

interface Elem {
    type: string;
    title: string;
}

interface Result {
    type: string;
    titles: string[];
}

const getFrontMatter = (target: TemplateProps["data"]): Result[] => {
    const classify = target.docs.edges
        .map((v) => v.node.frontmatter)
        .reduce((acc, elem): Acc => {
            const { type, title } = elem;
            if (acc[type]) {
                return {
                    ...acc,
                    [type]: [...acc[type], title]
                };
            }
            return {
                ...acc,
                [type]: [title]
            };
        }, {});

    return Object.keys(classify).map(type => ({
        type,
        titles: classify[type]
    }));
};

const Nav: React.FC<TemplateProps> = ({ data }) => {
    const activeId = data.doc.frontmatter.title;

    const [expanded, setExpanded] = React.useState(true);
    const [drawerVisible, setDrawerVisible] = React.useState(false);

    const handleExpanded = React.useCallback((): void => {
        setExpanded((e): boolean => !e);
    }, []);
    const handleDrawerVisible = React.useCallback((): void => {
        setDrawerVisible((e): boolean => !e);
    }, []);

    const handleNavigation = React.useCallback((title: string, type: string): void => {
        type === "hooks" ? navigate(`/hooks/${title}`) : navigate(`/components/${title.toLowerCase()}`);
    }, []);

    const result = getFrontMatter(data);

    const rootRef = React.useRef<HTMLDivElement>(null);

    const PcChild = (
        <Navigation
            ref={rootRef}
            value={activeId}
            expanded={expanded}
            acrylic
            height="100%"
            width={260}
        >
            <Navigation.Header>
                <Item onClick={handleExpanded} prefix={<Icon name="wechat" />}>123</Item>
            </Navigation.Header>
            {result.map(
                ({ type, titles }) => {
                    return (
                        <ItemGroup key={type} title={type}>
                            {titles.map(
                                title => (
                                    <Item
                                        key={title}
                                        value={title}
                                        onClick={handleNavigation.bind(undefined, title, type)}
                                    >
                                        {title}
                                    </Item>
                                )
                            )}
                        </ItemGroup>
                    );
                }
            )}
        </Navigation>
    );

    return (
        <>
            {PcChild}
        </>
    );
};

export default Nav;