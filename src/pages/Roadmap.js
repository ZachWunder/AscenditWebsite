import React from "react";

import Header from "../components/Header/header";
import RoadmapWrapper from "../components/Roadmap/RoadmapWrapper";
import Content from "../components/Content";

const Roadmap = () => (
    <React.Fragment>
        <Header />
        <RoadmapWrapper>
            <Content contentArea="main-content-1">
                <p>Ascendit is a work-in-progress project.</p>
            </Content>
            <Content contentArea="main-content-2">
                <h1>Version 1</h1>
                <p>Ascendit will launch with a minimum of infrastructure.</p>
                <br />
                <ul>
                    <li>A formal API specification for all exchanges.</li>
                    <li>Multiple cryptocurrency exchanges, without live trading ability.</li>
                    <li>The ability to add exchanges in a language agnostic way.</li>
                </ul>
            </Content>
            <Content contentArea="main-content-3">
                <h1>Version 2</h1>
                <p>Version 2 of Ascendit will be a major upgrade to the actual usability of Ascendit.</p>
                <br />
                <ul>
                    <li>Live trading.</li>
                    <li>User authentication.</li>
                    <li>A backtesting exchange.</li>
                </ul>
            </Content>
            <Content contentArea="main-content-4">
                <h1>Version 3 and beyond</h1>
                    <p>Future plans of Ascendit include an algorithmic trading platform, as well as: </p>
                    <br />
                    <ul>
                        <li>A web interface.</li>
                        <li>Support for options trading.</li>
                        <li>And much more.</li>

                    </ul>
            </Content>
        </RoadmapWrapper>
    </React.Fragment>
)
export default Roadmap;
