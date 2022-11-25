import './Home.css'
import { AnimationPage } from './animation'
import { useNavigate } from 'react-router-dom'
export const HomePage = () => {
    const navigate = useNavigate()
    const innerCadastro = ( ) => {
        navigate("/CadastroUser")
    }
    return (
        <>
            <AnimationPage
                title="Log in or Register"
                buttontitle="Log in"
                buttontitle1="Register"
            />
        </>
    )
}