import { AccessAlarm, AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, Input, InputAdornment, InputLabel, Stack } from '@mui/material'
import { useState } from 'react'
import { Password } from '../../components/PasswordInput'
import './index.css'

import { InputesList } from './INPUTS'

export const CadastroUser = () => {
    const [aceitouTermos, setAceitouTermos] = useState(false)

    const handleTermos = () => {
        setAceitouTermos(!aceitouTermos)
    }
    const handleCadastrar = () => {

    }

    return (
        <>
            <div className="container">
                <h1 className="cad-h1" style={{ color: 'green' }}>
                    Registrar usuarios
                </h1>
                <Stack className="form-cadastro"  >
                    <InputesList/>

                    <FormGroup>
                        <FormControlLabel control={<Checkbox onClick={handleTermos} />} label="Aceito termos e condições" />
                    </FormGroup>
                    
                    <Stack>
                   
                            <Button onClick={handleCadastrar} variant="contained" color="primary" disabled={!aceitouTermos}>
                                Cadastrar
                            </Button>
                     
                    </Stack>
                  <Password label="Password do Quizito" iconShow={<AccountCircle/>} iconNotShow={<AccessAlarm/>}/>
                  <Password label="Password do Temotio"/>

                  <Password label="Senha 1 "/>

                  <Password label="Senha 2"/>

                  <Password label="Password do Quizito"/>

                </Stack>
            </div>
        </>
    )
}