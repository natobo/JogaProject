// Hook (use-auth.js)
import React, { useState, useContext, createContext } from 'react';

const urlBackLogin = `${process.env.REACT_APP_URL_BACK}/api/user/login`;
const urlBackSignUp = `${process.env.REACT_APP_URL_BACK}/api/user/signup`;
const urlBackLogout = `${process.env.REACT_APP_URL_BACK}/api/user/logout`;
const urlBackUser = `${process.env.REACT_APP_URL_BACK}/api/user/getMe`;

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const authContext = createContext();

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);
  // Method to singin
  const login = async (email, password) => {
    try {
      // Hace login
      const resp = await fetch(urlBackLogin, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (resp.status === 200) {
        const respJson = await resp.json();
        localStorage.setItem('jwt', respJson.token);
        // Hace el get del user y hace el set del user
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
      } else if (resp.status === 401) {
        alert('Email o contraseña incorrectas');
        throw new Error('Email o contraseña incorrectas');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const signup = async (
    name,
    username,
    email,
    password,
    passwordConfirm,
    friends,
    bio,
    avatarUrl
  ) => {
    try {
      const userInfo = {
        name,
        email,
        username,
        password,
        passwordConfirm,
        bio,
        avatarUrl,
        friends,
      };
      // Hace login
      const resp = await fetch(urlBackSignUp, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });
      const respJson = await resp.json();
      localStorage.setItem('jwt', respJson.token);
      setUser(userInfo);
      // TODO: Hacer que se registre tambien en lo de chats
    } catch (error) {
      alert(error);
    }
  };
  const logout = async () => {
    try {
      // Hace logout
      await fetch(urlBackLogout, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      setUser(null);
      localStorage.removeItem('jwt');
    } catch (error) {
      console.error(error);
    }
  };
  // Return the user object and auth methods
  return {
    user,
    setUser,
    login,
    signup,
    logout,
  };
}

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
