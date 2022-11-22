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
                        <FormControlLabel 
                        control={<Checkbox 
                        onClick={handleTermos} />} 
                        label="Aceito termos e condições deste logal" />
                    </FormGroup>
                    
                    <Stack>
                   
                            <Button onClick={handleCadastrar} variant="contained" color="primary" disabled={!aceitouTermos}>
                                Cadastrar
                            </Button>
                     
                    </Stack>
                </Stack>
            </div>
        </>
    )
}