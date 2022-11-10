import { Button } from "@mui/material";
import { Input } from "@mui/material";
import React from "react";
import "../pages/cadastro.css";

export const Cadastro = () => {
  return (
    <>
      <div className="containerlogin">
        <div className="container-login" data-aos="flip-left">
          <div className="div-lubi">
            <div className="wrappr-login">
              <div className="digite">
                <p>Para garantir a sua segurança faça o seu Cadastro</p>
              </div>
              <div className="my-wrapper-input">
                <div className="input-wrappre">
                  <input
                    name="n"
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
                  <span>password</span>
                  <i></i>
                </div>
              </div>
              <div className="mybotton">
                <button type="botao" className="cadastro">
                  Cadastro
                </button>

                <a className="linkeparacadastro" href="#">
                  <span className="spanlinke"></span>
                  <span className="spanlinke"></span>
                  <span className="spanlinke"></span>
                  <span className="spanlinke"></span>
                  já tenho uma conta!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
