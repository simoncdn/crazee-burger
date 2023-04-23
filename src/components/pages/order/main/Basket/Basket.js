import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketTotal from "./BasketTotal";
import BasketFooter from "./BasketFooter";
import BasketBody from "./BasketBody";
import { formatPrice } from "../../../../../utils/maths";
export default function Basket() {
  return (
    <BasketStyled>
      <BasketTotal totalPrice={formatPrice(0)} />
      <BasketBody />
      <BasketFooter />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
`;
