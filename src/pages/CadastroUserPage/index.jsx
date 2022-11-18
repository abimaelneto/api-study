import './index.css'

import { InputesList } from './INPUTS'

export const CadastroUser = () => {
    return (
        <>
            <div className="container">
                <h1 className="cad-h1" style={{ color: 'green' }}>
                    Registrar usuarios
                </h1>
                <div className="itens_center">
                    <div className="center_left">
                        <InputesList/>
                    </div>
                </div>
            </div>
        </>
    )
}