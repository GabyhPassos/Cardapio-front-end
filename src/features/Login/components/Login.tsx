import React, { useState } from "react";

export const Login = () => {
  // variaveis e function daqui pra pra baixo
    const [user, setUser] = useState('')
    const [passw, setPassw] = useState('')

  const handleSubmit = (event) => {
    event.prevenDefault();
    alert('Disparar request Login')
  };

  // html e css daqui pra baixo
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Digite seu Telefone:
        <input
          type="text"
          required
          name="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      <label>Digite sua senha:
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
