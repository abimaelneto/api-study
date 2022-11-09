import './Home.css'
import { Button } from '@mui/material'
export const HomePage = () => {
    return (
        <>
            <div className="container">
                <h1 className='home-title'>
                    Log in or Register
                </h1>
                <div className='container-bottons-center'>
                    <Button variant="contained" color="primary">
                        Log in
                    </Button>
                    <Button variant="contained" color="secondary">
                        Register
                    </Button>
                </div>
            </div>
        </>
    )
}