import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';

//TODO: crear la private routes
const AppRoute = () => {
    return (
        <Router>
            <Switch>
                <Route exact={true} path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
            </Switch>
        </Router>
    )
}

export default AppRoute
