import { Button } from "@mui/material";
import { Input } from "@mui/material";
import React from "react";
import "../pages/login.css";

export const Login = () => {
  return (
    <>
      <div className="container-login" data-aos="flip-left">
        <div className="div-lubi">
          <div className="wrappr-login">
            <div className="digite">
              <p>Para garantir a sua segurança faça login</p>
            </div>

            <div className="input-wrappre">
              <input
                name="email"
                type="text"
                required="required"
                autoComplete="false"
              />
              <span>Usernama</span>
              <i></i>
            </div>

            <div className="input-wrappre">
              <input name="password" type="pessword" required="required" />
              <span>pessword</span>
              <i></i>
            </div>
            <div className="mybotton">
              <a className="a-dobotaoa" href="#">
                <span className="spanbotao"></span>
                <span className="spanbotao"></span>
                <span className="spanbotao"></span>
                <span className="spanbotao"></span>
                Entrar
              </a>
              <a className="linkeparacadastro" href="#">
                <span className="spanlinke"></span>
                <span className="spanlinke"></span>
                <span className="spanlinke"></span>
                esqueceu a sua senha?
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
