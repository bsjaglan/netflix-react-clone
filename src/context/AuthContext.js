import React, {createContext, useContext, useState, useEffect} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../config/firebase";

const AuthContext = createContext();

export function AuthContextProvider({children}) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>;
}

export const UserAuth = () => {
  return useContext(AuthContext);
};
