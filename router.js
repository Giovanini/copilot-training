// create a router file for react-router-dom
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import NotFound from './NotFound';
import Login from './Login';
import Signup from './Signup';
import withAuth from './withAuth';
import Dashboard from './Dashboard';
import Profile from './Profile';
import EditProfile from './EditProfile';
import EditPassword from './EditPassword';
import EditEmail from './EditEmail';
import EditPhone from './EditPhone';
import EditAddress from './EditAddress';

const Router = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard" component={withAuth(Dashboard)} />
            <Route path="/profile" component={withAuth(Profile)} />
            <Route path="/edit-profile" component={withAuth(EditProfile)} />
            <Route path="/edit-password" component={withAuth(EditPassword)} />
            <Route path="/edit-email" component={withAuth(EditEmail)} />
            <Route path="/edit-phone" component={withAuth(EditPhone)} />
            <Route path="/edit-address" component={withAuth(EditAddress)} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);