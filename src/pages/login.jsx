import { Button } from "@mui/material";
import { Input } from "@mui/material";
import React from "react";
import "../pages/login.css";

export const Login = () => {
  return (
    <>
      <div className="containerlogin">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </div>
    </>
  );
};
