import './Home.css'
import { LogoUserLoged } from './LogoUserLoged'
import SearchIcon from '@mui/icons-material/Search';
import CreateIcon from '@mui/icons-material/Create';
import { useState } from 'react';
export const HomeUserLoged = () => {
    const [showIconSearch, setShowIconSearch] = useState(false)
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
                            <h3>Info User
                                <CreateIcon className='edit-user' />
                            </h3>
                            <div className="info-itens">
                                <div className="itens-info-user">
                                    User Name:
                                    <span>Agente da Empresa</span>
                                </div>
                                <div className="itens-info-user">
                                    E-mai:
                                    <span>temotio.bernardo@snowmanlabs.com</span>
                                </div>
                                <div className="itens-info-user">
                                    Password:
                                    <span>*********</span>
                                </div>
                                <div className="itens-info-user">
                                    Password confirmation:
                                    <span>*********</span>
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
                                    Management level:
                                    <span>Admin</span>
                                </div>
                            </div>
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