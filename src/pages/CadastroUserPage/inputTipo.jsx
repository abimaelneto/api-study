import { Input as MuiInput, Typography } from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
export const MudarInput = () => {
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    
    const match = password === passwordConfirmation
    const [icon, setIcon] = useState(true)
    const Mostrar_ocultar = () => {
        setIcon(!icon)
    }
    const handleChange = (e, setState) => {
        const newPassword = e.target.value;
        setState(newPassword);
    }
    return (
        <>
            <div className='conponent_too'>
                <div className="left_stack muiInput">
                    <span>Password</span>
                    <MuiInput
                        fullWidth={true}
                        sx={{ color: 'white' }}
                        type={icon ? 'text' : 'password'}
                        placeholder='Digite a sua senha'
                        value={password}
                        onChange={(e) => handleChange(e, setPassword)}
                    />
                </div>
                {icon ? <VisibilityIcon
                    onClick={Mostrar_ocultar}
                /> : <VisibilityOffIcon onClick={Mostrar_ocultar} />}
            </div>
            <div className='conponent_too'>
                <div className="left_stack muiInput">
                    <span>Password confirmation</span>
                    <MuiInput
                        fullWidth={true}
                        sx={{ color: 'white' }}
                        type={icon ? 'text' : 'password'}
                        placeholder='Confirma a sua senha'
                        value={passwordConfirmation}
                        onChange={(e) => handleChange(e, setPasswordConfirmation)}
                    />
                </div>
                {icon ? <VisibilityIcon
                    onClick={Mostrar_ocultar}
                /> : <VisibilityOffIcon onClick={Mostrar_ocultar} />}
            </div>
            {!match && <Typography color="error.main">Senhas não conferem</Typography>}
        </>
    )
}