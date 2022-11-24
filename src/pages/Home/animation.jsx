import { Button } from "@mui/material"
import { Link } from "react-router-dom"

export const AnimationPage = (

    {
        title,
        buttontitle,
        buttontitle1,
    }
) => {
    return (
        <>
            <div className="container">
                <div className="div-lubi">
                    <div className="wrapper-login">
                        <h2 style={{ color: 'white' }}>{title}</h2>
                        <Link to="/login">
                            <Button
                                fullWidth={true}
                                sx={{
                                    mb: "2rem",
                                    width: '15rem'
                                }}
                                variant="contained"
                                color="primary"
                            >
                                {buttontitle}
                            </Button>
                        </Link>
                        <Link to="/cadastroUser">
                            <Button

                                sx={{

                                    width: '15rem'
                                }}
                                variant="contained"
                                color="secondary"
                            >
                                {buttontitle1}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}