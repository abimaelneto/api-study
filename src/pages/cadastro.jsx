import { Button } from "@mui/material";
import { Input } from "@mui/material";
import React from "react";
import "../pages/cadastro.css";

export const Cadastro = () => {
  return (
    <>
      <div className="container-login" data-aos="flip-left">
        <div className="div-lubi">
          <div className="wrappr-login">
            <div className="digite">
              <p className="tex-p">
                Para garantir a sua segurança faça o seu cadastro
              </p>
            </div>
            <div className="my-wrapperinput">
              <div className="info-input-1">
                <div className="input-wrappre">
                  <input
                    name="Nome"
                    type="text"
                    required="required"
                    autoComplete="false"
                  />
                  <span>Nome</span>
                  <i></i>
                </div>
                <div className="input-wrappre">
                  <input
                    name="E-mail"
                    type="text"
                    required="required"
                    autoComplete="false"
                  />
                  <span>E-mail</span>
                  <i></i>
                </div>
                <div className="input-wrappre">
                  <input
                    name="Telefone"
                    type="text"
                    required="required"
                    autoComplete="false"
                  />
                  <span>Telefone</span>
                  <i></i>
                </div>
              </div>
              <div className="info-input-2">
                <div className="input-wrappre">
                  <input name="password" type="pessword" required="required" />
                  <span>Password</span>
                  <i></i>
                </div>
                <div className="input-wrappre">
                  <input
                    name="Confirmação de senha"
                    type="pessword"
                    required="required"
                  />
                  <span>Confirmação de senha</span>
                  <i></i>
                </div>
                <div className="input-wrappre">
                  <input
                    name="Data De Nascimento"
                    type="Data De Nascimento"
                    required="Data De Nascimento"
                  />
                  <span>Data De Nascimento</span>
                  <i></i>
                </div>
              </div>
            </div>
            <div className="mybotton">
              <button className="a-dobotaoa" href="#">
                <span className="spanbotao"></span>
                <span className="spanbotao"></span>
                <span className="spanbotao"></span>
                <span className="spanbotao"></span>
                cadastrar
              </button>
              <a className="linkeparacadastro" href="#">
                <span className="spanlinke"></span>
                <span className="spanlinke"></span>
                <span className="spanlinke"></span>
                <span className="spanlinke"></span>
                já tenho uma conta!!
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
