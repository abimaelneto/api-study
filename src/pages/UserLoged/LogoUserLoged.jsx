import './LogoUserLoged.css'
export const LogoUserLoged = () => {
    return (
        <>
            <div className='containerLogoUserLoged'>
                <div className='mini-info-userLoged'>
                    <h3 className='salutation'>
                        <strong>O</strong>
                        <strong>l</strong>
                        <strong>a</strong>
                        !
                    </h3>
                    <p>Agente da Empresa</p>
                </div>
                <div className='userLoged-office'>
                    <h3>Management level:</h3>
                    <p>Admin</p>
                </div>
            </div>
        </>
    )
}