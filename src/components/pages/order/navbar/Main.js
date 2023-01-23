import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Main() {
  return <MainStyled className="main"></MainStyled>;
}

const MainStyled = styled.div`
  background-color: ${theme.colors.background_white};
  width: 100%;
  flex-grow: 1;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`;
