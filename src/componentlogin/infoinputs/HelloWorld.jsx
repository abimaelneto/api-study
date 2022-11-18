import { useState } from "react";
import "./inputs.css";
import { Stack } from "@mui/material";
import { Icon } from 'react-icons-kit'
import { eyeOff } from 'react-icons-kit/feather/eyeOff';

import { eye } from 'react-icons-kit/feather/eye';


export const HelloWorld = () => {
  const [showPassword, setShowPassword] = useState(false)
  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  console.log('show', showPassword)
  return (
    <>
      <Stack className="input-wrapper">
        <input
          name="email"
          type="text"
          required="required"
          autoComplete="false"
        />
        <span>Email</span>
        <i></i>
      </Stack>

      <Stack className="input-wrapper">
        <input
          name="password"
          type={showPassword ? 'text' : 'password'}
          required="required"


        />
        <span>pessword</span>
        <i>
        </i>
      </Stack>
      <span onClick={handleToggleShowPassword} ><Icon icon={showPassword ? eye : eyeOff} size={20} /></span>


    </>
  );
};
