import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader";

import { Exercises, JSXProps, Home, ReactHooks } from "./Pages";
import { Browsing } from "./Components";
import "./styles/App.less";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Browsing selectedTab="/"></Browsing>
                            <Home />
                        </Route>
                        <Route path="/jsx">
                            <Browsing selectedTab="/jsx"></Browsing>
                            <JSXProps />
                        </Route>
                        <Route path="/react">
                            <Browsing selectedTab="/react"></Browsing>
                            <ReactHooks />
                        </Route>
                        <Route path="/exercise">
                            <Browsing selectedTab="/exercise"></Browsing>
                            <Exercises />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default hot(module)(App);
