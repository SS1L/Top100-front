import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './registration/Login';
import Signup from './registration/Signup';
import Menu from './menu/Menu';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" type="guest">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
