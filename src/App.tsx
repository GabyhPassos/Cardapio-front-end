import React from "react";
import "./App.css";
import { ListaMenu } from "./features/menu/components/ListaMenu";
import { Login } from "./features/Login/components/Login";
//import { MenuItem } from "./features/menu/components/MenuItem";~

function App() {
  return (
    <>
      <Login />
      {/* tag de cadastro aqui por enquanto */}
      <ListaMenu />;
    </>
  );
}

export default App;
