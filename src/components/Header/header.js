import React from "react";
import { Link } from "react-router-dom";

import HeaderWrapper from "./HeaderWrapper";
import Title from "./Title";
import NavTab from "./NavTab";

import "./header.css";

const Header = () => (
    <HeaderWrapper>
        <Title>
            <h1>Ascendit</h1>
        </Title>

        <NavTab tabArea="nav-1">
            <Link to="/" >
                <h2>Home</h2>
            </Link>
        </NavTab>
        <NavTab tabArea="nav-2">
            <Link to="/execution" >
                <h2>Execution</h2>
            </Link>
        </NavTab>
        <NavTab tabArea="nav-3">
            <Link to="/algorithmic" >
                <h2>Algorithmic</h2>
            </Link>
        </NavTab>
        <NavTab tabArea="nav-4">
            <Link to="/roadmap" >
                <h2>Roadmap</h2>
            </Link>
        </NavTab>
    </HeaderWrapper>
);

export default Header;
