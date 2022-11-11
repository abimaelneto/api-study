import "./index.css";
import { Header } from "./Header";
import SearchIcon from "@mui/icons-material/Search";
import CreateIcon from "@mui/icons-material/Create";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";
import { SidebarItem } from "./SidebarItem";
import { Stack } from "@mui/material";

export const Dashboard = () => {
  const [showIconSearch, setShowIconSearch] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showEditIcon, setShowEditIcon] = useState(true);
  const [passwordConf, setPasswordConf] = useState(false);
  const [areas, setAreas] = useState(true);
  const [openOffices, setOpenOffices] = useState(false);
  const [openlistSearch, setOpenlistSearch] = useState(true);

  const openResultSearch = () => {
    setOpenlistSearch(true);
  };
  const openoffices = () => {
    setOpenOffices(!openOffices);
    setShowEditIcon(false);
    setShowEdit(false);
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
              <input placeholder="Search users" type="text" />
              <SearchIcon />
            </div>
          )}
          <div onClick={closedShow} className="infoUser">
            <div className="info">
              {openOffices && (
                <div className="more-info-user">
                  <div onClick={showItens}>Add as assistant/Admin</div>
                  <div onClick={showItens}>Add as admin</div>
                </div>
              )}
              {showEdit && (
                <div className="more-info-user">
                  <div onClick={openoffices}>Level Up</div>
                  <div onClick={passwordConfs}>Delete User</div>
                </div>
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
                    type="password"
                    name="password"
                    id="password"
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
                <div>Search result</div>
                <div>List of Users</div>
                <div>About the project</div>
              </Stack>

              {openlistSearch && (
                <div
                  onClick={openResultSearch}
                  className="listUser-resultSearch"
                >
                  Search result
                </div>
              )}
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
