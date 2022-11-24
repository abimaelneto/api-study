import { Input as MuiInput } from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
export const MudarInput = () => {
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [icon, setIcon] = useState(true)
    const Mostrar_ocultar = () => {
        setIcon(!icon)
    }
    const handleChangePassword = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
    }
    const handlePasswordConfirmation = (e) => {
        const newPasswordConfirmation = e.target.value;
        setPasswordConfirmation(newPasswordConfirmation);
    }
    return (
        <>
            <div className='conponent_too'>
                <div className="left_stack muiInput">
                    <span>Password</span>
                    <MuiInput
                        className='input'
                        type={icon ? 'text' : 'password'}
                        placeholder='Digite a sua senha'
                        value={password}
                        onChange={handleChangePassword}
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
                        className='input'
                        type={icon ? 'text' : 'password'}
                        placeholder='Confirma a sua senha'
                        value={passwordConfirmation}
                        onChange={handlePasswordConfirmation}
                    />
                </div>
                {icon ? <VisibilityIcon
                    onClick={Mostrar_ocultar}
                /> : <VisibilityOffIcon onClick={Mostrar_ocultar} />}
            </div>
        </>
    )
}