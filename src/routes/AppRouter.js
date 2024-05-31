import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home.js';
import About from '../pages/About.js';
import Projects from '../pages/Projects.js';
import Skills from '../pages/Skills.js';
import Contact from '../pages/Contact.js';

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/skills" component={Skills} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </Router>
    );
}

export default AppRouter;
