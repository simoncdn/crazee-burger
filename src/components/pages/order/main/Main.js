import React, { useContext } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import { theme } from "../../../../theme";
import Admin from "./admin/Admin";
import GlobalContext from "../../../../context/GlobalContext";

export default function Main() {
  const { isAdminMode } = useContext(GlobalContext);

  return (
    <MainStyled>
      <Menu />
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
  box-shadow: ${theme.shadows.strong};
`;
