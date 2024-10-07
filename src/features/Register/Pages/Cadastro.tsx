import React, { useState } from "react";
import { postCadastro } from "../../../modules/apiCadastro/indext";

export const Cadastro = () => {
  // State variables
  const [Name, setName] = useState('');
  const [Telephone, setTelephone] = useState('');
  const [passw, setPassw] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Correct spelling
    event.stopPropagation();
    
    const dataCadastro = {
      name: Name,
      telephone: Telephone,
      passw: passw,
    };

    postCadastro(dataCadastro)
      .then(() => console.log('CADASTRO OK'))
      .catch(() => console.log('CADASTRO ERROR'));
  };

  // JSX for rendering the form
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center", // Align content to center vertically
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
        <br />
        <label>
          Digite seu telefone:
          <input
            type="text"
            required
            name="Telephone"
            value={Telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </label>
        <br />
        <label>
          Crie uma senha:
          <input
            type="password" // Use 'password' to mask input
            required
            name="passw"
            value={passw}
            onChange={(e) => setPassw(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  );
};

export default Cadastro;