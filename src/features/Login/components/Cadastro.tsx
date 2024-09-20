import React , { useState } from "react";

export const Cadastro = () => {
  const [Name, setName] = useState('')
  const [Telephone, setTelephone ] = useState('')
  const [passw, setPassw] = useState('')

  const handleSubmit = (event) => {
    event.prevenDefault();
    alert('Disparar request Cadastro')
  };







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
       <form onSubmit={handleSubmit}>
      <label>
        Digite seu Nome:
        <input
          type="text"
          required
          name="Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>Digite seu telefone:
        <input
          type="Telephone"
          required
          name="Telephone"
          value={Telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />
      </label>
      </label>
      <label>Crie uma senha:
        <input
          type="password"
          required
          name="passw"
          value={passw}
          onChange={(e) => setPassw(e.target.value)}
        />
      </label>
      <input type="submit" />
        </form>
  );
};


export default Cadastro