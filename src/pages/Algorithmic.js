import React from "react";

import Header from "../components/Header/header";
import AlgorithmicWrapper from "../components/Algorithmic/AlgorithmicWrapper";
import Content from "../components/Algorithmic/Content";

const Algorithmic = () => (
    <React.Fragment>
        <Header />
        <AlgorithmicWrapper>
            <Content contentArea="main-content-1">
                <h1>The easiest way to develop algorithmic trading strategies.</h1>
                <p>
                    Ascendit handles performance tracking, backtesting, API connections etc.
                </p>
            </Content>
            <Content contentArea="main-content-2">
                <h1>Tech Flexibility</h1>
                <p>
                    Use your own tech stack, no more lock language lock-in.
                </p>
            </Content>
            <Content contentArea="main-content-3">
                <h1>Platform Flexibility</h1>
                <p>
                    Trade and backtest the same strategies on any exchange, cryptocurrency and traditional.
                </p>
            </Content>
            <Content contentArea="main-content-4">
                <h1>Stateless</h1>
                <p>
                    Separate concerns to write more correct strategies that are more robust and less prone to errors.
                </p>
            </Content>
        </AlgorithmicWrapper>
    </React.Fragment>
);

export default Algorithmic;
