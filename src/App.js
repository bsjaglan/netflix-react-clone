import React from "react";
import {Home, SignIn, Browse, SignUp} from "./pages";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { ROUTES } from "./constants/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />}/>
        <Route path={ROUTES.SIGN_IN} element={<SignIn />}/>
        <Route path={ROUTES.BROWSE} element={<Browse />}/>
        <Route path={ROUTES.SIGN_UP} element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
