import { useState } from "react";
import "./index.css";
import { Visibility, VisibilityOff } from '@mui/icons-material'
import MailIcon from '@mui/icons-material/Mail';
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { InputConponentLogin } from "./Inpunts";
import { Dialog, DialogActions, DialogContent, Stack } from "@mui/material";


export const HelloWorld = () => {
  const docs = {
    emailDocs: "oitomitluis32@gmail.com",
    passwordDocs: "camotio32"
  }
  const [showErroDinamic, setErroDinamic] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const navegate = useNavigate()
  // const [erro, setErro] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const show = () => setShowPassword(!showPassword)

  const handleSubmit = () => {

    let newMessage = 'ERRO:\n'

    if(password && email) {
      if (password == docs.passwordDocs
        && email == docs.emailDocs
      ) {
        navegate('/dashboard')
        setErroDinamic('')
        return
      }
      newMessage += 'Seus dados passados nos campos não são reconhecidos!'
    }
    
    if (!password) {
      newMessage += ' O campo password não está preenhido!'
    }

    if (!email) {
      newMessage += ' O campo email não está preenhido!'
    }

    setErroDinamic(newMessage)

    setTimeout(() => {
      setErroDinamic('')
    }, "3000")


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
        type='email'
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
      <Dialog open={showErroDinamic}>
        <DialogContent>
          <Stack >
            <div className="erro" style={{ color: 'red' }}>{showErroDinamic}</div>
            <div style={{ color: 'red' }}>Por favor preencha</div>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};
