import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Landing } from './components/landing/Landing';
import { Home } from './components/home/Home';
import { Chats } from './components/chats/Chats';
import { Juegos } from './components/juegos/Juegos';
import { Lfgs } from './components/lfgs/Lfgs';

function App() {
  return (
    <>
      <Router>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/chats">
          <Chats />
        </Route>
        <Route exact path="/juegos">
          <Juegos />
        </Route>
        <Route exact path="/lfgs">
          <Lfgs />
        </Route>
        <Route exact path="/">
          <Landing />
        </Route>
      </Router>
    </>
  );
}

export default App;
