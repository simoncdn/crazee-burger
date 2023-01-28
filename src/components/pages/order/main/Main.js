import React, { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../../context/GlobalContext";
import Panel from "../panel/Panel";
import Menu from "./Menu";
import { theme } from "../../../../theme";

export default function Main() {
  const { isWindowPanel, isAdminMode } = useContext(GlobalContext);

  return (
    <MainStyled>
      <Menu />
      <div className={isAdminMode ? "open" : "close"}>
        <Panel className={isWindowPanel ? "max-height" : "min-height"} />
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  flex: 1;
  background: ${theme.colors.background_white};
  z-index: 100;
  display: grid;
  grid-template-columns: 1fr;
  overflow-y: scroll;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  .open {
    display: block;
  }
  .close {
    display: none;
  }
  .max-height {
    height: 292px;
  }
  .min-height {
    height: 42px;
  }
`;
