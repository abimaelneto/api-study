
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, Input, InputAdornment, InputLabel, Stack } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
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
                <div className="div-lubi-cadastro">
                    <div className="wrapper-login-cadastro">
                        <h1 className="cad-h1" style={{ width: '100%'}}>
                            Registrar usuarios
                        </h1>

                        <Stack className="form-cadastro"  >
                            <InputesList />

                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox
                                        onClick={handleTermos} />}
                                    label="Aceito termos e condições deste logal" />
                            </FormGroup>
                            <div className='wrapper-button'>
                                <Button fullWidth={true} onClick={handleCadastrar} variant="contained" color="primary" disabled={!aceitouTermos}>
                                    Cadastrar
                                </Button>
                                <Link to='/login'>
                                    <Button  variant="outlined">
                                        Login
                                    </Button>
                                </Link>
                            </div>
                        </Stack>
                    </div>
                </div>
            </div>
        </>
    )
} 
