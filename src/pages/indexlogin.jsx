import React from "react";
import "./login.css";
import { HelloWorld } from "../conponenlogin/infoinputs/HelloWord";

export const Login = () => {
  return (
    <>
      <div className="container">
        <div className="div-lubi">
          <div className="wrapper-login">
            <div className="digite">
              <h2>Para garantir a sua segurança faça login</h2>
            </div>
            <HelloWorld />
           
          </div>
        </div>
      </div>
    </>
  );
};
