import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Home from "./pages/Home";
import Execution from "./pages/Execution";
import Algorithmic from "./pages/Algorithmic";
import Roadmap from "./pages/Home";

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
