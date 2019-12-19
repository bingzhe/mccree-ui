import React from "react";

import { TemplateProps } from "./template";
import { Box, styled, th } from "../../../../components/index";

const StyledSideBarRoot = styled.div`
position: fixed;
top: 114px;
// right: -80px;
right: 0;
z-index: 100 !important;
transition: ${th.transition("default")};
&:hover {
  right: 0;
}
`;

const Sidebar: React.FC<TemplateProps> = ({ data }) => {
    const [title] = data.doc.htmlAst.children.filter((element): boolean => element.tagName === "h1");
    const subtitles = data.doc.htmlAst.children.filter((element): boolean => element.tagName === "h2");

    console.log("title", title);
    console.log("subtitles", subtitles);
    return (
        <StyledSideBarRoot>
            <Box
                acrylic
                as="nav"
                boxShadow="2"
                width={120}
                borderRadius={4}
                padding="16px 0 16px 16px"
                overflow="hidden"
            >
                <span>{title.children[0].value}</span>
                <Box display="flex" flexDirection="column">
                    {
                        subtitles.map((t): React.ReactElement => {
                            const value = t.children[0].value;
                            return (
                                <span key={value}>{value}</span>
                            );
                        })
                    }
                </Box>
            </Box>
        </StyledSideBarRoot>

    );
};

export default Sidebar;