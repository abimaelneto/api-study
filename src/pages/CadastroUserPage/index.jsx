import {
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  FormControlLabel,
  FormGroup,
  Input,
  InputAdornment,
  InputLabel,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import { InputesList } from "./INPUTS";

export const CadastroUser = () => {
  const navegate = useNavigate()
  const [showErroDinamic, setShowErroDinamic] = useState(false);
  const [data, setData] = useState({
    username: "",
    birth: "",
    phone: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const [error, setError] = useState({
    username: true,
    birth: true,
    phone: true,
    email: true,
    password: true,
    passwordConfirmation: true,
  });

  const validation = {
    username: (value) => value.length >= 6,
    birth: (value) => value.includes("/"),
    phone: (value) => value.length > 8,
    email: (value) => value.includes("@") && value.includes(".com"),
    password: (value) => value.length >= 8,
    passwordConfirmation: (value) => value.length >= 8,
  };

  const errorMessages = {
    username: "O nome do usuario deve ter no mínimo 6 caracteres",
    birth: "A data deve conter / data,mês e o ano",
    email:
      "Por favor, o email deve conter '@' e '.com', insira um email válido!",
    password: "A senha deve ser maior que 8 caracteres",
    passwordConfirmation: "Esta deve conferir com a sua senha",
    formNoComplet: 'Cadastrou com sucesso :), faça o seu login!'
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setData((old) => {
      return { ...old, [name]: value };
    });

    setError((old) => {
      return {
        ...old,
        [name]: !validation[name](value) ? errorMessages[name] : null,
      };
    });
  };

  const match = data?.password === data?.passwordConfirmation;
  const hasErrors = Object.values(error).find((item) => item != null);
  const [aceitouTermos, setAceitouTermos] = useState(false);

  const handleTermos = () => {
    setAceitouTermos(!aceitouTermos);
  };

  const handleCadastrar = (e) => {
    e.preventDefault();
    const ddd = {
      Tim: 41,
      Oi: 43,
      Claro: 45
    }
    let newMessage = "ERRO:\n";


    setShowErroDinamic(`${errorMessages.formNoComplet}`)


    setTimeout(() => {
      navegate('/login')
      setShowErroDinamic("");
      setShowErroDinamic(newMessage);
    }, "5000");
  };

  return (
    <>
      <div className="container">
        <div className="div-lubi-cadastro">
          <div className="wrapper-login-cadastro">
            <h1 className="cad-h1" style={{ width: "100%" }}>
              Registrar usuarios
            </h1>
            <form onSubmit={handleCadastrar}>
              <Stack className="form-cadastro">
                <InputesList
                  data={data}
                  error={error}
                  handleChange={handleChange}
                  match={match}
                />
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox onClick={handleTermos} />}
                    label="Aceito termos e condições deste logal"
                  />
                </FormGroup>
                <div className="wrapper-button">
                  <Button
                    type="submit"
                    fullWidth={true}
                    variant="contained"
                    color="primary"
                    disabled={!aceitouTermos || !match || hasErrors}
                  >
                    Cadastrar
                  </Button>
                  <Link to="/login">
                    <Button variant="outlined">Login</Button>
                  </Link>
                </div>
              </Stack>
            </form>
            <Dialog open={showErroDinamic}>
              <DialogContent>
                <Stack>
                  <div style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}><div class="loader"></div></div>
                  <div style={{ color: "red" }}>{showErroDinamic}</div>
                </Stack>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
};
// if (Object.values(error).find((item) => item != null)) {
//   newMessage = 'formulário inválido'
//   setShowErroDinamic(newMessage)
// } else {
//   newMessage = 'formulário válido'
//   setShowErroDinamic(newMessage)
// }
