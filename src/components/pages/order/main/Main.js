import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Basket from "./Basket";
import Menu from "./Menu";

export default function Main() {
  return (
    <MainStyled>
      {/* <Basket /> */}
      <Menu />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
`;
