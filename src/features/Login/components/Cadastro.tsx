import React from "react";

export const Cadastro = () => {
  function setName(value: string): void {
    throw new Error("Function not implemented.");
  }

  function setTelephone(value: string): void {
    throw new Error("Function not implemented.");
  }
  
  function setemail(value: string): void {
    throw new Error("Function not implemented.");
  }
  
  function setpassword(value: password): void {
    throw new Error("Function not implemented.");
  }





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
          value={string}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>Digite seu telefone:
        <input
          type="telephone"
          required
          name="telephone"
          value={sring}
          onChange={(e) => setTelephone(e.target.value)}
        />
      </label>
      <label>Digite seu email:
        <input
          type="email"
          required
          name="email"
          value={string}
          onChange={(e) => setemail(e.target.value)}
        />
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

    </div>
  );
}

export default Cadastro