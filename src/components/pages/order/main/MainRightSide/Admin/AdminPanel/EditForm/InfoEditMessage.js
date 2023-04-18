import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../../../theme";

export default function InfoEditMessage() {
  return (
    <EditMessageStyled>
      Cliquer sur un produit du menu pour le modifier&nbsp;
      <span>en temps réel</span>
    </EditMessageStyled>
  );
}

const EditMessageStyled = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  display: flex;
  align-items: center;
  position: relative;
  top: 3px;
  height: 35px;
  color: ${theme.colors.primary};
  font-size: 15px;
  span {
    text-decoration: underline;
  }
`;
