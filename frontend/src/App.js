import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ClassEditor from './pages/ClassEditor';
import Dashboard from './pages/Dashboard';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import Landing from './pages/Landing';

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/home">
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
