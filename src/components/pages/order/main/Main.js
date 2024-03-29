import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Admin from "./MainRightSide/Admin/Admin";
import GlobalContext from "../../../../context/GlobalContext";
import Menu from "./MainRightSide/Menu/Menu";
import Basket from "./Basket/Basket";

export default function Main() {
  const { isAdminMode } = useContext(GlobalContext);

  return (
    <MainStyled>
      <Basket />
      <div className="right-side">
        <Menu />
        {isAdminMode && <Admin />}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  flex: 1;
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: 25% 1fr;
  overflow: hidden;
  box-shadow: ${theme.shadows.strong};
  .right-side {
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
  }
`;
