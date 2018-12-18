import React from "react";

import Header from "../components/Header/header";
import HomeWrapper from "../components/Home/HomeWrapper";
import Description from "../components/Home/Description";
import Content from "../components/Home/Content";

const Home = () => (
    <React.Fragment>
        <Header />
        <HomeWrapper>
            <Description>
                <h1>An algorithmic trading platform.</h1>
            </Description>
            <Content contentArea="api-content">
                <h1>Execution API</h1>
                <p>
                    A unified API for exchanges with built-in performance tracking,
                    paper trading and backtesting, and custom order types.
                </p>
            </Content>
            <Content contentArea="algo-content">
                <h1>Algorithmic Strategies</h1>
                <p>The fastest way to create, test, and run algorithmic trading strategies.</p>
            </Content>
        </HomeWrapper>
    </React.Fragment>
);

export default Home;
