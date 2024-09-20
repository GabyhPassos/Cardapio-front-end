import React from "react";

export const Registro = () => {
  function setTelephone(value: string): void {
    throw new Error("Function not implemented.");
  }
  
  function setpassword(value: password): void {
    throw new Error("Function not implemented.");
  }

  return (
    <><div
          style={{
              width: "100%",
              minHeight: "100vh",
              display: "flex",
              justifyContent: "center",
          }} /><form onSubmit={handleSubmit}>
              <label>Digite seu telefone:
                  <input
                      type="telephone"
                      required
                      name="telephone"
                      value={sring}
                      onChange={(e) => setTelephone(e.target.value)} />
              </label>
              <label>Digite sua senha:
                  <input
                      type="password"
                      required
                      name="passw"
                      value={passw}
                      onChange={(e) => setPassw(e.target.value)} />
              </label>
              <input type="submit" />
          </form></>
  );
};

    </div>
  );
}

export default Registro