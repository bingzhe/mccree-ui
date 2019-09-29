import * as React from "react";

import { Box } from "../../lib/index";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavlink = styled(NavLink)`
    display: inline-block;
    line-height: 60px;
    font-size: 15px;
    background: none;
    color: inherit;
    text-decoration: none;
    padding: 0 26px;
    cursor: pointer;
    transition: all, 0.25s,

    &:hover{
        text-decoration: underline;
        background: rgba(0, 0, 0, 0.2);
    }

    &.active{
        text-decoration: underline;
        background: rgba(0, 0, 0, 0.2);
    }
`;

const Header: React.FC = () => {
    return (
        <Box
            position="fixed"
            left={0}
            top={0}
            height={60}
            backgroundColor="hsla(0, 0%, 95%, 0.85)"
            boxShadow="rgba(0, 0, 0, 0.1) 0px 2px 8px"
            width="100%"
            display="flex"

        >
            <div>
                <NavLink to="/components">
                    React UI
                </NavLink>
            </div>
            <div>Get Starts</div>
            <div>
                <StyledNavlink to="/components">
                    Components
                </StyledNavlink>
            </div>
        </Box>
    );
};

// const StyledHeader = style

export default Header;