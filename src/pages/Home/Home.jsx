import './Home.css'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
export const HomePage = () => {
    const navigate = useNavigate()
    const innerCadastro = ( ) => {
        navigate("/CadastroUser")
    }
    return (
        <>
            <div className="container">
                <h1 className='home-title'>
                    Log in or Register
                </h1>
                <div className='container-bottons-center'>
                    <Button  variant="contained" color="primary">
                        Log in
                    </Button>
                    <Button onClick={innerCadastro} variant="contained" color="secondary">
                        Register
                    </Button>
                </div>
            </div>
        </>
    )
}