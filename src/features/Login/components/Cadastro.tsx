import React from "react";

export const Cadastro = () => {
  // variaveis e function daqui pra baixo

  // html e css daqui pra baixo
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form style={{ display: "flex", flexDirection: "column" }}>
        <input type="text" placeholder="Nome completo" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Telefone" />
        <input type="text" placeholder="Senha" />
      </form>
    </div>
  );
};
