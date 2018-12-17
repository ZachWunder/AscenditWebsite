import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Home from "./pages/home";
import Execution from "./pages/home";
import Algorithmic from "./pages/home";
import Roadmap from "./pages/home";

class App extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact component={Home} />
                <Route path="/execution" component={Execution} />
                <Route path="/algorithmic" component={Algorithmic} />
                <Route path="/roadmap" component={Roadmap} />
            </div>
        );
    }
}

export default App;
