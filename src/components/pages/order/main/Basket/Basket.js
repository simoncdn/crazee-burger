import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketTotal from "./BasketTotal";
import BasketFooter from "./BasketFooter";
import BasketBody from "./BasketBody";

export default function Basket() {
  return (
    <BasketStyled>
      <BasketTotal />
      <BasketBody />
      <BasketFooter />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  /* box-shadow: ${theme.shadows.strong}; */
  box-shadow: 8px 0px 20px 8px rgba(0, 0, 0, 0.2) inset; // alternative plus proche de la maquette
  background-color: ${theme.colors.background_white};
`;
