import { Button } from "@mui/material";
import { Input } from "@mui/material";
import React from "react";
import "../pages/login.css";

export const Login = () => {
  return (
    <>
      <div className="containerlogin">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <div className="container-login" data-aos="flip-left">
          <div className="div-lubi">
            <div className="wrappr-login">
              <div className="digite">
                <p>Para garantir a sua segurança faza o seu Cadastro</p>
              </div>

              <div className="input-wrappre">
                <input
                  name="Nome"
                  type="text"
                  required="required"
                  autoComplete="false"
                />
                <span>nome</span>
                <i></i>
              </div>
              <div className="input-wrappre">
                <input
                  name="email"
                  type="text"
                  required="required"
                  autoComplete="false"
                />
                <span>E-mail</span>
                <i></i>
              </div>

              <div className="input-wrappre">
                <input name="password" type="pessword" required="required" />
                <span>pessword</span>
                <i></i>
              </div>
              <div className="mybotton">
                <div className="logiAnimado">
                  <button className="logarparalogin">Login</button>
                </div>

                <button className="cadastro">Cadastro</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
