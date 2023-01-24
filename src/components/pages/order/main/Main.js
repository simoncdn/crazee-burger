import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";

export default function Main() {
  return (
    <MainStyled>
      <Menu />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
`;
