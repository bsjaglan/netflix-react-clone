import React from "react";
import {Home, SignIn, Browse, SignUp} from "./pages";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ROUTES} from "./constants/routes";
import {ProtectedRoute, LoggedInRedirect} from "./helpers/ProtectedRoute";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* home route will be redirected to browser if user is logged in */}
        <Route
          exact
          path={ROUTES.HOME}
          element={
            <LoggedInRedirect redirectTo={ROUTES.BROWSE}>
              <Home />
            </LoggedInRedirect>
          }
        />

        {/* sign in route */}
        <Route exact path={ROUTES.SIGN_IN} element={<SignIn />} />

        {/* browser route is protected, client will be redirected to sign in if user is not singed in */}
        <Route
          exact
          path={ROUTES.BROWSE}
          element={
            <ProtectedRoute redirectTo={ROUTES.SIGN_IN}>
              <Browse />
            </ProtectedRoute>
          }
        />

        {/* sign up route */}
        <Route exact path={ROUTES.SIGN_UP} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
