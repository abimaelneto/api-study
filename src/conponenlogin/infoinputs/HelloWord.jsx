import { useState } from "react";
import "./index.css";
import { AccessAlarm, AccountCircle, Mail, Visibility, VisibilityOff } from '@mui/icons-material'
import MailIcon from '@mui/icons-material/Mail';

import { InputConponentLogin } from "./Inpunts";


export const HelloWorld = () => {
  const [showPassword, setShowPassword] = useState(false)
  const show = () => setShowPassword(!showPassword)
  return (
    <>
      <InputConponentLogin
        title='E-mail'
        placeholder="Digita o seu e_mail"
        icon={<MailIcon/>}
      />

      <InputConponentLogin
        title='Password'
        placeholder="Digita a sua senha por favor"
        tipo={
          showPassword ? 'text' : 'password'
        }
        icon={showPassword ?
          <Visibility onClick={show}/> :
          <VisibilityOff onClick={show}/>
        }
      />
    </>
  );
};
