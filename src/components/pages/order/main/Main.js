import React, { useContext } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import { theme } from "../../../../theme";
import Admin from "./admin/Admin";
import GlobalContext from "../../../../context/GlobalContext";
import EmptyMenu from "./EmptyMenu";

export default function Main() {
  const { menu, isAdminMode } = useContext(GlobalContext);

  return (
    <MainStyled>
      {menu.length > 0 ? <Menu /> : <EmptyMenu />}
      {isAdminMode && <Admin />}
    </MainStyled>
  );
}

const MainStyled = styled.div`
  flex: 1;
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: 1fr;
  overflow-y: scroll;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`;
