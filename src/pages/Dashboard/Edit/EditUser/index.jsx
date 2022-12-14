import { Dialog, DialogContent, Stack } from "@mui/material"
import { useState } from "react"
import { Header } from "../../Header"
import CreateIcon from "@mui/icons-material/Create";
import CheckIcon from "@mui/icons-material/Check";
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { SidebarItem } from "../../SidebarItem";
import { Link } from "react-router-dom";

export const EditUser = () => {
    const [confPasseordDelete, setConfPaswordDelete] = useState('')
    const handleCloseUserOptions = () => setShowUserOptions(false)
    const [showUserOptions, setShowUserOptions] = useState(true)
    const handleCloseAdminOptions = () => setShowAdminOptions(false)
    const [showAdminOptions, setShowAdminOptions] = useState(false)
    const [passwordConf, setPasswordConf] = useState(false);
    const [areas, setAreas] = useState(true);
    const [showSenha, setShowSenha] = useState(true)
    const mudaFormatoSenha = () => { setShowSenha(!showSenha) }

    const passwordConfs = () => {
        setAreas(false);
        setPasswordConf(!passwordConf);
    };
    const handleConfPassword = (e) => {
        const newPassword = e.target.value;
        setConfPaswordDelete(newPassword)
    }
    const deleteUser = () => {
        setPasswordConf(false)

        const deletando = pessoas.filter(item => item.passwordConfirmation.toLowerCase().includes(confPasseordDelete.toLowerCase()))
        if (deletando) {
            alert(`Deseja realmente apagar este usuario? ${selectedResult?.email == confPasseordDelete}`)
        } else {
            alert('Usuario não encontrado, a senha não confere!')
        }
        setAreas(true)
    }
    const openAreas = () => {
        setAreas(true);
        setPasswordConf(false);
        setShowEditIcon(true);
    };

    const handleShow = (property) => {
        let meuNovoObjeto = {}
        for (let chave of Object.keys(show)) {
            meuNovoObjeto[chave] = false
        }
        meuNovoObjeto[property] = true
        setShow(meuNovoObjeto)
    }
    const handleOpen = (property) => {
        let meuNovoObjeto = {}
        for (let chave of Object.keys(open)) {
            meuNovoObjeto[chave] = false
        }
        meuNovoObjeto[property] = true
        setOpen(meuNovoObjeto)
    }
    const [open, setOpen] = useState({
        offices: false,
    })

    return (
        <>
            <div className="containerUserLoged">
                <Header />
                <h1 className="cad-h1">Configurações avançadas do usuário</h1>
                <div className="info-itens">
                    <Stack>
                        <SidebarItem
                            title="User Name"
                            content='selectedResult?.username'
                        />

                        <SidebarItem
                            title="E-mail"
                            content='userSelect:/Id?.email'
                        />
                        <SidebarItem
                            title="Telephone"
                            content='userSelect:/Id?.celphone'
                        />
                        <SidebarItem
                            title="Birth date"
                            content='userSelect:/Id?.birthDate'
                        />
                        <SidebarItem
                            title="Registration Date"
                            content='userSelect:/Id?.registrationDate'
                        />
                        <SidebarItem
                            title="Management level"
                            content='userSelect:/Id?.managementLevel'
                        />

                    </Stack>
                    <div className="edit-user">

                        <div onClick={() => {
                            handleOpen('offices')
                            handleCloseUserOptions()
                            setShowAdminOptions(true)
                        }}>Level Up</div>
                        <div onClick={passwordConfs}>Deletar</div>
                    </div>
                </div>

            </div>
            <Dialog open={showAdminOptions} onClose={handleCloseAdminOptions}>
                <DialogContent>
                    <Stack >
                        <div className="option" onClick={() => handleShow('editIcon')}>Add as assistant/Admin</div>
                        <div className="option" onClick={() => handleShow('editIcon')}>Add as admin</div>
                    </Stack>
                </DialogContent>
            </Dialog>

            <Dialog open={passwordConf} onClose={handleCloseAdminOptions}>
                <DialogContent>
                    <>
                        <h3 className="confirmation-title">
                            Confirmation Password
                            <CheckIcon
                                onClick={deleteUser}
                                className="checkConfirmation"
                            />
                        </h3>
                        <Stack style={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                            width: '100%',
                            heitgh: '3rem',
                            background: 'black',
                            color: 'white'
                        }}>
                            <input
                                style={{
                                    marginRight: '3rem',
                                    width: '80%',
                                    heitgh: '100%',
                                    color: 'white'
                                }}
                                placeholder="Enter confirmation password"
                                type={showSenha ? 'text' : 'password'}
                                value={confPasseordDelete}
                                onChange={handleConfPassword}
                            ></input>
                            <div style={{
                                position: 'absolute',
                                marginTop: '5px',
                                width: '2rem',
                                color: 'white'
                            }} >{showSenha ? <Visibility
                                onClick={mudaFormatoSenha}
                            /> :
                                <VisibilityOff
                                    onClick={mudaFormatoSenha}
                                />}
                            </div>
                        </Stack>
                    </>
                </DialogContent>
            </Dialog>
            <Link to="/dashboard">
                <div style={{
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '5rem',
                    height: '3rem',
                    bottom: '0px',
                    left: '0px',
                    background: 'black',
                    cursor: 'pointer'
                }}>Voltar</div>
            </Link>
        </>
    )
}