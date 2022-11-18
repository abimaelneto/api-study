import { useState } from "react";
import "./cadastro.css";
import { Icon } from 'react-icons-kit'
import { eyeOff } from 'react-icons-kit/feather/eyeOff';

import { eye } from 'react-icons-kit/feather/eye';
import { Stack } from "@mui/material";



export const Cadastro = () => {
    const [showPassword, setShowPassword] = useState(false)
    const handleToggleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return (<>

        <Stack className="wrapper">
            <Stack className="input-field">
                <input type={showPassword ? 'text' : 'password'} />
                <span onClick={handleToggleShowPassword} ><Icon icon={showPassword ? eye : eyeOff} size={20} /></span>
            </Stack>
        </Stack>

    </>)
}