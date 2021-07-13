import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signin from './registration/Signin';
import Signup from './registration/Signup';
import Menu from './menu/Menu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/login' type='guest'>
            <Signin/>
          </Route>
          <Route exact path='/signup'>
            <Signup/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
