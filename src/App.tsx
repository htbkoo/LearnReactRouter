import * as React from 'react';
import './App.css';

import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

const NavBar = () => (
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/topics">Topics</Link>
        </li>
    </ul>
);

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

const Topic = ({match}: { match: any }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
);

const Topics = ({match}: { match: any }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>Rendering with React</Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>Components</Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
            </li>
        </ul>

        <Route path={`${match.path}/:topicId`} component={Topic}/>
        <Route
            exact={true}
            path={match.path}
            render={() => <h3>Please select a topic.</h3>}
        />
    </div>
);

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
