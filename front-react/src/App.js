import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Landing } from './components/landing/Landing';
import { Home } from './components/home/Home';
import { Chats } from './components/chats/Chats';
import { Juegos } from './components/juegos/Juegos';
import { Lfgs } from './components/lfgs/Lfgs';
import { JuegosBuscar } from './components/juegos/JuegosBuscar';

function App() {
  const urlBackLogin = `${process.env.REACT_APP_URL_BACK}/api/user/login`;
  // GET mock user
  const urlBackUser = `${process.env.REACT_APP_URL_BACK}/api/user/61ad69a1eeef91c6dbfc6ff5`;

  const [user, setUser] = useState({});

  const fetchUser = async () => {
    try {
      // Hace login
      const resp = await fetch(urlBackLogin, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'noreply.joga@gmail.com',
          password: 'admin123',
        }),
      });
      const respJson = await resp.json();
      localStorage.setItem('jwt', respJson.token);
    } catch (error) {
      console.log(error);
    }

    try {
      // Traemos la info
      const dataUser = await fetch(urlBackUser, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const dataUserJsonResp = await dataUser.json();
      const dataUserJson = dataUserJsonResp.data;
      setUser(dataUserJson);
    } catch (error) {
      console.log(error);
    }
    // setUser(gifSimple);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <Router>
        <Route exact path="/home">
          <Home
            name={user.name}
            username={user.username}
            img={user.avatarUrl}
            bio={user.bio}
            friends={user.friends}
          />
        </Route>
        <Route exact path="/chats">
          <Chats />
        </Route>
        <Route exact path="/juegos">
          <Juegos />
        </Route>
        <Route exact path="/juegos/buscar">
          <JuegosBuscar />
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
