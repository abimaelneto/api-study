import './index.css'
import { Input } from '../../components/Input'
import MailIcon from '@mui/icons-material/Mail';
import BadgeIcon from '@mui/icons-material/Badge';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { useState } from 'react';
import { MudarInput } from './inputTipo';


export const InputesList = () => {

    const [show, setShow] = useState(false)
   
    // const [password, setPassword] = useState('')
    // const [passwordConfirmed, setPasswordConfirmed] = useState('')


    return (
        <>

            <div className='conponent_too' >
                <Input
                    title="Username"
                    tipo='text'
                    fundo='Digita seu nome'
                />
                <BadgeIcon />
            </div >
            <div className='conponent_too'>
                <Input
                    title="data de nascimento"
                    tipo='text'
                    fundo='Digite a sua data de nascimento'
                />
                <BadgeIcon />
            </div>
            <div className='conponent_too'>
                <Input
                    title="Telefone"
                    tipo='number'
                    fundo='Digita seu número do celular'
                />
                <ContactPhoneIcon />
            </div>
            <div className='conponent_too'>
                <Input
                    title="E_mail"
                    tipo='email'
                    fundo='Digita seu E_mail'
                />
                <MailIcon />
            </div>
            <MudarInput/>
        </>

    )
}