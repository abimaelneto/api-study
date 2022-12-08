import "./index.css";
import { Header } from "./Header";
import SearchIcon from "@mui/icons-material/Search";
import CreateIcon from "@mui/icons-material/Create";
import CheckIcon from "@mui/icons-material/Check";
import { useEffect, useState } from "react";
import { SidebarItem } from "./SidebarItem";
import { Button, Dialog, DialogActions, DialogContent, Stack } from "@mui/material";
import Api from "../../Api";

export const Dashboard = () => {

  const [showUserOptions, setShowUserOptions] = useState(false)
  const [showAdminOptions, setShowAdminOptions] = useState(false)
  const [show, setShow] = useState({
    iconSearch: false,
  })
  const [open, setOpen] = useState({
    offices: false,
    listSearch: true,
    listUsers: false,
    listMore: false
  })

  const [passwordConf, setPasswordConf] = useState(false);
  const [areas, setAreas] = useState(true);

  const handleOpen = (property) => {
    let meuNovoObjeto = {}
    for (let chave of Object.keys(open)) {
      meuNovoObjeto[chave] = false
    }
    meuNovoObjeto[property] = true
    setOpen(meuNovoObjeto)
  }


  const openAreas = () => {
    setAreas(true);
    setPasswordConf(false);
    setShowEditIcon(true);
  };
  const passwordConfs = () => {
    setAreas(false);
    setPasswordConf(!passwordConf);
    setShowEdit(false);
  };


  const handleShow = (property) => {
    let meuNovoObjeto = {}
    for (let chave of Object.keys(show)) {
      meuNovoObjeto[chave] = false
    }
    console.log('novo', meuNovoObjeto)
    meuNovoObjeto[property] = true
    setShow(meuNovoObjeto)
  }
  const handleCloseUserOptions = () => setShowUserOptions(false)
  const handleCloseAdminOptions = () => setShowAdminOptions(false)
  const [searchUsers, setSearchUsers] = useState('')
  const [pessoas, setPessoas] = useState(null)
  const [resultados, setResultados] = useState([])
  const [selectedResult, setSelectedResult] = useState({})
  const handleSearchResult = (e) => {
    const newSearchResult = e.target.value;
    setSearchUsers(newSearchResult)
    const novosResultados = pessoas.filter(item => item.nome.toLowerCase().includes(newSearchResult.toLowerCase()))
    setResultados(novosResultados)
    //se encontrou ao menos 1 resultado, seleciona o primeiro para ser mostrado
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

  return (
    <>
      <div className="containerUserLoged">
        <Header />
        <div className="mini-container">
          {show.iconSearch && (
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
                <CreateIcon onClick={() => setShowUserOptions(true)} className="edit-user" />
              </h3>

              {passwordConf && (
                <h3 className="confirmation-title">
                  Confirmation Password
                  <CheckIcon
                    onClick={openAreas}
                    className="checkConfirmation"
                  />
                </h3>
              )}
              <div className="info-itens">
                {areas && (

                  resultados.length > 0 &&
                  <Stack>
                    <SidebarItem
                      title="User Name"
                      content={selectedResult?.nome}
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

                )}
                {passwordConf && (
                  <input
                    placeholder="Enter confirmation password"
                    type="search"
                  ></input>
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
                      <h2 className="users">{resultado.nome}</h2>
                    </div>
                  )
                  )}
                </div>
              }
              {open.listUsers &&
                <div
                  className="listUser-users">
                 
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
        <p onClick={() => {
          handleShow('iconSearch')
        }} className="search">
          <SearchIcon />
        </p>
      </div>
      <Dialog open={showUserOptions} onClose={handleCloseUserOptions} >
        <DialogContent>
          <Stack sx={{ width: '100%' }} >
            <div onClick={() => {
              handleOpen('offices')
              handleCloseUserOptions()
              setShowAdminOptions(true)
            }}>Level Up</div>
            <div onClick={passwordConfs}>Delete User</div>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseUserOptions}>Voltar</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={showAdminOptions} onClose={handleCloseAdminOptions}>
        <DialogContent>
          <Stack >
            <div onClick={() => handleShow('editIcon')}>Add as assistant/Admin</div>
            <div onClick={() => handleShow('editIcon')}>Add as admin</div>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};
