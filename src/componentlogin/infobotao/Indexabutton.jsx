import React from "react";
import "./Indexbutton.css";
import Button from "@mui/material/Button";
export const Infobutton = () => {
  return (
    <>
      <div className="loginlogar">
        <Button variant="text">Entrar</Button>
      </div>
      <div className="loginlogar">
        <Button variant="contained">equece a senha</Button>
      </div>

      <div className="loginlogar">
        <Button variant="outlined">não tenho conta</Button>
      </div>
    </>
  );
};
