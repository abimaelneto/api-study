import "./index.css";
import { Header } from "./Header";
import SearchIcon from "@mui/icons-material/Search";
import CreateIcon from "@mui/icons-material/Create";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";
import { SidebarItem } from "./SidebarItem";
import { Stack } from "@mui/material";

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
  const [showIconSearch, setShowIconSearch] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showEditIcon, setShowEditIcon] = useState(true);
  const [passwordConf, setPasswordConf] = useState(false);
  const [areas, setAreas] = useState(true);
  const [openOffices, setOpenOffices] = useState(false);
  const [openlistSearch, setOpenlistSearch] = useState(true);
  const [openlistUsers, setOpenlistUsers] = useState(false)
  const [openlistMore, setOpenlistMore] = useState(false)
  const openResultSearch = () => {
    setOpenlistSearch(true);
    setOpenlistMore(false)
    setOpenlistUsers(false)
    setA(false)
    setTimeout(() => {
      setA(true)
      setOpenlistSearch(false);
      setOpenlistMore(false)
      setOpenlistUsers(false)
    }, "10000")
  };
  const openUsers = () => {
    setOpenlistUsers(true)
    setOpenlistSearch(false)
    setOpenlistMore(false)
    setA(false)
  }
  const openMore = () => {
    setOpenlistMore(true)
    setOpenlistSearch(false)
    setOpenlistUsers(false)
    setA(false)
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
  const showItens = () => {
    setShowEditIcon(true);
    setShowEdit(false);
    setOpenOffices(false);
  };
  const showEdits = () => {
    setShowEditIcon(false);
    setShowEdit(!showEdit);
  };
  const showSearch = () => {
    setShowIconSearch(!showIconSearch);
  };
  const closedShow = () => {
    setShowIconSearch(false);
  };
  return (
    <>
      <div className="containerUserLoged">
        <Header />
        <div className="mini-container">
          {showIconSearch && (
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
              {openOffices && (
                <Stack className="more-info-user">
                  <div onClick={showItens}>Add as assistant/Admin</div>
                  <div onClick={showItens}>Add as admin</div>
                </Stack>
              )}
              {showEdit && (
                <Stack className="more-info-user">
                  <div onClick={openoffices}>Level Up</div>
                  <div onClick={passwordConfs}>Delete User</div>
                </Stack>
              )}
              <h3>
                Info User
                {showEditIcon && (
                  <CreateIcon onClick={showEdits} className="edit-user" />
                )}
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
                      title="E-mai"
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
                <div onClick={openResultSearch}
                >
                  Search result
                </div>
                <div onClick={openUsers}
                >
                  List of Users
                </div>
                <div onClick={openMore}
                >
                  About the project
                </div>
              </Stack>
              {a && <h2>Em repouso...</h2>}
              {openlistSearch &&
                <div
                  className="listUser-resultSearch"
                >
                  {users.map((item => (
                    <List_Users key={item.name} {...item} />
                  )))}
                </div>
              }
              {openlistUsers &&
                <div
                  className="listUser-users">
                  {users.map((item => (
                    <List_Users key={item.name} {...item} />
                  )))}
                </div>
              }
              {openlistMore &&
                <div
                  className="listUser-more">
                  About the project
                </div>
              }
            </div>
          </div>
        </div>
        <p onClick={showSearch} className="search">
          <SearchIcon />
        </p>
      </div>
    </>
  );
};
