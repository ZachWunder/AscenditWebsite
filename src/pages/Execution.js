import React from "react";

import Header from "../components/Header/header";
import ExecutionWrapper from "../components/Execution/ExecutionWrapper";
import Content from "../components/Content";
import Banner from "../components/Execution/Banner";

const API = () => (
    <React.Fragment>
        <Header />
        <Banner>
            <h1>Universal Exchange API</h1>
            <p>A unified exchange API for portfolio management, algorithmic trading, and more.</p>
        </Banner>
        <ExecutionWrapper>
            <Content contentArea="content-left-1">
                <h1>Universal Exchange API</h1>
                <p>
                    The Ascendit API is a unified API for both traditional and cryptocurrency exchanges.
                </p>
                <br />
                <code>
                    https://api.ascendit.app/Exchange/Method <br />
                    Example: https://api.ascendit.app/Bittrex/placeLimitOrder <br />
                    Example: https://api.ascendit.app/Fidelity/getBidAsk
                </code>
            </Content>
            <Content contentArea="content-right-1">
                <h1>Performance Tracking</h1>
                <p>
                    All orders placed are automatically logged for simple calculation of performance statistics.
                </p>
                <br />
                <p>
                    Classify trades individually, aggregate similar orders into long-term positions, and group
                    multiple positions and orders under a group to track strategy performance.
                </p>
            </Content>
            <Content contentArea="content-left-2">
                <h1>Custom Order Types</h1>
                <p>
                    Use a unified system for order types.
                </p>
                <br />
                <p>
                    Set trailing stop losses, even on exchanges that don't natively support them.
                </p>
            </Content>
            <Content contentArea="content-right-2">
                <h1>Paper Trading and Backtesting</h1>
                <p>
                    Use paper trading to test functionality.
                </p>
                <br />
                <p>
                    Place trades on a backtesting exchange using the same unified API as any other exchange,
                    then evaluate their performance by feeding it historical data.
                </p>
            </Content>
        </ExecutionWrapper>
    </React.Fragment>
);

export default API;
