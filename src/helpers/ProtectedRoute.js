import React from "react";
import {Navigate} from "react-router-dom";
import {UserAuth} from "../context/AuthContext";

const ProtectedRoute = ({children, redirectTo}) => {
  const {user} = UserAuth();

  if (!user) {
    return <Navigate to={redirectTo} />;
  }
  return children;
};

export default ProtectedRoute;