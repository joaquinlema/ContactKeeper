import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';
import PrivateRoute from './PrivateRoute';

const AppRoute = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute exact={true} path='/'>
                    <Home />
                </PrivateRoute>
                <PrivateRoute exact path='/about' component={About} >
                    <About />
                </PrivateRoute>
                <Route exact path='/register' component={Register} >
                    <Register />
                </Route>
                <Route exact path='/login' component={Login} >
                    <Login />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRoute
