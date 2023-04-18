import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Admin from "./MainRightSide/Admin/Admin";
import GlobalContext from "../../../../context/GlobalContext";
import Menu from "./MainRightSide/Menu/Menu";

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
