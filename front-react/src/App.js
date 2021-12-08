import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { Landing } from './components/landing/Landing';
import { Home } from './components/home/Home';
// import { Chats } from './components/chats/Chats';
import { AppChat } from './components/chats/AppChat';
import { Juegos } from './components/juegos/Juegos';
import { Lfgs } from './components/lfgs/Lfgs';
import { JuegosBuscar } from './components/juegos/JuegosBuscar';
import { SignupForm } from './components/forms/SignUpForm';
import { LoginForm } from './components/forms/LoginForm';
import { ProvideAuth, authContext } from './hooks/useAuth';
import { JuegoSpecific } from './components/juegos/specific/JuegoSpecific';
import { Stats } from './components/stats/Stats';
import { AgregarJuego } from './components/juegos/agregar/AgregarJuego';
import { LOCALES } from './i18n/locales';
import messages from './i18n/messages';
import { Sidenavbar } from './components/sidenavbar/Sidenavbar';

function App() {
  const auth = useContext(authContext);

  const urlBackLogin = `${process.env.REACT_APP_URL_BACK}/api/user/login`;
  // GET mock user
  const urlBackUser = `${process.env.REACT_APP_URL_BACK}/api/user/getMe`;

  const [user, setUser] = useState({});
  const [language, setLanguage] = useState(LOCALES.SPANISH);

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
          email: 'jbuitrago@gmail.com',
          password: '12345678',
        }),
      });
      const respJson = await resp.json();
      localStorage.setItem('jwt', respJson.token);
      localStorage.setItem('username', 'jbuitrago');
      localStorage.setItem('password', '123123');
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
  const langint = () => {
    if (language === LOCALES.ENGLISH) {
      setLanguage(LOCALES.SPANISH);
    } else {
      setLanguage(LOCALES.ENGLISH);
    }
    console.log('new lang: ', language);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <Router>
        <Route exact path="/home">
          <Sidenavbar />
          <Home
            name={user.name}
            username={user.username}
            img={user.avatarUrl}
            bio={user.bio}
            friends={user.friends}
            setLanguage={langint}
          />
        </Route>
        <Route exact path="/chats">
          <Sidenavbar />
          <AppChat />
        </Route>
        <Route exact path="/juegos">
          <Sidenavbar />
          <Juegos />
        </Route>
        <Route exact path="/juegos/buscar/:id">
          <Sidenavbar />
          <JuegoSpecific />
        </Route>
        <Route exact path="/juegos/:id">
          <Sidenavbar />
          <JuegoSpecific />
        </Route>
        <Route exact path="/juegos/buscar">
          <Sidenavbar />
          <JuegosBuscar />
        </Route>
        <Route exact path="/juegos/agregar">
          <AgregarJuego />
        </Route>
        <Route exact path="/lfgs">
          <Sidenavbar />
          <Lfgs />
        </Route>
        <Route exact path="/stats">
          <Sidenavbar />
          <Stats />
        </Route>
        <Route exact path="/">
          <Landing setLanguage={langint} />
        </Route>
        <Route exact path="/signup">
          <SignupForm />
        </Route>
        <Route exact path="/login">
          <LoginForm />
        </Route>
      </Router>
    </IntlProvider>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  const auth = useContext(authContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
export default App;
