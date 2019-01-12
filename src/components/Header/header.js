import React from "react";

import StyledLink from "./StyledLink";
import HeaderWrapper from "./HeaderWrapper";
import Title from "./Title";
import NavTab from "./NavTab";

const Header = () => (
    <HeaderWrapper>
        <Title>
            <h1>Ascendit</h1>
        </Title>

        <NavTab tabArea="nav-1">
            <StyledLink to="/" >
                <h2>Home</h2>
            </StyledLink>
        </NavTab>
        <NavTab tabArea="nav-2">
            <StyledLink to="/execution" >
                <h2>API</h2>
            </StyledLink>
        </NavTab>
        <NavTab tabArea="nav-3">
            <StyledLink to="/algorithmic" >
                <h2>Algorithmic</h2>
            </StyledLink>
        </NavTab>
        <NavTab tabArea="nav-4">
            <StyledLink to="/roadmap" >
                <h2>Roadmap</h2>
            </StyledLink>
        </NavTab>
    </HeaderWrapper>
);

export default Header;
