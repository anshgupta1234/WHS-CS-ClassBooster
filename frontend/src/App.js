import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import history from './history';
import ClassEditor from './pages/ClassEditor';
import Dashboard from './pages/Dashboard';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import Landing from './pages/Landing';
import ConfirmEmail from './pages/auth/ConfirmEmail';
import ForgotPassword from './pages/auth/ForgotPassword';

export default function App() {
  return (
    <Router history={history}>

      <div>
        {/* A <Switch> looks through its children <Route>s and  
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forgotPassword">
            <ForgotPassword />
          </Route>
          <Route path="/confirmEmail">
            <ConfirmEmail />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/editor">
            <ClassEditor />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
