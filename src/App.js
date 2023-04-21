import React from "react";
import {Home, SignIn} from "./pages";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { ROUTES } from "./constants/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />}/>
        <Route path={ROUTES.SIGN_IN} element={<SignIn />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
