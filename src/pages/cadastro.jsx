import { useState } from "react";
import "./cadastro.css";
import { Icon } from 'react-icons-kit'
import { eyeOff } from 'react-icons-kit/feather/eyeOff';

import { eye } from 'react-icons-kit/feather/eye';
import { Stack } from "@mui/material";



export const Cadastro = () => {
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff)
    const abriIcon = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text');
        }
        else {
            setIcon(eyeOff)
            setType('password')
        }
    }
    return (<>

        <Stack className="wrapper">
            <Stack className="input-field">
                <input type={type} />
            </Stack>
            <Stack className="input-field">
                <input type={showPassword ? 'text' : 'password'} />
                <span onClick={abriIcon} ><Icon icon={icon} size={20} /></span>
            </Stack>
        </Stack>

    </>)
}