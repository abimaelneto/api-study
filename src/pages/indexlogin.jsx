import React from "react";
import "./login.css";
import { HelloWorld } from "../componentlogin/infoinputs/HelloWorld";
import { Infobutton } from "../componentlogin/infobotao/Indexabutton";
export const Login = () => {
  return (
    <>
      <div className="container-login" data-aos="flip-left">
        <div className="div-lubi">
          <div className="wrapper-login">
            <div className="digite">
              <p>Para garantir a sua segurança faça login</p>
            </div>

            <HelloWorld />

            <div className="mybotton">
              <Infobutton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
