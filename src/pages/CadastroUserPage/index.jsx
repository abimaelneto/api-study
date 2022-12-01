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
import { Link } from "react-router-dom";
import "./index.css";
import { InputesList } from "./INPUTS";

export const CadastroUser = () => {
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
    username: null,
    birth: null,
    phone: null,
    email: null,
    password: null,
    passwordConfirmation: null,
  });

  const validation = {
    username: (value) => value.length < 6,
    email: (value) => !value.includes("@"),
  };

  const errorMessages = {
    email: "Por favor, insira um email válido!",
    username: "A senha deve ter no mínimo 6 caracteres",
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setData((old) => {
      return { ...old, [name]: value };
    });

    setError((old) => {
      //validation['email']('temotio@email.com') => true
      //validation['email']('temotio.com') => false

      return {
        ...old,
        [name]: validation[name](value) ? errorMessages[name] : null,
      };
    });
  };

  const match = data?.password === data?.passwordConfirmation;

  const [aceitouTermos, setAceitouTermos] = useState(false);

  const handleTermos = () => {
    setAceitouTermos(!aceitouTermos);
  };

  const handleCadastrar = (e) => {
    e.preventDefault();
    let newMessage = "ERRO:\n";

    if (Object.values(error).find((item) => item != null)) {
      alert("formulário inválido");
      return;
    }
    alert("formulário submetido");
    return;
    // if (
    //   data.email.includes("@")
    //   // && data.email.toString().includes('.') == 1
    //   // data.email < 6
    // ) {
    //   newMessage = "passou";
    //   setShowErroDinamic(newMessage);
    // } else {
    //   newMessage = "nao passa";
    //   setShowErroDinamic(newMessage);
    // }

    // if (
    //     data.username.length ||
    //     data.birth.length ||
    //     data.phone.length ||
    //     data.email.length ||
    //     data.password.length ||
    //     data.passwordConfirmation.length
    //     <= 6
    // ) {
    //     if (data.email.includes(
    //         '@' == 1 ||
    //         'gmail.com'
    //     )) {
    //         newMessage = `certo`
    //         setShowErroDinamic(newMessage)
    //     }
    // } else {
    //     newMessage = 'Verifique se todos os campos tem caratereres maior que 5'
    //     setShowErroDinamic(newMessage)
    // }

    // setShowErroDinamic(newMessage);
    // setTimeout(() => {
    //   setShowErroDinamic("");
    // }, "3000");
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
                    disabled={!aceitouTermos || !match}
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
                  <div className="erro" style={{ color: "red" }}>
                    {showErroDinamic}
                  </div>
                  <div style={{ color: "red" }}>Por favor preencha</div>
                </Stack>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
};
