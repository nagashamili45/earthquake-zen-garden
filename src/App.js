import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.js';
import Home from './Components/Home.js';
import Profile from './Components/Profile.js';
import Detail from './Components/Detail.js';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/detail/:place" render={(props) =>
            <Detail place={props.match.params.place} />
          } >
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
