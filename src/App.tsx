import React from "react";
import "./App.css";
//import { ListaMenu } from "./features/menu/components/ListaMenu";//
import { Login } from "./features/Login/pages/Login";
//import { MenuItem } from "./features/menu/components/MenuItem";~

function App() {
  return (
    <div id='root' style={{ backgroundImage: "url(src/assets/fundo.jpg)"}}>
      <Login />
      {/* tag de cadastro aqui por enquanto */}
    </div>
  );
}


export default App;
