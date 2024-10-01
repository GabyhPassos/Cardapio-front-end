import React, { useState } from "react";
import { postLogin } from "../../../modules/apiLogin/indext";

export const Login = () => {
  // variaveis e function daqui pra pra baixo
    const [user, setUser] = useState('')
    const [passw, setPassw] = useState('')

  const handleSubmit = (event) => {
    event.prevenDefault();
    event.stopPropagation();
    const dataLogin =  {
      user: user,
      passw: passw
    }
    postLogin(dataLogin)
    .then(
      () => console.log('LOGIN OK')
    )
    .catch(
      () => console.log('LOGIN ERROR')
    )
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
