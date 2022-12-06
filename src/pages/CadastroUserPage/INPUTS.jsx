import "./index.css";
import { Input } from "../../components/Input";
import MailIcon from "@mui/icons-material/Mail";
import BadgeIcon from "@mui/icons-material/Badge";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { useState } from "react";
import { MudarInput } from "./inputTipo";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Typography } from "@mui/material";

export const InputesList = ({ data, error, handleChange, match }) => {
  const [icon, setIcon] = useState(true);
  const Mostrar_ocultar = () => {
    setIcon(!icon);
  };
  return (
    <>
      <div className="conponent_too">
        <Input
          title="Username"
          tipo="text"
          fundo="Digita seu nome"
          name="username"
          value={data?.username}
          onChange={handleChange}
          error={error.username}
        />
        <BadgeIcon />
      </div>
      <div className="conponent_too">
        <Input
          title="data de nascimento"
          tipo="text"
          fundo="Digite a sua data de nascimento"
          name="birth"
          value={data?.birth}
          onChange={handleChange}
          error={error.birth}
        />
        <BadgeIcon />
      </div>
      <div className="conponent_too">
        <Input
          title="Telefone"
          tipo="number"
          fundo="Digita seu número do celular"
          name="phone"
          value={data?.phone}
          onChange={handleChange}
          error={error.phone}
        />
        <ContactPhoneIcon />
      </div>

      <div className="conponent_too">
        <Input
          title="E_mail"
          fundo="Digita seu E_mail"
          name="email"
          value={data?.email}
          onChange={handleChange}
          error={error.email}
        />
        <MailIcon />
      </div>
      <div className="conponent_too">
        <Input
          title="Password"
          tipo={icon ? "text" : "password"}
          fundo="Digite a sua senha"
          name="password"
          value={data?.password}
          onChange={handleChange}
          error={error.password}
        />

        {icon ? (
          <VisibilityIcon onClick={Mostrar_ocultar} />
        ) : (
          <VisibilityOffIcon onClick={Mostrar_ocultar} />
        )}
      </div>
      <div className="conponent_too">
        <Input
          title="Password Confirmation"
          tipo={icon ? "text" : "password"}
          fundo="Confirme a sua senha"
          name="passwordConfirmation"
          value={data?.passwordConfirmation}
          onChange={handleChange}
          error={error.passwordConfirmation}
        />

        {icon ? (
          <VisibilityIcon onClick={Mostrar_ocultar} />
        ) : (
          <VisibilityOffIcon onClick={Mostrar_ocultar} />
        )}
      </div>
      {!match && (
        <Typography color="error.main">Senhas não conferem</Typography>
      )}
    </>
  );
};
