import React from "react";
import {Home, SignIn, Browse, SignUp} from "./pages";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ROUTES} from "./constants/routes";
import ProtectedRoute from "./helpers/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
        <Route
          path={ROUTES.BROWSE}
          element={
            <ProtectedRoute redirectTo={ROUTES.SIGN_IN}>
              <Browse />
            </ProtectedRoute>
          }
        />
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
