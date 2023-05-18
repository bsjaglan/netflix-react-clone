import React, {createContext, useContext, useState, useEffect} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../config/firebase";

const AuthContext = createContext();

export function AuthContextProvider({children}) {
  const [user, setUser] = useState({});

  // profiles to be selected via SelectProfileContainer to show on Browse Navebar
  const [profile, setProfile] = useState({});

  // default profile List, one user itself and other kids profile
  const defaultProfileList = (user) => [
    {
      id: 1,
      displayName: user.displayName,
      photoURL: user.photoURL,
      isProtected: false,
    },
    {id: 5, displayName: "Kids", photoURL: "6", isProtected: false},
  ];

  // profile List of a user
  const [profileList, setProfileList] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      setUser(currentUser);
      setProfileList(defaultProfileList(currentUser));
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{user, profile, setProfile, profileList, setProfileList}}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const UserAuth = () => {
  return useContext(AuthContext);
};
