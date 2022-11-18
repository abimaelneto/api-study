import './index.css'
import { InputConponent } from './InputConponent'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import MailIcon from '@mui/icons-material/Mail';
import BadgeIcon from '@mui/icons-material/Badge';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Button } from '@mui/material'
import { Stack } from '@mui/system'
import { useState } from 'react';
export const InputesList = () => {
    const [showInput, setShowInput] = useState(true)
    const [shows, setShows] = useState(false)
    const [show, setShow] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordConfirmed, setPasswordConfirmed] = useState('')
    const showButton = () => {
        if (document.querySelector('#opt1:checked')) {
            setShowInput(false)
            setShows(true)
        } else {
            setShowInput(true)
            setShows(false)
        }
    }
    const openInputText = () => {
        setShow(!show)
    }
    const cadastrar = () => {
        if(password != passwordConfirmed) {
            console.log(password, passwordConfirmed)
        }
    }
    const handleChangePassword = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
    }
    const handleChangePasswordConfirmed = (e) => {
        const newPasswordConfirmed = e.target.value;
        setPasswordConfirmed(newPasswordConfirmed);
    }
    return (
        <>

            <div className='conponent_too' >
                <InputConponent
                    title="Username"
                    tipo='text'
                    fundo='Digita seu nome'
                />
                <BadgeIcon />
            </div >
            <div className='conponent_too'>
                <InputConponent
                    title="data de nascimento"
                    tipo='text'
                    fundo='Digite a sua data de nascimento'
                />
                <BadgeIcon />
            </div>
            <div className='conponent_too'>
                <InputConponent
                    title="Telefone"
                    tipo='number'
                    fundo='Digita seu número do celular'
                />
                <ContactPhoneIcon />
            </div>
            <div className='conponent_too'>
                <InputConponent
                    title="E_mail"
                    tipo='email'
                    fundo='Digita seu E_mail'
                />
                <MailIcon />
            </div>

            {
                show
                    ?
                    <>
                        <div className='conponent_too'>
                            <InputConponent
                                title="Password"
                                tipo='text'
                                fundo='Criar uma senha'
                            />
                            <VisibilityIcon onClick={openInputText} />
                        </div>
                        <div className='conponent_too'>
                            <InputConponent
                                title="Password Confirmation"
                                tipo='text'
                                fundo='Confirmar a sua senha'
                            />
                            <VisibilityIcon onClick={openInputText} />
                        </div>
                    </>
                    :
                    <>
                        <div className='conponent_too'>
                            <InputConponent
                                title="Password"
                                tipo='password'
                                fundo='Criar uma senha'
                                onChange={handleChangePassword}
                            />
                            <VisibilityOffIcon onClick={openInputText} />
                        </div>
                        <div className='conponent_too'>
                            <InputConponent
                                title="Password Confirmation"
                                tipo='password'
                                fundo='Confirmar a sua senha'
                                onChange={handleChangePasswordConfirmed}
                                value={passwordConfirmed}
                            />
                            <VisibilityOffIcon onClick={openInputText} />
                        </div>
                    </>
            }
            <div className='center-input-checkbox'>
                <input
                    className='checkbox'
                    onClick={showButton}
                    type="checkbox"
                    id="opt1"
                />
                <div>
                    Aceito termos e condições
                </div>
            </div>
            <Stack>
                {shows
                    &&
                    <Button onClick={cadastrar} variant="contained" color="primary">
                        Cadastrar
                    </Button>
                }
                {showInput
                    &&
                    <Button variant="contained" disabled>
                        Cadastrar
                    </Button>
                }
            </Stack>


        </>
    )

}