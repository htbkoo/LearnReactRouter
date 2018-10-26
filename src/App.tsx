import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';

import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";
import Topics from "./Topics";

const App = () => (
    <Router>
        <div>
            <Route component={NavBar}/>

            <hr/>
            <Switch>
                <Route exact={true} path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/topics" component={Topics}/>
            </Switch>
        </div>
    </Router>
);
export default App;
