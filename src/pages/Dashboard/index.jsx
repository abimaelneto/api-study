import "./index.css";
import { Header } from "./Header";
import SearchIcon from "@mui/icons-material/Search";
import CreateIcon from "@mui/icons-material/Create";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";
import { SidebarItem } from "./SidebarItem";
import { Button, Dialog, DialogActions, DialogContent, Stack } from "@mui/material";
import { Cancel, CancelOutlined } from "@mui/icons-material";

const users = [
  {
    username: 'Temotio Luis Bernardo',
    e_mail: 'temotioluisbernardo@gmail.com',
    telephone: '41 997610666',
    brirth_date: '01/10/2012',
    registration: '23 de Agosto de 2021',
    mag_level: 'Admin',
    password: '**********',
    confirm_password: '**********'
  },
]
const List_Users = ({ username }) => {
  return (
    <Stack className="users">{username}</Stack>
  )
}
export const Dashboard = () => {
  const [a, setA] = useState(false)

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


  const openoffices = () => {
    setOpenOffices(!openOffices);
    setShowEditIcon(false);
    setShowEdit(false);
    setA(false)
  };
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

  const showItens = () => {

  };
  const showEdits = () => {
  };
  const showSearch = () => {
  };
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
                type="text"
                onChange={''}
                value=''
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
                  <>
                    <SidebarItem
                      title="User Name"
                      content="Agente da Empresa"
                    />

                    <SidebarItem
                      title="E-mail"
                      content="temotio.bernardo@snowmanlabs.com"
                    />
                    <SidebarItem
                      title="Telephone"
                      content="+55 41 99761-0111"
                    />
                    <SidebarItem title="Birth date" content="02/10/2000" />
                    <SidebarItem
                      title="Registration Date"
                      content="23 de Agosto de 2021"
                    />
                    <SidebarItem title="Management level" content="Admin" />
                    <SidebarItem title="Password" content="*********" />
                    <SidebarItem
                      title="Password confirmation"
                      content="*********"
                    />
                  </>
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
              {a && <h2>Em repouso...</h2>}
              {open.listSearch &&
                <div
                  className="listUser-resultSearch"
                >
                  {users.map((item => (
                    <List_Users key={item.name} {...item} />
                  )))}
                </div>
              }
              {open.listUsers &&
                <div
                  className="listUser-users">
                  {users.map((item => (
                    <List_Users key={item.name} {...item} />
                  )))}
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
