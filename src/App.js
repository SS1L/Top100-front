import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signin from './registration/Signin';
import Signup from './registration/Signup';
import Search from './search/Search';
import Menu from './menu/Menu';
import BookInfo from './search/BookInfo';
import {BrowserRouter as  Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Menu />
          </Route>
          <Route exact path="/books">
            <Search />
          </Route>
          <Route exact path="/books/:id">
            <BookInfo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
