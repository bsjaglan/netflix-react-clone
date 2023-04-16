import React from "react";
import Home from "./pages/Home";
import Logo from "./components/logo";

function App() {
  return (
    <>
      <Home />
      <Logo size={'120px'}/>  
      <Logo size={'lr'}/> 
    </>
  );
}

export default App;
