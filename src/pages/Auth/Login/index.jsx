import { Button, Stack, TextField } from "@mui/material";

import React from "react";
import "./login.css";
import { AuthContainer } from "../../../components/AuthContainer";
import { Input } from "../../../components/Input";
export const Login = () => {
  return (
    <AuthContainer>
      <div className="digite">
        <p>Para garantir a sua segurança faça login</p>
      </div>

      <Input
        label="Email"
        name="email"
        required="required"
        autoComplete="false"
        placeholder="teste"
        sx={{ color: "white" }}
      />

      <Input label="password" name="password" type="password" required="true" />

      <Stack
        flexDirection="row"
        justifyContent="space-between"
        sx={{ mt: 2, px: 3 }}
      >
        <Button variant="contained">Entrar</Button>
        <Button>Esqueci a senha</Button>
        <Button>Não tenho uma conta</Button>
      </Stack>
    </AuthContainer>
  );
};
