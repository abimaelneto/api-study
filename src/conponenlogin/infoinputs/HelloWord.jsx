import { useState } from "react";
import "./index.css";
import { AccessAlarm, AccountCircle, Mail, Visibility, VisibilityOff } from '@mui/icons-material'
import MailIcon from '@mui/icons-material/Mail';
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { InputConponentLogin } from "./Inpunts";


export const HelloWorld = () => {
  const docs = [
    { emailDocs: "oitomitluis32@gmail.com" },
    { passwordDocs: "camotio32" }
  ]
  const [showPassword, setShowPassword] = useState(false)
  const show = () => setShowPassword(!showPassword)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = () => {

    if(password.length == undefined ) {
      alert("erro")
    }
  }
  const handleEmail = (e) => {
    const newEmail = e.target.value
    setEmail(newEmail)
  }
  const handlePassword = (e) => {
    const newPassword = e.target.value
    setPassword(newPassword)
  }
  return (
    <>
      <InputConponentLogin
        title='E-mail'
        placeholder="Digita o seu e_mail"
        value={email}
        sx={{ color: "white" }}
        onChange={handleEmail}
        icon={<MailIcon />}
      />
      <InputConponentLogin
        title='Password'
        placeholder="Digita a sua senha por favor"
        type={
          showPassword ? 'text' : 'password'
        }
        sx={{ color: "white" }}
        value={password}
        onChange={handlePassword}
        icon={showPassword ?
          <Visibility onClick={show} /> :
          <VisibilityOff onClick={show} />
        }
      />
      <div className="mybotton">
        <Button onClick={handleSubmit} fullWidth={true} variant="contained" text="Logar-se" />
        <Link to="/cadastroUser">
          <Button variant="outlined" text="Cadastrar" />
        </Link>
      </div>
    </>
  );
};
