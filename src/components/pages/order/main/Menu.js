import React from "react";
import styled from "styled-components";
import fakeData from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../theme";

export default function Menu() {
  console.log(fakeData);
  return <MenuStyled>Menu</MenuStyled>;
}

const MenuStyled = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${theme.colors.blue};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  padding: 50px 50px 150px;
`;
