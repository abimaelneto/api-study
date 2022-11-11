import './Home.css'
import { LogoUserLoged } from './LogoUserLoged'
import SearchIcon from '@mui/icons-material/Search';
import CreateIcon from '@mui/icons-material/Create';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
export const HomeUserLoged = () => {
    const [showIconSearch, setShowIconSearch] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [showEditIcon, setShowEditIcon] = useState(true)
    const [passwordConf, setPasswordConf] = useState(false)
    const [areas, setAreas] = useState(true)
    const [openOffices, setOpenOffices] = useState(false)
    const [openlistSearch, setOpenlistSearch] = useState(true)
   
    const openResultSearch = () => {
        setOpenlistSearch(true)
    }
    const openoffices = () => {
        setOpenOffices(!openOffices)
        setShowEditIcon(false)
        setShowEdit(false)
    }
    const openAreas = () => {
        setAreas(true)
        setPasswordConf(false)
        setShowEditIcon(true)
    }
    const passwordConfs = () => {
        setAreas(false)
        setPasswordConf(!passwordConf)
        setShowEdit(false)
    }
    const showItens = () => {
        setShowEditIcon(true)
        setShowEdit(false)
        setOpenOffices(false)
    }
    const showEdits = () => {
        setShowEditIcon(false)
        setShowEdit(!showEdit)
    }
    const showSearch = () => {
        setShowIconSearch(!showIconSearch)
    }
    const closedShow = () => {
        setShowIconSearch(false)
    }

    return (
        <>
            <div className='containerUserLoged'>
                <LogoUserLoged />
                <div className='mini-container'>
                    {showIconSearch
                        &&
                        <div className='inputSearchAndIcon'>
                            <input placeholder='Search users' type="text" />
                            <SearchIcon />
                        </div>
                    }
                    <div onClick={closedShow} className="infoUser">
                        <div className='info'>
                            {openOffices &&
                                <div className="more-info-user">
                                    <div onClick={showItens}>Add as assistant/Admin</div>
                                    <div onClick={showItens}>Add as admin</div>
                                </div>
                            }
                            {showEdit &&
                                <div className="more-info-user">
                                    <div onClick={openoffices}>Level Up</div>
                                    <div onClick={passwordConfs}>Delete User</div>
                                </div>
                            }
                            <h3>Info User
                                {showEditIcon && <CreateIcon onClick={showEdits} className='edit-user' />}
                            </h3>
                            {
                                passwordConf
                                &&
                                <h3 className='confirmation-title'>
                                    Confirmation Password
                                    <CheckIcon onClick={openAreas} className='checkConfirmation' />
                                </h3>
                            }
                            <div className="info-itens">
                                {areas &&
                                    <>
                                        <div className="itens-info-user">
                                            User Name:
                                            <span>Agente da Empresa</span>
                                        </div>
                                        <div className="itens-info-user">
                                            E-mai:
                                            <span>temotio.bernardo@snowmanlabs.com</span>
                                        </div>
                                        <div className="itens-info-user">
                                            Telephone:
                                            <span>+55 41 99761-0111</span>
                                        </div>
                                        <div className="itens-info-user">
                                            Birth date:
                                            <span>02/10/2000</span>
                                        </div>
                                        <div className="itens-info-user">
                                            Registration Date:
                                            <span>23 de Agosto de 2021</span>
                                        </div>
                                        <div className="itens-info-user">
                                            Management level:
                                            <span>Admin</span>
                                        </div>
                                        <div className="itens-info-user">
                                            Password:
                                            <span>*********</span>
                                        </div>
                                        <div className="itens-info-user">
                                            Password confirmation:
                                            <span>*********</span>
                                        </div>
                                    </>
                                }
                                {
                                    passwordConf && <input placeholder='Enter confirmation password' type="password" name="password" id="password" >
                                    </input>
                                }

                            </div>
                        </div>
                        <div className="listUsers">
                            <div className="logoListUsers">
                                <div>Search result</div>
                                <div>List of Users</div>
                                <div>About the project</div>
                            </div>
                            {openlistSearch &&
                                <div onClick={openResultSearch} className="listUser-resultSearch">Search result</div>}
            
                        </div>
                    </div>
                </div>
                <p onClick={showSearch} className="search">
                    <SearchIcon />
                </p>
            </div>
        </>
    )
}