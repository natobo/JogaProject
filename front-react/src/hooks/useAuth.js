// Hook (use-auth.js)
import React, { useState, useEffect, useContext, createContext } from 'react';

const urlBackLogin = `${process.env.REACT_APP_URL_BACK}/api/user/login`;
const authContext = createContext();

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => useContext(authContext);

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);
  // Method to singin
  const signin = async (email, password) => {
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
      const respJson = await resp.json();
      localStorage.setItem('jwt', respJson.token);
    } catch (error) {
      console.log(error);
    }
  };
  const signup = (email, password) =>
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        return response.user;
      });
  const signout = () =>
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false);
      });

  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
  };
}

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
