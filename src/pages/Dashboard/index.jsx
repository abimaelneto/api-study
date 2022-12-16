import "./index.css";
import { Header } from "./Header";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from '@mui/icons-material/Logout';

import { useEffect, useState } from "react";
import { SidebarItem } from "./SidebarItem";
import { Card, Stack } from "@mui/material";
import Api from "../../Api";
import { Link } from "react-router-dom";


export const Dashboard = () => {
  const [modes, setModes] = useState({
    default: true,
    light: false,
    dark: false
  })

  const [searchUsers, setSearchUsers] = useState('')
  const [pessoas, setPessoas] = useState(null)
  const [resultados, setResultados] = useState([])
  const [selectedResult, setSelectedResult] = useState({})
  const [showOptions, setShowOptions] = useState(false);
  const [areas, setAreas] = useState(true);
  const handleOpen = (property) => {
    let meuNovoObjeto = {}
    for (let chave of Object.keys(open)) {
      meuNovoObjeto[chave] = false
    }
    meuNovoObjeto[property] = true
    setOpen(meuNovoObjeto)
  }
  const [openInputs, setSpenInputs] = useState(false)
  const openInput = () => { setSpenInputs(!openInputs) }
  const [open, setOpen] = useState({
    offices: false,
    listSearch: true,
    listUsers: false,
    listMore: false
  })
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

  const handleSearchResult = (e) => {
    const newSearchResult = e.target.value;
    setSearchUsers(newSearchResult)
    const novosResultados = pessoas.filter(
      item => item?.username?.toLowerCase().includes(
        newSearchResult?.toLowerCase()
      )
    )

    setResultados(novosResultados)
    //se encontrou ao menos 1 resultado, seleciona o primeiro para ser mostrado//
    if (novosResultados.length > 0) {
      setSelectedResult(novosResultados[0])
    }
  }

  const handleSelectResult = (index) => {
    setSelectedResult(resultados[index])
  }
  const getPessoas = async () => {
    const res = await Api.getPessoas()
    setPessoas(res)
  }
  useEffect(() => {
    getPessoas()
  }, [])
  const closedShow = () => {
  };
  const Options = () => {
    setShowOptions(!showOptions)
  }
  const lightMode =()=> {

  }
  const darkMode =()=> {
    
  }
  return (
    <>
      <div className="containerUserLoged">
        <Header option={Options} />
        <div className="mini-container">
          {openInputs && (
            <div className="inputSearchAndIcon">
              <input
                placeholder="Search users"
                type="searc"
                onChange={handleSearchResult}
                value={searchUsers}
              />
              <SearchIcon />
            </div>
          )}
          <div onClick={closedShow} className="infoUser">
            <div className="info">
              <h3>
                Info User
                <div onClick={openInput} className="search">
                  <SearchIcon />
                </div >
              </h3>


              <div className="info-itens">
                {areas && (

                  resultados.length > 0 &&
                  <>
                    <Stack>
                      <SidebarItem
                        title="User Name"
                        content={selectedResult?.username}
                      />

                      <SidebarItem
                        title="E-mail"
                        content={selectedResult?.email}
                      />
                      <SidebarItem
                        title="Telephone"
                        content={selectedResult?.celphone}
                      />
                      <SidebarItem
                        title="Birth date"
                        content={selectedResult?.birthDate}
                      />
                      <SidebarItem
                        title="Registration Date"
                        content={selectedResult?.registrationDate}
                      />
                      <SidebarItem
                        title="Management level"
                        content={selectedResult?.managementLevel}
                      />

                    </Stack>
                    <>
                      <div className="edit-user">
                        <Link to='/EditUser:/id'>
                          <div>About</div>
                        </Link>
                      </div>

                    </>
                  </>
                )}

              </div>
            </div>
            <div className="listUsers">
              <Stack
                alignItems="center"
                justifyContent="space-between"
                flexDirection="row"
                className="logoListUsers"
              >
                <div onClick={() => handleOpen('listSearch')}
                >
                  Search result
                </div>
                <div onClick={() => handleOpen('listUsers')}
                >
                  List of Users
                </div>
                <div onClick={() => handleOpen('listMore')}
                >
                  About the project
                </div>
              </Stack>

              {open.listSearch &&
                <div
                  className="listUser-resultSearch"
                >
                  {resultados && resultados.map((resultado, index) =>
                  (
                    <div className='users' onClick={() => handleSelectResult(index)}>
                      <h2 className="users">{resultado.username}</h2>
                    </div>
                  )
                  )}
                </div>
              }
              {open.listUsers &&
                <div
                  className="listUser-users">
                  {
                    pessoas.map(pessoa => {
                      return <h2 className="users">{pessoa?.username}</h2>
                    })
                  }
                </div>
              }
              {open.listMore &&
                <div
                  className="listUser-more">
                  About the project
                </div>
              }
            </div>
          </div>
        </div>

      </div>
      {showOptions &&
        <Card sx={{
          position: 'absolute',
          padding: '5px',
          top: '4rem',
          right: '1rem'
        }}>
          <div className="optionMode">Default mode</div>
          <div className="optionMode" onClick={lightMode}>Light mode</div>
          <div className="optionMode" onClick={darkMode}>Dark mode</div>
          <br />
          <div className="optionMode" style={{ color: 'red' }}>Sign out
            <LogoutIcon fontSize="small" />
          </div>
        </Card>
      }
    </>
  );
};
