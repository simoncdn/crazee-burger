import React, { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../../context/GlobalContext";
import Panel from "../panel/Panel";
import Menu from "./Menu";
import { theme } from "../../../../theme";

export default function Main() {
  const { isAdminMode } = useContext(GlobalContext);

  return (
    <MainStyled>
      <Menu />
      {isAdminMode ? <Panel /> : null}
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
