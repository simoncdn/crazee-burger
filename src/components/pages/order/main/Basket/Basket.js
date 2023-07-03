import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketBody from "./BasketBody";
import Footer from "./Footer";
import Total from "./Total";
export default function Basket() {
  return (
    <BasketStyled>
      <Total />

      <BasketBody />

      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  overflow-y: hidden;
`;
